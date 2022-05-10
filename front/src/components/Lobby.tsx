import classNames from "classnames";
import MiduFace from "src/assets/img/midudev.png";
import { Link } from "./Link";

type LobbyProps = {
  username: string;
  roomName: string;
  submitting: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  handleUsernameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRoomNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Lobby: React.FunctionComponent<LobbyProps> = ({
  username,
  handleUsernameChange,
  roomName,
  handleRoomNameChange,
  handleSubmit,
  submitting,
}) => {
  return (
    <div className="grid sm:grid-cols-2 h-full items-center sm:gap-5 md:gap-10">
      <div className="flex flex-col gap-y-6">
        <div className="text-3xl sm:text-3xl lg:text-5xl text-black dark:text-white flex flex-col gap-y-3">
          <h2>Videoconferencias premium.</h2>
          <h2>Ahora gratis para todos.</h2>
          <p className="text-base">
            Clon de <Link link="https://meet.google.com" text="Google Meet" />{" "}
            desarrollado con <Link link="https://reactjs.org" text="React" />,
            <Link link="https://tailwindcss.com" text="Tailwind CSS" />,{" "}
            <Link link="https://nestjs.com" text="NestJS" />
          </p>
        </div>
        <div>
          <form
            className="grid grid-cols-4 lg:grid-cols-6 gap-2"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              id="room"
              value={roomName}
              onChange={handleRoomNameChange}
              placeholder="Id sesión"
              className="transition disabled:cursor-not-allowed rounded p-3 border focus:border-blue-400 col-span-3 lg:col-span-4 focus:outline-0 outline-blue-600 dark:bg-zinc-900 dark:border-gray-500"
              disabled={submitting}
              required
            />

            <button
              disabled={submitting}
              className={classNames("font-semibold rounded p-3 transition", {
                "text-gray-500 cursor-wait bg-gray-50 dark:text-gray-500 dark:bg-zinc-800":
                  submitting,
                "text-blue-600 hover:bg-blue-50 hover:text-blue-700 dark:text-white dark:hover:bg-zinc-800":
                  !submitting,
              })}
              type="submit"
            >
              Unirse
            </button>
          </form>
          <small className="">
            Ingresa el id de una sessión existente o crea una nueva
          </small>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-fit flex flex-col gap-2">
          <img
            className="w-72 sm:w-auto mx-auto"
            src={MiduFace}
            alt="img-github"
          />
          <div className="flex flex-col items-center">
            <h3 className="lg:text-xl text-gray-800 dark:text-white font-semibold">
              Sigue a este Dios, no te arrepentirás
            </h3>
            <ul className="flex gap-3">
              <li>
                <Link link="https://www.twitch.tv/midudev" text="Twitch" />
              </li>
              <li>
                <Link
                  link="https://www.instagram.com/midu.dev"
                  text="Instagram"
                />
              </li>
              <li>
                <Link link="https://twitter.com/midudev" text="Twitter" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
