import React from "react";
import ErrorBoundary, { IErrorBoundary } from "../wrappers/ErrorBounary";

type withErrorBoundaryConfig = IErrorBoundary;

function withErrorBoundary<T extends React.JSX.IntrinsicAttributes>(
  Component: React.FC,
  config?: withErrorBoundaryConfig
) {
  return (props: T) => {
    return (
      <ErrorBoundary {...config}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}

export default withErrorBoundary;
