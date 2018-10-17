/** @jsx h */

/* ^^^ this tells a transpiler to inject calls to an `h()` function for each node. */

const ITEMS = 'hello weird people'.split(' ');

/* a "partial" that does a filtered loop - no template BS, just functional programming: */
function foo(items) {
    /* Imagine template that adhere to your JS styleguide... */
    return items.map(p => <li>
        {p}
    </li>);
}

/* A simple JSX "view" with a call out ("partial") to generate a list from an Array: */
let vdom = (
    <div id="foo">
        <p>Look, a simple JSX DOM renderer!</p>
        <ul>{foo(ITEMS)}</ul>
    </div>
);

/* render() converts our "virtual DOM" (see below) to a real DOM tree: */
let dom = render(vdom);

/* append the new nodes somewhere: */
document
    .body
    .appendChild(dom);

/* Remember that "virtual DOM"? It's just JSON - each "VNODE" is an object with 3 properties. */
let json = JSON.stringify(vdom, null, ' ');

/* The whole process (JSX -> VDOM -> DOM) in one step: */
document
    .body
    .appendChild(render(
        <pre>{ json }</pre>
    ));

/** Render Virtual DOM to the real DOM */
function render(vnode) {
    if (typeof vnode === 'string') 
        return document.createTextNode(vnode);
    let n = document.createElement(vnode.nodeName);
    Object
        .keys(vnode.attributes || {})
        .forEach(k => n.setAttribute(k, vnode.attributes[k]));
    (vnode.children || []).forEach(c => n.appendChild(render(c)));
    return n;
}

/** hyperscript generator, gets called by transpiled JSX */
function h(nodeName, atributes, ...args) {
    let children = args.length
        ? [].concat(...args)
        : null;
    return {nodeName, attributes, children};
}

/*
 * here's an alternative hyperscript-to-vdom method that creates sparse nodes:
 * function h(nodeName, attributes, ...args) {
 *     let vnode = { nodeName };
 *     if (attributes) vnode.attributes = attributes;
 *     if (args.length) vnode.children = [].concat(...args);
 *     return vnode;
 * }
 */
