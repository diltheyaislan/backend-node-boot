export default {
  /* Middlewares */
  middlewares: {
    ensureAuthenticated: {
      JWTtokenMissing: 'O token JWT não foi encontrado',
      InvalidJWTToken: 'O token JWT é inválido',
    },
  },

  /* Auth */
  auth: {
    invalidCredentials: 'Crendenciais inválidas',
  },

  /* Mail */
  mail: {
    errorSendingEmail: 'Ocorreu um erro ao enviar o email',
    subject: {
      userActivation: 'Ativação de conta',
    },
  },

  /* Resources */
  resources: {
    user: 'Usuário',
    users: {
      alreadyActivated: 'Usuário já ativo',
    },
  },

  /* Validation */
  validation: {
    invalidUUID: 'Valor UUID inválido',
    resourceNotFound: ':resource não encontrado',
    invalidValue: 'Valor inválido',
    emailAlreadyUsed: 'Endereço de e-mail já está em uso',
    invalidCurrentPassword: 'Senha atual inválida',
    onlyImageJpgPngAccepted: 'Somente imagens JPG ou PNG são aceitas',
  },
};
