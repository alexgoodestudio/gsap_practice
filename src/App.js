import './App.css';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8 flex flex-wrap justify-center gap-6">
      <h1 className="w-full text-5xl font-extrabold mb-8 text-center">
        GSAP Practice
      </h1>

      <div className="w-36 h-36 bg-slate-200 rounded-lg shadow-lg"></div>
      <div className="w-36 h-36 bg-red-500 rounded-lg shadow-lg"></div>
      <div className="w-36 h-36 bg-green-400 rounded-lg shadow-lg"></div>
      <div className="w-36 h-36 bg-blue-500 rounded-lg shadow-lg"></div>
      <div className="w-36 h-36 bg-purple-600 rounded-lg shadow-lg"></div>
      <div className="w-36 h-36 bg-yellow-400 rounded-lg shadow-lg"></div>
    </div>
  );
}

export default App;
