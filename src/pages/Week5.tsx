import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FileText,
  Globe,
  Play,
  Sparkles,
  Users,
  Volume2
} from "lucide-react";
import klingInterface from "@/assets/kling-interface.png";
import googleFlowDemo from "@/assets/google-flow-demo.gif";
import notatingImagesDemo from "@/assets/notating-images-demo.gif";
import midjourneyMoodboard from "@/assets/midjourney-moodboard.png";

const Week5 = () => {
  const weekNumber = 5;
  const title = "Week 5: World Models and Video Upskilling";
  const dueDate = "Sun Sep 28, 11:59 PM";
  const prevWeek = weekNumber > 1 ? weekNumber - 1 : null;
  const nextWeek = weekNumber < 15 ? weekNumber + 1 : null;

  return (
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
              <CardContent className="p-10 space-y-16">
                <div className="space-y-4">
                  <h2 className="text-4xl font-light text-foreground">World Models</h2>
                  <p className="text-lg text-ink-muted max-w-3xl">
                    Moving generative AI from making frames to making worlds
                  </p>
                </div>

                <Card className="border border-border/60 bg-background/90 backdrop-blur max-w-4xl mx-auto">
                  <CardContent className="space-y-6 p-8">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Globe className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-foreground">DeepMind's Genie 3</h3>
                        <p className="text-sm text-muted-foreground">Interactive world generation in action</p>
                      </div>
                    </div>

                    <div className="aspect-video overflow-hidden rounded-xl border border-border/20">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/ugoR9GfEHQk?si=N6stAwwhhTOe-PMN"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </div>

                    <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                      <p>
                        World models move generative AI from making frames (images/video) to making worlds (coherent, explorable
                        environments), enabling agents—and artists—to act, test, and learn inside simulations before touching
                        reality. These are generative AI systems that learn an internal simulator of an environment—its objects,
                        physics, and causal dynamics—and then use that simulator to predict and render what happens next.
                      </p>
                      <p>
                        Runway frames this as building an internal representation that can simulate future events, a step toward
                        "general world models" for video and interactive media.
                        <a href="https://runwayml.com" target="_blank" rel="noopener noreferrer" className="ml-1 text-primary hover:underline">
                          Runway
                        </a>
                      </p>
                      <p>
                        DeepMind's Genie 3 illustrates the idea: from a text prompt, it generates persistent, interactive 3D
                        worlds that run in real time, with improved temporal consistency over prior versions and enough memory to
                        keep track of objects and layout as you move around—useful for training agents or prototyping virtual
                        experiences.
                        <a
                          href="https://deepmind.google/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-1 text-primary hover:underline"
                        >
                          Google DeepMind
                        </a>
                      </p>
                      <p>
                        Researchers argue true video world models should be causal, interactive, persistent, real-time, and
                        physically accurate; progress on these fronts is why world models are discussed as a bridge from today's
                        text/video generators to embodied, decision-making systems. Sort of like the holodeck on Star Trek.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="rounded-3xl border border-border/60 bg-card/70 backdrop-blur">
              <CardContent className="p-10 space-y-12">
                <div className="space-y-4">
                  <h2 className="text-4xl font-light text-foreground">Game Worlds</h2>
                </div>

                <div className="mx-auto max-w-4xl space-y-8">
                  <div className="overflow-hidden rounded-2xl border border-border/40">
                    <img
                      src="/lovable-uploads/e0508721-e67d-4fb9-b6a7-82bed4b08525.png"
                      alt="Interactive game world example"
                      className="h-auto w-full"
                    />
                  </div>

                  <Card className="border border-border/40 bg-background/80 backdrop-blur">
                    <CardContent className="p-6 text-sm text-muted-foreground">
                      Interactive environments where stories, characters, and media generate on the fly. Consider designing worlds for:
                    </CardContent>
                  </Card>

                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl border border-border/30 bg-card/40 p-4">
                      <h4 className="font-medium text-foreground mb-2">Educational Simulations</h4>
                      <p className="text-sm text-muted-foreground">Historical events, scientific concepts, or language learning</p>
                    </div>
                    <div className="rounded-2xl border border-border/30 bg-card/40 p-4">
                      <h4 className="font-medium text-foreground mb-2">Creative Sandboxes</h4>
                      <p className="text-sm text-muted-foreground">Open-ended environments for artistic expression and experimentation</p>
                    </div>
                    <div className="rounded-2xl border border-border/30 bg-card/40 p-4">
                      <h4 className="font-medium text-foreground mb-2">Narrative Adventures</h4>
                      <p className="text-sm text-muted-foreground">Branching stories that adapt to player choices and actions</p>
                    </div>
                  </div>

                  <Card className="border border-border/40 bg-background/80 backdrop-blur">
                    <CardContent className="space-y-6 p-6">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          <Users className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-medium text-foreground">Design Your Game World</h3>
                          <p className="text-sm text-muted-foreground">Collaborative brainstorming exercise</p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <label className="mb-2 block text-sm font-semibold text-foreground">Title/Name:</label>
                          <Textarea placeholder="What would you call your game world?" className="min-h-[60px] resize-none" />
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-semibold text-foreground">One-sentence description:</label>
                          <Textarea
                            placeholder="Describe your world in one compelling sentence..."
                            className="min-h-[60px] resize-none"
                          />
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-semibold text-foreground">
                            Player goals (3 bullets): what the player is trying to achieve or learn.
                          </label>
                          <Textarea placeholder="• Goal 1:\n• Goal 2:\n• Goal 3:" className="min-h-[80px] resize-none" />
                        </div>
                      </div>

                      <div className="rounded-lg border border-primary/20 bg-primary/5 p-3 text-xs text-muted-foreground">
                        <p className="mb-2">
                          <strong className="text-foreground">Try it yourself:</strong> Explore interactive world generation at Runway's Game Worlds
                        </p>
                        <Button variant="outline" size="sm" className="rounded-full" asChild>
                          <a href="https://play.runwayml.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            Game Worlds Beta
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="rounded-3xl border border-border/60 bg-card/70 backdrop-blur">
              <CardContent className="p-10 space-y-12">
                <div className="space-y-4">
                  <h2 className="text-4xl font-light text-foreground">Storytelling Tools</h2>
                  <p className="text-lg text-ink-muted max-w-2xl">Essential tools for AI-powered video creation and editing</p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card className="border border-border/30 bg-card/40">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Play className="w-4 h-4 text-primary" />
                        Kling AI
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        Keyframe workflow with DeepSeek prompt assistance for smooth video transitions
                      </p>
                      <div className="overflow-hidden rounded-lg">
                        <img src={klingInterface} alt="Kling AI interface" className="h-auto w-full" />
                      </div>
                      <Button variant="outline" size="sm" className="rounded-full" asChild>
                        <a href="https://klingai.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          Try Kling
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border border-border/30 bg-card/40">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Globe className="w-4 h-4 text-primary" />
                        Google Flow Studio
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        Create/extend clips, maintain continuity with camera movements
                      </p>
                      <div className="overflow-hidden rounded-lg">
                        <img src={googleFlowDemo} alt="Google Flow Studio" className="h-auto w-full" />
                      </div>
                      <Button variant="outline" size="sm" className="rounded-full" asChild>
                        <a href="https://labs.google/fx/tools/flow" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          Flow Studio
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border border-border/30 bg-card/40">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <FileText className="w-4 h-4 text-primary" />
                        Notating Images
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        Add arrows/boxes/notes on frames for motion paths and timing guidance. Input an image you made into
                        ChatGPT and ask it to annotate it, or open it in PowerPoint or another visual editor.
                      </p>
                      <div className="overflow-hidden rounded-lg">
                        <img src={notatingImagesDemo} alt="Image annotation demo" className="h-auto w-full" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-border/30 bg-card/40">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Sparkles className="w-4 h-4 text-primary" />
                        Midjourney Moodboards
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        Build reference boards and apply consistent vibes using --p or Personalization toggle
                      </p>
                      <div className="overflow-hidden rounded-lg">
                        <img src={midjourneyMoodboard} alt="Midjourney moodboard interface" className="h-auto w-full" />
                      </div>
                      <Button variant="outline" size="sm" className="rounded-full" asChild>
                        <a
                          href="https://docs.midjourney.com/hc/en-us/articles/39193335040013-Moodboards"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          Docs
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border border-border/30 bg-card/40">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Users className="w-4 h-4 text-primary" />
                        Wan-Animate
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        Animate characters from single images using performance video (motion + lip-sync)
                      </p>
                      <div className="overflow-hidden rounded-lg">
                        <img src="/lovable-uploads/636289ec-53a6-4fce-adb6-e428a1784b2c.png" alt="Character animation example" className="h-auto w-full" />
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="rounded-full" asChild>
                          <a href="https://humanaigc.github.io/wan-animate/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            Project
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" className="rounded-full" asChild>
                          <a href="https://github.com/Wan-Video/Wan2.2" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            GitHub
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-border/30 bg-card/40">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Play className="w-4 h-4 text-primary" />
                        Runway Aleph & Act Two
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        Runway's latest video generation models for high-quality, consistent video content
                      </p>
                      <div className="overflow-hidden rounded-lg">
                        <img src="/lovable-uploads/7f9da2b4-5566-48c4-b753-191e30a1b0bb.png" alt="Runway Aleph and Act Two" className="h-auto w-full" />
                      </div>
                      <div className="space-y-2">
                        <div>
                          <h4 className="text-sm font-medium text-foreground">Aleph</h4>
                          <p className="text-xs text-muted-foreground">Advanced video generation with improved consistency and quality</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-foreground">Act Two</h4>
                          <p className="text-xs text-muted-foreground">Character-driven video generation with expressive facial animations</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="rounded-full" asChild>
                          <a href="https://runwayml.com/research/introducing-runway-aleph" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            Aleph
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" className="rounded-full" asChild>
                          <a href="https://runwayml.com/research/introducing-act-two" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            Act Two
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-border/30 bg-card/40">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Volume2 className="w-4 h-4 text-primary" />
                        Audio Generation
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground">AI tools for generating music and voice content</p>
                      <div className="overflow-hidden rounded-lg">
                        <img src="/lovable-uploads/9c5cdc04-f670-401d-94e7-f67f508166d0.png" alt="Audio generation tools" className="h-auto w-full" />
                      </div>
                      <div className="space-y-2">
                        <div>
                          <h4 className="text-sm font-medium text-foreground">Suno / Udio (music)</h4>
                          <p className="text-xs text-muted-foreground">Generate background music quickly; be specific or vibe-based</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-foreground">ElevenLabs (voice)</h4>
                          <p className="text-xs text-muted-foreground">High-quality AI voices for narration and character dialogue</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="rounded-full" asChild>
                          <a href="https://suno.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            Suno
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" className="rounded-full" asChild>
                          <a href="https://elevenlabs.io/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            ElevenLabs
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-border/30 bg-card/40">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Users className="w-4 h-4 text-primary" />
                        Staying Caught Up
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        Follow AI video communities: r/aivideo, Runway's Discord, and AI video Twitter for latest releases
                      </p>
                      <div className="overflow-hidden rounded-lg">
                        <img src="/lovable-uploads/a26db62a-ad69-4847-8c6e-d829371b9ce7.png" alt="r/aivideo community" className="h-auto w-full" />
                      </div>
                      <Button variant="outline" size="sm" className="rounded-full" asChild>
                        <a href="https://www.reddit.com/r/aivideo/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          r/aivideo
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="rounded-3xl border border-border/60 bg-card/70 backdrop-blur">
              <CardContent className="p-10 space-y-16">
                <div className="space-y-4">
                  <h2 className="text-4xl font-light text-foreground">AI Tool Chaining</h2>
                  <p className="text-lg text-ink-muted max-w-4xl">
                    Combining multiple AI tools and connecting their outputs to create more sophisticated results than any single tool could achieve alone.
                  </p>
                </div>

                <div className="mx-auto max-w-5xl space-y-12">
                  <div className="overflow-hidden rounded-3xl border border-border/40 bg-card shadow-xl">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/mMiNiRBKiDs?si=VFTNqX2hyKykfuKD"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="aspect-video"
                    />
                  </div>

                  <Card className="border border-border/40 bg-background/80 backdrop-blur">
                    <CardContent className="space-y-6 p-8">
                      <h3 className="text-2xl font-medium text-foreground text-center">Example workflow for this video</h3>
                      <div className="flex flex-wrap items-center justify-center gap-4">
                        {["ChatGPT", "Midjourney", "wan 2.2 + Veo", "Udio", "Filmora Editor"].map((tool, index, array) => (
                          <div key={tool} className="flex items-center gap-4 text-sm font-medium">
                            <span className="rounded-full border border-primary/30 bg-primary/10 px-6 py-3 text-primary">
                              {tool}
                            </span>
                            {index < array.length - 1 && <span className="text-muted-foreground text-xl">→</span>}
                          </div>
                        ))}
                      </div>
                      <p className="text-center text-muted-foreground leading-relaxed">
                        Used ChatGPT for prompts and planning → Midjourney for images and upscaling → wan 2.2 + Veo for animating + sound effects → Udio for music → edited with Filmora Editor.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="rounded-3xl border border-border/60 bg-card/70 backdrop-blur">
              <CardContent className="p-10 space-y-12">
                <div className="space-y-4">
                  <h2 className="text-4xl font-light text-foreground">Nano Banana for Editing Images</h2>
                  <p className="text-lg text-ink-muted max-w-4xl">
                    Edit images with natural language using Google's Nano Banana model in AI Studio.
                  </p>
                </div>

                <Card className="border border-border/40 bg-background/80 backdrop-blur max-w-4xl mx-auto">
                  <CardContent className="space-y-6 p-8">
                    <h3 className="text-2xl font-medium text-foreground">Try it yourself:</h3>
                    <ol className="space-y-3 text-lg text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">1</span>
                        <span>
                          Open
                          <a href="https://aistudio.google.com/" target="_blank" rel="noopener noreferrer" className="ml-1 text-primary hover:underline font-medium">
                            AI Studio
                          </a>
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">2</span>
                        <span>Select the Nano Banana model</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">3</span>
                        <span>Upload an image and try the prompts shown below</span>
                      </li>
                    </ol>
                  </CardContent>
                </Card>

                <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="group relative">
                      <img
                        src="/lovable-uploads/f9aafd32-d250-4a6c-8abb-7fd1e15bc930.png"
                        alt="Original dog photo"
                        className="w-full rounded-2xl border border-border/50 shadow-lg transition-all duration-300 group-hover:shadow-xl"
                      />
                      <div className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
                        Original
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="group relative">
                      <img
                        src="/lovable-uploads/5418daa5-2d3f-4509-b0d8-fc94a7e229c6.png"
                        alt="Edited dog photo"
                        className="w-full rounded-2xl border border-border/50 shadow-lg transition-all duration-300 group-hover:shadow-xl"
                      />
                      <div className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
                        Edited
                      </div>
                    </div>
                    <div className="rounded-xl border border-border/30 bg-muted/50 p-4">
                      <code className="text-sm font-mono text-foreground">"turn towards his head a bit more"</code>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="rounded-3xl border border-border/60 bg-card/70 backdrop-blur">
              <CardContent className="p-10 space-y-8">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-accent" />
                  <h3 className="text-2xl font-medium text-foreground">Video Upskilling (Task 5)</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4">
                    <Calendar className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Due: {dueDate}</p>
                      <p className="text-sm text-muted-foreground">Submit your video creation and reflection</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-muted-foreground">
                    <h4 className="text-lg font-semibold text-foreground">Assignment Requirements</h4>
                    <p>
                      Make one 40 to 120 second video/short film that clearly uses at least one tool from today (Kling, Runway,
                      Flow, Wan-Animate, Nano Banana, Suno/Udio, ElevenLabs, or image annotations). You can revise last week's
                      reel, add a new element to it, make something entirely new, or try another approach—as long as the tool use
                      is obvious. Submit the video plus two short sentences (which tool you used and what you changed).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
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

export default Week5;
