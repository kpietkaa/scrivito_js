const BlogPostPreviewList = Scrivito.React.connect(({ maxItems, tag }) => {
  let blogPosts = Scrivito.getClass('BlogPost').all().order('title', 'asc');
  if (tag) {
    blogPosts = blogPosts.and('tags', 'equals', tag);
  }

  let posts;
  if (maxItems) {
    posts = [...blogPosts.batchSize(maxItems)].slice(0, maxItems);
  } else {
    posts = [...blogPosts];
  }

  const listElements = [];
  posts.forEach(post => {
    listElements.push(
      <li>
        <div style={ { borderBottom: 'solid 1px lightgray' } }>
          <Scrivito.React.Link to={ post }>
            { post.get('title') }
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
