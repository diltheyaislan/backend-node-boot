export default {
  app: {
    errors: {
      internalServer: 'Internal server error',
    },
  },

  /* Middlewares */
  middlewares: {
    ensureAuthenticated: {
      JWTtokenMissing: 'JWT token is missing',
      InvalidJWTToken: 'JWT token is invalid',
    },
  },

  /* Auth */
  auth: {
    invalidCredentials: 'Invalid credentials',
  },

  /* Mail */
  mail: {
    errorSendingEmail: 'There was an error sending the email',
    subject: {
      userActivation: 'Account activation',
    },
  },

  /* Resources */
  resources: {
    user: 'User',
    users: {
      alreadyActivated: 'User already active',
      requestPasswordTokenExpired: 'Password change request token expired',
      userNotFound: 'User not found',
    },
  },

  /* Validation */
  validation: {
    invalidUUID: 'UUID value is invalid',
    resourceNotFound: ':resource not found',
    invalidValue: 'Invalid value',
    emailAlreadyUsed: 'E-mail address is already in use',
    invalidCurrentPassword: 'Ccurrent password is invalid',
    oldPasswordIsRequired: 'Old password is required to set the new password',
    oldPasswordNotMatch: 'Old password does not match',
    onlyImageJpgPngAccepted: 'Only JPG or PNG images are accepted',
  },
};
