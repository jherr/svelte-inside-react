import { useState, useRef, useLayoutEffect } from "react";
import Hello from "./Hello.svelte";
import Counter from "./Counter.svelte";
import useStore from "./store";

function SvelteWrapper(Component) {
  return (props) => {
    const svelteRef = useRef();
    useLayoutEffect(() => {
      while (svelteRef.current?.firstChild) {
        svelteRef.current?.firstChild?.remove();
      }
      new Component({
        target: svelteRef.current,
        props,
      });
    }, []);
    return <div ref={svelteRef}></div>;
  };
}

const SvelteHello = SvelteWrapper(Hello);
const SvelteCounter = SvelteWrapper(Counter);

function App() {
  const { count, increment } = useStore();

  return (
    <div>
      <SvelteHello
        extraText="This is a prop passed from React to Svelte"
        onClick={increment}
      />
      <button className="btn btn-success" onClick={increment}>
        count is {count}
      </button>
      <SvelteCounter />
    </div>
  );
}

export default App;
