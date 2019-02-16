import * as React from "react";
import { render } from "react-dom";

const HelloMessage = (_: unknown) => <p>Like, whatever.</p>;
const el = document.getElementById("app");

render(<HelloMessage />, el);
