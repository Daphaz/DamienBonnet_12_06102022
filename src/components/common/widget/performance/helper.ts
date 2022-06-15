import { Performance } from '@/ts';

const getTranslateKindFr = (label: string): string => {
  switch (label) {
    case 'cardio':
      return 'Cardio';
    case 'intensity':
      return 'Intensité';
    case 'speed':
      return 'Vitesse';
    case 'strength':
      return 'Force';
    case 'endurance':
      return 'Endurance';
    case 'energy':
      return 'Energie';

    default:
      return 'label';
  }
};

export const formatPerformanceData = (performances: Performance) => {
  return performances.data
    .sort((a, b) => b.kind - a.kind)
    .map(({ kind, value }) => ({
      value,
      kind: getTranslateKindFr(performances.kind[kind]),
    }));
};
