import {valid} from "js.spec";
import timelineData from "@/domain/timeline-data.js";
import {spec, symbol} from "js.spec";
import moment from "moment";
import {test, expect} from "vitest";

/**
 * Highest and default importance: 1<br>
 * Higher numbers mean lower importance<br>
 */
const importance = spec.oneOf("importance", 1, 2, 3)

const date = (m) => {
    return moment.isMoment(m) && m.isValid()
}

const url = spec.string
const urls = spec.collection("urls", url)
const tags = spec.collection("tags", spec.string)
const incidentId = spec.or("incident id", {
    simpleId: date,
    complexId: spec.tuple("complex incident id", date, spec.string),
})

const incident = spec.map("timeline incident", {
    date: date,
    title: spec.string,
    summary: spec.string,
    [symbol.optional]: {
        importance: importance,
        iconUrl: url,
        seeAlsoUrls: urls,
        seeAlsoIncidents: spec.collection("incident ids", incidentId),
        tags: tags,
        idSuffix: spec.string,
    }
})

const isTimelineData = spec.collection("timeline data", incident)

test("validates the timeline data", () => {
    expect(valid(isTimelineData, timelineData)).toBe(true)
})