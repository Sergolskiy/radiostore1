// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  cors: true,
  base_url: 'http://localhost:8000/admin',
  domain_url:  'http://localhost:8000'
  // base_url: 'http://localhost.charlesproxy.com:8000/admin',
  // domain_url:  'http://localhost.charlesproxy.com:8000'
};
