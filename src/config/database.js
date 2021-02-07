module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'delivery',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};
