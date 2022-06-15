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

const LabelLegendItem = ({ color, label }: LabelLegendProps) => (
  <li className='widget-activity__listItem'>
    <div className={`circle ${color}`} />
    <span>{label}</span>
  </li>
);

export const LabelLegendList = () => (
  <ul className='widget-activity__list'>
    {labels.map(({ id, ...rest }) => (
      <LabelLegendItem key={id} {...rest} />
    ))}
  </ul>
);
