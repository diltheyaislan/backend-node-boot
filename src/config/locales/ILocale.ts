export default interface ILocale {
  app: {
    errors: {
      internalServer: string;
    };
  };

  /* Middlewares */
  middlewares: {
    ensureAuthenticated: {
      JWTtokenMissing: string;
      InvalidJWTToken: string;
    };
  };

  /* Auth */
  auth: {
    invalidCredentials: string;
  };

  /* Mail */
  mail: {
    errorSendingEmail: string;
    subject: {
      userActivation: string;
    };
  };

  /* Resources */
  resources: {
    user: string;
    users: {
      alreadyActivated: string;
      requestPasswordTokenExpired: string;
      userNotFound: string;
    };
  };

  /* Validation */
  validation: {
    invalidUUID: string;
    resourceNotFound: string;
    invalidValue: string;
    emailAlreadyUsed: string;
    invalidCurrentPassword: string;
    oldPasswordIsRequired: string;
    oldPasswordNotMatch: string;
    onlyImageJpgPngAccepted: string;
  };
}
