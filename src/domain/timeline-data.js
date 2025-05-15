import moment from "moment";
import structuredProgrammingIconUrl from "@/assets/structured-programming-icon.svg"
import simulaUrl from "@/assets/simula.svg"

export default [
    {
        date: moment([1962]),
        importance: 1,
        tags: ["oop"],
        iconUrl: simulaUrl,
        title: "Simula: First OOP Language",
        summary: "Designed to be a language used for 'simulations' as the name suggests," +
            " Simula I can be considered a rough superset of ALGOL 60." +
            " It is seen as the first object-oriented language." +
            " Simula 67 was later developed as a general purpose language.",
    },
    {
        date: moment([1968]),
        importance: 1,
        tags: ["structured-programming"],
        iconUrl: structuredProgrammingIconUrl,
        title: 'Term "Structured Programming" coined by Dijkstra',
        summary: 'Publication of the influential "Go To Statement Considered Harmful" open letter in 1968' +
            ' by Dutch computer scientist Edsger W. Dijkstra,' +
            ' who coined the term "structured programming".',
        seeAlsoLinks: [
            ["https://www.cs.utexas.edu/~EWD/ewd02xx/EWD215.PDF", "PDF: Go To Statement Considered Harmful" ],
        ]
    }
]