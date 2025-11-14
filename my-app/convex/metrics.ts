// convex/metrics.ts
import { query, mutation } from "./_generated/server";

export const getRecent = query(async ({ db }) => {
  return await db
    .query("metrics")
    .order("desc")
    .take(20); // last 20 metrics
});

export const add = mutation(
  async (
    { db },
    args: { label: string; value: number; unit?: string }
  ) => {
    const doc = {
      label: args.label,
      value: args.value,
      unit: args.unit,
      createdAt: Date.now(),
    };
    return await db.insert("metrics", doc);
  }
);
