import { Activity, Average, User } from '@/ts';

import api from './api';

const mockUserId = 18;

const urls = {
  getById: `/user/${mockUserId}`,
  getActivity: `/user/${mockUserId}/activity`,
  getAverageSessions: `/user/${mockUserId}/average-sessions`,
  getPerformance: `/user/${mockUserId}/performance`,
};

const getById = async (): Promise<User> => api.get(urls.getById);
const getActivity = async (): Promise<Activity> => api.get(urls.getActivity);
const getAverageSessions = async (): Promise<Average> =>
  api.get(urls.getAverageSessions);
const getPerformance = async () => api.get(urls.getPerformance);

export const usersService = {
  getById,
  getActivity,
  getAverageSessions,
  getPerformance,
};
