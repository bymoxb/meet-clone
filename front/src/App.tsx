import { useEffect, useState } from "react";
import GoogleMeetLogo from "src/assets/img/google_meet.png";
import { VideoChat } from "src/components/VideoChat";
import { ThemeProvider } from "src/providers/ThemeProvider";
import { ToogleTheme } from "src/components/ToogleTheme";

const App = () => (
  <ThemeProvider>
    <AppBase />
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
            {now.toLocaleTimeString()} - {now.toDateString()}
          </span>
          <ToogleTheme />
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 sm:px-0">
        <VideoChat />
      </main>
    </div>
  );
};

export default App;
