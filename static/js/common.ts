function convertFormDataToObject(formData) {
    let obj = {};
    return formData.entries().reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
    }, obj);
}

(() => {
    // @ts-ignore
    const form = document.forms.form,
        formData = new FormData(form);

    console.log(convertFormDataToObject(formData));
})();