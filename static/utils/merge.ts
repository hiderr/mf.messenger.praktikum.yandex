export const merge = (...args)  => {
      return Object.assign.apply(this, [{}].concat(args));
};