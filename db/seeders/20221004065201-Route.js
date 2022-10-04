module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Routes', [{
        date: '05.10.2022',
        name: 'Москва',
        count: '1',
        distance: '2214',
     },
     {
      date: '05.10.2022',
      name: 'Москва',
      count: '2',
      distance: '2214',
     },
     {
      date: '05.10.2022',
      name: 'Москва',
      count: '3',
      distance: '2214',
     },
     {
      date: '05.10.2022',
      name: 'Москва',
      count: '4',
      distance: '2214',
     },
     {
      date: '05.10.2022',
      name: 'Москва',
      count: '5',
      distance: '2214',
     },
     {
      date: '05.10.2022',
      name: 'Москва',
      count: '6',
      distance: '2214',
     },
     {
      date: '05.10.2022',
      name: 'Москва',
      count: '7',
      distance: '2214',
     },
     {
      date: '05.10.2022',
      name: 'Москва',
      count: '8',
      distance: '2214',
     },
     {
      date: '05.10.2022',
      name: 'Москва',
      count: '9',
      distance: '2214',
     },
     {
      date: '05.10.2022',
      name: 'Москва',
      count: '10',
      distance: '2214',
     },
     {
      date: '05.10.2022',
      name: 'Москва',
      count: '11',
      distance: '2214',
     },], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Routes', null, {});
  }
};
