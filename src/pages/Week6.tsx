import WeekLayout from "@/components/layout/WeekLayout";

import WeekLayout from "@/components/layout/WeekLayout";

import { Link } from "react-router-dom";
import Header from "@/components/Header";


import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Atom,
  Binary,

  ChevronLeft,
  ChevronRight,

  CircuitBoard,
  ExternalLink,
  Film,
  Layers,
  Rocket,
  Sparkles,
  Wand2
} from "lucide-react";

const Week6 = () => {
  const weekNumber = 6;
  const title = "Week 6: Vibecoding Artifacts";
  const dueDate = "Sun Oct 5, 11:59 PM";
  return (
    <WeekLayout weekNumber={weekNumber} title={title} dueDate={dueDate}>
      <section className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
  return (
    <WeekLayout weekNumber={weekNumber} title={title} dueDate={dueDate}>
      <section className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">

  const prevWeek = weekNumber > 1 ? weekNumber - 1 : null;
  const nextWeek = weekNumber < 15 ? weekNumber + 1 : null;

  return (
    <div className="min-h-screen bg-background">
      <Header title={title} subtitle="AA290G: Creating & Learning with AI" dueDate={dueDate} />

      <main className="relative pb-20">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-primary/20 via-background to-background -z-10" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 space-y-16">
          <section>
            <Card className="rounded-3xl border border-border/60 bg-card/70 backdrop-blur">
              <CardContent className="p-6 md:p-10">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="space-y-2">
                    <Badge variant="outline" className="rounded-full px-4 py-1 text-xs tracking-[0.28em] uppercase">
                      {title}
                    </Badge>
                    <p className="text-sm text-ink-muted">AA290G: Creating & Learning with AI · {dueDate}</p>
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

          <section className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">


            <Card className="rounded-3xl border border-white/40 bg-card/80 shadow-lg shadow-primary/10 backdrop-blur">
              <CardContent className="p-8 space-y-5">
                <div className="flex items-center gap-3 text-primary">
                  <Sparkles className="h-6 w-6" />
                  <p className="text-sm font-medium tracking-[0.3em] uppercase">Vibecoding Orientation</p>
                </div>
                <p className="text-xl text-ink">Who hasn’t wished they were a software developer at some point? If you agree, you’re in the right place. This module will guide you through creating, modifying, and hosting AI-generated code artifacts—interactive pieces of code that can be instantly generated, tested, and refined using AI.</p>
                <p className="text-xl text-ink">You don’t need a background in coding to be able to code. AI can help you create it without needing to write everything yourself, or writing anything at all. All you need to do is describe what you want, experiment with the results, and refine through conversation. Some call this process “vibe-coding,” or prompting general requests and allow the model maximum agency to develop a tool. Perhaps, by the end of this workshop, you might identify as a vibe-coder. I hope you’ll be able to build a website, game, learning module, or something else using AI.</p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border border-white/40 bg-card/80 backdrop-blur">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-3 text-primary">
                  <Rocket className="h-6 w-6" />
                  <CardTitle className="text-lg tracking-[0.2em] uppercase text-ink">Quick Start</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-base text-ink">
                <div className="rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3 text-sm text-primary">
                  🌟 Quick Start:
                </div>
                <p>The fastest way to generate, test, and host an artifact is Claude, which can render and host your code instantly. If you want a more permanent, publicly shareable version, the next best option is GitHub Pages.</p>
                <div className="rounded-2xl border border-accent/20 bg-accent/10 px-4 py-3 text-sm text-accent">
                  💡 Advanced options like Replit and Vercel allow more flexibility but require extra setup and coding familiarity required.
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="rounded-3xl border border-white/40 bg-card/80 backdrop-blur">
              <CardHeader>
                <div className="flex items-center gap-3 text-primary">
                  <Atom className="h-6 w-6" />
                  <CardTitle className="text-2xl text-ink">What Are AI-Generated Artifacts?</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-lg text-ink">
                <p>AI-generated artifacts are structured outputs—functional code that AI generates in response to your request. Instead of just getting a block of text, you receive something interactive, editable, and instantly usable.</p>
                <p>These artifacts can range from small web components to full interactive tools, allowing you to experiment, refine, and even deploy projects without needing to manually write code from scratch. Just describe your idea, let the AI generate an initial version, and refine it step by step. Examples include:</p>
                <ul className="space-y-2 text-base text-ink-muted">
                  <li className="flex items-start gap-2">
                    <Layers className="mt-1 h-4 w-4 text-primary" />
                    <span>📌 Web Components – Buttons, search bars, forms, interactive widgets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Film className="mt-1 h-4 w-4 text-primary" />
                    <span>📌 Visualizations – Charts, diagrams, animations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="mt-1 h-4 w-4 text-primary" />
                    <span>📌 Mini Apps – Simple games, calculators, quizzes, tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CircuitBoard className="mt-1 h-4 w-4 text-primary" />
                    <span>📌 Dynamic Webpages – AI-generated HTML/CSS layouts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border border-white/40 bg-card/80 backdrop-blur">
              <CardContent className="space-y-4 text-base text-ink">
                <div className="rounded-2xl border border-border/60 bg-background/70 p-5 text-sm leading-relaxed text-ink-muted">
                  Before you create your own, take a look at these examples:
                </div>
                <div className="space-y-3 text-base">
                  <p>Example 1: Interactive Data Dashboard</p>
                  <p>Example 2: Self-Aware Snake Game</p>
                  <p>Example 3: Interactive Learning Module</p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="grid gap-8 md:grid-cols-2">
            <Card className="rounded-3xl border border-white/40 bg-card/80 backdrop-blur">
              <CardHeader className="space-y-2">
                <Badge variant="outline" className="w-fit rounded-full px-3 py-1 text-xs tracking-[0.3em] uppercase">
                  Example 1
                </Badge>
                <CardTitle className="text-ink text-xl">Interactive Data Dashboard</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 text-base text-ink">
                <div className="aspect-video overflow-hidden rounded-2xl border border-dashed border-primary/40 bg-gradient-to-br from-primary/15 via-background to-background flex items-center justify-center text-sm text-primary/70">
                  Video Placeholder
                </div>
                <p>
                  This dashboard analyzes raw Qualtrics survey data with visualization. The CSV file was uploaded directly from Qualtrics without any cleaning or preparation. Notice how easy it is to prompt Claude to develop and render a web-based tool, fix bugs in the code, and publish to static link.
                </p>
                <Button variant="outline" className="rounded-full" asChild>
                  <a href="#" className="flex items-center gap-2">
                    View Dashboard
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border border-white/40 bg-card/80 backdrop-blur">
              <CardHeader className="space-y-2">
                <Badge variant="outline" className="w-fit rounded-full px-3 py-1 text-xs tracking-[0.3em] uppercase">
                  Example 2
                </Badge>
                <CardTitle className="text-ink text-xl">Self-Aware Snake Game</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 text-base text-ink">
                <div className="aspect-video overflow-hidden rounded-2xl border border-dashed border-primary/40 bg-gradient-to-br from-primary/15 via-background to-background flex items-center justify-center text-sm text-primary/70">
                  Video Placeholder
                </div>
                <p>
                  This interactive game demonstrates how artifacts can be remixed and evolved through conversation. This example highlights the remix function, which calls the code object back into the Claude environment for the user to iterate on. Try it yourself, click remix at the bottom of any Claude artifact, like this Snake game, and make your own updates!
                </p>
                <Button variant="outline" className="rounded-full" asChild>
                  <a href="#" className="flex items-center gap-2">
                    View Snake Game
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border border-white/40 bg-card/80 backdrop-blur md:col-span-2">
              <CardHeader className="space-y-2">
                <Badge variant="outline" className="w-fit rounded-full px-3 py-1 text-xs tracking-[0.3em] uppercase">
                  Example 3
                </Badge>
                <CardTitle className="text-ink text-xl">Interactive Learning Module</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-center">
                <div className="space-y-4 text-base text-ink">
                  <div className="aspect-video overflow-hidden rounded-2xl border border-dashed border-primary/40 bg-gradient-to-br from-primary/15 via-background to-background flex items-center justify-center text-sm text-primary/70">
                    Video Placeholder
                  </div>
                  <p>
                    OpenAI offers stiff competition to Claude 3.7 Sonnet. This learning module was created with their o3-mini-high coding model. HTML were pasted into the index file of a github page, which was ultimately hosted at the link above.
                  </p>
                  <Button variant="outline" className="rounded-full" asChild>
                    <a href="#" className="flex items-center gap-2">
                      View Learning Module
                    </a>
                  </Button>
                </div>
                <div className="rounded-3xl border border-border/60 bg-background/60 p-6 text-sm leading-relaxed text-ink-muted">
                  Claude-generated artifacts and other coding objects offer new ways to construct, manipulate, and interpret digital environments. These outputs can evolve with iterative prompts, adapt to new contexts, and integrate into larger systems. As you engage with the workshop activity below, consider how AI reshapes not just what we build, but how we think about the process and ownership of creation itself.
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <Card className="rounded-3xl border border-white/40 bg-card/80 backdrop-blur">
              <CardHeader className="space-y-2">
                <div className="flex items-center gap-3 text-primary">
                  <Wand2 className="h-6 w-6" />
                  <CardTitle className="text-ink text-xl">Plug for Lovable and other No-Code Options</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-base text-ink">
                <p>Lovable is a full-stack AI playground that lets you build web apps, generative art, and interactive experiences with natural language prompts — no coding required. Check out https://lovable.dev/ and try it for free.</p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border border-white/40 bg-card/80 backdrop-blur">
              <CardHeader className="space-y-2">
                <div className="flex items-center gap-3 text-primary">
                  <Binary className="h-6 w-6" />
                  <CardTitle className="text-ink text-xl">Workshop Activity</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 text-base text-ink">
                <p>Workshop Activity</p>
                <div className="rounded-2xl border border-primary/30 bg-primary/10 px-5 py-4 text-sm text-primary">
                  artifacts workshop
                </div>
              </CardContent>
            </Card>
          </section>


    </WeekLayout>


    </WeekLayout>

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
      </main>
    </div>

  );
};

export default Week6;
