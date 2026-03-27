/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Nav from './components/Nav';
import Hero from './components/Hero';
import Situation from './components/Situation';
import Audiences from './components/Audiences';
import Platforms from './components/Platforms';
import Pillars from './components/Pillars';
import Calendar from './components/Calendar';
import Hashtags from './components/Hashtags';
import QuickWins from './components/QuickWins';
import KPIs from './components/KPIs';
import Roadmap from './components/Roadmap';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import GoToTop from './components/GoToTop';
import { PlanProvider } from './context/PlanContext';

export default function App() {
  return (
    <PlanProvider>
      <Nav />
      <Hero />
      <hr className="border-none border-t border-white/10 m-0" />
      <Situation />
      <hr className="border-none border-t border-white/10 m-0" />
      <Audiences />
      <hr className="border-none border-t border-white/10 m-0" />
      <Platforms />
      <hr className="border-none border-t border-white/10 m-0" />
      <Pillars />
      <hr className="border-none border-t border-white/10 m-0" />
      <Hashtags />
      <hr className="border-none border-t border-white/10 m-0" />
      <QuickWins />
      <hr className="border-none border-t border-white/10 m-0" />
      <KPIs />
      <hr className="border-none border-t border-white/10 m-0" />
      <Roadmap />
      <hr className="border-none border-t border-white/10 m-0" />
      <Pricing />
      <hr className="border-none border-t border-white/10 m-0" />
      <Calendar />
      <hr className="border-none border-t border-white/10 m-0" />
      <CTA />
      <Footer />
      <GoToTop />
    </PlanProvider>
  );
}

