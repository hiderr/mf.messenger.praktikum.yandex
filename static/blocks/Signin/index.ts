import { signinTmpl } from './signin.tmpl';
import { Group } from '../../modules/Group';

export class SigninPage extends Group {
  constructor(props) {
    props.template = signinTmpl;
    props.pathCSS = 'blocks/Login/login.css';
    super(props);
  }
}
