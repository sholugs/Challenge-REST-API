require('dotenv').config();
import { Sequelize } from 'sequelize';
import { readdirSync } from 'fs';
import { basename as _basename, join } from 'path';
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/disney`, {
  logging: false, 
  native: false, 
});
const basename = _basename(__filename);

const modelDefiners = [];

readdirSync(join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(join(__dirname, '/models', file)));
  });

modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { Character, Movie, Genre } = sequelize.models;

Character.belongsToMany(Movie, {through: 'CharacterMovie'})
Movie.belongsToMany(Character, {through: 'CharacterMovie'})
Genre.belongsToMany(Movie, {through: 'genreMovie'})

export default {
  ...sequelize.models,
  conn: sequelize,     
};
