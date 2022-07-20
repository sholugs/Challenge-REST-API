import { DataTypes, Model, UUIDV4 } from "sequelize";

class Movie extends Model {}

Movie.init({

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING
    },
    rating: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize,
    modelName: 'Movie'
})