import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/globals.css';
import '@/app/globals.css'
import React, { useEffect, useRef, useState } from "react";

import type { Metadata } from 'next';

import DynamicMenu from '@/component/dynamicmenu/page';
import TopHeader from '@/component/topheader/page';
import MainContent from '@/component/maincontent/page';
import Slider from 'react-slick';


export const metadata: Metadata = {
  title: "Trang chủ - TAM DUC PHAT PCCC COMPANY LIMITED",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <TopHeader/>
        <MainContent />
          {children}
      </body>
    </html>
  )
};
