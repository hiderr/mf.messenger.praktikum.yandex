import { Block } from './Block';

export class Group extends Block {
  public template: string;

  constructor(props) {
    super('div', props);
  }

  render(): HTMLElement {
    super.render();

    for (const c of this.props.children) {
      this.element.querySelector('.childrens').appendChild(c.render());
    }
    return this.element;
  }
}
