export class Utils {
  static mergeDeep = (target, source) => {
    const isObject = (obj) => obj && typeof obj === 'object';

    if (!isObject(target) || !isObject(source)) {
      return source;
    }

    Object.keys(source).forEach((key) => {
      const targetValue = target[key];
      const sourceValue = source[key];

      if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
        target[key] = sourceValue;
      } else if (isObject(targetValue) && isObject(sourceValue)) {
        target[key] = Utils.mergeDeep({ ...targetValue }, sourceValue);
      } else {
        target[key] = sourceValue;
      }
    });

    return target;
  };

  static mergeObjects = (...args) => Object.assign.apply(Utils, [{}].concat(args));

  static collectFormData = (options?) => {
    const form = document.forms.namedItem('form');
    const formData = new FormData(form);

    if (options && options.returnFormData) {
      return formData;
    }

    return Array.from(formData.entries()).reduce((acc, item) => {
      const [key, value] = item;
      acc[key] = value;
      return acc;
    }, {});
  };

  static preventDOS = (store, func) => {
    const PAUSE_BETWEEN_REQUESTS = 1000;
    if (
      store.get('lastRequestTimestamp') &&
      Date.now() - store.get('lastRequestTimestamp') < PAUSE_BETWEEN_REQUESTS
    ) {
      return Promise.reject({
        responseText: `AntiDOS: Пауза между запросами не должна превышать ${PAUSE_BETWEEN_REQUESTS} мс!`,
      });
    }
    store.set('lastRequestTimestamp', Date.now());
    return func();
  };
}
