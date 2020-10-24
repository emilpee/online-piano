import React, { FunctionComponent } from "react";

interface PianoKeysContainerProps {
  children?: React.ReactNode;
}

const PianoKeysContainer: FunctionComponent<PianoKeysContainerProps> = (
  props
) => {
  const { children } = props;

  return <ul className="piano-container">{children}</ul>;
};

export default PianoKeysContainer;
