'use strict';
module.exports = (sequelize, DataTypes) => {
  const Lead = sequelize.define('Lead', {
    email: DataTypes.STRING
  }, {});
  Lead.associate = function(models) {
    // associations can be defined here
  };
  return Lead;
};