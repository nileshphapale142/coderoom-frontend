export const CheckBox = ({ action }: { action: () => void }) => {
  return (
    <div className='ml-1 mt-2 w-full'>
      <div className='flex items-start justify-start'>
        <div className='flex cursor-pointer'>
          <div className='flex items-center justify-center py-[0.15em]'>
            <input
              type='checkbox'
              placeholder='Show Password'
              className='cursor-pointer appearance-none rounded'
              onClick={action}
              id='showPassword'
            />
          </div>
          <div className='flex items-center justify-center pl-4'>
            <span className='text-style cursor-pointer'>Show Password</span>
          </div>
        </div>
      </div>
    </div>
  );
};
