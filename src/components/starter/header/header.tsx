import { component$ } from "@builder.io/qwik";
import { QwikLogo } from "../icons/qwik";
import styles from "./header.module.css";
import { NavAnimm } from "~/integrations/react/React";

export default component$(() => {
 
  return (
    <>
      <nav id="nav" class={styles.navr}>
          <h3>pathshala.</h3>
          <h4>MENU+</h4>
          
      </nav>


    </>
  );
});
