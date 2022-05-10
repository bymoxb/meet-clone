import { useEffect, useState } from "react";
import Video from "twilio-video";
import { Loading } from "./Loading";
import { Participant } from "./Participant";
import { Toolbar } from "./Toolbar";

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
      isRemoteParticipant={true}
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

  const [isMuted, setIsMuted] = useState(false);

  return loading || !room ? (
    <Loading />
  ) : (
    <div className="h-full flex flex-col md:flex-row gap-2">
      <div className="relative md:w-10/12 h-full">
        <Participant
          isRemoteParticipant={false}
          key={room.localParticipant.sid}
          participant={room.localParticipant}
          containerProps={{
            className: "h-full",
          }}
          videoProps={{
            className: "mx-auto h-full object-cover",
          }}
        />
        <div className="absolute w-full bottom-0 left-0 p-6">
          <div className="text-white flex justify-center gap-2 h-12 w-full">
            <Toolbar
              isMuted={isMuted}
              setIsMuted={setIsMuted}
              handleLogout={handleLogout}
              roomName={roomName}
            />
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
