import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { ReactPage } from "~/integrations/react/React";

export default component$(() => {

  return (
    <>
      <h1>Qwik/React mother of all demos</h1>
      <ReactPage client:idle/>


    
    </>
  );
});

export const head: DocumentHead = {
  title: "React Page",
};
