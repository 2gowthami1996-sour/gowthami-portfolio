const skills = [
  "Python",
  "SQL",
  "Pandas",
  "NumPy",
  "Scikit-Learn",
  "TensorFlow",
  "Keras",
  "NLP",
  "LLMs",
  "Generative AI",
  "Power BI",
  "MongoDB",
  "REST APIs",
];

export default function Skills() {
  return (
    <section id="skills" className="mt-24">
      <h2 className="text-4xl font-bold mb-10">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((s) => (
          <div
            key={s}
            className="p-3 bg-gray-900 rounded-lg shadow border border-gray-700 text-center"
          >
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}
