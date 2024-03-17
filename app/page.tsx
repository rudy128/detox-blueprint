import Navbar from "./components/Navbar"
import P1 from "./components/P1";
import P2 from "./components/P2";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <P1 />
      <P2 />
      <div className="bg-teal-600">Hello World</div>
    </main>
  );
}
