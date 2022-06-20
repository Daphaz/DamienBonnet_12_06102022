import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

export interface TodayScoreProps {
  score: number;
}

/**
 * This is the widget chart score component
 * @category Widget
 * @subcategory chart
 */
export const WidgetTodayScore = ({ score }: TodayScoreProps) => {
  return (
    <div className='widget-today-score'>
      <p className='widget-today-score__label'>Score</p>

      <div className='widget-today-score__chart'>
        <ResponsiveContainer width='100%' height='100%' className='rotate'>
          <PieChart>
            <Pie
              data={[{ score }, { score: 1 - score }]}
              dataKey='score'
              outerRadius={80}
              innerRadius={70}
              startAngle={0}
              cornerRadius={10}
            >
              <Cell fill='#FF0000' stroke='#e60000' />
              <Cell fill='transparent' stroke='transparent' />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <p className='legend'>
          {`${score * 100}%`}
          <br />
          <span>de votre objectif</span>
        </p>
      </div>
    </div>
  );
};
