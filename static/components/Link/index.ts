import { Block } from '../../modules/Block';
import { template } from './link.tmpl';

interface TypeProps {
  className: string;
  href: string;
  text: string;
  template?: string;
}

export class Link extends Block {
  constructor(props: TypeProps) {
    props.template = template;
    super('div', props);
  }
}
