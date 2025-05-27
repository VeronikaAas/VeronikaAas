import { Outlet, Link } from "react-router-dom";

export default function DesignTwo() {
  return (
    <div className="bg-green-50 min-h-screen text-green-900">
      <header className="bg-green-200 p-4 shadow">
        <h1 className="text-2xl font-bold">Design Two Layout</h1>
        <nav className="mt-2">
          <Link to="/two" className="mr-4 underline">
            Hjem
          </Link>
          <Link to="/" className="underline">
            Tilbake til landing
          </Link>
        </nav>
      </header>
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
