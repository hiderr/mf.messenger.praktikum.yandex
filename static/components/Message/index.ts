import { Block } from '../../modules/Block';
import { template } from './message.tmpl';

interface TypeProps {
  className: string;
  text: string;
  template?: string;
}

export class Message extends Block {
  constructor(props: TypeProps) {
    props.template = template;
    super('div', props);
  }
}
