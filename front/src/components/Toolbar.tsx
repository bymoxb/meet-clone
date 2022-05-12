import classNames from "classnames";
import { useState } from "react";
import { toast } from "react-toastify";
import { Room } from "twilio-video";
import CallEnd from "./icons/CallEnd";
import { MicIcon } from "./icons/MicIcon";
import { MicOffIcon } from "./icons/MicOffIcon";
import { ShareIcon } from "./icons/ShareIcon";
import { VideoCamIcon } from "./icons/VideoCamIcon";
import { VideoCamOffIcon } from "./icons/VideoCamOffIcon";
import { VolIcon } from "./icons/VolIcon";
import { VolOffIcon } from "./icons/VolOffIcon";

type ToolbarProps = {
  room: Room;
  handleLogout: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  //
  isAudioEnabled: boolean;
  setIsAudioEnabled: (op: boolean) => void;
};

export const Toolbar: React.FunctionComponent<ToolbarProps> = ({
  isAudioEnabled,
  setIsAudioEnabled,
  //
  room,
  handleLogout,
}) => {
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);

  const clipCopy = () => {
    navigator.clipboard.writeText(room.name).then(() => toast("Copiado! 👌"));
  };

  const toggleAudio = () => {
    let text = "";

    room.localParticipant.audioTracks.forEach((a) => {
      if (a.track.isEnabled) {
        a.track.disable();
        setIsAudioEnabled(false);
        text = "Micrófono desactivado! 🙊";
      } else {
        a.track.enable();
        setIsAudioEnabled(true);
        text = "Micrófono activado! 🐵";
      }
    });

    toast(text);
  };

  const toggleCam = () => {
    let text = "";
    room.localParticipant.videoTracks.forEach((track) => {
      if (track.track.isEnabled) {
        track.track.disable();
        text = "Cámara desactivada! 🥺";
        setIsVideoEnabled(false);
      } else {
        track.track.enable();
        setIsVideoEnabled(true);
        text = "Cámara activada! 😎";
      }
    });
    toast(text);
  };

  return (
    <>
      <button
        className="bg-gray-900 opacity-90 hover:bg-gray-800 w-12 rounded-full"
        title="Copiar id de la sesión"
        onClick={clipCopy}
      >
        <ShareIcon className="m-auto text-2xl" />
      </button>

      <button
        className={classNames("w-12 rounded-full", {
          "bg-gray-900 opacity-90 hover:bg-gray-800": isAudioEnabled,
          "bg-red-600 hover:bg-red-500": !isAudioEnabled,
        })}
        onClick={toggleAudio}
        title={isAudioEnabled ? "Desactivar" : "Activar"}
      >
        {isAudioEnabled ? (
          <MicIcon className="m-auto text-2xl" />
        ) : (
          <MicOffIcon className="m-auto text-2xl" />
        )}
      </button>

      <button
        className={classNames("w-12 rounded-full", {
          "bg-gray-900 opacity-90 hover:bg-gray-800": isVideoEnabled,
          "bg-red-600 hover:bg-red-500": !isVideoEnabled,
        })}
        onClick={toggleCam}
        title={isVideoEnabled ? "Desactivar" : "Activar"}
      >
        {isVideoEnabled ? (
          <VideoCamIcon className="m-auto text-2xl" />
        ) : (
          <VideoCamOffIcon className="m-auto text-2xl" />
        )}
      </button>

      <button
        className="bg-red-600 hover:bg-red-500 px-3 rounded-2xl"
        onClick={handleLogout}
      >
        <CallEnd className="m-auto text-4xl" />
      </button>
    </>
  );
};
