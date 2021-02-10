export function collectFormData() {
    const form = document.forms.namedItem("form"),
        formData = new FormData(form),
        result = Array.from(formData.entries()).reduce((acc, item) => {
            let [key, value] = item;
            return acc[key] = value;
        }, {});

    console.log(result);

    /*const obj = {};
    for (let entry of formData.entries()) {
        let [key, value] = entry;
        obj[key] = value;
    }
    return obj;*/
}