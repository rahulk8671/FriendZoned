import * as React from 'react';

export interface IGoogleButtonProps {}

const QUERY_PARAMS_MAP = {
  response_type: 'code',
  client_id:
    '687576156020-53qjqor43g43huc6n7g5m91i4ib9sgr3.apps.googleusercontent.com',
  scope: 'openid profile email',
  redirect_uri: 'http://localhost:3000/callback',
  access_type: 'offline',
};

const getUrl = (queryParamsMap: { [key: string]: string }) => {
  const queryParams = Object.keys(queryParamsMap)
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(queryParamsMap[key])}`
    )
    .join('&');

  return 'https://accounts.google.com/o/oauth2/v2/auth?' + queryParams;
};

export function GoogleButton(props: IGoogleButtonProps) {
  const onClick = () => {
    const queryParamsMap: { [key: string]: string } = QUERY_PARAMS_MAP;
    window.location.replace(getUrl(queryParamsMap));
  };

  return (
    <div className="col s12 m6 offset-m3 center-align">
      <button
        className="oauth-container btn darken-4 white black-text"
        onClick={onClick}
        style={{ textTransform: 'none' }}
      >
        <div className="left">
          <img
            width="20px"
            style={{ marginTop: '7px', marginRight: '8px' }}
            alt="Google sign-in"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
          />
        </div>
        Login with Google
      </button>
    </div>
  );
}
