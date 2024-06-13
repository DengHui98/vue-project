<template>
	<img
		class="avatar"
		:src="url"
		:style="{ width: `${size}px`, height: `${size}px` }"
	/>
</template>

<script>
export default {
	props: {
		url: {
			type: String,
			require: true,
		},
		size: {
			type: Number,
			default: 30,
		},
	},
	
};
</script>

<style scoped>
.avatar {
	border-radius: 50%;
	display: inline-block;
}
</style>
