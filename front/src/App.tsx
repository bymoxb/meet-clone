import { useEffect, useState } from "react";
import GoogleMeetLogo from "src/assets/img/google_meet.png";
import { ToggleTheme } from "src/components/ToggleTheme";
import { VideoChat } from "src/components/VideoChat";
import { ThemeProvider } from "src/providers/ThemeProvider";

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
          <ToggleTheme />
        </div>
      </header>
      <main className="flex-1 container h-full mx-auto px-4 sm:px-0 overflow-hidden">
        {/* <Room /> */}
        <VideoChat />
      </main>
    </div>
  );
};

// const Room = () => {
//   return (
//     <div className="h-full flex flex-col md:flex-row gap-2">
//       <div className="relative md:w-10/12 h-full">
//         <Participant
//           // key={room.localParticipant.sid}
//           // participant={room.localParticipant}
//           containerProps={{
//             className: "h-full",
//             // className: "h-full border border-red-500 object-fit",
//           }}
//           videoProps={{
//             className: "mx-auto h-full object-cover",
//             // className: "h-full object-cover",
//           }}
//         />
//         {/* {room && (
//           )} */}
//         <div className="absolute w-full bottom-0 left-0 p-6">
//           <div className="flex justify-center">
//             <button
//               className="bg-red-600 hover:bg-red-500 rounded-2xl px-4"
//               // onClick={handleLogout}
//             >
//               <Callend />
//             </button>
//           </div>
//         </div>
//         {/* <div className="h-full relative border">
//         </div> */}
//       </div>
//       <div className="md:w-2/12 overflow-hidden md:h-full">
//         <div className="participants-container md:h-full overflow-auto h-24 flex flex-row md:flex-col gap-4 md:px-2">
//           {[...Array(15).keys()].map((i) => (
//             <Participant
//               key={i}
//               // key={room.localParticipant.sid}
//               // participant={room.localParticipant}
//               containerProps={{
//                 className: "shrink-0 h-full md:h-fit",
//               }}
//               videoProps={{
//                 className: "h-full",
//               }}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// type ParticipantProps = {
//   containerProps?: React.HTMLAttributes<HTMLDivElement>;
//   videoProps?: React.HTMLAttributes<HTMLVideoElement>;
// };

// const Participant: React.FunctionComponent<ParticipantProps> = ({
//   containerProps,
//   videoProps,
// }) => {
//   const videoRef = useRef<any>(null);

//   useEffect(() => {
//     getVideo();
//   }, [videoRef]);

//   const getVideo = () => {
//     navigator.mediaDevices
//       .getUserMedia({ video: { width: 640 } })
//       .then((stream) => {
//         let video = videoRef.current;
//         video.srcObject = stream;
//         video.play();
//       })
//       .catch((err) => {
//         console.error("error:", err);
//       });
//   };

//   return (
//     <div {...containerProps}>
//       {/* <h3>{participant.identity}</h3> */}
//       <video
//         ref={videoRef}
//         // autoPlay
//         {...videoProps}
//         className={"rounded-xl " + (videoProps?.className || "")}
//       />
//       {/* <audio ref={audioRef} autoPlay muted={true} /> */}
//     </div>
//   );
// };

export default App;
