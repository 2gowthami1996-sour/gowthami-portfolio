const certs = [
  {
    name: "Oracle Cloud – Generative AI",
    link: "https://drive.google.com/file/d/1JJdBB6SW_pcYpDhJjWx-_VxC9n8GGpfA/view",
  },
  {
    name: "Oracle Cloud – Data Science",
    link: "https://drive.google.com/file/d/1x3FNv62XG3NLpVxOnXVQ8EgHbk-t7q0D/view",
  },
  {
    name: "Google Analytics Certification",
    link: "https://drive.google.com/file/d/1MZm-McRx80ahJCj1p9ZRxjmKsBDTu9iF/view",
  },
  {
    name: "Python Developer Certification",
    link: "https://drive.google.com/file/d/12mRwh8JF2nzfZVMlX6DLUyelSesR23f5/view",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="mt-24">
      <h2 className="text-4xl font-bold mb-10">Certifications</h2>

      <div className="space-y-4">
        {certs.map((c) => (
          <a
            key={c.name}
            href={c.link}
            target="_blank"
            className="block text-blue-400 underline"
          >
            {c.name}
          </a>
        ))}
      </div>
    </section>
  );
}
