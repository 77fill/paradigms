import {expect, test} from "vitest";
import {valid} from "js.spec";
import timelineData from "@/domain/timeline-data.js";
import {isTimelineData} from "@/domain/timeline-data.spec.js";

test("validates the timeline data", () => {
    expect(valid(isTimelineData, timelineData)).toBe(true)
})