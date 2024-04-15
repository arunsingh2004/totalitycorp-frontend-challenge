import React from "react";
import Link from "next/link";
const Contents = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              OneStop Solution
              <span className="text-blue-600 font-bold -translate-x-8 text-4xl font-serif">
                {" "}
                - OneStopSolution.com
              </span>
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              To Automate the On-ground household services to an Online
              E-commerce software for a One-stop solution to different variety
              of household related services, with the help of computerized
              equipment and full-fledged computer software, fulfilling the
              user’s requirements, so that they not need to search for household
              services On-ground manually and their valuable time will also be
              saved.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  {/* <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg> */}
                  🧾
                </div>
                <Link href="https://www.mobikwik.com/" target="_blank">
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Bills & Recharge
                  </h2>
                  <p className="leading-relaxed text-base">
                    Pay your bills & recharge instantly with OneStop Solution
                  </p>
                </Link>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  {/* <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg> */}
                  🚗
                </div>
                <Link
                  href="https://www.makemytrip.com/flights/?gclid=CjwKCAiAvJarBhA1EiwAGgZl0Cihq8fFnmATVjY6EY-iXS3uqIofqehsVJymul7Sy1iyO0cM9qPjwxoCiCkQAvD_BwE&cmp=SEM|D|DF|G|Generic|Generic-Generic_DT|DF_Generic_Exact|RSA|Offer3|673438880810&s_kwcid=AL!1631!3!673438880810!e!!g!!travel%20bookings&ef_id=CjwKCAiAvJarBhA1EiwAGgZl0Cihq8fFnmATVjY6EY-iXS3uqIofqehsVJymul7Sy1iyO0cM9qPjwxoCiCkQAvD_BwE:G:s&gad_source=1"
                  target="_blank"
                >
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Travel Bookings
                  </h2>
                  <p className="leading-relaxed text-base">
                    Instant ticket bookings for your best travel experience
                  </p>
                </Link>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  {/* <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg> */}
                  🩺
                </div>
                <Link
                  href="https://www.appointlet.com/?gclid=CjwKCAiAvJarBhA1EiwAGgZl0GIJasFseCsbkVk9PPDxu7pS3bXjJDLqEEGirc-GO4XoVhDMKf5OuhoCro4QAvD_BwE"
                  target="_blank"
                >
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Doctor Appointment
                  </h2>
                  <p className="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waist co, subway
                    tile poke farm.
                  </p>
                </Link>
              </div>
            </div>

            {/* <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Melanchole
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Bunker
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Ramona Falls
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contents;
