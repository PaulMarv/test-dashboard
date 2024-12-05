import React from "react";

export const Header = () => {
  return (
    <div className="flex gap-3 items-center w-full justify-between px-10">
      <div>logo</div>
      <div className="lg:block hidden">profile</div>
    </div>
  );
};
