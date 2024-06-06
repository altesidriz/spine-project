import Button from '@/components/ui/button';
import Image from 'next/image';
import Accordion from '@/components/layout/accordion/Accordion';
import { Questions } from '@/types/questions';
import {questions} from '@/api/questions';


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
      <div className="w-screen h-auto flex items-center justify-center bg-white">
        <div className="flex flex-row justify-between items-center">

        </div>
      </div>
    </>
  );
}
