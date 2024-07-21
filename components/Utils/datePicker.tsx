import React from 'react';

export const DatePicker = ({
  onChangeHandler,
  defaultValue,
}: {
  onChangeHandler: (arg: string) => void;
  defaultValue?: string;
}) => {
  //TODO: stylized this
  //TODO: date allowed onwards current

  return (
    <div>
      <input
        type='date'
        required
        defaultValue={defaultValue}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
    </div>
  );
};
