import { useCallback, useState } from "react";
import { birds, cats } from "~/utils/animals";
import { Lobby } from "./Lobby";
import { Room } from "./Room";

export const VideoChat = () => {
  const [username, setUsername] = useState(
    birds[Math.floor(Math.random() * birds.length)] + "-" + Date.now()
  );
  const [roomName, setRoomName] = useState(
    cats[Math.floor(Math.random() * cats.length)]
  );
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
      const data = await fetch("api/video/token", {
        method: "POST",
        body: JSON.stringify({
          identity: username,
          room: roomName,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
      setSubmitting(false);
      setToken(data.data);
    },
    [roomName, username]
  );

  const handleLogout = useCallback(() => {
    setToken(null);
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
