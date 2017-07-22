import store from 'store';
import expirePlugin from 'store/plugins/expire';
store.addPlugin(expirePlugin);

//加载插件后的store
export { store };

// 用户标识
export const getUser = function () {
  const token = store.get('zhooson_user_token');
  return token || '';
};





