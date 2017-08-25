import ReactModal from 'react-modal';
import YouTube from 'react-youtube';

const VideoWidget = Scrivito.createWidgetClass({
  name: 'VideoWidget',
  attributes: {
    videoId: 'string',
    height: 'string',
    width: 'string',
  },
});

class VideoWidgetComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  videoDimensions() {
    const widget = this.props.widget;
    const hash = {};
    ['height', 'width'].map(fun => {
      hash[fun] = widget.get(fun);
    });
    return hash;
  }

  render() {
    const videoDimensions = this.videoDimensions();
    const opts = {
      height: videoDimensions['height'],
      width: videoDimensions['width'],
      playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      },
    };
    const videoId = this.props.widget.get('videoId');
    return (
      <div>
        <button onClick={ this.handleOpenModal }>Trigger Modal</button>
        <ReactModal
          isOpen={ this.state.showModal }
          contentLabel="Inline Styles Modal Example"
          className={ {
            base: 'myClass',
          } }
          overlayClassName={ {
            base: 'myOverlayClass',
          } }
          >
          <YouTube
            videoId={ videoId }
            opts={ opts }
            onReady={ this._onReady } />
          <button onClick={ this.handleCloseModal }>Close Modal</button>
        </ReactModal>
      </div>
    );
  }
}

Scrivito.provideUiConfig(VideoWidget, {
  title: 'VideoWidget',
  description: 'A widget with the video',
  attributes: {
    height: {
      title: 'Video height',
      description: 'Adjust your video height',
    },
    width: {
      title: 'Video width',
      description: 'Adjust your video width',
    },
    videoId: {
      title: 'VideoId',
      description: 'ID video from YouTube',
    },
  },
});

Scrivito.provideComponent(VideoWidget, VideoWidgetComponent);

export default VideoWidget;
