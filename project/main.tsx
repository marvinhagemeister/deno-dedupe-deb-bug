import { render } from "@marvinh-test/dedupe-bug";

const html = render(<h1>foo</h1>);
console.log(html.includes("<h1>foo</h1>") ? "it works" : "it doesn't work");
