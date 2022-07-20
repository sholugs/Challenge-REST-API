import { listen } from './src/app.js';
import { conn } from './src/db.js';

// Syncing all the models at once.
conn.sync({ alter: false }).then(() => {
  listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});