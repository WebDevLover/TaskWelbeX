module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Routes', [{
        date: '05.10.2022',
        name: 'Москва',
        count: '20',
        distance: '2214',
     },
     {
      date: '05.10.2022',
      name: 'Москва',
      count: '20',
      distance: '2214',
     },
     {
      date: '05.10.2022',
      name: 'Москва',
      count: '20',
      distance: '2214',
     },
     {
      date: '05.10.2022',
      name: 'Москва',
      count: '20',
      distance: '2214',
     },
     {
      date: '05.10.2022',
      name: 'Москва',
      count: '20',
      distance: '2214',
     },
     {
      date: '05.10.2022',
      name: 'Москва',
      count: '20',
      distance: '2214',
     },
     {
      date: '05.10.2022',
      name: 'Москва',
      count: '20',
      distance: '2214',
     },
     {
      date: '05.10.2022',
      name: 'Москва',
      count: '20',
      distance: '2214',
     },
     {
      date: '05.10.2022',
      name: 'Москва',
      count: '20',
      distance: '2214',
     },
     {
      date: '05.10.2022',
      name: 'Москва',
      count: '20',
      distance: '2214',
     },
     {
      date: '05.10.2022',
      name: 'Москва',
      count: '20',
      distance: '2214',
     },], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Routes', null, {});
  }
};
