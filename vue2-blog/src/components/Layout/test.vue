<template>
	<div class="test-container">
		<Layout>
			<template v-slot:left>
				<div class="left">left</div>
			</template>
			<template>
				<div class="main">main</div>
			</template>
			<template v-slot:right>
				<div class="right">right</div>
			</template>
		</Layout>
	</div>
</template>

<script>
import "@/styles/global.less";
import Layout from "./";
export default {
	components: {
		Layout,
	},
};
</script>

<style scoped lang="less">
.test-container {
	height: 100vh;
	overflow: auto;
	.left {
		width: 100px;
		background: red;
		height: 100%;
	}
	.main {
		width: 100%;
		height: 100%;
		background: blue;
	}
	.right {
		width: 200px;
		height: 100%;
		background: green;
	}
}
</style>
