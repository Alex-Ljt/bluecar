const localStorageKeyName = 'recordList';
const recordListModel = {
  data:[] as RecordItem[],
  clone(data:RecordItem[] | RecordItem){
    return JSON.parse(JSON.stringify(data));
  },
  fetch(){
    this.data=JSON.parse(window.localStorage.getItem('localStorageKeyName') || '[]') as RecordItem[];
    return this.data
  },
  save(){
    window.localStorage.setItem(localStorageKeyName,
      JSON.stringify(this.data));
  }
};
export default recordListModel;













/*const localStorageKeyName = 'recordList'
const model = {
  fetch(){
    return JSON.parse(window.localStorage.getItem('localStorageKeyName') || '[]')
  },
  save(data){
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(data))
  }
}
export {model}
//export default {model} 引入用加.default
*/

