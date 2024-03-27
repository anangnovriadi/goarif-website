import React from 'react';
import { useState, useEffect } from 'react';
import Card from '../components/Card';
import { TypeAnimation } from 'react-type-animation';

const Home: React.FC = () => {
  return (
    <>
      <div className="mx-auto px-24 py-10" style={{ backgroundColor: '#CAEEFB' }}>
        <div className="mx-auto flex justify-between gap-10">
          <div>
            <h1 className="text-white text-4xl font-bold mb-5"></h1>
            <h1 className="text-2xl text-gray-800 mb-8 font-mono">
              Converse with your data to unlock real-time Insights.
              Transform your data into strategic assets.
            </h1>
            <a href="https://wa.me/628117576088" className="shadow focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-800 dark:focus:ring-green-800 font-mono">Start Try</a>
          </div>
          <div className="w-full">
            <img src="/assets/banner.png" className="" alt="Banner" />
          </div>
        </div>
      </div>
      <div className="mx-auto px-24 py-24">
        <div className="text-center px-[140px]">
          <p className="text-3xl text-gray-500 font-mono">Arif allows you to interact directly with your data, asking questions and receiving instant, contextual answers. Whether you're identifying consumer insights or evaluating operational efficiencies, your data is no longer a passive report, it will take you to actionable insights.</p>
        </div>
      </div>
      <div className="mx-auto px-24 pt-16 pb-10">
        <div className="flex justify-between gap-10">
          <div className="w-full">
            <img src="/assets/content1.png" className="" alt="Banner" />
          </div>
          <div>
            <p className="text-lg font-bold text-gray-700 mb-5 font-mono">Why you need to check out Arif Analytics:</p>
            <p className="text-md text-gray-500 mb-2 font-mono"><b>Strategic Decision-Making: </b>AI-powered analytics enable real-time, data-driven decisions that align with business objectives, saving time and reducing uncertainty.</p>
            <p className="text-md text-gray-500 mb-2 font-mono"><b>Operational Efficiency: </b>Automate routine analytics and reporting tasks, freeing up managerial resources for more strategic endeavors, which is especially valuable for CRM managers.</p>
            <p className="text-md text-gray-500 mb-2 font-mono"><b>Competitive Edge: </b>Advanced analytics provide deeper market insights, helping you outmaneuver competitors with more targeted and effective strategies.</p>
            <p className="text-md text-gray-500 mb-2 font-mono"><b>Revenue Growth: </b>Precision targeting and personalization capabilities enable more effective marketing campaigns, driving sales and revenue.</p>
            <p className="text-md text-gray-500 mb-2 font-mono"><b>Customer Experience Enhancement:  </b>Real-time analytics provide insights into customer behaviors and preferences, allowing for a more personalized and satisfying customer experience.</p>
            <p className="text-md text-gray-500 mb-2 font-mono"><b>Data-Driven Culture: </b>AI analytics offer intuitive dashboards and easy-to-understand insights that foster a data-driven culture across the organization.</p>
            <p className="text-md text-gray-500 mb-2 font-mono"><b>Cost-Effectiveness: </b>Through automation and increased accuracy, significantly reduce the costs related to data collection and analysis.</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 px-24 pt-16 pb-16" style={{ backgroundColor: '#FAF9F5' }}>
        <div className="text-center">
          <div className="mb-8">
            <p className="text-xl text-gray-600 font-bold font-mono">Trusted by.</p>
          </div>
          <div className="mx-auto flex justify-center gap-10">
            <img src="/assets/antler.png" className="" alt="Banner" />
            <img src="/assets/antler.png" className="" alt="Banner" />
            <img src="/assets/antler.png" className="" alt="Banner" />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 px-40 pt-16 pb-16">
        <form className="mx-auto">
          <div className="mx-auto grid grid-cols-2 gap-4 mb-2">
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 font-mono">First Name</label>
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="" placeholder="First Name" />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 font-mono">Last Name</label>
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="" placeholder="Last Name" />
            </div>
          </div>
          <div className="mx-auto grid grid-cols-2 gap-4 mb-2">
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 font-mono">Company</label>
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="" placeholder="Company" />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 font-mono">Email</label>
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="" placeholder="Email" />
            </div>
          </div>
          <div className="mx-auto mb-2">
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 font-mono">Organization</label>
              <textarea rows={3} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" value="" placeholder="Tell us a little about your organization and needs"></textarea>
            </div>
          </div>
          <div className="mx-auto mb-2">
            <div className="mx-auto text-center mb-5">
              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-mono">Submit</button>
            </div>
          </div>
        </form>
      </div>

      <footer className="bg-white mt-24 dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">GoArif</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="/" className="hover:underline me-4 md:me-6 font-mono">Privacy Policy</a>
              </li>
              <li>
                <a href="/" className="hover:underline font-mono">Term of Use</a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 font-mono">© 2024 <a href="https://flowbite.com/" className="hover:underline">GoArif</a>. All Rights Reserved.</span>
        </div>
      </footer>

    </>
  );
}

export default Home;
