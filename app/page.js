import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-gray-900 text-white min-h-screen p-4">
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <div>
        <p>
          <Link href="/week-2">Week 2 Assignment</Link>
        </p>
        <p>
          <Link href="/week-3">Week 3 Assignment</Link>
        </p>
        <p>
          <Link href="/week-4">Week 4 Assignment</Link>
        </p>
        <p>
          <Link href="/week-5">Week 5 Assignment</Link>
        </p>
        <p>
          <Link href="/week-6">Week 6 Assignment</Link>
        </p>
        <p>
          <Link href="/week-7">Week 7 Assignment</Link>
        </p>
      </div>
    </main>
  );
}
