import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts';

import { useWindowSize } from '@/hooks/useWindowSize';

import { useGetUserPerformance } from '@/api/users/hooks';

import { formatPerformanceData } from './helper';
import { ErrorWidget, SpinnerWidget } from '../common';

export const WidgetPerformance = () => {
  const { width } = useWindowSize();
  const { response: performances, loading, error } = useGetUserPerformance();

  if (loading) {
    return <SpinnerWidget className='widget-performance' />;
  }

  if (error || !performances) {
    return (
      <ErrorWidget className='widget-performance' error={error as string} />
    );
  }

  return (
    <div className='widget-performance'>
      <ResponsiveContainer
        width='100%'
        height='100%'
        className='widget-performance__chart'
      >
        <RadarChart
          outerRadius={width > 1340 ? 75 : 50}
          data={formatPerformanceData(performances)}
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
    </div>
  );
};
