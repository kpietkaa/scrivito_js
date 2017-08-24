import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

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
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  startDate(date) {
    if(date == null)
      return null;
    else
      return moment(date);
  }

  date() {
    const page = this.props.page;
    const data = page.get('publishedAt');
    return data;
  }

  publishMonth() {
    const date = this.date();
    if (!date) { return null; }
    const month = date.getMonth() + 1;
    return month;
  }

  publishDay() {
    const date = this.date();
    if (!date) { return null; }
    const day = date.getDate();
    return day;
  }

  publishYear() {
    const date = this.date();
    if (!date) { return null; }
    const year = date.getFullYear();
    return year;
  }

  render() {
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
              Date: <time>
                { this.publishMonth() }/{ this.publishDay() }/{ this.publishYear() }
              </time>
              <SingleDatePicker
                date={ this.startDate(obj.get('publishedAt')) } // momentPropTypes.momentObj or null
                onDateChange={ (date) => obj.update({ publishedAt: date.toDate() }) } // PropTypes.func.isRequired
                focused={ this.state.focused } // PropTypes.bool
                onFocusChange={ ({ focused }) => this.setState({ focused }) }// PropT.func.req
              />
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
            style={ { display: 'inline' } } />
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
      description: 'Category of blogpost',
    },
    tags: {
      title: 'Tags',
      description: 'The tags of the blogpost',
    },
  },
});

Scrivito.provideComponent(BlogPost, BlogPostComponent);

export default BlogPost;
