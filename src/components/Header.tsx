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

      <div className="absolute inset-0 bg-gradient-to-br from-[#031b3f] via-[#0a2f60] to-[#0f3a76]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(13,58,119,0.35),transparent_70%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white/85 via-white/40 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-center justify-between gap-4 text-white/90">
          <Badge
            variant="secondary"
            className="border border-white/25 bg-white/10 px-4 py-1.5 text-white/90 backdrop-blur"

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

              className="flex items-center gap-2 border border-white/20 bg-white/15 px-4 py-1.5 text-white"
            >
              <Calendar className="h-3 w-3" />
              Due: {dueDate}
            </Badge>

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

        <div className="mt-12 grid gap-8 text-white md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              {title}
            </h1>
            {subtitle && (
              <p className="max-w-2xl text-lg text-white/85 md:text-xl">
                {subtitle}
              </p>
            )}
          </div>

          <div className="hidden md:flex justify-end">
            <div className="rounded-3xl border border-white/25 bg-white/10 px-6 py-4 text-sm text-white/80 backdrop-blur">
              <p className="font-medium uppercase tracking-[0.28em] text-white">Course Overview</p>
              <p className="mt-2 leading-relaxed">
                AA290G: Creating & Learning with AI
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}