import { useEffect } from 'react';
import { gsap } from 'gsap';

function App() {
  const letters = ['A', 'L', 'L', 'T', 'R', 'A', 'D', 'E', 'S'];

  useEffect(() => {
    gsap.from(".letter", {
      yPercent: 100,
      duration: 0.1,
      stagger: 0.1,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black font-sans">
      <h1 className="text-4xl font-bold mb-8">GSAP Text Animation</h1>
      <div className="flex gap-2">
        {letters.map((letter, index) => (
          <div
            key={index}
            className="w-12 h-12 flex items-center justify-center"
          >
            <span className="letter text-4xl font-bold">
              {letter}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
