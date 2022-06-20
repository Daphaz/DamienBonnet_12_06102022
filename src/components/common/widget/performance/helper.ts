import { Performance } from '@/ts';

/**
 * A helper function for translate kind label in french
 * @category Widget
 * @subcategory helper
 */
export const getTranslateKindFr = (label: string): string => {
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

/**
 * This is a format performance data component
 * for the widget chart performance
 * @category Widget
 */
export const formatPerformanceData = (performances: Performance) => {
  return performances.data
    .sort((a, b) => b.kind - a.kind)
    .map(({ kind, value }) => ({
      value,
      kind: getTranslateKindFr(performances.kind[kind]),
    }));
};
