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
	set_data,
	space,
	text
} from '../web_modules/svelte/internal/index.mjs';

function create_fragment(ctx) {
	let head;
	let meta0;
	let t0;
	let meta1;
	let t1;
	let title_1;
	let t2;
	let t3;
	let base;
	let base_href_value;
	let t4;
	let script;
	let script_src_value;
	let t5;
	let link0;
	let t6;
	let link1;
	let t7;
	let link2;
	let t8;
	let link3;
	let t9;
	let link4;
	let t10;
	let link5;
	let t11;
	let link6;

	return {
		c() {
			head = element("head");
			meta0 = element("meta");
			t0 = space();
			meta1 = element("meta");
			t1 = space();
			title_1 = element("title");
			t2 = text(/*title*/ ctx[0]);
			t3 = space();
			base = element("base");
			t4 = space();
			script = element("script");
			t5 = space();
			link0 = element("link");
			t6 = space();
			link1 = element("link");
			t7 = space();
			link2 = element("link");
			t8 = space();
			link3 = element("link");
			t9 = space();
			link4 = element("link");
			t10 = space();
			link5 = element("link");
			t11 = space();
			link6 = element("link");
			this.h();
		},
		l(nodes) {
			head = claim_element(nodes, "HEAD", {});
			var head_nodes = children(head);
			meta0 = claim_element(head_nodes, "META", { charset: true });
			t0 = claim_space(head_nodes);
			meta1 = claim_element(head_nodes, "META", { name: true, content: true });
			t1 = claim_space(head_nodes);
			title_1 = claim_element(head_nodes, "TITLE", {});
			var title_1_nodes = children(title_1);
			t2 = claim_text(title_1_nodes, /*title*/ ctx[0]);
			title_1_nodes.forEach(detach);
			t3 = claim_space(head_nodes);
			base = claim_element(head_nodes, "BASE", { href: true });
			t4 = claim_space(head_nodes);
			script = claim_element(head_nodes, "SCRIPT", { type: true, src: true });
			var script_nodes = children(script);
			script_nodes.forEach(detach);
			t5 = claim_space(head_nodes);
			link0 = claim_element(head_nodes, "LINK", { rel: true, href: true });
			t6 = claim_space(head_nodes);
			link1 = claim_element(head_nodes, "LINK", { href: true, rel: true });
			t7 = claim_space(head_nodes);
			link2 = claim_element(head_nodes, "LINK", { rel: true, type: true, href: true });
			t8 = claim_space(head_nodes);
			link3 = claim_element(head_nodes, "LINK", { rel: true, href: true });
			t9 = claim_space(head_nodes);
			link4 = claim_element(head_nodes, "LINK", { rel: true, href: true });
			t10 = claim_space(head_nodes);
			link5 = claim_element(head_nodes, "LINK", { rel: true, href: true });
			t11 = claim_space(head_nodes);
			link6 = claim_element(head_nodes, "LINK", { rel: true, href: true });
			head_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(meta0, "charset", "utf-8");
			attr(meta1, "name", "viewport");
			attr(meta1, "content", "width=device-width,initial-scale=1");
			attr(base, "href", base_href_value = /*env*/ ctx[1].local ? "/" : /*env*/ ctx[1].baseurl);
			attr(script, "type", "module");
			if (script.src !== (script_src_value = "/spa/ejected/main.js")) attr(script, "src", script_src_value);
			attr(link0, "rel", "preconnect");
			attr(link0, "href", "https://fonts.gstatic.com");
			attr(link1, "href", "https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700&display=swap");
			attr(link1, "rel", "stylesheet");
			attr(link2, "rel", "icon");
			attr(link2, "type", "image/svg+xml");
			attr(link2, "href", "/assets/logo.svg");
			attr(link3, "rel", "stylesheet");
			attr(link3, "href", "/assets/css/normalize.css");
			attr(link4, "rel", "stylesheet");
			attr(link4, "href", "/assets/css/skeleton.css");
			attr(link5, "rel", "stylesheet");
			attr(link5, "href", "/assets/css/extended.css");
			attr(link6, "rel", "stylesheet");
			attr(link6, "href", "/spa/bundle.css");
		},
		m(target, anchor) {
			insert(target, head, anchor);
			append(head, meta0);
			append(head, t0);
			append(head, meta1);
			append(head, t1);
			append(head, title_1);
			append(title_1, t2);
			append(head, t3);
			append(head, base);
			append(head, t4);
			append(head, script);
			append(head, t5);
			append(head, link0);
			append(head, t6);
			append(head, link1);
			append(head, t7);
			append(head, link2);
			append(head, t8);
			append(head, link3);
			append(head, t9);
			append(head, link4);
			append(head, t10);
			append(head, link5);
			append(head, t11);
			append(head, link6);
		},
		p(ctx, [dirty]) {
			if (dirty & /*title*/ 1) set_data(t2, /*title*/ ctx[0]);

			if (dirty & /*env*/ 2 && base_href_value !== (base_href_value = /*env*/ ctx[1].local ? "/" : /*env*/ ctx[1].baseurl)) {
				attr(base, "href", base_href_value);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(head);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { title } = $$props, { env } = $$props;

	$$self.$$set = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
		if ("env" in $$props) $$invalidate(1, env = $$props.env);
	};

	return [title, env];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { title: 0, env: 1 });
	}
}

export default Component;