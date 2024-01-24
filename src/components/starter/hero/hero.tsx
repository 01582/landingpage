import { component$ } from "@builder.io/qwik";
import styles from "./hero.module.css"
import { ReactPage } from "~/integrations/react/React";
export const HeroPage = component$(() => {
 

  return (
    <div class={styles.main}>
      <h1 class={styles.heading}>Ignite Your Potential: Personalized Tuition
        that get result
      </h1>
      <p class={styles.subhead}>
        we help students to achieve
        their academic goal
      </p>

      <button class={styles.joinbtn} >Join</button>
      <div class={styles.box1}>
        <p>Events</p>
      </div>
      <div class={styles.box2}>
        <p>How we work</p>
      </div>
     <ReactPage />
    </div>
  )
})