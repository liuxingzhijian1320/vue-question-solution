//设置自定义属性
export function getDataAttribute(el, name, val) {
	const prefix = 'data-'
	name = prefix + name;
	if(val) {
		return el.setAttribute(name, val)
	}
	return el.getAttribute(name)
}
