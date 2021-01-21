export const { compile } = Handlebars;
export default (template, context) => {
    return compile(template)(context);
};