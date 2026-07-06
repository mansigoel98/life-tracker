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
    calories: 1600,
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

const mealCatalog = {
  "paneer-besan-chilla": {
    meal: "Breakfast",
    name: "Paneer besan chilla plate",
    portion: "2 medium chillas + 50g paneer + 1/2 cup mint curd",
    calories: 430,
    protein: 30,
    visual: "chilla",
  },
  "greek-yogurt-bowl": {
    meal: "Breakfast",
    name: "Greek yogurt fruit bowl",
    portion: "250g thick curd + 1 small banana + 1 tbsp chia + 8-10 almonds",
    calories: 420,
    protein: 24,
    visual: "bowl",
  },
  "moong-cheela-curd": {
    meal: "Breakfast",
    name: "Moong dal cheela with curd",
    portion: "2 cheelas + 3/4 cup curd + chutney + cucumber",
    calories: 360,
    protein: 22,
    visual: "chilla",
  },
  "protein-oats-bowl": {
    meal: "Breakfast",
    name: "Protein oats bowl",
    portion: "40g oats + 200ml milk + chia + nuts + berries/banana",
    calories: 430,
    protein: 22,
    visual: "bowl",
  },
  "tofu-paneer-sandwich": {
    meal: "Breakfast",
    name: "Tofu/paneer breakfast sandwich",
    portion: "2 bread slices + 80g tofu/paneer + veggies + chutney",
    calories: 400,
    protein: 25,
    visual: "sandwich",
  },
  "idli-sambar-curd": {
    meal: "Breakfast",
    name: "Idli sambar protein plate",
    portion: "3 idlis + 1.5 cups sambar + 1/2 cup curd",
    calories: 430,
    protein: 20,
    visual: "idli",
  },
  "paneer-paratha-curd": {
    meal: "Breakfast",
    name: "Paneer paratha and curd",
    portion: "1 medium paneer paratha + 3/4 cup curd + pickle/salad",
    calories: 500,
    protein: 27,
    visual: "roti",
  },
  "dosa-sambar-peanut": {
    meal: "Breakfast",
    name: "Dosa, sambar and peanut chutney",
    portion: "1 dosa + 1 cup sambar + 1 tbsp peanut chutney",
    calories: 450,
    protein: 17,
    visual: "dosa",
  },
  "rajma-protein-roti-curd": {
    meal: "Lunch",
    name: "Rajma with protein roti",
    portion: "1 cup rajma + 2 protein rotis + 1/2 cup curd + salad",
    calories: 590,
    protein: 29,
    visual: "roti",
  },
  "dal-palak-protein-roti": {
    meal: "Lunch",
    name: "Dal palak with protein roti",
    portion: "1.25 cups dal palak + 2 protein rotis + 1 cup salad",
    calories: 520,
    protein: 25,
    visual: "roti",
  },
  "soya-masala-raita": {
    meal: "Lunch",
    name: "Soya chunks masala with raita",
    portion: "40g dry soya chunks + 2 protein rotis + 1 cup raita + salad",
    calories: 590,
    protein: 32,
    visual: "roti",
  },
  "paneer-quinoa-bowl": {
    meal: "Lunch",
    name: "Paneer tikka protein roti bowl",
    portion: "80g paneer + 2 protein rotis + 1 cup veggies + chutney",
    calories: 610,
    protein: 31,
    visual: "roti",
  },
  "chole-protein-roti": {
    meal: "Lunch",
    name: "Chole with protein roti",
    portion: "1 cup chole + 2 protein rotis + onion cucumber salad",
    calories: 560,
    protein: 26,
    visual: "roti",
  },
  "paneer-bhurji-lunch": {
    meal: "Lunch",
    name: "Paneer bhurji lunch plate",
    portion: "90g paneer bhurji + 2 protein rotis + salad + chutney",
    calories: 610,
    protein: 34,
    visual: "roti",
  },
  "masoor-roti-sabzi": {
    meal: "Lunch",
    name: "Masoor dal protein roti plate",
    portion: "1.25 cups masoor dal + 2 protein rotis + 1 cup sabzi",
    calories: 520,
    protein: 27,
    visual: "roti",
  },
  "sprouts-chaas": {
    meal: "Snack",
    name: "Sprouts chaat and chaas",
    portion: "1 cup sprouts chaat + 250ml chaas",
    calories: 220,
    protein: 14,
    visual: "snackbox",
  },
  "makhana-chana": {
    meal: "Snack",
    name: "Makhana chana crunch box",
    portion: "2 cups roasted makhana + 30g roasted chana",
    calories: 260,
    protein: 13,
    visual: "snackbox",
  },
  "hummus-veg-paneer": {
    meal: "Snack",
    name: "Hummus veg sticks and paneer bites",
    portion: "1/4 cup hummus + veg sticks + 60g paneer tikka",
    calories: 320,
    protein: 19,
    visual: "snackbox",
  },
  "fruit-peanut-curd": {
    meal: "Snack",
    name: "Fruit peanut curd bowl",
    portion: "1 fruit + 1 tbsp peanut butter + 1/2 cup curd",
    calories: 300,
    protein: 13,
    visual: "bowl",
  },
  "protein-lassi-dates": {
    meal: "Snack",
    name: "Protein lassi with dates",
    portion: "250g curd blended with water + 2 dates + cinnamon",
    calories: 280,
    protein: 16,
    visual: "glass",
  },
  "office-snackbox": {
    meal: "Snack",
    name: "Office snack defense box",
    portion: "35g roasted chana + 1 cup makhana + buttermilk",
    calories: 300,
    protein: 16,
    visual: "snackbox",
  },
  "tofu-bhurji-protein-roti": {
    meal: "Dinner",
    name: "Tofu bhurji with protein roti",
    portion: "120g tofu bhurji + 1-2 protein rotis + sauteed beans",
    calories: 480,
    protein: 31,
    visual: "roti",
  },
  "palak-paneer-protein-roti": {
    meal: "Dinner",
    name: "Palak paneer protein roti plate",
    portion: "80g paneer palak + 1-2 protein rotis + salad",
    calories: 520,
    protein: 30,
    visual: "roti",
  },
  "moong-cheela-dinner": {
    meal: "Dinner",
    name: "Moong dal cheela dinner",
    portion: "2 cheelas + 1 cup curd + salad",
    calories: 410,
    protein: 28,
    visual: "chilla",
  },
  "dal-soup-stir-fry": {
    meal: "Dinner",
    name: "Dal soup and veggie stir fry",
    portion: "1.5 cups dal soup + 1.5 cups stir fry + 1 protein roti",
    calories: 430,
    protein: 23,
    visual: "soup",
  },
  "tofu-clear-soup": {
    meal: "Dinner",
    name: "Tofu clear soup bowl",
    portion: "2 cups clear veg soup + 120g tofu + 1 protein roti if hungry",
    calories: 360,
    protein: 28,
    visual: "soup",
  },
  "paneer-veg-soup": {
    meal: "Dinner",
    name: "Paneer vegetable soup",
    portion: "2 cups veg soup + 70g paneer cubes + salad or 1 protein roti",
    calories: 410,
    protein: 26,
    visual: "soup",
  },
  "moong-spinach-soup": {
    meal: "Dinner",
    name: "Moong spinach soup",
    portion: "1.75 cups moong spinach soup + 1 protein roti + cucumber salad",
    calories: 390,
    protein: 24,
    visual: "soup",
  },
  "dalia-curd": {
    meal: "Dinner",
    name: "Light dalia curd bowl",
    portion: "1.5 cups vegetable dalia + 3/4 cup curd + salad",
    calories: 450,
    protein: 21,
    visual: "bowl",
  },
  "tofu-pasta": {
    meal: "Dinner",
    name: "Tofu veggie pasta",
    portion: "1 cup cooked whole-wheat pasta + 100g tofu + 1 cup veggies",
    calories: 560,
    protein: 30,
    visual: "pasta",
  },
  "paneer-tikka-bowl": {
    meal: "Dinner",
    name: "Paneer tikka salad bowl",
    portion: "90g paneer tikka + salad + 1 protein roti or small millet bowl",
    calories: 520,
    protein: 32,
    visual: "bowl",
  },
};

const mealPlan = {
  Monday: {
    breakfast: ["paneer-besan-chilla", "greek-yogurt-bowl"],
    lunch: ["rajma-protein-roti-curd", "dal-palak-protein-roti"],
    snack: ["sprouts-chaas", "makhana-chana"],
    dinner: ["tofu-bhurji-protein-roti", "tofu-clear-soup"],
  },
  Tuesday: {
    breakfast: ["greek-yogurt-bowl", "moong-cheela-curd"],
    lunch: ["dal-palak-protein-roti", "soya-masala-raita"],
    snack: ["sprouts-chaas", "fruit-peanut-curd"],
    dinner: ["moong-spinach-soup", "palak-paneer-protein-roti"],
  },
  Wednesday: {
    breakfast: ["tofu-paneer-sandwich", "protein-oats-bowl"],
    lunch: ["chole-protein-roti", "paneer-quinoa-bowl"],
    snack: ["protein-lassi-dates", "makhana-chana"],
    dinner: ["moong-cheela-dinner", "dal-soup-stir-fry"],
  },
  Thursday: {
    breakfast: ["protein-oats-bowl", "paneer-besan-chilla"],
    lunch: ["soya-masala-raita", "masoor-roti-sabzi"],
    snack: ["hummus-veg-paneer", "office-snackbox"],
    dinner: ["paneer-veg-soup", "tofu-bhurji-protein-roti"],
  },
  Friday: {
    breakfast: ["idli-sambar-curd", "greek-yogurt-bowl"],
    lunch: ["paneer-quinoa-bowl", "rajma-protein-roti-curd"],
    snack: ["makhana-chana", "fruit-peanut-curd"],
    dinner: ["dal-soup-stir-fry", "paneer-tikka-bowl"],
  },
  Saturday: {
    breakfast: ["paneer-paratha-curd", "moong-cheela-curd"],
    lunch: ["masoor-roti-sabzi", "chole-protein-roti"],
    snack: ["sprouts-chaas", "protein-lassi-dates"],
    dinner: ["tofu-pasta", "paneer-veg-soup"],
  },
  Sunday: {
    breakfast: ["dosa-sambar-peanut", "protein-oats-bowl"],
    lunch: ["paneer-bhurji-lunch", "soya-masala-raita"],
    snack: ["hummus-veg-paneer", "office-snackbox"],
    dinner: ["moong-spinach-soup", "moong-cheela-dinner"],
  },
};

const routine = [
  ["7:15 am", "Wake up, lemon water, wash face, no scrolling"],
  ["7:35 am", "Gym, yoga, or walk based on the weekly movement plan"],
  ["8:05 am", "Bath, then AM skincare: Vitamin C, moisturizer, sunscreen"],
  ["8:15 am", "High-protein breakfast and pack snack box"],
  ["9:30 am", "Office and commute block begins"],
  ["12:30 pm", "Snack 1 before hunger becomes a migraine trigger"],
  ["2:00 pm", "Lunch with one protein anchor, protein roti, salad"],
  ["4:30 pm", "Snack 2 with chai or coffee, avoid random namkeen loops"],
  ["7:30 pm", "Reach home, change, wash face, 10 minutes quiet"],
  ["8:15 pm", "Light protein-focused dinner"],
  ["9:00 pm", "25-minute career learning block"],
  ["9:30 pm", "5 to 20 minutes confidence or English practice"],
  ["10:00 pm", "Vibhor, family, fun, or decompression"],
  ["10:45 pm", "PM skincare and low-stimulation wind down"],
  ["11:30 pm", "Sleep window starts"],
];

const weekendRoutine = [
  {
    day: "Saturday",
    focus: "Mobility, dance, skill, fun",
    blocks: [
      "Wake naturally by 8:30 am, lemon water, bath, AM skincare",
      "Saturday mobility + dance: walk, hip openers, glute bridge, easy dance steps",
      "2-hour deep learning block: Java/Kubernetes/system design",
      "Meal prep shopping and one fun plan with Vibhor/friends",
      "Night skincare and sleep before the week gets noisy",
    ],
  },
  {
    day: "Sunday",
    focus: "Reset, prep, review",
    blocks: [
      "Restorative yoga or relaxed walk",
      "90-minute food prep: sprouts, makhana, chana, paneer/tofu, salad",
      "Finance check, weekly planning, and wardrobe/work bag reset",
      "20-minute English speaking or reading session",
      "Low-stimulation evening so Monday does not feel sudden",
    ],
  },
];

const weekendPrep = [
  ["Protein roti atta", "Mix atta + sattu/soy flour/besan in a 3:1 ratio. Keep dry mix ready for 3 days."],
  ["Paneer red-pepper protein mayo", "Blend 100g paneer + roasted red bell pepper + garlic + lemon + salt + chilli flakes. Use as sandwich spread or dip."],
  ["Hung-curd protein dip", "Hang curd for 2-3 hrs, mix with mint, pepper, garlic, and roasted jeera. Use with snack boxes."],
  ["Creamy tofu dressing", "Blend tofu + lemon + mustard + garlic + water. Use for salad bowls and wraps."],
  ["Rajma/chole base", "Soak overnight, pressure cook, portion 2 boxes. Eat with protein roti, not rice."],
  ["Moong chilla batter", "Soak yellow/green moong dal 4-6 hrs, grind with ginger, chilli, jeera. Store 2 days."],
  ["Besan chilla mix", "Pre-mix besan, ajwain, haldi, salt. Add curd/water and paneer only while cooking."],
  ["Dosa batter 1", "Classic: 3 parts idli rice + 1 part urad dal + methi. Ferment overnight."],
  ["Dosa batter 2", "High-protein: 2 parts moong dal + 1 part urad dal + little oats/rava. Ferment or use instant."],
  ["Adai-style batter", "Soak toor + chana + moong + urad dal with red chilli. Grind coarse for protein dosa."],
  ["Office snack boxes", "Pack roasted chana, makhana, peanuts, and sprouts so biscuits are not the default."],
  ["Paneer/tofu prep", "Marinate 2 portions with curd, chilli, haldi, kasuri methi. Use for dinner/lunch bowls."],
  ["Soup base", "Pressure cook moong/masoor dal with spinach or lauki. Blend or mash, then add tofu/paneer fresh at dinner."],
  ["Salad and chutney", "Chop cucumber/carrot/onion for 3 days. Make mint-coriander chutney."],
];

const workouts = [
  {
    title: "Gym A: Lower body + core",
    tag: "Monday",
    demos: [
      ["Squat", "squat", "Feet shoulder-width. Push hips back, knees out, chest tall."],
      ["Dumbbell hinge", "hinge", "Soft knees. Push hips back, keep spine neutral, feel hamstrings."],
      ["Plank", "plank", "Elbows under shoulders. Tighten core and keep breathing slowly."],
    ],
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
    demos: [
      ["Cat-cow", "catcow", "Inhale arch gently. Exhale round the back slowly."],
      ["Low lunge", "lunge", "Front knee over ankle. Back knee down. Relax shoulders."],
      ["Legs on wall", "legs", "Hips near wall. Legs relaxed. Slow nasal breathing."],
    ],
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
    demos: [
      ["Seated row", "row", "Pull elbows back. Squeeze shoulder blades, avoid shrugging."],
      ["Shoulder press", "press", "Ribs down. Press up smoothly. Do not lock neck."],
      ["Dead bug", "deadbug", "Low back gently down. Move opposite arm and leg slowly."],
    ],
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
    demos: [
      ["Warrior 2", "warrior", "Front knee bent. Back leg strong. Arms long, gaze forward."],
      ["Bridge", "bridge", "Feet close to hips. Lift hips, squeeze glutes, breathe."],
      ["Bird dog", "birddog", "Opposite arm and leg. Hips steady. Move slowly."],
    ],
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
    demos: [
      ["Deadlift", "hinge", "Hinge from hips. Weight close to legs. Stand tall."],
      ["Step-up", "stepup", "Whole foot on step. Push through heel, control down."],
      ["Farmer carry", "carry", "Hold weights. Walk tall, shoulders down, core braced."],
    ],
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
    title: "Saturday: Mobility + dance",
    tag: "Saturday",
    demos: [
      ["Hip opener", "lunge", "Front knee over ankle. Sink hips gently, breathe slowly."],
      ["Beginner dance step", "stepup", "Step side-to-side. Knees soft, shoulders relaxed."],
      ["Glute bridge", "bridge", "Feet close to hips. Lift hips, squeeze glutes, breathe."],
    ],
    steps: [
      "Brisk walk - 10 min",
      "Hip opener lunge - 1 min each side",
      "Bodyweight squat - 2 x 12",
      "Glute bridge - 2 x 15",
      "Beginner dance routine - 10-15 min",
      "Hamstring, calf, and neck stretch - 6 min",
    ],
  },
  {
    title: "Sunday restorative yoga",
    tag: "Sunday",
    demos: [
      ["Child's pose", "child", "Knees wide. Forehead down. Let back and neck soften."],
      ["Legs on wall", "legs", "Legs supported. Jaw relaxed. Breathe without forcing."],
      ["Supine twist", "twist", "Knees to one side. Keep shoulders soft and supported."],
    ],
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
  Saturday: "Saturday mobility + dance",
  Sunday: "Restorative yoga",
};

const exerciseImageBase =
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises";

const exerciseMedia = {
  squat: "Bodyweight_Squat",
  hinge: "Stiff-Legged_Dumbbell_Deadlift",
  plank: "Plank",
  catcow: "Cat_Stretch",
  lunge: "Bodyweight_Walking_Lunge",
  legs: "90_90_Hamstring",
  row: "Seated_Cable_Rows",
  press: "Dumbbell_Shoulder_Press",
  deadbug: "Dead_Bug",
  warrior: "Dancers_Stretch",
  bridge: "Butt_Lift_Bridge",
  birddog: "Superman",
  stepup: "Step-up_with_Knee_Raise",
  carry: "Farmers_Walk",
  child: "Childs_Pose",
  twist: "Dancers_Stretch",
};

const confidenceDrills = [
  ["5-minute audio", "Speak on today's topic. Listen once. Note one improvement."],
  ["Meeting phrase", "Use one phrase like 'The trade-off here is...' in a real meeting."],
  ["Read aloud", "Read 5 pages and underline 3 phrases you can reuse."],
  ["Explain simply", "Explain one Java or system design concept like teaching a junior."],
  ["Story rep", "Tell one small life story with beginning, middle, and end."],
  ["LinkedIn draft", "Write one short backend learning post. Publish later if ready."],
];

const resourceLinks = [
  {
    title: "BBC 6 Minute English",
    type: "Listening + vocabulary",
    url: "https://www.bbc.co.uk/learningenglish/english/features/6-minute-english",
    note: "Short episodes; good for commute-light days or morning listening.",
  },
  {
    title: "BBC The English We Speak",
    type: "Phrases and idioms",
    url: "https://www.bbc.co.uk/learningenglish/english/features/the-english-we-speak",
    note: "Useful everyday expressions without heavy effort.",
  },
  {
    title: "TED Talks Daily",
    type: "Ideas + speaking style",
    url: "https://www.ted.com/podcasts/ted-talks-daily",
    note: "Listen for structure: opening, story, point, close.",
  },
  {
    title: "Toastmasters International",
    type: "Public speaking",
    url: "https://www.youtube.com/user/Toastmasters",
    note: "Practical speaking tips and stage confidence basics.",
  },
  {
    title: "Vinh Giang",
    type: "Voice + communication",
    url: "https://www.youtube.com/@askvinh",
    note: "Good for voice, pauses, presence, and confident delivery.",
  },
];

const visualTemplates = {
  chilla: [
    ["--x:14%;--y:36%;--w:58%;--h:20%;--c:#d49a45;--r:999px;--rot:-8deg"],
    ["--x:24%;--y:50%;--w:52%;--h:18%;--c:#efbd6a;--r:999px;--rot:7deg"],
    ["--x:69%;--y:24%;--w:19%;--h:19%;--c:#eaf5ef;--r:50%;--rot:0deg"],
    ["--x:73%;--y:28%;--w:10%;--h:10%;--c:#69a976;--r:50%;--rot:0deg"],
  ],
  bowl: [
    ["--x:20%;--y:20%;--w:58%;--h:58%;--c:#f4efe6;--r:50%;--rot:0deg"],
    ["--x:29%;--y:29%;--w:40%;--h:40%;--c:#c7634d;--r:50%;--rot:0deg"],
    ["--x:36%;--y:25%;--w:14%;--h:14%;--c:#f0c85d;--r:50%;--rot:0deg"],
    ["--x:52%;--y:48%;--w:15%;--h:15%;--c:#74a56d;--r:50%;--rot:0deg"],
  ],
  roti: [
    ["--x:15%;--y:28%;--w:34%;--h:34%;--c:#d8a75a;--r:50%;--rot:0deg"],
    ["--x:25%;--y:40%;--w:34%;--h:34%;--c:#efc56c;--r:50%;--rot:0deg"],
    ["--x:62%;--y:24%;--w:24%;--h:24%;--c:#428f64;--r:50%;--rot:0deg"],
    ["--x:64%;--y:54%;--w:22%;--h:18%;--c:#f2f1df;--r:45%;--rot:0deg"],
  ],
  masala: [
    ["--x:19%;--y:20%;--w:60%;--h:60%;--c:#f7edc8;--r:50%;--rot:0deg"],
    ["--x:32%;--y:31%;--w:13%;--h:13%;--c:#e28a46;--r:50%;--rot:0deg"],
    ["--x:48%;--y:37%;--w:13%;--h:13%;--c:#6c9d68;--r:50%;--rot:0deg"],
    ["--x:65%;--y:18%;--w:17%;--h:17%;--c:#f7f6ef;--r:50%;--rot:0deg"],
  ],
  snackbox: [
    ["--x:13%;--y:21%;--w:30%;--h:28%;--c:#e9bb65;--r:10px;--rot:0deg"],
    ["--x:49%;--y:21%;--w:30%;--h:28%;--c:#6da66d;--r:10px;--rot:0deg"],
    ["--x:13%;--y:55%;--w:30%;--h:24%;--c:#f5efe6;--r:10px;--rot:0deg"],
    ["--x:49%;--y:55%;--w:30%;--h:24%;--c:#d36d55;--r:10px;--rot:0deg"],
  ],
  sandwich: [
    ["--x:18%;--y:32%;--w:60%;--h:26%;--c:#d8a75a;--r:8px;--rot:-8deg"],
    ["--x:23%;--y:38%;--w:52%;--h:22%;--c:#f4efe6;--r:8px;--rot:-8deg"],
    ["--x:29%;--y:42%;--w:40%;--h:14%;--c:#6aa56a;--r:8px;--rot:-8deg"],
    ["--x:32%;--y:57%;--w:46%;--h:12%;--c:#e2b25d;--r:8px;--rot:7deg"],
  ],
  idli: [
    ["--x:18%;--y:26%;--w:24%;--h:24%;--c:#f8f6ee;--r:50%;--rot:0deg"],
    ["--x:34%;--y:50%;--w:24%;--h:24%;--c:#f8f6ee;--r:50%;--rot:0deg"],
    ["--x:55%;--y:28%;--w:27%;--h:27%;--c:#d7794c;--r:50%;--rot:0deg"],
    ["--x:63%;--y:58%;--w:17%;--h:17%;--c:#6fa86d;--r:50%;--rot:0deg"],
  ],
  dosa: [
    ["--x:15%;--y:42%;--w:67%;--h:20%;--c:#e2a85c;--r:999px;--rot:-5deg"],
    ["--x:60%;--y:24%;--w:20%;--h:20%;--c:#d66b4f;--r:50%;--rot:0deg"],
    ["--x:65%;--y:53%;--w:17%;--h:17%;--c:#f5f2e7;--r:50%;--rot:0deg"],
  ],
  glass: [
    ["--x:35%;--y:20%;--w:26%;--h:58%;--c:#f5f2dd;--r:12px;--rot:0deg"],
    ["--x:39%;--y:25%;--w:18%;--h:44%;--c:#f0cd75;--r:10px;--rot:0deg"],
    ["--x:58%;--y:48%;--w:17%;--h:17%;--c:#c86b52;--r:50%;--rot:0deg"],
  ],
  soup: [
    ["--x:18%;--y:27%;--w:42%;--h:42%;--c:#d66b4f;--r:50%;--rot:0deg"],
    ["--x:26%;--y:35%;--w:26%;--h:26%;--c:#f0c25e;--r:50%;--rot:0deg"],
    ["--x:62%;--y:30%;--w:24%;--h:22%;--c:#6ea46b;--r:9px;--rot:8deg"],
    ["--x:63%;--y:58%;--w:24%;--h:16%;--c:#dfa653;--r:999px;--rot:-8deg"],
  ],
  pasta: [
    ["--x:19%;--y:20%;--w:60%;--h:60%;--c:#f2d47b;--r:50%;--rot:0deg"],
    ["--x:28%;--y:32%;--w:16%;--h:12%;--c:#d76950;--r:999px;--rot:20deg"],
    ["--x:47%;--y:46%;--w:16%;--h:12%;--c:#75a967;--r:999px;--rot:-15deg"],
    ["--x:58%;--y:30%;--w:15%;--h:15%;--c:#f8f6ef;--r:50%;--rot:0deg"],
  ],
};

let entries = [];
let settings = structuredClone(DEFAULT_SETTINGS);
let previousExerciseModalFocus = null;

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

function getMealOption(id) {
  return mealCatalog[id] || mealCatalog["paneer-besan-chilla"];
}

function mealOptionsFor(mealName) {
  return Object.entries(mealCatalog)
    .filter(([, option]) => option.meal === mealName)
    .sort(([, a], [, b]) => a.name.localeCompare(b.name));
}

function primaryMeal(day, mealType) {
  return getMealOption(mealPlan[day][mealType][0]);
}

function formatMealForTextarea(option) {
  return `${option.name} (~${option.calories} kcal, ${option.protein}g protein)\nPortion: ${option.portion}`;
}

function escapeAttribute(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderMealVisual(option) {
  const shapes = visualTemplates[option.visual] || visualTemplates.bowl;
  return `
    <div class="meal-visual meal-visual--${option.visual}" role="img" aria-label="${option.name} plate preview">
      <span class="plate-base"></span>
      ${shapes.map(([style]) => `<span class="food-shape" style="${style}"></span>`).join("")}
    </div>
  `;
}

function renderMealOptionCard(id) {
  const option = getMealOption(id);
  return `
    <article class="meal-option-card">
      ${renderMealVisual(option)}
      <div class="meal-option-copy">
        <div class="meal-stat-row">
          <span>~${option.calories} kcal</span>
          <span>${option.protein}g protein</span>
        </div>
        <h4>${option.name}</h4>
        <p>${option.portion}</p>
      </div>
    </article>
  `;
}

function renderExerciseDemo([name, type, cue]) {
  const mediaId = exerciseMedia[type] || exerciseMedia.squat;
  const startFrame = `${exerciseImageBase}/${mediaId}/0.jpg`;
  const moveFrame = `${exerciseImageBase}/${mediaId}/1.jpg`;
  const safeName = escapeAttribute(name);
  const safeCue = escapeAttribute(cue);
  const safeStartFrame = escapeAttribute(startFrame);
  const safeMoveFrame = escapeAttribute(moveFrame);
  return `
    <div class="exercise-demo exercise-demo--${type}" title="${safeName}">
      <button
        class="human-demo-stage"
        type="button"
        data-exercise-trigger="true"
        data-exercise-name="${safeName}"
        data-exercise-cue="${safeCue}"
        data-start-frame="${safeStartFrame}"
        data-move-frame="${safeMoveFrame}"
        aria-label="Open ${safeName} full screen exercise demo"
      >
        <img class="demo-frame demo-frame--start" src="${safeStartFrame}" alt="${safeName} start position" loading="lazy" decoding="async" />
        <img class="demo-frame demo-frame--move" src="${safeMoveFrame}" alt="${safeName} movement position" loading="lazy" decoding="async" />
        <span class="demo-frame-label">start to move</span>
      </button>
      <span class="demo-name">${safeName}</span>
      <p>${safeCue}</p>
    </div>
  `;
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
  bindExerciseModal();
  ["breakfast", "lunch", "snack", "dinner"].forEach((mealType) => {
    document
      .getElementById(`${mealType}Select`)
      .addEventListener("change", (event) => applyMealChoice(mealType, event.target.value));
  });
}

function bindExerciseModal() {
  const workoutLibrary = document.getElementById("workoutLibrary");
  const modal = document.getElementById("exerciseModal");
  const closeButton = document.getElementById("exerciseModalClose");

  workoutLibrary.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-exercise-trigger]");
    if (!trigger || !workoutLibrary.contains(trigger)) return;
    openExerciseModal(trigger.dataset);
  });

  closeButton.addEventListener("click", closeExerciseModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeExerciseModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("open")) {
      closeExerciseModal();
    }
  });
}

function openExerciseModal(data) {
  previousExerciseModalFocus = document.activeElement;
  const modal = document.getElementById("exerciseModal");
  const startImage = document.getElementById("exerciseModalStart");
  const moveImage = document.getElementById("exerciseModalMove");
  const title = document.getElementById("exerciseModalTitle");
  const cue = document.getElementById("exerciseModalCue");

  startImage.src = data.startFrame;
  moveImage.src = data.moveFrame;
  startImage.alt = `${data.exerciseName} start position`;
  moveImage.alt = `${data.exerciseName} movement position`;
  title.textContent = data.exerciseName;
  cue.textContent = data.exerciseCue;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  document.getElementById("exerciseModalClose").focus();
}

function closeExerciseModal() {
  const modal = document.getElementById("exerciseModal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  if (previousExerciseModalFocus && typeof previousExerciseModalFocus.focus === "function") {
    previousExerciseModalFocus.focus();
  }
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

  const mealSelects = {
    breakfast: "Breakfast",
    lunch: "Lunch",
    snack: "Snack",
    dinner: "Dinner",
  };
  Object.entries(mealSelects).forEach(([mealType, mealName]) => {
    const select = document.getElementById(`${mealType}Select`);
    select.innerHTML = mealOptionsFor(mealName)
      .map(
        ([id, option]) =>
          `<option value="${id}">${option.name} - ${option.calories} kcal, ${option.protein}g protein</option>`,
      )
      .join("");
  });

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

  document.getElementById("weekendRoutine").innerHTML = weekendRoutine
    .map(
      (item) => `
        <article class="weekend-card">
          <div class="weekend-card-top">
            <h3>${item.day}</h3>
            <span>${item.focus}</span>
          </div>
          <ul>
            ${item.blocks.map((block) => `<li>${block}</li>`).join("")}
          </ul>
        </article>
      `,
    )
    .join("");

  document.getElementById("mealPlan").innerHTML = Object.entries(mealPlan)
    .map(
      ([day, meals]) => `
        <article class="meal-day rich-meal-day">
          <div class="meal-day-header">
            <h3>${day}</h3>
            <span>Pick one per slot</span>
          </div>
          ${["breakfast", "lunch", "snack", "dinner"]
            .map(
              (mealType) => `
                <section class="meal-slot">
                  <div class="meal-slot-title">${mealType}</div>
                  <div class="meal-option-list">
                    ${meals[mealType].map((id) => renderMealOptionCard(id)).join("")}
                  </div>
                </section>
              `,
            )
            .join("")}
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
          <div class="exercise-demo-grid">
            ${(workout.demos || []).map((demo) => renderExerciseDemo(demo)).join("")}
          </div>
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

  document.getElementById("resourceGrid").innerHTML = resourceLinks
    .map(
      (item) => `
        <a class="resource-card" href="${item.url}" target="_blank" rel="noopener noreferrer">
          <span class="tag">${item.type}</span>
          <h3>${item.title}</h3>
          <p>${item.note}</p>
        </a>
      `,
    )
    .join("");

  document.getElementById("goalSteps").value = settings.goals.steps;
  document.getElementById("goalWater").value = settings.goals.water;
  document.getElementById("goalProtein").value = settings.goals.protein;
  document.getElementById("goalCalories").value = settings.goals.calories;
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
  const breakfast = primaryMeal(day, "breakfast");
  const lunch = primaryMeal(day, "lunch");
  const snack = primaryMeal(day, "snack");
  const dinner = primaryMeal(day, "dinner");
  document.getElementById("breakfastSelect").value = mealPlan[day].breakfast[0];
  document.getElementById("lunchSelect").value = mealPlan[day].lunch[0];
  document.getElementById("snackSelect").value = mealPlan[day].snack[0];
  document.getElementById("dinnerSelect").value = mealPlan[day].dinner[0];
  applyMealChoice("breakfast", mealPlan[day].breakfast[0]);
  applyMealChoice("lunch", mealPlan[day].lunch[0]);
  applyMealChoice("snack", mealPlan[day].snack[0]);
  applyMealChoice("dinner", mealPlan[day].dinner[0]);
  document.getElementById("todayHeadline").textContent = `${day}'s plan is ready.`;
  document.getElementById("todaySubline").textContent =
    `${breakfast.name} | ${learningByDay[day]}`;
}

function applyMealChoice(mealType, optionId) {
  const option = getMealOption(optionId);
  document.getElementById(mealType).value = formatMealForTextarea(option);
  document.getElementById(`${mealType}Calories`).value = option.calories;
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
  const movement = document.getElementById("gymYoga");
  if (movement) {
    movement.checked = Boolean(existing.gymYoga || existing.yoga || existing.gym);
  }
}

function saveEntry(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form).entries());
  const checkboxIds = [
    "lemonWater",
    "gymYoga",
    "skincareAm",
    "skincarePm",
    "plannedSnacks",
    "greenTea",
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
  const gymYoga = Boolean(data.gymYoga || data.yoga || data.gym);
  const workoutType = data.workoutType || "";
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
    gymYoga,
    yoga: gymYoga && /yoga|restorative/i.test(workoutType),
    gym: gymYoga && /gym/i.test(workoutType),
    skincareAm: Boolean(data.skincareAm),
    skincarePm: Boolean(data.skincarePm),
    plannedSnacks: Boolean(data.plannedSnacks),
    greenTea: Boolean(data.greenTea),
    workoutType,
    junkCount: numberOrZero(data.junkCount),
    breakfast: data.breakfast || "",
    breakfastCalories: numberOrZero(data.breakfastCalories),
    lunch: data.lunch || "",
    lunchCalories: numberOrZero(data.lunchCalories),
    snack: data.snack || "",
    snackCalories: numberOrZero(data.snackCalories),
    dinner: data.dinner || "",
    dinnerCalories: numberOrZero(data.dinnerCalories),
    learningMinutes: numberOrZero(data.learningMinutes),
    learningTopic: data.learningTopic || "",
    confidenceMinutes: numberOrZero(data.confidenceMinutes),
    englishPractice: data.englishPractice || "",
    workWin: data.workWin || "",
    gratitude: data.gratitude || "",
    notes: data.notes || "",
  };
  entry.totalCalories =
    entry.breakfastCalories + entry.lunchCalories + entry.snackCalories + entry.dinnerCalories;
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
    entry.totalCalories > 0 && entry.totalCalories <= goals.calories,
    entry.sleep >= goals.sleep,
    entry.lemonWater,
    entry.gymYoga || entry.yoga || entry.gym || Boolean(entry.workoutType),
    entry.skincareAm,
    entry.skincarePm,
    entry.plannedSnacks,
    entry.greenTea,
    entry.junkCount <= 1,
    entry.learningMinutes >= goals.learning,
    entry.confidenceMinutes >= goals.confidence,
  ];
  return Math.round((checks.filter(Boolean).length / checks.length) * 100);
}

function renderAll() {
  renderTodayScore();
  renderCalorieRing();
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

function renderCalorieRing() {
  const todayEntry = entries.find((entry) => entry.date === toIsoDate(new Date()));
  const total = todayEntry?.totalCalories || 0;
  const target = settings.goals.calories || DEFAULT_SETTINGS.goals.calories;
  const pct = target ? total / target : 0;
  const cappedPct = Math.min(1, Math.max(0, pct));
  const ring = document.getElementById("calorieRing");
  ring.style.setProperty("--ring", `${cappedPct * 360}deg`);
  ring.classList.toggle("over-target", pct > 1);
  document.getElementById("calorieScore").textContent = total ? `${total}` : "0";
  document.getElementById("calorieLabel").textContent = total
    ? pct > 1
      ? `${total - target} kcal over`
      : `${target - total} kcal left`
    : "No meals logged";
  document.getElementById("calorieSubline").textContent =
    `Target ${target} kcal. Visual progress is capped at 100%.`;
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
      label: "Calories avg",
      value: `${Math.round(avg("totalCalories"))}`,
      goal: `${goals.calories}`,
      pct: avg("totalCalories") / goals.calories,
    },
    {
      label: "Score avg",
      value: `${Math.round(avg("score"))}%`,
      goal: "80%",
      pct: avg("score") / 80,
    },
    {
      label: "Workout days",
      value: `${last7.filter((entry) => entry.gymYoga || entry.yoga || entry.gym).length}/7`,
      goal: "5/7",
      pct: last7.filter((entry) => entry.gymYoga || entry.yoga || entry.gym).length / 5,
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
    {
      label: "Low migraine days",
      value: `${last7.filter((entry) => Number(entry.migraine || 0) <= 1).length}/7`,
      goal: "6/7",
      pct: last7.filter((entry) => Number(entry.migraine || 0) <= 1).length / 6,
    },
    {
      label: "Green tea days",
      value: `${last7.filter((entry) => entry.greenTea).length}/7`,
      goal: "5/7",
      pct: last7.filter((entry) => entry.greenTea).length / 5,
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
            <td>${entry.totalCalories || 0}</td>
            <td>${
              entry.workoutType ||
              (entry.gymYoga ? "Gym/Yoga" : entry.gym ? "Gym" : entry.yoga ? "Yoga" : "Rest")
            }</td>
            <td>${entry.migraine}/5</td>
            <td>${entry.learningMinutes} min</td>
          </tr>
        `,
      )
      .join("") ||
    `<tr><td colspan="9">No entries yet. Save today's check-in to start.</td></tr>`;
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
    calories:
      numberOrZero(document.getElementById("goalCalories").value) ||
      DEFAULT_SETTINGS.goals.calories,
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
    breakfastCalories: numberOrZero(entry.breakfastCalories),
    lunchCalories: numberOrZero(entry.lunchCalories),
    snackCalories: numberOrZero(entry.snackCalories),
    dinnerCalories: numberOrZero(entry.dinnerCalories),
    totalCalories: numberOrZero(entry.totalCalories),
    sleep: numberOrZero(entry.sleep),
    energy: numberOrBlank(entry.energy),
    migraine: numberOrZero(entry.migraine),
    lemonWater: entry.lemonWater === true || entry.lemonWater === "TRUE",
    yoga: entry.yoga === true || entry.yoga === "TRUE",
    gym: entry.gym === true || entry.gym === "TRUE",
    gymYoga:
      entry.gymYoga === true ||
      entry.gymYoga === "TRUE" ||
      entry.yoga === true ||
      entry.yoga === "TRUE" ||
      entry.gym === true ||
      entry.gym === "TRUE",
    skincareAm: entry.skincareAm === true || entry.skincareAm === "TRUE",
    skincarePm: entry.skincarePm === true || entry.skincarePm === "TRUE",
    plannedSnacks: entry.plannedSnacks === true || entry.plannedSnacks === "TRUE",
    greenTea: entry.greenTea === true || entry.greenTea === "TRUE",
    junkCount: numberOrZero(entry.junkCount),
    learningMinutes: numberOrZero(entry.learningMinutes),
    confidenceMinutes: numberOrZero(entry.confidenceMinutes),
  };
  if (!normalized.totalCalories) {
    normalized.totalCalories =
      normalized.breakfastCalories +
      normalized.lunchCalories +
      normalized.snackCalories +
      normalized.dinnerCalories;
  }
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
    const breakfast = primaryMeal(day, "breakfast");
    const lunch = primaryMeal(day, "lunch");
    const snack = primaryMeal(day, "snack");
    const dinner = primaryMeal(day, "dinner");
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
        gymYoga:
          day === "Monday" ||
          day === "Tuesday" ||
          day === "Wednesday" ||
          day === "Thursday" ||
          day === "Friday" ||
          day === "Saturday" ||
          day === "Sunday",
        greenTea: Math.random() > 0.25,
        skincareAm: Math.random() > 0.15,
        skincarePm: Math.random() > 0.2,
        plannedSnacks: Math.random() > 0.25,
        workoutType: workoutByDay[day],
        junkCount: Math.random() > 0.7 ? 2 : 0,
        breakfast: formatMealForTextarea(breakfast),
        breakfastCalories: breakfast.calories,
        lunch: formatMealForTextarea(lunch),
        lunchCalories: lunch.calories,
        snack: formatMealForTextarea(snack),
        snackCalories: snack.calories,
        dinner: formatMealForTextarea(dinner),
        dinnerCalories: dinner.calories,
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
