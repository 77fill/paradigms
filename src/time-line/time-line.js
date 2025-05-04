import Moment from "./moment"

export default class TimeLine extends HTMLOListElement {
    #moments

    set moments(val) {
        
        if(!Array.isArray(val) || val.some(m => !(m instanceof Moment)))
            throw new Error();

        this.#moments = val
    }

    get moments() {return this.#moments}

    constructor() {
        super()
    }

    connectedCallback() {

    }
}