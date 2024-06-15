<template>
	<div class="site-aside-container">
		<div class="avatar">
			<Avatar
				src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=800"
				:size="110"
			/>
		</div>
		<div class="title">博客圆</div>
		<Menu />
		<Contact />
	</div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "@/components/SiteAside/Menu";
import Contact from "@/components/SiteAside/Contact";
export default {
	components: {
		Avatar,
		Menu,
		Contact,
	},
};
</script>

<style scoped lang="less">
@import url(~@/styles/var.less);
.site-aside-container {
	padding: 20px 0;
	.avatar {
		text-align: center;
	}
	.title {
		text-align: center;
		margin: 20px 0;
		color: @lightWords;
	}
}
.contact-container {
	padding: 0 10px;
}
</style>
