const { compile } = Handlebars;
export const compiler = (template, context) => {
    return compile(template)(context);
};
//# sourceMappingURL=templator.js.map