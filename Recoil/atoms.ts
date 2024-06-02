'use client'

import { atom } from "recoil";

export const courseCodeInput = atom({
    key: "courseCodeInput",
    default: "",
})

export const closeJoinClassPopUp = atom({
    key: "closeJoinClassPopUp",
    default: true
})