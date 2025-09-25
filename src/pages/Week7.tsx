import WeekLayout from "@/components/layout/WeekLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Atom, Bot, ExternalLink, Sparkles, Workflow } from "lucide-react";

const Week7 = () => {
  const weekNumber = 7;
  const title = "Week 7: Custom GPTs";
  const dueDate = "Sun Oct 12, 11:59 PM";

  return (
    <WeekLayout weekNumber={weekNumber} title={title} dueDate={dueDate}>
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="rounded-3xl border border-white/40 bg-card/80 shadow-lg shadow-primary/10 backdrop-blur">
          <CardContent className="p-8 space-y-5 text-xl text-ink">
            <div className="flex items-center gap-3 text-primary">
              <Sparkles className="h-6 w-6" />
              <p className="text-sm font-medium tracking-[0.3em] uppercase">Module Overview</p>
            </div>
            <p>
              This module will guide you through designing, building, and refining custom GPTs—AI assistants that follow specific
              instructions, reference knowledge, and interact in unique ways.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border border-white/40 bg-card/80 backdrop-blur">
          <CardHeader className="pb-6">
            <div className="flex items-center gap-3 text-primary">
              <Bot className="h-6 w-6" />
              <CardTitle className="text-lg tracking-[0.2em] uppercase text-ink">GPT Builder Access</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 text-base text-ink">
            <p>
              Anyone can create a Custom GPT using OpenAI’s GPT Builder, which allows you to customize responses, add documents, and
              enable tools like browsing or image generation. A ChatGPT Plus subscription ($20/month) is required. If you do not have
              one, I have one Plus account login to share upon request—first come, first serve.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Card className="rounded-3xl border border-white/40 bg-card/80 backdrop-blur">
          <CardHeader>
            <div className="flex items-center gap-3 text-primary">
              <Atom className="h-6 w-6" />
              <CardTitle className="text-2xl text-ink">What Are Custom GPTs?</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 text-lg text-ink">
            <p>
              Custom GPTs are versions of ChatGPT that can be configured for specific tasks. Instead of a general AI assistant, you can
              create one that follows specialized instructions for a particular use case. GPTs will also reference uploaded “knowledge”
              documents. You can request that GPTs use external tools including web browsing, image generation, data analysis tools, as
              well means for external API connections. GPTs can answer domain-specific questions, generate creative or educational
              content, simulate conversations or experiences, analyze data, write code, guide learning experiences, to name a few
              potential use cases. Consider a few of these examples before creating your own.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border border-white/40 bg-card/80 backdrop-blur">
          <CardContent className="space-y-4 text-base text-ink">
            <div className="rounded-2xl border border-border/60 bg-background/70 p-5 text-sm leading-relaxed text-ink-muted">
              GPTs themselves may represent a minimally viable product for a software development venture, a reliable partner in
              preservice professional preparation, a component of a research method, or part of a creative process. Reflect once again on
              the problem you might be able to address using AI in your communities before engaging with the workshop activity below.
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
            <CardTitle className="text-ink text-xl">AI Ethics Game</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5 text-base text-ink">
            <div className="aspect-video overflow-hidden rounded-2xl border border-dashed border-primary/40 bg-gradient-to-br from-primary/15 via-background to-background flex items-center justify-center text-sm text-primary/70">
              Video Placeholder
            </div>
            <p>An interactive experience where users navigate AI ethics dilemmas.</p>
            <Button variant="outline" className="rounded-full" asChild>
              <a href="#" className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                🔗 Try It Here: AI Ethics Adventure
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border border-white/40 bg-card/80 backdrop-blur">
          <CardHeader className="space-y-2">
            <Badge variant="outline" className="w-fit rounded-full px-3 py-1 text-xs tracking-[0.3em] uppercase">
              Example 2
            </Badge>
            <CardTitle className="text-ink text-xl">Classroom Coach</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5 text-base text-ink">
            <div className="aspect-video overflow-hidden rounded-2xl border border-dashed border-primary/40 bg-gradient-to-br from-primary/15 via-background to-background flex items-center justify-center text-sm text-primary/70">
              Video Placeholder
            </div>
            <p>A teaching simulation tool that helps educators refine their instructional techniques.</p>
            <Button variant="outline" className="rounded-full" asChild>
              <a href="#" className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                🔗 Try It Here: Classroom Coach 3.4
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border border-white/40 bg-card/80 backdrop-blur md:col-span-2">
          <CardHeader className="space-y-2">
            <Badge variant="outline" className="w-fit rounded-full px-3 py-1 text-xs tracking-[0.3em] uppercase">
              Example 3
            </Badge>
            <CardTitle className="text-ink text-xl">Semantic Topic Modeler</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5 text-base text-ink">
            <div className="aspect-video overflow-hidden rounded-2xl border border-dashed border-primary/40 bg-gradient-to-br from-primary/15 via-background to-background flex items-center justify-center text-sm text-primary/70">
              Video Placeholder
            </div>
            <p>
              A GPT that performs automated qualitative text analysis, identifying themes in large text datasets.
            </p>
            <Button variant="outline" className="rounded-full" asChild>
              <a href="#" className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                🔗 Try It Here: Semantic Topic Modeler
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card className="rounded-3xl border border-white/40 bg-card/80 backdrop-blur">
          <CardHeader className="space-y-2">
            <div className="flex items-center gap-3 text-primary">
              <Workflow className="h-6 w-6" />
              <CardTitle className="text-ink text-xl">Workshop Activity</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 text-base text-ink">
            <p>Workshop Activity</p>
            <div className="rounded-2xl border border-primary/30 bg-primary/10 px-5 py-4 text-sm text-primary">
              artifacts workshop
            </div>
          </CardContent>
        </Card>
      </section>
    </WeekLayout>
  );
};

export default Week7;
