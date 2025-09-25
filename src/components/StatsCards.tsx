import { Card, CardContent } from "@/components/ui/card";
import { FileText, Trophy, Users } from "lucide-react";

interface StatCard {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
  color: 'primary' | 'accent' | 'warn';
}

const stats: StatCard[] = [
  {
    title: "Weekly Tasks",
    value: "110",
    subtitle: "11 tasks × 10 pts",
    icon: <FileText className="w-6 h-6" />,
    color: 'primary'
  },
  {
    title: "Final Project",
    value: "30",
    subtitle: "Portfolio showcase",
    icon: <Trophy className="w-6 h-6" />,
    color: 'accent'
  },
  {
    title: "Total Points",
    value: "140",
    subtitle: "Available this semester",
    icon: <Users className="w-6 h-6" />,
    color: 'warn'
  }
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="glass-panel border border-white/60 transition-transform duration-300 hover:-translate-y-1"
        >
          <CardContent className="p-8">
            <div className="flex items-center justify-between gap-6">
              <div className="space-y-1">
                <p className="text-sm font-medium text-ink-muted">
                  {stat.title}
                </p>
                <p className="text-3xl font-semibold text-ink">
                  {stat.value}
                </p>
                <p className="text-sm text-ink-muted">
                  {stat.subtitle}
                </p>
              </div>
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                  stat.color === 'primary'
                    ? 'bg-primary/15 text-primary'
                    : stat.color === 'accent'
                      ? 'bg-accent/15 text-accent'
                      : 'bg-warn/15 text-warn'
                }`}
              >
                {stat.icon}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}