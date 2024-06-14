<template>
	<div class="test-container">
		<ImageLoader
			src="https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg"
			placeholder="https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=200"
			@load="handleImageLoader"
		/>
	</div>
</template>

<script>
import ImageLoader from "./";
export default {
	components: {
		ImageLoader,
	},
	methods: {
		handleImageLoader(e) {
			console.log(e);
		},
	},
};
</script>

<style scoped>
.test-container {
	width: 500px;
	height: 500px;
	border: 1px solid red;
	margin: 0 auto;
}
</style>
