import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  strong?: boolean;
}

export function GlassCard({ children, className, hover = false, strong = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl p-6',
        strong ? 'glass-strong' : 'glass',
        hover && 'glass-hover cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  );
}
