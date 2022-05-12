import classNames from "classnames";
import { toast } from "react-toastify";
import { Room } from "twilio-video";
import CallEnd from "./icons/CallEnd";
import { MicIcon } from "./icons/MicIcon";
import { ShareIcon } from "./icons/ShareIcon";
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
  const clipCopy = () => {
    navigator.clipboard.writeText(room.name).then(() => toast("Copiado! 👌"));
  };

  const onMute = () => {
    let text = "";

    room.localParticipant.audioTracks.forEach((a) => {
      if (a.track.isEnabled) {
        a.track.disable();
        setIsAudioEnabled(false);
        text = "Ensordecido! 🔇";
      } else {
        a.track.enable();
        setIsAudioEnabled(true);
        text = "Ensordecimiento desactivado! 🔉";
      }
    });

    toast(text);

    /* PARA LA CÁMARA
    if (isMuted) {
      // room.localParticipant.videoTracks.forEach((track) => {
      //   track.track.enable();
      // });
    } else {
      // room.localParticipant.videoTracks.forEach((track) => {
      //   track.track.disable();
      // });
    }
    */
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
        className="bg-gray-900 opacity-90 hover:bg-gray-800 w-12 rounded-full"
        title={"Apagar"}
      >
        <MicIcon className="m-auto text-2xl" />
      </button>

      <button
        className={classNames("w-12 rounded-full", {
          "bg-gray-900 opacity-90 hover:bg-gray-800": !isAudioEnabled,
          "bg-red-600 hover:bg-red-500": isAudioEnabled,
        })}
        onClick={onMute}
        title={isAudioEnabled ? "Desactivar ensordecimiento" : "Ensordecer"}
      >
        {isAudioEnabled ? (
          <VolOffIcon className="m-auto text-2xl" />
        ) : (
          <VolIcon className="m-auto text-2xl" />
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
