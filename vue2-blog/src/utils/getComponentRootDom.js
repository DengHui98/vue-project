import Vue from "vue";

/**
 *
 * @param {*} comp 组件
 * @param {*} type props
 * @returns
 */

const getComponentRootDom = (comp, type) => {
	const vm = new Vue({
		render: (h) =>
			h(comp, {
				props: {
					type,
				},
			}),
	});
	vm.$mount();
	return vm.$el;
};

export default getComponentRootDom;
