'use client'
import Loading from "@/app/(test)/loading";
import { SignOut } from "@/app/action";
import { redirect } from "next/navigation";
import { useEffect } from "react";


const SignOutPage = async () => {
  
  useEffect(() => {
    SignOut().then(redirect('/auth/signin'));
  })
  
  return <Loading/>
}

export default SignOutPage;