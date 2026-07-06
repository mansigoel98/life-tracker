# Mansi Life Tracker

A GitHub Pages friendly personal tracker for daily health, meals, movement,
career learning, confidence practice, skincare, and weekly metrics.

The website is the main UI. Google Sheets is the database.

## What is included

- Mobile-first daily check-in form
- 12k steps, 2L water, 70g protein, yoga, gym, lemon water, skincare, learning,
  confidence, migraine, and meal tracking
- Weekly dashboard with progress cards, chart, heatmap, and recent entries
- Daily routine, vegetarian meal rotation, weekend food prep
- Gym, yoga, and confidence-building library
- Google Apps Script backend to append/read Google Sheet rows
- Local browser storage fallback, so the app works before Sheets is connected

## Local preview

Open `index.html` directly in your browser.

For a phone-like preview on your laptop:

```bash
cd mansi-life-tracker
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Google Sheets setup

1. Create a Google Sheet named `Mansi Life Tracker`.
2. Open `Extensions` > `Apps Script`.
3. Paste the contents of `apps-script/Code.gs`.
4. Optional: set a token.
   - Apps Script left sidebar: `Project Settings`
   - `Script Properties`
   - Add property `TRACKER_TOKEN`
   - Set a private value only you know
5. Click `Deploy` > `New deployment`.
6. Select type `Web app`.
7. Execute as: `Me`.
8. Who has access: `Anyone with the link`.
9. Copy the Web App URL.
10. Open the tracker website, go to `Setup`, paste the URL, and save.

If you set `TRACKER_TOKEN`, paste the same token in the tracker setup screen.

## GitHub Pages setup

1. Create a new GitHub repo under `mansigoel98`, for example
   `mansi-life-tracker`.
2. Push this folder to the repo.
3. In GitHub, open `Settings` > `Pages`.
4. Source: deploy from branch.
5. Branch: `main`, folder: `/root`.
6. Open the Pages URL on laptop or phone.

Expected URL if you use the repo name above:

```text
https://mansigoel98.github.io/mansi-life-tracker/
```

Recommended repository visibility:

- Use a public repo for the simplest free GitHub Pages setup.
- Do not commit your Apps Script Web App URL or token. Paste them only inside
  the app's Setup screen, where they stay in your browser.

## Data notes

- The app stores entries locally first, then sends them to Google Sheets.
- The Apps Script upserts by date-based ID, so saving the same date again updates
  the row instead of creating duplicates.
- `Sync from Sheet` reads rows back into the browser using JSONP.
- The Apps Script URL and token are saved only in your browser local storage, not
  inside the public app code.
