import React from 'react';
import { navLinks } from '@/lib/data';

export default function NavBar() {
  return (
    <div>
      {navLinks.map((navLink) => (
        <p key={navLink.name}>{navLink.name}</p>
      ))}
    </div>
  );
}
