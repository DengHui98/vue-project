<template>
	<div>
		<div
			class="test"
			ref="test"
		>
			<button @click="handleClick">show message</button>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		handleClick() {
			this.$showMessage({
				container: this.$refs.test,
				message: "test message",
				type: "success",
			});
		},
	},
};
</script>

<style scoped lang="less">
.test {
	width: 300px;
	height: 300px;
	margin: 100px auto 0;
	background-color: gainsboro;
}
</style>
