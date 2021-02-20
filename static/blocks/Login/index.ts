import './login.sass';
import { template } from './login.tmpl';
import { Group } from '../../modules/Group';

interface TypeProps {
  children: any[];
  template: string;
  pathCSS: string;
}

export class LoginPage extends Group {
  constructor(props: TypeProps) {
    props.template = template;
    props.pathCSS = 'blocks/Login/login.css';
    super(props);
  }
}
