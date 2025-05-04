import TimeLine from "./time-line/time-line";
import moments from "./history"

customElements.define("time-line", TimeLine)

const timeLine = document.getElementById("programming-paradigm-history") 
timeLine.setMoments(moments)