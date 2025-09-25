import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  FileText, 
  ExternalLink,
  Construction,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

interface WeekTemplateProps {
  weekNumber: number;
  title?: string;
  dueDate?: string;
}

export default function WeekTemplate({ weekNumber, title, dueDate }: WeekTemplateProps) {
  const weekTitle = title || `Week ${weekNumber}: TBD`;
  const prevWeek = weekNumber > 1 ? weekNumber - 1 : null;
  const nextWeek = weekNumber < 15 ? weekNumber + 1 : null;

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-14 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/2 right-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <Header
        title={weekTitle}
        subtitle="AA290G: Creating & Learning with AI"
        dueDate={dueDate}
      />

      <div className="relative max-w-4xl mx-auto px-6 py-16 space-y-12">
        <div className="absolute inset-x-0 top-16 -z-10 mx-auto h-[480px] max-w-3xl rounded-[44px] bg-white/60 blur-3xl" />

        {/* Coming Soon Message */}
        <section className="text-center">
          <Card className="glass-panel border border-white/60">
            <CardContent className="px-8 py-12 space-y-6">
              <div className="flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/15 text-primary">
                  <Construction className="w-12 h-12" />
                </div>
              </div>
              <h2 className="text-3xl font-semibold text-ink">Content Coming Soon</h2>
              <p className="text-lg text-ink-muted max-w-2xl mx-auto">
                This week's materials are currently being prepared. Check back closer to the scheduled date for detailed content, assignments, and resources.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button variant="outline" asChild>
                  <a href="#" className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Check Canvas for Updates
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="mailto:jbh6331@psu.edu" className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Contact Instructor
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Placeholder Information */}
        <section>
          <Card className="glass-panel border border-white/60">
            <CardContent className="p-8 space-y-4">
              <h3 className="text-xl font-semibold text-ink">What to Expect</h3>
              <div className="grid gap-3 text-ink-muted text-left">
                <p>• Detailed learning objectives and outcomes</p>
                <p>• Interactive activities and demonstrations</p>
                <p>• Weekly assignment instructions and rubrics</p>
                <p>• Required readings and supplementary resources</p>
                <p>• Discussion prompts and reflection questions</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Navigation */}
        <section>
          <div className="glass-panel rounded-[32px] px-6 py-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              {prevWeek ? (
                <Button variant="outline" asChild>
                  <Link to={`/week${prevWeek}`} className="flex items-center gap-2">
                    <ChevronLeft className="w-4 h-4" />
                    Week {prevWeek}
                  </Link>
                </Button>
              ) : (
                <span />
              )}

              <Button asChild>
                <Link to="/" className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Back to Course Home
                </Link>
              </Button>

              {nextWeek ? (
                <Button variant="outline" asChild>
                  <Link to={`/week${nextWeek}`} className="flex items-center gap-2">
                    Week {nextWeek}
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </Button>
              ) : (
                <span />
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}