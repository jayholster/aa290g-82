
import WeekLayout from "@/components/layout/WeekLayout";


import WeekLayout from "@/components/layout/WeekLayout";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

import WorkshopStations from "@/components/WorkshopStations";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, FileText } from "lucide-react";

import { ChevronLeft, ChevronRight, ExternalLink, FileText } from "lucide-react";



const Week3 = () => {
  const weekNumber = 3;
  const title = "Week 3: AI Ethics & Bias";
  const dueDate = "Sun Sep 14, 11:59 PM";
  return (

    <WeekLayout weekNumber={weekNumber} title={title} dueDate={dueDate}>
      <section>
            <Card className="rounded-3xl border border-border/60 bg-card/70 backdrop-blur">
              <CardContent className="p-10 space-y-6">
                <div className="space-y-4">
                  <h2 className="text-4xl font-light text-foreground">AI Ethics & Bias</h2>
                  <p className="text-lg text-ink-muted max-w-4xl">
                    Today we'll explore the broader implications of AI beyond just functionality. We'll examine two critical
                    dimensions: <strong className="text-foreground">environmental impact</strong> (carbon emissions and water usage)
                    and <strong className="text-foreground">algorithmic bias</strong> (problems in training data and outputs).
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>



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
              <CardContent className="p-10 space-y-6">
                <div className="space-y-4">
                  <h2 className="text-4xl font-light text-foreground">AI Ethics & Bias</h2>
                  <p className="text-lg text-ink-muted max-w-4xl">
                    Today we'll explore the broader implications of AI beyond just functionality. We'll examine two critical
                    dimensions: <strong className="text-foreground">environmental impact</strong> (carbon emissions and water usage)
                    and <strong className="text-foreground">algorithmic bias</strong> (problems in training data and outputs).
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>


          <section>
            <Card className="rounded-3xl border border-border/60 bg-card/70 backdrop-blur">
              <CardContent className="p-0">
                <WorkshopStations />
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="rounded-3xl border border-primary/40 bg-primary/10">
              <CardContent className="p-10 space-y-12">
                <div className="space-y-4">
                  <h3 className="text-3xl font-light text-foreground flex items-center gap-3">
                    <FileText className="w-6 h-6 text-primary" />
                    Next Steps: Task 3
                  </h3>
                  <p className="text-lg text-muted-foreground">Reflect on the following questions:</p>
                </div>

                <div className="task-grid lg:grid-cols-3">
                  <Card className="task-card">


                <div className="task-grid lg:grid-cols-3">
                  <Card className="task-card">

                <div className="grid gap-6 lg:grid-cols-3">
                  <Card className="border border-border/60 bg-background/90 backdrop-blur">


                    <CardContent className="space-y-3 p-6">
                      <h4 className="text-lg font-semibold text-foreground">Scale & trade-offs:</h4>
                      <p className="text-muted-foreground">
                        What did your calculator scenario (you / class of 25 / PSU) reveal about the energy, carbon, and water
                        costs of everyday AI use—and how do you feel about it?
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="task-card">


                  <Card className="task-card">

                  <Card className="border border-border/60 bg-background/90 backdrop-blur">


                    <CardContent className="space-y-3 p-6">
                      <h4 className="text-lg font-semibold text-foreground">Attachment & continuity:</h4>
                      <p className="text-muted-foreground">
                        After the Her clips and the 4o/community artifacts, what obligations—ethical or practical—do AI labs have
                        when changing or removing a feature that relates to "personality," and where are your boundaries for
                        relational AI. Consider the AI attachment assessment in the workshop as a starting point.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="task-card">


                  <Card className="task-card">

                  <Card className="border border-border/60 bg-background/90 backdrop-blur">

                    <CardContent className="space-y-3 p-6">
                      <h4 className="text-lg font-semibold text-foreground">Bias & design:</h4>
                      <p className="text-muted-foreground">
                        Where have you seen bias or sycophancy shape chatbot/human interactive outcomes (who's represented, who's
                        encouraged, who's put at risk), and how should that influence how you use AI for coursework or work?
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="task-card-accent">


                <Card className="task-card-accent">

                <Card className="border border-accent/40 bg-accent/10">

                  <CardContent className="p-6 space-y-4">
                    <h4 className="text-lg font-semibold text-foreground">Submission Requirements:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Upload your response as a Word document or PDF</li>
                      <li>• Minimum 1 page or ~5 sentences for each question</li>
                      <li>• Due Sunday at 11:59 PM on Canvas</li>
                    </ul>
                    <div>
                      <Button size="lg" variant="default" asChild className="rounded-full px-6">
                        <a
                          href="https://psu.instructure.com/courses/2421561/assignments/17335076"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Submit on Canvas
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
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-light text-foreground">References</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-8">
                {["Business Insider. (2025, June 21). How a data center operator is upgrading its services for AI — and trying to stay green. Business Insider. https://www.businessinsider.com/digital-realty-ai-infrastructure-data-centers-sustainability-strategy-2025-6",
                  "Environmental Protection Agency. (2022). eGRID 2022 summary tables. United States Environmental Protection Agency. https://www.epa.gov/egrid",
                  "Food & Water Watch. (2025, March). AI's water and energy footprint. Food & Water Watch. https://www.foodandwaterwatch.org/wp-content/uploads/2025/03/FSW_0325_AI_Water_Energy.pdf",
                  "Google Cloud. (2025, August 28). Measuring the environmental impact of AI inference. Google Cloud Blog. https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference",
                  "ITPro. (2025, August 29). Google boasts that a single Gemini prompt uses roughly the same energy as a basic search — but that's not painting the full picture. ITPro. https://www.itpro.com/technology/artificial-intelligence/google-boasts-that-a-single-gemini-prompt-uses-roughly-the-same-energy-as-a-basic-search-but-thats-not-painting-the-full-picture",
                  "Morgan Stanley. (2025, March 17). AI boom may drain resources: Data centres' water use could hit 1,068 billion litres by 2028; Morgan Stanley report flags 11× rise. The Times of India. https://timesofindia.indiatimes.com/business/international-business/ai-boom-may-drain-resources-data-centres-water-use-could-hit-1068-billion-litres-by-2028-morgan-stanley-report-flags-11x-rise/articleshow/123758252.cms",
                  "Patterson, D., Gonzalez, J., Le, Q., Liang, C., & Dean, J. (2021). Carbon emissions and large neural network training [Preprint]. arXiv. https://arxiv.org/abs/2104.10350",
                  "Strubell, E., Ganesh, A., & McCallum, A. (2019). Energy and policy considerations for deep learning in NLP. Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics, 3645–3650. https://doi.org/10.48550/arXiv.1906.02243",
                  "U.S. Department of Energy. (2023). Residential energy consumption survey (RECS): Average household electricity use. U.S. Energy Information Administration. https://www.eia.gov/consumption/residential/",
                  "U.S. Environmental Protection Agency. (2023). Greenhouse gases equivalencies calculator – Calculations and references. United States Environmental Protection Agency. https://www.epa.gov/energy/greenhouse-gases-equivalencies-calculator-calculations-and-references"
                ].map((reference) => (
                  <Card key={reference} className="border border-border/60 bg-background/80 backdrop-blur">
                    <CardContent className="p-6 text-sm text-muted-foreground leading-relaxed">{reference}</CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </section>
    </WeekLayout>



          <section>
            <Card className="rounded-3xl border border-border/60 bg-card/70 backdrop-blur">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-light text-foreground">References</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-8">
                {["Business Insider. (2025, June 21). How a data center operator is upgrading its services for AI — and trying to stay green. Business Insider. https://www.businessinsider.com/digital-realty-ai-infrastructure-data-centers-sustainability-strategy-2025-6",
                  "Environmental Protection Agency. (2022). eGRID 2022 summary tables. United States Environmental Protection Agency. https://www.epa.gov/egrid",
                  "Food & Water Watch. (2025, March). AI's water and energy footprint. Food & Water Watch. https://www.foodandwaterwatch.org/wp-content/uploads/2025/03/FSW_0325_AI_Water_Energy.pdf",
                  "Google Cloud. (2025, August 28). Measuring the environmental impact of AI inference. Google Cloud Blog. https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference",
                  "ITPro. (2025, August 29). Google boasts that a single Gemini prompt uses roughly the same energy as a basic search — but that's not painting the full picture. ITPro. https://www.itpro.com/technology/artificial-intelligence/google-boasts-that-a-single-gemini-prompt-uses-roughly-the-same-energy-as-a-basic-search-but-thats-not-painting-the-full-picture",
                  "Morgan Stanley. (2025, March 17). AI boom may drain resources: Data centres' water use could hit 1,068 billion litres by 2028; Morgan Stanley report flags 11× rise. The Times of India. https://timesofindia.indiatimes.com/business/international-business/ai-boom-may-drain-resources-data-centres-water-use-could-hit-1068-billion-litres-by-2028-morgan-stanley-report-flags-11x-rise/articleshow/123758252.cms",
                  "Patterson, D., Gonzalez, J., Le, Q., Liang, C., & Dean, J. (2021). Carbon emissions and large neural network training [Preprint]. arXiv. https://arxiv.org/abs/2104.10350",
                  "Strubell, E., Ganesh, A., & McCallum, A. (2019). Energy and policy considerations for deep learning in NLP. Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics, 3645–3650. https://doi.org/10.48550/arXiv.1906.02243",
                  "U.S. Department of Energy. (2023). Residential energy consumption survey (RECS): Average household electricity use. U.S. Energy Information Administration. https://www.eia.gov/consumption/residential/",
                  "U.S. Environmental Protection Agency. (2023). Greenhouse gases equivalencies calculator – Calculations and references. United States Environmental Protection Agency. https://www.epa.gov/energy/greenhouse-gases-equivalencies-calculator-calculations-and-references"
                ].map((reference) => (
                  <Card key={reference} className="border border-border/60 bg-background/80 backdrop-blur">
                    <CardContent className="p-6 text-sm text-muted-foreground leading-relaxed">{reference}</CardContent>
                  </Card>
                ))}
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

export default Week3;
