/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_element,
	claim_space,
	claim_text,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	space,
	text
} from '../web_modules/svelte/internal/index.mjs';

function create_fragment(ctx) {
	let h1;
	let t0;
	let t1;
	let a;
	let t2;

	return {
		c() {
			h1 = element("h1");
			t0 = text("Oops... 404 not found");
			t1 = space();
			a = element("a");
			t2 = text("Go home?");
			this.h();
		},
		l(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Oops... 404 not found");
			h1_nodes.forEach(detach);
			t1 = claim_space(nodes);
			a = claim_element(nodes, "A", { href: true });
			var a_nodes = children(a);
			t2 = claim_text(a_nodes, "Go home?");
			a_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(a, "href", "/");
		},
		m(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, a, anchor);
			append(a, t2);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(h1);
			if (detaching) detach(t1);
			if (detaching) detach(a);
		}
	};
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Component;