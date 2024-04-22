type withConditionalProps<T1, T2> = {
  condition?: boolean;
  comp1Props?: T1;
  comp2Props?: T2;
};

function withConditional<T1, T2>(Component1: React.FC, Component2: React.FC) {
  return ({
    condition,
    comp1Props,
    comp2Props,
  }: withConditionalProps<T1, T2>) => {
    return condition ? (
      <Component1 {...comp1Props} />
    ) : (
      <Component2 {...comp2Props} />
    );
  };
}

export default withConditional;
