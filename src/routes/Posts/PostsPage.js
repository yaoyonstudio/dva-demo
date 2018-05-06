import React from 'react';
import { connect } from 'dva';
import MainLayout from '../../components/layout/MainLayout'
import Loading from '../../components/common/Loading'
import PostItem from '../../components/posts/PostItem'
import styles from './PostsPage.scss'

// Stateless 写法

// const PostsPage = ({list, page, loading, hasMore, history, dispatch}) => {
//   // console.log('list:', list)
//   // console.log('page:', page)
//   // console.log('loading:', loading)
//   // console.log('hasMore:', hasMore)
//   // console.log('dispatch:', dispatch)

//   return (
//     <MainLayout history={history} title="文章">
//       <div id="list" className={styles.list}>
//         <ul>
//           {list.map((post, index) => <li className={styles.item} key={index}><PostItem key={index} data={post} /></li> )}
//         </ul>
//         {/* <button onClick={() => dispatch({type: 'posts/getPosts', payload: { page: page }})}>下一页</button> */}
//         {loading && <Loading />}
//       </div>
//     </MainLayout>
//   );
// }

class PostsPage extends React.Component {
  componentDidMount () {
    console.log('componentDidMount')
    const listEl = document.querySelector('#list')
    console.log(listEl)
    listEl.addEventListener('scroll', () => {
      console.log('scroll')
    })
  }

  render() {
    const {list, page, loading, hasMore, history, dispatch} = this.props
    return (
      <MainLayout history={history} title="文章">
        <div id="list" className={styles.list}>
          <ul>
            {list.map((post, index) => <li className={styles.item} key={index}><PostItem key={index} data={post} /></li> )}
          </ul>
          {/* <button onClick={() => dispatch({type: 'posts/getPosts', payload: { page: page }})}>下一页</button> */}
          {loading && <Loading />}
        </div>
      </MainLayout>
    );
  }
}

PostsPage.propTypes = {
};

const mapStateToProps = (state) => {
  const { list, page, loading, hasMore } = state.posts
  return {
    list, page, loading, hasMore
  }
}

export default connect(mapStateToProps)(PostsPage);
