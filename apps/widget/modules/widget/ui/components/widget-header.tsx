import { cn } from "@workspace/ui/lib/utils";

interface WidgetHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const WidgetHeader = ({ children, className }: WidgetHeaderProps) => {
  return (
    <header
      className={cn(
        "bg-gradient-to-b from-primary to-[#0B63F3] p-4 text-primary-foreground",
        className
      )}
    >
      {children}
    </header>
  );
};
