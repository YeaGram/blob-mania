const contentType = {
  name: "type",
  filters: [
    "artbook",
    "cartoon",
    "doujinshi",
    "manhua",
    "western",
    "manhwa",
    "imageset",
    "comic",
    "manga",
    "webtoon",
    "_4_koma",
    "full_color",
    "fan_colored",
  ],
};

const dataGenres = {
  name: "genres",
  filters: [
    {
      name: "explicit",
      filters: [
        "ecchi",
        "smut",
        "gore",
        "violence",
        "hentai",
        "adult",
        "bloody",
        "mature",
        "sm_bdsm",
      ],
    },
    {
      name: "safe",
      filters: [
        "action",
        "adventure",
        "drama",
        "comedy",
        "horror",
        "sports",
        "romance",
        "fantasy",
        "slice_of_life",
        "supernatural",
        "sci_fi",
      ],
    },
    {
      name: "demographics",
      filters: [
        "shoujo",
        "seinen",
        "shounen",
        "yuri",
        "bara",
        "yaoi",
        "josei",
        "kids",
        "futa",
        "loli",
        "shota",
        "shounen_ai",
        "shoujo_ai",
      ],
    },
    {
      name: "themes",
      filters: [
        "cooking",
        "bodyswap",
        "delinquents",
        "wuxia",
        "yakuzas",
        "villainess",
        "isekai",
        "mecha",
        "superhero",
        "revenge",
        "military",
        "martial_arts",
        "ninja",
        "police",
        "oneshot",
        "regression",
        "royal_family",
        "school_life",
        "music",
        "time_travel",
        "reverse_harem",
        "super_power",
        "psychological",
        "philosophical",
        "survival",
        "tower_climbing",
        "transmigration",
        "video_games",
        "xianxia",
        "xuanhuan",
        "virtual_reality",
        "traditional_games",
        "thriller",
        "vampires",
        "space",
        "showbiz",
        "samurai",
        "omegaverse",
        "netorare",
        "monsters",
        "medical",
        "magical_girls",
        "harem",
        "genderswap",
        "adaptation",
        "aliens",
        "beasts",
        "cheating_infidelity",
        "crime",
        "dungeons",
        "game",
        "ghosts",
        "harlequin",
        "incest",
        "dementia",
        "contest_winning",
        "crossdressing",
        "emperor_daughte",
        "fetish",
        "gender_bender",
        "gyaru",
        "historical",
        "magic",
        "monster_girls",
        "mystery",
        "office_workers",
        "parody",
        "post_apocalyptic",
        "reincarnation",
        "reverse_isekai",
        "royalty",
        "college_life",
        "cars",
        "anthology",
        "age_gap",
        "tragedy",
        "animals",
        "childhood_friends",
      ],
    },
  ],
};

const dataLanguage = {
  name: "language",
  filters: [
    {
      name: "Arabic",
      languageCode: "ar",
      emoji: "🇸🇦",
    },

    {
      name: "Chinese",
      languageCode: "zh",
      emoji: "🇨🇳",
    },

    {
      name: "English",
      languageCode: "en",
      emoji: "🇬🇧",
    },

    {
      name: "French",
      languageCode: "fr",
      emoji: "🇫🇷",
    },

    {
      name: "German",
      languageCode: "de",
      emoji: "🇩🇪",
    },

    {
      name: "Indonesian",
      languageCode: "id",
      emoji: "🇮🇩",
    },

    {
      name: "Japanese",
      languageCode: "ja",
      emoji: "🇯🇵",
    },
    {
      name: "Korean",
      translatedLanguage: "ko",
      emoji: "🇰🇷",
    },

    {
      name: "Russian",
      translatedLanguage: "ru",
      emoji: "🇷🇺",
    },
  ],
};

const dataOrders = {
  name: "order",
  filters: [
    { name: "score", filter: "field_score" },
    { name: "follow", filter: "field_follow" },
    { name: "review", filter: "field_review" },
    { name: "comment", filter: "field_comment" },
    { name: "chapter", filter: "field_chapter" },
    { name: "upload", filter: "field_upload" },
    { name: "public", filter: "field_public" },
    { name: "name", filter: "field_name" },
    { name: "views", filter: "views_d000" },
  ],
};

const dataStatus = {
  name: "status",
  filters: ["completed", "pending", "ongoing", "hiatus", "cancelled"],
};

export const comicProps = {
  domain: "https://battwo.com",
  contentType,
  orders: dataOrders,
  genres: dataGenres,
  status: dataStatus,
  originaLanguage: dataLanguage,
  translatedLanguage: dataLanguage,
};
