export function Clock() {
  return (
    <div
      className='relative flex cursor-default items-center justify-center rounded-2 border 
                 bg-gray-200 p-2 '
    >
      <span className='text-style text-normal flex flex-row items-center justify-between text-base'>
        <span className='p-1'>03</span>
        <span className='p-1'>:</span>
        <span className='p-1'>00</span>
        <span className='p-1'>:</span>
        <span className='p-1'>00</span>
      </span>
    </div>
  );
}
