<template>
	<div class="contact-container">
		<ul>
			<li>
				<a href="https://github.com/DengHui98/vue-project">
					<Icon type="github" />
					<span>DengHui98</span>
				</a>
			</li>
			<li>
				<a href="mailto:1776222611@163.com">
					<Icon type="email" />
					<span>1776222611@163.com</span>
				</a>
			</li>
			<li>
				<a>
					<Icon type="qq" />
					<span>1776222611</span>
				</a>
				<div class="qr-code">
					<img
						src="https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130"
						alt=""
					/>
				</div>
			</li>
			<li>
				<a>
					<Icon type="weixin" />
					<span>1776222611</span>
				</a>
				<div class="qr-code">
					<img
						src="https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130"
						alt=""
					/>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import "@/styles/global.less";
import Icon from "@/components/Icon";
export default {
	components: {
		Icon,
	},
};
</script>

<style scoped lang="less">
@import url(~@/styles/mixin.less);
@import url(~@/styles/var.less);
.contact-container {
	@itemHeight: 30px;
	width: 100%;
	height: 100%;
	position: relative;
	color: @words;
	font-size: 14px;

	li {
		height: @itemHeight;
		line-height: 30px;
		position: relative;

		&:hover {
			color: @primary;

			.qr-code {
				transform: scale(1);
			}
		}
	}
	.icon-container {
		margin-right: 6px;
	}
	.qr-code {
		position: absolute;
		bottom: @itemHeight;
		width: 130px;
		height: 130px;
		transition: transform 0.3s;
		transform: scale(0);
		transform-origin: bottom;

		img {
			background: #fff;
			padding: 10px;
			width: 100%;
			height: 100%;
			border-radius: 8px;
		}

		&::before {
			content: "";
			width: 10px;
			height: 10px;
			background: #fff;
			position: absolute;
			left: 50%;
			transform: translateX(-50%) rotate(45deg);
			bottom: -5px;
		}
	}
}
</style>
