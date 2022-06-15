import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { useGetUserAverageSession } from '@/api/users/hooks';

import { ErrorWidget, SpinnerWidget } from '../common';
import { CustomTooltip } from '../tooltip';

export const WidgetAverageSession = () => {
  const {
    response: averageSessions,
    error,
    loading,
  } = useGetUserAverageSession();

  if (loading) {
    return <SpinnerWidget className='widget-average' />;
  }

  if (error || !averageSessions?.sessions.length) {
    return <ErrorWidget className='widget-average' error={error as string} />;
  }

  return (
    <div className='widget-average'>
      <svg width='100%' height='0'>
        <defs>
          <linearGradient
            id='linear'
            x1='0%'
            y1='0%'
            x2='100%'
            y2='0%'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='white' stopOpacity='0.106534' />
            <stop offset='1' stopColor='white' />
          </linearGradient>
        </defs>
      </svg>
      <p className='widget-average__legend'>Durée moyenne des sessions</p>
      <div className='widget-average__chart'>
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart
            data={averageSessions.sessions}
            outerRadius='50%'
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <XAxis dataKey='day' interval='preserveStartEnd' hide />
            <YAxis
              dataKey='sessionLength'
              domain={[0, 'dataMax + 60']}
              tickCount={1}
              hide
            />
            <Tooltip
              content={(props) => <CustomTooltip type='average' {...props} />}
              cursor={{
                stroke: 'rgba(0, 0, 0, 0.1)',
                strokeWidth: 32,
              }}
            />
            <Line
              type='monotone'
              dataKey='sessionLength'
              stroke='url(#linear)'
              strokeWidth={2}
              activeDot={{
                stroke: 'rgba(255,255,255, 0.6)',
                strokeWidth: 10,
                r: 5,
              }}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
        <ul className='label-x'>
          {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((value, idx) => (
            <li key={`week-day-${value}${idx}`}>
              <p>{value}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
