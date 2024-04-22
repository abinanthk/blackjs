import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { CardStyles } from "./Card.styles";

export type CardProps = ComponentProps<"div"> & VariantProps<typeof CardStyles>;
