import { Condition } from '@/components/condition';

interface SectionProps {
  condition: boolean;
  title: string;
  children: React.ReactNode;
}

export function Section({ condition, title, children }: SectionProps) {
  return (
    <Condition condition={condition}>
      <div className="flex flex-col gap-2">
        <h4 className="text-sm font-semibold text-gray-300/60">{title}</h4>
        {children}
      </div>
    </Condition>
  );
}
