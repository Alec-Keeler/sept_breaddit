'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Users', [
        {
          username: 'rawahahaha',
          email: 'bananabread@yum.com',
          password: 'banana',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'alterNate',
          email: 'nate@nate.com',
          password: 'potato',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'danYELL',
          email: 'dan@dan.dan',
          password: 'wohqltj0ut',
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
   return queryInterface.bulkDelete('Users', null, {});
  }
};
