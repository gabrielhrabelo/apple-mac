import Features from "./components/Features";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Navbar from "./components/Navbar";
import Performance from "./components/Performance";
import ProductViewer from "./components/ProductViewer";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Performance />
      {/*<Features />*/}
      {/*<Highlights />*/}
    </main>
  );
}
