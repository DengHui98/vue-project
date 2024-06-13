<template>
	<div class="flex">
		<div
			class="flex flex-col justify-center align-center show"
			v-for="item in types"
			:key="item"
		>
			<Icon :type="item"></Icon>
			<span>{{ item }}</span>
		</div>
	</div>
</template>
<script>
import Icon, { types } from "./";

export default {
	components: {
		Icon,
	},
	data() {
		return {
			types,
		};
	},
};
</script>
<style scoped lang="less">
@import url(~@/styles/global.less);
.show {
	padding: 20px;
}
</style>
