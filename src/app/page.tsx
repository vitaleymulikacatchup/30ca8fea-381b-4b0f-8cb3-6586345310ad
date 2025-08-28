"use client";
import Image from 'next/image';
import Link from 'next/link';
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import BentoMediaGallery from '@/components/bento/BentoMediaGallery/BentoMediaGallery';
import TextboxStandard from '@/components/textbox/TextboxStandard';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import BentoKPIStandard from '@/components/bento/BentoKPIStandard';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 1, textAnimation: 'none' }}>
      <div className="bg-[linear-gradient(135deg,_#0b0f14,_#0d1220)]">
        <div id="hero">
          <BillboardHero title="Welcome to PhotonFlux" subtitle="Capturing the essence of light and life." />
        </div>
        <div id="portfolio">
          <BentoMediaGallery items={[]} className="mt-12" gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" />
        </div>
        <div id="about">
          <TextboxStandard title={<h2>About Me</h2>} description={<p>I am a passionate photographer showcasing my best works.</p>} />
        </div>
        <div id="services">
          <BentoKPIStandard items={[{ value: "Studio", description: "Available for studio sessions." }, { value: "On-Location", description: "Available for on-location projects." }]} className="mt-12" gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" />
        </div>
        <div id="testimonials">
          <CentralFAQ items={[]} />
        </div>
        <div id="contact">
          <TextboxStandard title={<h2>Contact Me</h2>} description={<form className="flex flex-col gap-4"><input type="text" placeholder="Name" required className="p-2 rounded" /><input type="email" placeholder="Email" required className="p-2 rounded" /><textarea placeholder="Message" required className="p-2 rounded"></textarea><button type="submit" className="bg-blue-500 text-white p-2 rounded">Send</button></form>} />
        </div>
      </div>
    </SiteThemeProvider>
  );
}