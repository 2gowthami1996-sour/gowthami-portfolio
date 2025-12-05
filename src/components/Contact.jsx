export default function Contact() {
  return (
    <section id="contact" className="mt-24 mb-32">
      <h2 className="text-4xl font-bold mb-8">Contact</h2>

      <p className="opacity-70 mb-4">Let's connect professionally!</p>

      <p>
        Email:{" "}
        <a
          className="text-blue-400"
          href="mailto:2gowthami@gmail.com"
        >
          2gowthami@gmail.com
        </a>
      </p>

      <p>
        LinkedIn:{" "}
        <a
          className="text-blue-400"
          href="https://linkedin.com/in/gowthami-g-b8242421b"
          target="_blank"
        >
          View Profile
        </a>
      </p>

      <p>
        GitHub:{" "}
        <a
          className="text-blue-400"
          href="https://github.com/GangaGowthami"
          target="_blank"
        >
          View Projects
        </a>
      </p>
    </section>
  );
}
