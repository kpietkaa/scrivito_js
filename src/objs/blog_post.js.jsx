const BlogPost = Scrivito.createObjClass({
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

class BlogPostComponent extends React.Component {
  date() {
    const page = this.props.page;
    const data = page.get('publishedAt');
    return data;
  }

  publishMonth() {
    const date = this.date();
    if (!date) { return null };
    const month = date.getMonth() + 1;
    return month;
  }

  publishDay() {
    const date = this.date();
    if (!date) { return null };
    const day = date.getDate();
    return day;
  }

  render () {
    const obj = this.props.page;
    return (
      <div>
        <section className='bg-white'>
          <div className='container'>
            <Scrivito.React.Content
              tag='h1'
              className='h2'
              content={ obj }
              attribute='title' />
            <div>
              Date: <time className='timeline-badge'>
                { this.publishMonth() }/{ this.publishDay() }
              </time>
            </div>
            <div>
              Category:
              <Scrivito.React.Content
                tag='h4'
                content={ obj }
                attribute='category'
                style={{display: 'inline'}} >
                {obj.get('category')}
              </Scrivito.React.Content>
            </div>
            <div>
              Place:
              <Scrivito.React.Content
                tag='h4'
                content={ obj }
                attribute='place'
                style={{display: 'inline'}} />
            </div>
          </div>
        </section>
        <div>
          <Scrivito.React.Content
            tag='div'
            content={ obj }
            attribute='body' />
        </div>
        <div>
          Author:
          <Scrivito.React.Content
            tag='div'
            content={ obj }
            attribute='author'
            style={{display: 'inline'}} />
        </div>
      </div>
    );
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
    category: {
      title: 'Category',
    },
  },
});

Scrivito.provideComponent(BlogPost, BlogPostComponent);

export default BlogPost;
