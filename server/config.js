const env = process.env.NODE_ENV;

module.exports = {
	DB_URI: env === prod ? MONGO_URI : "mongodb://localhost:27017/myproject",
	PORT: env === prod ? process.env.PORT : 3001
};
