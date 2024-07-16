import React from 'react';

export const TimePicker = ({
  onChangeHandler,
}: {
  onChangeHandler: (arg: string) => void;
}) => {
  //TODO: stylized this
  return (
    <div>
      <input
        type='time'
        required
        onChange={(e) => onChangeHandler(e.target.value)}
      />
    </div>
  );
};
