'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Subbreaddits', [
        {
          title: 'General Bread Questions',
          description: 'Here is a place to ask bread questions',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Pictures of Bread',
          description: 'Here is a place to post pictures of bread',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Subbreaddits', null, {});
  }
};
