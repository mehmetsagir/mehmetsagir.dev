export function Status() {
  return (
    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2">
      <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
      <span className="text-sm font-medium text-green-400">
        Available for freelance work
      </span>
    </div>
  );
}
