'use client';
import Button from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topLine = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: 'rgb(0,0,0)',
    },
  };
  const centerLine = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomLine = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: 'rgb(0,0,0)',
    },
  };
  return (
    // Main Layout Wrapper
    <div className='w-screen h-auto m-auto bg-primary'>
      {/* Component Wrapper */}
      <div className='p-4 mx-auto max-w-[1440px] h-auto flex flex-row items-center justify-between'>
        {/* LOGO */}
        <div className='relative w-32 h-7 md:w-36'>
          <Link href='/'>
            <Image src='/logo.png' alt='logo' fill className='object-cover'/>
          </Link>
        </div>
        {/* MENU LIST */}
        <div className='hidden w-auto h-auto md:flex flex-row gap-10 text-bold text-base leading-[140%]'>
          <Link href='/' className='hover:border-b border-b-green'>Home</Link>
          <Link href='/about' className='hover:border-b border-b-green'>About</Link>
          <Link href='/support' className='hover:border-b border-b-green'>Services</Link>
          <Link href='/questions' className='hover:border-b border-b-green'>FAQ</Link>
          <Link href='/contacts' className='hover:border-b border-b-green'>Contacts</Link>
        </div>
        {/* Signup Button */}
        <Button variant='primary' className='hidden md:block'>Sign Up</Button>
      {/* Responsive Menu Button */}
      <button onClick={() => setOpen((prev) => !prev)} className='md:hidden w-9 h-9 flex flex-col items-end justify-around z-50 relative'>
      <motion.div variants={topLine}
          animate={open ? 'opened' : 'closed'}
          className="bg-secondary w-full h-1 origin-left"></motion.div>
        <motion.div variants={centerLine}
          animate={open ? 'opened' : 'closed'}
          className="bg-secondary w-2/3 h-1"></motion.div>
        <motion.div variants={bottomLine}
          animate={open ? 'opened' : 'closed'}
          className="bg-secondary w-full h-1 origin-left"></motion.div>
      </button>
      {open &&
        <div className="absolute pr-20 pt-10 w-1/2 h-screen top-[70px] bg-white right-0 flex flex-col justify-start items-end gap-10 z-50">
          <Link href="/about" className="font-medium text-base">About</Link>
          <Link href="/support" className="font-medium text-base">Services</Link>
          <Link href="/question" className="font-medium text-base">FAQ</Link>
          <Link href="/contacts" className="font-medium text-base">Contact</Link>
        </div>}
      </div>
    </div>
  );
};

export default Navbar;