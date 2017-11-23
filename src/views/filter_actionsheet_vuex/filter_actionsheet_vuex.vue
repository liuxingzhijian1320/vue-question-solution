<template>
	<div class="filter_actionsheet">
		<header class="header" @click="open">
			<div class="inner">
				<span class="actionText">{{actionText}}</span>
				<img src="./images/arrow.png" alt="" class="arrow">
			</div>
		</header>

		<top-actionsheet-vuex v-show="showAction" @close="showAction=false"></top-actionsheet-vuex>

		<ul class="filter-ul">
			<li class="filter-li" v-for="(item,index) in filterlist" :key="index">
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
import { mapGetters } from 'vuex';
import topActionsheetVuex from '../../components/top_actionsheet_vuex/top_actionsheet_vuex';
export default {
	name: 'filter-actionsheet-vuex',
	data() {
		return {
			showAction: false,
		};
	},
	computed: {
		...mapGetters(['filterlist', 'actionText']),
	},
	methods: {
		open() {
			this.showAction = true;
		},
	},
	mounted() {},
	components: {
		'top-actionsheet-vuex': topActionsheetVuex,
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
