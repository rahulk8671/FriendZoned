import React from 'react';
import { GoogleButton } from '../../components/GoogleButton';
import styles from './Home.module.scss';

function Home() {
  return (
    <div className={`${styles.body} h-screen overflow-hidden`}>
      <h1>Friend Zoned</h1>
      <p className="">
        Make friends in groups of three. This is not a dating app
      </p>
      <GoogleButton />
    </div>
  );
}

export default Home;
