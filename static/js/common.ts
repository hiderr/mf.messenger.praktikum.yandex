function convertFormDataToObject(formData) {
    let obj = {};
    for (let entry of formData.entries()) {
        let [key, value] = entry;
        obj[key] = value;
    }
    return obj;
}

(() => {
    const form = document.forms.namedItem("form"),
        formData = new FormData(form);

    console.log(convertFormDataToObject(formData));
})();