/* ============================================================
   1. DATA
   ============================================================ */
const SKILLS = [
  /* ---------- CLICK BRANCH ---------- */
  { id:'finger', icon:'👆', name:'Strong Finger', branch:'click',
    cost:10, costMult:1.35, maxLevel:10, req:[], lineFrom:null, x:14, y:8,
    effect:{ type:'click_add', value:1 }, desc:'+1 per click',
    flavor:'One click at a time — but make every one count.' },

  { id:'mouse', icon:'🖱️', name:'Steel Mouse', branch:'click',
    cost:500, costMult:1.6, maxLevel:5, req:[{id:'finger',level:5}], lineFrom:'finger', x:14, y:26,
    effect:{ type:'click_mult', value:1.5 }, desc:'Click ×1.5',
    flavor:'A proper tool for a proper baker. Reinforced springs, extra click.' },

  { id:'golden', icon:'✨', name:'Golden Touch', branch:'click',
    cost:25000, costMult:1.8, maxLevel:3, req:[{id:'mouse',level:5}], lineFrom:'mouse', x:14, y:44,
    effect:{ type:'click_mult', value:2 }, desc:'Click ×2',
    flavor:'Everything you touch turns to cookies. Your dentist weeps.' },

  { id:'clickstorm', icon:'🔥', name:'Click Storm', branch:'click',
    cost:500000, costMult:2.0, maxLevel:3, req:[{id:'golden',level:3}], lineFrom:'golden', x:14, y:62,
    effect:{ type:'click_mult', value:3 }, desc:'Click ×3',
    flavor:'Your finger becomes a blur of sugar and pure willpower.' },

  { id:'clicklord', icon:'👑', name:'Click Lord', branch:'click',
    cost:50000000, costMult:2.5, maxLevel:2, req:[{id:'clickstorm',level:3}], lineFrom:'clickstorm', x:14, y:80,
    effect:{ type:'click_mult', value:5 }, desc:'Click ×5',
    flavor:'Ruler of the click. Feared by ovens everywhere.' },

  /* ---------- CPS BRANCH ---------- */
  { id:'cursor', icon:'🖱️', name:'Cursor', branch:'cps',
    cost:15, costMult:1.35, maxLevel:10, req:[], lineFrom:null, x:86, y:8,
    effect:{ type:'cps_add', value:0.1 }, desc:'+0.1 / sec',
    flavor:'An extra hand to help. Well… an extra mouse, technically.' },

  { id:'grandma', icon:'👵', name:'Grandma', branch:'cps',
    cost:100, costMult:1.35, maxLevel:10, req:[{id:'cursor',level:3}], lineFrom:'cursor', x:86, y:22,
    effect:{ type:'cps_add', value:1 }, desc:'+1 / sec',
    flavor:'She has been baking since before you were born. Do not ask how.' },

  { id:'farm', icon:'🌾', name:'Farm', branch:'cps',
    cost:1100, costMult:1.35, maxLevel:10, req:[{id:'grandma',level:5}], lineFrom:'grandma', x:86, y:36,
    effect:{ type:'cps_add', value:8 }, desc:'+8 / sec',
    flavor:'Cookie dough literally grows on trees here. Science is confused.' },

  { id:'factory', icon:'🏭', name:'Factory', branch:'cps',
    cost:12000, costMult:1.35, maxLevel:10, req:[{id:'farm',level:5}], lineFrom:'farm', x:86, y:50,
    effect:{ type:'cps_add', value:50 }, desc:'+50 / sec',
    flavor:'Industrial-scale confectionery. Cookies roll off the line by the ton.' },

  { id:'mine', icon:'⛏️', name:'Mine', branch:'cps',
    cost:130000, costMult:1.35, maxLevel:10, req:[{id:'factory',level:5}], lineFrom:'factory', x:86, y:64,
    effect:{ type:'cps_add', value:200 }, desc:'+200 / sec',
    flavor:'Digging deep for the rarest ingredient: artisanal chocolate chips.' },

  { id:'bank', icon:'🏦', name:'Bank', branch:'cps',
    cost:1400000, costMult:1.35, maxLevel:10, req:[{id:'mine',level:5}], lineFrom:'mine', x:86, y:78,
    effect:{ type:'cps_add', value:800 }, desc:'+800 / sec',
    flavor:'Interest, but in cookies. Your accountant is a cookie too.' },

  { id:'temple', icon:'🏛️', name:'Temple', branch:'cps',
    cost:15000000, costMult:1.4, maxLevel:8, req:[{id:'bank',level:5}], lineFrom:'bank', x:86, y:92,
    effect:{ type:'cps_add', value:3000 }, desc:'+3000 / sec',
    flavor:'Ancient cookie wisdom flows through its halls. Also: free samples.' },

  /* ---------- SYNERGY BRANCH ---------- */
  { id:'clicksyn', icon:'⚡', name:'Click Synergy', branch:'syn',
    cost:8000, costMult:1.7, maxLevel:5,
    req:[{id:'mouse',level:3},{id:'grandma',level:3}], lineFrom:'mouse', x:50, y:22,
    effect:{ type:'click_syn', value:1 }, desc:'+1s CPS per click',
    flavor:'Your clicks resonate with your bakery. Every tap shakes loose extra cookies.' },

  { id:'cursorsyn', icon:'🔮', name:'Cursor Power', branch:'syn',
    cost:5000, costMult:1.8, maxLevel:5,
    req:[{id:'cursor',level:10},{id:'grandma',level:5}], lineFrom:'grandma', x:50, y:42,
    effect:{ type:'cps_syn_cursor', value:0.01 }, desc:'+1% CPS per cursor',
    flavor:'Each cursor adds a little something to the whole operation.' },

  { id:'gpsmult', icon:'📈', name:'Global Boost', branch:'syn',
    cost:100000, costMult:2.0, maxLevel:5,
    req:[{id:'farm',level:5}], lineFrom:'farm', x:50, y:62,
    effect:{ type:'cps_mult', value:1.25 }, desc:'CPS ×1.25',
    flavor:'Everything gets a little sweeter. Even the things that were already sweet.' },

  { id:'megaboost', icon:'💎', name:'Diamond Boost', branch:'syn',
    cost:10000000, costMult:2.5, maxLevel:3,
    req:[{id:'bank',level:5}], lineFrom:'bank', x:50, y:82,
    effect:{ type:'cps_mult', value:2 }, desc:'CPS ×2',
    flavor:'Diamonds are a cookie’s best friend. And yours, if you can afford it.' },
];

const CHIPS = [
  {x:30,y:26,s:26},{x:62,y:22,s:20},{x:46,y:47,s:29},
  {x:72,y:56,s:22},{x:26,y:62,s:24},{x:55,y:74,s:20},
  {x:78,y:34,s:18},{x:38,y:82,s:22}
];

const SUFFIX  = ['','K','M','B','T','Qa','Qi','Sx','Sp','Oc','No','Dc'];
const SAVE_KEY = 'cookieEmpireSave_v2';

/* ============================================================
   2. STATE
   ============================================================ */
let state = {
  cookies: 0,
  total: 0,
  clicks: 0,
  levels: {},
  // derived
  clickPower: 1,
  cps: 0,
  clickSyn: 0
};

/* ============================================================
   3. DOM
   ============================================================ */
const $ = id => document.getElementById(id);
const countEl    = $('count');
const cpsEl      = $('cps');
const cpkEl      = $('cpk');
const totalEl    = $('total');
const clicksEl   = $('clicks');
const synRow     = $('synRow');
const synValEl   = $('synVal');
const cookieEl   = $('cookie');
const treeEl     = $('tree');
const treeScroll = $('treeScroll');
const linesEl    = $('lines');
const floatersEl = $('floaters');
const toastsEl   = $('toasts');
const goldenEl   = $('goldenCookie');
const tooltipEl  = $('tooltip');

/* ============================================================
   4. UTILITIES
   ============================================================ */
function fmt(n){
  if (n < 1e6) return Math.floor(n).toLocaleString('en-US');
  let t = 0;
  while (n >= 1000 && t < SUFFIX.length - 1){ n /= 1000; t++; }
  return n.toFixed(2) + SUFFIX[t];
}
function fmtShort(n){
  if (n === 0) return '0';
  if (n < 100) return (Math.round(n * 10) / 10).toString();
  return fmt(n);
}
function fmtNum(v){
  if (v >= 100) return Math.round(v).toString();
  if (v >= 10)  return (Math.round(v * 10) / 10).toString();
  return (Math.round(v * 100) / 100).toString();
}
function toast(msg, type){
  const t = document.createElement('div');
  t.className = 'toast' + (type ? ' ' + type : '');
  t.textContent = msg;
  toastsEl.appendChild(t);
  setTimeout(() => t.remove(), 2600);
}
function getCost(s, level){
  return Math.floor(s.cost * Math.pow(s.costMult, level));
}
function isUnlocked(s){
  return s.req.every(r => (state.levels[r.id] || 0) >= r.level);
}
function formatEffect(s, lv){
  if (lv === 0) return s.desc;
  const e = s.effect;
  switch(e.type){
    case 'click_add': return '+' + (e.value * lv) + ' per click';
    case 'click_mult': {
      const m = Math.pow(e.value, lv);
      return 'Click ×' + (m % 1 === 0 ? m : m.toFixed(2));
    }
    case 'cps_add': {
      const v = e.value * lv;
      return '+' + fmtNum(v) + ' / sec';
    }
    case 'cps_mult': {
      const m = Math.pow(e.value, lv);
      return 'CPS ×' + (m % 1 === 0 ? m : m.toFixed(2));
    }
    case 'click_syn': return '+' + (e.value * lv) + 's CPS / click';
    case 'cps_syn_cursor': return '+' + (e.value * lv * 100).toFixed(0) + '% per cursor';
  }
  return s.desc;
}

/* ============================================================
   5. DERIVED STATS
   ============================================================ */
function recalcStats(){
  let clickAdd = 0, clickMult = 1;
  let cpsBase = 0, cpsMult = 1;
  let clickSyn = 0, cursorSyn = 0;
  let cursorLevel = 0;

  for (let i = 0; i < SKILLS.length; i++){
    const s = SKILLS[i];
    const lv = state.levels[s.id] || 0;
    if (lv === 0) continue;
    const e = s.effect;
    switch(e.type){
      case 'click_add':     clickAdd  += e.value * lv; break;
      case 'click_mult':    clickMult *= Math.pow(e.value, lv); break;
      case 'cps_add':       cpsBase   += e.value * lv; break;
      case 'cps_mult':      cpsMult   *= Math.pow(e.value, lv); break;
      case 'click_syn':     clickSyn  += e.value * lv; break;
      case 'cps_syn_cursor':cursorSyn += e.value * lv; break;
    }
    if (s.id === 'cursor') cursorLevel = lv;
  }

  state.clickPower = (1 + clickAdd) * clickMult;
  state.cps        = cpsBase * (1 + cursorLevel * cursorSyn) * cpsMult;
  state.clickSyn   = clickSyn;
}

/* ============================================================
   6. BUILD UI
   ============================================================ */
// cookie chips
for (let i = 0; i < CHIPS.length; i++){
  const c = CHIPS[i];
  const chip = document.createElement('span');
  chip.className = 'chip';
  chip.style.left   = c.x + '%';
  chip.style.top    = c.y + '%';
  chip.style.width  = c.s + 'px';
  chip.style.height = c.s + 'px';
  cookieEl.appendChild(chip);
}

// skill nodes
const nodeEls  = {};
const nodeCache = {};
const lineEls  = [];

for (let i = 0; i < SKILLS.length; i++){
  const s = SKILLS[i];
  const el = document.createElement('div');
  el.className = 'node locked';
  el.dataset.id = s.id;
  el.dataset.branch = s.branch;
  el.style.left = s.x + '%';
  el.style.top  = s.y + '%';
  el.innerHTML =
    '<span class="check">✓</span>' +
    '<span class="ico">' + s.icon + '</span>' +
    '<div class="nm">' + s.name + '</div>' +
    '<div class="lv">Lv 0/' + s.maxLevel + '</div>' +
    '<div class="ef">' + s.desc + '</div>' +
    '<div class="pr">🍪 ' + fmt(s.cost) + '</div>' +
    '<div class="bar"><i></i></div>';
  treeEl.appendChild(el);
  nodeEls[s.id] = el;
}

// tree lines
for (let i = 0; i < SKILLS.length; i++){
  const s = SKILLS[i];
  if (!s.lineFrom) continue;
  const from = SKILLS.find(k => k.id === s.lineFrom);
  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line.setAttribute('x1', from.x);
  line.setAttribute('y1', from.y);
  line.setAttribute('x2', s.x);
  line.setAttribute('y2', s.y);
  line.dataset.to = s.id;
  linesEl.appendChild(line);
  lineEls.push(line);
}

/* ============================================================
   7. TREE RENDER
   ============================================================ */
function updateNode(s){
  const node = nodeEls[s.id];
  const lv = state.levels[s.id] || 0;
  const maxed = lv >= s.maxLevel;
  const unlocked = isUnlocked(s);
  const cost = maxed ? 0 : getCost(s, lv);
  const affordable = !maxed && unlocked && state.cookies >= cost;

  let cls = 'node';
  if (maxed) cls += ' owned';
  else if (!unlocked) cls += ' locked';
  else if (affordable) cls += ' ready';
  else cls += ' avail';

  const key = cls + '|' + lv;
  if (nodeCache[s.id] === key) return;
  nodeCache[s.id] = key;

  node.className = cls;
  node.querySelector('.lv').textContent = maxed ? 'MAX' : 'Lv ' + lv + '/' + s.maxLevel;
  node.querySelector('.ef').textContent = formatEffect(s, lv);

  const prEl = node.querySelector('.pr');
  if (maxed) prEl.textContent = '✓ Maxed';
  else if (!unlocked) prEl.textContent = '🔒 Locked';
  else prEl.textContent = '🍪 ' + fmt(cost);

  node.querySelector('.bar i').style.width = (lv / s.maxLevel * 100) + '%';
}

function updateLines(){
  for (let i = 0; i < lineEls.length; i++){
    const l = lineEls[i];
    const want = (state.levels[l.dataset.to] || 0) > 0 ? 'on' : '';
    if (l.dataset.cls !== want){
      l.setAttribute('class', want);
      l.dataset.cls = want;
    }
  }
}

function updateTree(){
  for (let i = 0; i < SKILLS.length; i++) updateNode(SKILLS[i]);
  updateLines();
  computeNextThreshold();
}

/* ============================================================
   8. THRESHOLD
   ============================================================ */
let nextThreshold = Infinity;
function computeNextThreshold(){
  let min = Infinity;
  for (let i = 0; i < SKILLS.length; i++){
    const s = SKILLS[i];
    const lv = state.levels[s.id] || 0;
    if (lv >= s.maxLevel) continue;
    if (!isUnlocked(s)) continue;
    const cost = getCost(s, lv);
    if (cost > state.cookies && cost < min) min = cost;
  }
  nextThreshold = min;
}

/* ============================================================
   9. PURCHASE
   ============================================================ */
function buy(id){
  const s = SKILLS.find(k => k.id === id);
  const lv = state.levels[id] || 0;

  if (lv >= s.maxLevel){ toast('⭐ ' + s.name + ' is maxed!'); return; }

  if (!isUnlocked(s)){
    const missing = s.req.find(r => (state.levels[r.id] || 0) < r.level);
    const m = SKILLS.find(k => k.id === missing.id);
    toast('🔒 Requires ' + m.name + ' Lv ' + missing.level);
    return;
  }

  const cost = getCost(s, lv);
  if (state.cookies < cost){ toast('🍪 Need ' + fmt(cost) + ' cookies'); return; }

  state.cookies -= cost;
  state.levels[id] = lv + 1;
  recalcStats();

  const node = nodeEls[id];
  node.classList.remove('flash');
  void node.offsetWidth;
  node.classList.add('flash');

  const newLv = lv + 1;
  if (newLv >= s.maxLevel) toast('⭐ MAXED: ' + s.name, 'good');
  else toast('✅ ' + s.name + ' → Lv ' + newLv, 'good');

  nodeCache[id] = null;
  updateTree();

  // refresh tooltip if this node is being hovered
  if (tooltipSkill && tooltipSkill.id === id) refreshTooltip();

  save();
}

/* ============================================================
   10. TOOLTIP
   ============================================================ */
let tooltipNode  = null;
let tooltipSkill = null;

function tooltipHTML(s){
  const lv = state.levels[s.id] || 0;
  const maxed = lv >= s.maxLevel;
  const unlocked = isUnlocked(s);
  const cost = maxed ? 0 : getCost(s, lv);

  let html = '';
  html += '<div class="tt-header"><span class="tt-icon">' + s.icon + '</span>' +
          '<span class="tt-name">' + s.name + '</span></div>';
  html += '<div class="tt-level">Level ' + lv + ' / ' + s.maxLevel + '</div>';

  if (lv > 0){
    html += '<div class="tt-row"><span class="tt-label">Current</span>' +
            '<span class="tt-val good">' + formatEffect(s, lv) + '</span></div>';
  }
  if (!maxed){
    html += '<div class="tt-row"><span class="tt-label">Next</span>' +
            '<span class="tt-val next">' + formatEffect(s, lv + 1) + '</span></div>';
  }

  if (!unlocked){
    const missing = s.req.find(r => (state.levels[r.id] || 0) < r.level);
    const m = SKILLS.find(k => k.id === missing.id);
    html += '<div class="tt-req locked">🔒 Requires ' + m.name + ' Lv ' + missing.level + '</div>';
  } else if (maxed){
    html += '<div class="tt-req maxed">✓ Maxed out</div>';
  } else {
    const affordable = state.cookies >= cost;
    html += '<div class="tt-req' + (affordable ? ' ready' : '') + '">🍪 ' + fmt(cost) + ' cookies</div>';
  }

  if (s.flavor){
    html += '<div class="tt-flavor">' + s.flavor + '</div>';
  }
  return html;
}

function refreshTooltip(){
  if (!tooltipSkill) return;
  tooltipEl.innerHTML = tooltipHTML(tooltipSkill);
  positionTooltip(tooltipNode);
}

function positionTooltip(node){
  if (!node) return;
  const r  = node.getBoundingClientRect();
  const tw = tooltipEl.offsetWidth;
  const th = tooltipEl.offsetHeight;
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  let left = r.left + r.width / 2 - tw / 2;
  let top  = r.top - th - 12;

  // Not enough room above → place below
  if (top < 8) top = r.bottom + 12;
  // If still off-screen (bottom), clamp
  if (top + th > vh - 8) top = Math.max(8, vh - th - 8);

  // Clamp horizontally
  left = Math.max(8, Math.min(left, vw - tw - 8));

  tooltipEl.style.left = left + 'px';
  tooltipEl.style.top  = top + 'px';
}

function showTooltip(node){
  const s = SKILLS.find(k => k.id === node.dataset.id);
  if (!s) return;
  tooltipNode  = node;
  tooltipSkill = s;
  tooltipEl.innerHTML = tooltipHTML(s);
  tooltipEl.classList.add('show');
  positionTooltip(node);
}

function hideTooltip(){
  tooltipEl.classList.remove('show');
  tooltipNode  = null;
  tooltipSkill = null;
}

// Desktop hover
if (window.matchMedia('(hover: hover)').matches){
  treeEl.addEventListener('mouseover', e => {
    const node = e.target.closest('.node');
    if (node) showTooltip(node);
  });
  treeEl.addEventListener('mouseout', e => {
    const node = e.target.closest('.node');
    if (node) hideTooltip();
  });
}

// Mobile long-press
let pressTimer = null;
let suppressClick = false;

treeEl.addEventListener('touchstart', e => {
  const node = e.target.closest('.node');
  if (!node) return;
  pressTimer = setTimeout(() => {
    suppressClick = true;
    showTooltip(node);
    if (navigator.vibrate) navigator.vibrate(10);
  }, 380);
}, { passive: true });

treeEl.addEventListener('touchend', () => {
  clearTimeout(pressTimer);
  if (suppressClick){
    setTimeout(() => { suppressClick = false; hideTooltip(); }, 1600);
  }
}, { passive: true });

treeEl.addEventListener('touchmove', () => {
  clearTimeout(pressTimer);
}, { passive: true });

// Hide on scroll / resize
treeScroll.addEventListener('scroll', hideTooltip, { passive: true });
window.addEventListener('resize', hideTooltip);

/* ============================================================
   11. CLICKING
   ============================================================ */
let displayedCookies = -1;

function punch(){
  cookieEl.classList.remove('punch');
  void cookieEl.offsetWidth;
  cookieEl.classList.add('punch');
}

function spawnFloater(x, y, text){
  const el = document.createElement('div');
  el.className = 'floater';
  el.textContent = text;
  el.style.left = x + 'px';
  el.style.top  = y + 'px';
  floatersEl.appendChild(el);
  el.addEventListener('animationend', () => el.remove());
}

function spawnCrumbs(x, y){
  for (let i = 0; i < 5; i++){
    const p = document.createElement('div');
    p.className = 'crumb';
    const a = Math.random() * Math.PI * 2;
    const d = 35 + Math.random() * 55;
    p.style.setProperty('--dx', Math.cos(a) * d + 'px');
    p.style.setProperty('--dy', Math.sin(a) * d + 'px');
    p.style.left = x + 'px';
    p.style.top  = y + 'px';
    const sz = 3 + Math.random() * 5;
    p.style.width  = sz + 'px';
    p.style.height = sz + 'px';
    floatersEl.appendChild(p);
    p.addEventListener('animationend', () => p.remove());
  }
}

function doClick(x, y){
  const gain = state.clickPower + state.cps * state.clickSyn;
  state.cookies += gain;
  state.total   += gain;
  state.clicks++;

  punch();
  spawnFloater(x, y, '+' + fmt(gain));
  spawnCrumbs(x, y);

  countEl.classList.remove('pop');
  void countEl.offsetWidth;
  countEl.classList.add('pop');
}

cookieEl.addEventListener('click', e => {
  const r = cookieEl.getBoundingClientRect();
  doClick(
    e.clientX || (r.left + r.width / 2),
    e.clientY || (r.top + r.height / 2)
  );
});

// tree click (delegated)
treeEl.addEventListener('click', e => {
  if (suppressClick) return;
  const node = e.target.closest('.node');
  if (!node) return;
  buy(node.dataset.id);
});

/* ============================================================
   12. GOLDEN COOKIE
   ============================================================ */
let goldenTimer  = 0;
let goldenNext   = 50 + Math.random() * 40;
let goldenActive = false;
let goldenHideTimer = null;

function spawnGolden(){
  if (goldenActive) return;
  goldenActive = true;
  const x = 12 + Math.random() * 72;
  const y = 12 + Math.random() * 72;
  goldenEl.style.left = x + 'vw';
  goldenEl.style.top  = y + 'vh';
  goldenEl.classList.add('spawn');

  goldenHideTimer = setTimeout(() => {
    goldenEl.classList.remove('spawn');
    goldenActive = false;
  }, 11000);
}

goldenEl.addEventListener('click', () => {
  if (!goldenActive) return;
  clearTimeout(goldenHideTimer);

  const bonus = Math.max(100, state.cookies * 0.1);
  state.cookies += bonus;
  state.total   += bonus;

  const r = goldenEl.getBoundingClientRect();
  spawnFloater(r.left + r.width / 2, r.top + r.height / 2, '🌟 +' + fmt(bonus));
  spawnCrumbs(r.left + r.width / 2, r.top + r.height / 2);
  toast('🌟 Golden cookie! +' + fmt(bonus), 'gold');

  goldenEl.classList.remove('spawn');
  goldenActive = false;
});

/* ============================================================
   13. GAME LOOP
   ============================================================ */
let last = performance.now();
let saveTimer = 0;
let lastCpsText = '';
let lastCpkText = '';

function loop(now){
  const dt = Math.min((now - last) / 1000, 1);
  last = now;

  const rate = state.cps;
  if (rate > 0){
    const gain = rate * dt;
    state.cookies += gain;
    state.total   += gain;
  }

  const shown = Math.floor(state.cookies);
  if (shown !== displayedCookies){
    countEl.textContent = fmt(shown);
    displayedCookies = shown;
  }

  const cpsText = fmtShort(rate);
  if (cpsText !== lastCpsText){ cpsEl.textContent = cpsText; lastCpsText = cpsText; }

  const cpkText = fmt(state.clickPower);
  if (cpkText !== lastCpkText){ cpkEl.textContent = cpkText; lastCpkText = cpkText; }

  totalEl.textContent  = fmt(Math.floor(state.total));
  clicksEl.textContent = state.clicks.toLocaleString('en-US');

  const synGain = state.cps * state.clickSyn;
  if (synGain > 0){
    synRow.style.display = 'flex';
    synValEl.textContent = fmt(synGain);
  } else if (synRow.style.display !== 'none'){
    synRow.style.display = 'none';
  }

  if (state.cookies >= nextThreshold) updateTree();

  goldenTimer += dt;
  if (goldenTimer >= goldenNext && !goldenActive && state.cookies > 50){
    goldenTimer = 0;
    goldenNext = 50 + Math.random() * 40;
    spawnGolden();
  }

  saveTimer += dt;
  if (saveTimer > 5){ saveTimer = 0; save(); }

  requestAnimationFrame(loop);
}

/* ============================================================
   14. SAVE / LOAD
   ============================================================ */
function save(){
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify({
      cookies: state.cookies,
      total:   state.total,
      clicks:  state.clicks,
      levels:  state.levels
    }));
  } catch(e){}
}

function load(){
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return;
    const d = JSON.parse(raw);
    state.cookies = d.cookies || 0;
    state.total   = d.total   || 0;
    state.clicks  = d.clicks  || 0;
    state.levels  = d.levels  || {};
    recalcStats();
  } catch(e){}
}

$('reset').addEventListener('click', () => {
  if (!confirm('Reset ALL progress?')) return;
  localStorage.removeItem(SAVE_KEY);
  state = { cookies:0, total:0, clicks:0, levels:{}, clickPower:1, cps:0, clickSyn:0 };
  displayedCookies = -1;
  lastCpsText = '';
  lastCpkText = '';
  for (const k in nodeCache) nodeCache[k] = null;
  updateTree();
  toast('Progress reset');
});

window.addEventListener('beforeunload', save);

/* ============================================================
   15. GO
   ============================================================ */
load();
recalcStats();
updateTree();
requestAnimationFrame(loop);