import React from 'react';

export const DatePicker = ({
  onChangeHandler,
}: {
  onChangeHandler: (arg: string) => void;
}) => {
  //TODO: stylized this
  //TODO: date allowed onwards current

  return (
    <div>
      <input
        type='date'
        required
        onChange={(e) => onChangeHandler(e.target.value)}
      />
    </div>
  );
};
