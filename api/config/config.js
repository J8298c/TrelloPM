let env = process.env.NODE_ENV;

switch (env) {
  case "production":
    module.exports = {
      DBURI: process.env.DBURI,
      PORT: process.env.PORT
    };
    break;
  case "test":
    module.exports = {
      DBURI: process.env.DBURI,
      PORT: process.env.PORT
    };
    break;
  default:
    module.exports = {
      PORT: 3001,
      DBURI: "mongodb://localhost:27017/projectpm"
    };
    break;
}
