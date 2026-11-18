# Content guide

Every piece of text on this site is a placeholder, written as `[Something in brackets]`, or a gray skeleton bar standing in for a paragraph. **You never need to touch a component file to change text.** All of it lives in three data files under `src/content/`:

- `src/content/site.ts` — site name, nav, footer, utility bar, quick exit, and every home-page / static-page section
- `src/content/topics.ts` — the four topics
- `src/content/activities.ts` — the four seed activities (one per mechanic)

Open the file, find the bracketed string or `{ lines: n }` skeleton spec, and replace it. TypeScript will tell you if you break the shape of something.

## How placeholders work

- A string like `"[Your heading here]"` renders exactly as written, brackets included, until you replace it with real text (then delete the brackets too).
- A skeleton spec like `{ lines: 3 }` renders as 3 gray bars. It means "a paragraph goes here" — there's no text to edit yet. You don't fill these in by editing `site.ts`; skeletons are a layout placeholder. When the group is ready to write that copy, replace the component's `<Skeleton spec={...} />` usage with the real paragraph text (ask a developer on the team if you're not sure where that is, or see the "Where each section lives" table below).

## `src/content/site.ts` — field map

| Field | Shows up |
|---|---|
| `siteName` | Header logo text, footer, page title suffix |
| `meta.*` | Browser tab title / search description |
| `quickExit.url` | Where the Quick Exit button and double-Escape shortcut send visitors. Defaults to Google. |
| `utilityBar.*` | The thin dark bar at the very top of every page |
| `nav.links`, `nav.primaryAction` | Header navigation and the primary button in the header |
| `footer.*` | Footer columns, links, and bottom row |
| `home.hero.*` | Home page hero (heading, buttons, image caption) |
| `home.mission.*` | The indigo "mission statement" band |
| `home.topicsSection.*` | Heading above the topics list on the home page |
| `home.interactive.*` | The rose "interactive tools" band, including the 3 preview option labels |
| `home.pathways.*` | The two audience cards ("for young learners" / "for parents & educators") |
| `home.trustStrip.*` | The three-column strip just above the footer |
| `pages.forAdults`, `pages.resources`, `pages.about` | Those three static pages (title, intro, and repeatable `sections`) |
| `pages.activityTemplate.*` | Labels shared by every activity page (instructions heading, completion message, back link) |
| `pages.topicTemplate.*` | Labels shared by every topic page (TOC heading, prev/next links) |
| `pages.notFound.*` | The 404 page |

## Adding or renaming a topic

Edit `src/content/topics.ts`. Each entry in the `topics` array is one topic:

```ts
{
  slug: "topic-05",        // becomes the URL /topics/topic-05
  number: "05",             // shown in the color block on list rows
  tone: "seafoam",           // "seafoam" | "rose" | "yellow" | "indigo"
  title: "[Topic title]",
  dek: { lines: 2 },         // short paragraph on list rows — skeleton for now
  heroLabel: "[TOPIC LABEL]",
  toc: ["[Section heading]", "..."],
  sections: [{ heading: "[Section heading]", body: { lines: 4 } }],
  keyIdea: { heading: "[Key idea]", body: { lines: 2 } },
  activitySlot: "activity-multiple-choice", // slug of an activity from activities.ts
}
```

Add or remove entries freely — the `/topics` index, home page list, and prev/next navigation on topic pages all update automatically. Order in the array is the order they appear everywhere, including which topic is "previous"/"next".

## Adding a new activity

Edit `src/content/activities.ts`. Every activity needs a `slug`, a display `name`, a `summary` skeleton, and a `config` matching one of the four mechanic shapes defined in `src/lib/activities/types.ts`:

- `multiple-choice` — one question, single- or multi-select options, per-option feedback
- `sort` — drag items (click-to-select, click-a-group) into labeled groups
- `scenario` — a branching story: nodes with choices that lead to other nodes
- `reflection` — a private, local-only textarea prompt

Copy the shape of an existing seed activity of the same kind, give it a new `slug`, and fill in the bracketed fields. Adding it to the `activities` array automatically adds it to `/activities` and makes it linkable from a topic's `activitySlot`.

## Design tokens

Colors, fonts, and spacing are defined once in `src/app/globals.css` (the `:root` and `@theme inline` blocks) and in the Bold Blocks v3 spec in the original build prompt. Don't hard-code hex values in components — use the Tailwind utilities (`bg-indigo`, `text-ink`, etc.) that already map to those tokens.
