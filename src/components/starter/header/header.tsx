import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";

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
