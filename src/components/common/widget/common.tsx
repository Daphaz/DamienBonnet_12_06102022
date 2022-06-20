import { Spinner } from '@/components/common';

export type SpinnerWidgetProps = {
  className: string;
};

export type ErrorProps = SpinnerWidgetProps & { error: string };

/**
 * This is the common spinner widget component
 * @category Widget
 * @subcategory common
 */
export const SpinnerWidget = ({ className }: SpinnerWidgetProps) => (
  <div className={className}>
    <Spinner />
  </div>
);

/**
 * This is the common handle error widget component
 * @category Widget
 * @subcategory common
 */
export const ErrorWidget = ({ className, error }: ErrorProps) => (
  <div className={className}>
    <p className={`${className}__error`}>{error}</p>
  </div>
);
