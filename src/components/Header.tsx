import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

interface HeaderProps {
  title: string;
  subtitle?: string;
  dueDate?: string;
}

export default function Header({ title, subtitle, dueDate }: HeaderProps) {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#041E42] via-[#0B2C6F] to-[#003865]" />
      <div className="absolute inset-0 penn-gradient opacity-80" />
      <div className="absolute -top-32 right-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute top-28 -left-24 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-wrap items-center justify-between gap-4 text-primary-foreground/85">
          <Badge
            variant="secondary"
            className="bg-white/10 text-primary-foreground border border-white/20 px-4 py-1.5"
          >
            Penn State University
          </Badge>

          {dueDate && (
            <Badge
              variant="warn"
              className="flex items-center gap-2 bg-white/15 text-primary-foreground border border-white/20 px-4 py-1.5"
            >
              <Calendar className="w-3 h-3" />
              Due: {dueDate}
            </Badge>
          )}
        </div>

        <div className="mt-12 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-primary-foreground">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-primary-foreground/85 max-w-2xl md:max-w-3xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </header>
  );
}