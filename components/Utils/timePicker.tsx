import React from 'react';

export const TimePicker = ({
  onChangeHandler,
  defaultValue,
}: {
  onChangeHandler: (arg: string) => void;
  defaultValue?: string;
}) => {
  //TODO: stylized this
  return (
    <div>
      <input
        type='time'
        defaultValue={defaultValue}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
    </div>
  );
};
