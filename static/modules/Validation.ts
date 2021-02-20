export class Validation {
  hideInputLabel(e): void {
    const el = e.target;
    if (el.tagName === 'INPUT') {
      el.previousElementSibling.hidden = el.value === '';
    }
  }

  validateFormInputs(el): void {
    if (el.tagName === 'INPUT') {
      const error_message = document.createElement('p');
      error_message.classList.add(
        'error_message',
        /* "error_message_bottom", */ 'error_message_small',
      );

      if (el.value === '') {
        error_message.textContent = 'Поле не может быть пустым';
        el.parentElement.append(error_message);
      }

      if (
        el.type === 'email' &&
        !el.value.match(
          new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$", 'gi'),
        )
      ) {
        error_message.textContent = 'Неккоректный формат email';
        el.parentElement.append(error_message);
      }

      if (el.name === 'login' && el.value.match(new RegExp('[^\\w\\s]', 'gi'))) {
        error_message.textContent = 'Нельзя использовать специальные символы';
        el.parentElement.append(error_message);
      }

      if (
        (el.name === 'newPasswordRepeat' &&
          el.value !== (<HTMLInputElement>document.querySelector("[name='newPassword']")).value) ||
        (el.name === 'password_repeat' &&
          el.value !== (<HTMLInputElement>document.querySelector("[name='password']")).value)
      ) {
        error_message.textContent = 'Пароли не совпадают';
        el.parentElement.append(error_message);
      }
    }
  }

  validateMessage(el): boolean {
    this.clearErrorMessage(el);
    if (el.tagName === 'INPUT') {
      const error_message = document.createElement('p');
      error_message.classList.add('error_message', 'error_message_bottom', 'error_message_small');

      if (el.value === '') {
        error_message.textContent = 'Поле не может быть пустым';
        el.parentElement.append(error_message);
      }

      if (el.type === 'text' && el.value.match(new RegExp('[^\\w\\s]', 'gi'))) {
        error_message.textContent = 'Нельзя использовать специальные символы';
        el.parentElement.append(error_message);
      }
    }
    return !document.querySelector('.error_message');
  }

  validateFormOnSubmit(): boolean {
    document.querySelectorAll('form input').forEach((input) => {
      this.clearErrorMessage(input);
      this.validateFormInputs(input);
    });
    const error_message = document.querySelector('.error_message');
    return !error_message;
  }

  clearErrorMessage(el): void {
    if (el.tagName === 'INPUT') {
      const inputWrapper = el.parentElement;
      if (inputWrapper.querySelector('.error_message')) {
        inputWrapper.removeChild(inputWrapper.querySelector('.error_message'));
      }
    }
  }
}
