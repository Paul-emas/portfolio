import type { ReactNode } from "react";
import { Dot, MoveUpRight } from "lucide-react";
import { IntroSplash } from "./intro-splash";

type WritingItem = {
  title: string;
  meta: string;
  href: string;
};

type WorkItem = {
  name: string;
  href: string;
  note: string;
};

const work: WorkItem[] = [
  {
    name: "Lenkie",
    href: "https://lenkie.com",
    note: "Built and scaled frontend systems supporting £180M+ in lending, including AI-assisted underwriting, risk tooling and internal operations.",
  },
  {
    name: "Clusta",
    href: "https://clusta.co",
    note: "Co-founded an offline-first property management platform for access control, payments, resident operations and secure communication.",
  },
  {
    name: "Instant Energy",
    href: "https://instantenergy.com.ng",
    note: "Led frontend engineering for an energy platform serving thousands of users across electricity purchases, smart meters and payments.",
  },
  {
    name: "StickerIt",
    href: "https://www.stickerit.co",
    note: "Built multilingual e-commerce experiences and helped migrate the platform to Shopify, improving experimentation, testing and release velocity.",
  },
];

const writing: WritingItem[] = [
  {
    title: "Building a Reusable Table with React, TypeScript, TailwindCSS, and Shadcn/UI",
    meta: "React · TypeScript · Architecture",
    href: "https://dev.to/paulemas/building-a-reusable-table-with-react-typescript-tailwindcss-and-shadcnui-46h1",
  },
  {
    title: "Understanding SOLID Principles in Software Development",
    meta: "Software Architecture",
    href: "https://medium.com/@emaspaul1526/understanding-solid-principles-in-software-development-671bed79227f",
  },
];

const emailHref = "mailto:paulemas02@gmail.com";
const githubHref = "https://github.com/paul-emas";
const linkedInHref = "https://www.linkedin.com/in/paul-emas";

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-(--muted)">
      {children}
    </p>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl space-y-4">
      <SectionLabel>{eyebrow}</SectionLabel>
      <h2 className="font-display text-3xl leading-[1.05] tracking-tighter text-(--ink) sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-7 text-(--body) sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

function TextButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-2 text-sm font-semibold text-(--ink) transition-colors hover:text-(--muted) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-teal) focus-visible:ring-offset-2 focus-visible:ring-offset-(--canvas)"
    >
      <span>{children}</span>
      <MoveUpRight className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Paul Obaro Emas",
    jobTitle: "Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer with 6+ years of experience building scalable fintech, SaaS and AI-powered products with React, TypeScript, Next.js and Vue.",
    email: "paulemas02@gmail.com",
    sameAs: [githubHref, linkedInHref],
    address: {
      "@type": "PostalAddress",
      addressCountry: "Nigeria",
    },
    knowsAbout: [
      "Frontend Architecture",
      "System Design",
      "React",
      "Next.js",
      "Vue",
      "TypeScript",
      "AI-powered product integrations",
      "Fintech",
      "Performance Optimization",
      "Testing",
    ],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "National Institute of Information Technology",
      },
      {
        "@type": "Course",
        name: "CS50: Introduction to Computer Science",
      },
      {
        "@type": "Course",
        name: "FreeCodeCamp Frontend Certification",
      },
    ],
  };

  return (
    <>
      <IntroSplash />
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-5 pb-16 pt-5 sm:px-8 sm:pb-20 lg:pt-8">
        <header className="border-b border-(--hairline-soft) pb-5">
          <div className="flex items-center justify-between gap-4 py-1">
            <a href="#top" className="text-sm font-semibold tracking-tight text-(--ink)">
              Paul Emas
            </a>
            <div className="flex items-center gap-4 text-sm text-(--body)">
              <a href={githubHref} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-(--ink)">
                GitHub
              </a>
              <a href={linkedInHref} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-(--ink)">
                LinkedIn
              </a>
              <a href={emailHref} className="transition-colors hover:text-(--ink)">
                Email
              </a>
            </div>
          </div>
        </header>

        <section id="top" className="space-y-5 pt-1">
          <div className="space-y-3">
              <SectionLabel>Senior Frontend Engineer</SectionLabel>
              <h1 className="max-w-[11ch] font-display text-4xl leading-[0.96] tracking-tighter text-(--ink) sm:text-5xl">
                Paul Emas
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-(--body-strong) sm:text-xl">
                Senior Frontend Engineer building complex, scalable products across fintech, SaaS and AI.
              </p>
              <p className="max-w-2xl text-base leading-7 text-(--body)">
                I build production software across fintech, SaaS, proptech and commerce. Currently based in Nigeria, relocating to Spain and open to remote product teams.
              </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-sm text-(--muted)">
            <span>6+ years building products</span>
            <Dot className="h-4 w-4" aria-hidden="true" />
            <span>£180M+ lending workflows supported</span>
            <Dot className="h-4 w-4" aria-hidden="true" />
            <span>Remote-friendly</span>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#work" className="button-primary">
                Selected Work
              </a>
              <a href={emailHref} className="button-secondary">
                Email me
              </a>
          </div>
        </section>

        <section id="work" className="space-y-6 pt-6 sm:pt-8">
          <SectionHeading
            eyebrow="Work"
            title="A few things I’ve worked on"
          />

          <div className="space-y-5">
            {work.map((item) => (
              <article key={item.name} className="border-t border-(--hairline-soft) pt-4 sm:pt-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-base font-semibold tracking-tight text-(--ink)">{item.name}</h3>
                    <p className="text-sm leading-7 text-(--body)">{item.note}</p>
                  </div>
                  <TextButton href={item.href}>Visit</TextButton>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="writing" className="space-y-6 pt-6 sm:pt-8">
          <SectionHeading
            eyebrow="Writing"
            title="Occasionally I write"
          />

          <div className="space-y-4">
            {writing.map((article) => (
              <article key={article.title} className="border-t border-(--hairline-soft) pt-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="text-sm font-medium leading-6 text-(--ink) sm:text-base">
                      {article.title}
                    </h3>
                    <p className="text-xs leading-6 text-(--muted) sm:text-sm">{article.meta}</p>
                  </div>
                  <a
                    href={article.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-(--ink) transition-colors hover:text-(--muted)"
                  >
                    <span>Read</span>
                    <MoveUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="border-t border-(--hairline-soft) pt-6 sm:pt-8"
        >
          <SectionLabel>Contact</SectionLabel>
          <h2 className="mt-4 max-w-xl font-display text-3xl leading-[1.02] tracking-tighter text-(--ink) sm:text-4xl">
            Open to good product work.
          </h2>
          <p className="mt-3 max-w-xl text-base leading-7 text-(--body)">
            Looking for Senior Frontend opportunities with remote-first product teams.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-(--body)">
            <a href={emailHref} className="font-medium text-(--ink) transition-colors hover:text-(--muted)">
              Email
            </a>
            <a href={linkedInHref} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-(--ink)">
              LinkedIn
            </a>
            <a href={githubHref} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-(--ink)">
              GitHub
            </a>
          </div>
        </section>

      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
