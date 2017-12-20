
<template>
  <div class="mint-ui-picker">
    <button @click="open" class="btn">日期选择</button>
    <mt-popup v-model="popupVisible" position="bottom" style="width:100%">
      <mt-picker v-model="popupVisible" :slots="slots" @change="onValuesChange"></mt-picker>
    </mt-popup>
  </div>
</template>
<script>
import { Picker, Popup } from 'mint-ui';

export default {
	name: 'occupy',
	data() {
		return {
			popupVisible: false,
			slots: [
				{
					flex: 1,
					values: Array.from(new Array(10), (n, i) => `${new Date().getFullYear() - i}年`),
					className: 'slot1',
					textAlign: 'center',
				},
				{
					divider: true,
					content: '-',
					className: 'slot2',
				},
				{
					flex: 1,
					values: Array.from(new Array(12), (n, i) => `${i + 1}月`),
					className: 'slot3',
					textAlign: 'center',
				},
			],
		};
	},
	methods: {
		open() {
			this.popupVisible = true;
		},
		onValuesChange(picker, values) {
			console.info(picker, values);
			// if (values[0] > values[1]) {
			// 	picker.setSlotValue(1, values[0]);
			// }
		},
	},
	components: {
		[Picker.name]: Picker,
		[Popup.name]: Popup,
	},
};
</script>
<style lang="scss" scoped>
.mint-ui-picker {
	height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	.btn {
		padding: 0.1rem 0.2rem;
		border-radius: 0.1rem;
	}
}
</style>
