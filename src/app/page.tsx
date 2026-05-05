import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import FeaturesStrip from "@/components/FeaturesStrip";
import KeyFeatures from "@/components/KeyFeatures";
import HemisIntegration from "@/components/HemisIntegration";
import Results from "@/components/Results";
import Implementation from "@/components/Implementation";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <FeaturesStrip />
        <KeyFeatures />
        <HemisIntegration />
        <Results />
        <Implementation />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
