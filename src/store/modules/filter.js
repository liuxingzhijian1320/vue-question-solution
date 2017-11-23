const state = {
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
	actionText: '进行中', //默认显示(全部,未指派,进行中,已完成)这里要修改默认的值actionText/status/activeIndex三个参数修改
	status: 1, //默认 数据过滤 (all,0,1,2)
	activeIndex: 2, //默认 弹出层 高亮 (0,1,2,3)
};
const getters = {
	filterlist(state) {
		if (state.status == 'all') {
			return state.filterlist;
		}
		return state.filterlist.filter(n => n.status === state.status);
	},
	actions: state => state.actions,
	actionText: state => state.actionText,
	status: state => state.status,
	activeIndex: state => state.activeIndex,
};

const actions = {
	filter_currentList_action({ commit }, params) {
		commit('filter_currentList_mutations', params);
	},
};

const mutations = {
	filter_currentList_mutations(state, params) {
		state.status = params.data.status;
		state.actionText = params.data.name;
		state.activeIndex = params.index;
	},
};

export default {
	state,
	actions,
	getters,
	mutations,
};
