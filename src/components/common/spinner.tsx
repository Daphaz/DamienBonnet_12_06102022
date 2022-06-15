type Props = {
  width?: number;
  height?: number;
};

export const Spinner = ({ width = 50, height = 50 }: Props) => {
  return (
    <div className='spinner'>
      <svg className='spinner__spin' viewBox={`0 0 ${width} ${height}`}>
        <circle
          className='spinner__path'
          cx={width / 2}
          cy={height / 2}
          r='20'
          fill='none'
          strokeWidth='5'
        ></circle>
      </svg>
    </div>
  );
};
