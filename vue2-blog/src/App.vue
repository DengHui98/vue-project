<template>
	<div class="app-container">
		<Layout>
			<template v-slot:left>
				<div class="left">
					<SiteAside />
				</div>
			</template>
			<RouterView></RouterView>
		</Layout>
	</div>
</template>
<script>
import Layout from "@/components/Layout";
import SiteAside from "@/components/SiteAside";

export default {
	components: {
		Layout,
		SiteAside,
	},
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.app-container {
	.self-full(fixed);
	height: 100vh;
	.left {
		width: 220px;
		height: 100%;
		background-color: @dark;
	}
}
</style>
