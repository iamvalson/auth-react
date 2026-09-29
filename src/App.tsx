import { Toaster } from "sonner";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <>
      <Toaster
        position="top-right"
        richColors
        closeButton
        theme="light"
        toastOptions={{
          className:
            "!rounded-xl !border !border-zinc-200 !shadow-lg !font-sans",
        }}
      />
      <AppRoutes />
    </>
  );
};

export default App;
