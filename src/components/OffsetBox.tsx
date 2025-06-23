import { useEffect, useState } from "react";
import {ReactNode} from 'react';

interface PropsInterface {
  toggle: boolean;
  position?: string;
  title?: string;
  onClose?:any;
   children?: ReactNode;
}

export default function OffsetBox({ toggle, position, title,onClose,children }: PropsInterface) {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
   setShow(toggle);
  }, [toggle]);

 

  return (
    <div
      className={`offsetBox ${show ? "" : "hide"} ${
        position ? position : "top-right"
      }`}
    >
      {title && <h1>Box</h1>}
      <button onClick={() => onClose()}>Close {show ? "Y" : "N"}</button>
      {children}
    </div>
  );
}
