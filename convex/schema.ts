import { defineSchema, defineTable } from "convex/server"; import { v } from "convex/values";
export default defineSchema({
    surveys: defineTable({ title: v.string(), status: v.string(), createdAt: v.string() }),
    questions: defineTable({ surveyId: v.id("surveys"), type: v.string(), text: v.string(), options: v.optional(v.array(v.string())), required: v.boolean(), order: v.number() }).index("by_survey", ["surveyId"]),
    responses: defineTable({ surveyId: v.id("surveys"), answers: v.any(), submittedAt: v.string() }).index("by_survey", ["surveyId"])
});
