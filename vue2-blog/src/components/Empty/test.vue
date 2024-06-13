<template>
	<div class="test-container">
		<Empty />
	</div>
</template>

<script>
import Empty from "./";
export default {
	components: {
		Empty,
	},
};
</script>

<style lang="less" scoped>
.test-container {
	width: 300px;
	height: 300px;
	outline: 1px solid red;
	position: relative;
}
</style>
