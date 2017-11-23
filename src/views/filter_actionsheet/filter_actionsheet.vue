<template>
	<div class="filter_actionsheet">
		<header class="header" @click="open">
			<div class="inner">
				<span class="actionText">{{actionText}}</span>
				<img src="./images/arrow.png" alt="" class="arrow">
			</div>
		</header>

		<top-actionsheet :actions="actions" :active-index="activeIndex" v-show="showAction"
		  @select="select"></top-actionsheet>

		<ul class="filter-ul">
			<li class="filter-li" v-for="(item,index) in currentList" :key="index">
				<div class="list-l">{{index+1}}</div>
				<div class="list-c">
					<div class="title">标题：{{item.title}}</div>
					<div class="address">地址：{{item.address}}</div>
				</div>
				<div class="list-r">
					{{item.status | statusFilter}}
				</div>
			</li>
		</ul>

	</div>
</template>
<script>
import topActionsheet from '../../components/top_actionsheet/top_actionsheet';
export default {
	name: 'filter-actionsheet',
	data() {
		return {
			// topActionsheet的下拉框的数据
			actions: [
				{
					name: '全部',
					status: 'all',
				},
				{
					name: '未指派',
					status: 0,
				},
				{
					name: '进行中',
					status: 1,
				},
				{
					name: '已完成',
					status: 2,
				},
			],
			//接口获取的数据
			filterlist: [
				{
					title: '灯光租赁服务',
					pay_time: 1511402675,
					amount: '250.00',
					address: 'Haha',
					status: 2,
				},
				{
					title: '灯光租赁服务',
					pay_time: 1511402423,
					amount: '250.00',
					address: 'Haha',
					status: 1,
				},
				{
					title: '灯光租赁服务',
					pay_time: 1511402292,
					amount: '200.00',
					address: 'Haha',
					status: 1,
				},
				{
					title: 'Truss服务',
					pay_time: 1511346723,
					amount: '17577.00',
					address: 'Haha',
					status: 0,
				},
				{
					title: 'Truss服务',
					pay_time: 1511346873,
					amount: '17577.00',
					address: 'Haha',
					status: 0,
				},
				{
					title: 'Truss服务',
					pay_time: 1511338683,
					amount: '330.00',
					address: '梧桐',
					status: 0,
				},
				{
					title: 'Truss服务',
					pay_time: 1511338683,
					amount: '330.00',
					address: '梧桐',
					status: 0,
				},
				{
					title: '桁架喷绘服务',
					pay_time: 1511338683,
					amount: '330.00',
					address: '梧桐',
					status: 0,
				},
			],
			actionText: '已完成', //默认显示(全部,未指派,进行中,已完成)这里要修改默认的值actionText/status/activeIndex三个参数修改
			showAction: false,
			status: 2, //默认 数据过滤 (all,0,1,2)
			activeIndex: 3, //默认 弹出层 高亮 (0,1,2,3)
			currentList: [], //当前的展示的列表
		};
	},

	methods: {
		open() {
			this.showAction = true;
		},
		//回调的函数
		select(val) {
			console.info('选中的数据', val);
			this.showAction = false;
			if (val.data.status == 'all') {
				this.currentList = this.filterlist;
			} else {
				this.currentList = this.filterlist.filter(n => n.status === val.data.status);
			}
			//header 显示的名字
			this.actionText = val.data.name;
			this.activeIndex = val.index;
		},
	},
	mounted() {
		this.currentList = this.filterlist.filter(n => n.status === this.status);
	},
	components: {
		'top-actionsheet': topActionsheet,
	},
	filters: {
		statusFilter(val) {
			if (val == 0) {
				return '未指派';
			} else if (val == 1) {
				return '进行中';
			} else if (val == 2) {
				return '已完成';
			}
		},
	},
};
</script>
<style lang="scss" scoped>
.filter_actionsheet {
	padding-top: 0.46rem;
	.header {
		height: 0.6rem;
		width: 100%;
		text-align: center;
		line-height: 0.6rem;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background-color: #fff;
		&:after {
			content: '';
			display: flex;
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			height: 1px;
			background-color: #dfdfdf;
			transform: scaleY(0.5);
		}
		.inner {
			display: flex;
			.actionText {
				color: #333;
			}
			img {
				width: 0.2rem;
				height: 0.15rem;
				margin-top: 0.25rem;
				margin-left: 0.2rem;
			}
		}
	}
	.filter-ul {
		padding: 0.3rem;
		.filter-li {
			display: flex;
			margin-bottom: 0.3rem;
			.list-l {
				margin-right: 0.2rem;
			}
			.list-c {
				flex: 1;
				.title {
				}
				.address {
				}
			}
			.list-r {
				flex: 1;
			}
		}
	}
}
</style>
