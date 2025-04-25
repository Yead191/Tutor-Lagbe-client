import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ayesha Rahman",
    avatar:
      "https://ui-avatars.com/api/?name=Ayesha+Rahman&background=EDFAFA&color=0D9488&size=80",
    role: "University Student",
    language: "Spanish",
    rating: 5,
    text: "Tutor Lagbe? made learning Spanish so easy! In just a few months, I went from beginner to confidently speaking with my tutor. The platform’s flexibility fits perfectly with my busy uni schedule.",
  },
  {
    id: 2,
    name: "Rahul Das",
    avatar:
      "https://ui-avatars.com/api/?name=Rahul+Das&background=E0F2FE&color=0369A1&size=80",
    role: "Software Developer",
    language: "Japanese",
    rating: 4,
    text: "I’ve tried apps, but nothing beats the personalized lessons from Tutor Lagbe?. The tutors are amazing, and I can schedule sessions around my work hours. My Japanese is improving fast!",
  },
  {
    id: 3,
    name: "Fatima Khan",
    avatar:
      "https://ui-avatars.com/api/?name=Fatima+Khan&background=FCE7F3&color=DB2777&size=80",
    role: "Marketing Professional",
    language: "French",
    rating: 5,
    text: "Thanks to Tutor Lagbe?, I learned French in time for a big client meeting. The tutors are professional, and the platform is so user-friendly. I’m thrilled with my progress!",
  },
  {
    id: 4,
    name: "Arjun Sharma",
    avatar:
      "https://ui-avatars.com/api/?name=Arjun+Sharma&background=EFF6FF&color=2563EB&size=80",
    role: "High School Student",
    language: "Mandarin",
    rating: 5,
    text: "Tutor Lagbe? turned Mandarin from intimidating to fun! My tutor makes every session engaging, and the recurring booking feature keeps me on track with my studies.",
  },
  {
    id: 5,
    name: "Sofia Ahmed",
    avatar:
      "https://ui-avatars.com/api/?name=Sofia+Ahmed&background=FEF3C7&color=D97706&size=80",
    role: "Freelance Writer",
    language: "Italian",
    rating: 4,
    text: "As a freelancer, I love how Tutor Lagbe? lets me learn Italian from anywhere. The native tutors teach practical phrases I can use on my travels. Highly recommend this platform!",
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrevious = () => {
    setAutoplay(false);
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setAutoplay(false);
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const handleDotClick = (index) => {
    setAutoplay(false);
    setActiveIndex(index);
  };

  return (
    <div className="relative overflow-hidden mb-12 py-10">
      <div className="absolute top-0 left-0 -z-10 h-full w-full opacity-50" />

      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">
          What Our Students Say
        </h2>
        <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
          Discover how our platform is helping people around the world master
          new languages and connect with expert tutors.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto px-4">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
          <button
            className="btn btn-outline btn-circle bg-base-100 shadow hover:bg-base-200"
            onClick={handlePrevious}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
          <button
            className="btn btn-outline btn-circle bg-base-100 shadow hover:bg-base-200"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-4 ">
                <div className="card  shadow backdrop-blur-sm  bg-gradient-to-br from-teal-50 to-blue-50">
                  <div className="card-body p-8">
                    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                      <div className="flex-shrink-0">
                        <div className="avatar">
                          <div className="w-20 h-20 rounded-full border-4 border-base-100 shadow">
                            <img
                              src={testimonial.avatar || "/placeholder.svg"}
                              alt={testimonial.name}
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 text-center md:text-left">
                        <div className="relative mb-4">
                          <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20 rotate-180 opacity-50" />
                          <p className="text-base-content italic relative z-10 text-lg">
                            "{testimonial.text}"
                          </p>
                        </div>

                        <div className="mt-4">
                          <h3 className="font-bold text-xl text-base-content">
                            {testimonial.name}
                          </h3>
                          <p className="text-base-content/80">
                            {testimonial.role}
                          </p>
                          <div className="flex items-center mt-1 justify-center md:justify-start">
                            <span className="text-sm font-medium text-primary mr-2">
                              Learning {testimonial.language}
                            </span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < testimonial.rating
                                      ? "text-yellow-400"
                                      : "text-base-300"
                                  }`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                index === activeIndex ? "bg-primary" : "bg-base-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
