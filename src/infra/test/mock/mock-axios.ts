import axios, { AxiosResponse } from 'axios';
import faker from 'faker';

export const mockHttpResponse = (): AxiosResponse => ({
  data: faker.random.objectElement(),
  status: faker.datatype.number(),
  statusText: '',
  config: {},
  headers: {},
});

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  mockedAxios.request.mockClear().mockResolvedValue(mockHttpResponse());
  return mockedAxios;
};
