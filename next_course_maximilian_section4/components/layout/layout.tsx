import React, { PropsWithChildren } from "react";
import MainHeader from "./main-header";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
}
