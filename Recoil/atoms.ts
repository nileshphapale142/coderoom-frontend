'use client'

import exp from "constants";
import { Fascinate } from "next/font/google";
import { atom } from "recoil";

export const courseCodeInput = atom({
    key: "courseCodeInput",
    default: "",
})

export const closeJoinClassPopUp = atom({
    key: "closeJoinClassPopUp",
    default: true
})

export const isProfileOptionsOpen = atom({
    key: "isProfileOptionsOpen",
    default: false
})

export const isBasicPopUpOpen = atom({
    key: "basicPopUpVisible",
    default: false
})