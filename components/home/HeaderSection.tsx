import React from 'react';
import MobileMenu from './layout/MobileMenu';
import NavBar from './layout/NavBar';

export default function HeaderSection() {
  return (
    <>
      {/* Show MobileMenu on small screens */}
      <div className='sm:hidden'>
        <MobileMenu />
      </div>

      {/* Show NavBar on larger screens */}
      <div className='hidden sm:block'>
        <NavBar />
      </div>
    </>
  );
}
