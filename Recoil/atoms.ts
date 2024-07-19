'use client';

import { languageOptions } from '@/Utils';
import { atom } from 'recoil';

export const isUserTeacher = atom({
  key: 'isUserTeacher',
  default: false,
});

export const courseCodeInput = atom({
  key: 'courseCodeInput',
  default: '',
});

export const closeJoinClassPopUp = atom({
  key: 'closeJoinClassPopUp',
  default: true,
});

export const isProfileOptionsOpen = atom({
  key: 'isProfileOptionsOpen',
  default: false,
});

export const isBasicPopUpOpen = atom({
  key: 'basicPopUpVisible',
  default: false,
});

export const isProblemListOpen = atom({
  key: 'problemListOpenVisibility',
  default: false,
});

export const currLanguage = atom({
  key: 'currentSelectedLanguage',
  default: languageOptions[0],
});

export const signUpPageNo = atom({
  key: 'signUpPageNo',
  default: 0,
});

export const userRoleSelected = atom<string | null>({
  key: 'useRoleKey',
  default: null,
});

export const userName = atom<{
  first: string;
  last: string;
}>({
  key: 'userFirstLastName',
  default: {
    first: '',
    last: '',
  },
});

export const userEmail = atom({
  key: 'userEmail',
  default: '',
});

export const userRollNo = atom({
  key: 'userRollNo',
  default: '',
});

export const userPassword = atom<{
  password: string;
  confirmPassword: string;
}>({
  key: 'userPassword',
  default: {
    password: '',
    confirmPassword: '',
  },
});

export const userSignInInfo = atom<{
  email: string;
  password: string;
}>({
  key: 'userSignInInfo',
  default: {
    email: '',
    password: '',
  },
});

export const createClassInfo = atom<{
  name: string;
  description: string;
}>({
  key: 'createClassInfo',
  default: {
    name: '',
    description: '',
  },
});

export const createTestInfo = atom<{
  name: string;
  date: string;
  startTime: string;
  endTime: string;
  visibility: string;
  evaluationScheme: string;
  languages: string[];
}>({
  key: 'createTestInfo',
  default: {
    name: '',
    date: '',
    startTime: '',
    endTime: '',
    visibility: '',
    evaluationScheme: '',
    languages: [],
  },
});

export const newQuestion = atom<{
  name: string;
  description: string;
  points: string;
}>({
  key: 'newQuestion',
  default: {
    name: '',
    description: '',
    points: '',
  },
});

export const solutionCode = atom<{
  language: string;
  code: string;
}>({
  key: 'solutionCode',
  default: {
    language: '',
    code: '',
  },
});

export const testCases = atom<string>({
  key: 'testCases',
  default: '',
});

export const exampleTestCases = atom<
  {
    id: number;
    input: string;
    output: string;
    explaination: string;
  }[]
>({
  key: 'exampleTestCases',
  default: [],
});

export const testCaseInput = atom({
  key: 'testCaseInput',
  default: '',
});

export const testCasesOutput = atom<{
  error: string | null;
  output: string | null;
}>({
  key: 'testCasesOutput',
  default: {
    error: null,
    output: null,
  },
});

export const selectedLanguage = atom<string>({
  key: 'selectedLanguage',
  default: '',
});

export const userCode = atom({
  key: 'userCode',
  default: '',
});

export const currInfoPage = atom({
  key: 'currInfoPage',
  default: 1,
});

export const submissionMade = atom({
  key: 'submissionMade',
  default: 0,
});
