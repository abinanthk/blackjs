import { useEffect, useState } from "react";

export type useDelayConfig = {
  duration?: number;
};

const useDelay = (config?: useDelayConfig): boolean => {
  const [wait, setWait] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setWait(false);
    }, config?.duration);
    return () => clearTimeout(delay);
  });

  return wait;
};

export default useDelay;
