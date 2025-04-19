import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, GraduationCap, BookOpen } from "lucide-react"
import Link from "next/link"
import { TypingAnimation } from "@/components/typing-animation"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-zinc-800 glass-effect">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl text-white">Amit Rand</div>
          <nav className="hidden md:flex items-center gap-6">
             <Link href="#about" className="text-sm font-medium text-zinc-400 transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#experience" className="text-sm font-medium text-zinc-400 transition-colors hover:text-primary">
              Experience
            </Link>
            <Link href="#projects" className="text-sm font-medium text-zinc-400 transition-colors hover:text-primary">
              Projects
            </Link>
            <Link href="#research" className="text-sm font-medium text-zinc-400 transition-colors hover:text-primary">
              Research
            </Link>
             <Link href="#courses" className="text-sm font-medium text-zinc-400 transition-colors hover:text-primary">
              Relevant Coursework
            </Link>
            <Link href="#contact" className="text-sm font-medium text-zinc-400 transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white hover:bg-zinc-800" asChild>
              <Link href="https://github.com/randamit123/" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white hover:bg-zinc-800" asChild>
              <Link href="https://www.linkedin.com/in/amit-rand-361b30218/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white hover:bg-zinc-800" asChild>
              <Link href="https://scholar.google.com/citations?user=ejyT4NUAAAAJ&hl=en&oi=sra" target="_blank" rel="noopener noreferrer">
                <GraduationCap className="h-5 w-5" />
                <span className="sr-only">Google Scholar</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8">
        {/* Hero Section */}
        <section className="py-10 md:py-16 lg:py-24 animate-fade-in">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">Amit Rand</h1>
               <TypingAnimation />
              <p className="max-w-[600px] text-zinc-400 md:text-xl">
                I'm a 3rd year UCLA undergraduate graduating in 2026 passionate about building with AI, computer vision, and medical imaging.
              </p>
              <div className="flex gap-4 pt-4">
                <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
                  <Link href="#contact">
                    Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                  asChild
                >
                  <Link href="#projects">View my work</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-zinc-800 shadow-xl shadow-primary/10">
                <Image
                  src="/images/amitcurr.png"
                  alt="Amit Rand"
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-10 md:py-16 scroll-mt-16 animate-fade-in">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">About Me</h2>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <p className="text-zinc-400">
                  I'm a Computer Science and Mathematics student at UCLA with a focus on artificial intelligence and machine learning.
                  My passion lies at the intersection of technology and healthcare, where I develop innovative solutions
                  using computer vision and medical imaging.
                </p>
                <p className="text-zinc-400">
                  When I'm not coding, you can find me playing pickup soccer on the field, reading about the latest AI
                  research, or experimenting with new technologies to solve real-world problems.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Skills</h3>
                <div className="flex flex-wrap gap-2">
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Python</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">C</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">C++</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Java</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">JavaScript</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">TypeScript</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">PyTorch</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">TensorFlow</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Computer Vision</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Machine Learning</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Deep Learning</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Reinforcement Learning</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Medical Imaging</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">React</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Next.js</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Tailwind CSS</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Express.js</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Flask</Badge>
                   <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">SQL</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-10 md:py-16 scroll-mt-16 animate-fade-in">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Experience</h2>
            <div className="space-y-6">
              <ExperienceItem
                title="Embedded Software Development Engineer Intern"
                company="Amazon"
                companyUrl="https://www.aboutamazon.com/what-we-do/devices-services/project-kuiper"
                period="Summer 2025"
                description="Incoming Summer 2025 at Special Project Labs, Project Kuiper :)"
                logo="/images/amazon_logo.jpg"
              />
              <ExperienceItem
                title="Research Scientist Intern"
                company="Leidos"
                companyUrl="https://www.leidos.com"
                period="April 2025 - Present"
                description="Developing LLM and generative model based internal-facing solutions at the AI Research Accelerator Lab."
                logo="/images/leidos_logo.jpg"
              />
              <ExperienceItem
                title="Generative AI Intern"
                company="Scale AI"
                companyUrl="https://scale.com/"
                period="February 2025 - Present"
                description="Collaborating with AI researchers to optimize generative model performance through architectural tuning, fine-tuning strategies, and data preprocessing for complex reasoning tasks."
                logo="/images/scaleai_logo.jpg"
              />
              <ExperienceItem
                title="Research Assistant"
                company="UCLA Cardiovascular Imaging Research Lab"
                period="July 2024 - Present"
                companyUrl="https://cvirl.dgsom.ucla.edu/"
                description="Developing machine learning models and data processing pipelines for cardiovascular MRI based analysis. Collaborating with medical professionals to improve diagnostic accuracy."
                logo="/images/uclahealth.svg"
              />
             <ExperienceItem
              title="Software Development Engineer Intern"
              company="Q.ai"
              companyUrl="https://q.ai/"
              period="August 2024 - October 2024"
              description="Built full-stack tools and dashboards to support unbiased data generation, deployed deep learning models, and enhanced internal data pipelines under NDA."
              logo="/images/qai.svg"
              />
              <ExperienceItem
                title="Research Apprenticeship"
                company="Department of Biomedical Datascience"
                companyUrl="https://dbds.stanford.edu/"
                period="January 2024 - June 2024"
                description="Worked on computer vision machine learning models to classify strains of infectious keratits under the mentorship of a Post Doctoral Scholar."
                logo="/images/stanford_university_logo.jpg"
              />
              <ExperienceItem
                title="Software Development Engineer Intern"
                company="Empowerly"
                companyUrl="https://empowerly.com/"
                period="May 2023 - March 2024"
                description="Built full-stack features and deployed intelligent bots for marketing automation and data-driven engagement using React, Node.js, PostgreSQL, and LLMs."
                logo="/images/empowerly.png"
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-10 md:py-16 scroll-mt-16 animate-fade-in">
          <div className="space-y-8">
             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Projects</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="MedKnight"
                description="AR-assisted medical system that harnesses AI and immersive technology to guide first responders through critical, time-sensitive procedures (Best Implementation Award at CalHacks 11.0.)"
                tags={["Python", "Oculus SDK", "Fetch.ai", "Flask", "OpenCV", "SQL", "C#", "Unity", "Deepgram"]}
                link="https://devpost.com/software/medknight"
              />
              <ProjectCard
                title="fMBV-Microvascular Network Pipeline GUI"
                description="Developed a secure, cross-language data pipeline that streamlines processing of fMBV maps and 3D cardiovascular images to generate precise, patient-specific microvascular network models for non-invasive ischemic heart disease assessment."
                tags={["Python", "C++", "Matlab", "PyQt", "VTK", "ITK", "TetGen", "PyVista"]}
                // link="https://github.com/Nikolair1/CVIRL_GUI"
              />
              <ProjectCard
                title="PaperLeaf"
                description="Full-stack web app that transforms handwritten proofs into editable LaTeX via a custom CNN-based character detection and image segmentation pipeline. Features user auth, image upload with preview, dashboard to track conversions, and a referral system unlocking unlimited LaTeX conversions."
                tags={[
                  "Python",
                  "TensorFlow",
                  "CNNs",
                  "Computer Vision",
                  "TypeScript",
                  "Next.js",
                  "React.js",
                  "Flask",
                  "Tailwind CSS",
                  "SQL",
                  "PostgreSQL",
                ]}
                link="https://github.com/randamit123/Latex"
              />
              <ProjectCard
                title="InterviewSensei"
                description="AI-powered interview preparation platform that uses advanced NLP techniques to analyze and provide feedback on user responses, helping candidates improve their interview skills."
                tags={["Python", "OpenAI", "Flask", "React.js", "Tailwind CSS"]}
                link="https://github.com/randamit123/mockinterviewrep"
              ></ProjectCard>
              <ProjectCard
                title="Resign"
                description="A web app that uses computer vision to translate sign language into text and speech, making communication more accessible for the hearing impaired."
                tags={["Python", "OpenCV", "TensorFlow", "LSTM", "Keras", "Flask", "React.js", "Tailwind CSS"]}
                link="https://github.com/randamit123/diamondhacks-frontend"
              ></ProjectCard>
              <ProjectCard
              title="Git-Friend"
              description="A CLI tool that integrates with OpenAI's ChatGPT to help you generate and execute Git commands from natural language instructions."
              tags={["Shell", "GPT-3.5", "Git"]}
              link="https://github.com/randamit123/git-friend"
              ></ProjectCard>
              {/* <ProjectCard
              title="My Personal Site"
              description="This portfolio website showcasing my work and experience."
              tags={["Next.js", "React.js", "Tailwind CSS", "TypeScript", "v0"]}
              link="https://github.com/randamit123/amitsite"
              ></ProjectCard> */}
            </div>
            <div className="flex justify-center pt-6">
              <Button
                variant="outline"
                className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                asChild
              >
                <Link href="https://github.com/randamit123" target="_blank" rel="noopener noreferrer">
                  View all projects <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

         {/* Research Section */}
        <section id="research" className="py-10 md:py-16 scroll-mt-16 animate-fade-in">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Research</h2>

            <div className="card-gradient border border-zinc-800 rounded-lg overflow-hidden">
              <div className="p-6 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">
                    Beyond Conventional Transformers: The Medical X-ray Attention (MXA) Block for Improved Multi-Label
                    Diagnosis Using Knowledge Distillation
                  </h3>
                  <p className="text-zinc-400">Amit Rand, Hadi Ibrahim</p>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Pre-Print</Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Computer Vision</Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Medical Imaging</Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Machine Learning</Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">Transformers</Badge>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button
                    variant="outline"
                    className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                    asChild
                  >
                    <Link href="https://www.arxiv.org/abs/2504.02277" target="_blank" rel="noopener noreferrer">
                      Read Paper <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="py-10 md:py-16 scroll-mt-16 animate-fade-in">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Relevant Coursework
              </h2>
              <div className="flex items-center gap-2 text-zinc-400">
                <GraduationCap className="h-5 w-5" />
                <span>UCLA</span>
              </div>
            </div>

            <div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-4 text-zinc-400 text-sm">
              <p className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-zinc-700"></span>
                <span>Courses numbered 1-99: Lower Division</span>
              </p>
              <p className="flex items-center gap-2 mt-1">
                <span className="inline-block w-3 h-3 rounded-full bg-zinc-500"></span>
                <span>Courses numbered 100-199: Upper Division</span>
              </p>
              <p className="flex items-center gap-2 mt-1">
                <span className="inline-block w-3 h-3 rounded-full bg-primary"></span>
                <span>Courses numbered 200+: Graduate Level</span>
              </p>
            </div>

            <div className="space-y-8">
              {/* Computer Science Courses */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white border-l-4 border-primary pl-3">Computer Science, Electrical & Computer Engineering</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <CourseCard name="Reinforcement Learning" code="COM SCI 260R (Grad)" level="grad" />
                  <CourseCard name="Advanced Deep Learning and Neural Nets" code="ECE C247B (Grad)" level="grad" />
                  <CourseCard name="Deep Learning and Neural Networks" code="ECE C147/247A (Grad)" level="grad" />
                  <CourseCard name="Introduction to Algorithms and Complexity" code="COM SCI 180"level="upper"  />
                  <CourseCard name="Operating Systems" code="COM SCI 111" level="upper" />
                  <CourseCard name="Software Construction" code="COM SCI 35L" level="lower" />
                </div>
              </div>

              {/* Mathematics and Statistics Courses */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white border-l-4 border-primary pl-3">
                  Mathematics, Statistics
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <CourseCard name="Machine Learning" code="MATH M156" level="upper" /> 
                  <CourseCard name="Real Analysis" code="MATH 131A" level="upper" />
                  <CourseCard name="Linear Algebra" code="MATH 115A" level="upper" />
                  <CourseCard name="Introduction to Probability" code="STATS 100A" level="upper" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Volunteering Section
        <section id="volunteering" className="py-10 md:py-16 scroll-mt-16 animate-fade-in">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Volunteering and Campus Activities</h2>
            <div className="space-y-6">
              <ExperienceItem
                title="Learning Assistant"
                company="UCLA Computer Science Department"
                companyUrl="https://www.cs.ucla.edu/"
                period="March 2025 - Present"
                description="Learning Assistant for COM SCI 180: Introduction to Algorithms and Complexity. Lead collaborative discussions, provide one-on-one academic support, and contribute to refining course materials to improve student comprehension and engagement."
                logo="/images/uclacs.jpg"
              />
              <ExperienceItem
                title="Member"
                company="VEST @ UCLA"
                companyUrl=""
                period="January 2025 - Present"
                description="Active member of UCLA’s premier entrepreneurship organization. Leading a product team focused on developing 'Stealth,' a startup concept currently in incubation."
                logo="/images/vest.jpg"
              />
              <ExperienceItem
              title="Computer Engineer (Electrical Subteam)"
              company="Santa Clara University Formula SAE"
              companyUrl=""
              period="September 2023 - May 2024"
              description="Engineered embedded systems and real-time data acquisition tools for SCU’s Formula SAE electric race car. Focused on the Brake Plausibility Device System (BPDS) and Accelerator Pedal Position Sensor (APPS), ensuring both performance and regulatory compliance."
              logo="/images/scuformula.jpg"
            />
            </div>
          </div>
        </section> */}

        {/* Contact Section */}
         <section id="contact" className="py-10 md:py-16 scroll-mt-16 animate-fade-in">
          <div className="space-y-8">
             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Contact</h2>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <p className="text-zinc-400">
                  I'm always open to discussing new projects, opportunities, or partnerships. Feel free to reach out to
                  me through any of the following channels.
                </p>
                <div className="space-y-4 mt-6">
                   <div className="flex items-center gap-3 text-zinc-300 hover:text-primary transition-all p-3 rounded-md border border-zinc-800 bg-zinc-900/30 hover:border-primary/50 hover:bg-zinc-900/50 duration-300">
                    <Mail className="h-5 w-5 text-zinc-500" />
                    <a href="mailto:amit.rand@ucla.edu" className="hover:text-primary transition-colors">amit.rand@ucla.edu</a>
                  </div>

                 <div className="flex items-center gap-3 text-zinc-300 hover:text-primary transition-all p-3 rounded-md border border-zinc-800 bg-zinc-900/30 hover:border-primary/50 hover:bg-zinc-900/50 duration-300">
                    <Linkedin className="h-5 w-5 text-zinc-500" />
                    <Link
                      href="https://www.linkedin.com/in/amit-rand-361b30218/"
                      className="hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin.com/amit-rand
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 border border-zinc-800 rounded-lg overflow-hidden shadow-lg shadow-primary/5">
                <div className="p-6 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Send me a message</h3>
                    <p className="text-zinc-400 text-sm">
                      Fill out the form below and I'll get back to you as soon as possible.
                    </p>
                  </div>

                  <form className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-zinc-300">
                          Name
                        </label>
                        <input
                          id="name"
                          className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm text-zinc-300 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-zinc-300">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm text-zinc-300 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-zinc-300">
                        Subject
                      </label>
                      <input
                        id="subject"
                        className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm text-zinc-300 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-zinc-300">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm text-zinc-300 ring-offset-background placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your message"
                      />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">Send Message</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
       <footer className="border-t border-zinc-800 py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-zinc-500 md:text-left">
            © {new Date().getFullYear()} Amit Rand. All rights reserved.
          </p>
          <div className="flex gap-4">
             <Button variant="ghost" size="icon" className="text-zinc-500 hover:text-white hover:bg-zinc-800" asChild>
              <Link href="https://github.com/randamit123" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
             <Button variant="ghost" size="icon" className="text-zinc-500 hover:text-white hover:bg-zinc-800" asChild>
              <Link href="https://www.linkedin.com/in/amit-rand-361b30218/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="text-zinc-500 hover:text-white hover:bg-zinc-800" asChild>
              <Link href="mailto:amit.rand@ucla.edu" target="_blank" rel="noopener noreferrer">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white hover:bg-zinc-800" asChild>
              <Link href="https://scholar.google.com/citations?user=ejyT4NUAAAAJ&hl=en&oi=sra" target="_blank" rel="noopener noreferrer">
                <GraduationCap className="h-5 w-5" />
                <span className="sr-only">Google Scholar</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ProjectCard({
  title,
  description,
  tags,
  link,
}: {
  title: string
  description: string
  tags: string[]
  link?: string
}) {
  return (
     <Card className="card-gradient border-zinc-800 overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/5 hover:border-zinc-700">
      <CardHeader className="pb-2">
        <CardTitle className="text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-zinc-400">{description}</CardDescription>
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs border-zinc-700 text-zinc-400 bg-zinc-900/50">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
         <Button variant="ghost" size="sm" className="ml-auto text-zinc-400 hover:text-white hover:bg-zinc-800" asChild>
          {link && (
          <Button
            variant="ghost"
            size="sm"
            className="ml-auto text-zinc-400 hover:text-white hover:bg-zinc-800"
            asChild
          >
            <Link href={link} target="_blank" rel="noopener noreferrer">
              View Project <ExternalLink className="ml-2 h-3 w-3" />
            </Link>
          </Button>
        )}
        </Button>
      </CardFooter>
    </Card>
  )
}

function ExperienceItem({
  title,
  company,
  companyUrl,
  period,
  description,
  logo,
}: {
  title: string
  company: string
  companyUrl: string
  period: string
  description: string
  logo: string
}) {
  return (
    <div className="flex gap-4 items-start group">
      <div className="relative h-12 w-12 overflow-hidden rounded-md border border-zinc-800 bg-zinc-900 flex-shrink-0 shadow-lg shadow-primary/5">
        <Image
          src={logo || "/images/qai.svg"}
          alt={`${company} logo`}
          fill
          className="object-cover transition-all group-hover:scale-105"
        />
      </div>
      <div className="space-y-2 border-l-2 border-zinc-800 pl-4 transition-all group-hover:border-primary">
        <div>
          <h3 className="font-semibold text-white">{title}</h3>
          <p className="text-sm text-zinc-500">
            <Link
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              {company}
            </Link>{" "}
            | {period}
          </p>
        </div>
        <p className="text-zinc-400">{description}</p>
      </div>
    </div>
  )
}


function CourseCard({ name, code, level }: { name: string; code: string, level: "lower" | "upper" | "grad";}) {
  let colorClass = "";
  if (level === "lower") colorClass = "bg-zinc-700";
  else if (level === "upper") colorClass = "bg-zinc-500";
  else if (level === "grad") colorClass = "bg-primary";

  return (
    <div className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/30 p-4 transition-all hover:bg-zinc-900/70 hover:shadow-md hover:shadow-primary/5">
      <div className="absolute top-2 right-2 h-8 w-8 opacity-10">
        <Image
          src="/ucla-logo.svg"
          alt="UCLA logo"
          width={32}
          height={32}
          className="opacity-30 group-hover:opacity-50 transition-opacity"
        />
      </div>
      <div className="space-y-2">
        <h4 className="font-medium text-white group-hover:text-primary transition-colors">{name}</h4>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-zinc-900 border-zinc-700 text-zinc-400">
            <span className={`inline-block w-3 h-3 rounded-full mr-1 ${colorClass}`}></span>
            {code}
          </Badge>
        </div>
        <div className="flex items-center gap-1 text-xs text-zinc-500">
          <BookOpen className="h-3 w-3" />
          <span>UCLA</span>
        </div>
      </div>
    </div>
  )
}
