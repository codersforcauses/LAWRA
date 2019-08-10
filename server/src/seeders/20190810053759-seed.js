'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'dTrees',
      [
        {
          id: 'intro2',
          message: 'What is your legal problem?',
          trigger: 'choices',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('dTrees', null, {});
  }
};
