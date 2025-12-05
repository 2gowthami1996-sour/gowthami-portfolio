export default function Navbar() {
  return (
    <nav className="w-full py-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Ganga Gowthami</h1>
      <div className="flex gap-6 text-lg">
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#certifications">Certifications</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
