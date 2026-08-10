import AIChatbot from '@/components/AIChatbot';
import { Helmet } from '@dr.pogodin/react-helmet';
import { type ReactElement } from 'react';
import { ScrollRestoration } from 'react-router-dom';

import Footer from '@/layouts/parts/Footer';
import Header from '@/layouts/parts/Header';
import Website from '@/layouts/Website';
import CosmicCanvas from '@/components/CosmicCanvas';
import CustomCursor from '@/components/CustomCursor';

interface RootLayoutProps {
  children: ReactElement;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <Website>
      <Helmet>
        <title>Abhijeet Singh Khichi — Software Engineer &amp; CS Researcher</title>
        <meta
          name="description"
          content="Portfolio of Abhijeet Singh Khichi — CS student, software engineer, full-stack builder, and AI researcher."
        />
      </Helmet>
      <ScrollRestoration />
      <CosmicCanvas />
      <CustomCursor />
      <Header />
      <main className="relative z-10">{children}</main>
      <Footer />
      <AIChatbot />     
    </Website>
  );
}
