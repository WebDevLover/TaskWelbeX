const listData = require("../../listData");

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Routes', listData, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Routes', null, {});
  }
};
