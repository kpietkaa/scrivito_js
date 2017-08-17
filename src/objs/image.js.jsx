const Image = Scrivito.createObjClass({
  name: 'Image',
  attributes: {
    blob: 'binary',
    title: 'string',
    tags: 'stringlist',
  },
});

Scrivito.provideUiConfig(Image, {
  attributes: {
    title: {
      title: 'Title',
      description: 'The title of the image',
    },
    tags: {
      title: 'Tags',
      description: 'Make it easier to find this Image by adding some tags.',
    },
  },
});

export default Image;
