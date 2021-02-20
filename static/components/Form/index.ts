import { template } from './form.tmpl';
import { Group } from '../../modules/Group';

interface TypeProps {
  className?: string;
  form_name?: string;
  children: object[];
  events?: object[];
  template?: string;
}

export class Form extends Group {
  constructor(props: TypeProps) {
    props.template = template;
    super(props);
  }

  render(): HTMLElement {
    super.render();

    for (const c of this.props.children) {
      const el = c.render();
      el.classList.add('form__row');
      this.element.querySelector('.childrens').appendChild(el);
    }
    return this.element;
  }
}
