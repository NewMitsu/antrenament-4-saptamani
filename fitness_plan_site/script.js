// Data for each day of the 4‑week training program
// Each entry contains a title and an HTML string describing the exercises in Romanian.
const tasks = {
  1: {
    title: "Ziua 1 – Săptămâna 1 (Luni)",
    content: `
      <p><strong>Încălzire:</strong> 10 minute cardio ușor (mers rapid sau jumping jacks), rotații ale umerilor și gâtului, două seturi de genuflexiuni fără greutate.</p>
      <ul>
        <li><strong>Genuflexiuni cu ganteră</strong> (Goblet squat): 3 seturi × 10–12 repetări.</li>
        <li><strong>Flotări clasice</strong>: 4 seturi × cât poți (aprox. 8–10 repetări). Ultimul set poate continua pe genunchi.</li>
        <li><strong>Împins deasupra capului cu gantere</strong>: 3 seturi × 8–10 repetări.</li>
        <li><strong>Flotări „diamond” pe genunchi</strong>: 2 seturi × 8–10 repetări.</li>
        <li><strong>Plank</strong>: 3 seturi × 20 secunde.</li>
        <li><strong>Stretching</strong>: 5–10 minute pentru piept, umeri și picioare.</li>
      </ul>
    `
  },
  2: {
    title: "Ziua 2 – Săptămâna 1 (Marți)",
    content: `
      <p><strong>Încălzire:</strong> 5 minute bicicletă sau mers rapid, exerciții good‑morning fără greutate, rotații de brațe și câteva tracțiuni scapulare.</p>
      <ul>
        <li><strong>Îndreptări românești cu gantere (RDL)</strong>: 3 seturi × 10 repetări.</li>
        <li><strong>Tracțiuni asistate cu bandă</strong>: 4 seturi × 5–6 repetări.</li>
        <li><strong>Ramat cu gantera din aplecat</strong>: 3 seturi × 10 repetări pe fiecare braț.</li>
        <li><strong>Flexii biceps cu gantere</strong>: 3 seturi × 12 repetări.</li>
        <li><strong>Plank lateral</strong>: 2 seturi × 15 secunde pe fiecare parte.</li>
        <li><strong>Stretching</strong>: pentru spate, brațe, fesieri și glezne.</li>
      </ul>
    `
  },
  3: {
    title: "Ziua 3 – Săptămâna 1 (Miercuri)",
    content: `
      <p>Zi de <strong>cardio opțional și recuperare activă</strong>. Alege una dintre variantele de mai jos:</p>
      <ul>
        <li>Mers pe bandă înclinată: 30–40 minute, ritm susținut.</li>
        <li>Alergare ușoară: 20–30 minute.</li>
        <li>HIIT de 15–20 minute: exerciții precum burpees, mountain climbers, genuflexiuni rapide.</li>
        <li>Recuperare: stretching și mobilitate pentru întregul corp.</li>
      </ul>
    `
  },
  4: {
    title: "Ziua 4 – Săptămâna 1 (Joi)",
    content: `
      <p><strong>Încălzire:</strong> 5 minute cardio ușor, rotații de șold și 5–10 flotări lente.</p>
      <ul>
        <li><strong>Fandări cu gantere</strong>: 3 seturi × 8 repetări pe fiecare picior.</li>
        <li><strong>Flotări declinate</strong>: 3 seturi × 8–10 repetări (picioarele pe o bancă).</li>
        <li><strong>Flotări la spalier</strong> (înclinate): 2 seturi × 8 repetări.</li>
        <li><strong>Extensii triceps</strong> cu gantera sau bandă: 2 seturi × 12 repetări.</li>
        <li><strong>Abdomen</strong>: 3 seturi × 15 repetări (crunch + ridicări de picioare).</li>
        <li><strong>Stretching</strong>: piept, umeri, triceps și picioare.</li>
      </ul>
    `
  },
  5: {
    title: "Ziua 5 – Săptămâna 1 (Vineri)",
    content: `
      <p><strong>Încălzire:</strong> 5 minute cardio ușor și exerciții ușoare de activare a spatelui și brațelor.</p>
      <ul>
        <li><strong>Tracțiuni negative</strong>: 3 seturi × 3–5 repetări lente (coborâre controlată).</li>
        <li><strong>Tracțiuni cu priză neutră asistate</strong>: 2 seturi × cât poți (6–8 repetări).</li>
        <li><strong>Ramat inversat</strong> (inverted rows): 3 seturi × 10–12 repetări.</li>
        <li><strong>Face pull</strong> cu bandă: 2 seturi × 15 repetări.</li>
        <li><strong>Hammer curls</strong>: 2 seturi × 12 repetări.</li>
        <li><strong>Ridicări de genunchi atârnând</strong>: 3 seturi × 8–10 repetări.</li>
        <li><strong>Stretching</strong>: spate, umeri, brațe și abdomen.</li>
      </ul>
    `
  },
  6: {
    title: "Ziua 6 – Săptămâna 1 (Sâmbătă)",
    content: `
      <p>Zi de <strong>cardio opțional și mobilitate</strong>:</p>
      <ul>
        <li>Alergare în intervale (2 min alergare + 2 min mers) de 20–25 minute.</li>
        <li>Bicicletă: 30–40 minute la intensitate medie.</li>
        <li>HIIT variat: burpees, mountain climbers, plank jacks – 3 runde.</li>
        <li>Mobilitate și foam rolling pentru mușchii lucrati în săptămână.</li>
      </ul>
    `
  },
  7: {
    title: "Ziua 7 – Săptămâna 1 (Duminică)",
    content: `
      <p><strong>Repaus complet.</strong> Bucură‑te de o zi de odihnă, plimbă‑te ușor dacă dorești și fă stretching blând.</p>
    `
  },
  // Week 2
  8: {
    title: "Ziua 8 – Săptămâna 2 (Luni)",
    content: `
      <p>Continuă rutina push cu greutăți crescute:</p>
      <ul>
        <li>Genuflexiuni cu gantera: crește greutatea cu 2–4&nbsp;kg față de săptămâna trecută.</li>
        <li>Flotări clasice: adaugă 1–2 repetări în fiecare set (4 seturi).</li>
        <li>Împins deasupra capului cu gantere: crește greutatea cu 1–2&nbsp;kg.</li>
        <li>Flotări „diamond” pe genunchi: 3 seturi × 10 repetări.</li>
        <li>Plank: 3 seturi × 25 secunde.</li>
        <li>Stretching complet pentru partea superioară a corpului.</li>
      </ul>
    `
  },
  9: {
    title: "Ziua 9 – Săptămâna 2 (Marți)",
    content: `
      <p>Antrenament pull cu progres:</p>
      <ul>
        <li>RDL: crește greutatea sau adaugă 2 repetări la fiecare set.</li>
        <li>Tracțiuni asistate: folosește o bandă mai subțire sau fă 7–8 repetări pe set.</li>
        <li>Ramat cu gantera: crește greutatea și urmărește 12 repetări.</li>
        <li>Flexii biceps: crește greutatea sau numărul de seturi.</li>
        <li>Plank lateral: 2 seturi × 20 secunde pe fiecare parte.</li>
        <li>Stretching spate, brațe și umeri.</li>
      </ul>
    `
  },
  10: {
    title: "Ziua 10 – Săptămâna 2 (Miercuri)",
    content: `
      <p>Cardio cu intensitate crescută:</p>
      <ul>
        <li>Mărește durata mersului în pantă cu 5–10 minute sau crește înclinația.</li>
        <li>Alergă 25–30 minute sau introdu segment de viteză de 1–2 minute.</li>
        <li>Adaugă o rundă suplimentară la HIIT.</li>
        <li>Nu uita de stretching și mobilitate după antrenament.</li>
      </ul>
    `
  },
  11: {
    title: "Ziua 11 – Săptămâna 2 (Joi)",
    content: `
      <p>Push cu variații:</p>
      <ul>
        <li>Fandări cu gantere: crește la 10 repetări pe picior sau crește greutatea.</li>
        <li>Flotări declinate: 3 seturi × 10 repetări; dacă poți, folosește vesta de 10&nbsp;kg.</li>
        <li>Flotări la spalier: 3 seturi × 12 repetări (prinde bara mai jos pentru a fi mai greu).</li>
        <li>Extensii triceps: 2 seturi × 15 repetări.</li>
        <li>Abdomen: 3 seturi × 18 repetări (crunch + ridicări de picioare).</li>
        <li>Stretching complet la final.</li>
      </ul>
    `
  },
  12: {
    title: "Ziua 12 – Săptămâna 2 (Vineri)",
    content: `
      <p>Pull cu progres:</p>
      <ul>
        <li>Tracțiuni negative: 3 seturi × 4–5 repetări lente.</li>
        <li>Tracțiuni asistate: 2 seturi × 7–8 repetări (bandă mai ușoară).</li>
        <li>Ramat inversat: crește dificultatea (corp mai orizontal sau vestă de 10&nbsp;kg).</li>
        <li>Face pull: 3 seturi × 15 repetări.</li>
        <li>Hammer curls: crește greutatea sau repetările.</li>
        <li>Ridicări de genunchi atârnând: 3 seturi × 10–12 repetări.</li>
        <li>Stretching spate și brațe.</li>
      </ul>
    `
  },
  13: {
    title: "Ziua 13 – Săptămâna 2 (Sâmbătă)",
    content: `
      <p>Cardio și evaluare:</p>
      <ul>
        <li>Crește durata sau intensitatea cardio (intervale mai multe, bicicletă mai lungă).</li>
        <li>Măsoară progresul: greutate corporală, circumferință talie, brațe.</li>
        <li>Include exerciții de echilibru și stabilitate pentru glezne.</li>
        <li>Stretching și mobilitate.</li>
      </ul>
    `
  },
  14: {
    title: "Ziua 14 – Săptămâna 2 (Duminică)",
    content: `
      <p><strong>Zi de pauză.</strong> Odihnă completă pentru a permite refacerea corpului.</p>
    `
  },
  // Week 3
  15: {
    title: "Ziua 15 – Săptămâna 3 (Luni)",
    content: `
      <p>Săptămâna cu cel mai mare volum. Antrenament push greu:</p>
      <ul>
        <li>Genuflexiuni: 4 seturi × 10–12 repetări (poți adăuga vesta pentru a crește greutatea).</li>
        <li>Test de flotări: fă cât mai multe flotări consecutive pentru a stabili un nou record personal.</li>
        <li>Flotări cu vestă de 10&nbsp;kg: 1–2 seturi × cât poți după ce termini seturile normale.</li>
        <li>Shoulder press: 3 seturi × 10 repetări cu o greutate mai mare.</li>
        <li>Flotări „diamond” pentru epuizarea tricepsului.</li>
        <li>Plank: 3 seturi × 30 secunde (poți încerca cu vestă).</li>
        <li>Stretching intens la final.</li>
      </ul>
    `
  },
  16: {
    title: "Ziua 16 – Săptămâna 3 (Marți)",
    content: `
      <p>Pull intens cu tentativă de tracțiuni fără asistență:</p>
      <ul>
        <li>RDL: folosește gantere mai grele sau adaugă vestă de 10&nbsp;kg.</li>
        <li>Încearcă prima tracțiune completă fără bandă. Dacă reușești, notează recordul!</li>
        <li>Tracțiuni asistate: 3 seturi × cât poți cu bandă ușoară.</li>
        <li>Ramat cu gantera: greutate mare, 3 seturi × 8 repetări.</li>
        <li>Flexii biceps în piramidă descendentă.</li>
        <li>Plank lateral: 2 seturi × 25 secunde pe fiecare parte.</li>
        <li>Stretching spate și bicepși.</li>
      </ul>
    `
  },
  17: {
    title: "Ziua 17 – Săptămâna 3 (Miercuri)",
    content: `
      <p>Recuperare activă:</p>
      <ul>
        <li>Cardio ușor (înot sau ciclism) 20–30 minute.</li>
        <li>Sesiune lungă de stretching și mobilitate pentru întreg corpul.</li>
        <li>Opțional: yoga blândă pentru relaxare.</li>
      </ul>
    `
  },
  18: {
    title: "Ziua 18 – Săptămâna 3 (Joi)",
    content: `
      <p>Push cu accent pe forță:</p>
      <ul>
        <li>Genuflexiuni: 5×5 cu greutate mare, apoi un set de ardere de 15 repetări fără greutate.</li>
        <li>Flotări declinate sau cu vestă: 3 seturi; include drop‑set (treci la flotări normale imediat ce nu mai poți).</li>
        <li>Shoulder press greu: 1–2 repetări maxime, apoi 2 seturi normale.</li>
        <li>Dips la scaun: 2 seturi × cât poți.</li>
        <li>Core: russian twists și ridicări de picioare (2 seturi fiecare).</li>
        <li>Stretching pentru piept, umeri, triceps și picioare.</li>
      </ul>
    `
  },
  19: {
    title: "Ziua 19 – Săptămâna 3 (Vineri)",
    content: `
      <p>Test final pentru tracțiuni și pull:</p>
      <ul>
        <li>Testează câte tracțiuni complete poți face consecutiv fără bandă.</li>
        <li>Tracțiuni asistate: 2 seturi × maxim repetări cu bandă subțire.</li>
        <li>Ramat inversat: 3 seturi, cu coborâre lentă.</li>
        <li>Superset biceps: flexii clasice și hammer curls (2 seturi).</li>
        <li>Core: plank 1 minut și exercițiul Superman (10 repetări).</li>
        <li>Stretching spate, bicepși, antebrațe.</li>
      </ul>
    `
  },
  20: {
    title: "Ziua 20 – Săptămâna 3 (Sâmbătă)",
    content: `
      <p>Cardio lejer și evaluare:</p>
      <ul>
        <li>Plimbare sau bicicletă 40–60 minute la intensitate medie.</li>
        <li>Notează progresul: cântărire și măsurători corporale.</li>
        <li>Sesiune lungă de stretching sau yoga.</li>
      </ul>
    `
  },
  21: {
    title: "Ziua 21 – Săptămâna 3 (Duminică)",
    content: `
      <p><strong>Pauză.</strong> Profită de odihnă completă înainte de testele finale.</p>
    `
  },
  // Week 4
  22: {
    title: "Ziua 22 – Săptămâna 4 (Luni)",
    content: `
      <p>Test final de flotări:</p>
      <ul>
        <li>Încălzire: 5 minute cardio ușor și câteva flotări de încălzire.</li>
        <li>Testează numărul maxim de flotări corecte consecutive.</li>
        <li>Mini antrenament: 2 seturi de flotări la ~70% din maxim, 2 seturi de dips sau flotări la scaun.</li>
        <li>Stretching complet pentru partea superioară.</li>
      </ul>
    `
  },
  23: {
    title: "Ziua 23 – Săptămâna 4 (Marți)",
    content: `
      <p>Test final de tracțiuni:</p>
      <ul>
        <li>Încălzire: pendurări și tracțiuni asistate ușoare.</li>
        <li>Testează câte tracțiuni complete poți face consecutiv.</li>
        <li>Mini antrenament: 2 seturi de tracțiuni asistate, ramat cu gantere și flexii biceps ușoare.</li>
        <li>Stretching pentru spate, bicepși și antebrațe.</li>
      </ul>
    `
  },
  24: {
    title: "Ziua 24 – Săptămâna 4 (Miercuri)",
    content: `
      <p>Antrenament full‑body ușor (deload):</p>
      <ul>
        <li>2 seturi de genuflexiuni fără greutate sau cu o ganteră mică.</li>
        <li>2 seturi de flotări (40–50% din maxim).</li>
        <li>2 seturi de tracțiuni asistate ușoare.</li>
        <li>2 seturi de abdomene (crunch și ridicări de picioare).</li>
        <li>Mobilitate și stretching.</li>
      </ul>
    `
  },
  25: {
    title: "Ziua 25 – Săptămâna 4 (Joi)",
    content: `
      <p>Cardio ușor:</p>
      <ul>
        <li>Jogging 20–25 minute sau mers rapid 30–40 minute.</li>
        <li>Exerciții cardio cu impact redus, cum ar fi bicicleta.</li>
        <li>Stretching și hidratare adecvată.</li>
      </ul>
    `
  },
  26: {
    title: "Ziua 26 – Săptămâna 4 (Vineri)",
    content: `
      <p><strong>Pauză completă.</strong> Odihnește‑te și pregătește‑te pentru ultimele zile de recuperare.</p>
    `
  },
  27: {
    title: "Ziua 27 – Săptămâna 4 (Sâmbătă)",
    content: `
      <p>Flexibilitate și relaxare:</p>
      <ul>
        <li>Sesiune lungă de stretching (20–30 minute).</li>
        <li>Yoga blândă sau meditație.</li>
        <li>Plimbare ușoară în aer liber.</li>
      </ul>
    `
  },
  28: {
    title: "Ziua 28 – Săptămâna 4 (Duminică)",
    content: `
      <p>Ultima zi: relaxare și planificare a următorului ciclu. Poți face o plimbare ușoară sau stretching, dar nu e nevoie de antrenament intensiv.</p>
    `
  }
};

// Select all calendar day cells
const dayCells = document.querySelectorAll('.day');
const detailsSection = document.getElementById('details');
const dayTitleEl = document.getElementById('day-title');
const dayContentEl = document.getElementById('day-content');

// Helper to clear active state
function clearActive() {
  dayCells.forEach(cell => cell.classList.remove('active'));
}

// Attach click listeners to each day cell
dayCells.forEach(cell => {
  cell.addEventListener('click', () => {
    const dayId = cell.dataset.day;
    const task = tasks[dayId];
    clearActive();
    cell.classList.add('active');
    if (task) {
      dayTitleEl.textContent = task.title;
      dayContentEl.innerHTML = task.content;
    } else {
      dayTitleEl.textContent = 'Zi fără plan';
      dayContentEl.innerHTML = '<p>Nu există exerciții programate pentru această zi.</p>';
    }
    detailsSection.classList.remove('hidden');
  });
});