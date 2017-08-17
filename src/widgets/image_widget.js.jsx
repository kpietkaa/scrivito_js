const ImageWidget = Scrivito.createWidgetClass({
  name: 'ImageWidget',
  attributes: {
    image: 'reference',
    title: 'string',
    cssClass: 'string',
  },
});

Scrivito.provideUiConfig(ImageWidget, {
  title: 'Image',
  description: 'A widget with an image',
  attributes: {
    title: {
      title: 'Title',
      description: 'Image in widget title',
    },
    cssClass: {
      title: 'CSS Class',
      description: 'Optional css class for the img tag',
    },
  },
});

Scrivito.provideComponent(ImageWidget, widget =>
  <Scrivito.React.Image
    src={ widget }
    attribute='image'
    className={ widget.get('cssClass') }
    alt={ widget.get('title') } />
);

export default ImageWidget;
