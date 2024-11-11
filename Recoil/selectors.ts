'use client';

import { selector } from 'recoil';
import {
  courseCodeInput,
  createClassInfo,
  createTestInfo,
  exampleTestCases,
  newQuestion,
  solutionCode,
  testCases,
  userEmail,
  userName,
  userPassword,
  userRoleSelected,
  userRollNo,
  userSignInInfo,
} from './atoms';
import {
  isAbsoluteNumber,
  isValidCourseCode,
  isValidInstituteEmail,
} from '@/Utils';

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
    return info.email.length > 0 && info.password.length > 0;
  },
});

export const isCreateClassInfoFilled = selector({
  key: 'isCreateClassInfoFilled',
  get: ({ get }) => {
    const info = get(createClassInfo);
    return info.name.length > 0 && info.description.length > 0;
  },
});

export const isCreateTestInfoFilled = selector({
  key: 'isCreateTestInfoFilled',
  get: ({ get }) => {
    const info = get(createTestInfo);
    return Object.values(info).every(
      (value) => value !== '' || (Array.isArray(value) && value.length > 0)
    );
  },
});

export const isQueInfoFilled = selector({
  key: 'isQueInfoFilled',
  get: ({ get }) => {
    const info = get(newQuestion);
    return (
      info.name.length > 0 &&
      info.description.length > 0 &&
      isAbsoluteNumber(info.points)
    );
  },
});

export const isSolutinCodeFilled = selector({
  key: 'isSolutinCodeFilled',
  get: ({ get }) => {
    const sol = get(solutionCode);
    return sol.code.length > 0 && sol.language.length > 0;
  },
});

export const isTestCasesFilled = selector({
  key: 'isTestCasesFilled',
  get: ({ get }) => {
    const tc = get(testCases);
    return tc.length > 0;
  },
});

export const isExampleTestCasesFilled = selector({
  key: 'isExampleTestCasesFilled',
  get: ({ get }) => {
    const etcs = get(exampleTestCases);
    return (
      etcs.length !== 0 &&
      !etcs.some(
        (etc) =>
          etc.input.length === 0 ||
          etc.output.length === 0 ||
          etc.explaination.length === 0
      )
    );
  },
});
