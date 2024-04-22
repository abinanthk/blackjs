import React from "react";
import { BoxProps } from "./Box.types";

export const Box: React.FC<BoxProps> = (props) => <div {...props} />;
