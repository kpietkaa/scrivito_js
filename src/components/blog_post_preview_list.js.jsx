const BlogPostPreviewList = Scrivito.React.connect(({ maxItems, tag }) => {
  let blogPosts = Scrivito.getClass('BlogPost').all().order('title', 'asc');
  if (tag) {
    blogPosts = blogPosts.and('tags', 'equals', tag);
  }

  let posts;
  // Replace `take`
  if (maxItems) {
    posts = [...blogPosts.batchSize(maxItems)].slice(0,maxItems);
  } else {
    posts = [...blogPosts];
  }
  // wu.take() - takes only first N obj from Array [...take(N, Array<Obj>)] and return new Array
  // console.log([...take(2, [1,2,3,4,5,6,7,8])]); => [1,2]
  // console.log([...take(4, blogPosts)]);
  // console.log([...blogPosts.batchSize(5)].slice(0,3));

  const listElements = [];
  posts.forEach(post => {
    listElements.push(
      <li>
        <div style={ { borderBottom: 'solid 1px lightgray' } }>
          <Scrivito.React.Link to={ post }>
            <p>{ post.get('title') }</p>
          </Scrivito.React.Link>
          <p>{ post.get('body').substr(0, 250) + '...' }</p>
        </div>
      </li>
    );
  });

  return (
    <ul>
      { listElements }
    </ul>
  );
});

export default BlogPostPreviewList;
