import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-screen mb-80">Main Page</div>

      <Link href="/page1">Page 1</Link>
    </>
  );
}
