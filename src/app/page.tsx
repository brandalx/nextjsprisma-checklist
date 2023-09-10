import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className=" flex justify-between mb-4">
        <h1>Checklist</h1>
        <Link
          className=" border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:file:bg-slate-700 outline-none"
          href="/newlist"
        >
          Add new
        </Link>
      </header>
      <div className="pl-4">
        <ul>Element 1</ul>
      </div>
    </>
  );
}
