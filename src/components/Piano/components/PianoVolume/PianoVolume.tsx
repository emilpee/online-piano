import React, { FunctionComponent } from 'react';

interface PianoVolumeProps {
  id: string;
  handlePianoVolume: (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => void;
  children?: React.ReactNode | React.ReactText;
}

const PianoVolume: FunctionComponent<PianoVolumeProps> = (props) => {
  const { handlePianoVolume, children, id } = props;

  return (
    <div className="piano-volume">
      <button
        className="piano-volume-button"
        id={id}
        onClick={handlePianoVolume}
      >
        {children}{' '}
      </button>
    </div>
  );
};

export default PianoVolume;
