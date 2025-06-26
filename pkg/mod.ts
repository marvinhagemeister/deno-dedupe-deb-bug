import type { VNode } from "preact";
import { renderToString } from "preact-render-to-string";
import { signal } from "@preact/signals";

const s = signal(2);

export function render(vnode: VNode) {
  return renderToString(vnode) + "\n\n" + s.value;
}
