<template>
	<i
		class="iconfont icon-container"
		:class="iconClass"
	></i>
</template>

<script>
const classMap = {
	home: "icon-shouye",
	qq: "icon-qq",
	weixin: "icon-weixin",
	email: "icon-email",
	break: "icon-xiangzuozhuan",
	arrow: "icon-fenyejiantou-shangyiye",
	doubleArrow: "icon-fenyejiantou-shouye",
	empty: "icon-kong",
	github: "icon-github",
	about: "icon-guanyu",
	bolg: "icon-bokeyuan",
	message: "icon-liuyanban-05",
	project: "icon-xiangmu_xiangmuguanli",
	success: "icon-success",
	fail: "icon-fail",
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
			return classMap[this.type];
		},
	},
};
</script>

<style scoped>
@import url(//at.alicdn.com/t/c/font_4581694_u9y2xdtcg3.css);
</style>
