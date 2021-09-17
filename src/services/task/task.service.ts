import { TaskModel } from '~/data/models';
import { api } from '~/infra/http/api-client/api-client';

const apiPath = '/tasks';

async function getTasks(): Promise<TaskModel[]> {
  const { data } = await api.get<TaskModel[]>(`${apiPath}`);
  return data;
}

async function getTask(id?: number | string): Promise<TaskModel> {
  const { data } = await api.get<TaskModel>(`${apiPath}/${id}`);
  return data;
}

const createTask = async (body: TaskModel): Promise<void> => {
  const { data } = await api.post(`${apiPath}`, body);
  return data;
};

const updateTask = async (
  id: number | string,
  body: TaskModel
): Promise<void> => {
  const { data } = await api.post(`${apiPath}/${id}`, body);
  return data;
};

const removeTask = async (id: number | string): Promise<void> => {
  const { data } = await api.delete(`${apiPath}/${id}`);
  return data;
};

export const taskService = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  removeTask,
};
