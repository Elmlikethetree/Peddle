# Peddle

A daily medical-case guessing game: read a hint, guess the diagnosis, get another hint
if you're wrong. Includes an auto-generated archive of past cases. Themed as a blue-and-gold
legal pad with a little bicycle in the logo.

It's a **static site** — just HTML/CSS/JS, no server, no database, no build step.
That makes it very cheap and easy to host.

## Files

- `index.html` — the page itself
- `style.css` — styling
- `app.js` — game logic (you shouldn't need to touch this)
- `puzzles.js` — **the file you edit to publish new cases**
- `diagnoses.js` — the list of diagnoses shown in the autocomplete box
- `admin.html` — a private helper page that turns a form into a properly-formatted
  puzzle entry, so you don't have to hand-write the JavaScript object each time

## Guessing rules

The guess box only accepts diagnoses that exist in `diagnoses.js` — typing something
that isn't in that list disables the Guess button and shows a small note under the
box. You can still type freely to filter the dropdown; you just have to end up on an
exact entry from the list (either by clicking a suggestion, arrowing down and hitting
Enter, or typing the full name exactly). This means **every answer you want to be
guessable, right or wrong, must be present in `diagnoses.js`** — including each
puzzle's `answer` and `accepted` alternates.

## Running it locally

Just double-click `index.html` — it opens directly in your browser, no server needed.

## Publishing a new daily case

1. Open `admin.html` in your browser (also just double-click it).
2. Fill in the date, hints (in the order they should be revealed), the answer, any
   accepted alternate spellings/abbreviations, and a short explanation.
3. Click **Generate entry** and copy the text it produces.
4. Open `puzzles.js`, paste the new object in as another entry in the `PUZZLES` array
   (comma-separated from the others), and save.
5. Also make sure the answer appears somewhere in `diagnoses.js`, so it's guessable
   via autocomplete.
6. Push/upload the updated `puzzles.js` (see hosting section below) — that's the whole
   publishing step.

You can write many future cases at once — anything dated after today just sits quietly
in the file until its date arrives, so you could write a month's worth of cases in one
sitting and forget about it.

**Do not upload `admin.html` if you want it truly private** — it doesn't contain your
puzzle answers, but there's no reason to publish it publicly. Easiest is to just keep
it on your own computer and only push `index.html`, `style.css`, `app.js`, `puzzles.js`,
and `diagnoses.js` to the live site.

## Hosting it (so friends can access it)

You have two easy, free options. Both give you a URL you can text/Slack to friends.

### Option A: Netlify Drop (fastest, no account needed to start)

1. Go to **https://app.netlify.com/drop**
2. Drag your whole `peddle` folder onto the page.
3. Netlify gives you a live URL immediately (something like
   `random-name-123.netlify.app`). Share that with friends.
4. To publish updates later (e.g. a new case), you can either drag the folder again,
   or — better — create a free Netlify account and connect it to a GitHub repo (see
   below) so pushing to GitHub auto-updates the site.

### Option B: GitHub Pages (best if you want it to persist and auto-update)

1. Create a free GitHub account if you don't have one, and create a new repository
   (e.g. `peddle`).
2. Upload the project files to it (via the GitHub web UI's "Add file → Upload files",
   or via `git`):
   ```
   cd peddle
   git init
   git add index.html style.css app.js puzzles.js diagnoses.js
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/peddle.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**, set the source to the `main` branch,
   root folder, and save.
4. After a minute or two your site is live at
   `https://<your-username>.github.io/peddle/`.
5. To publish a new case going forward: edit `puzzles.js` locally, then
   ```
   git add puzzles.js
   git commit -m "Add case for 2026-08-01"
   git push
   ```
   GitHub Pages redeploys automatically within a minute or so.

Either option works well; GitHub Pages is nicer long-term because your whole history
of edits is version-controlled, and it's trivial to script "add a case" as a couple of
git commands once you're comfortable with it.

### Custom domain (optional)

Both Netlify and GitHub Pages support pointing a custom domain (e.g. `peddle.com`)
at the site for free if you own one — Netlify's dashboard and GitHub's Pages settings
both have a "custom domain" field that walks you through the DNS changes.

## Running it on your phone

Once it's hosted (Option A or B above gives you a URL like
`https://yourname.github.io/peddle/`), just open that URL in your phone's browser —
the layout is already responsive down to small screens. From there you can make it
feel like a real app:

- **iPhone (Safari):** open the site, tap the Share icon, then **Add to Home Screen**.
  It'll show up as its own icon and open full-screen without browser chrome.
- **Android (Chrome):** open the site, tap the ⋮ menu, then **Add to Home screen** /
  **Install app**. Chrome will offer this automatically too, since the site includes
  a web app manifest (`manifest.json`) with an icon (`icon.svg`) and theme color.

Note: Safari doesn't support SVG icons for "Add to Home Screen" as reliably as
Android/Chrome does, so on iPhone you might see a plain screenshot-style icon instead
of the bicycle mark — if that bothers you, converting `icon.svg` to a 512×512 PNG
(any online SVG-to-PNG converter works) and swapping the file reference in
`index.html` and `manifest.json` will fix it.

**Testing before you host anywhere:** if your phone and computer are on the same
Wi-Fi network, you can preview the live site on your phone without deploying yet.
From the project folder on your computer, run:
```
python3 -m http.server 8000
```
then find your computer's local IP address (e.g. `192.168.1.23` — on Mac:
System Settings → Wi-Fi → Details; on Windows: `ipconfig` in Command Prompt), and
visit `http://192.168.1.23:8000` in your phone's browser. This only works while
your computer is on and both devices share the same network — it's a preview step,
not a substitute for actually hosting it.

## Guessing is dropdown-only

Players can type freely to filter the list, but the Guess button only enables once
the text in the box exactly matches an entry in `diagnoses.js` (selecting a suggestion
does this automatically). Free-typed text that isn't in the diagnosis bank can't be
submitted as a guess — this keeps guesses limited to the diagnosis bank rather than
open-ended text. Make sure every puzzle's `answer` and `accepted` values also appear
in `diagnoses.js`, or nobody will be able to select them.

## Mobile support

The layout is responsive — header, case card, buttons, and the archive list all
reflow for narrow screens, buttons are sized for tapping, and the input keeps a
16px font size so iOS Safari won't auto-zoom on focus. It's been designed mobile-first
enough that it should work well on any phone browser.

## Notes on how the game decides "today's case"

`app.js` looks at the visitor's **local date** and picks whichever entry in
`puzzles.js` has the latest `date` that is `<= today`. Anything with an earlier date
automatically shows up in the Archive tab. There's no timezone server involved — it's
just based on each visitor's own computer clock, same as Wordle.

## Progress tracking

Each visitor's win/loss and guesses are stored in their own browser's `localStorage`,
keyed by case ID — nothing is sent to a server, so there's no login system and no
shared leaderboard. If you want a shared leaderboard later, that's the point where
you'd need to add a lightweight backend (e.g. Supabase or Firebase) — happy to help
with that if you want it down the line.
