import { Block } from '../../modules/Block';
import { avatarTmpl } from './avatar.tmpl';

const HOST = 'https://ya-praktikum.tech/';
interface TypeProps {
  tooltip: string;
  title: string;
  titlePath: string;
  url: string;
  urlPath: string;
  template?: string;
}

export class Avatar extends Block {
  constructor(props: TypeProps) {
    props.template = avatarTmpl;
    super('div', props);
  }

  componentDidMount(oldProps): void {
    super.componentDidMount(oldProps);
    this.store.eventBus.on('profileDataReceived', () => {
      if (
        this.props.titlePath &&
        this.store.get(this.props.titlePath) &&
        this.props.urlPath &&
        this.store.get(this.props.urlPath)
      ) {
        this.setProps({
          title: this.store.get(this.props.titlePath),
          url: `${HOST}${this.store.get(this.props.urlPath)}`,
        });
      }
    });
  }
}
