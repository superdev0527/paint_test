import { Calculator } from "@/components/Calculator";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-brown text-white">
      <h1 className="mx-auto text-6xl text-center pt-12 font-bold mb-4 [background:linear-gradient(rgb(255,232,1)_50%,rgb(247,40,0)_91.33%)_text] text-[transparent] bg-clip-text">
        Calculator
      </h1>
      <Calculator />
    </main>
  );
}
