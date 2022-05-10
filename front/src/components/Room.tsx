import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Video from "twilio-video";
import Callend from "./Callend";
import { MicIcon } from "./icons/MicIcon";
import { ShareIcon } from "./icons/ShareIcon";
import { VolIcon } from "./icons/VolIcon";
import Loading from "./Loading";
import { Participant } from "./Participant";

type RoomProps = {
  roomName: string;
  token: string;
  handleLogout: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const Room: React.FunctionComponent<RoomProps> = ({
  handleLogout,
  roomName,
  token,
}) => {
  const [loading, setLoading] = useState(true);
  const [room, setRoom] = useState<Video.Room | null>(null);
  const [participants, setParticipants] = useState<Video.Participant[]>([]);

  useEffect(() => {
    setLoading(true);
    const participantConnected = (participant: Video.RemoteParticipant) => {
      setParticipants((prevParticipants) => [...prevParticipants, participant]);
    };

    const participantDisconnected = (participant: Video.RemoteParticipant) => {
      setParticipants((prevParticipants) =>
        prevParticipants.filter((p) => p !== participant)
      );
    };

    Video.connect(token, {
      name: roomName,
    })
      .then((room) => {
        setRoom(room);
        room.on("participantConnected", participantConnected);
        room.on("participantDisconnected", participantDisconnected);
        room.participants.forEach(participantConnected);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      setRoom((currentRoom) => {
        if (currentRoom && currentRoom.localParticipant.state === "connected") {
          currentRoom.localParticipant.tracks.forEach((trackPublication: any) =>
            trackPublication.track.stop()
          );
          currentRoom.disconnect();
          return null;
        } else {
          return currentRoom;
        }
      });
    };
  }, [roomName, token]);

  const remoteParticipants = participants.map((participant) => (
    <Participant
      key={participant.sid}
      participant={participant}
      containerProps={{
        className: "shrink-0 h-full md:h-fit",
      }}
      videoProps={{
        className: "h-full",
      }}
    />
  ));

  const clipCopy = () => {
    navigator.clipboard.writeText(roomName).then(() => toast("Copiado! 👌"));
  };

  return loading ? (
    <div className="w-full h-full flex items-center justify-center">
      <Loading />
      <span className="text-3xl">Cargando...</span>
    </div>
  ) : (
    <div className="h-full flex flex-col md:flex-row gap-2">
      <div className="relative md:w-10/12 h-full">
        {room && (
          <Participant
            key={room.localParticipant.sid}
            participant={room.localParticipant}
            containerProps={{
              className: "h-full",
            }}
            videoProps={{
              className: "mx-auto h-full object-cover",
            }}
          />
        )}
        <div className="absolute w-full bottom-0 left-0 p-6">
          <div className="text-white flex justify-center gap-2 h-12 w-full">
            <>
              <button
                className="bg-gray-900 opacity-90 hover:bg-gray-800 w-12 rounded-full"
                title="Copiar id de la sesión"
                onClick={clipCopy}
                // id="clipcopy-button"
                // ref={setReferenceElement}
                // onMouseLeave={() => setTextClipCopy("Copiar id room")}
              >
                <ShareIcon className="m-auto text-2xl" />
              </button>
            </>
            <button
              className="bg-gray-900 opacity-90 hover:bg-gray-800 w-12 rounded-full"
              title={"Apagar"}
            >
              <MicIcon className="m-auto text-2xl" />
            </button>
            <button
              className="bg-gray-900 opacity-90 hover:bg-gray-800 w-12 rounded-full"
              title={"Silenciar"}
            >
              <VolIcon className="m-auto text-2xl" />
            </button>
            <button
              className="bg-red-600 hover:bg-red-500 px-3 rounded-2xl"
              onClick={handleLogout}
            >
              <Callend className="m-auto text-4xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="md:w-2/12 overflow-hidden md:h-full">
        <div className="participants-container md:h-full overflow-auto h-24 flex flex-row md:flex-col gap-4 md:px-2">
          {remoteParticipants}
        </div>
      </div>
    </div>
  );
};
