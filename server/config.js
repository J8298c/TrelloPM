const env = process.env.NODE_ENV;

switch (env) {
  case 'production':
    module.exports = {
      PORT: process.env.PORT,
      DBURI: process.env.DBURI,
      SECRET: process.env.SECRET
    };
    break;

  case 'test':
    module.exports = {
      PORT: 3002,
      DBURI: 'mongodb://localhost:27017/projectpmtest',
      SECRET: 'Ilovelittledebbie'
    };
    break;

  default:
    module.exports = {
      PORT: 3001,
      DBURI: 'mongodb://localhost:27017/projectpm',
      SECRET: 'Ilovelittledebbie'
    };
}
