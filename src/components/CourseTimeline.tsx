import { Badge } from "@/components/ui/badge";
import { CalendarDays, ExternalLink } from "lucide-react";

interface TimelineItem {
  week: number;
  date: string;
  title: string;
  task?: string;
  points?: number;
  canvasLink?: string;
  isSpecial?: boolean;
}

const timelineData: TimelineItem[] = [
  {
    week: 1,
    date: "Aug 27",
    title: "Getting Started",
    task: "Task 1: Account Set Up",
    points: 10,
    canvasLink: "#task1"
  },
  {
    week: 2,
    date: "Sep 3",
    title: "Text-Based AI Models",
    task: "Task 2: Problem Identification",
    points: 10
  },
  {
    week: 3,
    date: "Sep 10",
    title: "AI Ethics & Bias",
    task: "Task 3: Analyzing Bias",
    points: 10
  },
  {
    week: 4,
    date: "Sep 17",
    title: "Diffusion Basics",
    task: "Task 4: Animated Sequences",
    points: 10
  },
  {
    week: 5,
    date: "Sep 24",
    title: "Video & World Models",
    task: "Task 5: Short Film",
    points: 10
  },
  {
    week: 6,
    date: "Oct 1",
    title: "Vibecoding Artifacts",
    task: "Task 6: MVP",
    points: 10
  },
  {
    week: 7,
    date: "Oct 8",
    title: "Custom GPTs",
    task: "Task 7: Make a Custom GPT",
    points: 10
  },
  {
    week: 8,
    date: "Oct 15",
    title: "Agents",
    task: "(in-class focus)",
    isSpecial: true
  },
  {
    week: 9,
    date: "Oct 22",
    title: "Palmer Museum",
    task: "Task 8: Augmented Reality",
    points: 10
  },
  {
    week: 10,
    date: "Oct 29",
    title: "Design-Based Research",
    task: "Task 9: Research Proposal",
    points: 10
  },
  {
    week: 11,
    date: "Nov 5",
    title: "Project Workshop",
    task: "Task 10: Project Update 1",
    points: 10
  },
  {
    week: 12,
    date: "Nov 12",
    title: "Individual Meetings",
    task: "(no async task)",
    isSpecial: true
  },
  {
    week: 13,
    date: "Nov 19",
    title: "Project Workshop",
    task: "Task 11: Project Update 2",
    points: 10
  },
  {
    week: 14,
    date: "Dec 3",
    title: "Final Project Presentations",
    task: "(in-class)",
    isSpecial: true
  },
  {
    week: 15,
    date: "Dec 10",
    title: "Final Project Presentations",
    task: "Task 12: Final",
    points: 30
  }
];

export default function CourseTimeline() {
  return (
    <div className="glass-panel border border-white/60 rounded-[32px] p-8">
      <div className="relative pl-10">
        <div className="absolute left-4 top-2 bottom-6 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />
        <div className="space-y-8">
          {timelineData.map((item) => (
            <div key={item.week} className="relative flex flex-col gap-4 rounded-3xl border border-white/60 bg-white/70 px-6 py-5 shadow-[0_18px_45px_-28px_rgba(4,30,66,0.6)]">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/90 to-primary text-primary-foreground font-semibold tracking-tight">
                    Wk{item.week}
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-ink-muted">
                        {item.date}
                      </span>
                      {item.canvasLink && (
                        <a
                          href={item.canvasLink}
                          className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Canvas
                        </a>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-ink">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {item.points && (
                    <Badge variant="default" className="bg-primary/10 text-primary">
                      {item.points} pts
                    </Badge>
                  )}
                  {item.isSpecial && (
                    <Badge variant="accent" className="bg-accent/15 text-accent">
                      <CalendarDays className="w-3 h-3 mr-1" />
                      In-Class
                    </Badge>
                  )}
                </div>
              </div>
              <p className="text-ink-muted text-sm">
                {item.task}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}