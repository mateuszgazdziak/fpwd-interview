const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Invoice = sequelize.define(
    'Invoice',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },

      invoiceNumber: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },

      netAmount: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },

      vatPercent: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },

      issueDate: {
        allowNull: false,
        type: DataTypes.DATE,
      },

      paymentDate: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      freezeTableName: true,
    }
  );

  return Invoice;
};
