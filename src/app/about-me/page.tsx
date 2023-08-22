import Link from "next/link";
import Counter from "./_components/Counter";

export default function AboutMePage() {
  return (
    <main>
      <h1>Hello about me page!</h1>
      <Link href="/about-me/contact">Contact me</Link>
      <Link href="/about-me/jobs">Jobs</Link>
      <Counter />
    </main>
  );
}
