// eslint-disable-next-line import/extensions
import GameSavingLoader from './gameSavingLoader.js';

try {
  const result = await GameSavingLoader.load();
  console.log('Get result: ', result);
} catch (error) {
  console.log(error);
}
