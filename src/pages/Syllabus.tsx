import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  GraduationCap,
  Users,
  Shield,
  Heart,
  AlertCircle,
  Camera,
  BookOpen,
  Clock
} from "lucide-react";

const Syllabus = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-12 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-2/3 left-0 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <Header
        title="Course Policies"
        subtitle="AA290G: Creating & Learning with AI"
      />

      <div className="relative max-w-6xl mx-auto px-6 py-16 space-y-16">
        <div className="absolute inset-x-0 top-20 -z-10 mx-auto h-[520px] max-w-5xl rounded-[48px] bg-white/60 blur-3xl" />

        {/* Top Navigation */}
        <section>
          <div className="glass-panel inline-flex rounded-full px-6 py-3">
            <Button variant="outline" asChild size="sm">
              <Link to="/" className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Course Home
              </Link>
            </Button>
          </div>
        </section>

        <div className="space-y-12">
          {/* Grading Scale */}
          <section>
            <Card className="glass-panel border border-white/60">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-ink">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  Grading Scale
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-ink-muted">The following grading scale will be used in the course:</p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <div className="glass-panel flex items-center justify-between rounded-2xl px-4 py-3 text-ink">
                      <span className="font-medium">100-93%</span>
                      <span className="font-semibold text-primary">A</span>
                    </div>
                    <div className="glass-panel flex items-center justify-between rounded-2xl px-4 py-3 text-ink">
                      <span className="font-medium">92-90%</span>
                      <span className="font-semibold">A-</span>
                    </div>
                    <div className="glass-panel flex items-center justify-between rounded-2xl px-4 py-3 text-ink">
                      <span className="font-medium">89-87%</span>
                      <span className="font-semibold">B+</span>
                    </div>
                    <div className="glass-panel flex items-center justify-between rounded-2xl px-4 py-3 text-ink">
                      <span className="font-medium">86-83%</span>
                      <span className="font-semibold">B</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="glass-panel flex items-center justify-between rounded-2xl px-4 py-3 text-ink">
                      <span className="font-medium">82-80%</span>
                      <span className="font-semibold">B-</span>
                    </div>
                    <div className="glass-panel flex items-center justify-between rounded-2xl px-4 py-3 text-ink">
                      <span className="font-medium">79-77%</span>
                      <span className="font-semibold">C+</span>
                    </div>
                    <div className="glass-panel flex items-center justify-between rounded-2xl px-4 py-3 text-ink">
                      <span className="font-medium">76-70%</span>
                      <span className="font-semibold">C</span>
                    </div>
                    <div className="glass-panel flex items-center justify-between rounded-2xl px-4 py-3 text-ink">
                      <span className="font-medium">69-60%</span>
                      <span className="font-semibold">D</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Land Acknowledgement */}
          <section>
            <Card className="glass-panel border border-white/60">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-ink">
                  <Users className="w-6 h-6 text-accent" />
                  Land Acknowledgement Statement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-ink-muted leading-relaxed">
                  Penn State is a community of learners situated in a complex environment shaped by its contemporary inhabitants and the ancestral custodians of this land. We acknowledge and celebrate the Susquehannock, the original stewards and owners of the land upon which we gather to learn, create, and grow. We recognize the problematic and ongoing nature of colonialism and seek to use our musical and pedagogical skill to work for equity, inclusion, and access for all humans.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Attendance Policy */}
          <section>
            <Card className="glass-panel border border-white/60">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-ink">
                  <Clock className="w-6 h-6 text-warn" />
                  Attendance Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <p className="text-ink-muted">
                  Students are responsible for attending class and for completing all assessments and assignments on the due dates listed in the syllabus. Expectations for attendance include that healthy students are present for every class meeting.
                </p>
                <p className="text-ink-muted">
                  Given the hybrid nature of this course, one excused absence will be permitted. An excused absence is an illness, school sponsored trip, required military service, or death in the family. If a student is going to be absent, they must inform the instructor via email, text, or phone prior to the beginning of the class meeting.
                </p>
                <p className="text-ink-muted">
                  Additionally, students are expected to be prompt and ready to begin at the designated start time. If a student is going to arrive late, they must inform the instructor via email, text, or phone prior to the beginning of the class meeting. Three unexcused tardies will equal one excused absence.
                </p>
                <div className="rounded-2xl border border-warn/30 bg-warn/10 px-5 py-4">
                  <p className="text-sm text-ink-muted">
                    <strong>Note:</strong> False claims of legitimate or unavoidable absence may be considered academic integrity violations (Senate Policy 49-20, AAPP G-9).
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Academic Integrity */}
          <section>
            <Card className="glass-panel border border-white/60">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-ink">
                  <Shield className="w-6 h-6 text-primary" />
                  Academic Integrity Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <p className="text-ink-muted">
                  All Penn State policies regarding ethics and honorable behavior apply to this course. Academic integrity is the pursuit of scholarly activity free from fraud and deception and is an educational objective of this institution.
                </p>
                <p className="text-ink-muted">
                  Academic dishonesty includes, but is not limited to, cheating, plagiarizing, fabricating of information or citations, facilitating acts of academic dishonesty by others, having unauthorized possession of examinations, submitting work of another person or work previously used without informing the instructor, or tampering with the academic work of other students.
                </p>
                <p className="text-ink-muted">
                  For any material or ideas obtained from other sources, such as the text or things you see on the web, in the library, etc., a source reference must be given. Direct quotes from any source must be identified as such.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="http://artsandarchitecture.psu.edu/students/acad_integrity" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    College Academic Integrity Statement
                  </a>
                </Button>
              </CardContent>
            </Card>
          </section>

          {/* Student Disability Resources */}
          <section>
            <Card className="glass-panel border border-white/60">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-ink">
                  <Heart className="w-6 h-6 text-accent" />
                  Student Disability Resources
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <p className="text-ink-muted">
                  Penn State is committed to ensuring facility and program access to students with either permanent or temporary disabilities through a variety of services and equipment.
                </p>
                <p className="text-ink-muted">
                  In order to receive consideration for reasonable accommodations, you must contact the appropriate disability services office at the campus where you are officially enrolled, participate in an intake interview, and provide documentation.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href="http://equity.psu.edu/sdr/disability-coordinator" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      SDR Website
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="http://equity.psu.edu/sdr/guidelines" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Documentation Guidelines
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Syllabus;
