import model from "./assets/tshirt.png";

const design = decodeURIComponent(
  new URLSearchParams(window.location.search).get("design") ?? "default"
);

function App() {
  return (
    <main className="container mx-auto">
      <h1 className="text-center -rotate-1 font-bold italic text-red-500 text-bold text-6xl animate-pulse">
        MOZZIUSES 100% LEGIC TSHIRST STORE
      </h1>
      <div className="w-full flex flex-col sm:flex-row">
        <div className="relative flex-1">
          <img src={model} alt="" className="w-full aspect-square" />
          <img
            src={design}
            alt=""
            className="absolute top-1/4 left-1/4 w-1/2"
          />
        </div>
        <div className="flex-1 relative flex flex-col">
          <div className="animate-spin bg-red-500 absolute right-0 top-0 text-white w-24 h-24 rounded-lg">
            99% off
          </div>
          <h2 className="text-red-500 text-4xl rotate-6 italic font-bold">
            ORIGINAL DESGIN TEESJERT
          </h2>
          <ul className="relative left-4 -rotate-3 font-serif list-disc">
            <li>100% pure asbestos blend</li>
            <li>stuffed through a 2008 off brand inkjet printer</li>
            <li>hand woven by an industrial sewing machine</li>
          </ul>
          <p className="mt-6 font-bold text-gray-700 rotate-[0.5deg] text-3xl">
            ONLY <span className="animate-ping text-blue-700">1</span> LEFT U
            BETTER HURRY
          </p>
          <a
            className="mt-10 relative font-bold text-2xl right-2 text-white animate-pulse bg-red-500 p-4 rounded-lg text-center"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          >
            BUY NOW ONLY $60
          </a>
          <div className="grow"></div>
          <p className="font-serif break-all animate-bounce">
            buynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynow
          </p>
          <p className="font-serif absolute break-all bottom-0 animate-spin -z-10 w-full">
            buynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynowbuynow
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
