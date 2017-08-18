import BlogPostPreviewList from 'components/blog_post_preview_list';

const BlogOverviewWidget = Scrivito.createWidgetClass({
  name: 'BlogOverviewWidget',
  attributes: {
    maxItems: 'integer',
    tag: 'string',
  },
});

Scrivito.provideUiConfig(BlogOverviewWidget, {
  title: 'Blog Overview',
  description: 'A widget with up to four blog posts',
  attributes: {
    maxItems: {
      title: 'Max Items',
      description: 'Amount of items to show. Leave it empty, to show all items',
    },
    tag: {
      title: 'Tag',
      description: 'Filter blog posts by tag. Leave it empty, to not filter by tag',
    },
  },
});

Scrivito.provideComponent(BlogOverviewWidget, widget =>
  <BlogPostPreviewList
    maxItems={ widget.get('maxItems') }
    tag={ widget.get('tag') } />
);

export default BlogOverviewWidget;
