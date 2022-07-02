/* eslint-disable import/extensions */
import GameSavingLoader from './gameSavingLoader.js';

GameSavingLoader.load().then((saving) => console.log('Get result: ', saving), (error) => console.log(error));
