const BaseBlogPost = Scrivito.createObjClass({
  name: 'BlogPost',
  attributes: {
    title: 'string',
    body: 'html',
    author: 'string',
    publishedAt: 'date',
    category: ['enum', { validValues: ['all', 'students', 'other'] }],
    place: 'string',
  },
});

class BlogPost extends BaseBlogPost {
  navigationOptions() {
    return {
      heigthClassName: 'min-height',
    };
  }

  textExtract() {
    return obj => obj.get('body');
  }
}

Scrivito.registerClass('BlogPost', BlogPost);

Scrivito.provideUiConfig(BlogPost, {
  title: 'BlogPost',
  titleForContent: obj => obj.get('title'),
  description: 'A BlogPost',
  attributes: {
    author: {
      title: 'Author',
      description: 'The author of the blogpost',
    },
    publishedAt: {
      title: 'Published At',
      description: 'Date of publish',
    },
  },
});

Scrivito.provideComponent(BlogPost, obj =>
  <div>
    <section className='bg-white'>
      <div className='container'>
        <Scrivito.React.Content
          tag='h1'
          className='h2'
          content={ obj }
          attribute='title' />
        <Scrivito.React.Content
          tag='h5'
          content={ obj }
          attribute='publishedAt' />
        <Scrivito.React.Content
          tag='h5'
          content={ obj }
          attribute='category' />
        <Scrivito.React.Content
          tag='h5'
          content={ obj }
          attribute='place' />
      </div>
    </section>
    <Scrivito.React.Content
      tag='div'
      content={ obj }
      attribute='body' />
    <Scrivito.React.Content
      tag='div'
      content={ obj }
      attribute='author' />
  </div>
);

export default BlogPost;
