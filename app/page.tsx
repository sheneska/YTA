import Header from "./(site)/components/Header";
import Hero from "./(site)/components/Hero";
import Creators from "./(site)/components/Creators";
import Brands from "./(site)/components/Brands";
import About from "./(site)/components/About";
import Testimonials from "./(site)/components/Testimonials";
import Footer from "./(site)/components/Footer";

export default function Page() {
  return (
    <>
      <main>
        <Hero />
        <Creators />
        <Brands />
        <About />
        <Testimonials />
      </main>
    </>
  );
}
