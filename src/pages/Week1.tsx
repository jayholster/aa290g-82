import { useState } from "react";

import WeekLayout from "@/components/layout/WeekLayout";


import WeekLayout from "@/components/layout/WeekLayout";

import { Link } from "react-router-dom";
import Header from "@/components/Header";


import CourseTimeline from "@/components/CourseTimeline";
import TaskChecklist from "@/components/TaskChecklist";
import StatsCards from "@/components/StatsCards";
import LearningOutcomes from "@/components/LearningOutcomes";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Copy,
  ExternalLink,
  FileText,
  Info,
  Mail,
  MessageCircle,
  Users,
  Video
} from "lucide-react";

const Week1 = () => {
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  const copyUrl = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedUrl(url);
      setTimeout(() => setCopiedUrl(null), 2000);
    } catch (err) {
      console.error("Failed to copy URL:", err);
    }
  };

  const taskItems = [
    {
      name: "Gemini",
      url: "https://gemini.google/students",
      description: "AI Pro for Students / free tier"
    },
    {
      name: "ChatGPT",
      url: "https://chat.openai.com/signup",
      description: "free; Plus recommended if possible"
    },
    {
      name: "Claude",
      url: "https://claude.ai",
      description: "free"
    },
    {
      name: "Lovable",
      url: "https://lovable.dev",
      description: "free tier"
    },
    {
      name: "Udio",
      url: "https://udio.com",
      description: "free plan/trial"
    },
    {
      name: "Leonardo AI",
      url: "https://leonardo.ai",
      description: "free, ~150 fast tokens/day"
    },
    {
      name: "Perplexity",
      url: "https://perplexity.ai/backtoschool",
      description: "Back to School page"
    },
    {
      name: "Firebase Studio",
      url: "https://firebase.google.com/docs/studio",
      description: "free access"
    }
  ];

  return (

    <WeekLayout weekNumber={1} title="Week 1: Getting Started" dueDate="Sun Aug 31, 11:59 PM">
      <section className="grid gap-6 lg:grid-cols-[1.35fr,1fr]">
            <Card className="rounded-3xl border border-border/60 bg-card/70 backdrop-blur">
              <CardContent className="p-8 space-y-6">
                <h2 className="text-2xl font-semibold text-ink">What This Course Is</h2>
                <div className="task-grid">
                  <div className="task-card flex items-start gap-3 p-4">
                    <FileText className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium text-ink">Make</h3>
                      <p className="text-sm text-ink-muted">
                        text, image, music, video—portfolio-ready artifacts
                      </p>
                    </div>

                  </div>
                  <div className="task-card flex items-start gap-3 p-4">

                  </div>
                  <div className="task-card flex items-start gap-3 p-4">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <h3 className="font-medium text-ink">Learn by doing</h3>
                      <p className="text-sm text-ink-muted">weekly mini-tasks + one bigger project</p>
                    </div>
                  </div>
                  <div className="task-card flex items-start gap-3 p-4">
                    <Users className="w-5 h-5 text-warn mt-0.5" />
                    <div>
                      <h3 className="font-medium text-ink">Compare/contrast tools</h3>
                      <p className="text-sm text-ink-muted">strengths, limits, trade-offs</p>
                    </div>
                  </div>
                  <div className="task-card flex items-start gap-3 p-4">
                    <MessageCircle className="w-5 h-5 text-primary mt-0.5" />
                    <div>

    <div className="min-h-screen bg-background">
      <Header
        title="Week 1: Getting Started"
        subtitle="AA290G: Creating & Learning with AI"
        dueDate="Sun Aug 31, 11:59 PM"
      />

      <main className="relative pb-20">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-primary/15 via-background to-background -z-10" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 space-y-16">
          <section>
            <Card className="rounded-3xl border border-border/60 bg-card/70 backdrop-blur">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs uppercase tracking-[0.2em]">
                      Week 1: Getting Started
                    </Badge>
                    <p className="text-sm text-ink-muted">
                      AA290G: Creating & Learning with AI · Sun Aug 31, 11:59 PM
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" asChild className="rounded-full px-6">
                      <Link to="/" className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Course Home
                      </Link>
                    </Button>
                    <Button variant="default" asChild className="rounded-full px-6">
                      <Link to="/week2" className="flex items-center gap-2">
                        Week 2
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="grid gap-6 lg:grid-cols-[1.35fr,1fr]">
            <Card className="rounded-3xl border border-border/60 bg-card/70 backdrop-blur">
              <CardContent className="p-8 space-y-6">
                <h2 className="text-2xl font-semibold text-ink">What This Course Is</h2>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex items-start gap-3 rounded-2xl border border-border/50 bg-background/80 p-4">
                    <FileText className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium text-ink">Make</h3>
                      <p className="text-sm text-ink-muted">
                        text, image, music, video—portfolio-ready artifacts
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-2xl border border-border/50 bg-background/80 p-4">

                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <h3 className="font-medium text-ink">Learn by doing</h3>
                      <p className="text-sm text-ink-muted">weekly mini-tasks + one bigger project</p>
                    </div>
                  </div>

                  <div className="task-card flex items-start gap-3 p-4">

                  <div className="flex items-start gap-3 rounded-2xl border border-border/50 bg-background/80 p-4">

                    <Users className="w-5 h-5 text-warn mt-0.5" />
                    <div>
                      <h3 className="font-medium text-ink">Compare/contrast tools</h3>
                      <p className="text-sm text-ink-muted">strengths, limits, trade-offs</p>
                    </div>
                  </div>

                  <div className="task-card flex items-start gap-3 p-4">
                    <MessageCircle className="w-5 h-5 text-primary mt-0.5" />
                    <div>

                  <div className="flex items-start gap-3 rounded-2xl border border-border/50 bg-background/80 p-4">
                    <MessageCircle className="w-5 h-5 text-primary mt-0.5" />
                    <div>

                      <h3 className="font-medium text-ink">Reflect on impact</h3>
                      <p className="text-sm text-ink-muted">bias, privacy, attribution, cultural context</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border border-border/60 bg-card/70 backdrop-blur">
              <CardContent className="p-8">
                <LearningOutcomes />
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="rounded-3xl border border-border/60 bg-card/70 backdrop-blur">
                <CardContent className="p-8 space-y-4">
                  <h2 className="text-2xl font-semibold text-ink">Logistics</h2>

                  <div className="task-grid">
                    <div className="task-card flex items-start gap-3 p-4">


                  <div className="task-grid">
                    <div className="task-card flex items-start gap-3 p-4">

                  <div className="space-y-4">
                    <div className="flex items-start gap-3 rounded-2xl border border-border/50 bg-background/80 p-4">


                      <Calendar className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-ink">Meets Wednesdays 2:30–3:45</p>
                        <p className="text-sm text-ink-muted">(Borland 113)</p>
                      </div>
                    </div>

                    <div className="task-card flex items-start gap-3 p-4">


                    <div className="task-card flex items-start gap-3 p-4">

                    <div className="flex items-start gap-3 rounded-2xl border border-border/50 bg-background/80 p-4">


                      <Users className="w-5 h-5 text-accent mt-0.5" />
                      <div>
                        <p className="font-medium text-ink">Hybrid 50/50</p>
                        <p className="text-sm text-ink-muted">in-person + weekly async work</p>
                      </div>
                    </div>

                    <div className="task-card flex items-start gap-3 p-4">


                    <div className="task-card flex items-start gap-3 p-4">

                    <div className="flex items-start gap-3 rounded-2xl border border-border/50 bg-background/80 p-4">


                      <Clock className="w-5 h-5 text-warn mt-0.5" />
                      <div>
                        <p className="font-medium text-ink">All weekly tasks due Sundays</p>
                        <p className="text-sm text-ink-muted">@ 11:59 PM (Canvas)</p>
                      </div>
                    </div>

                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border border-border/60 bg-card/70 backdrop-blur">
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-semibold text-ink">Quick Links</h3>
                  <div className="grid gap-3">
                    <Button variant="outline" size="sm" className="justify-start rounded-2xl" asChild>
                      <a href="#calendar" className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Full Course Calendar
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="justify-start rounded-2xl" asChild>
                      <a
                        href="https://psu.instructure.com/courses/2421561"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Canvas Course Page
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border border-border/60 bg-card/70 backdrop-blur">
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-semibold text-ink">Quick Links</h3>
                  <div className="grid gap-3">
                    <Button variant="outline" size="sm" className="justify-start rounded-2xl" asChild>
                      <a href="#calendar" className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Full Course Calendar
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="justify-start rounded-2xl" asChild>
                      <a
                        href="https://psu.instructure.com/courses/2421561"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Canvas Course Page
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

            </div>
          </section>

          <section>
            <Card className="rounded-3xl border border-border/60 bg-card/70 backdrop-blur">
              <CardContent className="p-8 space-y-6">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-ink">Assignments & Points</h2>
                    <p className="text-sm text-ink-muted">
                      <strong>Note:</strong> Presentations + in-class work are required to pass
                    </p>
                  </div>
                </div>
                <StatsCards />
              </CardContent>
            </Card>
          </section>

          <section id="calendar">
            <Card className="rounded-3xl border border-border/60 bg-card/70 backdrop-blur">
              <CardContent className="p-8 space-y-8">
                <h2 className="text-2xl font-semibold text-ink">Full Course Calendar</h2>
                <CourseTimeline />
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="rounded-3xl border border-accent/40 bg-accent/10">
              <CardContent className="p-8 space-y-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-start">
                  <Info className="w-6 h-6 text-accent" />
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-ink">Use of AI & Originality</h3>
                    <div className="space-y-3 text-ink-muted">
                      <p>• You are expected to use AI; you must also add value beyond it</p>
                      <p>• Document your process (briefly) when you submit: models, prompts, key edits</p>
                      <p>
                        • If work looks low-effort or obviously AI-written, I'll tell you that in feedback and ask for revision or
                        process evidence
                      </p>
                      <p>• I may request a live walkthrough or source files for any submission</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="grid gap-6 lg:grid-cols-3">
              {["Use the whiteboards", "No food or drinks", "Tidy up"].map((title, index) => (
                <Card key={title} className="rounded-3xl border border-border/60 bg-card/70 backdrop-blur">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <div>
                        <p className="font-medium text-ink">{title}</p>
                        <p className="text-sm text-ink-muted">
                          {index === 0 && "walls & tables — erase before you leave"}
                          {index === 1 && "clean spills/crumbs immediately if it happens"}
                          {index === 2 && "cables and chairs — leave better than found"}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <Card className="rounded-3xl border border-border/60 bg-card/70 backdrop-blur">
              <CardContent className="p-8 space-y-8">
                <h2 className="text-2xl font-semibold text-ink">How to Get Help</h2>
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="space-y-4">
                    <Card className="border border-border/60 bg-background/80 backdrop-blur">
                      <CardContent className="p-5">
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-primary" />
                          <div>
                            <p className="font-medium text-ink">Canvas</p>
                            <p className="text-sm text-ink-muted">weekly module pages</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="border border-border/60 bg-background/80 backdrop-blur">
                      <CardContent className="p-5">
                        <div className="flex items-center gap-3">
                          <Calendar className="w-5 h-5 text-accent" />
                          <div>
                            <p className="font-medium text-ink">Office hours</p>
                            <p className="text-sm text-ink-muted">email to schedule (Zoom or in-person)</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="space-y-4">
                    <Card className="border border-border/60 bg-background/80 backdrop-blur">
                      <CardContent className="p-5">
                        <div className="flex items-center gap-3">
                          <MessageCircle className="w-5 h-5 text-warn" />
                          <div>
                            <p className="font-medium text-ink">Quick questions</p>
                            <p className="text-sm text-ink-muted">ask in class or Canvas discussion</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Button variant="default" className="w-full rounded-2xl" asChild>
                      <a href="mailto:jbh6331@psu.edu" className="flex items-center justify-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email Dr. Holster
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="rounded-3xl border border-accent/40 bg-accent/10">
              <CardContent className="p-10 space-y-12">
                <div className="space-y-3">
                  <h2 className="text-2xl font-semibold text-ink">Week 1 Activities</h2>
                  <p className="text-sm text-ink-muted italic">Pair up if needed.</p>
                </div>

                <div className="space-y-12">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                        1
                      </div>
                      <h3 className="text-xl font-medium text-ink">
                        Make one phone-readable poster (1080×1920) in ChatGPT Images
                      </h3>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                      <img
                        src="/lovable-uploads/16247eaa-1cf6-47d8-bad4-7fc12c923d2b.png"
                        alt="Example Two Truths and a Lie poster showing a cartoon person with options: A) I love to travel, B) Moved here from Colorado, C) Play saxophone"
                        className="w-64 rounded-xl border border-border/60 shadow-sm"
                      />
                      <p className="text-sm text-ink-muted italic">Example poster</p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-2">
                      <Card className="border border-border/60 bg-background/90 backdrop-blur">
                        <CardContent className="p-6 space-y-4">
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="bg-primary text-primary-foreground">
                              Option A
                            </Badge>
                            <h4 className="font-semibold text-ink">Two Truths and a Lie</h4>

                          </div>
                          <div className="space-y-3 text-sm text-ink-muted">
                            <p>
                              <strong>Prompt (paste + fill):</strong>
                            </p>
                            <div className="space-y-2 rounded-2xl border-l-4 border-primary bg-muted/50 p-4">
                              <p>Create a clean poster titled "Two Truths & a Lie."</p>
                              <p>Three big caption boxes labeled A, B, C with simple icons.</p>
                              <p>A: [SHORT TRUTH HERE] B: [SHORT TRUTH HERE] C: [SHORT LIE HERE]</p>
                              <p>High contrast, large text, no emojis/watermarks.</p>
                              <p>Randomly remix statements with letter names. Do not reveal which is the lie.</p>

                          </div>
                          <div className="space-y-3 text-sm text-ink-muted">
                            <p>
                              <strong>Prompt (paste + fill):</strong>
                            </p>
                            <div className="space-y-2 rounded-2xl border-l-4 border-primary bg-muted/50 p-4">
                              <p>Create a clean poster titled "Two Truths & a Lie."</p>
                              <p>Three big caption boxes labeled A, B, C with simple icons.</p>
                              <p>A: [SHORT TRUTH HERE] B: [SHORT TRUTH HERE] C: [SHORT LIE HERE]</p>
                              <p>High contrast, large text, no emojis/watermarks.</p>
                              <p>Randomly remix statements with letter names. Do not reveal which is the lie.</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border border-border/60 bg-background/90 backdrop-blur">
                        <CardContent className="p-6 space-y-4">
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="bg-secondary text-secondary-foreground">
                              Option B
                            </Badge>
                            <h4 className="font-semibold text-ink">About Me</h4>
                          </div>
                          <div className="space-y-3 text-sm text-ink-muted">
                            <p>
                              <strong>Prompt (paste + fill):</strong>
                            </p>
                            <div className="space-y-2 rounded-2xl border-l-4 border-secondary bg-muted/50 p-4">
                              <p>Create a clean poster titled "About Me."</p>
                              <p>Big stylized avatar/character representing me (no photo),</p>
                              <p>one headline "Hi, I'm [First name]" and three micro-tags: [tag1], [tag2], [tag3].</p>
                              <p>High contrast, large text, no emojis/watermarks.</p>
                            </div>
                          </div>
                          <div>
                            <Button variant="outline" size="sm" className="rounded-2xl" asChild>
                              <a
                                href="https://chat.openai.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                              >
                                <ExternalLink className="w-3 h-3" />
                                Open ChatGPT
                              </a>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                        2
                      </div>
                      <h3 className="text-xl font-medium text-ink">Turn it into a website</h3>
                    </div>

                    <div className="space-y-4">
                      <p className="text-sm text-ink-muted italic">Example result:</p>
                      <Button variant="outline" size="sm" className="rounded-2xl" asChild>
                        <a
                          href="https://visual-detailer-web.lovable.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="w-3 h-3" />
                          View Example Website
                        </a>
                      </Button>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-2">
                      <Card className="border border-border/60 bg-background/90 backdrop-blur">
                        <CardContent className="p-6 space-y-4">
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="bg-primary text-primary-foreground">
                              Option A
                            </Badge>
                            <h4 className="font-semibold text-ink">ChatGPT (code)</h4>
                          </div>
                          <div className="space-y-4 text-sm text-ink-muted">
                            <div>
                              <p>
                                Paste your poster to ChatGPT (or describe it). Ask for HTML/CSS using Tailwind or inline styling for
                                a responsive one-page site.
                              </p>
                            </div>
                            <div>
                              <p>
                                Export to <strong>Lovable.dev</strong> for easy hosting. (Use VS Code + Vite if you want to go deeper.)
                              </p>

                            </div>
                          </div>
                        </CardContent>
                      </Card>


                      <Card className="border border-border/60 bg-background/90 backdrop-blur">
                        <CardContent className="p-6 space-y-4">
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="bg-secondary text-secondary-foreground">
                              Option B
                            </Badge>
                            <h4 className="font-semibold text-ink">About Me</h4>
                          </div>
                          <div className="space-y-3 text-sm text-ink-muted">
                            <p>
                              <strong>Prompt (paste + fill):</strong>
                            </p>
                            <div className="space-y-2 rounded-2xl border-l-4 border-secondary bg-muted/50 p-4">
                              <p>Create a clean poster titled "About Me."</p>
                              <p>Big stylized avatar/character representing me (no photo),</p>
                              <p>one headline "Hi, I'm [First name]" and three micro-tags: [tag1], [tag2], [tag3].</p>
                              <p>High contrast, large text, no emojis/watermarks.</p>
                            </div>
                          </div>
                          <div>
                            <Button variant="outline" size="sm" className="rounded-2xl" asChild>
                              <a
                                href="https://chat.openai.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                              >
                                <ExternalLink className="w-3 h-3" />
                                Open ChatGPT
                              </a>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                        2
                      </div>
                      <h3 className="text-xl font-medium text-ink">Turn it into a website</h3>
                    </div>

                    <div className="space-y-4">
                      <p className="text-sm text-ink-muted italic">Example result:</p>
                      <Button variant="outline" size="sm" className="rounded-2xl" asChild>
                        <a
                          href="https://visual-detailer-web.lovable.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="w-3 h-3" />
                          View Example Website
                        </a>
                      </Button>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-2">
                      <Card className="border border-border/60 bg-background/90 backdrop-blur">
                        <CardContent className="p-6 space-y-4">
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="bg-primary text-primary-foreground">
                              Option A
                            </Badge>
                            <h4 className="font-semibold text-ink">ChatGPT (code)</h4>
                          </div>
                          <div className="space-y-4 text-sm text-ink-muted">
                            <div>
                              <p>
                                Paste your poster to ChatGPT (or describe it). Ask for HTML/CSS using Tailwind or inline styling for
                                a responsive one-page site.
                              </p>
                            </div>
                            <div>
                              <p>
                                Export to <strong>Lovable.dev</strong> for easy hosting. (Use VS Code + Vite if you want to go deeper.)
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border border-border/60 bg-background/90 backdrop-blur">
                        <CardContent className="p-6 space-y-4">
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="bg-secondary text-secondary-foreground">
                              Option B
                            </Badge>
                            <h4 className="font-semibold text-ink">Claude or Gemini</h4>
                          </div>
                          <div className="space-y-4 text-sm text-ink-muted">
                            <div>
                              <p>
                                Upload your poster and request a mobile-friendly landing page. Emphasize large typography, accessible
                                contrast, and a button linking to Canvas.
                              </p>
                            </div>
                            <div>
                              <p>
                                Copy the HTML/CSS output into <strong>Lovable.dev</strong> or a simple GitHub Pages site.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="rounded-2xl border border-border/50 bg-background/80 p-6">
                      <div className="flex items-center gap-3 text-sm text-ink-muted">
                        <Video className="w-4 h-4 text-primary" />
                        <span>Document your process for Canvas submission.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="task1">
            <Card className="rounded-3xl border border-border/60 bg-card/70 backdrop-blur">
              <CardContent className="p-8 space-y-8">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <h3 className="text-xl font-semibold text-ink">
                    Task 1: Set up ALL accounts & capture login screenshots
                  </h3>
                  <Badge variant="warn" className="flex items-center gap-2 rounded-full px-4 py-1">
                    <Clock className="w-4 h-4" />
                    Due Sun Aug 31, 11:59 PM
                  </Badge>
                </div>

                <div className="space-y-4">
                  {taskItems.map((item) => (
                    <Card key={item.name} className="border border-border/60 bg-background/80 backdrop-blur">
                      <CardContent className="p-5">
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                              <span className="font-semibold text-ink">{item.name}</span>
                            </div>
                            <p className="text-sm text-ink-muted">{item.description}</p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="rounded-2xl"
                              onClick={() => copyUrl(item.url)}
                            >
                              <Copy className="w-3 h-3" />
                              {copiedUrl === item.url ? "Copied!" : "Copy URL"}
                            </Button>
                            <Button variant="accent" size="sm" className="rounded-2xl" asChild>
                              <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                <ExternalLink className="w-3 h-3" />
                                Visit
                              </a>
                            </Button>
                          </div>


                      <Card className="border border-border/60 bg-background/90 backdrop-blur">
                        <CardContent className="p-6 space-y-4">
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="bg-secondary text-secondary-foreground">
                              Option B
                            </Badge>
                            <h4 className="font-semibold text-ink">Claude or Gemini</h4>
                          </div>
                          <div className="space-y-4 text-sm text-ink-muted">
                            <div>
                              <p>
                                Upload your poster and request a mobile-friendly landing page. Emphasize large typography, accessible
                                contrast, and a button linking to Canvas.
                              </p>
                            </div>
                            <div>
                              <p>
                                Copy the HTML/CSS output into <strong>Lovable.dev</strong> or a simple GitHub Pages site.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="rounded-2xl border border-border/50 bg-background/80 p-6">
                      <div className="flex items-center gap-3 text-sm text-ink-muted">
                        <Video className="w-4 h-4 text-primary" />
                        <span>Document your process for Canvas submission.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>


          <section id="task1">
            <Card className="rounded-3xl border border-border/60 bg-card/70 backdrop-blur">
              <CardContent className="p-8 space-y-8">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <h3 className="text-xl font-semibold text-ink">
                    Task 1: Set up ALL accounts & capture login screenshots
                  </h3>
                  <Badge variant="warn" className="flex items-center gap-2 rounded-full px-4 py-1">
                    <Clock className="w-4 h-4" />
                    Due Sun Aug 31, 11:59 PM
                  </Badge>
                </div>

                <div className="space-y-4">
                  {taskItems.map((item) => (
                    <Card key={item.name} className="border border-border/60 bg-background/80 backdrop-blur">
                      <CardContent className="p-5">
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                              <span className="font-semibold text-ink">{item.name}</span>
                            </div>
                            <p className="text-sm text-ink-muted">{item.description}</p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="rounded-2xl"
                              onClick={() => copyUrl(item.url)}
                            >
                              <Copy className="w-3 h-3" />
                              {copiedUrl === item.url ? "Copied!" : "Copy URL"}
                            </Button>
                            <Button variant="accent" size="sm" className="rounded-2xl" asChild>
                              <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                <ExternalLink className="w-3 h-3" />
                                Visit
                              </a>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>



          <section id="task1">
            <Card className="rounded-3xl border border-border/60 bg-card/70 backdrop-blur">
              <CardContent className="p-8 space-y-8">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <h3 className="text-xl font-semibold text-ink">
                    Task 1: Set up ALL accounts & capture login screenshots
                  </h3>
                  <Badge variant="warn" className="flex items-center gap-2 rounded-full px-4 py-1">
                    <Clock className="w-4 h-4" />
                    Due Sun Aug 31, 11:59 PM
                  </Badge>
                </div>

                <div className="space-y-4">
                  {taskItems.map((item) => (
                    <Card key={item.name} className="border border-border/60 bg-background/80 backdrop-blur">
                      <CardContent className="p-5">
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                              <span className="font-semibold text-ink">{item.name}</span>
                            </div>
                            <p className="text-sm text-ink-muted">{item.description}</p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="rounded-2xl"
                              onClick={() => copyUrl(item.url)}
                            >
                              <Copy className="w-3 h-3" />
                              {copiedUrl === item.url ? "Copied!" : "Copy URL"}
                            </Button>
                            <Button variant="accent" size="sm" className="rounded-2xl" asChild>
                              <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                <ExternalLink className="w-3 h-3" />
                                Visit
                              </a>
                            </Button>
                          </div>

                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>


          <section>
            <Card className="rounded-3xl border border-primary/40 bg-primary/10">
              <CardContent className="p-8 space-y-6 text-sm text-ink-muted">
                <h3 className="text-xl font-semibold text-ink">Task 1: What to Submit</h3>
                <p>
                  <strong>Submit a single PDF or DOCX file containing:</strong>
                </p>
                <div className="space-y-2">
                  <p>
                    <strong>8 screenshots</strong> (one per tool): your logged-in home/dashboard for each.
                  </p>
                  <p>
                    <strong>Short reflection (100–150 words):</strong>
                  </p>
                  <ul className="ml-4 space-y-1">
                    <li>• Which tool will you reach for first and why?</li>
                    <li>• Any signup snags to flag (1–2 sentences).</li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-muted/50 p-4">
                  <p className="font-medium">How to create PDF:</p>
                  <p>
                    Save all screenshots and your reflection in one PDF. On Mac, select all screenshot files, click quick actions,
                    create a PDF. On Windows, select all of your images and hit print, print to PDF.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="rounded-3xl border border-border/60 bg-card/70 backdrop-blur">
              <CardContent className="p-8">
                <TaskChecklist />
              </CardContent>
            </Card>
          </section>

    </WeekLayout>


    </WeekLayout>

        </div>
      </main>

      <footer className="border-t border-border/60 bg-background/80 py-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
          <div className="flex-1" />
          <Link to="/">
            <Button variant="ghost" className="rounded-full">
              Course Home
            </Button>
          </Link>
          <div className="flex-1 flex justify-end">
            <Link to="/week2">
              <Button variant="outline" className="gap-2 rounded-full">
                Week 2
                <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>


  );
};

export default Week1;
