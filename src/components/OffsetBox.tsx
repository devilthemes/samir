import { useEffect, useState } from "react";

interface PropsInterface {
  toggle: boolean;
  position?: string;
  title?: string;
  onClose?:any;
}

export default function OffsetBox({ toggle, position, title,onClose }: PropsInterface) {
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
    </div>
  );
}
