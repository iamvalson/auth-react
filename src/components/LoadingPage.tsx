const LoadingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 p-6">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative flex h-10 w-10 items-center justify-center">
          <div className="absolute h-full w-full animate-ping rounded-full bg-zinc-400 opacity-20" />
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-900" />
        </div>
        <p className="text-xs font-medium uppercase tracking-widest text-zinc-400">
          Loading
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
