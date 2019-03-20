/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('testsetresult', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
        autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: 'Result'
    },
    startTimestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    duration: {
      type: DataTypes.TIME,
      allowNull: false
    },
    Testset_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'testset',
        key: 'id'
      }
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'testsetresult'
  });
};