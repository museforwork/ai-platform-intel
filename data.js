// AI 平台情報 — 實驗站數據
// 規則：每條必備 source_url + observed_date；綁卡官方未明言一律標 unstated，不升級講法。
// 來源：每日免費資源批次（官方頁當日核實）＋公開平台變更事件。只出公開情報，不出自家帳號細節。
const SITE_UPDATED = "2026-11-14";

const CARDS = [
  {
    service: "Magnific Free",
    vendor: "Magnific",
    category: "AI 圖像生成",
    free: "$0；每日最多 20 次 AI 生圖（僅自家模型）、每日 10 次圖庫下載；僅限個人使用、全數內容須署名、無商用授權；不可加購點數；目前不提供免費試用",
    card: "官方未明言（unstated）",
    note: "定價頁與說明文件均未提及是否需信用卡；付費方案標示「No model training on your data」，免費層說明文件未提及資料訓練",
    source_url: "https://www.magnific.com/ai/docs/plans-and-pricing",
    observed_date: "2026-11-14",
    batch: 32
  },
  {
    service: "Fliki Free",
    vendor: "Fliki",
    category: "文字轉影片",
    free: "$0；Free forever：每月 3 credits（約 5 分鐘內容）；300 個標準聲音、80+ 語言；由文字／腳本／部落格／PPT 生成影片、圖庫素材、AI 生圖與縮圖；匯出最長 5 分鐘、720p、含 Fliki 浮水印；無商用授權、無 API",
    card: "不需綁卡（定價頁明言）",
    note: "定價頁明言「No credit card required」；credits 按生成音訊時長扣（0.5 credits／分鐘起，依功能而異）",
    source_url: "https://fliki.ai/pricing",
    observed_date: "2026-11-14",
    batch: 32
  },
  {
    service: "Auphonic Free",
    vendor: "Auphonic",
    category: "AI 音訊後製",
    free: "$0；每月免費處理 2 小時音訊，每月重設、未用不累積；含全部 AI 音訊演算法（音量平衡、降噪、響度規格）、API 存取與 CLI；不含多語言語音辨識、自動 shownotes 與章節、Watch folders、批次製作",
    card: "官方未明言（unstated）",
    note: "免費產出附 Auphonic jingle；定價頁未明言是否需信用卡、商用限制或資料訓練用途",
    source_url: "https://auphonic.com/pricing",
    observed_date: "2026-11-14",
    batch: 32
  },
  {
    service: "Fireflies.ai Free",
    vendor: "Fireflies.ai",
    category: "AI 會議記錄",
    free: "$0；Free forever：轉錄不限次數、AI 摘要有限、400 分鐘儲存／團隊、20 AI credits；支援 Zoom／Google Meet／Teams 等 10+ 平台、100+ 語言轉錄、即時筆記、會議搜尋、AskFred AI 助理",
    card: "官方未明言（unstated）",
    note: "定價頁明言「No AI training on your content」——不用會議內容訓練模型，客戶保留資料完整所有權；定價頁未明言是否需信用卡",
    source_url: "https://fireflies.ai/pricing",
    observed_date: "2026-11-13",
    batch: 31
  },
  {
    service: "Gladia",
    vendor: "Gladia",
    category: "語音轉文字 API",
    free: "新帳號 €50 免費額度，效期 1 年；約等於 Solaria-3 非同步轉錄 312 小時、Solaria-1 185 小時、即時轉錄 73 小時；用完後預付儲值繼續，無訂閱；100+ 語言、說話人分離、自訂詞彙",
    card: "官方未明言（unstated）",
    note: "Self-serve 預設選擇加入模型訓練，可隨時免費在個人檔案選擇退出；定價頁未明言是否需信用卡",
    source_url: "https://www.gladia.io/pricing",
    observed_date: "2026-11-13",
    batch: 31
  },
  {
    service: "Krea Free",
    vendor: "Krea",
    category: "AI 圖像／影片生成",
    free: "$0；每日運算額度、每日自動補充；按模型計（Krea 3 約 5 張／天、Krea 1 約 18 張／天、Flux.1 Dev 約 30 張／天等）；即時生成 900 張／天、編輯 33 張／天、3D 模型 2 個／天",
    card: "官方未明言（unstated）",
    note: "免費層無商用授權（FAQ 明言，商用授權僅 Basic 以上付費方案有）；定價頁未明言是否需信用卡",
    source_url: "https://www.krea.ai/pricing",
    observed_date: "2026-11-13",
    batch: 31
  },
  {
    service: "Weaviate Cloud Free",
    vendor: "Weaviate",
    category: "向量資料庫",
    free: "$0；永久免費；每位使用者 1 個叢集、上限 10 萬物件、1 GB 記憶體、10 GB 磁碟；Embeddings 2,000 次／天、Query Agent 1,000 次／月；支援混合搜尋、多租戶、RBAC",
    card: "不需綁卡（定價頁明言）",
    note: "定價頁 Free 欄明言「No credit card required」；免費層含 Embeddings 與 Query Agent，但僅 1 個 collection、可用性 best effort",
    source_url: "https://weaviate.io/pricing",
    observed_date: "2026-11-12",
    batch: 30
  },
  {
    service: "Zapier Free",
    vendor: "Zapier",
    category: "自動化",
    free: "$0；每月 100 tasks；Zap 僅限兩步、Zap／Tables／Forms 數量不限；MCP 每次工具呼叫扣 2 tasks；含 Zapier Copilot；新帳號另享 14 天 Professional 試用",
    card: "官方未明言（unstated）",
    note: "達上限會自動切按量付費，免費使用須先關閉；Free 方案本身未明言是否需卡，僅 14 天 Pro 試用明言免卡",
    source_url: "https://zapier.com/pricing",
    observed_date: "2026-11-12",
    batch: 30
  },
  {
    service: "Deno Deploy Free",
    vendor: "Deno",
    category: "邊緣託管",
    free: "$0；每月 100 萬請求、20 GiB 流量、10 小時 Active CPU；KV 1 GiB 儲存、每月 100 萬讀／50 萬寫；10 個 App、5 個自訂網域；日誌保留 1 天",
    card: "官方未明言（unstated）",
    note: "定價頁全文無信用卡相關說明；閒置約 20–30 秒後歸零",
    source_url: "https://deno.com/deploy/pricing",
    observed_date: "2026-11-12",
    batch: 30
  },
  {
    service: "Fathom Free",
    vendor: "Fathom",
    category: "AI 會議記錄",
    free: "$0；錄影、轉錄與儲存無上限；進階摘要每月僅限前 5 通，之後改用通用模板；新帳號有 30 天 Premium 預覽",
    card: "官方未明言（unstated）",
    note: "進階摘要限制出自說明中心「Free vs Premium」文章；定價頁未明言是否需信用卡",
    source_url: "https://fathom.ai/pricing",
    observed_date: "2026-11-11",
    batch: 29
  },
  {
    service: "ImageKit Forever Free",
    vendor: "ImageKit",
    category: "圖片／影片最佳化",
    free: "$0；每月頻寬 20 GB、DAM 儲存 3 GB、VPU 500、Extension Units 650、2 位使用者；每月 1 日重置",
    card: "官方未明言（unstated）",
    note: "定價頁未明言是否需信用卡",
    source_url: "https://imagekit.io/plans/",
    observed_date: "2026-11-11",
    batch: 29
  },
  {
    service: "PostHog Free",
    vendor: "PostHog",
    category: "產品分析",
    free: "$0；官方明言「No credit card, not a trial」；每月分析 100 萬事件、Session Replay 網頁 5,000／手機 2,500 錄製、Feature Flags 100 萬請求、錯誤追蹤 100,000 例外、問卷 1,500 回覆、Logs 10 GB；每月重置、未用不累積、超量即停",
    card: "不需綁卡（定價頁明言）",
    note: "多產品免費額度獨立計算，超量即停、無意外帳單",
    source_url: "https://posthog.com/pricing",
    observed_date: "2026-11-11",
    batch: 29
  },
  {
    service: "Sentry Developer",
    vendor: "Sentry",
    category: "應用監控",
    free: "$0 永久免費，限 1 人、專案不限；每月 5,000 errors、5M spans、50 replays、5GB Logs、1GB Attachments、5GB Application Metrics；含 Agent tracing 與 MCP monitoring、30 天保留",
    card: "官方未明言（unstated）",
    note: "新用戶前 3 個月每月另享 5,000 次 Replays 優惠；14 天無限用量試用後自動轉免費",
    source_url: "https://sentry.io/pricing",
    observed_date: "2026-11-10",
    batch: 28
  },
  {
    service: "Streamlit Community Cloud",
    vendor: "Streamlit",
    category: "AI 應用託管",
    free: "免費託管 Python AI／數據應用；每應用 CPU 0.078–2 核、記憶體 690MB–2.7GB、儲存上限 50GB；12 小時無流量休眠，私人應用一次 1 個",
    card: "官方未明言（unstated）",
    note: "限額數字為 2024-02 舊數，官方註明可隨時變更；註冊流程無付款步驟，但未明言不需信用卡",
    source_url: "https://docs.streamlit.io/deploy/streamlit-community-cloud",
    observed_date: "2026-11-10",
    batch: 28
  },
  {
    service: "Railway Trial",
    vendor: "Railway",
    category: "雲端部署",
    free: "30 天試用、一次性 $5 credits；試用上限每服務 1 vCPU／0.5GB RAM、0.5GB volume 儲存",
    card: "不需綁卡（FAQ 明言）",
    note: "試用非永久免費層；Hobby 為 $5／月訂閱",
    source_url: "https://railway.com/pricing",
    observed_date: "2026-11-10",
    batch: 28
  },
  {
    service: "Claude Free",
    vendor: "Anthropic",
    category: "LLM 聊天",
    free: "$0；每 5 小時與每週有限用量，無固定訊息數；含程式碼執行、Artifacts、跨對話 Memory、Design／Slides／Docs；Projects 上限 5；context 上限 1M",
    card: "不需綁卡（定價頁付款欄 Free = n/a）",
    note: "Free 不含 Claude Code；有訓練退出選項",
    source_url: "https://claude.com/pricing",
    observed_date: "2026-11-09",
    batch: 27
  },
  {
    service: "HeyGen Free",
    vendor: "HeyGen",
    category: "AI 影片",
    free: "$0；每月 3 條影片、每條最長 1 分鐘；500+ stock avatars、1000+ AI voices、30+ 語言",
    card: "不需綁卡（FAQ 明文）",
    note: "免費影片有浮水印",
    source_url: "https://www.heygen.com/pricing",
    observed_date: "2026-11-09",
    batch: 27
  },
  {
    service: "OpusClip Free",
    vendor: "OpusClip",
    category: "影片剪輯",
    free: "$0；長片 AI 剪成 Shorts／TikTok／Reels；匯出最高 1080p、有效 3 日",
    card: "官方未明言（unstated）",
    note: "每月 credits 定價頁未公開（頁尾提示約每日 1 條）；免費字幕有浮水印",
    source_url: "https://www.opus.pro/pricing",
    observed_date: "2026-11-09",
    batch: 27
  }
];

const TIMELINE = [
  {
    date: "2026-11-14",
    type: "新增收錄",
    text: "第 32 批：Magnific Free、Fliki Free、Auphonic Free 三個免費層經官方頁核實入庫。Fliki 定價頁明言不需綁卡；Magnific 與 Auphonic 綁卡狀態官方未明言。Magnific 每日 20 次生圖加每日 10 次圖庫下載、僅限個人使用須署名；Auphonic 每月 2 小時音訊後製含 API，產出附 jingle；Fliki 每月 3 credits 約 5 分鐘內容，無商用授權。"
  },
  {
    date: "2026-11-14",
    type: "觀察",
    text: "PlayHT 定價頁連續第三次未能核實——play.ht 與 www.play.ht 兩域名皆 DNS 無法解析，暫緩待網域恢復後再查；Kapwing、Hailuo AI、Copy.ai 定價頁本批亦未能核實。"
  },
  {
    date: "2026-11-13",
    type: "新增收錄",
    text: "第 31 批：Fireflies.ai Free、Gladia、Krea Free 三個免費層經官方頁核實入庫。三者綁卡狀態官方均未明言。Fireflies 定價頁明言不用會議內容訓練模型；Gladia €50 額度效期 1 年，但 Self-serve 預設加入模型訓練、可免費退出；Krea 免費層無商用授權。"
  },
  {
    date: "2026-11-12",
    type: "新增收錄",
    text: "第 30 批：Weaviate Cloud Free、Zapier Free、Deno Deploy Free 三個免費層經官方頁核實入庫。Weaviate 定價頁明言不需綁卡；Zapier 與 Deno Deploy 綁卡狀態官方未明言。Zapier 達上限會自動切按量付費，免費使用須先關閉。"
  },
  {
    date: "2026-11-12",
    type: "觀察",
    text: "PlanetScale 官方定價頁已無免費層（舊 Hobby 免費層不在頁上），故不收錄；DataStax Astra DB 繼續暫緩——datastax.com/pricing 已轉為 IBM watsonx.data 定價頁，無 Astra 免費額度數字。"
  },
  {
    date: "2026-11-11",
    type: "新增收錄",
    text: "第 29 批：Fathom Free、ImageKit Forever Free、PostHog Free 三個免費層經官方頁核實入庫。PostHog 官方明言不需綁卡且非試用；Fathom 與 ImageKit 綁卡狀態官方未明言。"
  },
  {
    date: "2026-11-11",
    type: "觀察",
    text: "xAI（Grok）API 免費額度已結束——官方文件現為預付制，舊 $25／月 beta 贈金與 $150／月資料分享計畫已結束，故由收錄名單剔除。DataStax Astra DB 暫緩：官方確認 Free 方案結構，但未公布額度數字，待官方頁可讀時再驗。"
  },
  {
    date: "2026-11-10",
    type: "新增收錄",
    text: "第 28 批：Sentry Developer、Streamlit Community Cloud、Railway Trial 三個免費層經官方頁核實入庫。Railway 為 30 天試用、非永久免費層；Sentry 與 Streamlit 綁卡狀態官方未明言。"
  },
  {
    date: "2026-11-09",
    type: "新增收錄",
    text: "第 27 批：Claude Free、HeyGen Free、OpusClip Free 三個免費層經官方頁核實入庫。OpusClip 每月 credits 官方未公開，標記待覆核。"
  },
  {
    date: "2026-11-09",
    type: "觀察",
    text: "SambaNova Cloud 免費層現要求先綁付款方式，已由收錄名單剔除；Hugging Face Inference Providers 無免費帳號額度（included credits 只限付費方案）。"
  },
  {
    date: "2026-10-27",
    type: "條款風險",
    text: "Turso 被 Supabase 收購（2026-10-02 宣布）後，官方無承諾保留現行免費層；其文件對閒置行為說法矛盾。本站將 Turso 標為只作試用，不建議放長久資料。"
  }
];

const DIGESTS = [
  {
    date: "2026-11-14",
    title: "AI 免費層情報 — 2026-11-14",
    body: "今日新核實三個免費層。最值得先試 Auphonic Free：每月 2 小時音訊後製，含全部演算法與 API，每月重設，代價是產出附 jingle，且未明言是否需信用卡。Magnific Free 每日 20 次生圖加 10 次圖庫下載，額度最即時可用，但僅限個人使用、須署名、無商用授權。Fliki Free 是三者唯一明言不需綁卡，每月 3 credits 約 5 分鐘內容，但額度最小、匯出含浮水印且無商用授權。"
  },
  {
    date: "2026-11-13",
    title: "AI 免費層情報 — 2026-11-13",
    body: "今日新核實三個免費層，分屬會議記錄、語音轉文字與圖像生成。最值得留意的是三者的取捨各不相同：Fireflies.ai Free 轉錄不限次數，但儲存上限 400 分鐘／團隊，定價頁明言不用會議內容訓練模型，私隱承諾最明確。Gladia 新帳號有 €50 免費額度、效期 1 年，約等於 312 小時轉錄，惟 Self-serve 預設加入模型訓練，須手動退出。Krea Free 單一帳號聚合數十個模型、每日額度按模型分別計算，但免費層無商用授權。三者定價頁均未明言是否需信用卡。"
  },
  {
    date: "2026-11-12",
    title: "AI 免費層情報 — 2026-11-12",
    body: "今日新核實三個免費層。最值得先試 Weaviate Cloud Free：定價頁明言不需綁卡，免費層已含 Embeddings 與 Query Agent。Zapier Free 每月 100 個 tasks，可經 MCP 呼叫 9,000+ 個 App，惟達上限會自動切按量付費，須先關閉。Deno Deploy Free 每月 100 萬請求加內建 KV 額度；惟兩者未明言是否需信用卡。"
  },
  {
    date: "2026-11-11",
    title: "AI 免費層情報 — 2026-11-11",
    body: "今日新核實三個免費層，橫跨會議、媒體與產品分析。最值得先試 PostHog Free：官方明言「No credit card, not a trial」，額度獨立計算，超量即停、不怕意外帳單。Fathom Free 錄影、轉錄與儲存無上限，但進階摘要每月只限前 5 通。ImageKit 每月 20 GB 頻寬、3 GB 儲存；惟 Fathom 與 ImageKit 定價頁均未明言是否需信用卡。"
  },
  {
    date: "2026-11-10",
    title: "AI 免費層情報 — 2026-11-10",
    body: "今日新核實三個免費層，分屬監控、託管、部署。最實在是 Sentry Developer：$0 永久免費、額度完整，還含 Agent tracing 與 MCP monitoring，直接對上 Agent 監控需求，但定價頁未說明是否需信用卡，標為官方未明言。Streamlit Community Cloud 同樣永久免費託管 Python 應用，惟限額數字是 2024-02 舊數、官方註明可隨時變更。Railway 則不同：FAQ 明言不需綁卡，卻只是 30 天試用、一次性 $5 credits，並非永久免費層。"
  },
  {
    date: "2026-11-09",
    title: "AI 免費層情報 — 2026-11-09",
    body: "今日新核實三個免費層。影片類最實在是 HeyGen Free：每月 3 條、FAQ 明文不需綁卡，代價是浮水印。OpusClip 同屬影片剪輯，但每月額度官方無公開數字，引用時要標明未公開。文字類 Claude Free 額度以 5 小時／每週滾動計、無固定訊息數，Projects 上限 5 個，而且 Free 並不包括 Claude Code。"
  }
];

// 歷史批次總覽：第 1–26 批（2026-10-14 至 2026-11-08）共 78 個資源已逐批核實交付，
// 結構化 rows 抽取中，完成後逐批補入卡片庫；在此之前不以記憶回填。
const ARCHIVE = { batches: 26, resources: 78, range: "2026-10-14 至 2026-11-08", status: "rows 抽取中" };
