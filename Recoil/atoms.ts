'use client'

import { languageOptions } from "@/Utils";
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

export const isProblemListOpen = atom({
    key:'problemListOpenVisibility',
    default:false
})

export const currLanguage = atom({
    key:'currentSelectedLanguage',
    default:languageOptions[0]
})