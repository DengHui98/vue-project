<template>
	<div class="image-loader-container">
		<img
			v-if="!isLoaderFinalDone"
			class="placeholder"
			:src="placeholder"
		/>
		<img
			class="origin"
			:style="{ opacity: opacityStatus, transition: `${duration}ms` }"
			:src="src"
			@load="handleImageLoader"
		/>
	</div>
</template>

<script>
export default {
	props: {
		src: {
			type: String,
			required: true,
		},
		placeholder: {
			type: String,
			required: true,
		},
		duration: {
			type: Number,
			default: 3000,
		},
	},

	data() {
		return {
			isLoaderDone: false,
      isLoaderFinalDone: false,
		};
	},
	computed: {
		opacityStatus() {
			return this.isLoaderDone ? 1 : 0;
		},
	},
	methods: {
		handleImageLoader() {
			this.isLoaderDone = true;
      setTimeout(() => {
        this.isLoaderFinalDone = true;
        this.$emit('load');
      }, this.duration)
		},
	},
};
</script>

<style scopde lang="less">
@import url(~@/styles/mixin.less);
.image-loader-container {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	img {
		.self-full();
		object-fit: cover;
	}

	.placeholder {
		filter: blur(2vw);
	}
}
</style>
