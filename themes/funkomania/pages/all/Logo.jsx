import React from "react";

function Logo() {
  return (
    <div>
      <a href="/">
        <img src="/logo.png" alt="FunkoMania Logo" width="300" height="300" />
      </a>
    </div>
  );
}

export default Logo;

export const layout = {
  areaId: "header",
  sortOrder: 5,
};
