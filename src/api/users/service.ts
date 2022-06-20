import { Activity, Average, Performance, User } from '@/ts';

import api from '../api';

const mockUserId = 18;

const urls = {
  getById: `/user/${mockUserId}`,
  getActivity: `/user/${mockUserId}/activity`,
  getAverageSessions: `/user/${mockUserId}/average-sessions`,
  getPerformance: `/user/${mockUserId}/performance`,
};

/**
 * @description get user info by user id
 */
const getById = async (): Promise<User> => api.get(urls.getById);

/**
 * @description get activities datas by user id
 */
const getActivity = async (): Promise<Activity> => api.get(urls.getActivity);

/**
 * @description get average session datas with user id
 */
const getAverageSessions = async (): Promise<Average> =>
  api.get(urls.getAverageSessions);

/**
 * @description get performance datas by user id
 */
const getPerformance = async (): Promise<Performance> =>
  api.get(urls.getPerformance);

/**
 * @description This is the users service with all endpoints that we used
 *
 *
 * **First we define the mock user id:**
 * ```
 * const mockUserId = 18
 * ```
 *
 * **We abstract the urls for change them easily**
 *
 * ```
 * const urls = {
 * getById: `/user/${mockUserId}`
 * }
 * ```
 *
 * **Finally all methods is passing in the usersService object
 * and you call them like this:**
 * ```
 * usersService.getById()
 * ```
 */
export const usersService = {
  getById,
  getActivity,
  getAverageSessions,
  getPerformance,
};
