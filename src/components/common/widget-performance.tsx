import { useCallback, useEffect, useState } from 'react';
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts';

import { usersService } from '@/api/users.service';
import { Performance } from '@/ts';

export const WidgetPerformance = () => {
  const [performances, setPerformances] = useState<Performance | undefined>(
    undefined
  );

  const fetchPerformanceDatas = useCallback(async () => {
    try {
      const datas = await usersService.getPerformance();

      setPerformances(datas);
    } catch (e) {
      console.error('fetchPerformanceDatas: ', e);
    }
  }, []);

  useEffect(() => {
    fetchPerformanceDatas();
  }, [fetchPerformanceDatas]);

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

  return (
    <div className='widget-performance'>
      {performances ? (
        <ResponsiveContainer
          width='100%'
          height='100%'
          className='widget-performance__chart'
        >
          <RadarChart
            outerRadius={50}
            data={performances.data
              .sort((a, b) => b.kind - a.kind)
              .map(({ kind, value }) => ({
                value,
                kind: getTranslateKindFr(performances.kind[kind]),
              }))}
            margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <PolarGrid radialLines={false} />
            <PolarAngleAxis
              dataKey='kind'
              stroke='white'
              dy={4}
              tickLine={false}
            />

            <Radar
              dataKey='value'
              stroke='var(--clr-primary)'
              fill='var(--clr-primary)'
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      ) : (
        <p className='widget-performance__error'>Une erreur est survenue</p>
      )}
    </div>
  );
};
