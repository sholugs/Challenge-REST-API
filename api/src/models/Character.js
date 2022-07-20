import { DataTypes, Model, UUID4 } from 'sequelize'

class Character extends Model {}

Character.init({

    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER
    },
    weight: {
        type: DataTypes.INTEGER
    },
    history: {
        type: DataTypes.TEXT
    },

}, {
    sequelize,
    modelName: 'Character'
})


