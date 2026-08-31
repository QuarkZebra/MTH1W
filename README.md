# MTH1W — Mathematics 9

Course website for MTH1W (2026–27, semester 1). Live at **https://quarkzebra.github.io/MTH1W/**

## Adding links during the semester

Everything you edit lives in **`data.js`**. Find the day, paste the URL:

```js
{d:36, iso:"2026-10-23", topic:"Slope", num:"3.4",
 note:D("XXXX"),                        // ← blank note & practice
 ans:"", /* key: D("YYYY") */           // ← move the key id into ans after class
 extras:[
   ["Extra Slope Practice", D("fileId"), "doc"],
 ]},
```

- **`note`** — the blank note & practice problems. Empty `""` shows a greyed-out
  link with a "Coming soon" hover.
- **`ans`** — the answers. Empty `""` is greyed out. Where the KEY pdf already
  exists in Drive, its id is stashed in a comment right after `ans:""` — move it
  into the field when posting. Live answers links get the ☠︎ *"Do not look if
  you haven't done the practice"* hover.
- **`extras`** — `["Title", "url", "kind"]` where kind is `"doc"` (worksheet /
  handout / anything), `"ans"` (solutions — red with the ☠︎ warning),
  `"vid"` (video), or `"eqao"` (the day's EQAO companion sheet — dark blue
  with the ✎ icon). Every one of the 60 lesson days already carries its
  EQAO sheet from `03 MTH1W/EQAO Questions/`.
- `D("fileId")` is shorthand for a Google Drive link; pasting the full URL
  works just as well.
- Days with no note (tests, quizzes, work periods) simply have no `num` field.
- `flag: "quiz" | "review" | "test"` tints the row. Quiz days use
  `noteLabel` / `ansLabel` to rename the links.

All 60 lesson days are linked: blank note, EQAO companion sheet, and at least
one video. Answers stay empty until after class — where the KEY pdf already
exists in Drive, Units 1–3 have its id stashed in a comment beside `ans:""`.

The site works out the rest from the real date: the **Today** card, the
current-unit highlight, the progress bar, and which units show
Done / Current / Up Next.

## Publishing changes

```
git add -A
git commit -m "Add day 36 note"
git push
```

GitHub Pages redeploys automatically within a minute or two.

## Sharing reminder

Drive links only open for students once the files are shared ("anyone with the
link → viewer"). Don't link-share a whole unit folder wholesale — each unit
folder contains an `Assessments/` subfolder, and Drive can't revoke inherited
link-sharing on a child. Share the note/key pdfs themselves, or move
`Assessments/` out first.

## Handy tricks

- **Preview a future date**: append `?today=2026-10-23` to the URL to see the
  site as it will appear on that day.
- Theme toggle is remembered per student (localStorage), defaulting to their
  system preference.
- The background is decorative canvas art: EQAO-register pseudocode snippets
  type themselves out slowly on faint graph paper, print their (correct)
  output, and fade. It goes static for users with reduced-motion enabled.
