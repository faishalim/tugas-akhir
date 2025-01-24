import { z } from "zod";
import { DocumentReference, Timestamp } from "firebase/firestore";

const TimestampType = z.custom<Timestamp>(
  (value) => value instanceof Timestamp,
);

const DocumentReferenceType = z.custom<DocumentReference>(
  (value) => value instanceof DocumentReference,
);

export const baseHistorySchema = z.object({
  image: z.object({
    url: z.string(),
    key: z.string(),
  }),
  description: z.string(),
  date: z.string().or(TimestampType),
  componentRef: DocumentReferenceType,
  componentName: z.string(),
});

const repairSchema = baseHistorySchema.extend({
  actionType: z.literal("repair"),
  technicalSpecification: z.undefined(), // Must be undefined
});

const replacementSchema = baseHistorySchema.extend({
  actionType: z.literal("replacement"),
  technicalSpecification: z.array(z.record(z.string(), z.string())),
});

export const repairHistorySchema = z.discriminatedUnion("actionType", [
  repairSchema,
  replacementSchema,
]);

export const userSchema = z.object({
  id: z.string(),
  name: z.string().min(1).max(50),
  password: z.string().min(5).max(128),
  image: z
    .object({
      url: z.string(),
      key: z.string(),
    })
    .optional(),
  role: z.enum(["user", "admin"]), // Example role for scalability
});
