interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'MrMzd0W5MzlFSH2tpG2cty42gkrskOC7',
  domain: 'neverest.eu.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};