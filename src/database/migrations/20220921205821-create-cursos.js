module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('cursos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('cursos');
  }
};
