export const SubNavBarItem = ({
  name,
  color,
  action,
  selected = false,
}: {
  name: string;
  color: string;
  action: () => void;
  selected?: boolean;
}) => {
  return (
    <div
      className={
        `text-style inline-block h-full  w-30 cursor-pointer select-none 
        border-r border-r-gray text-${color} rounded-tr-1` +
        (selected ? ' google-bw-bg ' : ' hover:bg-gray-200 ')
      }
    >
      <button className='h-full w-full p-2 px-4' onClick={action}>
        <div className='flex w-full items-center justify-center'>{name}</div>
      </button>
    </div>
  );
};
