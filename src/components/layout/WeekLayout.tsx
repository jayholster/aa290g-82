import { ReactNode } from "react";
import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

interface WeekLayoutProps {
  weekNumber: number;
  title: string;
  dueDate?: string;
  children: ReactNode;
}

export default function WeekLayout({ weekNumber, title, dueDate, children }: WeekLayoutProps) {
  const prevWeek = weekNumber > 1 ? weekNumber - 1 : null;
  const nextWeek = weekNumber < 15 ? weekNumber + 1 : null;

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Header title={title} subtitle="AA290G: Creating & Learning with AI" dueDate={dueDate} />

      <main className="relative pb-24">
        <div className="absolute inset-x-0 top-[-140px] h-[420px] bg-[radial-gradient(circle_at_20%_-10%,rgba(4,30,66,0.16),transparent_60%)]" />
        <div className="absolute inset-x-0 top-[-60px] h-[480px] bg-[radial-gradient(circle_at_80%_-10%,rgba(22,74,137,0.18),transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 h-full bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(248,250,255,0.7)_22%,rgba(245,247,252,0.4)_46%,rgba(245,247,252,0)_70%)]" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 space-y-14">
          <section>
            <Card className="overflow-hidden">
              <CardContent className="px-8 py-8 sm:px-10">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="space-y-4">
                    <Badge variant="secondary" className="bg-primary/5 text-primary">
                      Week {weekNumber}
                    </Badge>
                    <div className="space-y-1">
                      <h2 className="text-3xl font-semibold text-ink">{title}</h2>
                      {dueDate && (
                        <p className="text-sm text-ink-muted">AA290G · Due {dueDate}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    {prevWeek && (
                      <Button variant="outline" asChild className="rounded-full px-5">
                        <Link to={`/week${prevWeek}`} className="flex items-center gap-2">
                          <ChevronLeft className="h-4 w-4" />
                          Week {prevWeek}
                        </Link>
                      </Button>
                    )}
                    <Button variant="outline" asChild className="rounded-full px-5">
                      <Link to="/" className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Course Home
                      </Link>
                    </Button>
                    {nextWeek && (
                      <Button variant="default" asChild className="rounded-full px-5">
                        <Link to={`/week${nextWeek}`} className="flex items-center gap-2">
                          Week {nextWeek}
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {children}
        </div>
      </main>

      <footer className="border-t border-white/60 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            {prevWeek ? (
              <Button variant="ghost" asChild className="rounded-full text-primary">
                <Link to={`/week${prevWeek}`} className="flex items-center gap-2">
                  <ChevronLeft className="h-4 w-4" />
                  Week {prevWeek}
                </Link>
              </Button>
            ) : (
              <span className="text-sm text-muted-foreground">Start of module</span>
            )}
          </div>

          <Button variant="ghost" asChild className="rounded-full text-primary">
            <Link to="/">Course Home</Link>
          </Button>

          <div className="flex items-center gap-3">
            {nextWeek ? (
              <Button variant="ghost" asChild className="rounded-full text-primary">
                <Link to={`/week${nextWeek}`} className="flex items-center gap-2">
                  Week {nextWeek}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            ) : (
              <span className="text-sm text-muted-foreground">More weeks coming soon</span>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
