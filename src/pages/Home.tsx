import React from 'react';
import { Tile } from '../components/Tile';

function Home() {

  const onClick = () => {
    const queryParams: {[key: string]: string} = {
      response_type: 'code',
      client_id: '687576156020-53qjqor43g43huc6n7g5m91i4ib9sgr3.apps.googleusercontent.com',
      scope: 'openid profile email',
      redirect_uri: 'http://localhost:3000/callback',
      access_type: 'offline',
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
		<div className="h-full">
			<p className="">Coming soon...</p>  
      <Tile />
      <div className="col s12 m6 offset-m3 center-align">
          <a className="oauth-container btn darken-4 white black-text" onClick={onClick} style={{textTransform:'none'}}>
              <div className="left">
                  <img width="20px" style={{marginTop:'7px', marginRight:'8px'}} alt="Google sign-in" 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
              </div>
              Login with Google
          </a>
      </div>
		</div>
    </div>
  )
}

export default Home;
