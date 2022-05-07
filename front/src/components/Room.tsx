import { useEffect, useState } from "react";
import Video from "twilio-video";
import Callend from "./Callend";
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
    <Participant key={participant.sid} participant={participant} />
  ));

  return loading ? (
    <div className="w-full h-full flex items-center justify-center">
      <Loading />
      <span className="text-3xl">Cargando...</span>
    </div>
  ) : (
    <div className="flex flex-col sm:flex-row h-full border border-blue-500">
      <div className="md:w-10/12 border border-red-500">
        <div className="h-full relative border">
          {room && (
            <Participant
              key={room.localParticipant.sid}
              participant={room.localParticipant}
              containerProps={{
                className: "h-full",
              }}
              videoProps={{
                className: "h-full object-cover",
              }}
            />
          )}
          <div className="absolute w-full bottom-0 left-0 p-6">
            <div className="flex justify-center">
              <button
                className="bg-red-600 hover:bg-red-500 rounded-2xl px-4"
                onClick={handleLogout}
              >
                <Callend />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="border border-red-500"> */}
      {/* <h3 className="text-xl">Participantes</h3> */}
      {/* <div className="overflow-auto">{remoteParticipants}</div> */}
      <div className="flex md:flex-col md:w-2/12 overflow-hidden gap-4 flex-row">
        {/* <Participant
          key={"awdad1"}
          containerProps={{
            className: "h-48 flex-shrink-0",
          }}
          videoProps={{
            className: "h-full",
          }}
          participant={room?.localParticipant}
        />

        <Participant
          key={"awdad3"}
          containerProps={{
            className: "h-48 flex-shrink-0",
          }}
          videoProps={{
            className: "h-full",
          }}
          participant={room?.localParticipant}
        />

        <Participant
          key={"awdad6"}
          containerProps={{
            className: "h-48 flex-shrink-0",
          }}
          videoProps={{
            className: "h-full",
          }}
          participant={room?.localParticipant}
        />

        <Participant
          key={"awd2d6"}
          containerProps={{
            className: "h-48 flex-shrink-0",
          }}
          videoProps={{
            className: "h-full",
          }}
          participant={room?.localParticipant}
        />

        <Participant
          key={"awd4d6"}
          containerProps={{
            className: "h-48 flex-shrink-0",
          }}
          videoProps={{
            className: "h-full",
          }}
          participant={room?.localParticipant}
        />

        <Participant
          key={"awd5d6"}
          containerProps={{
            className: "h-48 flex-shrink-0",
          }}
          videoProps={{
            className: "h-full",
          }}
          participant={room?.localParticipant}
        /> */}
      </div>
      {/* </div> */}
    </div>
  );
};
