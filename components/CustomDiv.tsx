import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Custom_Div(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="
      absolute 
      inset-0 
      bg-grid-slate-100 
      [mask-image:linear-gradient(0deg,#fff,rgba(94, 123, 255, 0.6))]
       dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient
       (0deg,rgba(255,255,255,0.1),
       rgba(255, 0, 0, 0.5))]"
    />
  );
}


