import {test, expect} from 'vitest'
import StepData from './step.js'
import moment from "moment";
import Scale from "./scale.js";
import Unit from './unit.js'
import _ from 'lodash'

test("calculates step data for example timeline", () => {
    const start = moment('1940')
    const end = moment('1960')
    const stepDuration = moment.duration(5, 'years')
    const scale = new Scale(2, Unit.VIEW_BOX_UNIT, 1, 'years')

    const expectedOutcome = [
        new StepData(-20, moment('1940')),
        new StepData(-10, moment('1945')),
        new StepData(0, moment('1950')),
        new StepData(10, moment('1955')),
        new StepData(20, moment('1960')),
    ]

    expect(StepData.getStepsFor(start, end, stepDuration, scale))
        .toSatisfy(stepData =>
            _.isEqualWith(stepData, expectedOutcome,
                (val, other) => {
                    if(moment.isMoment(val) && moment.isMoment(other))
                        return val.isSame(other)
                    else
                        return undefined
                }))
})