export default class Product {
    #code;
    #title;
    #description;
    #image;
    #price;
    #category;
    #characteristics;
    #imagePreviewOne;
    #imagePreviewTwo;
    #imagePreviewThree;
    #state;
    constructor(
        codigo = uuidv4(),
        title,
        description,
        image,
        price,
        category,
        characteristics,
        imagePreviewOne,
        imagePreviewTwo,
        imagePreviewThree
    ) {
        this.#code = codigo;
        this.#title = title;
        this.#description = description;
        this.#image = image;
        this.#price = price;
        this.#category = category;
        this.#characteristics = characteristics;
        this.#imagePreviewOne = imagePreviewOne;
        this.#imagePreviewTwo = imagePreviewTwo;
        this.#imagePreviewThree = imagePreviewThree;
        this.#state = false;
    }

    get code() {
        return this.#code;
    }

    get title() {
        return this.#title;
    }

    get description() {
        return this.#description;
    }

    get image() {
        return this.#image;
    }

    get price() {
        return this.#price;
    }

    get category() {
        return this.#category;
    }

    get characteristics() {
        return this.#characteristics;
    }

    get imagePreviewOne() {
        return this.#imagePreviewOne;
    }

    get imagePreviewTwo() {
        return this.#imagePreviewTwo;
    }

    get imagePreviewThree() {
        return this.#imagePreviewThree;
    }

    get state() {
        return this.#state;
    }

    set code(code) {
        this.#code = code;
    }

    set title(title) {
        this.#title = title;
    }

    set description(description) {
        this.#description = description;
    }

    set image(image) {
        this.#image = image;
    }

    set price(price) {
        this.#price = price;
    }

    set category(category) {
        this.#category = category;
    }

    set characteristics(characteristics) {
        this.#characteristics = characteristics;
    }

    set imagePreviewOne(imagePreviewOne) {
        this.#imagePreviewOne = imagePreviewOne;
    }

    set imagePreviewTwo(imagePreviewTwo) {
        this.#imagePreviewTwo = imagePreviewTwo;
    }

    set imagePreviewThree(imagePreviewThree) {
        this.#imagePreviewThree = imagePreviewThree;
    }

    set state(state) {
        this.#state = state;
    }

    toJSON() {
        return {
            code: this.code,
            title: this.title,
            description: this.description,
            image: this.image,
            price: this.price,
            category: this.category,
            characteristics: this.characteristics,
            imagePreviewOne: this.imagePreviewOne,
            imagePreviewTwo: this.imagePreviewTwo,
            imagePreviewThree: this.imagePreviewThree,
            state: this.state,
        };
    }
}
