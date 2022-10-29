import Head from "next/head";
import Image from "next/image";

const Login = () => {
  
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>FranoTmdb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://imgur.com/FjOCtNr.png"
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

      <form className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14">
        <h1 className="text-4xl font-semibold">Sing In</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input type="email" placeholder="Email" className="input" />
          </label>
          <label className="inline-block w-full">
            <input type="password" placeholder="Password" className="input" />
          </label>
        </div>
        <button className="w-full roudned bg-blue-500 py-3 font-semibold ">
          Sign In
        </button>
        <div className="text-[gray]">
          New to FranoTmdb?{"  "}
          <button type="submit" className="hover:underline hover:text-blue-700 text-blue-500">
            Sing up now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
// https://imgur.com/5N2hKF4.png
