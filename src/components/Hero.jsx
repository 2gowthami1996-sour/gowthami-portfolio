export default function Hero() {
  return (
    <section className="text-center mt-24 mb-32">
      <h1 className="text-5xl font-bold mb-6">
        Hi, I'm <span className="text-blue-400">Ganga Gowthami</span>
      </h1>
      <p className="text-xl max-w-2xl mx-auto opacity-80">
        Data Scientist • AI/ML Engineer • LLM Engineer • Data Analyst
      </p>

      <div className="mt-8 flex justify-center gap-6">
        <a
          href="/resume.pdf"
          className="px-6 py-3 bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700"
        >
          Download Resume
        </a>

        <a
          href="mailto:2gowthami@gmail.com"
          className="px-6 py-3 border border-gray-500 rounded-lg hover:bg-gray-800"
        >
          Hire Me
        </a>
      </div>
    </section>
  );
}
