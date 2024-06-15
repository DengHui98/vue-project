<template>
	<div class="menu-container">
		<ul>
			<template v-for="item in menuList">
				<li :key="item.path">
					<RouterLink
						:exact="item.exact"
						:to="{ name: item.name }"
						active-class="select"
						exact-active-class=""
					>
						<Icon :type="item.icon" />
						<span>{{ item.title }}</span>
					</RouterLink>
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
					title: "首页",
					name: "Home",
					icon: "home",
					exact: true,
				},
				{
					title: "文章",
					name: "Blog",
					icon: "bolg",
					exact: false,
				},
				{
					title: "关于我",
					name: "About",
					icon: "about",
					exact: true,
				},
				{
					title: "项目",
					name: "Project",
					icon: "project",
					exact: true,
				},
				{
					title: "留言板",
					name: "Message",
					icon: "message",
					exact: true,
				},
			],
		};
	},
};
</script>

<style scoped lang="less">
@import url(~@/styles/var.less);
.menu-container {
	li {
		height: 46px;
		line-height: 46px;
		cursor: pointer;

		a {
			width: 100%;
			height: 100%;
			display: inline-block;
			padding: 0 20px;

			&:hover {
				color: @primary;
			}

			&.select {
				color: @primary;
				background: darken(@words, 2%);
			}
		}

		.icon-container {
			margin-right: 6px;
		}
	}
}
</style>
