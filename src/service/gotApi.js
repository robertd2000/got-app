export class GotApi {
    static fetchApi(url) {
        return fetch(`https://anapioficeandfire.com/api/${url}`)
            .then(response => response.json())
    }

    static getBooks() {
        return this.fetchApi('books')
    }

    static getCharacters() {
        return this.fetchApi('characters?page=10&pageSize=10')
        // return this.fetchApi('characters')
    }

    static getCharacter(id) {
        return this.fetchApi(`characters/${id}`)
    }
}