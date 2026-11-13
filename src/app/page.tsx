import { Categories } from "@/components/Categories";
import { Contact } from "@/components/Contact";
import { FeaturedCourse } from "@/components/FeaturedCourse";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { People } from "@/components/People";
import { Testimonial } from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="btn btn-primary sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-50"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Categories />
        <FeaturedCourse />
        <HowItWorks />
        <Testimonial />
        <People />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
