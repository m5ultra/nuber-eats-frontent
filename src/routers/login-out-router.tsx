import React from "react";
import {isLoggedInVar} from "../apollo"

export const LoginOutRouter = () => {
  const onClick = () => {
    isLoggedInVar(true)
  }
  return (<div>
    <h1>Logged Out</h1>
    <button onClick={onClick}> Click To Out</button>
  </div>)
}
