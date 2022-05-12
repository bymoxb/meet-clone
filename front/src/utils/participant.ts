export function getName(identity: string) {
  const name = identity.split("-")[0];
  return name || "Anónimo";
}
