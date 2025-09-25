import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Mail, 
  Video, 
  Calendar, 
  FileText, 
  ExternalLink,
  BookOpen,
  Clock
} from "lucide-react";

const Home = () => {
  const weeks = Array.from({ length: 15 }, (_, i) => i + 1);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-24 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/3 right-12 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#041E42] via-[#0B2C6F] to-[#003865]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_65%)]" />
        <div className="absolute -top-36 right-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto] items-center">
            <div className="space-y-8 text-primary-foreground">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-semibold leading-tight tracking-tight text-primary-foreground">
                  Creating & Learning with AI
                </h1>
                <p className="text-xl font-medium text-primary-foreground/85">
                  AA290G • Fall 2025
                </p>
              </div>

              <div className="glass-panel inline-flex flex-col items-start gap-1 rounded-2xl px-6 py-5 text-base text-primary-foreground/90">
                <span>Wed 2:30–3:45 • Borland 113 • Dr. Jacob Holster</span>
              </div>
            </div>

            <div className="hidden lg:flex flex-col items-center justify-center">
              <div className="h-40 w-40 rounded-3xl border border-white/30 bg-white/10 backdrop-blur-2xl" />
            </div>
          </div>
        </div>
      </header>

      <div className="relative max-w-6xl mx-auto px-6 py-16 space-y-20">
        <div className="absolute inset-x-0 top-32 -z-10 mx-auto h-[600px] max-w-5xl rounded-[48px] bg-white/60 blur-3xl" />

        {/* Course Description */}
        <section>
          <Card className="glass-panel border border-white/50">
            <CardContent className="p-10">
              <h2 className="text-3xl font-semibold text-ink mb-6">About This Course</h2>
              <div className="space-y-5 text-lg text-ink-muted">
                <p>A hands-on exploration of AI tools for creative and analytical work. Students will create portfolio-ready artifacts while learning to evaluate AI systems critically and ethically.</p>
                <p>This course emphasizes practical experience with AI tools, thoughtful comparison of their capabilities and limitations, and reflection on broader implications for creativity, learning, and society.</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Quick Course Info */}
        <section className="space-y-10">
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="glass-panel border border-white/60">
              <CardContent className="p-8 text-center space-y-3">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <Calendar className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-ink">Schedule</h3>
                <p className="text-sm text-ink-muted">Wednesdays 2:30–3:45</p>
                <p className="text-sm text-ink-muted">Hybrid 50/50</p>
              </CardContent>
            </Card>

            <Card className="glass-panel border border-white/60">
              <CardContent className="p-8 text-center space-y-3">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                  <Clock className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-ink">Deadlines</h3>
                <p className="text-sm text-ink-muted">Weekly tasks due</p>
                <p className="text-sm text-ink-muted">Sundays @ 11:59 PM</p>
              </CardContent>
            </Card>

            <Card className="glass-panel border border-white/60">
              <CardContent className="p-8 text-center space-y-3">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-warn/15 text-warn">
                  <BookOpen className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-ink">Materials</h3>
                <p className="text-sm text-ink-muted">Canvas modules</p>
                <p className="text-sm text-ink-muted">Weekly content</p>
              </CardContent>
            </Card>
          </div>

          <div className="glass-panel rounded-[28px] px-10 py-8">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="outline" size="sm" asChild>
                <a href="mailto:jbh6331@psu.edu" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Dr. Holster
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://psu.zoom.us/j/5207592977" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Video className="w-4 h-4" />
                  Zoom Room Link
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://psu.instructure.com/courses/2421561" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Canvas Course
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link to="/syllabus" className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Course Policies
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Weekly Modules */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-ink">Course Modules</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
            {weeks.map((week) => {
              // Use actual course titles from timeline data
              const getWeekData = (weekNum: number) => {
                const weekData = [
                  { title: "Getting Started", from: "from-blue-600", via: "via-purple-600", to: "to-blue-800" },
                  { title: "Text-Based AI Models", from: "from-emerald-400", via: "via-green-500", to: "to-teal-600" },
                  { title: "AI Ethics & Bias", from: "from-red-500", via: "via-rose-500", to: "to-pink-600" },
                  { title: "Diffusion Basics", from: "from-violet-500", via: "via-purple-500", to: "to-indigo-600" },
                  { title: "World Models & Video Upskilling", from: "from-orange-400", via: "via-amber-500", to: "to-yellow-600" },
                  { title: "Vibecoding Artifacts", from: "from-cyan-400", via: "via-sky-500", to: "to-blue-600" },
                  { title: "Custom GPTs", from: "from-lime-400", via: "via-green-500", to: "to-emerald-600" },
                  { title: "Agents", from: "from-fuchsia-500", via: "via-pink-500", to: "to-rose-600" },
                  { title: "Palmer Museum", from: "from-slate-600", via: "via-gray-600", to: "to-zinc-700" },
                  { title: "Design-Based Research", from: "from-indigo-400", via: "via-blue-500", to: "to-purple-600" },
                  { title: "Project Workshop", from: "from-teal-400", via: "via-cyan-500", to: "to-sky-600" },
                  { title: "Individual Meetings", from: "from-amber-400", via: "via-orange-500", to: "to-red-600" },
                  { title: "Project Workshop", from: "from-green-400", via: "via-emerald-500", to: "to-teal-600" },
                  { title: "Final Presentations", from: "from-purple-500", via: "via-violet-500", to: "to-indigo-600" },
                  { title: "Final Presentations", from: "from-rose-500", via: "via-pink-500", to: "to-red-600" },
                ];
                return weekData[weekNum - 1] || weekData[0];
              };

              const weekData = getWeekData(week);

              return (
                <Card
                  key={week}
                  className="group overflow-hidden border border-white/60 bg-white/75 shadow-[0_24px_55px_-32px_rgba(4,30,66,0.65)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <div
                        className={`h-36 bg-gradient-to-br ${weekData.from} ${weekData.via} ${weekData.to} relative overflow-hidden`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="text-2xl font-semibold tracking-tight">Week {week}</div>
                          <div className="text-sm opacity-90">{weekData.title}</div>
                        </div>
                      </div>
                      <div className="p-5">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full justify-center group-hover:bg-primary group-hover:text-primary-foreground"
                          asChild
                        >
                          <Link to={`/week${week}`} className="flex items-center justify-center gap-2">
                            <FileText className="w-4 h-4" />
                            View Module
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;