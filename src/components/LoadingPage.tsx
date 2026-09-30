interface LoadingPageProps {
  message?: string;
}

const LoadingPage = ({ message = "Loading" }: LoadingPageProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 p-6 selection:bg-zinc-900 selection:text-white animate-in fade-in duration-200">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative flex h-12 w-12 items-center justify-center">
          <div className="absolute h-full w-full animate-ping rounded-full bg-zinc-400 opacity-20" />
          <div className="h-9 w-9 animate-spin rounded-full border-2 border-zinc-200 border-t-zinc-900" />
        </div>
        <div className="text-center space-y-1">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            {message}
          </p>
          <p className="text-xs text-zinc-400">Please wait a moment</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
