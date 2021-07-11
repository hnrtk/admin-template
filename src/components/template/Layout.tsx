import { ReactNode } from "react";
import { Content } from "./Content";
import { Drawer } from "./Drawer";
import { Header } from "./Header";

type LayoutProps = {
  title: string;
  subtitle: string;
  children?: ReactNode;
};

export function Layout(props: LayoutProps) {
  return (
    <div className="flex h-screen w-screen">
      <Drawer />
      <div className="flex flex-col w-full p-7 bg-gray-300">
        <Header {...{ ...props }} />
        <Content>{props.children}</Content>
      </div>
    </div>
  );
}