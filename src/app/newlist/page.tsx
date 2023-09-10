import Link from "next/link";
import React from "react";

async function createTodo(data: FormData) {
  "use server";

  console.log("Server function test");
}

export default function Page() {
  return (
    <div>
      <header className=" flex justify-between mb-4">
        <h1>Checklist</h1>
      </header>

      <div>
        <form action={createTodo} className="flex gap-2 flex-col">
          <input
            type="text"
            name="title"
            className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
          />
          <div className="flex gap-1 justify-end">
            <Link
              className=" border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:file:bg-slate-700 outline-none"
              href="/"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className=" border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:file:bg-slate-700 outline-none"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
