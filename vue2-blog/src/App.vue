<template>
	<Pager
		:current="current"
		:total="total"
		@changePage="handleChangePage"
	></Pager>
</template>
<script>
import Pager from "./components/Pager.vue";
export default {
	components: {
		Pager,
	},
	data() {
		return {
			current: 10,
			total: 300,
		};
	},
	methods: {
		handleChangePage(newPage) {
			console.log(newPage);
			this.current = newPage;
		},
	},
};
</script>
