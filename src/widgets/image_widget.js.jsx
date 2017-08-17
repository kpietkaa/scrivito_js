const ImageWidget = Scrivito.createWidgetClass({
  name: 'ImageWidget',
  attributes: {
    image: 'reference',
    cssClass: 'string',
  },
});

Scrivito.provideUiConfig(ImageWidget, {
  title: 'Image',
  description: 'A widget with an image',
  attributes: {
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
    className={ widget.get('cssClass') } />
);

export default ImageWidget;
