"use client";
import OffsetBox from "@/components/OffsetBox";
import { useState } from "react";

export default function Test (){
    const [status,setStatus]=useState<boolean>(true)
    return (
        <>
            <OffsetBox title="This is my test" toggle={status} position="top-left"></OffsetBox>
            <button onClick={()=>setStatus(!status)} >Toggle</button>
        </>
    )
}