import { RoleSelect } from './roleSelect';

export const Page1 = () => {
  return (
    <div className='flex w-full items-center justify-between pl-12'>
      <RoleSelect
        imgLink='https://img.icons8.com/ios/50/teacher.png'
        role='Teacher'
      />
      <RoleSelect
        imgLink='https://img.icons8.com/ios/50/graduation-cap.png'
        role='Student'
      />
    </div>
  );
};
