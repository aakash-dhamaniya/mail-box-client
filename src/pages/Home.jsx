import React, { useRef } from "react";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
export default function Home() {
  const editRef = useRef("");
  function check() {
    console.log(editRef.current);
  }
  return <div>welcome to your mail box</div>;
}
