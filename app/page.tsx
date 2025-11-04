export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-linear-to-br from-white via-slate-50 to-slate-100 px-6 text-center">

      {/* Title */}
      <h1 className="text-5xl font-title font-bold text-gray-900 tracking-tight mb-4">
        Next.js Boilerplate
      </h1>

      {/* Subtitle / Info */}
      <p className="text-gray-600  text-lg max-w-lg">
        Created by <span className="font-semibold">Alif Hossain</span>.<br />
        Ready-to-use setup with <span className="font-medium">Tailwind CSS</span> & <span className="font-medium">Google Fonts</span>.
      </p>

      {/* Versions */}
     

      {/* Buttons / Call to Action */}
     <div className="mt-6 flex flex-wrap justify-center gap-3">
  {[
    "Next.js v15.5.6",
    "React v19.1.0",
    "Tailwind CSS v4.x",
    "TypeScript v5.x"
  ].map((version) => (
    <span
      key={version}
      className="cursor-pointer px-4 py-2 bg-gray-300 text-gray-700 rounded-lg shadow-sm 
                 hover:bg-gray-900 hover:text-white transition-colors duration-300"
    >
      {version}
    </span>
  ))}
</div>


      {/* Footer */}
      <footer className="absolute bottom-4 text-sm text-gray-400">
        ⚡ Tailwind + Google Fonts Next.js Boilerplate
      </footer>

    </main>
  );
}
