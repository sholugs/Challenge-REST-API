import { DataTypes, UUIDV4, Model } from "sequelize";

class Genre extends Model {}

Genre.init({
    name: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    }
})