module.exports = {
  apps : [{
    name: 'helium-ts',
    script: 'dist/server.js',

    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    //args: 'one two',
    instances: 2,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    port: 4120,
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};
