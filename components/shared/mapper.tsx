import { cn } from "@/lib/utils";
import { PiEmpty } from "react-icons/pi";
type RenderItem<T> = (item: T, index: number) => React.ReactNode;

interface MapperProps<T> {
  data?: readonly T[];
  render: RenderItem<T>;
  keyBy?: (item: T, index: number) => React.Key;

  isLoading?: boolean;
  className?: string;
}

export function Mapper<T>({
  data = [],
  render,
  keyBy,
  isLoading = false,
  className,
}: MapperProps<T>) {
  if (isLoading) {
    return (
      <div role="status" aria-live="polite" className="text-center">
        Loading...
      </div>
    );
  }

  if (!data.length && !isLoading) {
    return (
      <div className="flex items-center justify-center flex-col gap-1">
        <PiEmpty size={38} />
        <p className="text-16 font-semibold">No data available</p>
      </div>
    );
  }

  return (
    <ul role="list" className={cn(className)}>
      {data.map((item, index) => (
        <li key={keyBy?.(item, index) ?? index}>{render(item, index)}</li>
      ))}
    </ul>
  );
}
