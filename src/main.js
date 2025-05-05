import TimeLine from "./time-line/time-line";
import moments from "./history"
import Moment from "./time-line/moment";

customElements.define("time-line", TimeLine, {extends: "ol"})
customElements.define("moment", Moment, {extends: "li"})

const timeLine = document.getElementById("programming-paradigm-history") 