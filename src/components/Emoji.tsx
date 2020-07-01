import React from "react";

export const Emoji = ({ label, symbol }: { label: string; symbol: string }) => (
  <span
    role='img'
    aria-label={label ? label : ""}
    aria-hidden={label ? "false" : "true"}
  >
    {symbol}
  </span>
);
