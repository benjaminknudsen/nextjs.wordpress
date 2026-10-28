"use client";

import { startTransition } from "react";
import { useRouter } from "next/navigation";

export default function Error({ reset }) {
  const router = useRouter();

  function tryAgain() {
    // Hent serverindholdet igen, før fejlen nulstilles.
    startTransition(() => {
      router.refresh();
      reset();
    });
  }

  return (
    <main>
      <h1>Der opstod en fejl</h1>
      <p>Indholdet kunne ikke hentes. Prøv igen om lidt.</p>
      <button type="button" onClick={tryAgain}>Prøv igen</button>
    </main>
  );
}
