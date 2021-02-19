export abstract class BaseAPI {
    create(options) { throw new Error('Not implemented'); }

    request(options) { throw new Error('Not implemented'); }

    update(options) { throw new Error('Not implemented'); }

    delete(options) { throw new Error('Not implemented'); }

    handleErrors(xhr: XMLHttpRequest){
        alert(`Ошибка: ${xhr.responseText}`);
    }
}