const env = process.env.NODE_ENV;

switch (env) {
  case 'production':
    module.exports = {
      PORT: process.env.PORT,
      DBURI: process.env.DBURI
    };
    break;
  default:
    module.exports = {
      PORT: 3001,
      DBURI: 'mongodb://localhost:27017/projectpm'
    };
}
