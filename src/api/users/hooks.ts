import { useApi } from '@/hooks';

import { Activity, Average, Performance, User } from '@/ts';

import { usersService } from './service';

export const useGetUserById = () =>
  useApi<User>({
    service: usersService.getById,
    name: 'useGetUserById',
  });

export const useGetUserActivity = () =>
  useApi<Activity>({
    service: usersService.getActivity,
    name: 'useGetUserActivity',
    errorMessage: 'votre activité en cours de calcul.',
  });

export const useGetUserAverageSession = () =>
  useApi<Average>({
    service: usersService.getAverageSessions,
    name: 'useGetUserAverageSession',
    errorMessage: "Pas de données pour l'instant...",
  });

export const useGetUserPerformance = () =>
  useApi<Performance>({
    service: usersService.getPerformance,
    name: 'useGetUserPerformance',
    errorMessage: 'Une erreur est survenue',
  });
