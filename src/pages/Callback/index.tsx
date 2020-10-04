import { gql, useQuery } from '@apollo/client';
import React from 'react';
import Button from '../../components/resusable/Button';
import styles from './Callback.module.scss';
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
};

function Callback() {
  // const { loading, error, data } = useQuery(getQuery());

  // if (loading) return <p>Loading...</p>;
  // if (error) {
  //   console.error(error);
  //   return <p>Error :(</p>;
  // }

  // const { name, picture } = data.token.userInfo;

  return (
    <div className={styles.page}>
      {/* <h1>{`Hi ${name}`}</h1> */}
      {/* <img src={picture} alt="user avatar" /> */}
      <Button label="Make Tribe"></Button>
    </div>
  );
}

export default Callback;
