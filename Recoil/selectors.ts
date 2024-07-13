'use client';

import { selector } from 'recoil';
import {
  courseCodeInput,
  userEmail,
  userName,
  userPassword,
  userRoleSelected,
  userRollNo,
  userSignInInfo,
} from './atoms';
import { isValidCourseCode, isValidInstituteEmail } from '@/Utils';

export const validCourseCodeState = selector({
  key: 'validCourseCodeState',
  get: ({ get }) => {
    const courseCode = get(courseCodeInput);
    return isValidCourseCode(courseCode);
  },
});

export const isUserStudent = selector({
  key: 'isUserStudent',
  get: ({ get }) => {
    const role = get(userRoleSelected);
    return role?.toLowerCase() === 'student';
  },
});

export const isRoleSelected = selector({
  key: 'isRoleSelected',
  get: ({ get }) => {
    const role = get(userRoleSelected);
    return role !== null;
  },
});

export const isUserNameFilled = selector({
  key: 'isUserNameFilled',
  get: ({ get }) => {
    const name = get(userName);
    return name.first.length > 0 && name.last.length > 0;
  },
});

export const isEmailAndRollNoFilled = selector({
  key: 'isEmailAndRollNoFilled',
  get: ({ get }) => {
    const email = get(userEmail);
    const rollNo = get(userRollNo);
    const isStudent = get(isUserStudent);

    return (
      email.length > 0 &&
      isValidInstituteEmail(email) &&
      ((isStudent && rollNo.length > 0) || !isStudent)
    );
  },
});

export const isUserPasswordFilled = selector({
  key: 'isUserPasswordFilled',
  get: ({ get }) => {
    const pass = get(userPassword);
    return (
      pass.password.length > 0 &&
      pass.confirmPassword.length > 0 &&
      pass.confirmPassword === pass.password &&
      !/\s/.test(pass.password)
    );
  },
});

export const isSignInInfoFilled = selector({
  key: 'isSignInInfoFilled',
  get: ({ get }) => {
    const info = get(userSignInInfo);
    return info.email.length > 0 && info.email.length > 0;
  },
});
