<template>
	<div class="test-container">
		<Contcat />
	</div>
</template>

<script>
import Contcat from "./";
export default {
	components: {
		Contcat,
	},
};
</script>

<style scoped lang="less">
@import url(~@/styles/var.less);

.test-container {
	background-color: @gray;
	margin: 0 auto;
	width: 300px;
	height: 400px;
	padding: 200px 10px;
}
</style>
