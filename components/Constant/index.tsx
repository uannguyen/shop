import Link from "next/link";
export * from "./footer";

export const PAGES = [
  {
    label: (
      <Link href="/">
        <a>Home</a>
      </Link>
    ),
    key: "home"
  },
  {
    label: (
      <Link href="/shop">
        <a>Shop</a>
      </Link>
    ),
    key: "shop"
  },
  {
    label: (
      <Link href="/pages">
        <a>Pages</a>
      </Link>
    ),
    key: "pages"
  },
  {
    label: (
      <Link href="/blog">
        <a>Blog</a>
      </Link>
    ),
    key: "blog"
  },
  {
    label: (
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    ),
    key: "contact"
  }
];
