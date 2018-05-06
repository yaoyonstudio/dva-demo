import React from 'react';
import styles from './PostItem.scss'

// const post = {
//   author:1,
//   authorName:"那时那我",
//   commentNums:"1",
//   date:"2017-05-07T01:30:24",
//   datestr:"2017-05-07",
//   excerpt:"<p>在开始之前有两点要说明一下： 一是因为本人是做前端的，所以针对Flask的项目开发都是基本接口实现的，没有包括 [&hellip;]</p>↵",
//   featuredimgurl:"http://www.thatyou.cn/placeholder.jpg",
//   id:573,
//   link:"https://www.thatyou.cn/flask%e7%a8%8b%e5%ba%8f%e7%9b%ae%e5%bd%95%e7%bb%93%e6%9e%84-%e6%9e%84%e5%bb%ba%e5%8f%af%e6%89%a9%e5%b1%95%e7%9a%84flask%e5%ba%94%e7%94%a8%e7%a8%8b%e5%ba%8f/",
//   thumbnailurl:"http://www.thatyou.cn/placeholder.jpg",
//   title:"Flask程序目录结构——构建可扩展的Flask应用程序"
// }

const PostItem = ({ data }) => {
  return (
    <div className={styles.PostItem}>
      <img src={data.thumbnailurl} alt={data.title} />
      <aside>
        <h4>{data.title}</h4>
        <footer>
          <span>{data.authorName}</span>
          <span>{data.commentNums}</span>
          <span>{data.datestr}</span>
        </footer>
      </aside>
    </div>
  );
};

PostItem.propTypes = {
};

export default PostItem;
