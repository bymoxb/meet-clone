import React from "react";

type LinkProps = {
  link: string;
  text: string;
};

export const Link: React.FunctionComponent<LinkProps> = ({ link, text }) => {
  return (
    <a
      className="text-blue-600 dark:text-blue-400 hover:underline"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
};
