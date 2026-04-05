import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
