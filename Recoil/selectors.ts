'use client';

import { selector } from 'recoil';
import { courseCodeInput } from './atoms';
import { isValidCourseCode } from '@/Utils';

export const validCourseCodeState = selector({
  key: 'validCourseCodeState',
  get: ({ get }) => {
    const courseCode = get(courseCodeInput);
    return isValidCourseCode(courseCode);
  },
});
