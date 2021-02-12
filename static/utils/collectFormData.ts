export function collectFormData(options?) {
    const form = document.forms.namedItem("form"),
        formData = new FormData(form);

    if (options && options.returnFormData){
        return formData;
    }

    return Array.from(formData.entries()).reduce((acc, item) => {
        let [key, value] = item;
        acc[key] = value;
        return acc;
    }, {});
}