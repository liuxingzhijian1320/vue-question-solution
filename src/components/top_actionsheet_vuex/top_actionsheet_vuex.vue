<template>
	<transition name="modal">
		<div class="modal-mask">
			<div class="modal-wrapper">
				<div class="modal-container">
					<!-- <header @click="show">全部</header> -->
					<ul class="action-ul">
						<li class="action-li" v-for="(item,index) in actions" :key="index" :class="{active:index==activeIndex}"
						  @click="show(item,index)">
							<div class="name">{{item.name}}</div>
							<div class="select" v-show="index==activeIndex">
								<img src="./images/true.png" alt="" class="true-img">
							</div>
						</li>
					</ul>

				</div>
			</div>
		</div>
	</transition>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
	name: 'topactionsheetvuex',
	computed: {
		...mapGetters(['actions', 'activeIndex']),
	},
	methods: {
		// ...mapActions(['filter_currentList_action']),
		show(item, index) {
			this.$emit('close');

			//方法1
			// this.filter_currentList_action({
			// 	data: item,
			// 	index: index,
			// });
			//方法2
			this.$store.dispatch('filter_currentList_action', {
				data: item,
				index: index,
			});
		},
	},
};
</script>
<style scoped lang="scss" >
.modal-mask {
	position: fixed;
	z-index: 9998;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	// display: table;
	transition: opacity 0.3s ease;
}

.modal-wrapper {
	// display: table-cell;
	// vertical-align: middle;
}

.modal-container {
	width: 100%;
	// height: 7rem;
	margin: 0 auto;

	background-color: #fff;
	border-radius: 2px;
	// box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
	transition: all 0.3s ease;
	font-family: Helvetica, Arial, sans-serif;
}
.action-ul {
	.action-li {
		display: flex;
		height: 0.9rem;
		line-height: 0.9rem;
		padding: 0 0.3rem;
		position: relative;
		&.active {
			color: red;
		}
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

		.name {
			flex: 1;
		}
		.select {
			width: 0.5rem;
			display: flex;
			align-items: center;
			justify-content: center;
			.true-img {
				width: 0.3rem;
				height: 0.3rem;
			}
		}
	}
}

.modal-enter {
	opacity: 0;
}

.modal-leave-active {
	opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
	-webkit-transform: translateY(-100%);
	transform: translateY(-100%);
}
</style>
