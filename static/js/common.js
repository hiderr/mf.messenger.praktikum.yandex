function convertFormDataToObject(formData) {
    let obj = {};
    for (let entry of formData.entries()) {
        let [key, value] = entry;
        obj[key] = value;
    }
    return obj;
}
document.addEventListener("DOMContentLoaded", () => {
    // @ts-ignore
    let form = document.forms.form, formData = new FormData(form);
    console.log(convertFormDataToObject(formData));
});
//# sourceMappingURL=common.js.map