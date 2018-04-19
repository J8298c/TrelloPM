const env = process.env.NODE_ENV;

const dev = {
	app: {
		port: 3001
	},
	db: {
		host: "localhost",
		port: 27017,
		name: "jello"
	}
};

const test = {
	app: {
		port: "process.env.PORT"
	},
	db: {
		dbUri: "process.env.DB_URI"
	}
};

const prod = {
	app: {
		port: "process.env.PORT"
	},
	db: {
		dbUri: "process.env.DB_URI"
	}
};

const config = {
	dev,
	test,
	prod
};

module.exports = dev;
