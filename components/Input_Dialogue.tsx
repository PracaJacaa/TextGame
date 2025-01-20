import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Input_dialagoue(props: JSX.HTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="
      mt-1 
      px-3
      py-2 
      bg-white 
      border shadow-sm 
      border-slate-300
      placeholder-slate-400 
      focus:outline-none 
      focus:border-sky-500 
      focus:ring-sky-500 
      rounded-md 
      sm:text-sm 
      focus:ring-1"
    />
  );
}

