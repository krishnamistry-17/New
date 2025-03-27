import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Auth = () => {
  return (
    <div className="">
      <GoogleLogin
          onSuccess={(credentialResponse) => {
          const decode = jwtDecode(credentialResponse.credential);
          console.log(decode);
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
      
    </div>
  );
};

export default Auth;

// import React from "react";
// import { useGoogleLogin } from "@react-oauth/google";
// const Auth = () => {
//   const login = useGoogleLogin({
//     onSuccess: (tokenResponse) => console.log(tokenResponse),
//   });
//   return (
//     <div>
//       <button className="border border-black-light rounded-md p-[10px]" onClick={() => login()}>Sign in with Google 🚀</button>
//     </div>
//   );
// };

// export default Auth;
