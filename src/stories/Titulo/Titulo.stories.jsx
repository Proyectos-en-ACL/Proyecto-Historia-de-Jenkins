import React from "react";
import {storiesOf} from "@storybook/react"
import {action} from "@storybook/addon-actions"
import Titulo from "./Titulo"
import {withKnobs, text, select, boolean, number} from "@storybook/addon-knobs"

storiesOf('Atomos/Titulo', module)
  .addDecorator(withKnobs)
  .addParameters({
    saludo: "Holis"
  })
  .add("Default", () => {
    return <Titulo saludo ={text("saludo", "Esto es un titulo")}></Titulo>;
  })
  .add("Fondo", () => {
    return <Titulo 
      saludo ={text("saludo", "Esto es un titulo")}
      boolean = {boolean("fondo", true)}></Titulo>;
  })