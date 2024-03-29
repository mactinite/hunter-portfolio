import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ReactFullpage from '@fullpage/react-fullpage';
import { FaItchIo, FaGithub, FaLinkedin, FaMouse } from 'react-icons/fa';
import { BsChevronDoubleDown, BsChevronDoubleUp } from 'react-icons/bs';
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hunter MacDonald, Web Developer</title>
        <meta name="Hunter MacDonald, Web Developer" content="Hunter's Web Development portfolio site." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ReactFullpage
        scrollingSpeed={1000} /* Options here */
        sectionsColor={["#1E2A21", "#2A281E", "#261E2A", "#1E292A"]}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>

              <div className="section">
                <div className='flex flex-col mx-auto px-4 lg:px-32'>
                  <h1 className='text-4xl font-mono'>Hunter MacDonald,</h1>
                  <h2 className='text-3xl font-bold font-mono'>Web Developer</h2>
                  <h3 className='text-base text-opacity-50'>React // Typescript // Node.js</h3>

                </div>
                <button
                  onClick={() => fullpageApi.moveSectionDown()}
                  className='flex flex-col justify-center items-center absolute bottom-8 w-full gap-1'
                  title='Scroll for more'
                >
                  <div>
                    <BsChevronDoubleDown className='animate-ping absolute' />
                    <BsChevronDoubleDown className='' />
                  </div>
                </button>
              </div>

              <div className="section">
                <button
                  onClick={() => fullpageApi.moveSectionUp()}
                  className='flex flex-col justify-center items-center absolute top-8 w-full gap-1'
                  title='Last slide'
                >
                  <div>
                    <BsChevronDoubleUp className='' />
                  </div>
                </button>
                <div className='flex flex-col mx-auto px-8 lg:px-32 gap-4'>
                  <h1 className='text-3xl font-bold font-mono'>About Me</h1>
                  <p>
                    I&apos;ve been a professional web developer since 2016. I have built up experience working for companies like AT&amp;T and Microsoft.
                    Working primarily with React, I completed many features and
                    delivered to millions of customers.
                  </p>
                </div>
                <button
                  onClick={() => fullpageApi.moveSectionDown()}
                  className='flex flex-col justify-center items-center absolute bottom-8 w-full gap-1'
                  title='Next Slide'
                >
                  <div>
                    <BsChevronDoubleDown className='' />
                  </div>
                </button>
              </div>

              <div className="section">
                <button
                  onClick={() => fullpageApi.moveSectionUp()}
                  className='flex flex-col justify-center items-center absolute top-8 w-full gap-1'
                  title='Last slide'
                >
                  <div>
                    <BsChevronDoubleUp className='' />
                  </div>
                </button>
                <div className='flex flex-col mx-auto px-8 lg:px-32 gap-4'>
                  <h1 className='text-3xl font-bold font-mono'>My Work</h1>
                  <p className=''>
                    On top of the work I&apos;ve done professionally, I&apos;ve also made many personal projects which can be browsed on GitHub and Itch.io.
                  </p>
                  <div className='text-3xl flex gap-4'>
                    <a href='https://github.com/mactinite' className='opacity-75 hover:opacity-100' title='GitHub'>
                      <FaGithub width={128} height={128} />
                    </a>
                    <a href='https://mactinite.itch.io/' className='opacity-75 hover:opacity-100' title='Itch.io'>
                      <FaItchIo width={128} height={128} />
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => fullpageApi.moveSectionDown()}
                  className='flex flex-col justify-center items-center absolute bottom-8 w-full gap-1'
                  title='Next Slide'
                >
                  <div>
                    <BsChevronDoubleDown className='' />
                  </div>
                </button>
              </div>

              <div className="section">
                <button
                  onClick={() => fullpageApi.moveSectionUp()}
                  className='flex flex-col justify-center items-center absolute top-8 w-full gap-1'
                  title='Last Slide'
                >
                  <div>
                    <BsChevronDoubleUp className='' />
                  </div>
                </button>
                <div className='flex flex-col mx-auto px-8 lg:px-32 gap-4'>
                  <h1 className='text-3xl font-bold font-mono'>Contact Me</h1>
                  <p >
                    If you&apos;d like to reach out for work opportunities please contact me on the following platforms
                  </p>
                  <div className='text-3xl flex gap-4'>
                    <a href='https://www.linkedin.com/in/hunter-macdonald/' className='opacity-75 hover:opacity-100' title='LinkedIn'>
                      <FaLinkedin width={128} height={128} />
                    </a>
                  </div>
                </div>
              </div>
            </ReactFullpage.Wrapper>
          );
        }} />

    </>
  )
}

export default Home
