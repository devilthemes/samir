import { useEffect, useState } from "react";

interface PropsInterface {
  toggle: boolean;
  position?: string;
  title?: string;
}

export default function OffsetBox({ toggle, position, title }: PropsInterface) {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
   setShow(!show);
  }, [toggle]);

  function closeBox() {
    setShow(false);
  }

  return (
    <div
      className={`offsetBox ${show ? "" : "hide"} ${
        position ? position : "top-right"
      }`}
    >
      {title && <h1>Box</h1>}
      <button onClick={() => closeBox()}>Close {show ? "Y" : "N"}</button>
    </div>
  );
}
