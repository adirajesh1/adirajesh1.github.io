import type { CollectionEntry } from "astro:content";

type WritingEntry = CollectionEntry<"blog"> | CollectionEntry<"memos">;

export function entrySlug(entry: WritingEntry) {
  return entry.id.replace(/\.(md|mdx)$/, "");
}
