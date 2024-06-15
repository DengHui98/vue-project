<template>
	<div class="test-container">
		<SiteAside />
	</div>
</template>

<script>
import "@/styles/global.less";
import SiteAside from "./";
export default {
	components: {
		SiteAside,
	},
};
</script>

<style scoped lang="less">
@import url("~@/styles/var.less");
.test-container {
	background: @dark;
	width: 260px;
	height: 100vh;
}
</style>
