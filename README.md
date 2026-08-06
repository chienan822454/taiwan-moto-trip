# 環島七日

新竹縣竹東鎮出發、七天六夜逆時針白牌機車環島的靜態 PWA。保留 2026/9/11–9/17 原始行程，另提供避開農曆七月的 9/17–9/23 週四精簡版，可取消台南住宿、由嘉義直達寶來並在花蓮安排機動日；實際通行仍以公路局當日公告與現場管制為準。

## 本機預覽

Service worker 需要 HTTP 環境，請在本目錄執行：

```powershell
python -m http.server 4173
```

開啟 `http://localhost:4173/`。直接雙擊 `index.html` 仍可查看與使用清單／預算，但不會啟用 PWA 離線快取。

## 修改內容

- 行程、停靠點與導航：編輯 `app.js` 的 `TRIP_DAYS`。
- 南橫封閉備案：編輯 `SOUTH_LINK_DAYS`；網頁可在「南橫主線／南迴備案」間切換，選擇會保存在本機。
- 週四精簡版：編輯 `THURSDAY_DAYS`；此方案與原始週五行程並存，可在網頁切換比較。
- 每天顯示建議出發節奏；導航預設要求 Google Maps 避開高速道路，蘇花與返程另拆成短段控制點。
- 每日頁依騎乘時閱讀順序排列為風險／補油、今日路線、分段導航、吃住、記帳，並提供頁內捷徑。
- 南橫主線 D4 標示西進最後補油點「梅蘭加油站」、營業時間與導航；實際營業仍須出發前確認。
- 住宿區域與搜尋條件：編輯 `LODGING_GUIDES`、`LODGING_REQUIREMENTS`。
- 清單：編輯 `CHECKLIST_GROUPS`。
- 每日行程可新增當日支出，底部「記帳」頁顯示七天與分類加總；分類可編輯 `EXPENSE_CATEGORIES`，明細保存在瀏覽器 localStorage。
- 「記帳」頁可將記帳、行前清單與行程設定備份為 JSON，並在其他裝置還原。
- 官方連結：編輯 `OFFICIAL_LINKS`。
- 更新靜態資產後，遞增 `sw.js` 的 `CACHE_NAME`，避免使用者停留在舊快取。

## GitHub Pages

預定 repo 名稱為 `taiwan-moto-trip`。將本目錄內容推送至 repo 根目錄，再於 GitHub Settings → Pages 選擇從主分支根目錄部署。

預定網址：`https://chienan822454.github.io/taiwan-moto-trip/`

## 注意

Google Maps 的汽車建議路線不保證白牌機車可合法通行。南橫、蘇花與快速道路須以交通部公路局公告、現場標誌及交維指示為準。

地圖輪廓與地點中心座標取自 OpenStreetMap／Nominatim，依相同的等距圓柱投影轉為本地 SVG；地圖資料 © OpenStreetMap contributors，採 ODbL 1.0。路線里程為道路規劃區間，不是節點間的直線距離。

目前圖示與路線視覺為本專案自製 SVG，未使用外部照片或第三方圖示套件。