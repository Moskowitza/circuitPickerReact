import React from "react";
import { render } from "react-dom";
import Router from "./components/Router";
import "./css/style.css";
require("dotenv").config();

render(<Router />, document.querySelector("#root"));
