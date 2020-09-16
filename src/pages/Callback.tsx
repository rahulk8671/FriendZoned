import { gql, useQuery } from '@apollo/client';
import React from 'react';

const getQuery = () => {
  const authCode = window.location.search.split('&')[0].split('=')[1];

  return gql`
    query GetToken {
      token(code: "${decodeURIComponent(authCode)}") {
        accessToken,
        refreshToken,
        expiresIn,
        userInfo {
          name,
          picture
        }
      }
    }
  `;
}

function Callback() {

  const { loading, error, data } = useQuery(getQuery());

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error(error)
     return <p>Error :(</p>;
  }

  const { name, picture } = data.token.userInfo;

  return <>
    <h1>{`Hi ${name}`}</h1>
    <img src={picture} alt="user avatar"/>
  </>
}

export default Callback;
