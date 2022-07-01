/* eslint-disable import/extensions */
import GameSavingLoader from '../gameSavingLoader.js';

const expectedData = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

test('test GameSavingLoader', async () => {
  const data = await GameSavingLoader.load();
  expect(data).toBe(expectedData);
});
