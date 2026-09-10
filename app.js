const STORAGE_KEY = "zhudongTrip20260916.v1";

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

const SEPTEMBER_DAYS = [
  { ...TRIP_DAYS[0], date: "9/16（三）" },
  {
    day: 2, date: "9/17（四）", short: "旗山", title: "嘉義 → 玉井 → 旗山", distance: "110–140 km", ride: "3–4 小時", stay: "旗山", pace: "08:30 出發 · 15:30 前抵達",
    risk: "山路暖身", notice: "沿台 3 線與台 20 線移動，避開快速道路；抵達旗山後完成補給，晚上確認南橫管制與天候。",
    stops: [
      ["嘉義市", "早餐後出發，確認油量與山區天候。"],
      ["中埔／大埔", "沿台 3 線南下，視體力短休補水。"],
      ["玉井", "午餐與加油，不為景點延誤抵達時間。"],
      ["旗山", "入住後補齊隔日早餐、飲水與乾糧，確認南橫公告。"]
    ],
    nav: [["嘉義 → 大埔", "嘉義文化路夜市", "大埔情人公園"], ["大埔 → 玉井", "大埔情人公園", "玉井區"], ["玉井 → 旗山", "玉井區", "旗山老街"]],
    alternative: "若隔日南橫確定封閉，從旗山改往枋寮，再經台 9 線南迴前往台東；同步調整台東住宿。"
  },
  {
    day: 3, date: "9/18（五）", short: "台東", title: "旗山 → 南橫 → 台東", distance: "200–230 km", ride: "6–8 小時", stay: "台東市", pace: "05:30 起床 · 依公告進管制點",
    risk: "全程控制點", notice: "本日是否通行以公路局當日公告與現場管制為準；出發前先確認進入、全線淨空時間與梅蘭加油站營業。",
    fuelStop: { ...TRIP_DAYS[3].fuelStop },
    stops: [
      ["旗山", "提早出發，沿台 29 線前往甲仙，不摸黑進山。"],
      ["甲仙", "補油並再次確認南橫放行狀況。"],
      ["梅蘭加油站", "油箱補滿後再進山；站點非 24 小時且無 98。"],
      ["梅山口", "確認管制、油量、體力與煞車狀態。"],
      ["池上／關山", "離開管制路段後再安排正餐與休息。"],
      ["台東市", "入住、檢查輪胎與煞車，早點休息。"]
    ],
    nav: [["旗山 → 甲仙", "旗山老街", "甲仙區"], ["甲仙 → 梅蘭", "甲仙區", "梅蘭加油站"], ["梅蘭 → 池上", "梅蘭加油站", "池上車站"], ["池上 → 台東", "池上車站", "台東市"]],
    alternative: "南橫封閉時不要等待或闖行；改由旗山往枋寮住宿，隔日經台 9 線南迴至台東，並取消或縮短花蓮休息日。"
  },
  {
    day: 4, date: "9/19（六）", short: "台東", title: "台東機動／休息日", distance: "0–70 km", ride: "0–2 小時", stay: "台東市", pace: "不設鬧鐘 · 依體力與天候安排",
    risk: "恢復日", notice: "南橫長途後優先補眠、洗衣與檢查車況；想出門時只排市區或近郊短程，保留隔日台 11 線體力。",
    stops: [
      ["台東市", "睡眠、洗衣並檢查輪胎、煞車、機油與行李固定。"],
      ["森林公園／海濱公園", "體力與天氣適合才安排市區短程。"],
      ["卑南／知本", "近郊擇一，不為景點拉長里程。"],
      ["台東市", "連住同一處，補齊東海岸所需用品並提早休息。"]
    ],
    nav: [["台東市 → 森林公園", "台東市", "台東森林公園"], ["森林公園 → 台東市", "台東森林公園", "台東市"]],
    alternative: "若前段行程延誤，直接使用本日補回進度；若隔日東海岸天候不佳，減少停點並提早前往花蓮。"
  },
  { ...TRIP_DAYS[4], day: 5, date: "9/20（日）" },
  { ...TRIP_DAYS[5], day: 6, date: "9/21（一）" },
  { ...TRIP_DAYS[6], day: 7, date: "9/22（二）" }
];

const CENTRAL_CROSS_DAYS = SEPTEMBER_DAYS.map(day => ({ ...day }));
CENTRAL_CROSS_DAYS[5] = {
  day: 6, date: "9/21（一）", short: "埔里", title: "花蓮 → 中橫 → 埔里", distance: "150–190 km", ride: "6–8 小時", stay: "埔里", pace: "05:30 查路況 · 依管制時段出發",
  risk: "高山管制", notice: "台 8 線太魯閣至大禹嶺須確認全線開放、施工放行與淨空時間；豪雨、落石、地震或道路未全線開放時，不進入中橫並切回蘇花方案。",
  stops: [
    ["花蓮市", "清晨確認台 8 線、公路局公告、油量與高山保暖裝備。"],
    ["太魯閣口", "只在確認可全線通行後進入；不得以導航建議取代現場管制。"],
    ["天祥", "依放行時間短休，確認後續道路與剩餘油量。"],
    ["大禹嶺", "高海拔路段注意低溫、濃霧與落石，不久留。"],
    ["合歡山／清境", "視天候短停；疲勞或起霧時直接下山。"],
    ["埔里", "天黑前入住，檢查煞車、輪胎與傳動。"]
  ],
  nav: [["花蓮 → 太魯閣", "花蓮市", "太魯閣國家公園遊客中心"], ["太魯閣 → 天祥", "太魯閣國家公園遊客中心", "天祥"], ["天祥 → 大禹嶺", "天祥", "大禹嶺"], ["大禹嶺 → 埔里", "大禹嶺", "埔里鎮"]],
  alternative: "台 8 線未全線開放、天候不穩或錯過放行時段時，維持原蘇花方案前往羅東；不要改走未確認的林道或產業道路。"
};
CENTRAL_CROSS_DAYS[6] = {
  day: 7, date: "9/22（二）", short: "竹東", title: "埔里 → 台 3 線 → 竹東", distance: "170–210 km", ride: "5–7 小時", stay: "回家", pace: "07:00 出發 · 17:00 前返抵",
  risk: "返程疲勞", notice: "經國姓、東勢、卓蘭與三灣北返，避開快速道路；山路與市區交替，至少每 60–90 分鐘休息。",
  stops: [
    ["埔里", "早餐後確認胎壓、油量與午後天氣。"],
    ["國姓", "沿台 14 線接台 21 線，短休補水。"],
    ["東勢／卓蘭", "午餐與加油，確認後段體力。"],
    ["三灣", "返家前最後休息，避開傍晚疲勞騎乘。"],
    ["新竹縣竹東鎮", "傍晚前返抵，完成車輛巡檢。"]
  ],
  nav: [["埔里 → 國姓", "埔里鎮", "國姓鄉"], ["國姓 → 東勢", "國姓鄉", "東勢客家文化園區"], ["東勢 → 卓蘭", "東勢客家文化園區", "卓蘭鎮"], ["卓蘭 → 三灣", "卓蘭鎮", "三灣老街"], ["三灣 → 竹東", "三灣老街", "新竹縣竹東鎮"]]
};

const SOUTH_LINK_DAYS = SEPTEMBER_DAYS.map(day => ({ ...day }));
SOUTH_LINK_DAYS[2] = {
  day: 3, date: "9/18（五）", short: "枋寮", title: "旗山 → 東港 → 枋寮", distance: "140–180 km", ride: "4–5 小時", stay: "枋寮", pace: "08:00 出發 · 16:00 前入住",
  risk: "南迴前一晚", notice: "確認南橫不開放後不要進入台 20 線山區，改沿高雄外圍南下；入住前加滿油並確認隔日南迴路況。",
  stops: [
    ["旗山", "早餐後確認台 9 線南迴與東部天氣。"],
    ["高雄外圍", "經美濃、屏東方向南下，避開快速道路與市中心壅塞。"],
    ["東港／林邊", "安排午餐與休息，不繞進墾丁。"],
    ["枋寮", "加滿油、補充飲水，提早入住休息。"]
  ],
  nav: [["旗山 → 屏東", "旗山老街", "屏東車站"], ["屏東 → 東港", "屏東車站", "東港華僑市場"], ["東港 → 枋寮", "東港華僑市場", "枋寮車站"]]
};
SOUTH_LINK_DAYS[3] = {
  day: 4, date: "9/19（六）", short: "台東", title: "枋寮 → 南迴 → 台東", distance: "110–140 km", ride: "3–4 小時", stay: "台東市", pace: "07:00 查路況 · 07:30 出發",
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
SOUTH_LINK_DAYS[4] = { ...TRIP_DAYS[4], day: 5, date: "9/20（日）" };

const PLAN_DETAILS = {
  main: {
    label: "南橫主線",
    summary: "D3 住寶來，D4 依放行時段穿越南橫前往台東。",
    overview: "建議 2026/9/11（五）出發、9/17（四）返抵。南橫安排週一，但仍須依當日公告決定是否通行；蘇花安排週三。全程約 1,100–1,310 公里。",
    dateRange: "9/11–9/17",
    days: TRIP_DAYS
  },
  southLink: {
    label: "南橫不通替代",
    summary: "南橫不開放時，D3 從旗山改住枋寮，D4 經台 9 線南迴到台東，D5 再前往花蓮。",
    overview: "2026/9/16（三）從竹東出發、9/22（二）返抵。南橫不通時由旗山南下枋寮，隔日走台 9 線南迴到台東；取消花蓮休息日，後段仍經蘇花、羅東返回竹東。",
    dateRange: "9/16–9/22",
    days: SOUTH_LINK_DAYS
  },
  september: {
    label: "9/16 指定行程",
    summary: "9/16 從竹東出發；台東連住兩晚，9/20 前往花蓮住一晚，再由羅東中繼返家。",
    overview: "2026/9/16（三）從竹東出發、9/22（二）返抵。依序住宿嘉義、旗山、台東兩晚、花蓮與羅東；南橫、蘇花仍須依當日公告調整。全程約 1,000–1,250 公里。",
    dateRange: "9/16–9/22",
    days: SEPTEMBER_DAYS
  },
  centralCross: {
    label: "中橫返程",
    summary: "台東連住兩晚、花蓮一晚；D6 從花蓮經中橫、合歡山到埔里，D7 沿台 3 線系統返回竹東。",
    overview: "2026/9/16（三）從竹東出發、9/22（二）返抵。依序住宿嘉義、旗山、台東兩晚與花蓮；D6 可由中橫到埔里，D7 返回竹東。中橫僅限台 8 線確認全線開放時採用。",
    dateRange: "9/16–9/22",
    days: CENTRAL_CROSS_DAYS
  }
};

const LODGING_GUIDES = {
  "嘉義": { area: "嘉義車站至文化路夜市一帶", reason: "餐飲選擇多，抵達後可步行用餐；隔天南下也容易離開市區。", query: "嘉義車站 旅館" },
  "旗山": { area: "旗山老街外圍／延平一路一帶", reason: "晚餐與補給方便，隔天可直接往甲仙與南橫；優先選擇有遮雨機車位的旅宿。", query: "旗山老街 住宿" },
  "台南": { area: "中西區／台南車站西側", reason: "靠近老城與餐飲，隔天可順接台 20 線；避免住進巷弄太深、停車不便的區域。", query: "台南中西區 旅館" },
  "寶來": { area: "寶來溫泉街與台 20 線沿線", reason: "距梅山口較近，隔天可配合放行時段；旅宿少，應優先確認晚到與機車停放。", query: "寶來溫泉 住宿" },
  "枋寮": { area: "枋寮車站／中山路周邊", reason: "晚餐、加油與補給方便，隔天可直接銜接台 9 線南迴。", query: "枋寮車站 住宿" },
  "台東": { area: "鐵花村／正氣路市區", reason: "餐飲與補給集中，隔天走台 11 線北上方便；若重視安靜可改找台東車站周邊。", query: "台東鐵花村 旅館" },
  "花蓮": { area: "花蓮市中心／東大門夜市外圍", reason: "晚餐方便，隔天往新城與蘇花方向順路；避開夜市正旁邊可能較吵的房間。", query: "花蓮市中心 旅館" },
  "羅東": { area: "羅東車站至羅東夜市之間", reason: "步行可用餐，隔天前往北宜公路方便；週末需提早預訂。", query: "羅東車站 旅館" },
  "埔里": { area: "埔里市區／南興街周邊", reason: "中橫下山後餐飲、加油與維修較集中，隔天往國姓方向也方便。", query: "埔里市區 住宿" }
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
  "旗山": [
    { name: "大埔砂鍋魚頭", place: "大埔", note: "走台 3 線時可作午餐，控制份量並預留山路騎乘時間。", query: "大埔 砂鍋魚頭" },
    { name: "玉井芒果冰", place: "玉井", note: "短暫降溫補給，依季節與店家供應為準。", query: "玉井 芒果冰" },
    { name: "旗山香蕉蛋糕", place: "旗山老街", note: "適合外帶作為隔日補給，不必排隊久候。", query: "旗山 香蕉蛋糕" },
    { name: "旗山老街小吃", place: "旗山", note: "入住後步行用餐，避免再騎車增加疲勞。", query: "旗山老街 小吃" },
    { name: "枝仔冰", place: "旗山", note: "適合抵達後消暑，依營業時間就近選擇。", query: "旗山 枝仔冰" }
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
  "台東": [
    { name: "台東米苔目", place: "台東市", note: "休息日可避開尖峰時間，選住宿附近店家。", query: "台東市 米苔目" },
    { name: "卑南豬血湯", place: "台東市", note: "市區熱湯選擇，適合搭配簡單午餐。", query: "台東市 卑南豬血湯" },
    { name: "原住民風味料理", place: "台東市", note: "晚餐可選在地食材，不必騎車追遠處名店。", query: "台東市 原住民風味料理" },
    { name: "釋迦冰", place: "台東市", note: "依季節與店家供應，少量作為午後補給。", query: "台東 釋迦冰" },
    { name: "地瓜酥", place: "台東市", note: "可外帶作為隔日東海岸騎乘的小份補給。", query: "台東 地瓜酥" }
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
  "埔里": [
    { name: "埔里米粉", place: "埔里市區", note: "中橫下山後補充熱量，優先選住宿附近店家。", query: "埔里 米粉" },
    { name: "南投意麵", place: "埔里市區", note: "晚餐可選的簡單熱食，不再騎車追店。", query: "埔里 意麵" },
    { name: "埔里甘蔗筍", place: "埔里", note: "依季節與店家供應品嘗在地食材。", query: "埔里 甘蔗筍 料理" },
    { name: "紹興料理", place: "埔里", note: "含酒料理須留意酒精殘留，騎車時應避免飲酒。", query: "埔里 紹興料理" },
    { name: "鹹油條", place: "埔里市區", note: "隔日出發前可作早餐，優先選順路且好停車的店。", query: "埔里 鹹油條" }
  ],
  "centralCross:竹東": [
    { name: "客家封肉", place: "國姓", note: "返程前段的正餐選項，控制份量避免飯後疲倦。", query: "國姓 客家料理" },
    { name: "東勢粄條", place: "東勢", note: "台 3 線沿途補給，優先選擇方便停車的店家。", query: "東勢 粄條" },
    { name: "卓蘭水果", place: "卓蘭", note: "依產季少量補充，不為採買增加行李負擔。", query: "卓蘭 水果" },
    { name: "三灣麵食", place: "三灣", note: "返抵竹東前最後補給，避免停留到天色過晚。", query: "三灣 麵店" },
    { name: "客家粄條", place: "竹東", note: "返家後再吃，不為趕餐廳壓縮途中休息。", query: "竹東 客家粄條" }
  ],
  "竹東": [
    { name: "三星蔥餅", place: "羅東", note: "返程前可簡單補給，避開排隊過長的店。", query: "羅東 三星蔥餅" },
    { name: "茶葉料理", place: "坪林", note: "北宜中段休息兼午餐，避免吃得過飽。", query: "坪林 茶葉料理" },
    { name: "茶粿", place: "坪林", note: "方便外帶的小份點心，可留到休息時食用。", query: "坪林 茶粿" },
    { name: "仙草", place: "關西", note: "接近終點前的最後補給，之後續走台 3 線返家。", query: "關西 仙草" },
    { name: "客家粄條", place: "竹東", note: "返家後再吃也可以，不為趕餐廳壓縮休息。", query: "竹東 客家粄條" }
  ]
};

const SAVED_SPOTS = {
  day2: [
    { type: "美食", name: "鴨米脆皮薯條", area: "台南國華街", note: "台南加碼選項；往旗山前需評估繞行時間。", query: "台南國華街 鴨米脆皮薯條" },
    { type: "美食", name: "金得春捲", area: "台南國華街", note: "台南加碼選項；熱門時段可能排隊。", query: "台南 金得春捲" },
    { type: "美食", name: "炸雞洋行", area: "台南國華街", note: "台南加碼選項；不為排隊延誤旗山入住。", query: "台南國華街 炸雞洋行" },
    { type: "景點", name: "美濃湖", address: "高雄市美濃區民權路與泰安路交叉口附近", query: "美濃湖" },
    { type: "美食", name: "美濃林家粄條", address: "高雄市美濃區美興街25號", hours: "09:00–21:00", query: "美濃林家粄條" },
    { type: "景點", name: "旗山老街", address: "高雄市旗山區中山路", hours: "14:00–20:00", query: "旗山老街" },
    { type: "美食", name: "月亮香蕉冰紅茶", address: "高雄市旗山區中山路49號", hours: "週一至週五 10:00–19:00；週六、週日 09:00–20:00", query: "月亮香蕉冰紅茶" },
    { type: "美食", name: "吳記肉丸", address: "高雄市旗山區永平街20號", hours: "09:30–18:00", query: "旗山 吳記肉丸" },
    { type: "景點", name: "旗山孔子廟", address: "高雄市旗山區鼓山公園1號", hours: "09:00–17:00（週一公休）", query: "旗山孔子廟" },
    { type: "景點", name: "旗山地景橋", address: "高雄市旗山區中華路上（旗山麥當勞對面）", query: "旗山地景橋" }
  ],
  day3: [
    { type: "美食", name: "好煎炸春捲", area: "池上火車站附近", query: "池上 好煎炸春捲" },
    { type: "景點", name: "池上大坡池", area: "池上", query: "池上大坡池" },
    { type: "景點", name: "天堂路", address: "台東縣池上鄉萬新道路", query: "池上 天堂路" },
    { type: "美食", name: "關山臭豆腐", address: "台東縣關山鎮和平路87-5號", hours: "09:00–15:00（週二、週三公休）", query: "關山臭豆腐 和平路87-5號" },
    { type: "美食", name: "老饕麵館", address: "台東縣關山鎮民族路55號", hours: "11:00–14:00、16:30–19:45（週三公休）", query: "關山 老饕麵館" }
  ],
  "southLink:day3": [],
  day4: [
    { type: "景點", name: "山里車站", area: "台東縣卑南鄉", query: "山里車站" },
    { type: "景點", name: "武陵綠色隧道", area: "台東縣鹿野鄉", query: "武陵綠色隧道" },
    { type: "美食", name: "阿咪米苔目", address: "台東縣台東市福建路78號", hours: "07:30–15:00、17:00–20:30（週六公休）", query: "阿咪米苔目 台東" },
    { type: "景點", name: "池上大坡池／天堂路", area: "池上", note: "往返台東市里程較長，休息日依體力擇一。", query: "池上 天堂路 大坡池" },
    { type: "美食", name: "關山臭豆腐／老饕麵館", area: "關山", note: "與池上行程同向，可依店休日擇一。", query: "關山 美食" }
  ],
  "southLink:day4": [
    { type: "美食", name: "阿咪米苔目", address: "台東縣台東市福建路78號", hours: "07:30–15:00、17:00–20:30（週六公休）", query: "阿咪米苔目 台東" },
    { type: "景點", name: "山里車站", area: "台東縣卑南鄉", note: "抵達時間與體力足夠再前往。", query: "山里車站" }
  ],
  day5: [
    { type: "景點", name: "三仙台", area: "台東縣成功鎮", query: "三仙台" },
    { type: "美食", name: "成功豆花", area: "台東縣成功鎮", query: "成功豆花" },
    { type: "景點", name: "比西里海岸部落", area: "台東縣成功鎮", query: "比西里岸部落" },
    { type: "景點", name: "石門麻糬洞", area: "花蓮縣豐濱鄉", query: "石門麻糬洞" },
    { type: "景點", name: "石梯坪", area: "花蓮縣豐濱鄉", query: "石梯坪" },
    { type: "美食", name: "常紅蛋糕", area: "花蓮縣壽豐鄉壽豐車站附近", query: "壽豐 常紅蛋糕" }
  ],
  "september:day6": [
    { type: "景點", name: "九曲洞", area: "花蓮縣秀林鄉太魯閣", note: "須以太魯閣園區及道路開放公告為準。", query: "太魯閣 九曲洞" },
    { type: "景點", name: "清水地熱公園", address: "宜蘭縣大同鄉三星路八段501巷150號", hours: "09:30–16:00", note: "離蘇花主線有繞行距離，需預留時間。", query: "清水地熱公園" },
    { type: "美食", name: "三星阿婆蔥油餅", address: "宜蘭縣三星鄉天福村三星路七段318號", hours: "週二公休", query: "三星阿婆蔥油餅" }
  ],
  "southLink:day6": [
    { type: "景點", name: "九曲洞", area: "花蓮縣秀林鄉太魯閣", note: "須以太魯閣園區及道路開放公告為準。", query: "太魯閣 九曲洞" },
    { type: "景點", name: "清水地熱公園", address: "宜蘭縣大同鄉三星路八段501巷150號", hours: "09:30–16:00", note: "離蘇花主線有繞行距離，需預留時間。", query: "清水地熱公園" },
    { type: "美食", name: "三星阿婆蔥油餅", address: "宜蘭縣三星鄉天福村三星路七段318號", hours: "週二公休", query: "三星阿婆蔥油餅" }
  ],
  "centralCross:day6": [
    { type: "景點", name: "九曲洞", area: "花蓮縣秀林鄉太魯閣", note: "中橫全線與步道皆確認開放時才安排。", query: "太魯閣 九曲洞" }
  ]
};

const CHECKLIST_GROUPS = [
  ["車況檢查", ["輪胎胎紋、胎壓與補胎工具", "前後煞車與煞車油", "機油、傳動與電瓶", "頭燈、方向燈與煞車燈"]],
  ["騎士裝備", ["全罩安全帽與手套", "兩截式雨衣與防水鞋套", "保暖層與替換衣物", "飲水、防曬與常用藥"]],
  ["證件與電子", ["駕照、行照、健保卡", "手機、充電線與行動電源", "緊急聯絡人與道路救援資料", "住宿資料與離線行程"]],
  ["關鍵路段當日確認", ["南橫當日開放、進入與全線淨空時間", "蘇花災阻與施工管制", "豪雨、颱風與地震後道路警示", "白牌導航未進入禁行道路"]]
];

const EXPENSE_CATEGORIES = ["住宿", "油資", "餐飲", "景點／停車", "維修", "其他"];
const EXPENSE_DAYS = ["DAY 1 · 9/16", "DAY 2 · 9/17", "DAY 3 · 9/18", "DAY 4 · 9/19", "DAY 5 · 9/20", "DAY 6 · 9/21", "DAY 7 · 9/22"];
const OFFICIAL_LINKS = [
  ["省道即時路況", "幸福公路", "https://168.thb.gov.tw/"],
  ["公路局公告", "施工與災阻消息", "https://www.thb.gov.tw/"],
  ["氣象署", "天氣、豪雨與颱風", "https://www.cwa.gov.tw/"],
  ["NCDR 災害示警", "整合即時示警", "https://alerts.ncdr.nat.gov.tw/"]
];

const WEATHER_LOCATIONS = {
  "竹東": { latitude: 24.74, longitude: 121.09 },
  "嘉義": { latitude: 23.48, longitude: 120.45 },
  "旗山": { latitude: 22.89, longitude: 120.48 },
  "枋寮": { latitude: 22.37, longitude: 120.59 },
  "台東": { latitude: 22.76, longitude: 121.15 },
  "花蓮": { latitude: 23.99, longitude: 121.61 },
  "羅東": { latitude: 24.68, longitude: 121.77 },
  "埔里": { latitude: 23.97, longitude: 120.97 }
};

const defaultState = { currentDay: 1, currentPlan: "september", checks: {}, budget: {}, expenses: [], updatedAt: new Date().toISOString() };
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
    currentPlan: Object.hasOwn(PLAN_DETAILS, imported.currentPlan) ? imported.currentPlan : "september",
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

function activeExpenseDays() {
  return activePlan().days.map(day => `DAY ${day.day} · ${day.date.split("（")[0]}`);
}

function renderPlanSelector() {
  const plan = activePlan();
  document.querySelectorAll("[data-plan]").forEach(button => {
    const active = button.dataset.plan === state.currentPlan;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  document.getElementById("planSummary").textContent = plan.summary;
  document.getElementById("overviewDescription").textContent = plan.overview;
  document.getElementById("overviewDateRange").textContent = plan.dateRange;
  const mapDetails = {
    main: ["routeMainMap", "南橫主線：竹東、嘉義、台南、寶來、台東、花蓮、羅東、竹東，各段附里程", "從竹東沿西部南下，經寶來與南橫到台東，再沿東岸北返"],
    southLink: ["routeSouthLinkMap", "南橫不通替代：竹東、嘉義、旗山、枋寮、台東、花蓮、羅東、竹東，各段附里程", "從竹東經嘉義與旗山到枋寮，沿台九線南迴到台東，再沿東岸北返"],
    september: ["routeSeptemberMap", "9/16 指定行程：竹東、嘉義、旗山、台東、花蓮、羅東、竹東，各段附里程", "從竹東經嘉義與旗山進入南橫到台東，並在花蓮保留一個機動日後北返"],
    centralCross: ["routeCentralCrossMap", "中橫返程：竹東、嘉義、旗山、台東、花蓮、埔里、竹東，各段附里程", "前五天維持原行程，第六天從花蓮經中橫與合歡山到埔里，第七天沿台三線系統返回竹東"]
  };
  const [activeMap, ariaLabel, description] = mapDetails[state.currentPlan] || mapDetails.main;
  ["routeMainMap", "routeSouthLinkMap", "routeSeptemberMap", "routeCentralCrossMap"].forEach(id => {
    document.getElementById(id).toggleAttribute("hidden", id !== activeMap);
  });
  document.getElementById("routeVisual").setAttribute("aria-label", ariaLabel);
  document.getElementById("routeDesc").textContent = `${description}；紅色為當天、藍色為未走、灰色為已完成。`;
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
  const foods = FOOD_GUIDES[`${state.currentPlan}:day${day.day}`] || FOOD_GUIDES[`${state.currentPlan}:${day.short}`] || FOOD_GUIDES[day.short] || [];
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
  const savedSpotsKey = `${state.currentPlan}:day${day.day}`;
  const savedSpots = Object.hasOwn(SAVED_SPOTS, savedSpotsKey) ? SAVED_SPOTS[savedSpotsKey] : (SAVED_SPOTS[`day${day.day}`] || []);
  const savedSpotsSection = document.getElementById("savedSpotsSection");
  savedSpotsSection.hidden = savedSpots.length === 0;
  document.getElementById("savedSpotsLink").hidden = savedSpots.length === 0;
  savedSpotsSection.innerHTML = savedSpots.length ? `
    <div class="section-heading">
      <div><p class="section-kicker">指定收藏</p><h3>想去的店家與景點</h3></div>
    </div>
    <div class="saved-spots-list">
      ${savedSpots.map(spot => `
        <a class="saved-spot external-link" href="${mapsSearchUrl(spot.query)}" target="_blank" rel="noopener">
          <div class="saved-spot-heading"><span>${spot.type}</span><strong>${spot.name}</strong></div>
          ${spot.address ? `<p><b>地址</b>${spot.address}</p>` : ""}
          ${spot.area ? `<p><b>區域</b>${spot.area}</p>` : ""}
          ${spot.hours ? `<p><b>營業時間</b>${spot.hours}</p>` : ""}
          ${spot.note ? `<small>${spot.note}</small>` : ""}
          <i aria-hidden="true">↗</i>
        </a>`).join("")}
    </div>
    <p class="fine-print">地址與營業時間依提供資料整理，出發前請再向店家或景點確認；同日項目不代表全部都要安排。</p>` : "";
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
  loadWeather();
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
  const expenseDays = activeExpenseDays();
  return expenses.length ? expenses.map(expense => `
    <article class="expense-item">
      <div><span>${showDay ? `${expenseDays[expense.day - 1] || "未指定日期"} · ` : ""}${escapeHtml(expense.category)}</span><strong>${escapeHtml(expense.name)}</strong></div>
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
  document.getElementById("dailyExpenseTitle").textContent = `${activeExpenseDays()[state.currentDay - 1]} 記帳`;
  const root = document.getElementById("dailyExpenseList");
  root.innerHTML = expenseItemsMarkup(dayExpenses, false);
  bindExpenseDeleteButtons(root);
  const total = dayExpenses.reduce((sum, expense) => sum + (Number(expense.amount) || 0), 0);
  document.getElementById("dailyExpenseTotal").textContent = `NT$${total.toLocaleString("zh-TW")}`;
}

function renderExpenseOverview() {
  if (!Array.isArray(state.expenses)) state.expenses = [];
  const expenseDays = activeExpenseDays();
  const categoryTotals = Object.fromEntries(EXPENSE_CATEGORIES.map(category => [category, 0]));
  const dayTotals = expenseDays.map(() => 0);
  state.expenses.forEach(expense => {
    if (categoryTotals[expense.category] !== undefined) categoryTotals[expense.category] += Number(expense.amount) || 0;
    if (dayTotals[expense.day - 1] !== undefined) dayTotals[expense.day - 1] += Number(expense.amount) || 0;
  });
  document.getElementById("expenseDaySummary").innerHTML = expenseDays.map((label, index) => `
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

function weatherDescription(code) {
  if (code === 0) return "晴朗";
  if ([1, 2].includes(code)) return "晴時多雲";
  if (code === 3) return "陰天";
  if ([45, 48].includes(code)) return "有霧";
  if ([51, 53, 55, 56, 57].includes(code)) return "毛毛雨";
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "有雨";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "降雪";
  if ([95, 96, 99].includes(code)) return "雷雨";
  return "天氣不明";
}

function weatherDateLabel(isoDate) {
  const [, month, day] = isoDate.split("-");
  return `${Number(month)}/${Number(day)}`;
}

function activeWeatherLocations() {
  return activePlan().days.slice(state.currentDay - 1, state.currentDay + 1).map(day => {
    const coordinates = WEATHER_LOCATIONS[day.short];
    const [month, date] = day.date.split("（")[0].split("/");
    return coordinates ? {
      ...coordinates,
      name: day.short,
      tripDate: `2026-${month.padStart(2, "0")}-${date.padStart(2, "0")}`,
      day: day.day
    } : null;
  }).filter(Boolean);
}

async function fetchLocationWeather(location) {
  const params = new URLSearchParams({
    latitude: String(location.latitude),
    longitude: String(location.longitude),
    current: "temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m",
    daily: "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max",
    timezone: "Asia/Taipei",
    forecast_days: "16"
  });
  const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`);
  if (!response.ok) throw new Error(`weather-${response.status}`);
  return { location, data: await response.json() };
}

function weatherCardMarkup({ location, data }) {
  const forecastIndex = data.daily?.time?.indexOf(location.tripDate) ?? -1;
  const current = data.current || {};
  const forecastAvailable = forecastIndex >= 0;
  const forecast = forecastAvailable ? {
    code: data.daily.weather_code[forecastIndex],
    high: Math.round(data.daily.temperature_2m_max[forecastIndex]),
    low: Math.round(data.daily.temperature_2m_min[forecastIndex]),
    rain: data.daily.precipitation_probability_max[forecastIndex]
  } : null;
  return `
    <article class="weather-card">
      <header><div><h4>${location.name}</h4><small>DAY ${location.day} · ${weatherDateLabel(location.tripDate)}</small></div><span>${weatherDescription(current.weather_code)}</span></header>
      <div class="weather-current"><strong>${Math.round(current.temperature_2m)}°</strong><span>體感 ${Math.round(current.apparent_temperature)}°</span></div>
      <dl>
        <div><dt>目前降雨</dt><dd>${Number(current.precipitation).toFixed(1)} mm</dd></div>
        <div><dt>目前風速</dt><dd>${Math.round(current.wind_speed_10m)} km/h</dd></div>
      </dl>
      ${forecast ? `<p class="weather-forecast"><b>${weatherDateLabel(location.tripDate)} ${weatherDescription(forecast.code)}</b><span>${forecast.low}–${forecast.high}° · 降雨 ${forecast.rain ?? "--"}%</span></p>` : `<p class="weather-forecast unavailable">尚未進入 ${weatherDateLabel(location.tripDate)} 預報範圍</p>`}
    </article>`;
}

async function loadWeather() {
  const status = document.getElementById("weatherStatus");
  const grid = document.getElementById("weatherGrid");
  const button = document.getElementById("refreshWeather");
  const locations = activeWeatherLocations();
  button.disabled = true;
  status.textContent = `正在取得 DAY ${locations.map(location => location.day).join("、")} 天氣…`;
  try {
    const results = await Promise.allSettled(locations.map(fetchLocationWeather));
    const weather = results.filter(result => result.status === "fulfilled").map(result => result.value);
    if (!weather.length) throw new Error("weather-unavailable");
    grid.innerHTML = weather.map(weatherCardMarkup).join("");
    const failed = results.length - weather.length;
    status.textContent = `更新時間：${new Date().toLocaleString("zh-TW", { dateStyle: "short", timeStyle: "short" })}${failed ? ` · ${failed} 個地點暫時無法取得` : ""}`;
  } catch {
    grid.innerHTML = `<p class="weather-error">目前無法取得天氣資料，請確認網路連線，或使用下方氣象署連結。</p>`;
    status.textContent = "天氣更新失敗";
  } finally {
    button.disabled = false;
  }
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
  renderExpenseOverview();
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
  const backup = JSON.stringify({ app: "zhudong-trip-2026-09-16", version: 1, exportedAt: new Date().toISOString(), state }, null, 2);
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
document.getElementById("refreshWeather").addEventListener("click", loadWeather);

renderItinerary();
renderChecklist();
renderExpenses();
renderOfficialLinks();
renderLastUpdated();
updateNetworkStatus();

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js"));
}