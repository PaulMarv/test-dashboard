import React from "react";

export const Header = () => {
  return (
    <div className="flex gap-3 items-center w-full justify-between px-10">
      <div className="text-3xl font-bold">WhatBytes</div>
      <div className="lg:block hidden"><span className="rounded-md p-3 border-2 border-slate-200 font-bold">Rahil Siddique</span></div>
    </div>
  );
};
