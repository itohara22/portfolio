export default function Header() {
  return (
    <nav>
      <ul className="w-[90vw] h-24 mx-auto flex items-center justify-end gap-12 text-3xl">
        <li>
          <a href="#" className="hover:cursor-pointer">
            Projects
          </a>
        </li>
        <li>
          <a href="#" className="hover:cursor-pointer">
            Connect
          </a>
        </li>
      </ul>
    </nav>
  );
}
