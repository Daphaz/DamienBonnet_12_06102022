import { Spinner } from '@/components/common';

type Props = {
  className: string;
};

type ErrorProps = Props & { error: string };

export const SpinnerWidget = ({ className }: Props) => (
  <div className={className}>
    <Spinner />
  </div>
);

export const ErrorWidget = ({ className, error }: ErrorProps) => (
  <div className={className}>
    <p className={`${className}__error`}>{error}</p>
  </div>
);
