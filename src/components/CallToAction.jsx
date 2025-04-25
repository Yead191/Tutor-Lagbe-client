import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="py-12 bg-base-200 ">
      <div className="md:w-10/12 mx-auto text-center">
        <h1 className="text-4xl font-semibold leading-10 mb-4">
          Start Your Language Learning Journey Today!
        </h1>
        <p className="text-xl leading-6 mb-8">
          Sign up now and book your first lesson with a language specialist.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Link
            to={"/find-tutors"}
            className="btn text-white flex items-center gap-2 btn-wide btn-lg rounded-full "
            style={{
              background: "linear-gradient(90deg, #ad32a2, #58034a)",
              color: "white",
            }}
          >
            Get Started for Free
          </Link>
          <Link
            to={"/find-tutors"}
            className="btn text-black bg-white flex items-center gap-2 btn-wide btn-lg rounded-full "
          >
            Book a Demo Lesson
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
