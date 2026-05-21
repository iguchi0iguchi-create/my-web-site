const fallbackMarkets = {
  kanto: {
    regionId: "kanto",
    regionName: "関東市場",
    shortName: "関東",
    updatedAt: "2026-05-21 06:30",
    quest: {
      title: "1000円以内で最強カレー素材を集めろ！",
      copy: "にんじん・玉ねぎが買い時。肉屋の門番はまだ強い。"
    },
    seasonBonus: ["トマト", "玉ねぎ"],
    vegetables: [
      vegetable("にんじん", 98, "3本", -35, 96, "RARE ITEM", "rare", "今なら主婦ギルド推奨。カレー、きんぴら、スープで三連撃。", "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=900&q=80", [162, 148, 136, 128, 118, 104, 98], 112, [96, 88, 82]),
      vegetable("大根", 128, "1本", -24, 88, "DROP DUNGEON", "crash", "暴落ダンジョン入口で発見。煮物パーティに即加入。", "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?auto=format&fit=crop&w=900&q=80", [168, 162, 154, 148, 142, 134, 128], 148, [88, 76, 70]),
      vegetable("玉ねぎ", 158, "3個", -18, 91, "HARVEST EVENT", "harvest", "豊作イベント発生。炒め物の基礎火力が上がる。", "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=900&q=80", [192, 188, 181, 176, 169, 162, 158], 138, [82, 96, 90]),
      vegetable("キャベツ", 298, "1玉", 42, 42, "BOSS", "boss", "価格高騰BOSS出現。ロールキャベツ城は今日は危険。", "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&w=900&q=80", [210, 218, 236, 248, 264, 282, 298], 248, [28, 82, 72]),
      vegetable("レタス", 238, "1玉", 28, 51, "WARNING", "warning", "雨不足デバフで相場が暴走中。サラダ編成は慎重に。", "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=900&q=80", [186, 191, 198, 204, 216, 226, 238], 268, [42, 70, 44]),
      vegetable("トマト", 228, "4個", -9, 84, "SEASON BUFF", "season", "期間限定バフ。冷やし中華の装備枠に強い。", "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=900&q=80", [250, 246, 242, 238, 234, 230, 228], 218, [70, 84, 58])
    ]
  },
  kansai: {
    regionId: "kansai",
    regionName: "関西市場",
    shortName: "関西",
    updatedAt: "2026-05-21 06:30",
    quest: {
      title: "粉もんギルドの薬味を守れ！",
      copy: "ネギ急落。今日のたこ焼き部隊はMP消費が軽い。"
    },
    seasonBonus: ["なす", "ネギ"],
    vegetables: [
      vegetable("ネギ", 108, "1束", -31, 94, "DROP DUNGEON", "crash", "関西市場でネギ価格急落。薬味の剣が二刀流になる。", "https://images.unsplash.com/photo-1615560127642-0e5a5a495a10?auto=format&fit=crop&w=900&q=80", [156, 151, 146, 139, 128, 118, 108], 142, [94, 86, 66]),
      vegetable("玉ねぎ", 138, "3個", -22, 95, "HARVEST EVENT", "harvest", "豊作イベント発生。カレー、牛丼、味噌汁で連続攻撃。", "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=900&q=80", [177, 172, 166, 158, 151, 144, 138], 158, [90, 96, 90]),
      vegetable("なす", 168, "3本", -20, 87, "SEASON BUFF", "season", "旬の期間限定バフ。揚げびたし魔法がよく通る。", "https://images.unsplash.com/photo-1604245437608-50c6bb8d4ee5?auto=format&fit=crop&w=900&q=80", [210, 204, 198, 188, 181, 174, 168], 198, [84, 78, 54]),
      vegetable("レタス", 268, "1玉", 35, 39, "BOSS", "boss", "価格暴走BOSS。サンドイッチ城の門番が強すぎる。", "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=900&q=80", [198, 205, 214, 226, 238, 252, 268], 238, [26, 70, 44]),
      vegetable("キャベツ", 248, "1玉", 18, 62, "WARNING", "warning", "お好み焼き需要でじわ高。粉もん勇者は在庫確認。", "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&w=900&q=80", [210, 214, 218, 226, 234, 241, 248], 298, [58, 86, 72]),
      vegetable("にんじん", 112, "3本", -12, 86, "RARE ITEM", "rare", "安定のレア素材。弁当クエストで地味に強い。", "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=900&q=80", [128, 126, 123, 121, 118, 115, 112], 98, [82, 88, 82])
    ]
  }
};

const newsMemory = [];
const selectors = {
  apiStatus: "[data-api-status]",
  log: "[data-news-log]",
  discountRanking: "[data-discount-ranking]",
  warningRanking: "[data-warning-ranking]",
  bossAlert: "[data-boss-alert]",
  bossTitle: "[data-boss-title]",
  bossLabel: "[data-boss-label]",
  chart: "[data-price-chart]",
  chartTitle: "[data-chart-title]",
  compareList: "[data-compare-list]",
  activeRegion: "[data-active-region]",
  saverRank: "[data-saver-rank]",
  questTitle: "[data-quest-title]",
  questCopy: "[data-quest-copy]",
  recommendPhoto: "[data-recommend-photo]",
  recommendRarity: "[data-recommend-rarity]",
  recommendEncounter: "[data-recommend-encounter]",
  recommendName: "[data-recommend-name]",
  recommendPrice: "[data-recommend-price]",
  recommendChange: "[data-recommend-change]",
  recommendCopy: "[data-recommend-copy]",
  statCheap: "[data-stat-cheap]",
  statUtility: "[data-stat-utility]",
  statKeep: "[data-stat-keep]"
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".region-tab").forEach((tab) => {
    tab.addEventListener("click", () => selectRegion(tab));
  });

  selectRegion(document.querySelector(".region-tab.is-active"));
});

async function selectRegion(tab) {
  if (!tab) return;

  document.querySelectorAll(".region-tab").forEach((item) => {
    const isActive = item === tab;
    item.classList.toggle("is-active", isActive);
    item.setAttribute("aria-selected", String(isActive));
  });

  const apiUrl = tab.dataset.api;
  setText(selectors.apiStatus, `API: ${apiUrl}`);

  try {
    const response = await fetch(apiUrl, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    renderMarket(await response.json(), apiUrl);
  } catch (error) {
    const fallback = fallbackMarkets[tab.dataset.region];
    setText(selectors.apiStatus, `API: ${apiUrl} / fallback mode`);
    renderMarket(fallback, apiUrl);
  }
}

function renderMarket(market, apiUrl) {
  const vegetables = [...market.vegetables];
  const recommendation = vegetables.sort((a, b) => b.score - a.score)[0];
  const discounts = [...market.vegetables].sort((a, b) => a.change - b.change).slice(0, 3);
  const warnings = [...market.vegetables].sort((a, b) => b.change - a.change).slice(0, 3);
  const boss = warnings[0];

  document.body.dataset.marketMood = marketMood(boss, discounts[0]);
  setText(selectors.apiStatus, `API: ${apiUrl} / ${market.updatedAt}`);
  setText(selectors.activeRegion, market.shortName);
  setText(selectors.saverRank, recommendation.score >= 94 ? "SS" : "S");
  setText(selectors.questTitle, market.quest.title);
  setText(selectors.questCopy, market.quest.copy);

  renderRecommendation(recommendation);
  renderRanking(selectors.discountRanking, discounts, "discount");
  renderRanking(selectors.warningRanking, warnings, "warning");
  renderBoss(boss);
  renderBonus(market);
  renderChart(recommendation);
  renderComparison(market, recommendation.name);
  renderNewsLog(market, recommendation, discounts[0], boss);
}

function renderRecommendation(item) {
  const img = document.querySelector(selectors.recommendPhoto);
  img.src = item.photo;
  img.alt = `${item.name}のリアル写真`;
  setText(selectors.recommendRarity, item.rarity);
  setText(selectors.recommendEncounter, `${item.name}を発見！`);
  setText(selectors.recommendName, "本日の最強コスパ野菜");
  setText(selectors.recommendPrice, `${item.price}円 / ${item.unit}`);
  setText(selectors.recommendChange, `市場価格 ${signed(item.change)}%`);
  setText(selectors.recommendCopy, item.copy);
  setBar(selectors.statCheap, item.stats.cheap);
  setBar(selectors.statUtility, item.stats.utility);
  setBar(selectors.statKeep, item.stats.keep);
}

function renderRanking(selector, items, type) {
  const list = document.querySelector(selector);
  list.innerHTML = items.map((item, index) => {
    const marker = type === "warning" ? "!" : String(index + 1);
    const label = type === "warning" ? warningLabel(item) : `${signed(item.change)}%`;
    return `<li class="${effectClass(item)}"><span>${marker}</span><strong>${item.name}</strong><em>${label}</em></li>`;
  }).join("");
}

function renderBoss(item) {
  const alert = document.querySelector(selectors.bossAlert);
  alert.className = `boss-alert ${effectClass(item)}`;
  setText(selectors.bossTitle, `${item.name}価格 ${signed(item.change)}%`);
  setText(selectors.bossLabel, item.change >= 30 ? "BOSS 出現" : "WARNING");
}

function renderBonus(market) {
  const bonusItems = market.seasonBonus
    .map((name) => market.vegetables.find((item) => item.name === name))
    .filter(Boolean)
    .slice(0, 2);

  document.querySelectorAll("[data-bonus-card]").forEach((card, index) => {
    const item = bonusItems[index];
    if (!item) return;
    card.className = effectClass(item);
    card.innerHTML = `
      <img src="${item.photo}" alt="${item.name}のリアル写真">
      <div>
        <p>${item.status === "harvest" ? "豊作イベント" : "期間限定バフ"}</p>
        <strong>${item.name}</strong>
      </div>
    `;
  });
}

function renderChart(item) {
  const max = Math.max(...item.history);
  setText(selectors.chartTitle, `${item.name} 価格推移`);
  document.querySelector(selectors.chart).innerHTML = item.history.map((price, index) => {
    const height = Math.max(14, Math.round((price / max) * 96));
    const label = ["月", "火", "水", "木", "金", "土", "今日"][index];
    const today = index === item.history.length - 1 ? "today" : "";
    return `<span class="${today}" style="height: ${height}%"><b>${label}</b><i>${price}円</i></span>`;
  }).join("");
}

function renderComparison(market, activeName) {
  const rows = [...market.vegetables]
    .sort((a, b) => Math.abs(b.comparePrice - b.price) - Math.abs(a.comparePrice - a.price))
    .slice(0, 4);

  document.querySelector(selectors.compareList).innerHTML = rows.map((item) => {
    const diff = item.price - item.comparePrice;
    const result = diff <= 0 ? `${market.shortName}が${Math.abs(diff)}円安い` : `相手市場が${diff}円安い`;
    const active = item.name === activeName ? "is-featured" : "";
    return `<li class="${active}"><strong>${item.name}</strong><span>${item.price}円 vs ${item.comparePrice}円 / ${result}</span></li>`;
  }).join("");
}

function renderNewsLog(market, recommended, biggestDrop, biggestRise) {
  const generated = generateNews(market, recommended, biggestDrop, biggestRise);
  newsMemory.unshift(...generated);
  newsMemory.splice(6);

  document.querySelector(selectors.log).innerHTML = newsMemory.map((entry) => (
    `<article class="log-entry ${entry.level}">
      <p class="tag">${entry.tag}</p>
      <h2>${entry.title}</h2>
      <p>${entry.body}</p>
    </article>`
  )).join("");
}

function generateNews(market, recommended, biggestDrop, biggestRise) {
  const rareOpeners = [
    `本日のレア野菜：${recommended.name}`,
    `${recommended.name}を発見！買い物勇者の財布が光った！`,
    `${market.regionName}の最強コスパ枠は${recommended.name}に決定！`
  ];
  const dropOpeners = [
    `${market.regionName}で${biggestDrop.name}価格急落！`,
    `${biggestDrop.name}が暴落ダンジョンに突入！`,
    `${biggestDrop.name}安すぎイベント発生！`
  ];
  const riseOpeners = [
    `${biggestRise.name}BOSS出現！価格高騰中！`,
    `${biggestRise.name}の相場が暴走しています！`,
    `${biggestRise.name}警報、買い物勇者は防御して！`
  ];

  return [
    {
      level: biggestRise.change >= 25 ? "danger" : "warning",
      tag: biggestRise.change >= 30 ? "WARNING" : "ALERT",
      title: pick(riseOpeners),
      body: `${biggestRise.price}円 / ${biggestRise.unit}、前回比 ${signed(biggestRise.change)}%。高騰モンスター討伐は見送り推奨。`
    },
    {
      level: biggestDrop.change <= -25 ? "blink" : "event",
      tag: biggestDrop.change <= -25 ? "DROP" : "EVENT",
      title: pick(dropOpeners),
      body: `${biggestDrop.price}円 / ${biggestDrop.unit}、前回比 ${signed(biggestDrop.change)}%。今なら買い物カゴに即加入。`
    },
    {
      level: recommended.status === "harvest" ? "sparkle" : "event",
      tag: "RARE",
      title: pick(rareOpeners),
      body: `コスパスコア ${recommended.score}、価格は${recommended.price}円 / ${recommended.unit}。正確だけどテンションは高めです。`
    }
  ];
}

function vegetable(name, price, unit, change, score, rarity, status, copy, photo, history, comparePrice, stats) {
  return {
    name,
    price,
    unit,
    change,
    score,
    rarity,
    status,
    copy,
    photo,
    history,
    comparePrice,
    stats: { cheap: stats[0], utility: stats[1], keep: stats[2] }
  };
}

function warningLabel(item) {
  if (item.change >= 30) return "BOSS出現";
  if (item.change >= 18) return "警報";
  if (item.change > 0) return "上昇中";
  return `${signed(item.change)}%`;
}

function effectClass(item) {
  if (item.change >= 25 || item.status === "boss") return "effect-danger";
  if (item.change <= -25 || item.status === "crash") return "effect-blink";
  if (item.status === "harvest" || item.status === "season") return "effect-sparkle";
  return "";
}

function marketMood(rise, drop) {
  if (rise.change >= 30) return "danger";
  if (drop.change <= -30) return "crash";
  return "harvest";
}

function signed(value) {
  return value > 0 ? `+${value}` : String(value);
}

function pick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function setBar(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.style.width = `${value}%`;
}
