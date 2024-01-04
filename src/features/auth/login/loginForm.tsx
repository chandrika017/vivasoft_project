import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginSchema } from "@/validators/AuthSchema";
import { useLoginMutation } from "@/services/auth/authApi";
import Error from "@/components/ui/error";

const LoginForm = () => {
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
    reValidateMode: "onChange",
    shouldFocusError: true,
  });

  const [login, { data: LoginResponse, isLoading, error: responseError }]: any =
    useLoginMutation();

  const dataSubmit = (data: any) => {
    login(data);
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (responseError?.status == "FETCH_ERROR") {
      setError("Something went wrong");
    }
    if (responseError?.data) {
      setError(responseError.data);
    }
    if (LoginResponse?.data?.accessToken && LoginResponse?.data?.user) {
      navigate("/dashboard");
    }
    console.log(responseError);
  }, [LoginResponse, responseError, navigate]);

  const validError: any = errors;

  return (
    <>
      <h3 className="my-4 text-2xl text-center font-semibold text-gray-700">
        Account Login
      </h3>
      {error !== "" && <Error message={error} />}
      <form
        onSubmit={handleSubmit(dataSubmit)}
        className="flex flex-col space-y-5"
      >
        <div className="flex flex-col space-y-1">
          <label
            htmlFor="username"
            className="text-sm font-semibold text-gray-500"
          >
            Username
          </label>
          <input
            {...register("username")}
            type="text"
            id="username"
            autoFocus
            className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
          />
          {validError.username?.message && (
            <p className="text-red-600 ">{validError?.username?.message}</p>
          )}
        </div>

        <div className="flex flex-col space-y-1">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-gray-500"
            >
              Password
            </label>
            <Link
              to="#"
              className="text-sm text-blue-600 hover:no-underline focus:text-blue-800"
            >
              Forgot Password?
            </Link>
          </div>
          <input
            {...register("password")}
            type="password"
            id="password"
            className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
          />
          {validError.password?.message && (
            <p className="text-red-600 ">{validError?.password?.message}</p>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="remember"
            className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
          />
          <label
            htmlFor="remember"
            className="text-sm font-semibold text-gray-500"
          >
            Remember me
          </label>
        </div>

        <div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
          >
            Log in
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
