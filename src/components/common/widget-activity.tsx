import { useCallback, useEffect, useState } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from 'recharts';
import {
  NameType,
  ValueType,
} from 'recharts/types/component/DefaultTooltipContent';

import { usersService } from '@/api/users.service';
import { Activity } from '@/ts';

interface LabelLegendProps {
  color: 'black' | 'primary';
  label: string;
}

interface LabelsMockData extends LabelLegendProps {
  id: string;
}

const labels: LabelsMockData[] = [
  {
    color: 'black',
    label: 'Poids (kg)',
    id: 'label-legend-1',
  },
  {
    color: 'primary',
    label: 'Calories brûlées (kCal)',
    id: 'label-legend-2',
  },
];

const LabelLegend = ({ color, label }: LabelLegendProps) => (
  <li className='widget-activity__listItem'>
    <div className={`circle ${color}`} />
    <span>{label}</span>
  </li>
);

const CustomTooltip = ({
  active,
  payload,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className='custom-tooltip'>
        {payload.map(({ name, value }) => {
          const content = name === 'kilogram' ? `${value}kg` : `${value}Kcal`;
          return <p key={`tooltip-${name}`}>{content}</p>;
        })}
      </div>
    );
  }

  return null;
};

export const WidgetActivity = () => {
  const [activity, setActivity] = useState<Activity | undefined>(undefined);

  const fetchActivity = useCallback(async () => {
    try {
      const data = await usersService.getActivity();

      setActivity(data);
    } catch (e) {
      console.error('fetchActivity: ', e);
    }
  }, []);

  useEffect(() => {
    fetchActivity();
  }, [fetchActivity]);

  return (
    <div className='widget-activity'>
      {activity ? (
        <>
          <div className='widget-activity__legend'>
            <p>Activité quotidienne</p>

            <ul className='widget-activity__list'>
              {labels.map(({ id, ...rest }) => (
                <LabelLegend key={id} {...rest} />
              ))}
            </ul>
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
                <Tooltip content={(props) => <CustomTooltip {...props} />} />
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
        </>
      ) : (
        <p className='widget-activity__error'>
          Une erreur est survenue, veuillez nous excuser du gêne occasionné.
        </p>
      )}
    </div>
  );
};
