import useDelay, { useDelayConfig } from "../hooks/useDelay";

type withDelayConfig = useDelayConfig;

function withDelay<T extends React.JSX.IntrinsicAttributes>(
  Component: React.FC,
  config?: withDelayConfig
) {
  return (props: T) => {
    const wait = useDelay(config);
    return wait || <Component {...props} />;
  };
}

export default withDelay;
