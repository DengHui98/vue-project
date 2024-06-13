<template>
	<i
		class="iconfont icon-container"
		:class="iconClass"
	></i>
</template>

<script>
const classMap = {
	home: "icon-zhuye",
	qq: "icon-qq",
	weixin: "icon-weixin",
	chaxun: "icon-chaxun",
	break: "icon-xiangzuozhuan",
	arrow: "icon-fenyejiantou-shangyiye",
	doubleArrow: "icon-fenyejiantou-shouye",
	empty: "icon-kong",
};
export const types = Object.keys(classMap);

export default {
	props: {
		type: {
			type: String,
			require: true,
		},
	},
	computed: {
		iconClass() {
			console.log(classMap[this.type]);
			return classMap[this.type];
		},
	},
};
</script>

<style scoped>
@import url(//at.alicdn.com/t/c/font_4581694_2dwwctil7zp.css);
</style>
