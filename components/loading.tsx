export default function Loading() {
  return (
    <div className="fixed z-60 inset-0 size-full bg-black/10 backdrop-blur-sm flex items-center justify-center">
      <LoadingCard />
    </div>
  );
}
export function LoadingCard() {
  return (
    <div className="flex items-center gap-2  bg-background p-2 rounded-md">
      <span className="loader size-[20px] rounded-full relative" />
      <p className="text-sm">Loading...</p>
    </div>
  );
}
