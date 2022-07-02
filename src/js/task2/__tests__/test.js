// eslint-disable-next-line import/extensions
import GameSavingLoader from '../gameSavingLoader.js';

const expectedData = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

test('test GameSavingLoader from task 2', async () => {
  expect.assertions(1);
  const data = await GameSavingLoader.load();
  console.log(data);
  expect(data).toBe(expectedData);
});
