import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3 } from "lucide-react";

export default function WelcomeScreen() {
  const features = [
    {
      icon: "/icons/general-dashboard.svg",
      title: "General Dashboard",
      description:
        "A unified view of key metrics, actionable insights, and real-time reporting to help you make informed decisions faster.",
      color: "bg-[#3665CA]",
      bgLight: "bg-white",
      borderColor: "border-l-[#3665CA]",
      shadowColor: "shadow-blue-200/50",
      textColor: "text-blue-600",
    },
    {
      icon: "/icons/analytic-dashboard.svg",
      title: "Analytic Dashboard",
      description:
        "Real-time dashboards with actionable insights on workforce engagement, skill progression, and learning outcomes.",
      color: "bg-[#F2BAAB]",
      bgLight: "bg-indigo-50",
      borderColor: "border-l-[#F2BAAB]",
      shadowColor: "shadow-[#F2BAAB]/50",
      textColor: "text-indigo-600",
    },
    {
      icon: "/icons/compliance-monitoring.svg",
      title: "Compliance Monitoring",
      description:
        "Automated tracking, audit-ready reports, and centralized monitoring to keep your organization away from compliant.",
      color: "bg-[#FEE1F3]",
      bgLight: "bg-sky-50",
      borderColor: "border-l-[#FEE1F3]",
      shadowColor: "shadow-[#FEE1F3]/50",
      textColor: "text-sky-600",
    },
    {
      icon: "/icons/employee-management.svg",
      title: "Employee Management",
      description:
        "Centralized employee records, and real-time workforce insights to streamline people management across your organization.",
      color: "bg-[#BDECBB]",
      bgLight: "bg-violet-50",
      borderColor: "border-l-[#BDECBB]",
      shadowColor: "shadow-[#BDECBB]/50",
      textColor: "text-violet-600",
    },
    {
      icon: "/icons/assignment-management.svg",
      title: "Assignment Management",
      description:
        "Smart task allocation, progress tracking, and automated workflows to ensure every assignment is completed on time.",
      color: "bg-[#CECDFE]",
      bgLight: "bg-emerald-50",
      borderColor: "border-l-[#CECDFE]",
      shadowColor: "shadow-[#CECDFE]/50",
      textColor: "text-emerald-600",
    },
    {
      icon: "/icons/learning-dashboard.svg",
      title: "Learning Dashboard",
      description:
        "Personalized learning paths, and certification tracking to empower continuous employee growth and development.",
      color: "bg-[#D79697]",
      bgLight: "bg-amber-50",
      borderColor: "border-l-[#D79697]",
      shadowColor: "shadow-[#D79697]/50",
      textColor: "text-amber-600",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f8fafc]">
      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Hero Section */}
        <div className="text-center mb-20">
          {/* Logo */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <Image
              src="/icons/skillora-logo.svg"
              alt="SkillOra Logo"
              width={96}
              height={96}
              className="relative z-10"
              priority
            />
            <p className="text-black font-bold text-[65px]">SkillOra</p>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl font-bold text-black lg:text-[38px] tracking-tight mb-6">
            Welcome to back
          </h1>

          {/* Subtitle */}
          <p className="max-w-[760px] font-normal mx-auto text-lg md:text-xl text-[#6B7280] leading-relaxed mb-12">
            Empower your workforce with intelligent analytics, automated
            compliance, and adaptive learning paths that drive real business
            outcomes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              // href="/dashboard"
              href="/sign-in"
              className="group inline-flex items-center gap-3 rounded-xl bg-[#2563eb] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:bg-[#1d4ed8] hover:shadow-xl hover:shadow-blue-300/50 hover:-translate-y-0.5"
            >
              <BarChart3 size={20} />
              Sign In to Dashboard
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {features.map((feature) => {
            const icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group relative rounded-2xl bg-white p-7 ${feature.borderColor} border-l-4 border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-2 ${feature.shadowColor} hover:shadow-xl`}
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} p-3 mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Image
                    src={icon}
                    alt={feature.title}
                    width={26}
                    height={26}
                  />
                </div>

                <h3
                  className={`text-lg font-semibold text-slate-900 mb-3 group-hover:${feature.textColor} transition-colors duration-300`}
                >
                  {feature.title}
                </h3>

                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center py-6">
          <p className="font-normal text-base italic items-center text-[#707070]">
            ...Building capable teams, one skill at a time
          </p>
        </div>
      </div>
    </div>
  );
}
