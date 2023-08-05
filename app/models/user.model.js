const { DataTypes: dt } = require('sequelize')
const db = require('./sequelize.config')

const Usuario = db.define('Usuario', {
  nombre: {
    type: dt.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isAlpha: {
        msg: 'El nombre sólo puede contener letras'
      },
      len: {
        args: [2, 45],
        msg: 'El nombre no puede ser de largo menor a 2'
      }
    }
  },
  balance: {
    type: dt.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
}, {timestamps: true})
