import { Link } from "react-router-dom";
import LoginForm from "./loginForm";
import LoginSocial from "./loginSocial";

const Login = () => {
  return (
    <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
      <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-md max md:flex-row md:flex-1 lg:max-w-screen-md">
        <div className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
          <div className="my-3 text-4xl font-bold tracking-wider text-center">
            <Link to="/">Vivasoft</Link>
          </div>
          <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
            Vivasoft specializes in providing custom software development
            services. Get premium software solutions from a reliable outsourcing
            partner and set your business apart. Skilled teams that can design,
            build, space and scale your vision in the most efficient way.
          </p>
          <p className="flex flex-col items-center justify-center mt-10 text-center">
            <span>Don't have an account?</span>
            <Link to="/singup" className="underline">
              Get Started!
            </Link>
          </p>
          <p className="mt-6 text-sm text-center text-gray-300">
            Read our{" "}
            <Link to="#" className="underline">
              terms and conditions
            </Link>
          </p>
        </div>
        <div className="p-5 bg-white md:flex-1">
          <LoginForm />
          <div className="flex flex-col">
            <span className="flex items-center justify-center space-x-2 my-3">
              <span className="h-px bg-gray-400 w-14"></span>
              <span className="font-normal text-gray-500">or login with</span>
              <span className="h-px bg-gray-400 w-14"></span>
            </span>
            <LoginSocial />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
