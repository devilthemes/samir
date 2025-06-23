"use client";
import OffsetBox from "@/components/OffsetBox";
import { useState } from "react";

export default function Test (){
    const [status,setStatus]=useState<boolean>(true)
    return (
        <>
            <OffsetBox title="This is my test" toggle={status} position="top-left" onClose={()=>setStatus(false)}>
                <h3>I am children</h3>
            </OffsetBox>
            <button onClick={()=>setStatus(!status)} >Toggle {status ? "Y" :"N"}</button>
        </>
    )
}