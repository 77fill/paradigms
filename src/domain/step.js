export default class StepData {
    constructor(x, date) {
        this.x = x
        this.date = date
    }

    static getStepsFor(start, end, stepDuration, scale) {
        const widthInYears = end.year() - start.year()
        const centerDate = start.clone().add(widthInYears/2, "years")

        const widthInViewBox = scale.toModel(widthInYears, "years")
        const stepInViewBox = scale.toModel(stepDuration.as("years"), "years")
        const stepCountOnOneSide = Math.floor( (widthInViewBox/2) / stepInViewBox )

        const leftSteps = [
            new StepData(-widthInViewBox/2,start),
            ...[...Array(stepCountOnOneSide).keys()]
                .map(i => i+1)
                .reverse()
                .map(stepNr =>
                    new StepData(
                        -stepNr*stepInViewBox,
                        centerDate.clone().subtract(stepNr*stepDuration.as("years"), 'years')
                    )
                )
        ]

        const centerStep = new StepData(0, centerDate)

        const rightSteps = [
            ...[...Array(stepCountOnOneSide).keys()]
                .map(i => i+1)
                .map(stepNr =>
                    new StepData(
                        stepNr*stepInViewBox,
                        centerDate.clone().add(stepNr*stepDuration.as("years"), 'years')
                    )
                ),
            new StepData(widthInViewBox/2,end),
        ]

        const rawResult = [...leftSteps, centerStep, ...rightSteps]

        let telescopedResult = [...rawResult]

        if(telescopedResult.length > 1 && telescopedResult[1].date.isSame( telescopedResult[0].date ))
            telescopedResult = telescopedResult.slice(1)

        if(telescopedResult.length > 1 &&
                telescopedResult[telescopedResult.length-1].date.isSame(
                    telescopedResult[telescopedResult.length-2].date))
            telescopedResult = telescopedResult.slice(0, telescopedResult.length-1)

        return telescopedResult
    }
}