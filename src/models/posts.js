import { getPosts } from '../services/posts'

export default {
  namespace: 'posts',
  state: {
    list: [],
    page: 1,
    loading: false,
    hasMore: true
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname, query }) => {
        // console.log('history:', history)
        // console.log('query:', query)
        if (pathname === '/posts') {
          let _query = { page: 1}
          if (query && query.page) {
            _query = query
          } 
          dispatch({ type: 'getPosts', payload: _query });
        }
      });
    },
  },

  effects: {
    *getPosts({ payload: { page = 1 } }, { select, call, put}) {
      yield put({ type: 'showLoading'})
      const { data } = yield call(getPosts, { page })
      if (data) {
        yield put({
          type: 'getPostsSuccess',
          payload: {
            data: data
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
      let _data = state.list.concat(action.payload.data)
      return {
        ...state,
        list: _data,
        page: state.page + 1,
        loading: false
      }
    }
  },

};
