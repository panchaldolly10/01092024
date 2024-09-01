// src/authConfig.ts
export const msalConfig = {
    auth: {
      clientId: "f4bf28d8-aca8-42e7-8a38-b5f92d110524", // Replace with your Azure AD app's Client ID
      authority: "https://login.microsoftonline.com/5359fb89-35b0-43d7-b95a-27f076347e47", // Replace with your Tenant ID
      redirectUri: "http://localhost:3000", // Replace with your redirect URI
    },
    cache: {
      cacheLocation: "sessionStorage",
      storeAuthStateInCookie: false,
    },
  };
  