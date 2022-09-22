module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('curso_aluno', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_aluno: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'alunos', key: 'id' }
      },
      id_curso: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'cursos', key: 'id' }
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('curso_aluno');
  }
};
