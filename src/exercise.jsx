import { createStore } from 'redux';

/**
 * 리덕스에서 관리할 상태 정의
 */
const initialState = {
    counter: 0,
    text : '',
    list: []
};

/**
 * 액션 타입 정의
 */
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';


/**
 * 액션 생성 함수들
 */
function increase(){
    return {
        type: INCREASE
    };
}
const decrease = () => ({
    type: DECREASE
})

const changeText = (text) => ({
    type: CHANGE_TEXT,
    text
});

const addToList = item => ({
    type: ADD_TO_LIST,
    item
});

/**
 * 리듀서 생성
 * 리듀서는 위 액션 생성 함수들을 통해 만들어진 객체를 참조하여 새로운 상태를 만드는 기능을 가집니다. 꼭 불변성을 지켜줘야합니다.
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
function reducer(state = initialState, action) {
    // state 의 초깃값을 initialState 로 지정했습니다.
    switch (action.type) {
      case INCREASE:
        return {
          ...state,
          counter: state.counter + 1
        };
      case DECREASE:
        return {
          ...state,
          counter: state.counter - 1
        };
      case CHANGE_TEXT:
        return {
          ...state,
          text: action.text
        };
      case ADD_TO_LIST:
        return {
          ...state,
          list: state.list.concat(action.item)
        };
      default:
        return state;
    }
  }


/*
    store 생성
*/
const store = createStore(reducer);
console.log(store.getState);


/**
 * 스토어 안에 들어있는 상태가 바뀔 때마다 호출되는 listener 함수
 */
 const listener = () => {
    const state = store.getState();
    console.log(state);
  };

const unsubscribe = store.subscribe(listener);

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('할로우'));
store.dispatch(addToList({id:1, text:'malw'}));
