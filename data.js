// AI 平台情報 — 實驗站數據
// 規則：每條必備 source_url + observed_date；綁卡官方未明言一律標 unstated，不升級講法。
// 來源：每日免費資源批次（官方頁當日核實）＋公開平台變更事件。只出公開情報，不出自家帳號細節。
const SITE_UPDATED = "2026-11-09";

const CARDS = [
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
    date: "2026-11-09",
    title: "AI 免費層情報 — 2026-11-09",
    body: "今日新核實三個免費層。影片類最實在是 HeyGen Free：每月 3 條、FAQ 明文不需綁卡，代價是浮水印。OpusClip 同屬影片剪輯，但每月額度官方無公開數字，引用時要標明未公開。文字類 Claude Free 額度以 5 小時／每週滾動計、無固定訊息數，Projects 上限 5 個，而且 Free 並不包括 Claude Code。"
  }
];

// 歷史批次總覽：第 1–26 批（2026-10-14 至 2026-11-08）共 78 個資源已逐批核實交付，
// 結構化 rows 抽取中，完成後逐批補入卡片庫；在此之前不以記憶回填。
const ARCHIVE = { batches: 26, resources: 78, range: "2026-10-14 至 2026-11-08", status: "rows 抽取中" };
