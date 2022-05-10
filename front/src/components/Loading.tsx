import LoadingIcon from "./icons/LoadingIcon";

export const Loading: React.FunctionComponent = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <LoadingIcon />
      <span className="text-3xl">Cargando...</span>
    </div>
  );
};
