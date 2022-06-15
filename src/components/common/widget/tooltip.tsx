import { TooltipProps } from 'recharts';
import {
  NameType,
  ValueType,
} from 'recharts/types/component/DefaultTooltipContent';

interface CustomTooltipProps extends TooltipProps<ValueType, NameType> {
  type: 'activity' | 'average';
}

export const CustomTooltip = ({
  active,
  payload,
  type,
}: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className='custom-tooltip'>
        {payload.map(({ name, value }, idx) => {
          const contentActivity =
            name === 'kilogram' ? `${value}kg` : `${value}Kcal`;
          const contentAverageSession = `${value} min`;

          const content =
            type === 'activity' ? contentActivity : contentAverageSession;

          return <p key={`tooltip-${name}${idx}`}>{content}</p>;
        })}
      </div>
    );
  }

  return null;
};
