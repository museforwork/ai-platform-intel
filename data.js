// AI 平台情報 — 實驗站數據
// 規則：每條必備 source_url + observed_date；綁卡官方未明言一律標 unstated，不升級講法。
// 來源：每日免費資源批次（官方頁當日核實）＋公開平台變更事件。只出公開情報，不出自家帳號細節。
const SITE_UPDATED = "2026-11-10";

const CARDS = [
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
