import Moment from "./moment"

export default class TimeLine extends HTMLOListElement {
    static observedAttributes = ["start", "end", "scale", "orientation"]

    start
    end
    scale
    orientation

    constructor() {
        super()
    }

    connectedCallback() {

    }

    attributeChangedCallback(name, oldValue, newValue) {
        
    }
}