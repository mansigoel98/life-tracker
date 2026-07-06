const SHEET_NAME = 'Daily_Log';
const SPREADSHEET_ID = '1RdHmwOdwta51CUaAnnEO1uhnz-eV6nbJocnv2xaKG88';
const HEADERS = [
  'id',
  'timestamp',
  'date',
  'day',
  'steps',
  'water',
  'protein',
  'weight',
  'sleep',
  'energy',
  'migraine',
  'lemonWater',
  'yoga',
  'gym',
  'skincareAm',
  'skincarePm',
  'plannedSnacks',
  'workoutType',
  'junkCount',
  'breakfast',
  'lunch',
  'snack',
  'dinner',
  'learningMinutes',
  'learningTopic',
  'confidenceMinutes',
  'englishPractice',
  'workWin',
  'gratitude',
  'notes',
  'score',
  'gymYoga',
  'greenTea',
  'breakfastCalories',
  'lunchCalories',
  'snackCalories',
  'dinnerCalories',
  'totalCalories',
];

function doPost(e) {
  try {
    const payload = JSON.parse((e.postData && e.postData.contents) || '{}');
    authorize_(payload.token);

    if (payload.action === 'appendEntry') {
      const saved = upsertEntry_(payload.entry || {});
      return json_({ ok: true, entry: saved });
    }

    return json_({ ok: false, error: 'Unknown action' });
  } catch (error) {
    return json_({ ok: false, error: String(error) });
  }
}

function doGet(e) {
  try {
    const params = e.parameter || {};
    authorize_(params.token);

    let payload;
    if (params.action === 'list') {
      payload = { ok: true, entries: listEntries_() };
    } else {
      ensureSheet_();
      payload = { ok: true, message: 'Mansi Life Tracker backend is ready.' };
    }

    if (params.callback) {
      return ContentService.createTextOutput(
        `${params.callback}(${JSON.stringify(payload)});`,
      ).setMimeType(ContentService.MimeType.JAVASCRIPT);
    }

    return json_(payload);
  } catch (error) {
    const payload = { ok: false, error: String(error) };
    if (e.parameter && e.parameter.callback) {
      return ContentService.createTextOutput(
        `${e.parameter.callback}(${JSON.stringify(payload)});`,
      ).setMimeType(ContentService.MimeType.JAVASCRIPT);
    }
    return json_(payload);
  }
}

function authorize_(token) {
  const requiredToken =
    PropertiesService.getScriptProperties().getProperty('TRACKER_TOKEN');
  if (requiredToken && token !== requiredToken) {
    throw new Error('Unauthorized');
  }
}

function upsertEntry_(entry) {
  const sheet = ensureSheet_();
  const row = HEADERS.map((key) => valueFor_(entry, key));
  const id = entry.id || `entry-${entry.date}`;
  const existingRow = findRowById_(sheet, id);

  if (existingRow > 0) {
    sheet.getRange(existingRow, 1, 1, HEADERS.length).setValues([row]);
  } else {
    sheet.appendRow(row);
  }

  return entry;
}

function listEntries_() {
  const sheet = ensureSheet_();
  const values = sheet.getDataRange().getValues();
  if (values.length <= 1) return [];

  const headers = values[0];
  return values.slice(1).map((row) => {
    const entry = {};
    headers.forEach((header, index) => {
      entry[header] = row[index];
    });
    return entry;
  });
}

function ensureSheet_() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  const headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
  headerRange.setValues([HEADERS]);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#0f5f5c');
  headerRange.setFontColor('#ffffff');
  sheet.setFrozenRows(1);

  return sheet;
}

function findRowById_(sheet, id) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return -1;
  const ids = sheet.getRange(2, 1, lastRow - 1, 1).getValues();
  for (let index = 0; index < ids.length; index += 1) {
    if (ids[index][0] === id) {
      return index + 2;
    }
  }
  return -1;
}

function valueFor_(entry, key) {
  if (key === 'id') return entry.id || `entry-${entry.date}`;
  if (key === 'timestamp') return entry.timestamp || new Date().toISOString();
  return entry[key] === undefined ? '' : entry[key];
}

function json_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
