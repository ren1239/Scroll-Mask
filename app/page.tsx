import { ScrollMask } from "./components/ScrollMask";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { Body } from "./components/Body";

export default function Home() {
  return (
    <main className="relative">
      <NavBar />
      <ScrollMask />
      <Footer />
      <Body />
    </main>
  );
}
