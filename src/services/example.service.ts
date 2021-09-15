import { api } from '~/configs/api.service';
import { ExampleModel } from '~/data/models';

const apiPath = '/example';

const getAll = async (): Promise<ExampleModel[]> => {
  const { data } = await api.get<ExampleModel[]>(`${apiPath}`);
  return data;
};

const getById = async (id?: number | string): Promise<ExampleModel> => {
  const { data } = await api.get<ExampleModel>(`${apiPath}/${id}`);
  return data;
};

const create = async (body: ExampleModel): Promise<void> => {
  const { data } = await api.post(`${apiPath}`, body);
  return data;
};

const update = async (
  id: number | string,
  body: ExampleModel
): Promise<void> => {
  const { data } = await api.post(`${apiPath}/${id}`, body);
  return data;
};

const remove = async (id: number | string): Promise<void> => {
  const { data } = await api.delete(`${apiPath}/${id}`);
  return data;
};

export const exampleService = { getAll, getById, create, update, remove };
