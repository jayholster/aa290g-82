
import WeekLayout from "@/components/layout/WeekLayout";

import { Link } from "react-router-dom";
import Header from "@/components/Header";

import ReasoningModelsComparison from "@/components/ReasoningModelsComparison";
import ShowdownPrompts from "@/components/ShowdownPrompts";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ChevronLeft, ChevronRight, ExternalLink, FileText } from "lucide-react";

const Week2 = () => {
  const weekNumber = 2;
  const title = "Week 2: Text-Based AI Models";
  const dueDate = "Sun Sep 7, 11:59 PM";
  return (

    <WeekLayout weekNumber={weekNumber} title={title} dueDate={dueDate}>
      <section>

    <div className="min-h-screen bg-background">
      <Header title={title} subtitle="AA290G: Creating & Learning with AI" dueDate={dueDate} />

      <main className="relative pb-20">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-primary/15 via-background to-background -z-10" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 space-y-16">
          <section>
            <Card className="rounded-3xl border border-border/60 bg-card/70 backdrop-blur">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs uppercase tracking-[0.2em]">
                      {title}
                    </Badge>
                    <p className="text-sm text-ink-muted">
                      AA290G: Creating & Learning with AI · {dueDate}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {prevWeek && (
                      <Button variant="outline" asChild className="rounded-full px-6">
                        <Link to={`/week${prevWeek}`} className="flex items-center gap-2">
                          <ChevronLeft className="h-4 w-4" />
                          Week {prevWeek}
                        </Link>
                      </Button>
                    )}
                    <Button variant="outline" asChild className="rounded-full px-6">
                      <Link to="/" className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Course Home
                      </Link>
                    </Button>
                    {nextWeek && (
                      <Button variant="default" asChild className="rounded-full px-6">
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

          <section>

            <Card className="rounded-3xl border border-border/60 bg-card/70 backdrop-blur">
              <CardContent className="p-0">
                <ReasoningModelsComparison />
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="rounded-3xl border border-border/60 bg-card/70 backdrop-blur">
              <CardContent className="p-10 space-y-16">
                <div className="text-center space-y-4">
                  <h2 className="text-4xl font-light text-foreground">Reasoning Showdown</h2>
                  <p className="text-lg text-ink-muted">
                    Compare reasoning models head-to-head in structured team activities.
                  </p>
                </div>

                <div className="grid gap-8">
                  <Card className="border border-border/60 bg-background/90 backdrop-blur">
                    <CardContent className="p-8 space-y-8">
                      <h3 className="text-2xl font-medium text-foreground flex items-center gap-3">
                        <Calendar className="w-6 h-6" />
                        Team Setup (4 students per group)
                      </h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        {["ChatGPT Instant User", "Claude User", "Gemini 2.5 User", "ChatGPT Extension User"].map(
                          (label, index) => (
                            <div
                              key={label}
                              className="flex items-center gap-4 rounded-2xl border border-primary/20 bg-primary/10 p-4"
                            >
                              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-medium">
                                {index + 1}
                              </div>
                              <div>
                                <span className="font-semibold text-foreground block">{label}</span>
                                <span className="text-sm text-muted-foreground">
                                  {index === 0 && "Uses the instant model"}
                                  {index === 1 && "Uses Claude"}
                                  {index === 2 && "Uses Gemini"}
                                  {index === 3 && "Uses Thinking mode plus one extension"}
                                </span>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-border/60 bg-background/90 backdrop-blur">
                    <CardContent className="p-8 space-y-8">
                      <h3 className="text-2xl font-medium text-foreground">Rules</h3>
                      <div className="grid gap-8 md:grid-cols-3">
                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold text-foreground">Prompt Delivery</h4>
                          <ul className="space-y-2 text-muted-foreground">
                            <li>• Instructor announces one prompt at a time</li>
                            <li>• Each role inputs the same prompt into their assigned tool</li>
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold text-foreground">Group Response Recording</h4>
                          <ul className="space-y-2 text-muted-foreground">
                            <li>
                              • After reviewing the four responses, the team decides together which was best
                            </li>
                            <li>• Record that winning response and a short explanation in the shared Google Doc</li>
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold text-foreground">Ranking</h4>
                          <ul className="space-y-2 text-muted-foreground">
                            <li>• Teams must rank all four responses (1st–4th)</li>
                            <li>• Rankings and explanations go into the shared Google Doc</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border border-border/60 bg-background/90 backdrop-blur">
                  <CardContent className="p-8">
                    <ShowdownPrompts />
                  </CardContent>
                </Card>


                <Card className="task-card-accent">

                <Card className="border border-border/60 bg-background/90 backdrop-blur">

                  <CardContent className="p-8 space-y-6">
                    <h3 className="text-2xl font-medium text-foreground">Data Analysis Prompt</h3>
                    <div className="rounded-2xl border border-border/40 bg-muted/40 p-6">
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Here's a dataset from a class activity where 6 groups ranked responses from ChatGPT Instant, Claude,
                        Gemini 2.5, and ChatGPT Extension across multiple prompts. Analyze it by:
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Calculating how often each tool placed 1st, 2nd, 3rd, or 4th overall</li>
                        <li>• Creating a summary table that shows average rank per tool</li>
                        <li>• Identifying which prompts had the most disagreement across groups (highest variance in rankings)</li>
                        <li>
                          • Giving a short narrative on patterns: e.g., did one tool win more in science prompts vs analogy prompts?
                        </li>
                        <li>• Visualizing the results (bar charts for average rank, heatmap for tool performance across prompts)</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="rounded-3xl border border-border/60 bg-card/70 backdrop-blur">
              <CardContent className="p-10 space-y-10">
                <div className="text-center space-y-4">
                  <h2 className="text-4xl font-light text-foreground">Extended Tools</h2>
                  <p className="text-lg text-ink-muted">
                    Explore advanced reasoning capabilities for specialized tasks.
                  </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                  <Card className="border border-border/60 bg-background/90 backdrop-blur">
                    <CardContent className="p-8 space-y-6">
                      <h3 className="text-2xl font-medium text-foreground flex items-center gap-3">
                        <FileText className="w-6 h-6 text-accent" />
                        Deep Research
                      </h3>
                      <div className="space-y-6 text-muted-foreground">
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-3">What it does:</h4>
                          <p>
                            Breaks a problem into sub-questions, pulls from multiple sources (papers, PDFs, web), and synthesizes
                            answers into a long-form, evidence-based explanation.
                          </p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-3">Goal:</h4>
                          <p>Accuracy, comprehensiveness, citations.</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-3">Feels like:</h4>
                          <p>A student writing a mini research paper after reading a stack of articles.</p>
                        </div>
                        <div className="rounded-2xl border border-accent/30 bg-accent/10 p-4">
                          <h4 className="font-semibold text-foreground mb-3">Strengths:</h4>
                          <ul className="space-y-1">
                            <li>• Reliable references and citations</li>
                            <li>• Stronger at "what do we know about X?" questions</li>
                            <li>• Good for class tasks where you want breadth and detail</li>
                          </ul>
                        </div>
                        <div className="rounded-2xl border border-destructive/30 bg-destructive/10 p-4">
                          <h4 className="font-semibold text-foreground mb-3">Limitations:</h4>
                          <ul className="space-y-1">
                            <li>• Slower than an instant chat</li>
                            <li>• Overkill for quick answers or brainstorming</li>
                            <li>• Needs quality prompts and follow-ups to avoid filler</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-border/60 bg-background/90 backdrop-blur">
                    <CardContent className="p-8 space-y-6">
                      <h3 className="text-2xl font-medium text-foreground flex items-center gap-3">
                        <FileText className="w-6 h-6 text-primary" />
                        Project Astra (Google I/O demo)
                      </h3>
                      <div className="space-y-6 text-muted-foreground">
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-3">What it does:</h4>
                          <p>
                            A prototype assistant that sees, listens, and responds in real-time with context-aware explanations
                            and actions across devices.
                          </p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-3">Goal:</h4>
                          <p>Faster multi-modal reasoning without losing detail.</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-3">Feels like:</h4>
                          <p>A lab partner who can look around the room, note objects, and help live.</p>
                        </div>
                        <div className="rounded-2xl border border-accent/30 bg-accent/10 p-4">
                          <h4 className="font-semibold text-foreground mb-3">Strengths:</h4>
                          <ul className="space-y-1">
                            <li>• Speaks while drawing on visuals</li>
                            <li>• Tracks context across turns seamlessly</li>
                            <li>• Bridges real-time feedback with code or design help</li>
                          </ul>
                        </div>
                        <div className="rounded-2xl border border-destructive/30 bg-destructive/10 p-4">
                          <h4 className="font-semibold text-foreground mb-3">Limitations:</h4>
                          <ul className="space-y-1">
                            <li>• Demo stage — not widely available yet</li>
                            <li>• Requires strong hardware and connectivity</li>
                            <li>• Watch privacy, as it processes continuous audio/video</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </section>

    </WeekLayout>

        </div>
      </main>

      <footer className="border-t border-border/60 bg-background/80 py-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
          <div className="flex-1">
            {prevWeek && (
              <Link to={`/week${prevWeek}`}>
                <Button variant="outline" className="gap-2 rounded-full">
                  <ChevronLeft className="w-4 h-4" />
                  Week {prevWeek}
                </Button>
              </Link>
            )}
          </div>
          <Link to="/">
            <Button variant="ghost" className="rounded-full">
              Course Home
            </Button>
          </Link>
          <div className="flex flex-1 justify-end">
            {nextWeek && (
              <Link to={`/week${nextWeek}`}>
                <Button variant="outline" className="gap-2 rounded-full">
                  Week {nextWeek}
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </footer>
    </div>

  );
};

export default Week2;
