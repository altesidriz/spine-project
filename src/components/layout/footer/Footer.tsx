import Button from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='pt-16 w-screen flex items-center justify-center h-auto bg-secondary'>
      <div className='w-[1440px] h-auto flex flex-col items-center justify-center'>
        {/* TOP Part */}
        <div className='pb-10 w-full h-auto flex flex-col md:flex-row items-start justify-between text-textGray'>
          {/* Section 1 */}
          <div className='w-[369px] h-auto flex flex-col items-start justify-between gap-4 '>
            <div className='logo relative w-[200px] h-10'>
              <Image src='/logo-light.png' alt='light-logo' fill className='object-cover' />
            </div>
            <p className='text-textGray font-bold text-sm'>Spine is the ultimate boost for your online presence. We&apos;re here to supercharge your digital agency&apos;s journey.</p>
            <div className='flex justify-start items-center gap-4'>
              <FaFacebookF color='white' />
              <FaTwitter color='white' />
              <FaInstagram color='white' />
            </div>
          </div>
          {/* Section 2 */}
          <div className='w-[147px] h-auto flex flex-col gap-4 items-start justify-between font-bold text-base leading-[140%]'>
            <span className='text-xl'>Menu</span>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/support'>Service</Link>
            <Link href='/questions'>FAQ</Link>
            <Link href='/contacts'>Contact</Link>
          </div>
          {/* Section 3 */}
          <div className='w-[140px] h-auto flex flex-col gap-4 items-start justify-between font-bold text-base leading-[140%]'>
            <span className='text-xl'>Services</span>
            <Link href='#'>Web Design & Development</Link>
            <Link href='#'>Branding</Link>
            <Link href='#'>Digital Marketing</Link>
            <Link href='#'>Content Creation</Link>
            <Link href='#'>Technical Support</Link>
          </div>
          {/* Section 4 */}
          <div className='w-[251px] flex flex-col gap-4 items-start justify-between'>
            <span className='font-bold text-xl leading-[140%]'>Join our newsletter</span>
            <input type="text"  placeholder='Enter email adress' className='w-full pl-4 py-2 bg-transparent border-[1px] border-[#F4F4F4] text-xs leading-[140%] text-[#ADADAD]'/>
            <Button variant='secondary'>Get Start</Button>
          </div>
        </div>
        {/* BOTTOM Part */}
        <div className='h-28 w-full flex items-center justify-center border-t-2 border-[#FFFFFF] text-white'>
          <p className='text-center'>&copy;2024 Spine <span className='uppercase'> all rights reserved</span></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;