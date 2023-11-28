import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users/QuincyLarson";
const accessToken = "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"; // Replace with your actual GitHub access token

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((userData) => {
        const { login, id } = userData;
        setUser({ login, id });
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>Error....</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{user.login}</h1>
      <img
        src="https://avatars.githubusercontent.com/u/985197?v=4"
        alt="avatar"
      />
      <h2>{user.id}</h2>
      <a href="https://www.freeCodeCamp.org">Bio</a>
    </div>
  );
};

export default MultipleReturns;
