export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative">
        <div className="w-8 h-8 border-4 border-primary/20 rounded-full animate-spin"></div>
        <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-primary rounded-full animate-spin"></div>
      </div>
    </div>
  );
}