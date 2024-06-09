import Button from '@/components/ui/button';
import Image from 'next/image';

import Accordion from '@/components/layout/accordion/Accordion';
import { Questions } from '@/types/questions';
import { questions } from '@/api/questions';
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineLocalPhone } from "react-icons/md";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { FaAsterisk } from "react-icons/fa";
import { DiJava } from 'react-icons/di';


export default function Home() {

  return (
    <>
      <div className="w-screen h-auto flex flex-col items-center justify-center bg-gradient-to-b from-primary to-white">
        {/* HERO */}
        <div className="pt-20 max-w-[1440px] h-auto flex flex-col items-center justify-center gap-2">
          <h1 className="w-auto h-auto text-[88px] text-center leading-[110%] font-bold">We love to find</h1>
          <div className="relative w-auto h-auto">
            <h1 className="text-[88px] text-center leading-[110%] font-bold">solutions</h1>
            <Image src='/Underline_06.png' alt="underline" width={273} height={37} className="absolute top-[40%] left-0 z-10" />
          </div>
          <p className="pt-3 w-[672px] text-center font-bold text-base">Elevate your online presence with Spine cutting-edge solutions. Discover limitless possibilities for your digital agency&apos;s success.</p>
          <div className="relative w-[1170px] h-[374px]">
            <Image src='/Frame2.png' alt="banner-image" fill className="object-cover" />
            <Button variant="secondary" className="absolute top-8 left-[44%]">Start for free</Button>
          </div>
        </div>
      </div>
      {/* LOGOS */}
      <div className="w-screen h-auto flex flex-col items-center justify-center bg-white">
        <div className="w-full h-[260px] flex items-center justify-center">
          <div className="w-[1170px] h-[100px] flex justify-between items-center border-y border-[#0C0C0C] border-opacity-10">
            <Image src="/logo-icons/Logo1.png" alt="logo1" width={157.85} height={40} />
            <Image src="/logo-icons/Logo2.png" alt="logo1" width={186.67} height={40} />
            <Image src="/logo-icons/Logo3.png" alt="logo1" width={150.86} height={40} />
            <Image src="/logo-icons/Logo4.png" alt="logo1" width={163.90} height={40} />
            <Image src="/logo-icons/Logo5.png" alt="logo1" width={162.93} height={40} />
          </div>
        </div>
      </div>
      {/* SECTION ABOUT US */}
      <div className="w-screen h-auto flex flex-col items-center justify-center bg-white">
        <div className="w-[1170px] h-[753px] flex items-center justify-center">
          {/* TEXT */}
          <div className="flex flex-col flex-1 gap-6 items-start justify-around">
            <h2 className="font-bold text-7xl leading-[110%] tracking-wide">Unlocking Digital Excellence</h2>
            <p className="w-[85%] font-bold text-base leading-[140%]">At Spine, we&apos;re on a mission to empower businesses with the digital tools and expertise they need to thrive in the ever-evolving online landscape.</p>
            <div className="w-[90%] pt-10 flex flex-col gap-4 items-start justify-between">
              <div className="flex flex-row items-center justify-start gap-3 font-bold text-base text-[#606060]">
                <span className="h-full"><Image src="/point.png" alt="point" width={22} height={18} /></span>
                <p><span className="text-[#0C0C0C]">Our Team:</span> Introduce the core members of your team, their expertise, and their commitment to your client&apos;s success.</p>
              </div>
              <div className="flex flex-row items-center justify-start gap-3 font-bold text-base text-[#606060]">
                <span className="h-full"><Image src="/point.png" alt="point" width={22} height={18} /></span>
                <p><span className="text-[#0C0C0C]">Core Values:</span> Share your company&apos;s core values and the principles that guide your work.</p>
              </div>
              <div className="flex flex-row items-center justify-start gap-3 font-bold text-base text-[#606060]">
                <span className="h-full"><Image src="/point.png" alt="point" width={22} height={18} /></span>
                <p><span className="text-[#0C0C0C]">Client-Centric Approach:</span> Emphasize your dedication to delivering outstanding service and results for your clients.</p>
              </div>
            </div>
            <Button variant="secondary" className="w-max">About Us</Button>
          </div>
          {/* IMAGE */}
          <div className="flex-2">
            <Image src="/clientImage.png" alt="image" width={467} height={467} />
          </div>
        </div>
      </div>
      {/* CAROUSEL */}
      <div className="w-screen h-auto flex flex-col items-center justify-center bg-[url('/carouselBackground.avif')] bg-no-repeat bg-cover bg-center">
        <div className="w-[1170px] h-auto flex flex-col items-center justify-center gap-2">
          {/* Head */}
          <div className="py-10 w-full h-auto flex items-start justify-between">
            <div className="relative w-[652px]">
              <h2 className="capitalize font-bold text-7xl tracking-wide leading-[110%]">elevate your digital presence</h2>
              <Image src='/Underline_06.png' alt="underline" width={276} height={37} className="absolute bottom-[5px] left-0 z-10" />
            </div>
            <div className="flex flex-col w-[458px] gap-4">
              <p className="font-bold text-base text-[#606060]">Crafting digital masterpieces tailored to your brand, we turn concepts into visually stunning, user-friendly websites. Elevate your online identity with our cutting-edge web design and development services.</p>
              <Button variant="primary" className="self-start">See All</Button>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ */}
      <div className="py-6 w-screen h-auto flex items-center justify-center bg-white">
        <div className="w-[1170px] h-auto flex flex-col items-center justify-center gap-2">
          {/* Header */}
          <div className="w-[970px] h-52 flex flex-col gap-4">
            <div className="relative flex items-start justify-start">
              <h1 className="font-bold text-7xl capitalize">Got question? We&apos;ve got answers!</h1>
              <Image src='/Underline_06.png' alt='underline-img' width={231} height={33} className="absolute bottom-0 left-0" />
            </div>
            <div className="flex gap-2 items-center justify-start">
              <Image src="/fi-rr-billiard.png" alt='icon' width={16} height={16} />
              <span className="font-bold text-base leading-[140%]">Check out the services</span>
            </div>
          </div>
          {/* Accordion */}
          <div className="w-[970px] h-auto flex flex-col gap-4 items-center justify-between">
            {questions.map((q: Questions, index: number) => <Accordion key={index} question={q.question} answer={q.answer} />)}
          </div>
        </div>
      </div>
      {/* CONTACTS */}
      <div className="pt-20 pb-40 w-screen h-auto flex items-center justify-center bg-white">
        <div className="flex flex-row justify-between items-start gap-28">
          {/* LEFT */}
          <div className='w-[530px] flex flex-col items-start justify-between gap-8'>
            <h1 className='font-bold text-[58px] leading-[110%]'>Get in Touch with Spine</h1>
            <p className='font-bold text-base leading-[140%] text-[#606060]'>Whether you have questions about our services, want to discuss a potential collaboration, or just feel like saying hello, we&quot;d love to hear from you.</p>
            <div className='w-full pt-7 flex flex-col gap-5 items-start font-bold text-xl leading-[140%] text-[#464646]'>
              <span className='flex items-center justify-center gap-5'><SlLocationPin size={32} />Plovdiv, K. Riacho 95, Bulgaria</span>
              <span className='flex items-center justify-center gap-5'><MdOutlineLocalPhone size={32} />+359 884 77 77 777</span>
              <span className='flex items-center justify-center gap-5'><HiOutlineEnvelope size={32} />j.borisov@spine.com</span>
            </div>
          </div>
          {/* RIGHT */}
          <div className='w-[530px] flex flex-col items-start justify-between gap-8'>
            <form className="bg-none flex flex-col gap-5">
              <div className="mb-4 flex flex-row items-end justify-between gap-8">
                <div className='w-full flex flex-col items-start'>
                  <label className="flex gap-2 text-[#0C0C0C] text-base font-bold mb-2">
                    Name <FaAsterisk color='#FE2A2A' />
                  </label>
                  <input className="bg-[#F1F4F5] rounded-lg w-full py-3 px-3 text-sm text-[#7B7B7B] font-bold leading-[140%] focus:outline" id="username" type="text" placeholder="First Name" />
                </div>
                <input className="w-full bg-[#F1F4F5] rounded-lg py-3 px-3 text-sm text-[#7B7B7B] font-bold leading-[140%] focus:outline" id="username" type="text" placeholder="Last Name" />
              </div>
              <div className="mb-4 flex flex-row items-end justify-between gap-8">
                <div className='w-1/2 flex flex-col items-start'>
                  <label className="flex gap-2 text-[#0C0C0C] text-base font-bold mb-2">
                    Email <FaAsterisk color='#FE2A2A' />
                  </label>
                  <input className="bg-[#F1F4F5] rounded-lg w-full py-3 px-3 text-sm text-[#7B7B7B] font-bold leading-[140%] focus:outline" id="username" type="text" placeholder="company@gmail.com" />
                </div>
                <div className='w-1/2 flex flex-col items-start'>
                  <label className="flex gap-2 text-[#0C0C0C] text-base font-bold mb-2">
                    Phone <FaAsterisk color='#FE2A2A' />
                  </label>
                  <input className="bg-[#F1F4F5] rounded-lg w-full py-3 px-3 text-sm text-[#7B7B7B] font-bold leading-[140%] focus:outline" id="username" type="text" placeholder="+359 000 000 000" />
                </div>
              </div>
              <div className="mb-4 flex flex-row gap-8">
                <div className='w-full flex flex-col items-start'>
                  <label className=" text-[#0C0C0C] text-base font-bold mb-2">
                    Comment or Message
                  </label>
                  <textarea className="h-48 resize-none bg-[#F1F4F5] rounded-lg w-full py-3 px-3 text-sm text-[#7B7B7B] font-bold leading-[140%] focus:outline" id="username" />
                </div>
              </div>
              <Button variant="secondary">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
