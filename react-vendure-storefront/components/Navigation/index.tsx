import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex flex-nowrap flex-row justify-end p-1 mx-auto m-0">
      <ul className="inline-block">
      <li className="inline-block text-sm font-medium text-white">
<Link href="/">
  <a >
    Про магазин
  </a>
</Link>
</li>
      <li className="inline-block text-sm font-medium text-white">
<Link href="/">
  <a>
    Каталог товарів
  </a>
</Link>
</li>
      <li className="inline-block text-sm font-medium text-white">
<Link href={"/"}>
  <a >
    Наші проекти
  </a>
</Link>
</li>
      </ul>
</nav>
  );
}
