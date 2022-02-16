import React from "react";
import "./Button.scss";

export default function Button({
  text,
  className,
  href,
  newTab,
  startDownload = false
}) {
  return (
    <div className={className}>
      <a
        className="main-button"
        href={href}
        target={newTab && "_blank"}
        download={startDownload}
      >
        {text}
      </a>
    </div>
  );
}
