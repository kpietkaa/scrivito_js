import Time from '../components/time';
import SingleDate from '../components/single_date';

const BlogPost = Scrivito.createObjClass({
  name: 'BlogPost',
  attributes: {
    title: 'string',
    body: 'html',
    author: 'string',
    publishedAt: 'date',
    category: ['enum', { validValues: ['all', 'students', 'other'] }],
    place: 'string',
    tags: 'stringlist',
  },
});

class BlogPostComponent extends React.Component {
  render() {
    const obj = this.props.page;
    return (
      <div>
        <section className='bg-white'>
          <div className='container'>
            <Scrivito.React.Content
              tag='h1'
              content={ obj }
              attribute='title' />
            <div>
              Date:
              <Time date={ obj.get('publishedAt') } />
              <SingleDate obj={ obj } />
            </div>
            <div>
              Category:
              <Scrivito.React.Content
                tag='h4'
                content={ obj }
                attribute='category'
                style={ { display: 'inline' } } >
                {obj.get('category')}
              </Scrivito.React.Content>
            </div>
            <div>
              Place:
              <Scrivito.React.Content
                tag='h4'
                content={ obj }
                attribute='place'
                style={ { display: 'inline' } } />
            </div>
          </div>
        </section>
        <div>
          <Scrivito.React.Content
            content={ obj }
            attribute='body' />
        </div>
        <div>
          Author:
          <Scrivito.React.Content
            content={ obj }
            attribute='author'
            style={ { display: 'inline' } } />
        </div>
      </div>
    );
  }
}

Scrivito.registerClass('BlogPost', BlogPost);

Scrivito.provideUiConfig(BlogPost, {
  attributes: {
    author: {
      title: 'Author',
      description: 'The author of the blogpost',
    },
    category: {
      title: 'Category',
      description: 'Category of blogpost',
    },
    publishedAt: {
      title: 'Published At',
      description: 'Date of publish',
    },
    tags: {
      title: 'Tags',
      description: 'The tags of the blogpost',
    },
  },
  description: 'A BlogPost',
  title: 'BlogPost',
  titleForContent: obj => obj.get('title'),
});

Scrivito.provideComponent(BlogPost, BlogPostComponent);

export default BlogPost;
