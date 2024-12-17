'use client';

import React, { useEffect } from 'react';
import { BasicInput, BasicTextArea } from '../Inputs';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { createClassInfo, isFullScreenPopUpOpen } from '@/Recoil';
import { SimpleButton } from '../Buttons';
import { editClassAction } from '@/app/action';
import { useRouter } from 'next/navigation';

interface EditCourseProps {
  id: number;
  name: string;
  description: string;
}

export const EditCourse = ({ id, name, description }: EditCourseProps) => {
  const [info, setInfo] = useRecoilState(createClassInfo);
  const setPopUpOpen = useSetRecoilState(isFullScreenPopUpOpen);
  const router = useRouter();

  useEffect(() => {
    setInfo({
      name: name,
      description,
    });
  }, []);

  const handleEdit = async () => {
    if (info.name.length === 0 || info.description.length == 0) {
      alert("Name and description can't be empty");
      return;
    }

    const { data, status } = await editClassAction({ ...info, id });

    if (status === 200) {
      setPopUpOpen(false);
      router.push(`/c/${id}`);
    } else if (status === 403) {
      alert('Not authorized to edit');
      router.push('/');
    } else if (status === 401) {
      router.push('/auth/sigin');
    } else if (status === 400) {
      alert('Bad request');
    } else if (status === 500) {
      alert('Server error');
    } else alert('Unkown error');
  };

  return (
    <div className='flex h-full flex-col'>
      <div className='block h-auto flex-grow'></div>
      <div className='relative mx-auto rounded-3 bg-white p-4'>
        <div className='flex flex-col px-2'>
          <div className='text-style text-heading py-2'>
            <span className='text-2xl font-semibold'>Edit Class</span>
          </div>

          <div className='flex items-center justify-center  py-2'>
            <BasicInput
              title='Class Name'
              inputHandler={(name) => {
                setInfo((prev) => {
                  return { ...prev, name };
                });
              }}
              defaultInput={name}
              width='25rem'
            />
          </div>

          <div className='flex flex-col justify-start  py-2'>
            <div className='text-style text-base font-normal'>
              <span className='font-normal'>Description</span>
            </div>
            <BasicTextArea
              inputHandler={(description) => {
                setInfo((prev) => {
                  return { ...prev, description };
                });
              }}
              defaultValue={description}
              width='25rem'
            />
          </div>

          <div className='flex items-center justify-center py-2 pt-4'>
            <SimpleButton name='Edit' action={handleEdit} />
          </div>
        </div>
      </div>
      <div className='block h-auto flex-grow'></div>
    </div>
  );
};
