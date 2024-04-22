import { ContainerProps } from "./Container.types";
import { Footer, Header, Main } from "..";

export const Container = ({ ...props }: ContainerProps) => {
  return <div {...props} />;
};

Container.Header = Header;
Container.Main = Main;
Container.Footer = Footer;
