export default function Header() {
  return (
    <nav>
      <ul className="w-[90vw] h-24 mx-auto flex items-center justify-end gap-12 font-inter  text-xl xl:text-2xl text-dark-green">
        <li>
          <a
            href="#projects"
            className="underline-hover relative hover:cursor-pointer"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#connect"
            className="underline-hover relative hover:cursor-pointer"
          >
            Let's Talk
          </a>
        </li>
      </ul>
    </nav>
  );
}
