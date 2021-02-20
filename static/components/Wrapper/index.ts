import { template } from './wrapper.tmpl';
import { Group } from '../../modules/Group';

interface TypeProps {
  children: any[];
  className?: string;
  template?: string;
}

export class Wrapper extends Group {
  constructor(props: TypeProps) {
    props.template = template;
    super(props);
  }
}
