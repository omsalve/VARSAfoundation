
  import Navbar           from "../components/Navbar";
  import HeroSection      from "../components/HeroSection";
  import AboutSection     from "../components/AboutSection";
  import FocusAreasSection from "../components/FocusAreasSection";
  import ImpactSection    from "../components/ImpactSection";
  import GetInvolvedSection from "../components/GetInvolvedSection";
  import Footer           from "../components/Footer";

  export default function HomePage() {
    return (
      <>
        {/* ── Global Navigation ── */}
        <Navbar />

        <main>
          {/* 1. Hero */}
          <HeroSection />

          {/* 2. About */}
          <AboutSection />

          {/* 3. Focus Areas */}
          <FocusAreasSection />

          {/* 4. Impact Statistics */}
          <ImpactSection />

          {/* 5. Get Involved / CTAs */}
          <GetInvolvedSection />
        </main>

        {/* ── Footer ── */}
        <Footer />
      </>
    );
  }