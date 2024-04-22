import React from "react";

type withBoxHProps = {
  boxType: "h";
  boxRight?: React.ReactNode;
  boxLeft?: React.ReactNode;
  boxHContainerProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
};

type withBoxVProps = {
  boxType: "v";
  boxTop?: React.ReactNode;
  boxBottom?: React.ReactNode;
  boxVContainerProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
};

type withBoxDefaultProps = {
  boxType: "h-v" | "v-h";
  boxTop?: React.ReactNode;
  boxRight?: React.ReactNode;
  boxBottom?: React.ReactNode;
  boxLeft?: React.ReactNode;
  boxHContainerProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  boxVContainerProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
};

type withBoxProps = {
  boxProps?: withBoxHProps | withBoxVProps | withBoxDefaultProps;
};

function withBox<T>(Component: React.FC) {
  console.log("withBox renderr outer");

  return ({ boxProps, ...props }: withBoxProps & T) => {
    if (boxProps?.boxType === "h") {
      console.log("withBox render h");

      return (
        <div
          {...boxProps?.boxHContainerProps}
          style={{ display: "flex", ...boxProps?.boxHContainerProps?.style }}
        >
          {boxProps?.boxLeft}
          <Component {...props} />
          {boxProps?.boxRight}
        </div>
      );
    }

    if (boxProps?.boxType === "v") {
      console.log("withBox render v");

      return (
        <div
          {...boxProps?.boxVContainerProps}
          style={{
            display: "flex",
            flexDirection: "column",
            ...boxProps?.boxVContainerProps?.style,
          }}
        >
          {boxProps?.boxTop}
          <Component {...props} />
          {boxProps?.boxBottom}
        </div>
      );
    }

    if (boxProps?.boxType === "v-h") {
      console.log("withBox render v-h");

      return (
        <div
          {...boxProps?.boxHContainerProps}
          style={{ display: "flex", ...boxProps?.boxHContainerProps?.style }}
        >
          {boxProps?.boxLeft}
          <div
            {...boxProps?.boxVContainerProps}
            style={{
              display: "flex",
              flexDirection: "column",
              ...boxProps?.boxVContainerProps?.style,
            }}
          >
            {boxProps?.boxTop}
            <Component {...props} />
            {boxProps?.boxBottom}
          </div>
          {boxProps?.boxRight}
        </div>
      );
    }

    if (boxProps?.boxType === "h-v") {
      console.log("withBox render h-v");

      return (
        <div {...boxProps?.boxVContainerProps}>
          {boxProps?.boxTop}
          <div
            {...boxProps?.boxHContainerProps}
            style={{ display: "flex", ...boxProps?.boxHContainerProps?.style }}
          >
            {boxProps?.boxLeft}
            <Component {...props} />
            {boxProps?.boxRight}
          </div>
          {boxProps?.boxBottom}
        </div>
      );
    }

    console.log("withBox render default");

    return <Component {...props} />;
  };
}

export default withBox;
