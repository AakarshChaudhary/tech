import { BadgeCheck, Clock3, Star } from "lucide-react";
import SectionBadge from '../ui/SectionBadge'

const courseItems = [
  {
    badge: "Bestseller",
    badgeClass: "bg-blue-600",
    title: "Full Stack Web Development",
    rating: "4.9",
    duration: "6 Months",
    support: "Certification",
    description:
      "Master both frontend and backend technologies including React, Node.js, and MongoDB.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    badge: "Trending",
    badgeClass: "bg-violet-600",
    title: "Data Science & Machine Learning",
    rating: "4.8",
    duration: "8 Months",
    support: "Job Assistance",
    description:
      "Deep dive into Python, statistics, and advanced AI models for predictive analytics.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    badge: "Best Value",
    badgeClass: "bg-emerald-600",
    title: "UI/UX Design & Prototyping",
    rating: "4.7",
    duration: "5 Months",
    support: "Portfolio Ready",
    description:
      "Create polished user interfaces and interactive prototypes with modern design tools.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
];

const Courses = () => {
  return (
    <section id="courses" className="bg-[#f4f5f8] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <SectionBadge>Top popular courses</SectionBadge>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Consolidated Courses
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Explore top course categories that change yourself.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {courseItems.map((course, index) => (
            <article
              key={course.title}
              className="overflow-hidden rounded-[22px] bg-[#edf0f6] p-2 shadow-[0_8px_24px_rgba(15,23,42,0.05)] sm:p-3"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="relative overflow-hidden rounded-[16px]">
                <img
                  src={course.image}
                  alt={course.title}
                  loading="lazy"
                  className="h-44 w-full object-cover sm:h-52"
                />

                <span
                  className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-white ${course.badgeClass}`}
                >
                  {course.badge}
                </span>
              </div>

              <div className="px-2 pb-2 pt-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold leading-tight text-slate-700 sm:text-2xl lg:text-[25px]">
                    {course.title}
                  </h3>
                  <p className="mt-1 flex shrink-0 items-center gap-1 text-base font-semibold text-violet-500">
                    <Star className="h-4 w-4 fill-violet-400 text-violet-400" />
                    {course.rating}
                  </p>
                </div>

                <p className="mt-3 text-base font-semibold leading-relaxed text-slate-500 sm:text-lg lg:text-xl">
                  {course.description}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-600 sm:text-base lg:gap-6 lg:text-lg">
                  <p className="flex items-center gap-2">
                    <Clock3 className="h-5 w-5 text-slate-500" />
                    {course.duration}
                  </p>
                  <p className="flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-slate-500" />
                    {course.support}
                  </p>
                </div>

                <button className="mt-5 flex h-11 w-full items-center justify-center rounded-full border-2 border-blue-400 bg-transparent text-base font-semibold text-blue-500 transition hover:bg-blue-50 sm:h-12 sm:text-lg lg:text-xl">
                  View Curriculum
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
