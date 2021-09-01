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
} from '../../web_modules/svelte/internal/index.mjs';

function create_fragment(ctx) {
	let ul;
	let li0;
	let t0;
	let t1;
	let li1;
	let t2;
	let t3;
	let li2;
	let t4;
	let t5;
	let li3;
	let t6;
	let t7;
	let li4;
	let t8;
	let t9;
	let li5;
	let t10;

	return {
		c() {
			ul = element("ul");
			li0 = element("li");
			t0 = text("plenti");
			t1 = space();
			li1 = element("li");
			t2 = text("svelte");
			t3 = space();
			li2 = element("li");
			t4 = text("skeleton css");
			t5 = space();
			li3 = element("li");
			t6 = text("google fonts/raleway");
			t7 = space();
			li4 = element("li");
			t8 = text("manis/yurizal susanto");
			t9 = space();
			li5 = element("li");
			t10 = text("font awesome");
			this.h();
		},
		l(nodes) {
			ul = claim_element(nodes, "UL", { class: true });
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", { class: true });
			var li0_nodes = children(li0);
			t0 = claim_text(li0_nodes, "plenti");
			li0_nodes.forEach(detach);
			t1 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", { class: true });
			var li1_nodes = children(li1);
			t2 = claim_text(li1_nodes, "svelte");
			li1_nodes.forEach(detach);
			t3 = claim_space(ul_nodes);
			li2 = claim_element(ul_nodes, "LI", { class: true });
			var li2_nodes = children(li2);
			t4 = claim_text(li2_nodes, "skeleton css");
			li2_nodes.forEach(detach);
			t5 = claim_space(ul_nodes);
			li3 = claim_element(ul_nodes, "LI", { class: true });
			var li3_nodes = children(li3);
			t6 = claim_text(li3_nodes, "google fonts/raleway");
			li3_nodes.forEach(detach);
			t7 = claim_space(ul_nodes);
			li4 = claim_element(ul_nodes, "LI", { class: true });
			var li4_nodes = children(li4);
			t8 = claim_text(li4_nodes, "manis/yurizal susanto");
			li4_nodes.forEach(detach);
			t9 = claim_space(ul_nodes);
			li5 = claim_element(ul_nodes, "LI", { class: true });
			var li5_nodes = children(li5);
			t10 = claim_text(li5_nodes, "font awesome");
			li5_nodes.forEach(detach);
			ul_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(li0, "class", "svelte-15rhbiz");
			attr(li1, "class", "svelte-15rhbiz");
			attr(li2, "class", "svelte-15rhbiz");
			attr(li3, "class", "svelte-15rhbiz");
			attr(li4, "class", "svelte-15rhbiz");
			attr(li5, "class", "svelte-15rhbiz");
			attr(ul, "class", "svelte-15rhbiz");
		},
		m(target, anchor) {
			insert(target, ul, anchor);
			append(ul, li0);
			append(li0, t0);
			append(ul, t1);
			append(ul, li1);
			append(li1, t2);
			append(ul, t3);
			append(ul, li2);
			append(li2, t4);
			append(ul, t5);
			append(ul, li3);
			append(li3, t6);
			append(ul, t7);
			append(ul, li4);
			append(li4, t8);
			append(ul, t9);
			append(ul, li5);
			append(li5, t10);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(ul);
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