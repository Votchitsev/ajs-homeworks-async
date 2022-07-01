/* eslint-disable import/extensions */
import read from './reader.js';
import json from './parser.js';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      resolve(read());
    })
      .then((response) => json(response))
      .then(
        (parsedData) => parsedData,
      );
  }
}
