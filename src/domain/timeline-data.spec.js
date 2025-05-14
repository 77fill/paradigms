import {spec, symbol} from "js.spec";
import moment from "moment";

/**
 * Highest and default importance: 1<br>
 * Higher numbers mean lower importance<br>
 */
const importance = spec.oneOf("importance", 1, 2, 3)

const date = (m) => {
    return moment.isMoment(m) && m.isValid()
}

const url = spec.string
const link = spec.tuple("link", url, spec.string)
const links = spec.collection("links", link)
const urls = spec.collection("urls", url)
const tags = spec.collection("tags", spec.string)
const incidentId = spec.or("incident id", {
    simpleId: date,
    complexId: spec.tuple("complex incident id", date, spec.string),
})

export const isIncident = spec.map("timeline incident", {
    date: date,
    title: spec.string,
    summary: spec.string,
    [symbol.optional]: {
        importance: importance,
        iconUrl: url,
        seeAlsoLinks: links,
        seeAlsoIncidents: spec.collection("incident ids", incidentId),
        tags: tags,
        idSuffix: spec.string,
    }
})

export const hasIcon = spec.map("has icon url", {iconUrl: url})

export const isTimelineData = spec.collection("timeline data", isIncident)
