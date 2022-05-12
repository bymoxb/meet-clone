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
  isMuted: boolean;
  setIsMuted: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Toolbar: React.FunctionComponent<ToolbarProps> = ({
  isMuted,
  setIsMuted,
  //
  room,
  handleLogout,
}) => {
  const clipCopy = () => {
    navigator.clipboard.writeText(room.name).then(() => toast("Copiado! 👌"));
  };

  const onMute = () => {
    const text = !isMuted
      ? "Ensordecido! 🔇"
      : "Ensordecimiento desactivado! 🔉";

    if (isMuted) {
      room.localParticipant.audioTracks.forEach((track) => {
        track.track.disable();
      });
    } else {
      room.localParticipant.audioTracks.forEach((track) => {
        track.track.enable();
      });
    }
    setIsMuted((p) => !p);
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
        className="bg-gray-900 opacity-90 hover:bg-gray-800 w-12 rounded-full"
        title={"Apagar"}
      >
        <MicIcon className="m-auto text-2xl" />
      </button>

      <button
        className={classNames("w-12 rounded-full", {
          "bg-gray-900 opacity-90 hover:bg-gray-800": !isMuted,
          "bg-red-600 hover:bg-red-500": isMuted,
        })}
        onClick={onMute}
        title={isMuted ? "Desactivar ensordecimiento" : "Ensordecer"}
      >
        {isMuted ? (
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
