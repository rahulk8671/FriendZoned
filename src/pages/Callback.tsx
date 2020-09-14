import React, { useEffect } from 'react';

function Callback() {

  useEffect(() => {
    const authCode = window.location.search.split('&')[0].split('=')[1];
    console.log(authCode);
  }, []);

  return (
    <h1>Hi</h1>
  )
}

export default Callback;
