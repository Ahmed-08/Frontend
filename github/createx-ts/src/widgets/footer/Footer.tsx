import React from 'react';
import { FooterBottom } from './ui/bottom/FooterBottom.tsx';
import { FooterBody } from './ui/body/FooterBody.tsx';

export const Footer: React.FC = ()=>{
  return (
    <div>
      <FooterBody />
      <FooterBottom />
    </div>
  )
}
