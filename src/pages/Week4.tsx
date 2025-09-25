
import WeekLayout from "@/components/layout/WeekLayout";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FileText,
  Sparkles,
  Users
} from "lucide-react";
import humanInTheLoopAlbum from "@/assets/human-in-the-loop-album.png";
import diffusionSteps from "@/assets/diffusion-steps.png";
import diffusionProcess from "@/assets/diffusion-process.png";

const Week4 = () => {
  const weekNumber = 4;
  const title = "Week 4: Diffusion Basics";
  const dueDate = "Sun Sep 21, 11:59 PM";
  return (
    <WeekLayout weekNumber={weekNumber} title={title} dueDate={dueDate}>
      <section>
            <Card className="rounded-3xl border border-border/60 bg-card/70 backdrop-blur">
              <CardContent className="p-10 space-y-16">
                <div className="text-center space-y-4">
                  <h2 className="text-4xl font-light text-foreground">AI Tool Warm Up</h2>
                  <p className="text-lg text-ink-muted max-w-4xl mx-auto leading-relaxed">
                    Today we'll explore <strong className="text-foreground">Udio</strong> — an AI music generation platform that
                    creates songs from text prompts.
                  </p>
                </div>

                <Card className="border border-border/60 bg-background/90 backdrop-blur max-w-4xl mx-auto">
                  <CardContent className="space-y-8 p-8">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                        <Sparkles className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-medium text-foreground">Udio</h3>
                        <p className="text-muted-foreground">AI-powered music generation from text</p>
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">What it does:</h4>
                        <p className="text-muted-foreground">
                          Generates complete songs (vocals, instruments, production) from text descriptions. You can specify
                          genre, mood, lyrics, and style to create original music compositions.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">Key features:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Generate songs with custom lyrics or instrumental tracks</li>
                          <li>• Choose from various genres and musical styles</li>
                          <li>• Extend existing songs or create variations</li>
                          <li>• High-quality audio output with professional sound</li>
                        </ul>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-border/30 bg-background/60 p-6">
                      <h4 className="text-lg font-semibold text-foreground mb-4">Tips for better results:</h4>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <h5 className="font-medium text-foreground mb-2">Prompt Structure:</h5>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Start with genre (e.g., "folk rock," "jazz," "electronic")</li>
                            <li>• Add mood descriptors ("upbeat," "melancholic," "energetic")</li>
                            <li>• Include instruments ("acoustic guitar," "synthesizer," "strings")</li>
                            <li>• Specify vocal style ("raspy vocals," "smooth harmonies," "rap verses")</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-foreground mb-2">Lyrics & Structure:</h5>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Use [Verse], [Chorus], [Bridge] tags to structure songs</li>
                            <li>• Keep initial generations to 30-60 seconds, then extend</li>
                            <li>• Try both custom lyrics and letting Udio write them</li>
                            <li>• Use "instrumental" for background music without vocals</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4 rounded-xl border border-primary/20 bg-primary/10 p-4 text-sm text-foreground">
                        <strong>Example prompt:</strong> "Upbeat indie folk song with acoustic guitar, gentle drums, and warm
                        female vocals about finding home"
                      </div>
                    </div>

                    <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
                      <div className="flex flex-col gap-6 md:flex-row md:items-start">
                        <img
                          src={humanInTheLoopAlbum}
                          alt="Human in the Loop Album Cover"
                          className="h-44 w-32 flex-shrink-0 rounded-xl border border-border/30 object-cover shadow-lg"
                        />
                        <div className="space-y-4">
                          <h4 className="text-lg font-semibold text-foreground">Real Example: AI Album on Spotify</h4>
                          <p className="text-muted-foreground">
                            I created an entire AI-generated album called "Human in the Loop v1" that's now available on Spotify
                            and other streaming platforms. The project explored the creative possibilities and process
                            challenges of human-AI collaboration in music production.
                          </p>
                          <Button variant="outline" size="sm" className="rounded-2xl" asChild>
                            <a
                              href="https://sites.psu.edu/socialai/2024/05/29/new-release-human-in-the-loop-v1/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <ExternalLink className="w-3 h-3" />
                              Read about the process
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <Button variant="default" size="lg" className="rounded-full px-8" asChild>
                        <a href="https://udio.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Try Udio
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="rounded-3xl border border-border/60 bg-card/70 backdrop-blur">
              <CardContent className="p-10 space-y-16">
                <div className="text-center space-y-4">
                  <h2 className="text-4xl font-light text-foreground">How Diffusion Works</h2>
                  <p className="text-lg text-ink-muted max-w-4xl mx-auto leading-relaxed">
                    Understanding the process behind AI image generation
                  </p>
                </div>

                <div className="space-y-12 max-w-5xl mx-auto">
                  <Card className="border border-border/60 bg-background/90 backdrop-blur">
                    <CardContent className="space-y-6 p-8">
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">Imagine TV static that slowly turns into a photo.</strong> That's
                        diffusion. There are two directions:
                      </p>

                      <div className="grid gap-8 md:grid-cols-2">
                        <div className="rounded-2xl border border-accent/20 bg-accent/10 p-6">
                          <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                            <span className="text-accent">→</span> Forward (scramble)
                          </h3>
                          <p className="text-muted-foreground mb-3">
                            Start with a normal picture and sprinkle in a tiny bit of noise again and again until it looks like
                            pure snow.
                          </p>
                          <p className="text-sm text-muted-foreground">
                            This is how the model learns: it studies millions of images at every noise level, understanding what
                            each stage should look like.
                          </p>
                        </div>
                        <div className="rounded-2xl border border-primary/20 bg-primary/10 p-6">
                          <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                            <span className="text-primary">←</span> Reverse (unscramble)
                          </h3>
                          <p className="text-muted-foreground mb-3">
                            Start from snow and gently remove small bits of noise, step by step, while "listening" to your text
                            idea (the prompt). Bit by bit, shapes appear, then structure, then fine details.
                          </p>
                          <p className="text-sm text-muted-foreground">
                            This is generation: the model predicts what the image should look like with slightly less noise,
                            guided by your prompt at every step.
                          </p>
                        </div>
                      </div>

                      <Card className="border border-border/30 bg-background/60">
                        <CardContent className="space-y-4 p-6">
                          <h3 className="text-lg font-semibold text-foreground">Why so many small steps?</h3>
                          <p className="text-muted-foreground">
                            Because little corrections are safer than one giant guess. Early steps (high noise) nudge big shapes
                            into place (where things are). Middle steps settle relationships and composition (how things line up).
                            Late steps polish edges, textures, and fine details (what things look like up close).
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Think of it like sculpting: you start with rough cuts to get the basic form, then gradually refine
                            details. Each step builds on the previous one, making small but meaningful improvements.
                          </p>
                        </CardContent>
                      </Card>
                    </CardContent>
                  </Card>

                  <Card className="border border-border/60 bg-background/90 backdrop-blur">
                    <CardContent className="space-y-8 p-8">
                      <div>
                        <h3 className="text-2xl font-medium text-foreground mb-4">See Diffusion in Action</h3>
                        <img
                          src={diffusionSteps}
                          alt="Diffusion denoising steps showing progression from noise to clear castle image"
                          className="w-full rounded-2xl border border-border/50 shadow-lg"
                        />
                        <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                          <strong>Steps in action:</strong> Watch how the same castle scene emerges from pure noise. Early steps
                          (1-3) establish basic shapes and composition. Middle steps (5-20) refine structure and relationships.
                          Final steps (30-40) add fine details and textures.
                        </p>
                      </div>
                      <div>
                        <img
                          src={diffusionProcess}
                          alt="Diffusion forward and reverse process diagram showing chair transforming to noise and back"
                          className="w-full rounded-2xl border border-border/50 shadow-lg"
                        />
                        <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                          <strong>The complete process:</strong> Top row shows the forward diffusion process—gradually adding noise
                          to training images until they become pure static. Bottom row shows the reverse generative process—starting
                          from noise and removing it step by step to create new images guided by text prompts.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-border/60 bg-background/90 backdrop-blur overflow-hidden">
                    <CardContent className="p-8 space-y-12">
                      <div className="flex items-center gap-3">
                        <Users className="w-6 h-6 text-accent" />
                        <h3 className="text-2xl font-medium text-foreground">Human Diffusion: Make a Square</h3>
                      </div>

                      <div className="rounded-2xl border border-accent/20 bg-accent/10 p-6">
                        <h4 className="text-xl font-semibold text-foreground mb-3">Goal:</h4>
                        <p className="text-lg text-muted-foreground">
                          Embody diffusion: start as noise, then "denoise" into a neat square together.
                        </p>
                      </div>

                      <div className="grid gap-8 md:grid-cols-2">
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            Setup (1 min):
                          </h4>
                          <ul className="space-y-2 text-muted-foreground">
                            <li>• Tape or imagine a floor grid</li>
                            <li>• Everyone scatters randomly (this is the "snow")</li>
                            <li>• The target is a square (equal rows/columns, crisp corners)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                            <Sparkles className="w-5 h-5" />
                            Steps (8 counts):
                          </h4>
                          <div className="space-y-3 text-muted-foreground">
                            <div className="rounded-lg border border-border/30 bg-background/50 p-3">
                              <strong className="text-foreground">1–3. Big moves:</strong> On each count, take two big steps toward
                              where a good square might be. Corners find the corners; others aim for edges or inside the square.
                            </div>
                            <div className="rounded-lg border border-border/30 bg-background/50 p-3">
                              <strong className="text-foreground">4–6. Medium moves:</strong> One step at a time to straighten
                              rows/columns; leave small gaps for now.
                            </div>
                            <div className="rounded-lg border border-border/30 bg-background/50 p-3">
                              <strong className="text-foreground">7–8. Tiny moves:</strong> Half-steps or adjust in place to sharpen
                              corners and fill gaps. (Option: allow a coin-flip "random wiggle" early, then none at the end—like
                              moving from exploratory to precise.)
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-border/60 bg-background/90 backdrop-blur">
                    <CardContent className="p-8 space-y-8">
                      <div className="text-center space-y-2">
                        <h3 className="text-3xl font-medium text-foreground">Deep Dive Concepts</h3>
                        <p className="text-muted-foreground">Explore the key concepts behind diffusion models</p>
                      </div>

                      <Carousel className="mx-auto w-full max-w-5xl">
                        <CarouselContent>
                          <CarouselItem>
                            <Card className="border-border/50 bg-background/30">
                              <CardHeader>
                                <CardTitle className="text-2xl text-foreground">How Models Learn This Process</CardTitle>
                              </CardHeader>
                              <CardContent className="space-y-6">
                                <div className="rounded-2xl border border-border/30 bg-background/50 p-6">
                                  <h4 className="text-lg font-semibold text-foreground mb-3">Training Data</h4>
                                  <p className="text-muted-foreground leading-relaxed">
                                    Models learn from millions of image-text pairs. For each image, the model practices predicting
                                    what it should look like at every possible noise level—from perfectly clear to completely noisy.
                                    This creates a "noise schedule" that the model can navigate in reverse.
                                  </p>
                                </div>
                                <div className="rounded-2xl border border-border/30 bg-background/50 p-6">
                                  <h4 className="text-lg font-semibold text-foreground mb-3">Text Guidance</h4>
                                  <p className="text-muted-foreground leading-relaxed">
                                    Your prompt actively shapes the denoising at every single step—not just at the end. The model
                                    constantly asks "given this text description, what should this partially-noisy image become
                                    next?" This continuous guidance is why prompt engineering and word choice matter so much for
                                    controlling the final result.
                                  </p>
                                </div>
                                <div className="rounded-2xl border border-border/30 bg-background/50 p-6">
                                  <h4 className="text-lg font-semibold text-foreground mb-3">Latent Space</h4>
                                  <p className="text-muted-foreground leading-relaxed">
                                    Most modern diffusion models (like Stable Diffusion) don't work directly on pixels. They work in a
                                    compressed "latent space"—a mathematical representation that captures the essence of images but is
                                    much more efficient to process. The final step translates this back to pixels.
                                  </p>
                                </div>
                              </CardContent>
                            </Card>
                          </CarouselItem>
                          <CarouselItem>
                            <Card className="border-border/50 bg-background/30">
                              <CardHeader>
                                <CardTitle className="text-2xl text-foreground">A Couple of Helpful Metaphors</CardTitle>
                              </CardHeader>
                              <CardContent className="space-y-6">
                                <div className="flex items-start gap-4 rounded-2xl border border-border/30 bg-background/50 p-6">
                                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent/20">
                                    <span className="text-accent font-medium">1</span>
                                  </div>
                                  <div>
                                    <h4 className="text-lg font-semibold text-foreground mb-2">The prompt is a tour guide</h4>
                                    <p className="text-muted-foreground">At each step the model asks, "Does this look more like what you said?" and adjusts.</p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-4 rounded-2xl border border-border/30 bg-background/50 p-6">
                                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent/20">
                                    <span className="text-accent font-medium">2</span>
                                  </div>
                                  <div>
                                    <h4 className="text-lg font-semibold text-foreground mb-2">The seed is the starting snow pattern</h4>
                                    <p className="text-muted-foreground">Same seed → same journey; different seed → a different but still reasonable journey.</p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-4 rounded-2xl border border-border/30 bg-background/50 p-6">
                                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent/20">
                                    <span className="text-accent font-medium">3</span>
                                  </div>
                                  <div>
                                    <h4 className="text-lg font-semibold text-foreground mb-2">Samplers control the denoising journey</h4>
                                    <p className="text-muted-foreground mb-2">
                                      Different algorithms for removing noise at each step. Some (like Euler or DDIM) take direct,
                                      predictable paths. Others (like DPM++ or ancestral samplers) add controlled randomness for more
                                      variety.
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                      Think of solving a maze: some methods find the shortest path, others explore different routes that
                                      might discover more interesting solutions.
                                    </p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </CarouselItem>
                          <CarouselItem>
                            <Card className="border-border/50 bg-background/30">
                              <CardHeader>
                                <CardTitle className="text-2xl text-foreground">Key Parameters for Control</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <div className="grid gap-6 md:grid-cols-2">
                                  <div className="space-y-6">
                                    <div className="rounded-2xl border border-border/30 bg-background/50 p-6">
                                      <h4 className="text-lg font-semibold text-foreground mb-3">Guidance Scale</h4>
                                      <p className="text-muted-foreground mb-2">
                                        Controls how closely the model follows your prompt. Low values (1-7) give more creative, diverse
                                        results. High values (10-20) stick more literally to your words but can become oversaturated.
                                      </p>
                                      <p className="text-sm text-muted-foreground">
                                        It's like giving directions: "turn left" vs "turn exactly 90 degrees left immediately."
                                      </p>
                                    </div>
                                    <div className="rounded-2xl border border-border/30 bg-background/50 p-6">
                                      <h4 className="text-lg font-semibold text-foreground mb-3">Negative Prompts</h4>
                                      <p className="text-muted-foreground mb-2">
                                        Tell the model what NOT to include. Works by steering the denoising process away from unwanted
                                        concepts at every step.
                                      </p>
                                      <p className="text-sm text-muted-foreground">
                                        Like saying "avoid the highway" when giving directions—the model finds alternative paths.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="space-y-6">
                                    <div className="rounded-2xl border border-border/30 bg-background/50 p-6">
                                      <h4 className="text-lg font-semibold text-foreground mb-3">Steps & Strength</h4>
                                      <p className="text-muted-foreground mb-2">
                                        More denoising steps generally mean higher quality but longer generation time. Strength (in img2img)
                                        controls how much of the original image to preserve.
                                      </p>
                                      <p className="text-sm text-muted-foreground">
                                        Like deciding how much time to spend polishing a sculpture—more time usually means better details.
                                      </p>
                                    </div>
                                    <div className="rounded-2xl border border-border/30 bg-background/50 p-6">
                                      <h4 className="text-lg font-semibold text-foreground mb-3">Batch Size & Variations</h4>
                                      <p className="text-muted-foreground mb-2">
                                        Generate multiple images at once to explore different possibilities from the same prompt. Each uses a
                                        different random seed.
                                      </p>
                                      <p className="text-sm text-muted-foreground">
                                        Like asking multiple artists to paint the same scene—you'll get interesting variations on the theme.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </CarouselItem>
                          <CarouselItem>
                            <Card className="border-border/50 bg-background/30">
                              <CardHeader>
                                <CardTitle className="text-2xl text-foreground">Edits Reuse the Same Idea</CardTitle>
                              </CardHeader>
                              <CardContent className="space-y-6">
                                <div className="grid gap-6 md:grid-cols-2">
                                  <div className="rounded-2xl border border-border/30 bg-background/50 p-6">
                                    <h4 className="text-lg font-semibold text-foreground mb-3">Inpainting</h4>
                                    <p className="text-muted-foreground mb-2">
                                      <strong>Want only one part to change?</strong> Inpainting asks the model to "unscramble" inside a mask while
                                      leaving the rest alone.
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                      The model adds noise only to the masked area, then denoises it while keeping the unmasked parts as anchor
                                      points.
                                    </p>
                                  </div>
                                  <div className="rounded-2xl border border-border/30 bg-background/50 p-6">
                                    <h4 className="text-lg font-semibold text-foreground mb-3">Image-to-Image</h4>
                                    <p className="text-muted-foreground mb-2">
                                      <strong>Want to start from a sketch or photo?</strong> Image-to-image adds controlled noise to your input, then
                                      denoises toward your description without losing the basic layout.
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                      The strength setting controls how much noise to add—low strength keeps more of the original structure.
                                    </p>
                                  </div>
                                </div>
                                <div className="rounded-2xl border border-border/30 bg-background/50 p-6">
                                  <p className="text-muted-foreground leading-relaxed mb-4">
                                    All of these techniques follow the same core principle: start with some form of noise (pure random, or a
                                    noisy version of an existing image), then clean it up in small, guided steps. The magic is in how the
                                    model learned to navigate this noise-to-image journey.
                                  </p>
                                </div>
                                <div className="rounded-2xl border border-primary/20 bg-primary/10 p-6">
                                  <p className="text-foreground font-medium text-lg">
                                    <strong>If you remember just one thing, make it this:</strong> diffusion is a careful reversal from random noise to a
                                    picture, with your words steering every step—and this same process can be adapted for editing, style transfer,
                                    and countless creative applications.
                                  </p>
                                </div>
                              </CardContent>
                            </Card>
                          </CarouselItem>
                        </CarouselContent>
                        <div className="mt-8 flex items-center justify-between">
                          <CarouselPrevious className="static translate-y-0" />
                          <div className="text-sm text-muted-foreground">Swipe or use arrows to navigate</div>
                          <CarouselNext className="static translate-y-0" />
                        </div>
                      </Carousel>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="rounded-3xl border border-primary/40 bg-primary/10">
              <CardContent className="p-10 space-y-12">
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-medium text-foreground">Diffusion Practice</h3>
                </div>

                <Card className="border border-border/30 bg-background/60">
                  <CardContent className="space-y-8 p-8">
                    <div className="rounded-2xl border border-border/30 bg-background/50 p-6">
                      <h4 className="text-xl font-semibold text-foreground mb-4">What you'll do</h4>
                      <div className="grid gap-4 md:grid-cols-3">
                        <div className="rounded-xl border border-border/30 bg-card/50 p-4 text-center">
                          <div className="mb-2 text-2xl">1️⃣</div>
                          <p className="text-sm text-muted-foreground">Pick an inspiration image (or two) to define the look.</p>
                        </div>
                        <div className="rounded-xl border border-border/30 bg-card/50 p-4 text-center">
                          <div className="mb-2 text-2xl">2️⃣</div>
                          <p className="text-sm text-muted-foreground">
                            Use image-to-image in your chosen tool to generate matching frames.
                          </p>
                        </div>
                        <div className="rounded-xl border border-border/30 bg-card/50 p-4 text-center">
                          <div className="mb-2 text-2xl">3️⃣</div>
                          <p className="text-sm text-muted-foreground">
                            Combine your outputs into a single sequence for the final reel.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="task-grid lg:grid-cols-2">
                      <div className="task-card p-6">
                        <div className="flex items-start gap-3">
                          <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                            1
                          </div>
                          <div>
                            <p className="text-foreground font-medium mb-1">Collect Visual References</p>
                            <p className="text-sm text-muted-foreground">
                              Use Pinterest, Midjourney, or your own sketches to pick a style or subject you want to explore.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="task-card p-6">
                        <div className="flex items-start gap-3">
                          <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                            2
                          </div>
                          <div>
                            <p className="text-foreground font-medium mb-1">Choose Video Model</p>
                            <div className="text-sm text-muted-foreground space-y-1">
                              <p>Pick a video model:</p>
                              <ul className="ml-4 space-y-1">
                                <li>
                                  • <strong>
                                    <a
                                      href="https://app.klingai.com/global/?gad_source=1&gad_campaignid=22897611723&gbraid=0AAAAA_AcKMmd97ALjSOWfiD_3LgSm6V4h"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-primary hover:underline"
                                    >
                                      Kling (Kuaishou)
                                    </a>
                                  </strong> — iOS / Android, starter free credits available
                                </li>
                                <li>
                                  • <strong>
                                    <a
                                      href="https://wan.video/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-primary hover:underline"
                                    >
                                      Wan (Alibaba)
                                    </a>
                                  </strong> — wan.video / wanai.me, includes free credits to begin
                                </li>
                                <li>
                                  • <strong>
                                    <a
                                      href="https://labs.google/fx/tools/flow"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-primary hover:underline"
                                    >
                                      Veo 3 (Google)
                                    </a>
                                  </strong> — Veo 3 model page / Flow about page, accounts include ~2,500 credits (≈100 per HQ Veo 3
                                  video, ≈10 per Veo 2 clip)
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="task-card p-6">
                        <div className="flex items-start gap-3">
                          <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                            3
                          </div>
                          <div>
                            <p className="text-foreground font-medium mb-1">Generate Video Clips</p>
                            <p className="text-sm text-muted-foreground">
                              Generate 3–6 clips (5–8s each). Keep style/subject consistent. Use prompting in image to video tools to
                              guide camera angles and movement.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="task-card p-6">
                        <div className="flex items-start gap-3">
                          <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                            4
                          </div>
                          <div>
                            <p className="text-foreground font-medium mb-1">Edit & Combine</p>
                            <p className="text-sm text-muted-foreground">
                              Combine all animations into a 20-60 second video using a video editing app like CapCut or DaVinci
                              Resolve. You can also append videos quickly in QuickTime or edit them directly in Instagram Reels.

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
                <div className="text-center space-y-4">
                  <h2 className="text-4xl font-light text-foreground">AI Tool Warm Up</h2>
                  <p className="text-lg text-ink-muted max-w-4xl mx-auto leading-relaxed">
                    Today we'll explore <strong className="text-foreground">Udio</strong> — an AI music generation platform that
                    creates songs from text prompts.
                  </p>
                </div>

                <Card className="border border-border/60 bg-background/90 backdrop-blur max-w-4xl mx-auto">
                  <CardContent className="space-y-8 p-8">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                        <Sparkles className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-medium text-foreground">Udio</h3>
                        <p className="text-muted-foreground">AI-powered music generation from text</p>
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">What it does:</h4>
                        <p className="text-muted-foreground">
                          Generates complete songs (vocals, instruments, production) from text descriptions. You can specify
                          genre, mood, lyrics, and style to create original music compositions.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">Key features:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Generate songs with custom lyrics or instrumental tracks</li>
                          <li>• Choose from various genres and musical styles</li>
                          <li>• Extend existing songs or create variations</li>
                          <li>• High-quality audio output with professional sound</li>
                        </ul>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-border/30 bg-background/60 p-6">
                      <h4 className="text-lg font-semibold text-foreground mb-4">Tips for better results:</h4>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <h5 className="font-medium text-foreground mb-2">Prompt Structure:</h5>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Start with genre (e.g., "folk rock," "jazz," "electronic")</li>
                            <li>• Add mood descriptors ("upbeat," "melancholic," "energetic")</li>
                            <li>• Include instruments ("acoustic guitar," "synthesizer," "strings")</li>
                            <li>• Specify vocal style ("raspy vocals," "smooth harmonies," "rap verses")</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-foreground mb-2">Lyrics & Structure:</h5>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Use [Verse], [Chorus], [Bridge] tags to structure songs</li>
                            <li>• Keep initial generations to 30-60 seconds, then extend</li>
                            <li>• Try both custom lyrics and letting Udio write them</li>
                            <li>• Use "instrumental" for background music without vocals</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4 rounded-xl border border-primary/20 bg-primary/10 p-4 text-sm text-foreground">
                        <strong>Example prompt:</strong> "Upbeat indie folk song with acoustic guitar, gentle drums, and warm
                        female vocals about finding home"
                      </div>
                    </div>

                    <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
                      <div className="flex flex-col gap-6 md:flex-row md:items-start">
                        <img
                          src={humanInTheLoopAlbum}
                          alt="Human in the Loop Album Cover"
                          className="h-44 w-32 flex-shrink-0 rounded-xl border border-border/30 object-cover shadow-lg"
                        />
                        <div className="space-y-4">
                          <h4 className="text-lg font-semibold text-foreground">Real Example: AI Album on Spotify</h4>
                          <p className="text-muted-foreground">
                            I created an entire AI-generated album called "Human in the Loop v1" that's now available on Spotify
                            and other streaming platforms. The project explored the creative possibilities and process
                            challenges of human-AI collaboration in music production.
                          </p>
                          <Button variant="outline" size="sm" className="rounded-2xl" asChild>
                            <a
                              href="https://sites.psu.edu/socialai/2024/05/29/new-release-human-in-the-loop-v1/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <ExternalLink className="w-3 h-3" />
                              Read about the process
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <Button variant="default" size="lg" className="rounded-full px-8" asChild>
                        <a href="https://udio.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Try Udio
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="rounded-3xl border border-border/60 bg-card/70 backdrop-blur">
              <CardContent className="p-10 space-y-16">
                <div className="text-center space-y-4">
                  <h2 className="text-4xl font-light text-foreground">How Diffusion Works</h2>
                  <p className="text-lg text-ink-muted max-w-4xl mx-auto leading-relaxed">
                    Understanding the process behind AI image generation
                  </p>
                </div>

                <div className="space-y-12 max-w-5xl mx-auto">
                  <Card className="border border-border/60 bg-background/90 backdrop-blur">
                    <CardContent className="space-y-6 p-8">
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">Imagine TV static that slowly turns into a photo.</strong> That's
                        diffusion. There are two directions:
                      </p>

                      <div className="grid gap-8 md:grid-cols-2">
                        <div className="rounded-2xl border border-accent/20 bg-accent/10 p-6">
                          <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                            <span className="text-accent">→</span> Forward (scramble)
                          </h3>
                          <p className="text-muted-foreground mb-3">
                            Start with a normal picture and sprinkle in a tiny bit of noise again and again until it looks like
                            pure snow.
                          </p>
                          <p className="text-sm text-muted-foreground">
                            This is how the model learns: it studies millions of images at every noise level, understanding what
                            each stage should look like.
                          </p>
                        </div>
                        <div className="rounded-2xl border border-primary/20 bg-primary/10 p-6">
                          <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                            <span className="text-primary">←</span> Reverse (unscramble)
                          </h3>
                          <p className="text-muted-foreground mb-3">
                            Start from snow and gently remove small bits of noise, step by step, while "listening" to your text
                            idea (the prompt). Bit by bit, shapes appear, then structure, then fine details.
                          </p>
                          <p className="text-sm text-muted-foreground">
                            This is generation: the model predicts what the image should look like with slightly less noise,
                            guided by your prompt at every step.
                          </p>
                        </div>
                      </div>

                      <Card className="border border-border/30 bg-background/60">
                        <CardContent className="space-y-4 p-6">
                          <h3 className="text-lg font-semibold text-foreground">Why so many small steps?</h3>
                          <p className="text-muted-foreground">
                            Because little corrections are safer than one giant guess. Early steps (high noise) nudge big shapes
                            into place (where things are). Middle steps settle relationships and composition (how things line up).
                            Late steps polish edges, textures, and fine details (what things look like up close).
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Think of it like sculpting: you start with rough cuts to get the basic form, then gradually refine
                            details. Each step builds on the previous one, making small but meaningful improvements.
                          </p>
                        </CardContent>
                      </Card>
                    </CardContent>
                  </Card>

                  <Card className="border border-border/60 bg-background/90 backdrop-blur">
                    <CardContent className="space-y-8 p-8">
                      <div>
                        <h3 className="text-2xl font-medium text-foreground mb-4">See Diffusion in Action</h3>
                        <img
                          src={diffusionSteps}
                          alt="Diffusion denoising steps showing progression from noise to clear castle image"
                          className="w-full rounded-2xl border border-border/50 shadow-lg"
                        />
                        <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                          <strong>Steps in action:</strong> Watch how the same castle scene emerges from pure noise. Early steps
                          (1-3) establish basic shapes and composition. Middle steps (5-20) refine structure and relationships.
                          Final steps (30-40) add fine details and textures.
                        </p>
                      </div>
                      <div>
                        <img
                          src={diffusionProcess}
                          alt="Diffusion forward and reverse process diagram showing chair transforming to noise and back"
                          className="w-full rounded-2xl border border-border/50 shadow-lg"
                        />
                        <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                          <strong>The complete process:</strong> Top row shows the forward diffusion process—gradually adding noise
                          to training images until they become pure static. Bottom row shows the reverse generative process—starting
                          from noise and removing it step by step to create new images guided by text prompts.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-border/60 bg-background/90 backdrop-blur overflow-hidden">
                    <CardContent className="p-8 space-y-12">
                      <div className="flex items-center gap-3">
                        <Users className="w-6 h-6 text-accent" />
                        <h3 className="text-2xl font-medium text-foreground">Human Diffusion: Make a Square</h3>
                      </div>

                      <div className="rounded-2xl border border-accent/20 bg-accent/10 p-6">
                        <h4 className="text-xl font-semibold text-foreground mb-3">Goal:</h4>
                        <p className="text-lg text-muted-foreground">
                          Embody diffusion: start as noise, then "denoise" into a neat square together.
                        </p>
                      </div>

                      <div className="grid gap-8 md:grid-cols-2">
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            Setup (1 min):
                          </h4>
                          <ul className="space-y-2 text-muted-foreground">
                            <li>• Tape or imagine a floor grid</li>
                            <li>• Everyone scatters randomly (this is the "snow")</li>
                            <li>• The target is a square (equal rows/columns, crisp corners)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                            <Sparkles className="w-5 h-5" />
                            Steps (8 counts):
                          </h4>
                          <div className="space-y-3 text-muted-foreground">
                            <div className="rounded-lg border border-border/30 bg-background/50 p-3">
                              <strong className="text-foreground">1–3. Big moves:</strong> On each count, take two big steps toward
                              where a good square might be. Corners find the corners; others aim for edges or inside the square.
                            </div>
                            <div className="rounded-lg border border-border/30 bg-background/50 p-3">
                              <strong className="text-foreground">4–6. Medium moves:</strong> One step at a time to straighten
                              rows/columns; leave small gaps for now.
                            </div>
                            <div className="rounded-lg border border-border/30 bg-background/50 p-3">
                              <strong className="text-foreground">7–8. Tiny moves:</strong> Half-steps or adjust in place to sharpen
                              corners and fill gaps. (Option: allow a coin-flip "random wiggle" early, then none at the end—like
                              moving from exploratory to precise.)
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-border/60 bg-background/90 backdrop-blur">
                    <CardContent className="p-8 space-y-8">
                      <div className="text-center space-y-2">
                        <h3 className="text-3xl font-medium text-foreground">Deep Dive Concepts</h3>
                        <p className="text-muted-foreground">Explore the key concepts behind diffusion models</p>
                      </div>

                      <Carousel className="mx-auto w-full max-w-5xl">
                        <CarouselContent>
                          <CarouselItem>
                            <Card className="border-border/50 bg-background/30">
                              <CardHeader>
                                <CardTitle className="text-2xl text-foreground">How Models Learn This Process</CardTitle>
                              </CardHeader>
                              <CardContent className="space-y-6">
                                <div className="rounded-2xl border border-border/30 bg-background/50 p-6">
                                  <h4 className="text-lg font-semibold text-foreground mb-3">Training Data</h4>
                                  <p className="text-muted-foreground leading-relaxed">
                                    Models learn from millions of image-text pairs. For each image, the model practices predicting
                                    what it should look like at every possible noise level—from perfectly clear to completely noisy.
                                    This creates a "noise schedule" that the model can navigate in reverse.
                                  </p>
                                </div>
                                <div className="rounded-2xl border border-border/30 bg-background/50 p-6">
                                  <h4 className="text-lg font-semibold text-foreground mb-3">Text Guidance</h4>
                                  <p className="text-muted-foreground leading-relaxed">
                                    Your prompt actively shapes the denoising at every single step—not just at the end. The model
                                    constantly asks "given this text description, what should this partially-noisy image become
                                    next?" This continuous guidance is why prompt engineering and word choice matter so much for
                                    controlling the final result.
                                  </p>
                                </div>
                                <div className="rounded-2xl border border-border/30 bg-background/50 p-6">
                                  <h4 className="text-lg font-semibold text-foreground mb-3">Latent Space</h4>
                                  <p className="text-muted-foreground leading-relaxed">
                                    Most modern diffusion models (like Stable Diffusion) don't work directly on pixels. They work in a
                                    compressed "latent space"—a mathematical representation that captures the essence of images but is
                                    much more efficient to process. The final step translates this back to pixels.
                                  </p>
                                </div>
                              </CardContent>
                            </Card>
                          </CarouselItem>
                          <CarouselItem>
                            <Card className="border-border/50 bg-background/30">
                              <CardHeader>
                                <CardTitle className="text-2xl text-foreground">A Couple of Helpful Metaphors</CardTitle>
                              </CardHeader>
                              <CardContent className="space-y-6">
                                <div className="flex items-start gap-4 rounded-2xl border border-border/30 bg-background/50 p-6">
                                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent/20">
                                    <span className="text-accent font-medium">1</span>
                                  </div>
                                  <div>
                                    <h4 className="text-lg font-semibold text-foreground mb-2">The prompt is a tour guide</h4>
                                    <p className="text-muted-foreground">At each step the model asks, "Does this look more like what you said?" and adjusts.</p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-4 rounded-2xl border border-border/30 bg-background/50 p-6">
                                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent/20">
                                    <span className="text-accent font-medium">2</span>
                                  </div>
                                  <div>
                                    <h4 className="text-lg font-semibold text-foreground mb-2">The seed is the starting snow pattern</h4>
                                    <p className="text-muted-foreground">Same seed → same journey; different seed → a different but still reasonable journey.</p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-4 rounded-2xl border border-border/30 bg-background/50 p-6">
                                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent/20">
                                    <span className="text-accent font-medium">3</span>
                                  </div>
                                  <div>
                                    <h4 className="text-lg font-semibold text-foreground mb-2">Samplers control the denoising journey</h4>
                                    <p className="text-muted-foreground mb-2">
                                      Different algorithms for removing noise at each step. Some (like Euler or DDIM) take direct,
                                      predictable paths. Others (like DPM++ or ancestral samplers) add controlled randomness for more
                                      variety.
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                      Think of solving a maze: some methods find the shortest path, others explore different routes that
                                      might discover more interesting solutions.
                                    </p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </CarouselItem>
                          <CarouselItem>
                            <Card className="border-border/50 bg-background/30">
                              <CardHeader>
                                <CardTitle className="text-2xl text-foreground">Key Parameters for Control</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <div className="grid gap-6 md:grid-cols-2">
                                  <div className="space-y-6">
                                    <div className="rounded-2xl border border-border/30 bg-background/50 p-6">
                                      <h4 className="text-lg font-semibold text-foreground mb-3">Guidance Scale</h4>
                                      <p className="text-muted-foreground mb-2">
                                        Controls how closely the model follows your prompt. Low values (1-7) give more creative, diverse
                                        results. High values (10-20) stick more literally to your words but can become oversaturated.
                                      </p>
                                      <p className="text-sm text-muted-foreground">
                                        It's like giving directions: "turn left" vs "turn exactly 90 degrees left immediately."
                                      </p>
                                    </div>
                                    <div className="rounded-2xl border border-border/30 bg-background/50 p-6">
                                      <h4 className="text-lg font-semibold text-foreground mb-3">Negative Prompts</h4>
                                      <p className="text-muted-foreground mb-2">
                                        Tell the model what NOT to include. Works by steering the denoising process away from unwanted
                                        concepts at every step.
                                      </p>
                                      <p className="text-sm text-muted-foreground">
                                        Like saying "avoid the highway" when giving directions—the model finds alternative paths.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="space-y-6">
                                    <div className="rounded-2xl border border-border/30 bg-background/50 p-6">
                                      <h4 className="text-lg font-semibold text-foreground mb-3">Steps & Strength</h4>
                                      <p className="text-muted-foreground mb-2">
                                        More denoising steps generally mean higher quality but longer generation time. Strength (in img2img)
                                        controls how much of the original image to preserve.
                                      </p>
                                      <p className="text-sm text-muted-foreground">
                                        Like deciding how much time to spend polishing a sculpture—more time usually means better details.
                                      </p>
                                    </div>
                                    <div className="rounded-2xl border border-border/30 bg-background/50 p-6">
                                      <h4 className="text-lg font-semibold text-foreground mb-3">Batch Size & Variations</h4>
                                      <p className="text-muted-foreground mb-2">
                                        Generate multiple images at once to explore different possibilities from the same prompt. Each uses a
                                        different random seed.
                                      </p>
                                      <p className="text-sm text-muted-foreground">
                                        Like asking multiple artists to paint the same scene—you'll get interesting variations on the theme.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </CarouselItem>
                          <CarouselItem>
                            <Card className="border-border/50 bg-background/30">
                              <CardHeader>
                                <CardTitle className="text-2xl text-foreground">Edits Reuse the Same Idea</CardTitle>
                              </CardHeader>
                              <CardContent className="space-y-6">
                                <div className="grid gap-6 md:grid-cols-2">
                                  <div className="rounded-2xl border border-border/30 bg-background/50 p-6">
                                    <h4 className="text-lg font-semibold text-foreground mb-3">Inpainting</h4>
                                    <p className="text-muted-foreground mb-2">
                                      <strong>Want only one part to change?</strong> Inpainting asks the model to "unscramble" inside a mask while
                                      leaving the rest alone.
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                      The model adds noise only to the masked area, then denoises it while keeping the unmasked parts as anchor
                                      points.
                                    </p>
                                  </div>
                                  <div className="rounded-2xl border border-border/30 bg-background/50 p-6">
                                    <h4 className="text-lg font-semibold text-foreground mb-3">Image-to-Image</h4>
                                    <p className="text-muted-foreground mb-2">
                                      <strong>Want to start from a sketch or photo?</strong> Image-to-image adds controlled noise to your input, then
                                      denoises toward your description without losing the basic layout.
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                      The strength setting controls how much noise to add—low strength keeps more of the original structure.
                                    </p>
                                  </div>
                                </div>
                                <div className="rounded-2xl border border-border/30 bg-background/50 p-6">
                                  <p className="text-muted-foreground leading-relaxed mb-4">
                                    All of these techniques follow the same core principle: start with some form of noise (pure random, or a
                                    noisy version of an existing image), then clean it up in small, guided steps. The magic is in how the
                                    model learned to navigate this noise-to-image journey.
                                  </p>
                                </div>
                                <div className="rounded-2xl border border-primary/20 bg-primary/10 p-6">
                                  <p className="text-foreground font-medium text-lg">
                                    <strong>If you remember just one thing, make it this:</strong> diffusion is a careful reversal from random noise to a
                                    picture, with your words steering every step—and this same process can be adapted for editing, style transfer,
                                    and countless creative applications.
                                  </p>
                                </div>
                              </CardContent>
                            </Card>
                          </CarouselItem>
                        </CarouselContent>
                        <div className="mt-8 flex items-center justify-between">
                          <CarouselPrevious className="static translate-y-0" />
                          <div className="text-sm text-muted-foreground">Swipe or use arrows to navigate</div>
                          <CarouselNext className="static translate-y-0" />
                        </div>
                      </Carousel>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="rounded-3xl border border-primary/40 bg-primary/10">
              <CardContent className="p-10 space-y-12">
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-medium text-foreground">Diffusion Practice</h3>
                </div>

                <Card className="border border-border/30 bg-background/60">
                  <CardContent className="space-y-8 p-8">
                    <div className="rounded-2xl border border-border/30 bg-background/50 p-6">
                      <h4 className="text-xl font-semibold text-foreground mb-4">What you'll do</h4>
                      <div className="grid gap-4 md:grid-cols-3">
                        <div className="rounded-xl border border-border/30 bg-card/50 p-4 text-center">
                          <div className="mb-2 text-2xl">1️⃣</div>
                          <p className="text-sm text-muted-foreground">Pick an inspiration image (or two) to define the look.</p>
                        </div>
                        <div className="rounded-xl border border-border/30 bg-card/50 p-4 text-center">
                          <div className="mb-2 text-2xl">2️⃣</div>
                          <p className="text-sm text-muted-foreground">
                            Use image-to-image in your chosen tool to generate matching frames.
                          </p>
                        </div>
                        <div className="rounded-xl border border-border/30 bg-card/50 p-4 text-center">
                          <div className="mb-2 text-2xl">3️⃣</div>
                          <p className="text-sm text-muted-foreground">
                            Combine your outputs into a single sequence for the final reel.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-2">
                      <div className="rounded-xl border border-border/30 bg-card/50 p-6">
                        <div className="flex items-start gap-3">
                          <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                            1
                          </div>
                          <div>
                            <p className="text-foreground font-medium mb-1">Collect Visual References</p>
                            <p className="text-sm text-muted-foreground">
                              Use Pinterest, Midjourney, or your own sketches to pick a style or subject you want to explore.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-xl border border-border/30 bg-card/50 p-6">
                        <div className="flex items-start gap-3">
                          <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                            2
                          </div>
                          <div>
                            <p className="text-foreground font-medium mb-1">Choose Video Model</p>
                            <div className="text-sm text-muted-foreground space-y-1">
                              <p>Pick a video model:</p>
                              <ul className="ml-4 space-y-1">
                                <li>
                                  • <strong>
                                    <a
                                      href="https://app.klingai.com/global/?gad_source=1&gad_campaignid=22897611723&gbraid=0AAAAA_AcKMmd97ALjSOWfiD_3LgSm6V4h"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-primary hover:underline"
                                    >
                                      Kling (Kuaishou)
                                    </a>
                                  </strong> — iOS / Android, starter free credits available
                                </li>
                                <li>
                                  • <strong>
                                    <a
                                      href="https://wan.video/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-primary hover:underline"
                                    >
                                      Wan (Alibaba)
                                    </a>
                                  </strong> — wan.video / wanai.me, includes free credits to begin
                                </li>
                                <li>
                                  • <strong>
                                    <a
                                      href="https://labs.google/fx/tools/flow"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-primary hover:underline"
                                    >
                                      Veo 3 (Google)
                                    </a>
                                  </strong> — Veo 3 model page / Flow about page, accounts include ~2,500 credits (≈100 per HQ Veo 3
                                  video, ≈10 per Veo 2 clip)
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-xl border border-border/30 bg-card/50 p-6">
                        <div className="flex items-start gap-3">
                          <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                            3
                          </div>
                          <div>
                            <p className="text-foreground font-medium mb-1">Generate Video Clips</p>
                            <p className="text-sm text-muted-foreground">
                              Generate 3–6 clips (5–8s each). Keep style/subject consistent. Use prompting in image to video tools to
                              guide camera angles and movement.

                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="task-card p-6">

                      <div className="rounded-xl border border-border/30 bg-card/50 p-6">
                        <div className="flex items-start gap-3">
                          <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                            4
                          </div>
                          <div>
                            <p className="text-foreground font-medium mb-1">Edit & Combine</p>
                            <p className="text-sm text-muted-foreground">
                              Combine all animations into a 20-60 second video using a video editing app like CapCut or DaVinci
                              Resolve. You can also append videos quickly in QuickTime or edit them directly in Instagram Reels.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-xl border border-border/30 bg-card/50 p-6">

                        <div className="flex items-start gap-3">
                          <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                            +
                          </div>
                          <div>
                            <p className="text-foreground font-medium mb-1">Optional: Add Sound</p>
                            <p className="text-sm text-muted-foreground">Add sound using Udio and/or Eleven Labs to enhance the final video.</p>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="task-card-accent">

                    <div className="rounded-xl border border-accent/20 bg-accent/10 p-6">

                      <p className="text-foreground font-medium mb-2">Deliverable:</p>
                      <p className="text-muted-foreground">
                        A short video reel (20-60 seconds) created from AI-generated images, presented as a cohesive sequence.
                      </p>

                    </div>

                    <div className="rounded-2xl border border-border/30 bg-background/50 p-6">
                      <h4 className="text-lg font-semibold text-foreground mb-4">Example Output for Task 4</h4>
                      <p className="text-muted-foreground mb-4">
                        This is an example AI-generated video reel assignment that used Wan, Midjourney, and Udio:
                      </p>

                    </div>

                    <div className="rounded-2xl border border-border/30 bg-background/50 p-6">
                      <h4 className="text-lg font-semibold text-foreground mb-4">Example Output for Task 4</h4>
                      <p className="text-muted-foreground mb-4">
                        This is an example AI-generated video reel assignment that used Wan, Midjourney, and Udio:
                      </p>
                      <div className="aspect-video overflow-hidden rounded-xl border border-border/30 bg-card/30">
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://www.youtube.com/embed/islzv4eW2HI?si=nz21Lau41i0nbUIc"
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <p className="text-sm text-muted-foreground mt-3">
                        Notice how the video maintains consistent visual style throughout the sequence of AI-generated images.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-border/30 bg-background/50 p-6">
                      <h4 className="text-lg font-semibold text-foreground mb-4">Optional: Deeper Dive into How Diffusion Models Work</h4>

                      <div className="aspect-video overflow-hidden rounded-xl border border-border/30 bg-card/30">
                        <iframe
                          width="100%"
                          height="100%"

                          src="https://www.youtube.com/embed/islzv4eW2HI?si=nz21Lau41i0nbUIc"
                          title="YouTube video player"

                          src="https://www.youtube.com/embed/iv-5mZ_9CPY?si=v3YNYRzI78FKgMqX"
                          title="How Diffusion Models Work"

                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <p className="text-sm text-muted-foreground mt-3">

                        Notice how the video maintains consistent visual style throughout the sequence of AI-generated images.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-border/30 bg-background/50 p-6">
                      <h4 className="text-lg font-semibold text-foreground mb-4">Optional: Deeper Dive into How Diffusion Models Work</h4>
                      <div className="aspect-video overflow-hidden rounded-xl border border-border/30 bg-card/30">
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://www.youtube.com/embed/iv-5mZ_9CPY?si=v3YNYRzI78FKgMqX"
                          title="How Diffusion Models Work"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <p className="text-sm text-muted-foreground mt-3">
                        For those interested in the technical details behind diffusion models, this video provides an in-depth explanation
                        of the mathematical foundations and training process.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </section>
    </WeekLayout>

                        For those interested in the technical details behind diffusion models, this video provides an in-depth explanation
                        of the mathematical foundations and training process.
                      </p>
                    </div>
                  </CardContent>
                </Card>
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

export default Week4;
