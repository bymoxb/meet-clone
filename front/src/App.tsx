import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import GoogleMeetLogo from "src/assets/img/google_meet.png";
import { ToggleTheme } from "src/components/ToggleTheme";
import { ThemeProvider } from "src/providers/ThemeProvider";
import { VideoChat } from "./components/VideoChat";

const App = () => (
  <ThemeProvider>
    <AppBase />
    <ToastContainer position="bottom-left" hideProgressBar theme="dark" />
  </ThemeProvider>
);

const AppBase = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col transition dark:bg-zinc-900 text-gray-600 dark:text-white">
      <header className="flex flex-col sm:flex-row py-4 justify-between items-center text-xl container mx-auto">
        <div className="flex items-center gap-2">
          <img src={GoogleMeetLogo} alt="logo-google-meet" />
          <span>Meet Clone</span>
        </div>
        <div className="flex items-center gap-2">
          <span>
            {now.toLocaleTimeString("es", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}{" "}
            -{" "}
            {now.toLocaleDateString("es", {
              weekday: "short",
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </span>
          <ToggleTheme />
        </div>
      </header>
      <main className="flex-1 container h-full mx-auto px-4 sm:px-0 overflow-hidden">
        <VideoChat />
      </main>
    </div>
  );
};

export default App;
