interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div
      role="alert"
      className="flex items-center gap-3 rounded-xl border border-red-200/80 bg-red-50/70 p-3.5 text-sm text-red-700 animate-in fade-in duration-200"
    >
      <svg
        className="h-4 w-4 shrink-0 text-red-500"
        xmlns="http://www.w3.org/2000/svg"
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
      <span className="font-medium text-xs sm:text-sm">{message}</span>
    </div>
  );
};

export default ErrorMessage;
