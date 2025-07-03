import { cn } from '@/lib/utils';

type SkeletonProps = React.HTMLAttributes<HTMLDivElement>

export function Skeleton({
  className,
  ...props
}: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse bg-gray-200 rounded-md',
        className
      )}
      {...props}
    />
  );
}
