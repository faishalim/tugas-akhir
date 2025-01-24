import { UTFiles, UTApi } from "uploadthing/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";

// TODO:
// 1. auth
// 2. is rate limit necessary
// 3. better error handling
// 4. match the maxFileSize with the front-end

const utapi = new UTApi();

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const router = {
  image: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(async ({ files }) => {
      const fileOverrides = files.map((f) => f);

      return { [UTFiles]: fileOverrides };
    })
    .onUploadComplete(async ({ file }) => {
      console.log(file);
    }),
  trial: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(async ({ files }) => {
      const fileOverrides = files.map((f) => f);

      return { [UTFiles]: fileOverrides };
    })
    .onUploadComplete(async ({ file }) => {
      console.log(file);

      try {
        await utapi.deleteFiles(file.key);
      } catch (error) {
        await utapi.deleteFiles(file.key);
        throw new Error("Failed to upload the image.");
      }
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof router;
