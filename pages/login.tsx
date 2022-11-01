import { sign } from "crypto";
import { signInWithPopup } from "firebase/auth";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";

interface Inputs {
  email: string;
  password: string;
}

const Login = () => {
  const [login, setLogin] = useState(false);
  const {signIn,signUp}= useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async ({email,password}) => {
    if (login) {
      await signIn(email,password)
    }else{
      await signUp(email,password)
    }
  };

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>FranoTmdb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://imgur.com/eRkkMdH.png"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />

      <img
        src="https://imgur.com/5N2hKF4.png"
        className="absolute left-2 top-4 cursor-pointer object-contain md:left-4 md:top-4"
        width={50}
        height={50}
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
      >
        <h1 className="text-4xl font-semibold">Sing In</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="Email"
              className="input"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="p-1 text-[13px] font-ligth text-red-600">
                Please enter an email
              </p>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="Password"
              className="input"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="p-1 text-[13px] font-ligth text-red-600">
                Enter your password
              </p>
            )}
          </label>
        </div>
        <button
          className="w-full roudned bg-blue-500 py-3 font-semibold "
          onClick={() => setLogin(true)}
        >
          Sign In
        </button>
        <div className="text-[gray]">
          New to FranoTmdb?{"  "}
          <button
            type="submit"
            className="hover:underline hover:text-blue-700 text-blue-500"
            onClick={() => setLogin(false)}
          >
            Sing up now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
// https://imgur.com/5N2hKF4.png
