require('dotenv').config();

module.exports = {

  // Раскоментировать, и указать свои данные для запуска локально
 
  // development: {
  //   username: "Пользователь вашей БД",
  //   password: "Пароль вашего пользователя БД",
  //   database: "Название вашей БД",
  //   host: "127.0.0.1",
  //   dialect: "postgres"
  // },

  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: {rejectUnauthorized: false}
    }
  },
};
