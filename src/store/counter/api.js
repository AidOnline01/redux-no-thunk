import store from '../';

export function increaseAsync() {
  setTimeout(() => store.dispatch({type: 'counter/increment', payload: 1}), 1000);
}