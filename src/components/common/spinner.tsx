export type SpinnerProps = {
  /**
   * width of svg
   */
  width?: number;
  /**
   * height of svg
   */
  height?: number;
};

/**
 * This is the spinner component for loading state
 * @category Common
 */
export const Spinner = ({ width = 50, height = 50 }: SpinnerProps) => {
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
