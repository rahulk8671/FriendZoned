import React from 'react';

function Home() {

  const onClick = () => {
    // window.auth2.grantOfflineAccess().then(signInCallback);

    const queryParams = {
      response_type: 'code',
      client_id: '687576156020-53qjqor43g43huc6n7g5m91i4ib9sgr3.apps.googleusercontent.com',
      scope: 'openid email',
      redirect_uri: 'http://localhost:3000/callback'
    };
    const qs = Object.keys(queryParams)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
    .join('&');


    window.location.replace('https://accounts.google.com/o/oauth2/v2/auth?'+qs)
  }

  return (
    <div className="h-screen overflow-hidden">
		<div className="bg-green-500 h-12 px-10 flex justify-center">
			<p className="text-white text-2xl m-auto">Friend Zoned</p>	  
		</div>
		<div className="h-full flex justify-center">
			<p className="m-auto">Coming soon...</p>  
      <button onClick={onClick}>Sign in with Google</button>
		</div>
    </div>
  )
}

export default Home;
