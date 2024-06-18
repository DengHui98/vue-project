import getComponentRootDom from "./getComponentRootDom";
import Icon from "@/components/Icon";
import messageLess from "./showMessage.module.less";

/**
 * @param {Object} option
 * @param {number = 2000} option.duration 						持续时间
 * @param {Element} option.container 					父容器
 * @param {"success","fail"} option.type    类型
 * @param {string} option.message 					内容
 */

const showMessage = (option) => {
	const {
		duration = 2000,
		container = document.body,
		type = "info",
		message = "",
	} = option;

	const messageEle = document.createElement("div");
	const iconDom = getComponentRootDom(Icon, type);

	messageEle.className = `${messageLess["message-container"]} ${
		messageLess["message-container-" + type]
	}`;

	messageEle.innerHTML = `${iconDom.outerHTML} <span>${message}</span>`;

	if (getComputedStyle(container).position === "static") {
		container.style.position = "relative";
	}

	container.appendChild(messageEle);
	
	// 强制渲染
	messageEle.clientHeight;

	messageEle.style.opacity = 1;
	messageEle.style.transform = `translate(-50%, -50%) translateY(0)`;

	// 到时间消失
	setTimeout(() => {
		messageEle.style.opacity = 0;
		messageEle.style.transform = `translate(-50%, -50%) translateY(-50%)`;
		setTimeout(() => {
			container.removeChild(messageEle);
		}, 500);
	}, duration);
};

export default showMessage;
