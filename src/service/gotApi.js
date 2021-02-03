export class GotApi {
    static fetchApi(url) {
        return fetch(`https://anapioficeandfire.com/api/${url}`)
            .then(response => response.json())
    }

    static getBooks() {
        return this.fetchApi('books')
    }

    static getCharacters(i) {
        return this.fetchApi(`characters?page=${i}&pageSize=10`)
        // return this.fetchApi('characters')
    }

    static getCharacter(id) {
        return this.fetchApi(`characters/${id}`)
    }

    static getHouses(i) {
        return this.fetchApi(`houses?page=${i}&pageSize=10`)
    }
}