type Props = {
  label: string;
  className?: string;
  light?: boolean;
};

export function SectionEyebrow({ label, className = '', light }: Props) {
  return (
    <div className={`flex items-center gap-2 mb-3 ${className}`}>
      <div className={`w-4 h-0.5 ${light ? 'bg-yellow' : 'bg-yellow'}`} aria-hidden />
      <span
        className={`font-headline font-bold tracking-wide text-sm ${light ? 'text-white' : 'text-green'}`}
      >
        {label}
      </span>
    </div>
  );
}
