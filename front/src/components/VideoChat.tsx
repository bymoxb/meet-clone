import { useCallback, useState } from "react";
import join_call from "src/assets/sound/join_call.ogg";
import leave_call from "src/assets/sound/leave_call.ogg";
import { getRandom } from "src/utils/animals";
import { Lobby } from "./Lobby";
import { Room } from "./Room";

const audioEnter = new Audio(join_call);
const audioLeave = new Audio(leave_call);

export const VideoChat = () => {
  const [username, setUsername] = useState(getRandom("bird"));
  const [roomName, setRoomName] = useState(getRandom("cat"));
  const [submitting, setSubmitting] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  const handleUsernameChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(event.target.value);
    },
    []
  );

  const handleRoomNameChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRoomName(event.target.value);
    },
    []
  );

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setSubmitting(true);
      const data = await fetch("api/room", {
        method: "POST",
        body: JSON.stringify({
          username,
          room: roomName,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
      setSubmitting(false);
      setToken(data.data);
      audioEnter.play();
    },
    [roomName, username]
  );

  const handleLogout = useCallback(() => {
    setToken(null);
    audioLeave.play();
    setRoomName(getRandom("cat"));
    setUsername(getRandom("bird"));
  }, []);

  return token ? (
    <Room roomName={roomName} token={token} handleLogout={handleLogout} />
  ) : (
    <Lobby
      username={username}
      roomName={roomName}
      submitting={submitting}
      handleSubmit={handleSubmit}
      handleUsernameChange={handleUsernameChange}
      handleRoomNameChange={handleRoomNameChange}
    />
  );
};
