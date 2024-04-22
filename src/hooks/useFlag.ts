import { useState } from "react";

export type useFlagConfig = {
  init: boolean;
};

const useFlag = (config: useFlagConfig) => {
  const [flag, setFlag] = useState<boolean>(config.init || false);

  const toggle = () => {
    setFlag((prevFlag) => !prevFlag);
  };

  return { flag, setFlag, toggle };
};

export default useFlag;
