import BlogPostPreviewList from 'components/blog_post_preview_list';

const BlogOverviewWidget = Scrivito.createWidgetClass({
  name: 'BlogOverviewWidget',
  attributes: {
    maxItems: 'integer',
    tag: 'string',
    title: 'string',
  },
});

Scrivito.provideUiConfig(BlogOverviewWidget, {
  attributes: {
    maxItems: {
      title: 'Max Items',
      description: 'Amount of items to show. Leave it empty, to show all items',
    },
    tag: {
      title: 'Tag',
      description: 'Filter blog posts by tag. Leave it empty, to not filter by tag',
    },
    title: {
      title: 'Title',
      description: 'Title section title',
    },
  },
  description: 'A widget with up to four blog posts',
  title: 'Blog Overview',
  titleForContent: widget => widget.get('title'),
});

Scrivito.provideComponent(BlogOverviewWidget, widget =>
  <div>
    <Scrivito.React.Content
      tag='h3'
      content={ widget }
      attribute='title' />
    <BlogPostPreviewList
      maxItems={ widget.get('maxItems') }
      tag={ widget.get('tag') } />
  </div>
);

export default BlogOverviewWidget;
