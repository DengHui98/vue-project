<template>
	<div class="layout-container">
		<div class="left">
			<slot name="left"></slot>
		</div>
		<main class="main">
			<slot></slot>
		</main>
		<div class="right">
			<slot name="right"></slot>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.layout-container {
	width: 100%;
	height: 100%;
	display: flex;

	.left,
	.right {
		flex: 0 0 auto;
	}

	.main {
		flex: 1 1 auto;
	}
}
</style>
