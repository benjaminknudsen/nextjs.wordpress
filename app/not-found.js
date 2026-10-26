import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1>404 – Siden blev ikke fundet</h1>
      <p>Den side, du leder efter, findes ikke.</p>
      <Link href="/">Tilbage til forsiden</Link>
    </main>
  );
}
