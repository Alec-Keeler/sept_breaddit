'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Posts', [
        {
          title: 'Is Bread Dope?',
          content: 'Everyone keeps saying bread is dope, so thought I\'d come to where the experts are',
          userId: 1,
          subId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'How to bread?',
          content: 'Plz ELI5 how do I bread???',
          userId: 2,
          subId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Look at this photograph',
          content: 'Of bread stapled to this tree',
          userId: 2,
          subId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Look what I made during the pandemic!',
          content: 'You might be jealous, I hope you don\'t feel sourdough',
          userId: 1,
          subId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Britney is free!',
          content: 'Now she can finally fullfil her true calling of becoming a baker',
          userId: 3,
          subId: 2,
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
   return queryInterface.bulkDelete('Posts', null, {});
  }
};
