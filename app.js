const STORAGE_KEY = "taiwanMotoTrip.v1";

const TRIP_DAYS = [
  {
    day: 1, date: "9/11（五）", short: "嘉義", title: "竹東 → 嘉義", distance: "230–260 km", ride: "6–7 小時", stay: "嘉義市", pace: "06:30 出發 · 17:00 前抵達",
    risk: "長距離", notice: "首日不追景點數量；每 60–90 分鐘下車活動，傍晚前抵達嘉義。",
    stops: [
      ["新竹縣竹東鎮", "早晨出發，確認胎壓、油量與雨具。"],
      ["鹿港", "午餐與短暫散步，避免休息拖得太晚。"],
      ["雲林沿途", "視體力擇一補給，不額外繞遠。"],
      ["嘉義市", "入住後安排文化路夜市。"]
    ],
    nav: [["竹東 → 鹿港", "新竹縣竹東鎮", "鹿港天后宮"], ["鹿港 → 嘉義", "鹿港天后宮", "嘉義文化路夜市"]]
  },
  {
    day: 2, date: "9/12（六）", short: "台南", title: "嘉義 → 台南", distance: "80–120 km", ride: "2–3 小時", stay: "台南市", pace: "09:00 出發 · 下午保留休息",
    risk: "恢復日", notice: "刻意降低里程，留給老城、美食、車況檢查與身體恢復。",
    stops: [
      ["嘉義市", "早餐後慢慢出發，可先走一處人文景點。"],
      ["鹽水或新營", "依時間擇一，作為嘉南平原中繼。"],
      ["台南老城", "步行安排孔廟、神農街或國華街。"],
      ["台南夜市", "依營業日選花園、大東或武聖夜市。"]
    ],
    nav: [["嘉義 → 台南", "嘉義文化路夜市", "台南孔廟"]]
  },
  {
    day: 3, date: "9/13（日）", short: "寶來", title: "台南 → 寶來", distance: "120–150 km", ride: "4–5 小時", stay: "寶來／六龜", pace: "08:00 出發 · 16:00 前入住",
    risk: "入山前", notice: "甲仙先補油，入住前買妥飲水與早餐；晚上再次確認南橫放行、淨空時間與梅蘭加油站隔日營業狀況。",
    stops: [
      ["台南", "早上完成車輛與裝備最後補充。"],
      ["新化／左鎮", "避開快速道路，沿台 20 線前進。"],
      ["甲仙", "午餐、加油並確認山區天候。"],
      ["寶來／六龜", "提早入住休息，準備隔日清晨出發。"]
    ],
    nav: [["台南 → 甲仙", "台南孔廟", "甲仙區"], ["甲仙 → 寶來", "甲仙區", "寶來溫泉區"]],
    alternative: "若南橫確定封閉，今天不要進寶來，改走台南 → 枋寮住宿，隔日經台 9 線南迴前往台東。"
  },
  {
    day: 4, date: "9/14（一）", short: "台東", title: "寶來 → 南橫 → 台東", distance: "180–220 km", ride: "6–7 小時", stay: "台東市", pace: "05:30 起床 · 依公告進管制點",
    risk: "全程控制點", notice: "本日是否通行以公路局當日公告與現場管制為準；先確認進入、全線淨空時間，再決定是否離開寶來。",
    fuelStop: { name: "梅蘭加油站", detail: "西進南橫最後加油站 · 06:00–20:00 · 92／95 無鉛 · 無 98；出發前再確認營業", query: "梅蘭加油站 高雄市桃源區" },
    stops: [
      ["寶來", "依官方時段提早出發，不摸黑進山。"],
      ["梅蘭加油站", "油箱補滿後再進山；站點非 24 小時且無 98，勿把剩餘油量壓到極限。"],
      ["梅山口", "確認管制、油量、體力與煞車狀態。"],
      ["向陽／埡口周邊", "短停即可，不因拍照錯過淨空時間。"],
      ["池上／關山", "離開管制路段後再安排正餐與休息。"],
      ["台東市", "入住、檢查輪胎與煞車，早點休息。"]
    ],
    nav: [["寶來 → 梅蘭加油站", "寶來溫泉區", "梅蘭加油站"], ["梅蘭 → 梅山口", "梅蘭加油站", "梅山遊客中心"], ["梅山口 → 池上", "梅山遊客中心", "池上車站"], ["池上 → 台東", "池上車站", "台東市"]],
    alternative: "南橫封閉備案：由枋寮出發，走台 9 線南迴至台東。不要在管制點等待、闖行或改走未確認的產業道路。"
  },
  {
    day: 5, date: "9/15（二）", short: "花蓮", title: "台東 → 台 11 線 → 花蓮", distance: "180–200 km", ride: "5–6 小時", stay: "花蓮市", pace: "07:30 出發 · 17:00 前抵達",
    risk: "海岸側風", notice: "台 11 線午後可能有側風與短暫陣雨，停點以都蘭、三仙台、石梯坪為主。",
    stops: [
      ["台東市", "加滿油後沿台 11 線北上。"],
      ["都蘭", "咖啡或部落文化短停。"],
      ["三仙台", "視風浪與停車狀況停留。"],
      ["石梯坪", "最後一個主要休息點，天黑前續往花蓮。"],
      ["花蓮市", "晚上安排東大門夜市。"]
    ],
    nav: [["台東 → 三仙台", "台東市", "三仙台遊憩區"], ["三仙台 → 花蓮", "三仙台遊憩區", "花蓮東大門夜市"]]
  },
  {
    day: 6, date: "9/16（三）", short: "羅東", title: "花蓮 → 蘇花 → 羅東", distance: "130–160 km", ride: "4–6 小時", stay: "羅東", pace: "06:00 查路況 · 06:30 決定出發",
    risk: "道路管制", notice: "清晨依公路局公告決定是否出發。白牌導航必須避開蘇花改、快速道路及其他禁行路段。",
    stops: [
      ["花蓮市", "清晨確認天氣、道路災阻與油量。"],
      ["新城／崇德", "進入關鍵路段前再次確認路況；未確認白牌可通行就不續行。"],
      ["和平", "短停檢查油量、煞車與天候，保留返回花蓮的體力。"],
      ["南澳", "完成關鍵路段後休息補給，不在大型車旁久留。"],
      ["南方澳", "離開蘇花路段後安排午餐。"],
      ["羅東", "入住後前往羅東夜市。"]
    ],
    nav: [["花蓮 → 崇德", "花蓮市", "崇德車站"], ["崇德 → 和平", "崇德車站", "和平車站"], ["和平 → 南澳", "和平車站", "南澳車站"], ["南澳 → 羅東", "南澳車站", "羅東夜市"]],
    alternative: "蘇花預警性封閉時不要等待闖行。優先延後一天並調整住宿；若日期完全不能延長，應在出發前依預報改期。"
  },
  {
    day: 7, date: "9/17（四）", short: "竹東", title: "羅東 → 北宜 → 竹東", distance: "170–200 km", ride: "5–7 小時", stay: "回家", pace: "07:00 出發 · 避開通勤尖峰",
    risk: "返程疲勞", notice: "避開台北上下班尖峰與快速道路。疲勞時先停，不以預定返家時間壓縮休息。",
    stops: [
      ["羅東", "早餐後確認北宜天氣與煞車。"],
      ["坪林", "北宜公路中段休息，補充水分。"],
      ["三峽", "繞開市中心與快速道路，確認後段續走台 3 線。"],
      ["關西", "返家前最後休息，不搶傍晚車流。"],
      ["新竹縣竹東鎮", "傍晚前返抵，完成車輛巡檢。"]
    ],
    nav: [["羅東 → 坪林", "羅東夜市", "坪林老街"], ["坪林 → 三峽", "坪林老街", "三峽老街"], ["三峽 → 關西", "三峽老街", "關西老街"], ["關西 → 竹東", "關西老街", "新竹縣竹東鎮"]]
  }
];

const SOUTH_LINK_DAYS = TRIP_DAYS.map(day => ({ ...day }));
SOUTH_LINK_DAYS[2] = {
  day: 3, date: "9/13（日）", short: "枋寮", title: "台南 → 枋寮", distance: "150–190 km", ride: "4–5 小時", stay: "枋寮", pace: "08:00 出發 · 16:00 前入住",
  risk: "南迴前一晚", notice: "確認南橫不開放後不要前往寶來，改沿西南部平地南下；入住前加滿油並確認南迴路況。",
  stops: [
    ["台南", "早餐後確認台 9 線南迴與東部天氣。"],
    ["高雄外圍", "避開快速道路與市中心壅塞路段。"],
    ["東港／林邊", "安排午餐與休息，不繞進墾丁。"],
    ["枋寮", "加滿油、補充飲水，提早入住休息。"]
  ],
  nav: [["台南 → 東港", "台南孔廟", "東港華僑市場"], ["東港 → 枋寮", "東港華僑市場", "枋寮車站"]]
};
SOUTH_LINK_DAYS[3] = {
  day: 4, date: "9/14（一）", short: "台東", title: "枋寮 → 南迴 → 台東", distance: "110–140 km", ride: "3–4 小時", stay: "台東市", pace: "07:00 查路況 · 07:30 出發",
  risk: "替代山路", notice: "走台 9 線南迴，不繞墾丁。南迴仍可能因豪雨、落石或事故管制，當日須再次確認官方路況。",
  stops: [
    ["枋寮", "清晨確認南迴路況、油量與雨具。"],
    ["大武", "離開主要山路後休息補給。"],
    ["太麻里", "視天候短停，不因景點延誤。"],
    ["台東市", "中午後抵達，保留半天休息或市區慢遊。"]
  ],
  nav: [["枋寮 → 大武", "枋寮車站", "大武車站"], ["大武 → 台東", "大武車站", "台東市"]],
  alternative: "若南迴也因豪雨或災害封閉，不尋找產業道路繞行；留在安全城鎮、調整住宿或整趟改期。"
};

const PLAN_DETAILS = {
  main: {
    label: "南橫主線",
    summary: "D3 住寶來，D4 依放行時段穿越南橫前往台東。",
    days: TRIP_DAYS
  },
  southLink: {
    label: "南迴備案",
    summary: "南橫不開放時，D3 改住枋寮，D4 經台 9 線南迴前往台東。",
    days: SOUTH_LINK_DAYS
  }
};

const LODGING_GUIDES = {
  "嘉義": { area: "嘉義車站至文化路夜市一帶", reason: "餐飲選擇多，抵達後可步行用餐；隔天南下也容易離開市區。", query: "嘉義車站 旅館" },
  "台南": { area: "中西區／台南車站西側", reason: "靠近老城與餐飲，隔天可順接台 20 線；避免住進巷弄太深、停車不便的區域。", query: "台南中西區 旅館" },
  "寶來": { area: "寶來溫泉街與台 20 線沿線", reason: "距梅山口較近，隔天可配合放行時段；旅宿少，應優先確認晚到與機車停放。", query: "寶來溫泉 住宿" },
  "枋寮": { area: "枋寮車站／中山路周邊", reason: "晚餐、加油與補給方便，隔天可直接銜接台 9 線南迴。", query: "枋寮車站 住宿" },
  "台東": { area: "鐵花村／正氣路市區", reason: "餐飲與補給集中，隔天走台 11 線北上方便；若重視安靜可改找台東車站周邊。", query: "台東鐵花村 旅館" },
  "花蓮": { area: "花蓮市中心／東大門夜市外圍", reason: "晚餐方便，隔天往新城與蘇花方向順路；避開夜市正旁邊可能較吵的房間。", query: "花蓮市中心 旅館" },
  "羅東": { area: "羅東車站至羅東夜市之間", reason: "步行可用餐，隔天前往北宜公路方便；週末需提早預訂。", query: "羅東車站 旅館" }
};

const LODGING_REQUIREMENTS = ["每晚 NT$1,000–2,000", "可免費取消", "獨立衛浴"];

const FOOD_GUIDES = {
  "嘉義": [
    { name: "鹿港麵線糊", place: "鹿港", note: "首日午間補給，份量適中且不必久坐。", query: "鹿港 麵線糊" },
    { name: "鹿港肉圓", place: "鹿港", note: "可與麵線糊擇一，避免午餐吃得太撐。", query: "鹿港 肉圓" },
    { name: "火雞肉飯", place: "嘉義市", note: "抵達嘉義後的經典選擇，可搭配涼菜與湯。", query: "嘉義市 火雞肉飯" },
    { name: "砂鍋魚頭", place: "文化路夜市周邊", note: "適合多人分食；單人可改找小份沙鍋菜。", query: "嘉義 砂鍋魚頭" },
    { name: "嘉義豆花", place: "文化路夜市周邊", note: "晚餐後簡單收尾，選步行可到的店即可。", query: "嘉義文化路夜市 豆花" }
  ],
  "台南": [
    { name: "嘉義涼麵", place: "嘉義市", note: "麻醬加美乃滋是嘉義特色，適合出發前簡單吃。", query: "嘉義 涼麵" },
    { name: "虱目魚粥", place: "台南中西區", note: "清爽好消化，可作為抵達台南後的正餐。", query: "台南中西區 虱目魚粥" },
    { name: "牛肉湯", place: "台南市區", note: "熱門店可能排隊，優先選順路且可停車的店。", query: "台南 牛肉湯" },
    { name: "台南碗粿", place: "國華街周邊", note: "份量適合作為老城散步時的小吃。", query: "台南國華街 碗粿" },
    { name: "蝦仁飯", place: "中西區", note: "可作為晚餐選項，留意熱門時段候位。", query: "台南中西區 蝦仁飯" }
  ],
  "寶來": [
    { name: "新化燒餅", place: "新化", note: "早上離開台南後的輕量補給。", query: "新化 燒餅" },
    { name: "新化排骨麵", place: "新化老街", note: "需要正餐時再選，之後沿台 20 線續行。", query: "新化老街 排骨麵" },
    { name: "芋頭冰", place: "甲仙", note: "進山前休息降溫，但不要以冰品取代正餐。", query: "甲仙 芋頭冰" },
    { name: "甲仙芋粿", place: "甲仙", note: "鹹食補給可與芋頭冰搭配少量品嘗。", query: "甲仙 芋粿" },
    { name: "梅子料理", place: "寶來／六龜", note: "晚餐可選在地梅製品入菜，並提前確認供餐時間。", query: "寶來 梅子料理" }
  ],
  "枋寮": [
    { name: "東港肉粿", place: "東港", note: "西南海線常見小吃，適合作為午間補給。", query: "東港 肉粿" },
    { name: "東港飯湯", place: "東港", note: "想吃熱食可選飯湯，與肉粿擇一即可。", query: "東港 飯湯" },
    { name: "華僑市場海鮮", place: "東港", note: "控制份量與停留時間，不為用餐繞進墾丁。", query: "東港華僑市場 海鮮" },
    { name: "雙糕潤", place: "東港", note: "適合外帶作為後段騎乘的小份點心。", query: "東港 雙糕潤" },
    { name: "漁港海鮮", place: "枋寮", note: "入住後就近用餐，隔日清晨不必再繞路。", query: "枋寮漁港 海鮮" }
  ],
  "main:台東": [
    { name: "池上便當", place: "池上", note: "通過南橫管制路段後再安心安排正餐。", query: "池上 便當" },
    { name: "池上豆皮", place: "池上", note: "想吃輕一點可與便當擇一，不必兩站都停。", query: "池上 豆皮" },
    { name: "關山臭豆腐", place: "關山", note: "作為縱谷中繼點，依體力與時間決定是否停留。", query: "關山 臭豆腐" },
    { name: "台東米苔目", place: "台東市", note: "入住後的市區晚餐，步行前往更輕鬆。", query: "台東市 米苔目" },
    { name: "卑南豬血湯", place: "台東市", note: "市區熱湯選擇，可依住宿位置就近安排。", query: "台東市 卑南豬血湯" }
  ],
  "southLink:台東": [
    { name: "大武排骨飯", place: "大武", note: "離開南迴主要山路後補充熱量。", query: "大武 排骨飯" },
    { name: "原民風味餐", place: "大武／金崙", note: "依營業情況選順路店家，不離開台 9 線太遠。", query: "大武 金崙 原住民風味餐" },
    { name: "太麻里釋迦冰", place: "太麻里", note: "短暫降溫休息，依季節與店家供應為準。", query: "太麻里 釋迦冰" },
    { name: "台東米苔目", place: "台東市", note: "中午後抵達，可避開正餐尖峰再進市區。", query: "台東市 米苔目" },
    { name: "卑南豬血湯", place: "台東市", note: "抵達後想吃熱食可選，與米苔目擇一。", query: "台東市 卑南豬血湯" }
  ],
  "花蓮": [
    { name: "都蘭包子", place: "都蘭", note: "離開台東後的早段補給，方便帶著走。", query: "都蘭 包子" },
    { name: "東河肉包", place: "東河", note: "海線上容易安排，與都蘭包子擇一停靠。", query: "東河 肉包" },
    { name: "旗魚料理", place: "成功", note: "海線午餐選擇，優先找有遮蔭停車空間的店。", query: "成功鎮 旗魚料理" },
    { name: "花蓮扁食", place: "花蓮市", note: "抵達後可與東大門夜市安排擇一，不必兩邊都吃。", query: "花蓮市 扁食" },
    { name: "東大門烤肉", place: "花蓮市", note: "入住後步行前往，避免吃完再騎長距離。", query: "花蓮東大門夜市 烤肉" }
  ],
  "羅東": [
    { name: "烤飛魚", place: "南澳", note: "依當日店家供應選擇，順便完成蘇花中段休息。", query: "南澳 烤飛魚" },
    { name: "鯖魚料理", place: "南方澳", note: "離開蘇花後再吃午餐，避免帶著睡意進關鍵路段。", query: "南方澳 鯖魚料理" },
    { name: "蘇澳羊羹", place: "蘇澳", note: "可外帶作為點心，不必為此延長停留。", query: "蘇澳 羊羹" },
    { name: "卜肉與糕渣", place: "羅東夜市", note: "油炸類適量分食，隔日仍有長距離返程。", query: "羅東夜市 卜肉 糕渣" },
    { name: "包心粉圓", place: "羅東夜市", note: "夜市甜點選項，與其他甜食擇一即可。", query: "羅東夜市 包心粉圓" }
  ],
  "竹東": [
    { name: "三星蔥餅", place: "羅東", note: "返程前可簡單補給，避開排隊過長的店。", query: "羅東 三星蔥餅" },
    { name: "茶葉料理", place: "坪林", note: "北宜中段休息兼午餐，避免吃得過飽。", query: "坪林 茶葉料理" },
    { name: "茶粿", place: "坪林", note: "方便外帶的小份點心，可留到休息時食用。", query: "坪林 茶粿" },
    { name: "仙草", place: "關西", note: "接近終點前的最後補給，之後續走台 3 線返家。", query: "關西 仙草" },
    { name: "客家粄條", place: "竹東", note: "返家後再吃也可以，不為趕餐廳壓縮休息。", query: "竹東 客家粄條" }
  ]
};

const CHECKLIST_GROUPS = [
  ["車況檢查", ["輪胎胎紋、胎壓與補胎工具", "前後煞車與煞車油", "機油、傳動與電瓶", "頭燈、方向燈與煞車燈"]],
  ["騎士裝備", ["全罩安全帽與手套", "兩截式雨衣與防水鞋套", "保暖層與替換衣物", "飲水、防曬與常用藥"]],
  ["證件與電子", ["駕照、行照、健保卡", "手機、充電線與行動電源", "緊急聯絡人與道路救援資料", "住宿資料與離線行程"]],
  ["關鍵路段當日確認", ["南橫當日開放、進入與全線淨空時間", "蘇花災阻與施工管制", "豪雨、颱風與地震後道路警示", "白牌導航未進入禁行道路"]]
];

const EXPENSE_CATEGORIES = ["住宿", "油資", "餐飲", "景點／停車", "維修", "其他"];
const EXPENSE_DAYS = ["DAY 1 · 9/11", "DAY 2 · 9/12", "DAY 3 · 9/13", "DAY 4 · 9/14", "DAY 5 · 9/15", "DAY 6 · 9/16", "DAY 7 · 9/17"];
const OFFICIAL_LINKS = [
  ["省道即時路況", "幸福公路", "https://168.thb.gov.tw/"],
  ["公路局公告", "施工與災阻消息", "https://www.thb.gov.tw/"],
  ["氣象署", "天氣、豪雨與颱風", "https://www.cwa.gov.tw/"],
  ["NCDR 災害示警", "整合即時示警", "https://alerts.ncdr.nat.gov.tw/"]
];

const defaultState = { currentDay: 1, currentPlan: "main", checks: {}, budget: {}, expenses: [], updatedAt: new Date().toISOString() };
let state = loadState();
let installPrompt = null;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved && typeof saved === "object" ? { ...defaultState, ...saved } : { ...defaultState };
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  state.updatedAt = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  renderLastUpdated();
}

function setBackupStatus(message, isError = false) {
  const status = document.getElementById("backupStatus");
  status.textContent = message;
  status.classList.toggle("error", isError);
}

function normalizeImportedState(data) {
  const imported = data && typeof data === "object" && data.state && typeof data.state === "object" ? data.state : data;
  if (!imported || typeof imported !== "object" || !Array.isArray(imported.expenses)) throw new Error("invalid-backup");

  const expenses = imported.expenses.slice(0, 1000).map((expense, index) => {
    const day = Number(expense.day);
    const amount = Math.round(Number(expense.amount));
    const name = String(expense.name || "").trim().slice(0, 40);
    const category = String(expense.category || "");
    if (day < 1 || day > EXPENSE_DAYS.length || amount < 1 || !name || !EXPENSE_CATEGORIES.includes(category)) return null;
    return { id: String(expense.id || `import-${Date.now()}-${index}`), day, category, name, amount };
  }).filter(Boolean);

  const checks = imported.checks && typeof imported.checks === "object"
    ? Object.fromEntries(Object.entries(imported.checks).map(([key, value]) => [key, Boolean(value)]))
    : {};
  const currentDay = Number(imported.currentDay);
  return {
    ...defaultState,
    currentDay: currentDay >= 1 && currentDay <= EXPENSE_DAYS.length ? currentDay : 1,
    currentPlan: Object.hasOwn(PLAN_DETAILS, imported.currentPlan) ? imported.currentPlan : "main",
    checks,
    expenses
  };
}

function renderAllState() {
  renderItinerary();
  renderChecklist();
  renderExpenses();
  renderLastUpdated();
}

function mapsUrl(origin, destination) {
  const params = new URLSearchParams({ api: "1", origin, destination, travelmode: "driving", avoid: "highways" });
  return `https://www.google.com/maps/dir/?${params}`;
}

function mapsSearchUrl(query) {
  const params = new URLSearchParams({ api: "1", query });
  return `https://www.google.com/maps/search/?${params}`;
}

function activePlan() {
  return PLAN_DETAILS[state.currentPlan] || PLAN_DETAILS.main;
}

function renderPlanSelector() {
  const plan = activePlan();
  document.querySelectorAll("[data-plan]").forEach(button => {
    const active = button.dataset.plan === state.currentPlan;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  document.getElementById("planSummary").textContent = plan.summary;
  const backup = state.currentPlan === "southLink";
  document.getElementById("routeMainMap").toggleAttribute("hidden", backup);
  document.getElementById("routeSouthLinkMap").toggleAttribute("hidden", !backup);
  document.getElementById("routeVisual").setAttribute("aria-label", backup
    ? "南迴備案：竹東、嘉義、台南、枋寮、台東、花蓮、羅東、竹東，各段附里程"
    : "南橫主線：竹東、嘉義、台南、寶來、台東、花蓮、羅東、竹東，各段附里程");
  document.getElementById("routeDesc").textContent = backup
    ? "從竹東沿西部南下，經枋寮與台九線南迴到台東，再沿東岸北返；紅色為當天、藍色為未走、灰色為已完成。"
    : "從竹東沿西部南下，經寶來與南橫到台東，再沿東岸北返；紅色為當天、藍色為未走、灰色為已完成。";
  updateRouteProgress();
}

function updateRouteProgress() {
  document.querySelectorAll(".route-lines [data-day]").forEach(segment => {
    const segmentDay = Number(segment.dataset.day);
    segment.classList.toggle("route-complete", segmentDay < state.currentDay);
    segment.classList.toggle("route-current", segmentDay === state.currentDay);
    segment.classList.toggle("route-upcoming", segmentDay > state.currentDay);
  });
}

function renderTabs() {
  const root = document.getElementById("dayTabs");
  root.innerHTML = activePlan().days.map(day => `
    <button class="day-tab${day.day === state.currentDay ? " active" : ""}" type="button" data-day="${day.day}" aria-pressed="${day.day === state.currentDay}">
      <b>DAY ${day.day}</b><small>${day.date} · ${day.short}</small>
    </button>`).join("");
  const activeButton = root.querySelector(".day-tab.active");
  root.scrollLeft = Math.max(0, activeButton.offsetLeft - (root.clientWidth - activeButton.offsetWidth) / 2);
  root.querySelectorAll("button").forEach(button => button.addEventListener("click", () => {
    state.currentDay = Number(button.dataset.day);
    saveState();
    renderItinerary();
    document.getElementById("itineraryView").scrollIntoView({ behavior: "smooth", block: "start" });
  }));
}

function renderItinerary() {
  const day = activePlan().days[state.currentDay - 1];
  document.getElementById("dayLabel").textContent = `2026 ${day.date} · DAY ${day.day} · ${day.short}`;
  document.getElementById("dayTitle").textContent = day.title;
  document.getElementById("riskBadge").textContent = day.risk;
  document.getElementById("dayFacts").innerHTML = [
    ["里程", day.distance], ["純騎乘", day.ride], ["住宿", day.stay], ["建議節奏", day.pace]
  ].map(([label, value]) => `<div class="fact"><small>${label}</small><strong>${value}</strong></div>`).join("");
  document.getElementById("dayNotice").textContent = day.notice;
  const fuelAlert = document.getElementById("fuelAlert");
  fuelAlert.hidden = !day.fuelStop;
  fuelAlert.innerHTML = day.fuelStop ? `
    <div><small>最後補油點</small><strong>${day.fuelStop.name}</strong><span>${day.fuelStop.detail}</span></div>
    <a href="${mapsSearchUrl(day.fuelStop.query)}" target="_blank" rel="noopener" class="external-link">開啟地圖 <b aria-hidden="true">↗</b></a>` : "";
  document.getElementById("timeline").innerHTML = day.stops.map(([name, detail]) => `<li><h3>${name}</h3><p>${detail}</p></li>`).join("");
  const foods = FOOD_GUIDES[`${state.currentPlan}:${day.short}`] || FOOD_GUIDES[day.short] || [];
  const foodSection = document.getElementById("foodSection");
  foodSection.hidden = foods.length === 0;
  foodSection.innerHTML = foods.length ? `
    <div class="section-heading">
      <div><p class="section-kicker">沿途吃什麼</p><h3>今天順路的在地味</h3></div>
    </div>
    <div class="food-list">
      ${foods.map(food => `
        <a class="food-item external-link" href="${mapsSearchUrl(food.query)}" target="_blank" rel="noopener">
          <span class="food-place">${food.place}</span>
          <strong>${food.name}</strong>
          <small>${food.note}</small>
          <b aria-hidden="true">↗</b>
        </a>`).join("")}
    </div>
    <p class="fine-print">店家營業日、候位與品項可能變動；以順路、好停車、不久候為優先。</p>` : "";
  const lodging = LODGING_GUIDES[day.short];
  const lodgingSection = document.getElementById("lodgingSection");
  lodgingSection.hidden = !lodging;
  lodgingSection.innerHTML = lodging ? `
    <div class="section-heading">
      <div><p class="section-kicker">今晚落腳</p><h3>推薦住在 ${lodging.area}</h3></div>
    </div>
    <p>${lodging.reason}</p>
    <div class="lodging-requirements" aria-label="住宿篩選條件">
      ${LODGING_REQUIREMENTS.map(requirement => `<span>${requirement}</span>`).join("")}
    </div>
    <a class="lodging-search external-link" href="${mapsSearchUrl(lodging.query)}" target="_blank" rel="noopener">
      在 Google Maps 搜尋附近住宿 <b aria-hidden="true">↗</b>
    </a>
    <p class="fine-print">價格與取消政策依預訂當下為準；下訂前另確認機車停放方式與最晚入住時間。</p>` : "";
  document.getElementById("navigationLinks").innerHTML = day.nav.map(([label, origin, destination]) => `
    <a class="nav-link external-link" href="${mapsUrl(origin, destination)}" target="_blank" rel="noopener">
      <div><span>${label}</span><small>Google Maps · 避開高速道路 · 仍須核對禁行路段</small></div><b aria-hidden="true">↗</b>
    </a>`).join("");
  const alternative = document.getElementById("alternativeRoute");
  alternative.hidden = !day.alternative;
  alternative.innerHTML = day.alternative ? `<h3>替代方案</h3><p>${day.alternative}</p>` : "";
  renderDailyExpenses();
  renderPlanSelector();
  renderTabs();
  updateNetworkStatus();
}

function renderChecklist() {
  const root = document.getElementById("checklistGroups");
  root.innerHTML = CHECKLIST_GROUPS.map(([group, items], groupIndex) => `
    <section class="checklist-group"><h3>${group}</h3>
      ${items.map((item, itemIndex) => {
        const key = `${groupIndex}-${itemIndex}`;
        return `<label class="check-item"><input type="checkbox" data-check="${key}" ${state.checks[key] ? "checked" : ""}><span>${item}</span></label>`;
      }).join("")}
    </section>`).join("");
  root.querySelectorAll("input").forEach(input => input.addEventListener("change", () => {
    state.checks[input.dataset.check] = input.checked;
    saveState();
    updateChecklistProgress();
  }));
  updateChecklistProgress();
}

function updateChecklistProgress() {
  const total = CHECKLIST_GROUPS.reduce((sum, [, items]) => sum + items.length, 0);
  const completed = Object.values(state.checks).filter(Boolean).length;
  const percent = Math.round(completed / total * 100);
  document.getElementById("checklistProgress").textContent = `${completed}/${total} · ${percent}%`;
  document.getElementById("checklistBar").style.width = `${percent}%`;
}

function escapeHtml(value) {
  const entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
  return String(value).replace(/[&<>"']/g, character => entities[character]);
}

function expenseItemsMarkup(expenses, showDay) {
  return expenses.length ? expenses.map(expense => `
    <article class="expense-item">
      <div><span>${showDay ? `${EXPENSE_DAYS[expense.day - 1] || "未指定日期"} · ` : ""}${escapeHtml(expense.category)}</span><strong>${escapeHtml(expense.name)}</strong></div>
      <div class="expense-item-actions"><strong>NT$${Number(expense.amount).toLocaleString("zh-TW")}</strong><button type="button" data-expense-id="${expense.id}" title="刪除支出" aria-label="刪除 ${escapeHtml(expense.name)}">×</button></div>
    </article>`).join("") : `<p class="empty-state">尚無支出。</p>`;
}

function bindExpenseDeleteButtons(root) {
  root.querySelectorAll("[data-expense-id]").forEach(button => button.addEventListener("click", () => {
    state.expenses = state.expenses.filter(expense => expense.id !== button.dataset.expenseId);
    saveState();
    renderExpenses();
  }));
}

function renderDailyExpenses() {
  if (!Array.isArray(state.expenses)) state.expenses = [];
  const dayExpenses = state.expenses.filter(expense => Number(expense.day) === state.currentDay);
  document.getElementById("dailyExpenseTitle").textContent = `${EXPENSE_DAYS[state.currentDay - 1]} 記帳`;
  const root = document.getElementById("dailyExpenseList");
  root.innerHTML = expenseItemsMarkup(dayExpenses, false);
  bindExpenseDeleteButtons(root);
  const total = dayExpenses.reduce((sum, expense) => sum + (Number(expense.amount) || 0), 0);
  document.getElementById("dailyExpenseTotal").textContent = `NT$${total.toLocaleString("zh-TW")}`;
}

function renderExpenseOverview() {
  if (!Array.isArray(state.expenses)) state.expenses = [];
  const categoryTotals = Object.fromEntries(EXPENSE_CATEGORIES.map(category => [category, 0]));
  const dayTotals = EXPENSE_DAYS.map(() => 0);
  state.expenses.forEach(expense => {
    if (categoryTotals[expense.category] !== undefined) categoryTotals[expense.category] += Number(expense.amount) || 0;
    if (dayTotals[expense.day - 1] !== undefined) dayTotals[expense.day - 1] += Number(expense.amount) || 0;
  });
  document.getElementById("expenseDaySummary").innerHTML = EXPENSE_DAYS.map((label, index) => `
    <span><small>${label}</small><strong>NT$${dayTotals[index].toLocaleString("zh-TW")}</strong></span>`).join("");
  const summary = document.getElementById("expenseSummary");
  summary.innerHTML = EXPENSE_CATEGORIES
    .filter(category => categoryTotals[category] > 0)
    .map(category => `<span><small>${category}</small><strong>NT$${categoryTotals[category].toLocaleString("zh-TW")}</strong></span>`)
    .join("");

  const root = document.getElementById("expenseList");
  root.innerHTML = expenseItemsMarkup(state.expenses, true);
  bindExpenseDeleteButtons(root);
  const total = state.expenses.reduce((sum, expense) => sum + (Number(expense.amount) || 0), 0);
  document.getElementById("expenseTotal").textContent = `NT$${total.toLocaleString("zh-TW")}`;
}

function renderExpenses() {
  renderDailyExpenses();
  renderExpenseOverview();
}

function renderOfficialLinks() {
  document.getElementById("officialLinks").innerHTML = OFFICIAL_LINKS.map(([title, detail, url]) => `
    <a class="official-link external-link" href="${url}" target="_blank" rel="noopener">
      <div><span>${title}</span><small>${detail} · 需連線</small></div><b aria-hidden="true">↗</b>
    </a>`).join("");
}

function showView(target) {
  document.querySelectorAll(".view").forEach(view => {
    const active = view.dataset.view === target;
    view.hidden = !active;
    view.classList.toggle("active", active);
  });
  document.querySelectorAll(".bottom-nav button").forEach(button => {
    const active = button.dataset.target === target;
    button.classList.toggle("active", active);
    if (active) button.setAttribute("aria-current", "page"); else button.removeAttribute("aria-current");
  });
  document.getElementById("dayTabs").hidden = target !== "itinerary";
  document.getElementById("planSelector").hidden = target !== "itinerary";
  window.scrollTo({ top: document.querySelector(".route-overview").offsetHeight, behavior: "smooth" });
}

function updateNetworkStatus() {
  const online = navigator.onLine;
  const status = document.getElementById("networkStatus");
  status.textContent = online ? "已連線" : "離線可查看";
  status.classList.toggle("offline", !online);
  document.querySelectorAll(".external-link").forEach(link => {
    link.setAttribute("aria-disabled", String(!online));
    link.title = online ? "在新分頁開啟" : "目前離線，連線後可開啟";
  });
}

function renderLastUpdated() {
  const date = new Date(state.updatedAt);
  document.getElementById("lastUpdated").textContent = Number.isNaN(date.getTime()) ? "尚未記錄" : date.toLocaleString("zh-TW", { dateStyle: "medium", timeStyle: "short" });
}

document.querySelectorAll(".bottom-nav button").forEach(button => button.addEventListener("click", () => showView(button.dataset.target)));
document.querySelectorAll("[data-plan]").forEach(button => button.addEventListener("click", () => {
  state.currentPlan = button.dataset.plan;
  saveState();
  renderItinerary();
}));
document.getElementById("dailyExpenseForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const name = String(formData.get("name") || "").trim();
  const amount = Math.round(Number(formData.get("amount")) || 0);
  if (!name || amount < 1) return;
  state.expenses.unshift({
    id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
    day: state.currentDay,
    category: String(formData.get("category")),
    name,
    amount
  });
  saveState();
  form.reset();
  renderExpenses();
});
document.getElementById("resetExpenses").addEventListener("click", () => {
  if (!state.expenses.length || !window.confirm("確定要清除所有記帳明細？")) return;
  state.expenses = [];
  saveState();
  renderExpenses();
});
document.getElementById("exportData").addEventListener("click", () => {
  const backup = JSON.stringify({ app: "taiwan-moto-trip", version: 1, exportedAt: new Date().toISOString(), state }, null, 2);
  const url = URL.createObjectURL(new Blob([backup], { type: "application/json" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = `taiwan-moto-trip-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
  setBackupStatus("備份檔已下載，請保存在雲端或另一台裝置。 ");
});
document.getElementById("importData").addEventListener("change", async event => {
  const input = event.currentTarget;
  const file = input.files[0];
  if (!file) return;
  try {
    if (file.size > 1024 * 1024) throw new Error("file-too-large");
    const importedState = normalizeImportedState(JSON.parse(await file.text()));
    if (!window.confirm(`將還原 ${importedState.expenses.length} 筆記帳資料，並取代目前資料。確定繼續？`)) return;
    state = importedState;
    saveState();
    renderAllState();
    setBackupStatus(`還原完成，共 ${state.expenses.length} 筆記帳資料。`);
  } catch {
    setBackupStatus("無法還原：請選擇由本網站下載的 JSON 備份檔。", true);
  } finally {
    input.value = "";
  }
});
window.addEventListener("online", updateNetworkStatus);
window.addEventListener("offline", updateNetworkStatus);
window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  installPrompt = event;
  document.getElementById("installButton").hidden = false;
});
document.getElementById("installButton").addEventListener("click", async () => {
  if (!installPrompt) return;
  installPrompt.prompt();
  await installPrompt.userChoice;
  installPrompt = null;
  document.getElementById("installButton").hidden = true;
});

renderItinerary();
renderChecklist();
renderExpenses();
renderOfficialLinks();
renderLastUpdated();
updateNetworkStatus();

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js"));
}