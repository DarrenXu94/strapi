module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', 'ds251548.mlab.com'),
        srv: env.bool('DATABASE_SRV', false),
        port: env.int('DATABASE_PORT', 51548),
        database: env('DATABASE_NAME', 'strapi'),
        username: env('DATABASE_USERNAME', 'admin'),
        password: env('DATABASE_PASSWORD', 'Admin123'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', 'strapi'),
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  },
});
