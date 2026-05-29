import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Shield,
  BookOpen,
  Target,
  Award,
  Star,
  Play,
} from "lucide-react";

export default function WelcomeScreen() {
  const features = [
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description:
        "Real-time dashboards with actionable insights on workforce engagement, skill progression, and learning outcomes.",
      color: "from-blue-500 to-blue-600",
      bgLight: "bg-blue-50",
      borderColor: "border-l-blue-500",
      shadowColor: "shadow-blue-200/50",
      textColor: "text-blue-600",
    },
    {
      icon: Shield,
      title: "Compliance Management",
      description:
        "Automated tracking, audit-ready reports, and centralized monitoring to keep your organization always compliant.",
      color: "from-indigo-500 to-indigo-600",
      bgLight: "bg-indigo-50",
      borderColor: "border-l-indigo-500",
      shadowColor: "shadow-indigo-200/50",
      textColor: "text-indigo-600",
    },
    {
      icon: BookOpen,
      title: "Smart Learning Paths",
      description:
        "AI-powered personalized learning journeys that adapt to each employee's role, skills, and career aspirations.",
      color: "from-sky-500 to-sky-600",
      bgLight: "bg-sky-50",
      borderColor: "border-l-sky-500",
      shadowColor: "shadow-sky-200/50",
      textColor: "text-sky-600",
    },
    {
      icon: Target,
      title: "Skills Assessment",
      description:
        "Identify skill gaps, track certifications, and measure competency levels across your entire organization.",
      color: "from-violet-500 to-violet-600",
      bgLight: "bg-violet-50",
      borderColor: "border-l-violet-500",
      shadowColor: "shadow-violet-200/50",
      textColor: "text-violet-600",
    },
    {
      icon: Award,
      title: "Certification Tracking",
      description:
        "Automate certificate issuance, renewal reminders, and maintain a verifiable record of all credentials.",
      color: "from-emerald-500 to-emerald-600",
      bgLight: "bg-emerald-50",
      borderColor: "border-l-emerald-500",
      shadowColor: "shadow-emerald-200/50",
      textColor: "text-emerald-600",
    },
    {
      icon: Star,
      title: "Engagement Gamification",
      description:
        "Boost motivation with leaderboards, badges, and rewards that make learning competitive and fun.",
      color: "from-amber-500 to-amber-600",
      bgLight: "bg-amber-50",
      borderColor: "border-l-amber-500",
      shadowColor: "shadow-amber-200/50",
      textColor: "text-amber-600",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f8fafc]">
      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Top Badge */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-2 shadow-sm">
            <div className="flex h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-sm font-medium text-slate-700">
              Workforce Learning & Compliance Platform
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-20">
          {/* Logo */}
          <div className="flex justify-center mb-10">
            <Image
              src="/icons/skillora-logo.svg"
              alt="SkillOra Logo"
              width={96}
              height={96}
              className="relative z-10"
              priority
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl text-slate-900 sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Welcome to{" "}
            <span className="text-[#4f46e5] bg-clip-text">SkillOra</span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-600 leading-relaxed mb-12">
            Empower your workforce with intelligent analytics, automated
            compliance, and adaptive learning paths that drive real business
            outcomes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/dashboard"
              className="group inline-flex items-center gap-3 rounded-xl bg-[#2563eb] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:bg-[#1d4ed8] hover:shadow-xl hover:shadow-blue-300/50 hover:-translate-y-0.5"
            >
              <BarChart3 size={20} />
              Go to Dashboard
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </Link>

            <Link
              href="/sign-up"
              className="group inline-flex items-center gap-3 rounded-xl border-2 border-[#e2e8f0] bg-white px-8 py-4 text-base font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:border-[#2563eb] hover:text-[#2563eb] hover:shadow-md hover:-translate-y-0.5"
            >
              <Play size={20} />
              Start Free Trial
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group relative rounded-2xl bg-white p-7 ${feature.borderColor} border-l-4 border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-2 ${feature.shadowColor} hover:shadow-xl`}
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} p-3 mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent size={26} className="text-white" />
                </div>

                <h3
                  className={`text-lg font-semibold text-slate-900 mb-3 group-hover:${feature.textColor} transition-colors duration-300`}
                >
                  {feature.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center pt-12 pb-12 border-t border-b border-slate-200">
          <p className="font-medium text-md italic items-center text-slate-600">
            ...Building capable teams, one skill at a time
          </p>
        </div>
      </div>
    </div>
  );
}
