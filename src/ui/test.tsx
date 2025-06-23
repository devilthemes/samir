"use client";
import OffsetBox from "@/components/OffsetBox";
import { useState } from "react";

export default function Test (){
    const [status,setStatus]=useState<boolean>(false)
    return (
        <>
            <OffsetBox title="This is my test" toggle={status} position="top-left" onClose={()=>setStatus(false)}></OffsetBox>
            <button onClick={()=>setStatus(!status)} >Toggle {status ? "Y" :"N"}</button>
        </>
    )
}