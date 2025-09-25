import WeekLayout from "@/components/layout/WeekLayout";
import WorkshopStations from "@/components/WorkshopStations";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, FileText } from "lucide-react";

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
                    <CardContent className="space-y-3 p-6">
                      <h4 className="text-lg font-semibold text-foreground">Scale & trade-offs:</h4>
                      <p className="text-muted-foreground">
                        What did your calculator scenario (you / class of 25 / PSU) reveal about the energy, carbon, and water
                        costs of everyday AI use—and how do you feel about it?
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="task-card">
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
  );
};

export default Week3;
