/* eslint-disable import/extensions */
import read from '../task1/reader.js';
import json from '../task1/parser.js';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const parsedData = await json(data);
      return parsedData;
    } catch (error) {
      return error;
    }
  }
}
