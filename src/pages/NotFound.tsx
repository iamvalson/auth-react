import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 px-4 py-12 text-center selection:bg-zinc-900 selection:text-white">
      <div className="w-full max-w-md rounded-2xl border border-zinc-200/80 bg-white p-8 sm:p-10 shadow-xl shadow-zinc-950/5">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900 mb-6">
          <svg
            className="h-6 w-6 text-zinc-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>

        <span className="block text-xs font-semibold uppercase tracking-widest text-zinc-400">
          Error 404
        </span>
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900">
          Page not found
        </h1>
        <p className="mt-2 text-sm text-zinc-500">
          The page you are looking for doesn't exist or may have been moved.
        </p>

        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 transition-all"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Return to Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
