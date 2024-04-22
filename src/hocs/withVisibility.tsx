type withVisibilityProps = {
  visible?: boolean;
};

function withVisibility<T extends React.JSX.IntrinsicAttributes>(
  Component: React.FC
) {
  return ({ visible, ...props }: withVisibilityProps & T) => {
    return visible && <Component {...props} />;
  };
}

export default withVisibility;
