/**
 * `window` 功能扩展.
 * 
 * 包括: `localStorage`
 */

const STORAGE_USER_KEY = 'USER_INFO';
const win = {
  localStorage: {
    /**
     * 获取指定键的本地存储值.
     * 
     * @param {string} key 如果不填此参数，默认本地存储的键 'STORAGE_USER_KEY'
     * @return {JSON} 返回一个有本地存储值构成的对象 
     */
    getLocal(key = STORAGE_USER_KEY) {
      console.log('get local opeartion');
      return JSON.parse(window.localStorage.getItem(key));
    },

    /**
     * 设置指定键的本地存储值.
     * 
     * @param {string} key 本地存储的键,可
     * @param {any} res 对应键的值
     * @param {boolean} isSaveOldData 可选，判断是增加值还是替换为新的值(false：替换)
     * 
     * @desc 没有第三个参数或者第三个参数为false,则覆盖本地存储的该条记录
     * @desc 第三个参数为true,则添加一个字段进去
     */
    setLocal(key, res, isAddData = false) {

      // `key` 为`字符串`并且有非``的时候才作为存储的`键`使用
      // 不为字符串，就使用默认的键`STORAGE_USER_KEY`
      if (typeof key !== 'string' && key.length > 0) {
        key = STORAGE_USER_KEY;
      }

      // 增加或者内容替换为新的值
      // 如果值`冲突`就使用最新的值
      // 如果值`新增`就添加到本地存储中--功能未完成
      if (isAddData) {
        let oldData = this.getLocal(key);
        console.log(typeof oldData);
        const newData = JSON.stringify(oldData.concat(res));
        // return window.localStorage.setItem(key, newData);
        window.localStorage.setItem(key, newData);
      }
      console.log('set local opeartion');
      // return window.localStorage.setItem(key, JSON.stringify(res))
      window.localStorage.setItem(key, JSON.stringify(res))
    },

    /**
     * 清除本地存储
     * @param {string} key 可选，默认本地存储的键 'STORAGE_USER_KEY'
     */
    removeLocal(key = STORAGE_USER_KEY) {
      console.log('remove local opeartion');
      window.localStorage.removeItem(key);
    }
  }
}

export default win;
