import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { useContext } from "react";
import { GlobalContext } from "@utils/GlobalContext";
import BackToTop from '@components/BackToTop';
import Layout from '@components/Layout';
import Navbar from '@components/Navbar';
import Head from 'next/head';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
// Default theme
import '@splidejs/react-splide/css';
// or other themes
// import '@splidejs/react-splide/css/skyblue';
// import '@splidejs/react-splide/css/sea-green';
// or only core styles
// import '@splidejs/react-splide/css/core';

export default function Slider() {
  const { darkMode, setDarkMode } = useContext(GlobalContext);
  return (
    <>
      <style jsx>
        {`
          
        `}
      </style>
      <Head>
        <title>Splide.js Page</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Layout>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-white">
            Splide Nav Pagination
          </h1>
          <Splide aria-label="My Favorite Images"
            options={{
              type: 'loop',
              autoplay: true,
              rewind: true,
              gap: '1rem',
              drag: 'free',
            }}
          >
            <SplideSlide>
              <div className="bg-purple-500 h-60 text-center flex justify-center items-center rounded-lg">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 1</h1>
                  <h2 className="text-white text-lg">Text 1</h2>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="bg-emerald-500 h-60 text-center flex justify-center items-center rounded-lg">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 2</h1>
                  <h2 className="text-white text-lg">Text 2</h2>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="bg-orange-500 h-60 text-center flex justify-center items-center rounded-lg">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 3</h1>
                  <h2 className="text-white text-lg">Text 3</h2>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="bg-red-500 h-60 text-center flex justify-center items-center rounded-lg">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 4</h1>
                  <h2 className="text-white text-lg">Text 4</h2>
                </div>
              </div>
            </SplideSlide>
          </Splide>

          <Splide aria-label="My Favorite Images"
            options={{
              type: 'loop',
              autoplay: true,
              rewind: true,
              gap: '1rem',
              pagination: false,
              arrows: false,
              focus: 'center',
              perPage: 2,
              drag: false,
              // interval: 0,
              // speed: 20000
            }}
          >
            <SplideSlide>
              <div className="bg-purple-500 h-60 text-center flex justify-center items-center rounded-lg">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 1</h1>
                  <h2 className="text-white text-lg">Text 1</h2>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="bg-emerald-500 h-60 text-center flex justify-center items-center rounded-lg">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 2</h1>
                  <h2 className="text-white text-lg">Text 2</h2>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="bg-orange-500 h-60 text-center flex justify-center items-center rounded-lg">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 3</h1>
                  <h2 className="text-white text-lg">Text 3</h2>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="bg-red-500 h-60 text-center flex justify-center items-center rounded-lg">
                <div>
                  <h1 className="text-white font-medium text-2xl">Text 4</h1>
                  <h2 className="text-white text-lg">Text 4</h2>
                </div>
              </div>
            </SplideSlide>
          </Splide>

          <Splide aria-label="My Favorite Images"
            options={{
              type: 'loop',
              autoplay: true,
              perPage: 3,
              rewind: true,
              gap: '1rem',
            }}
            hasTrack={false}
          >
            <div>
              <SplideTrack>
                <SplideSlide>
                  <div className="bg-purple-500 h-60 text-center flex justify-center items-center rounded-lg">
                    <div>
                      <h1 className="text-white font-medium text-2xl">Text 1</h1>
                      <h2 className="text-white text-lg">Text 1</h2>
                    </div>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="bg-emerald-500 h-60 text-center flex justify-center items-center rounded-lg">
                    <div>
                      <h1 className="text-white font-medium text-2xl">Text 2</h1>
                      <h2 className="text-white text-lg">Text 2</h2>
                    </div>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="bg-orange-500 h-60 text-center flex justify-center items-center rounded-lg">
                    <div>
                      <h1 className="text-white font-medium text-2xl">Text 3</h1>
                      <h2 className="text-white text-lg">Text 3</h2>
                    </div>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="bg-red-500 h-60 text-center flex justify-center items-center rounded-lg">
                    <div>
                      <h1 className="text-white font-medium text-2xl">Text 4</h1>
                      <h2 className="text-white text-lg">Text 4</h2>
                    </div>
                  </div>
                </SplideSlide>
              </SplideTrack>
              <div className="splide__arrows">
                <button className="splide__arrow splide__arrow--prev">Prev</button>
                <button className="splide__arrow splide__arrow--next">Next</button>
              </div>
              <div className="splide__progress">
                <div className="splide__progress__bar" />
              </div>

              <button className="splide__toggle" type="button">
                <span className="splide__toggle__play">Play</span>
                <span className="splide__toggle__pause">Pause</span>
              </button>
            </div>
          </Splide>

          <div className="!py-2 px-2 rounded mx-4 bg-opacity-20 dark:bg-opacity-40 bg-gray-100 dark:bg-neutral-800 backdrop-filter backdrop-blur fixed bottom-20 right-3 md:right-10 z-10">
            {darkMode ?
              <button onClick={() => setDarkMode(!darkMode)} aria-label="Change Theme" className="w-8 h-8 p-1 transition-all ease-in duration-300 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full">
                <SunIcon />
              </button>
              :
              <button onClick={() => setDarkMode(!darkMode)} aria-label="Change Theme" className="w-8 h-8 p-1 transition-all ease-in duration-300 bg-gray-100 hover:bg-gray-200 rounded-full">
                <MoonIcon />
              </button>
            }
          </div>

          <BackToTop />

        </main>
      </Layout>
    </>
  )
}