import type { CollectionEntry } from "astro:content";

export function entrySlug(entry: CollectionEntry<"blog">) {
  return entry.id.replace(/\.(md|mdx)$/, "");
}
