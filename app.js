const STORAGE_KEYS = {
  entries: "mansiLifeTracker.entries",
  settings: "mansiLifeTracker.settings",
};

const DEFAULT_SETTINGS = {
  scriptUrl: "",
  scriptToken: "",
  goals: {
    steps: 12000,
    water: 2,
    protein: 70,
    learning: 25,
    confidence: 5,
    sleep: 7,
  },
};

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const mealPlan = {
  Monday: {
    breakfast: "Besan chilla with paneer stuffing + mint curd",
    lunch: "Rajma, rice, cucumber salad, curd",
    snack: "Apple + roasted chana, buttermilk + makhana",
    dinner: "Tofu bhurji + 2 phulkas + sauteed beans",
  },
  Tuesday: {
    breakfast: "Greek yogurt bowl with banana, chia, nuts",
    lunch: "Dal tadka, 2 phulkas, bhindi, salad",
    snack: "Sprouts chaat, fruit + peanuts",
    dinner: "Vegetable khichdi + curd + salad",
  },
  Wednesday: {
    breakfast: "Paneer or tofu sandwich + cucumber",
    lunch: "Chole, 2 phulkas, onion cucumber salad",
    snack: "Coconut water + peanuts, protein lassi",
    dinner: "Moong dal cheela + curd",
  },
  Thursday: {
    breakfast: "Oats in milk + chia + nuts + fruit",
    lunch: "Soya chunks pulao + raita + salad",
    snack: "Makhana with chai, hummus with cucumber sticks",
    dinner: "Palak paneer + 2 phulkas",
  },
  Friday: {
    breakfast: "Idli + sambar + curd",
    lunch: "Paneer or tofu bowl with rice, sabzi, salad",
    snack: "Guava + roasted chana, homemade trail mix",
    dinner: "Dal soup + veggie stir fry + 1-2 phulkas",
  },
  Saturday: {
    breakfast: "Paneer paratha + curd",
    lunch: "Masoor dal, jeera rice, salad, sabzi",
    snack: "Fruit smoothie, sprouts bhel",
    dinner: "High-protein pasta with veggies + tofu or paneer",
  },
  Sunday: {
    breakfast: "Dosa + sambar + peanut chutney",
    lunch: "Kadhi + rice + salad + veg",
    snack: "Buttermilk + makhana, paneer or tofu tikka",
    dinner: "Light dalia or upma with sprouts or dal",
  },
};

const routine = [
  ["7:15 am", "Wake up, water, wash face, no scrolling"],
  ["7:20 am", "AM skincare: cleanser, Vitamin C, moisturizer, sunscreen"],
  ["7:35 am", "Gym, yoga, or walk based on the weekly movement plan"],
  ["8:15 am", "High-protein breakfast and pack snack box"],
  ["9:30 am", "Office and commute block begins"],
  ["11:15 am", "Snack 1 before hunger becomes a migraine trigger"],
  ["1:00 pm", "Lunch with one protein anchor and normal carbs"],
  ["4:30 pm", "Snack 2 with chai or coffee, avoid random namkeen loops"],
  ["7:30 pm", "Reach home, change, wash face, 10 minutes quiet"],
  ["8:15 pm", "Light protein-focused dinner"],
  ["9:00 pm", "25-minute career learning block"],
  ["9:30 pm", "5 to 20 minutes confidence or English practice"],
  ["10:00 pm", "Vibhor, family, fun, or decompression"],
  ["10:45 pm", "PM skincare and low-stimulation wind down"],
  ["11:30 pm", "Sleep window starts"],
];

const weekendPrep = [
  ["Boil rajma/chole", "2-3 portions for Monday and Wednesday lunch"],
  ["Make sprouts", "2-3 snack portions with onion, tomato, lemon"],
  ["Roast makhana", "4 office snack portions"],
  ["Pack roasted chana", "4 grab-and-go snack portions"],
  ["Chop salad basics", "Cucumber, carrot, lemon, onion for 3 days"],
  ["Make green chutney", "For chilla, sandwich, and snack bowls"],
  ["Marinate tofu/paneer", "2 portions for fast dinners"],
  ["Boil dal base", "Use for khichdi, dal soup, or cheela batter"],
];

const workouts = [
  {
    title: "Gym A: Lower body + core",
    tag: "Monday",
    steps: [
      "Treadmill walk - 5 min",
      "Bodyweight squats - 2 x 12",
      "Goblet squat or leg press - 3 x 10",
      "Romanian deadlift with dumbbells - 3 x 10",
      "Glute bridge or hip thrust - 3 x 12",
      "Walking lunges or split squats - 2 x 10 each leg",
      "Plank - 3 x 25-40 sec",
      "Cool down walk - 5 min",
    ],
  },
  {
    title: "Yoga A: Migraine-friendly flow",
    tag: "Tuesday",
    steps: [
      "Seated breathing - 2 min",
      "Neck side stretch - 1 min each side",
      "Cat-cow - 2 min",
      "Child's pose - 2 min",
      "Low lunge - 1 min each side",
      "Supine hamstring stretch - 1 min each leg",
      "Legs on wall - 3-5 min",
      "Savasana - 3 min",
    ],
  },
  {
    title: "Gym B: Upper body + core",
    tag: "Wednesday",
    steps: [
      "Cross-trainer or treadmill - 5 min",
      "Lat pulldown - 3 x 10",
      "Seated cable row - 3 x 10",
      "Dumbbell shoulder press - 2 x 10",
      "Chest press or incline push-up - 3 x 10",
      "Bicep curl - 2 x 12",
      "Tricep rope pushdown - 2 x 12",
      "Dead bug - 3 x 10 each side",
    ],
  },
  {
    title: "Yoga B: Strength + flexibility",
    tag: "Thursday",
    steps: [
      "Easy breathing - 2 min",
      "Sun salutation - 3 slow rounds",
      "Chair pose - 3 x 30 sec",
      "Warrior 2 - 45 sec each side",
      "Triangle pose - 45 sec each side",
      "Bridge pose - 3 x 10",
      "Bird dog - 2 x 10 each side",
      "Seated forward fold and twist - 4 min",
    ],
  },
  {
    title: "Gym C: Full body",
    tag: "Friday",
    steps: [
      "Brisk treadmill walk - 7 min",
      "Kettlebell or DB deadlift - 3 x 10",
      "Leg press or squats - 3 x 10",
      "Lat pulldown - 3 x 10",
      "Dumbbell chest press - 3 x 10",
      "Step-ups - 2 x 10 each leg",
      "Farmer carry - 3 x 30 sec",
      "Side plank - 2 x 20 sec each side",
    ],
  },
  {
    title: "Sunday restorative yoga",
    tag: "Sunday",
    steps: [
      "Child's pose - 3 min",
      "Reclined butterfly - 3 min",
      "Legs on wall - 5 min",
      "Supine twist - 2 min each side",
      "Savasana - 5 min",
    ],
  },
];

const learningByDay = {
  Monday: "Java deep dive",
  Tuesday: "Kubernetes basics",
  Wednesday: "System design",
  Thursday: "DSA practice",
  Friday: "AI tools and prompting",
  Saturday: "Deep learning block",
  Sunday: "Weekly review",
};

const workoutByDay = {
  Monday: "Gym A - lower body",
  Tuesday: "Yoga A - migraine friendly",
  Wednesday: "Gym B - upper body",
  Thursday: "Yoga B - strength and flexibility",
  Friday: "Gym C - full body",
  Saturday: "Walk only",
  Sunday: "Restorative yoga",
};

const confidenceDrills = [
  ["5-minute audio", "Speak on today's topic. Listen once. Note one improvement."],
  ["Meeting phrase", "Use one phrase like 'The trade-off here is...' in a real meeting."],
  ["Read aloud", "Read 5 pages and underline 3 phrases you can reuse."],
  ["Explain simply", "Explain one Java or system design concept like teaching a junior."],
  ["Story rep", "Tell one small life story with beginning, middle, and end."],
  ["LinkedIn draft", "Write one short backend learning post. Publish later if ready."],
];

let entries = [];
let settings = structuredClone(DEFAULT_SETTINGS);

document.addEventListener("DOMContentLoaded", () => {
  loadState();
  hydrateStaticContent();
  bindEvents();
  setTodayDefaults();
  renderAll();
  updateSyncPill();
});

function loadState() {
  entries = safeParse(localStorage.getItem(STORAGE_KEYS.entries), []);
  settings = {
    ...structuredClone(DEFAULT_SETTINGS),
    ...safeParse(localStorage.getItem(STORAGE_KEYS.settings), {}),
  };
  settings.goals = {
    ...DEFAULT_SETTINGS.goals,
    ...(settings.goals || {}),
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEYS.entries, JSON.stringify(entries));
  localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(settings));
}

function safeParse(value, fallback) {
  try {
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function bindEvents() {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => showView(button.dataset.view));
  });

  document.getElementById("dailyForm").addEventListener("submit", saveEntry);
  document.getElementById("prefillButton").addEventListener("click", prefillMeals);
  document.getElementById("resetFormButton").addEventListener("click", () => {
    document.getElementById("dailyForm").reset();
    setTodayDefaults();
  });
  document.getElementById("saveSettingsButton").addEventListener("click", saveConnection);
  document.getElementById("testConnectionButton").addEventListener("click", testConnection);
  document.getElementById("saveGoalsButton").addEventListener("click", saveGoals);
  document.getElementById("syncNowButton").addEventListener("click", syncFromSheet);
  document.getElementById("exportButton").addEventListener("click", exportJson);
  document.getElementById("seedDemoButton").addEventListener("click", seedDemoWeek);
  document.getElementById("clearDataButton").addEventListener("click", clearLocalData);
}

function showView(viewId) {
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("active", view.id === viewId);
  });
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === viewId);
  });
  if (viewId === "dashboard") {
    renderDashboard();
  }
}

function hydrateStaticContent() {
  const topicSelect = document.getElementById("learningTopic");
  topicSelect.innerHTML = Object.values(learningByDay)
    .map((topic) => `<option>${topic}</option>`)
    .join("");

  document.getElementById("routineTimeline").innerHTML = routine
    .map(
      ([time, task]) => `
        <article class="timeline-item">
          <div class="timeline-time">${time}</div>
          <div>${task}</div>
        </article>
      `,
    )
    .join("");

  document.getElementById("mealPlan").innerHTML = Object.entries(mealPlan)
    .map(
      ([day, meals]) => `
        <article class="meal-day">
          <h3>${day}</h3>
          <ul>
            <li><strong>Breakfast:</strong> ${meals.breakfast}</li>
            <li><strong>Lunch:</strong> ${meals.lunch}</li>
            <li><strong>Snack:</strong> ${meals.snack}</li>
            <li><strong>Dinner:</strong> ${meals.dinner}</li>
          </ul>
        </article>
      `,
    )
    .join("");

  document.getElementById("prepGrid").innerHTML = weekendPrep
    .map(
      ([title, detail]) => `
        <article class="prep-card">
          <h3>${title}</h3>
          <p class="muted">${detail}</p>
        </article>
      `,
    )
    .join("");

  document.getElementById("workoutLibrary").innerHTML = workouts
    .map(
      (workout) => `
        <article class="library-card">
          <header>
            <h3>${workout.title}</h3>
            <span class="tag">${workout.tag}</span>
          </header>
          <ol>
            ${workout.steps.map((step) => `<li>${step}</li>`).join("")}
          </ol>
        </article>
      `,
    )
    .join("");

  document.getElementById("confidenceGrid").innerHTML = confidenceDrills
    .map(
      ([title, detail]) => `
        <article class="confidence-card">
          <h3>${title}</h3>
          <p class="muted">${detail}</p>
        </article>
      `,
    )
    .join("");

  document.getElementById("goalSteps").value = settings.goals.steps;
  document.getElementById("goalWater").value = settings.goals.water;
  document.getElementById("goalProtein").value = settings.goals.protein;
  document.getElementById("goalLearning").value = settings.goals.learning;
  document.getElementById("goalConfidence").value = settings.goals.confidence;
  document.getElementById("goalSleep").value = settings.goals.sleep;
  document.getElementById("scriptUrl").value = settings.scriptUrl || "";
  document.getElementById("scriptToken").value = settings.scriptToken || "";
}

function setTodayDefaults() {
  const today = new Date();
  const iso = toIsoDate(today);
  document.getElementById("entryDate").value = iso;
  document.getElementById("migraine").value = "0";
  const day = dayNames[today.getDay()];
  document.getElementById("learningTopic").value = learningByDay[day];
  prefillMeals();
  loadEntryForDate(iso);
}

function prefillMeals() {
  const date = document.getElementById("entryDate").value || toIsoDate(new Date());
  const day = dayNames[new Date(`${date}T00:00:00`).getDay()];
  const meals = mealPlan[day];
  document.getElementById("breakfast").value = meals.breakfast;
  document.getElementById("lunch").value = meals.lunch;
  document.getElementById("snack").value = meals.snack;
  document.getElementById("dinner").value = meals.dinner;
  document.getElementById("todayHeadline").textContent = `${day}'s plan is ready.`;
  document.getElementById("todaySubline").textContent =
    `${meals.breakfast} | ${learningByDay[day]}`;
}

function loadEntryForDate(date) {
  const existing = [...entries].reverse().find((entry) => entry.date === date);
  if (!existing) return;

  const form = document.getElementById("dailyForm");
  Object.entries(existing).forEach(([key, value]) => {
    const input = form.elements[key];
    if (!input) return;
    if (input.type === "checkbox") {
      input.checked = Boolean(value);
    } else {
      input.value = value ?? "";
    }
  });
}

function saveEntry(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form).entries());
  const checkboxIds = [
    "lemonWater",
    "yoga",
    "gym",
    "skincareAm",
    "skincarePm",
    "plannedSnacks",
  ];
  checkboxIds.forEach((id) => {
    data[id] = document.getElementById(id).checked;
  });

  const entry = normalizeEntry(data);
  const existingIndex = entries.findIndex((item) => item.date === entry.date);
  if (existingIndex >= 0) {
    entries[existingIndex] = { ...entries[existingIndex], ...entry };
  } else {
    entries.push(entry);
  }
  entries.sort((a, b) => a.date.localeCompare(b.date));
  saveState();
  renderAll();
  setStatus("saveStatus", "Saved locally. Syncing to Google Sheets...");
  syncEntry(entry);
}

function normalizeEntry(data) {
  const entry = {
    id: data.id || `entry-${data.date}`,
    timestamp: new Date().toISOString(),
    date: data.date,
    day: dayNames[new Date(`${data.date}T00:00:00`).getDay()],
    steps: numberOrZero(data.steps),
    water: numberOrZero(data.water),
    protein: numberOrZero(data.protein),
    weight: numberOrBlank(data.weight),
    sleep: numberOrZero(data.sleep),
    energy: numberOrBlank(data.energy),
    migraine: numberOrZero(data.migraine),
    lemonWater: Boolean(data.lemonWater),
    yoga: Boolean(data.yoga),
    gym: Boolean(data.gym),
    skincareAm: Boolean(data.skincareAm),
    skincarePm: Boolean(data.skincarePm),
    plannedSnacks: Boolean(data.plannedSnacks),
    workoutType: data.workoutType || "",
    junkCount: numberOrZero(data.junkCount),
    breakfast: data.breakfast || "",
    lunch: data.lunch || "",
    snack: data.snack || "",
    dinner: data.dinner || "",
    learningMinutes: numberOrZero(data.learningMinutes),
    learningTopic: data.learningTopic || "",
    confidenceMinutes: numberOrZero(data.confidenceMinutes),
    englishPractice: data.englishPractice || "",
    workWin: data.workWin || "",
    gratitude: data.gratitude || "",
    notes: data.notes || "",
  };
  entry.score = calculateScore(entry);
  return entry;
}

function numberOrZero(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function numberOrBlank(value) {
  if (value === "" || value === null || value === undefined) return "";
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : "";
}

function calculateScore(entry) {
  const goals = settings.goals;
  const checks = [
    entry.steps >= goals.steps,
    entry.water >= goals.water,
    entry.protein >= goals.protein,
    entry.sleep >= goals.sleep,
    entry.lemonWater,
    entry.yoga || entry.gym || entry.workoutType === "Walk only",
    entry.skincareAm,
    entry.skincarePm,
    entry.plannedSnacks,
    entry.junkCount <= 1,
    entry.learningMinutes >= goals.learning,
    entry.confidenceMinutes >= goals.confidence,
  ];
  return Math.round((checks.filter(Boolean).length / checks.length) * 100);
}

function renderAll() {
  renderTodayScore();
  renderDashboard();
}

function renderTodayScore() {
  const todayEntry = entries.find((entry) => entry.date === toIsoDate(new Date()));
  const score = todayEntry?.score || 0;
  document.getElementById("todayScore").textContent = `${score}%`;
  document.getElementById("todayRing").style.setProperty("--ring", `${score * 3.6}deg`);
  document.getElementById("scoreLabel").textContent = todayEntry
    ? score >= 80
      ? "Strong day"
      : score >= 55
        ? "Good foundation"
        : "Minimum mode counts"
    : "Not logged yet";
}

function renderDashboard() {
  const sorted = [...entries].sort((a, b) => a.date.localeCompare(b.date));
  const last7 = sorted.slice(-7);
  const goals = settings.goals;
  const avg = (field) =>
    last7.length
      ? last7.reduce((sum, entry) => sum + Number(entry[field] || 0), 0) / last7.length
      : 0;

  const metrics = [
    {
      label: "Steps avg",
      value: Math.round(avg("steps")).toLocaleString("en-IN"),
      goal: goals.steps.toLocaleString("en-IN"),
      pct: avg("steps") / goals.steps,
    },
    {
      label: "Water avg",
      value: `${avg("water").toFixed(1)}L`,
      goal: `${goals.water}L`,
      pct: avg("water") / goals.water,
    },
    {
      label: "Protein avg",
      value: `${Math.round(avg("protein"))}g`,
      goal: `${goals.protein}g`,
      pct: avg("protein") / goals.protein,
    },
    {
      label: "Score avg",
      value: `${Math.round(avg("score"))}%`,
      goal: "80%",
      pct: avg("score") / 80,
    },
    {
      label: "Workout days",
      value: `${last7.filter((entry) => entry.yoga || entry.gym).length}/7`,
      goal: "5/7",
      pct: last7.filter((entry) => entry.yoga || entry.gym).length / 5,
    },
    {
      label: "Skincare pairs",
      value: `${last7.filter((entry) => entry.skincareAm && entry.skincarePm).length}/7`,
      goal: "7/7",
      pct: last7.filter((entry) => entry.skincareAm && entry.skincarePm).length / 7,
    },
    {
      label: "Learning days",
      value: `${last7.filter((entry) => entry.learningMinutes >= goals.learning).length}/7`,
      goal: "5/7",
      pct: last7.filter((entry) => entry.learningMinutes >= goals.learning).length / 5,
    },
    {
      label: "Confidence days",
      value: `${last7.filter((entry) => entry.confidenceMinutes >= goals.confidence).length}/7`,
      goal: "5/7",
      pct: last7.filter((entry) => entry.confidenceMinutes >= goals.confidence).length / 5,
    },
  ];

  document.getElementById("metricGrid").innerHTML = metrics
    .map(
      (metric) => `
        <article class="metric-card">
          <div class="metric-top">
            <div>
              <p class="eyebrow">${metric.label}</p>
              <div class="metric-value">${metric.value}</div>
            </div>
            <span class="mini-badge">${metric.goal}</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" style="width: ${Math.min(100, Math.round(metric.pct * 100))}%"></div>
          </div>
        </article>
      `,
    )
    .join("");

  renderWeeklyChart(last7);
  renderHeatmap(sorted);
  renderRecentRows(sorted.slice(-10).reverse());
}

function renderWeeklyChart(last7) {
  const canvas = document.getElementById("weeklyChart");
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);

  if (!last7.length) {
    ctx.fillStyle = "#66706d";
    ctx.font = "700 24px system-ui";
    ctx.fillText("Add your first daily entry to see trends.", 40, 80);
    return;
  }

  const plot = { x: 72, y: 40, w: width - 116, h: height - 110 };
  const labels = last7.map((entry) => entry.day.slice(0, 3));
  const series = [
    {
      name: "Steps",
      color: "#0f5f5c",
      values: last7.map((entry) => Math.min(1.15, entry.steps / settings.goals.steps)),
    },
    {
      name: "Water",
      color: "#ee765f",
      values: last7.map((entry) => Math.min(1.15, entry.water / settings.goals.water)),
    },
    {
      name: "Protein",
      color: "#f5c35b",
      values: last7.map((entry) => Math.min(1.15, entry.protein / settings.goals.protein)),
    },
  ];

  ctx.strokeStyle = "#dce4de";
  ctx.lineWidth = 2;
  for (let i = 0; i <= 4; i += 1) {
    const y = plot.y + (plot.h / 4) * i;
    ctx.beginPath();
    ctx.moveTo(plot.x, y);
    ctx.lineTo(plot.x + plot.w, y);
    ctx.stroke();
  }

  const barWidth = Math.min(28, plot.w / Math.max(1, last7.length) / 5);
  last7.forEach((entry, i) => {
    const groupX = plot.x + (plot.w / last7.length) * i + plot.w / last7.length / 2;
    series.forEach((item, j) => {
      const value = item.values[i];
      const barHeight = Math.max(4, Math.min(plot.h, value * plot.h));
      ctx.fillStyle = item.color;
      ctx.fillRect(
        groupX + (j - 1) * (barWidth + 8) - barWidth / 2,
        plot.y + plot.h - barHeight,
        barWidth,
        barHeight,
      );
    });
    ctx.fillStyle = "#66706d";
    ctx.font = "700 16px system-ui";
    ctx.textAlign = "center";
    ctx.fillText(labels[i], groupX, plot.y + plot.h + 32);
  });

  ctx.textAlign = "left";
  series.forEach((item, i) => {
    const x = plot.x + i * 130;
    ctx.fillStyle = item.color;
    ctx.fillRect(x, height - 36, 18, 18);
    ctx.fillStyle = "#172121";
    ctx.font = "800 16px system-ui";
    ctx.fillText(item.name, x + 26, height - 21);
  });
}

function renderHeatmap(sortedEntries) {
  const map = new Map(sortedEntries.map((entry) => [entry.date, entry]));
  const cells = [];
  for (let offset = 27; offset >= 0; offset -= 1) {
    const date = new Date();
    date.setDate(date.getDate() - offset);
    const iso = toIsoDate(date);
    const entry = map.get(iso);
    const score = entry?.score || 0;
    const level = score >= 85 ? 4 : score >= 65 ? 3 : score >= 40 ? 2 : score > 0 ? 1 : 0;
    cells.push(`<div class="heat-cell" data-level="${level}" title="${iso}: ${score}%"></div>`);
  }
  document.getElementById("heatmap").innerHTML = cells.join("");
}

function renderRecentRows(rows) {
  document.getElementById("recentRows").innerHTML =
    rows
      .map(
        (entry) => `
          <tr>
            <td>${entry.date}</td>
            <td><strong>${entry.score}%</strong></td>
            <td>${entry.steps.toLocaleString("en-IN")}</td>
            <td>${entry.water}L</td>
            <td>${entry.protein}g</td>
            <td>${entry.workoutType || (entry.gym ? "Gym" : entry.yoga ? "Yoga" : "Rest")}</td>
            <td>${entry.migraine}/5</td>
            <td>${entry.learningMinutes} min</td>
          </tr>
        `,
      )
      .join("") ||
    `<tr><td colspan="8">No entries yet. Save today's check-in to start.</td></tr>`;
}

async function syncEntry(entry) {
  if (!settings.scriptUrl) {
    setStatus("saveStatus", "Saved locally. Add Apps Script URL in Setup to sync.");
    updateSyncPill();
    return;
  }

  const payload = {
    action: "appendEntry",
    token: settings.scriptToken || "",
    entry,
  };

  try {
    await fetch(settings.scriptUrl, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });
    setStatus("saveStatus", "Saved locally and sent to Google Sheets.");
    updateSyncPill("Synced");
  } catch (error) {
    console.error(error);
    setStatus("saveStatus", "Saved locally. Sheet sync failed.");
    updateSyncPill("Sync issue");
  }
}

function saveConnection() {
  settings.scriptUrl = document.getElementById("scriptUrl").value.trim();
  settings.scriptToken = document.getElementById("scriptToken").value.trim();
  saveState();
  updateSyncPill();
  setStatus("settingsStatus", "Connection saved in this browser.");
}

function saveGoals() {
  settings.goals = {
    steps: numberOrZero(document.getElementById("goalSteps").value) || DEFAULT_SETTINGS.goals.steps,
    water: numberOrZero(document.getElementById("goalWater").value) || DEFAULT_SETTINGS.goals.water,
    protein:
      numberOrZero(document.getElementById("goalProtein").value) ||
      DEFAULT_SETTINGS.goals.protein,
    learning:
      numberOrZero(document.getElementById("goalLearning").value) ||
      DEFAULT_SETTINGS.goals.learning,
    confidence:
      numberOrZero(document.getElementById("goalConfidence").value) ||
      DEFAULT_SETTINGS.goals.confidence,
    sleep: numberOrZero(document.getElementById("goalSleep").value) || DEFAULT_SETTINGS.goals.sleep,
  };
  entries = entries.map((entry) => ({ ...entry, score: calculateScore(entry) }));
  saveState();
  renderAll();
  setStatus("settingsStatus", "Goals saved and scores recalculated.");
}

async function testConnection() {
  saveConnection();
  if (!settings.scriptUrl) {
    setStatus("settingsStatus", "Paste an Apps Script URL first.");
    return;
  }
  setStatus("settingsStatus", "Testing by loading rows...");
  try {
    const data = await fetchSheetRows();
    setStatus("settingsStatus", `Connection works. Loaded ${data.entries.length} rows.`);
  } catch (error) {
    console.error(error);
    setStatus("settingsStatus", "Could not read Sheet. Check URL, deployment access, or token.");
  }
}

async function syncFromSheet() {
  if (!settings.scriptUrl) {
    setStatus("saveStatus", "Add Apps Script URL in Setup first.");
    showView("setup");
    return;
  }
  updateSyncPill("Loading...");
  try {
    const data = await fetchSheetRows();
    mergeEntries(data.entries || []);
    saveState();
    renderAll();
    updateSyncPill("Loaded");
  } catch (error) {
    console.error(error);
    updateSyncPill("Read failed");
  }
}

function fetchSheetRows() {
  return new Promise((resolve, reject) => {
    const callbackName = `trackerCallback_${Date.now()}`;
    const script = document.createElement("script");
    const url = new URL(settings.scriptUrl);
    url.searchParams.set("action", "list");
    url.searchParams.set("callback", callbackName);
    if (settings.scriptToken) {
      url.searchParams.set("token", settings.scriptToken);
    }

    const timer = window.setTimeout(() => {
      cleanup();
      reject(new Error("Sheet request timed out"));
    }, 12000);

    window[callbackName] = (payload) => {
      cleanup();
      resolve(payload);
    };

    script.onerror = () => {
      cleanup();
      reject(new Error("Could not load Apps Script"));
    };

    function cleanup() {
      window.clearTimeout(timer);
      delete window[callbackName];
      script.remove();
    }

    script.src = url.toString();
    document.body.appendChild(script);
  });
}

function mergeEntries(incoming) {
  const byDate = new Map(entries.map((entry) => [entry.date, entry]));
  incoming.forEach((entry) => {
    if (!entry.date) return;
    const normalized = normalizeEntryFromSheet(entry);
    byDate.set(normalized.date, { ...(byDate.get(normalized.date) || {}), ...normalized });
  });
  entries = [...byDate.values()].sort((a, b) => a.date.localeCompare(b.date));
}

function normalizeEntryFromSheet(entry) {
  const normalized = {
    ...entry,
    steps: numberOrZero(entry.steps),
    water: numberOrZero(entry.water),
    protein: numberOrZero(entry.protein),
    sleep: numberOrZero(entry.sleep),
    energy: numberOrBlank(entry.energy),
    migraine: numberOrZero(entry.migraine),
    lemonWater: entry.lemonWater === true || entry.lemonWater === "TRUE",
    yoga: entry.yoga === true || entry.yoga === "TRUE",
    gym: entry.gym === true || entry.gym === "TRUE",
    skincareAm: entry.skincareAm === true || entry.skincareAm === "TRUE",
    skincarePm: entry.skincarePm === true || entry.skincarePm === "TRUE",
    plannedSnacks: entry.plannedSnacks === true || entry.plannedSnacks === "TRUE",
    junkCount: numberOrZero(entry.junkCount),
    learningMinutes: numberOrZero(entry.learningMinutes),
    confidenceMinutes: numberOrZero(entry.confidenceMinutes),
  };
  normalized.score = calculateScore(normalized);
  return normalized;
}

function updateSyncPill(label) {
  const pill = document.getElementById("syncPill");
  if (label) {
    pill.textContent = label;
    return;
  }
  pill.textContent = settings.scriptUrl ? "Sheets connected" : "Local mode";
}

function setStatus(id, message) {
  const element = document.getElementById(id);
  if (element) element.textContent = message;
}

function exportJson() {
  const blob = new Blob([JSON.stringify({ settings, entries }, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `mansi-life-tracker-${toIsoDate(new Date())}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function seedDemoWeek() {
  const demo = [];
  for (let i = 6; i >= 0; i -= 1) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const day = dayNames[date.getDay()];
    const meals = mealPlan[day];
    demo.push(
      normalizeEntry({
        date: toIsoDate(date),
        steps: 8200 + Math.round(Math.random() * 5200),
        water: (1.4 + Math.random() * 0.9).toFixed(1),
        protein: 48 + Math.round(Math.random() * 30),
        sleep: (6 + Math.random() * 1.8).toFixed(1),
        energy: 3 + Math.floor(Math.random() * 3),
        migraine: Math.floor(Math.random() * 3),
        lemonWater: Math.random() > 0.35,
        yoga: day === "Tuesday" || day === "Thursday" || day === "Sunday",
        gym: day === "Monday" || day === "Wednesday" || day === "Friday",
        skincareAm: Math.random() > 0.15,
        skincarePm: Math.random() > 0.2,
        plannedSnacks: Math.random() > 0.25,
        workoutType: workoutByDay[day],
        junkCount: Math.random() > 0.7 ? 2 : 0,
        breakfast: meals.breakfast,
        lunch: meals.lunch,
        snack: meals.snack,
        dinner: meals.dinner,
        learningMinutes: day === "Sunday" ? 15 : 25,
        learningTopic: learningByDay[day],
        confidenceMinutes: 5 + Math.round(Math.random() * 15),
        englishPractice: "5 min recording",
        workWin: "Demo work note",
        gratitude: "Demo calm moment",
        notes: "",
      }),
    );
  }
  mergeEntries(demo);
  saveState();
  renderAll();
  setStatus("settingsStatus", "Demo week added locally.");
}

function clearLocalData() {
  const ok = window.confirm("Clear all local entries from this browser?");
  if (!ok) return;
  entries = [];
  saveState();
  renderAll();
  setStatus("settingsStatus", "Local entries cleared.");
}

function toIsoDate(date) {
  const copy = new Date(date);
  copy.setMinutes(copy.getMinutes() - copy.getTimezoneOffset());
  return copy.toISOString().slice(0, 10);
}
