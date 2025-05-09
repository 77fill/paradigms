import moment from 'moment'

export default class Scale {
    realUnit
    ratioModelPerReal
    modelUnit

    constructor(modelValue, modelUnit, realValue, realUnit) {
        this.realUnit = realUnit
        this.modelUnit = modelUnit

        this.ratioModelPerReal = modelValue / realValue
    }

    toModel(realValue, realUnit) {
        return moment.duration(realValue, realUnit).as(this.realUnit) * this.ratioModelPerReal
    }

    toReal(modelValue) {
        return modelValue / this.ratioModelPerReal
    }
}