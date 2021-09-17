import { useQuery, UseQueryResult } from 'react-query';

import { TaskModel } from '~/data/models';
import { taskService } from '~/services';

const { getTasks } = taskService;

export function useTasks(): UseQueryResult<TaskModel[]> {
  return useQuery('tasks', getTasks, {
    staleTime: 1000 * 10, // 10 seconds
  });
}
