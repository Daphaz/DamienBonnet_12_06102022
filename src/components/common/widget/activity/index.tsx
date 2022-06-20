import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { useGetUserActivity } from '@/api/users/hooks';

import { LabelLegendList } from './label-legend';
import { ErrorWidget, SpinnerWidget } from '../common';
import { CustomTooltip } from '../tooltip';

/**
 * Tis is the widget chart Avtivity
 * @category Widget
 */
export const WidgetActivity = () => {
  const { response: activity, error, loading } = useGetUserActivity();

  if (loading) {
    return <SpinnerWidget className='widget-activity' />;
  }

  if (error || !activity) {
    return <ErrorWidget className='widget-activity' error={error as string} />;
  }

  return (
    <div className='widget-activity'>
      <div className='widget-activity__legend'>
        <p>Activité quotidienne</p>

        <LabelLegendList />
      </div>

      <div className='widget-activity__chart'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart
            data={activity.sessions.map(({ day, ...rest }) => ({
              day: new Date(day).getDate(),
              ...rest,
            }))}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray='3 3' vertical={false} />
            <XAxis
              dataKey='day'
              axisLine={false}
              tickLine={false}
              tickSize={16}
            />
            <YAxis
              yAxisId='right'
              dataKey='kilogram'
              orientation='right'
              axisLine={false}
              tickLine={false}
              tickSize={30}
              type='number'
              domain={['dataMin - 1', 'dataMax + 1']}
              tickCount={4}
              interval='preserveStartEnd'
            />
            <YAxis yAxisId='left' tickLine={false} axisLine={false} hide />
            <Tooltip
              content={(props) => <CustomTooltip type='activity' {...props} />}
            />
            <Bar
              yAxisId='right'
              dataKey='kilogram'
              fill='var(--clr-black)'
              barSize={7}
              radius={[3, 3, 0, 0]}
            />
            <Bar
              yAxisId='left'
              dataKey='calories'
              fill='var(--clr-primary)'
              barSize={7}
              radius={[3, 3, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
