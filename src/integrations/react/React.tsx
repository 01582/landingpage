// FILE: src/integrations/react/framer.tsx
// ==========================================

// 👇🏽 this tells Qwik that the JSX here is React
/** @jsxImportSource react */



// one function to import 
import { qwikify$ } from '@builder.io/qwik-react';

const NavAnim = () => (
  <div>Hello</div>
);

// All you need is to export:
export const ReactPage = qwikify$(NavAnim);