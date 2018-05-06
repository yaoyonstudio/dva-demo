import { getPosts } from '../services/main'

export default {
  namespace: 'main',
  state: {
    user: {
      name: 'ken',
      age: 18
    },
    posts: [],
    loading: false
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *getPosts({ payload }, { select, call, put}) {
      yield put({ type: 'showLoading'})
      const { data } = yield call(getPosts)
      if (data) {
        yield put({
          type: 'getPostsSuccess',
          payload: {
            posts: data
          }
        })  
      }
    }
  },

  reducers: {
    showLoading(state, action) {
      return { ...state, loading: true }
    },
    getPostsSuccess(state, action) {
      console.log('loaded:', action.payload)
      return {...state, ...action.payload, loading: false}
    }
  },

};
