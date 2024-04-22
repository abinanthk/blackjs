import React, { Suspense, SuspenseProps } from "react";

type withSuspenseConfig = SuspenseProps;

function withSuspense<T extends React.JSX.IntrinsicAttributes>(
  Component: React.FC,
  config?: withSuspenseConfig
) {
  return (props: T) => {
    return (
      <Suspense {...config}>
        <Component {...props} />
      </Suspense>
    );
  };
}

export default withSuspense;
