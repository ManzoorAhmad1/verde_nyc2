'use client';

import { useState } from 'react';
import MobileNav from './MobileNav';

export default function MobileNavWrapper() {
  const [isOpen, setIsOpen] = useState(false);
  return <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />;
}
