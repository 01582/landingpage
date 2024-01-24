import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { ReactPage } from "~/integrations/react/React";

export default component$(() => {
  const show = useSignal(false);
  const count = useSignal(0);
  const variant = useSignal<"contained" | "outlined" | "text">("contained");

  return (
    <>
      <h1>Qwik/React mother of all demos</h1>
      <ReactPage client:idle/>


    
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik React",
};
