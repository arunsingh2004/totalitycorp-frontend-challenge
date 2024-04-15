import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Feedback = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    return () => {
      if (localStorage.getItem("token")) {
        router.push("/");
      }
    };
  }, []);

  const handleChange = (e) => {
    if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "password") {
      setPassword(e.target.value);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    console.log(response);
    setEmail("");
    setPassword("");
    if (response.success) {
      localStorage.setItem("token", response.token);
      toast.success("Succesfully Login", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        router.push(process.env.NEXT_PUBLIC_HOST);
      }, 1000);
    } else {
      toast.error("Invalid Credentials", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      {/* <div
          className="xl:container mx-auto mb-32 mt-20 w-full  h-96"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 255, 255, 0.8) 10%, rgba(255, 255, 255, 0.5) 70%, rgba(0, 0, 0, 0.3) 100%), linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
            backgroundImage: `url(./contactus1.jpg)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
          }}
        ></div> */}
      <div classsName="relative flex  flex-row">
        <div className="flex  -mt-12 min-h-full  flex-col  justify-center px-6 py-12 lg:px-8">
          <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Link href={"/"}>
              {/* <Image
              className="mx-auto"
              src="/logo.png"
              width={100}
              height={40}
              alt=""
            /> */}
            </Link>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Give Your Feedback
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              onSubmit={handleSubmit}
              className="space-y-6   m-4"
              method="POST"
            >
              <div>
                <label
                  for="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    value={email}
                    onChange={handleChange}
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    for="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  {/* <div className="text-sm">
                  <Link href={"/forgot"}>
                    <div className="font-semibold text-blue-600 hover:text-blue-500">
                      Forgot password?
                    </div>
                  </Link>
                </div> */}
                </div>
                <div className="mt-2">
                  <input
                    value={password}
                    onChange={handleChange}
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="px-2">
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm font-bold text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      //   onChange={handleChange}
                      id="address"
                      cols="30"
                      rows="2"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Sending
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?
              <Link
                href={"/signup"}
                className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
              >
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
