import { FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const LearningBenefits = () => {
  const benefits = [
    {
      id: 1,
      title: "Personalized Learning",
      description:
        "Tailored lessons designed to match your learning style and goals.",
      icon: "📚",
    },
    {
      id: 2,
      title: "Flexible Scheduling",
      description: "Book lessons at your convenience, anytime, anywhere.",
      icon: "🕒",
    },
    {
      id: 3,
      title: "Cultural Immersion",
      description:
        "Learn from native speakers and dive into the culture behind the language.",
      icon: "🌍",
    },
  ];

  return (
    <div className="py-12 bg-white">
      <h1 className="text-4xl font-semibold text-center leading-10 mb-2">
        Why Learn With Us?
      </h1>
      <p className="text-[#66789c] leading-5 text-2xl text-center mb-8">
        Discover the benefits of mastering a new language with our expert
        tutors.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:w-10/12 mx-auto">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="p-6 rounded-lg border shadow-md hover:shadow-lg transition transform lg:hover:-translate-y-2 lg:duration-500 lg:ease-in-out text-center"
          >
            <div className="text-5xl mb-4">{benefit.icon}</div>
            <h2 className="text-xl lg:text-2xl font-semibold mb-2">
              {benefit.title}
            </h2>
            <p className="text-[#66789c] leading-6">{benefit.description}</p>
          </div>
        ))}
      </div>
      {/* <div className="text-center mt-8">
        <Link
          to="/signup"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
        ></Link>
      </div> */}
      <div className="place-items-center">
        <Link
          to="/find-tutors"
          className="group text-white my-6 px-6 py-3 rounded-none shadow-lg flex items-center gap-2 hover:scale-105 hover:shadow-xl transition-transform duration-300"
          style={{
            background: "linear-gradient(-30deg, #6c2a8c 50%, #a71678 50%)",
          }}
        >
          Start Learning Today
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-3" />
        </Link>
      </div>
    </div>
  );
};

export default LearningBenefits;
