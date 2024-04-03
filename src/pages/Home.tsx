import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Card from '../components/Card';
import { TypeAnimation } from 'react-type-animation';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }: { id: Number, open: any }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

const useMountEffect = (fun: any) => useEffect(fun, []);

const Home: React.FC = () => {
  const [open, setOpen] = React.useState(1);
  const myRef: any = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();
  useMountEffect(executeScroll);
 
  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className="mx-auto px-8 md:px-24 py-10" style={{ backgroundColor: '#CAEEFB' }}>
        <div className="mx-auto md:flex justify-between gap-10">
          <div>
            <h1 className="text-white text-4xl font-bold mb-5"></h1>
            <h1 className="text-4xl font-bold text-gray-800 mb-6" style={{ fontSize: '50px' }}>
              Welcome to Arif.
            </h1>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Where Data Meets Intelligence!
            </h1>
            <h1 className="text-2xl font-bold text-gray-800 mb-8 ">
              Every marketer can benefit from this solution.
            </h1>
            <button onClick={executeScroll} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Why Us</button>
            {/* <a href="https://wa.me/628117576088" className="shadow focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-800 dark:focus:ring-green-800 ">Let's connect</a> */}
          </div>
          <div className="w-auto">
            <img src="/assets/banner1.png" className="md:h-[420px] md:w-[600px]" alt="Banner" />
          </div>
        </div>
      </div>
      <div className="mx-auto px-8 md:px-24 py-24">
        <div className="text-center md:px-[140px]">
          <p className="text-3xl text-gray-600 mb-2">Arif allows you to interact directly with your data, asking questions</p>
          <p className="text-3xl text-gray-600 mb-2">and receiving instant, contextual answers. Whether you're</p>
          <p className="text-3xl text-gray-600 mb-2">identifying consumer insights or evaluating operational</p>
          <p className="text-3xl text-gray-600 mb-2">efficiencies, <span className="text-blue-500 font-bold">your data is no longer a passive report,</span></p>
          <p className="text-3xl text-gray-600">it will take you to actionable insights.</p>
        </div>
      </div>
      <div className="mx-auto px-8 md:px-24 pt-16 pb-10" ref={myRef}>
        <div className="md:flex justify-between gap-10">
          <div className="w-full pb-12 md:pb-0">
            <img src="/assets/content1.png" className="h-[460px]" alt="Banner" />
          </div>
          <div className="w-5/6">
            <p className="text-xl font-bold mb-4">Key Features:</p>
            <>
              <Accordion open={open === 1} icon={<Icon id={1} open={open} />} placeholder={undefined}>
                <AccordionHeader onClick={() => handleOpen(1)} placeholder={undefined} style={{ color: '#3B81F6' }}>Intelligent Data Visualization</AccordionHeader>
                <AccordionBody style={{fontSize: '18px'}}>
                  Arif makes complex data easy to understand through user-friendly dashboards and charts.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2} icon={<Icon id={2} open={open} />} placeholder={undefined}>
                <AccordionHeader onClick={() => handleOpen(2)} placeholder={undefined} style={{ color: '#3B81F6' }}>
                  Rapid Audio and Video Transcription
                </AccordionHeader>
                <AccordionBody style={{fontSize: '18px'}}>
                  Quickly converts audio and video into accurate text transcripts with Arif platform.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 3} icon={<Icon id={3} open={open} />} placeholder={undefined}>
                <AccordionHeader onClick={() => handleOpen(3)} placeholder={undefined} style={{ color: '#3B81F6' }}>
                  AI-Powered Insights
                </AccordionHeader>
                <AccordionBody style={{fontSize: '18px'}}>
                  Arif uses AI to find meaningful patterns in large amounts of data, giving you the knowledge to make better decisions.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 4} icon={<Icon id={4} open={open} />} placeholder={undefined}>
                <AccordionHeader onClick={() => handleOpen(4)} placeholder={undefined} style={{ color: '#3B81F6' }}>
                  Scalable and Secure
                </AccordionHeader>
                <AccordionBody style={{fontSize: '18px'}}>
                  Our Arif platform work for businesses of all sizes and prioritizes the security of your data.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 5} icon={<Icon id={5} open={open} />} placeholder={undefined}>
                <AccordionHeader onClick={() => handleOpen(5)} placeholder={undefined} style={{ color: '#3B81F6' }}>
                  Integration
                </AccordionHeader>
                <AccordionBody style={{fontSize: '18px'}}>
                  Arif connects with the various data sources you already use, streamlining your workflow.
                </AccordionBody>
              </Accordion>
            </>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 px-8 md:px-24 pt-16 pb-16" style={{ backgroundColor: '#CAEEFB' }}>
        <div className="text-center">
          {/* <div className="mb-8">
            <p className="text-xl text-gray-600 font-bold ">Trusted by.</p>
          </div> */}
          <div className="mx-auto flex justify-center gap-10">
            {/* <img src="/assets/antler.png" className="" alt="Banner" /> */}
            {/* <img src="/assets/antler.png" className="" alt="Banner" /> */}
            {/* <img src="/assets/antler.png" className="" alt="Banner" /> */}
            <a href="https://wa.me/628117576088" className="px-6 py-3.5 text-base font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Join our waitlist</a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 px-8 md:px-40 pt-16 pb-16">
        <form action="mailto:dora@goarif.co" className="mx-auto">
          <div className="mx-auto md:grid md:grid-cols-2 gap-4 mb-2">
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">First Name</label>
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" name="firstname" placeholder="First Name" />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">Last Name</label>
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" name="lastname" placeholder="Last Name" />
            </div>
          </div>
          <div className="mx-auto md:grid md:grid-cols-2 gap-4 mb-2">
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">Company</label>
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" name="company" placeholder="Company" />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" name="email" placeholder="Email" />
            </div>
          </div>
          <div className="mx-auto mb-2">
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">Organization</label>
              <textarea rows={3} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" name="organization" placeholder="Tell us a little about your organization and needs"></textarea>
            </div>
          </div>
          <div className="mx-auto mb-2">
            <div className="mx-auto text-center mb-5">
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Submit</button>
            </div>
          </div>
        </form>
      </div>

      <footer className="bg-white mt-24 dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <img src="/logo_blue.png" className="h-10" alt="Logo" />
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="/" className="hover:underline me-4 md:me-6 ">Privacy Policy</a>
              </li>
              <li>
                <a href="/" className="hover:underline ">Term of Use</a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 ">© 2024 <a href="/" className="hover:underline">Arif</a>. All Rights Reserved.</span>
        </div>
      </footer>

    </>
  );
}

export default Home;
