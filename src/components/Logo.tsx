export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 20h4l5-10 5 10h4L12 2z" fill="currentColor" />
        <path d="M9 14l3-6 3 6H9z" fill="var(--background)" />
      </svg>
      <span className="font-bold tracking-wider text-sm">ARKVOID</span>
    </div>
  );
}
