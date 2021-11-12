const localStorageKeyName = 'recordList';
const model = {
  clone(data:RecordItem[] | RecordItem){
    return JSON.parse(JSON.stringify(data));
  },
  fetch(){
    return JSON.parse(window.localStorage.getItem('localStorageKeyName') || '[]') as RecordItem[];
  },
  save(data:RecordItem[]){
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  }
};
export default model;













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

