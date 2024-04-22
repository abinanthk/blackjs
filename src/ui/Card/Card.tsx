import { cn } from "../../utils";
import { CardStyles } from "./Card.styles";
import { CardProps } from "./Card.types";
import { Footer, Header, Main } from "..";

export const Card = ({ shadow, radius, className, ...props }: CardProps) => {
  return (
    <div className={cn(CardStyles({ shadow, radius, className }))} {...props} />
  );
};

Card.Header = Header;
Card.Main = Main;
Card.Footer = Footer;
