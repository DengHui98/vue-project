<template>
	<div class="pager-container flex justify-center">
		<a @click="handlePage(1)"><Icon type="doubleArrow" /></a>
		<a @click="handlePage(current - 1)"><Icon type="arrow" /></a>
		<a
			v-for="i in visiableList"
			:key="i"
			:class="{ active: current === i }"
			@click="handlePage(i)"
		>
			{{ i }}
		</a>
		<a
			@click="handlePage(current + 1)"
			class="rotate-180"
			><Icon type="arrow"
		/></a>
		<a
			@click="handlePage(totalPage)"
			class="rotate-180"
			><Icon type="doubleArrow"
		/></a>
	</div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
	components: {
		Icon,
	},
	props: {
		current: {
			type: Number,
			default: 1,
		},
		total: {
			type: Number,
			default: 0,
		},
		visiablePageNum: {
			type: Number,
			default: 11,
		},
	},
	computed: {
		totalPage() {
			return Math.ceil(this.total / this.visiablePageNum);
		},
		visiableMin() {
			let min = this.current - Math.floor(this.visiablePageNum / 2);
			if (min <= 1) {
				min = 1;
			}
			return min;
		},
		visiableMax() {
			let max = this.visiableMin + this.visiablePageNum - 1;
			if (max >= this.totalPage) {
				max = this.totalPage;
			}
			return max;
		},
		visiableList() {
			let list = [];
			for (let i = this.visiableMin; i <= this.visiableMax; i++) {
				list.push(i);
			}
			return list;
		},
	},
	methods: {
		handlePage(newPage) {
			if (newPage <= 1) {
				newPage = 1;
			}
			if (newPage >= this.totalPage) {
				newPage = this.totalPage;
			}
			if (newPage === this.current) return;

			this.$emit("changePage", newPage);
		},
	},
};
</script>

<style scoped lang="less">
@import url(~@/styles/var.less);
.pager-container {
	padding: 10px 0;
}
a {
	margin: 0 10px;
	width: 20px;
	text-align: center;
	user-select: none;

	&.active {
		color: @active;
	}
}
.rotate-180 {
	transform: rotate(180deg);
}
</style>
