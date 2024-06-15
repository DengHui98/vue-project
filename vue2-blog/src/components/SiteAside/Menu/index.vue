<template>
	<div class="menu-container">
		<ul>
			<template v-for="item in menuList">
				<li
					:class="{ select: isSelected(item) }"
					:key="item.path"
				>
					<a :href="item.path">
						<Icon :type="item.icon" />
						<span>{{ item.name }}</span>
					</a>
				</li>
			</template>
		</ul>
	</div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
	components: {
		Icon,
	},
	data() {
		return {
			menuList: [
				{
					name: "首页",
					path: "/",
					icon: "home",
				},
				{
					name: "文章",
					path: "/bolg",
					icon: "bolg",
					startsWith: true,
				},
				{
					name: "关于我",
					path: "/about",
					icon: "about",
				},
				{
					name: "项目",
					path: "/project",
					icon: "project",
				},
				{
					name: "留言板",
					path: "/message",
					icon: "message",
				},
			],
		};
	},
	methods: {
		isSelected(item) {
			const path = location.pathname.toUpperCase();
			const selectPath = item.path.toUpperCase();
			if (item.startsWith) {
				return path.startsWith(selectPath);
			}
			return selectPath === path;
		},
	},
};
</script>

<style scoped lang="less">
@import url(~@/styles/var.less);
.menu-container {
	color: @words;

	li {
		height: 46px;
		line-height: 46px;
		cursor: pointer;

		a {
			width: 100%;
			height: 100%;
			display: inline-block;
			padding: 0 20px;
		}

		&:hover {
			color: @primary !important;
		}

		&.select {
			color: @lightWords;
			background: darken(@words, 2%);
		}

		.icon-container {
			margin-right: 6px;
		}
	}
}
</style>
