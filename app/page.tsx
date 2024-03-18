import Benefits from "./components/Benefits";
import FAQ from "./components/FAQ";
import FinalCall from "./components/FinalCall";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import P1 from "./components/P1";
import Signs from "./components/Signs";
import Testimonials from "./components/Testimonials";
import Words from "./components/Words";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#0a111c] text-white">
      <Navbar />
      <P1 />
      <Signs />
      <Benefits />
      <Words />
      <Testimonials />
      <FinalCall />
      <FAQ />
      <Footer />
    </main>
  );
}
