import React from 'react';
import { navLinks } from '@/lib/data';

export default function NavBar() {
  return (
    <div>
      {navLinks.map((navLink) => (
        <p>{navLink.name}</p>
      ))}
    </div>
  );
}
