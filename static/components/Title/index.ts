import { Block } from '../../modules/Block';
import { template } from './title.tmpl';

interface TypeProps {
  className: string;
  text: string;
  template?: string;
}

export class Title extends Block {
  constructor(props: TypeProps) {
    props.template = template;
    super('div', props);
  }
}
