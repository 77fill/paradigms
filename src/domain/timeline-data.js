import moment from "moment";
import structuredProgrammingIconUrl from "@/assets/structured-programming-icon.svg"

export default [
    {
        date: moment([1968]),
        importance: 1,
        tags: ["structured-programming"],
        iconUrl: structuredProgrammingIconUrl,
        title: 'Term "Structured Programming" coined by Dijkstra',
        summary: 'Publication of the influential "Go To Statement Considered Harmful" open letter in 1968' +
            ' by Dutch computer scientist Edsger W. Dijkstra,' +
            ' who coined the term "structured programming".',
        seeAlsoUrls: ["https://www.cs.utexas.edu/~EWD/ewd02xx/EWD215.PDF"]
    }
]