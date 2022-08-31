import React from "react";
import {storiesOf} from "@storybook/react"
import Button from "./Button"
import {withKnobs, text, select, boolean, number} from "@storybook/addon-knobs"

const tiposSaludo = ["Buen dia", "Hola" , "Como estas"]

storiesOf("Atomos/Botones", module)
  .addDecorator(withKnobs)
  .addParameters({
    saludo: "Holis"
  })
  .add("Default", () => {
    return <Button saludo ={text("saludo", "Buen día")}></Button>;
  })
  .add("Secondary", () => {
    return <Button saludo = "Como estas?"></Button>;
  })
  .add("Boolean", () => {
    return <Button saludo ={boolean("saludo", true)}></Button>;
  })
  .add("Numero", () => {
    return <Button saludo ={number("saludo", 2)}></Button>;
  })
  .add("Seleccionable", () => {
    return <Button saludo = {select("Como saluda", tiposSaludo, tiposSaludo[0])}></Button>;
  })