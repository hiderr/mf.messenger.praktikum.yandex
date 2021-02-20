const { compile } = Handlebars;
export const compiler = (template, context) => compile(template)(context);
