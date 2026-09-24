const questionData = [

  // =========================================================
  // 中学1年 数学
  // =========================================================

  {
    grade: 1,
    subject: "数学",
    unit: "正の数・負の数",
    difficulty: "基礎",
    question: "−3 + 7 の計算結果はどれ？",
    choices: ["4", "−4", "10", "−10"],
    answer: 0,
    explanation: "−3から7増えるので、4になります。"
  },
  {
    grade: 1,
    subject: "数学",
    unit: "正の数・負の数",
    difficulty: "基礎",
    question: "−5 − 3 の計算結果はどれ？",
    choices: ["−8", "−2", "2", "8"],
    answer: 0,
    explanation: "−5からさらに3小さくなるので、−8です。"
  },
  {
    grade: 1,
    subject: "数学",
    unit: "正の数・負の数",
    difficulty: "標準",
    question: "−4 × (−6) の値は？",
    choices: ["24", "−24", "10", "−10"],
    answer: 0,
    explanation: "負の数×負の数は正の数なので、4×6＝24です。"
  },
  {
    grade: 1,
    subject: "数学",
    unit: "正の数・負の数",
    difficulty: "標準",
    question: "12 ÷ (−3) の値は？",
    choices: ["−4", "4", "−9", "9"],
    answer: 0,
    explanation: "正の数÷負の数は負の数なので、−4です。"
  },
  {
    grade: 1,
    subject: "数学",
    unit: "正の数・負の数",
    difficulty: "応用",
    question: "−8 + 3 × (−2) の値は？",
    choices: ["−14", "−10", "−2", "14"],
    answer: 0,
    explanation: "先に乗法を計算します。3×(−2)＝−6なので、−8＋(−6)＝−14です。"
  },

  {
    grade: 1,
    subject: "数学",
    unit: "文字式",
    difficulty: "基礎",
    question: "xを3倍した数を文字式で表すと？",
    choices: ["3x", "x+3", "x−3", "x/3"],
    answer: 0,
    explanation: "xを3倍するので3xです。"
  },
  {
    grade: 1,
    subject: "数学",
    unit: "文字式",
    difficulty: "基礎",
    question: "a＋a＋aを簡単にすると？",
    choices: ["3a", "a³", "a+3", "3+a"],
    answer: 0,
    explanation: "同じaが3個あるので3aです。"
  },
  {
    grade: 1,
    subject: "数学",
    unit: "文字式",
    difficulty: "標準",
    question: "x＝4のとき、2x＋3の値は？",
    choices: ["11", "8", "10", "7"],
    answer: 0,
    explanation: "xに4を代入すると2×4＋3＝11です。"
  },
  {
    grade: 1,
    subject: "数学",
    unit: "文字式",
    difficulty: "標準",
    question: "1個120円のりんごをx個買ったときの代金は？",
    choices: ["120x円", "x＋120円", "120＋x円", "x/120円"],
    answer: 0,
    explanation: "120円の商品をx個なので120x円です。"
  },

  {
    grade: 1,
    subject: "数学",
    unit: "一次方程式",
    difficulty: "基礎",
    question: "x＋5＝12を解くと？",
    choices: ["7", "17", "−7", "6"],
    answer: 0,
    explanation: "両辺から5を引くとx＝7です。"
  },
  {
    grade: 1,
    subject: "数学",
    unit: "一次方程式",
    difficulty: "基礎",
    question: "3x＝18を解くと？",
    choices: ["6", "15", "21", "54"],
    answer: 0,
    explanation: "両辺を3で割るとx＝6です。"
  },
  {
    grade: 1,
    subject: "数学",
    unit: "一次方程式",
    difficulty: "標準",
    question: "2x＋3＝11を解くと？",
    choices: ["4", "7", "5", "3"],
    answer: 0,
    explanation: "2x＝8なのでx＝4です。"
  },
  {
    grade: 1,
    subject: "数学",
    unit: "一次方程式",
    difficulty: "応用",
    question: "3x−5＝2x＋7を解くと？",
    choices: ["12", "2", "−12", "7"],
    answer: 0,
    explanation: "両辺から2xを引くとx−5＝7。よってx＝12です。"
  },

  {
    grade: 1,
    subject: "数学",
    unit: "比例",
    difficulty: "基礎",
    question: "yがxに比例し、x＝2のときy＝6。比例定数は？",
    choices: ["3", "4", "8", "12"],
    answer: 0,
    explanation: "y＝axにx＝2、y＝6を代入すると6＝2aなのでa＝3です。"
  },
  {
    grade: 1,
    subject: "数学",
    unit: "比例",
    difficulty: "標準",
    question: "y＝4xでx＝5のとき、yはいくつ？",
    choices: ["20", "9", "16", "25"],
    answer: 0,
    explanation: "y＝4×5＝20です。"
  },

  {
    grade: 1,
    subject: "数学",
    unit: "平面図形",
    difficulty: "基礎",
    question: "三角形の内角の和は何度？",
    choices: ["180°", "90°", "270°", "360°"],
    answer: 0,
    explanation: "三角形の内角の和は180°です。"
  },
  {
    grade: 1,
    subject: "数学",
    unit: "平面図形",
    difficulty: "標準",
    question: "半径5cmの円の直径は？",
    choices: ["10cm", "5cm", "15cm", "25cm"],
    answer: 0,
    explanation: "直径は半径の2倍なので10cmです。"
  },

  {
    grade: 1,
    subject: "数学",
    unit: "空間図形",
    difficulty: "基礎",
    question: "立方体の面はいくつある？",
    choices: ["6", "4", "8", "12"],
    answer: 0,
    explanation: "立方体には6つの正方形の面があります。"
  },
  {
    grade: 1,
    subject: "数学",
    unit: "空間図形",
    difficulty: "標準",
    question: "縦2cm、横3cm、高さ4cmの直方体の体積は？",
    choices: ["24cm³", "9cm³", "12cm³", "18cm³"],
    answer: 0,
    explanation: "2×3×4＝24cm³です。"
  },


  // =========================================================
  // 中学1年 理科
  // =========================================================

  {
    grade: 1,
    subject: "理科",
    unit: "植物の生活と種類",
    difficulty: "基礎",
    question: "植物が光合成を行う場所は主にどこ？",
    choices: ["葉", "根", "花", "種子"],
    answer: 0,
    explanation: "葉の細胞にある葉緑体で光合成が行われます。"
  },
  {
    grade: 1,
    subject: "理科",
    unit: "植物の生活と種類",
    difficulty: "基礎",
    question: "根から吸収した水を運ぶ管は？",
    choices: ["道管", "師管", "気孔", "葉脈"],
    answer: 0,
    explanation: "道管は根から吸収した水や無機物を運びます。"
  },
  {
    grade: 1,
    subject: "理科",
    unit: "植物の生活と種類",
    difficulty: "標準",
    question: "光合成でつくられる養分は主に何？",
    choices: ["デンプン", "酸素", "二酸化炭素", "水"],
    answer: 0,
    explanation: "光合成では二酸化炭素と水から養分がつくられます。"
  },

  {
    grade: 1,
    subject: "理科",
    unit: "物質のすがた",
    difficulty: "基礎",
    question: "水が100℃で沸騰するとき、発生する気体は？",
    choices: ["水蒸気", "酸素", "水素", "二酸化炭素"],
    answer: 0,
    explanation: "液体の水が気体になったものを水蒸気といいます。"
  },
  {
    grade: 1,
    subject: "理科",
    unit: "物質のすがた",
    difficulty: "標準",
    question: "物質を加熱して気体になったものを冷やして液体に戻す操作は？",
    choices: ["蒸留", "ろ過", "融解", "燃焼"],
    answer: 0,
    explanation: "蒸留は沸点の違いなどを利用して物質を分離する方法です。"
  },

  {
    grade: 1,
    subject: "理科",
    unit: "光と音",
    difficulty: "基礎",
    question: "光が鏡に当たって跳ね返る現象を何という？",
    choices: ["反射", "屈折", "分散", "回折"],
    answer: 0,
    explanation: "光が物体の表面ではね返る現象が反射です。"
  },
  {
    grade: 1,
    subject: "理科",
    unit: "光と音",
    difficulty: "標準",
    question: "音は何の振動によって伝わる？",
    choices: ["物体の振動", "光の振動", "温度", "電流"],
    answer: 0,
    explanation: "音は発音体の振動が周囲に伝わることで生じます。"
  },

  {
    grade: 1,
    subject: "理科",
    unit: "力と圧力",
    difficulty: "基礎",
    question: "力の大きさを表す単位は？",
    choices: ["N", "Pa", "J", "W"],
    answer: 0,
    explanation: "力の単位はニュートン（N）です。"
  },
  {
    grade: 1,
    subject: "理科",
    unit: "力と圧力",
    difficulty: "標準",
    question: "圧力を表す単位は？",
    choices: ["Pa", "N", "J", "V"],
    answer: 0,
    explanation: "圧力の単位はパスカル（Pa）です。"
  },


  // =========================================================
  // 中学1年 社会
  // =========================================================

  {
    grade: 1,
    subject: "社会",
    unit: "世界の地域構成",
    difficulty: "基礎",
    question: "日本がある州は？",
    choices: ["アジア州", "ヨーロッパ州", "アフリカ州", "南アメリカ州"],
    answer: 0,
    explanation: "日本は東アジアに位置し、アジア州に属します。"
  },
  {
    grade: 1,
    subject: "社会",
    unit: "世界の地域構成",
    difficulty: "基礎",
    question: "赤道が通っている大陸は？",
    choices: ["アフリカ大陸", "ヨーロッパ大陸", "南極大陸", "オーストラリア大陸"],
    answer: 0,
    explanation: "赤道はアフリカ大陸などを通っています。"
  },
  {
    grade: 1,
    subject: "社会",
    unit: "世界の地域構成",
    difficulty: "標準",
    question: "経度0度の基準となる経線は？",
    choices: ["本初子午線", "赤道", "日付変更線", "北回帰線"],
    answer: 0,
    explanation: "イギリスのグリニッジを通る本初子午線が経度0度です。"
  },

  {
    grade: 1,
    subject: "社会",
    unit: "世界の諸地域",
    difficulty: "基礎",
    question: "世界で最も面積が大きい国は？",
    choices: ["ロシア", "中国", "カナダ", "アメリカ"],
    answer: 0,
    explanation: "ロシアは世界最大の国土面積を持ちます。"
  },
  {
    grade: 1,
    subject: "社会",
    unit: "世界の諸地域",
    difficulty: "標準",
    question: "赤道付近に広がる高温多雨の気候帯は？",
    choices: ["熱帯", "乾燥帯", "寒帯", "冷帯"],
    answer: 0,
    explanation: "赤道付近は一年を通して高温で、雨が多い地域が多いです。"
  },


  // =========================================================
  // 中学1年 国語
  // =========================================================

  {
    grade: 1,
    subject: "国語",
    unit: "文法",
    difficulty: "基礎",
    question: "「美しい花」の「美しい」の品詞は？",
    choices: ["形容詞", "名詞", "動詞", "副詞"],
    answer: 0,
    explanation: "「美しい」は物事の状態や性質を表す形容詞です。"
  },
  {
    grade: 1,
    subject: "国語",
    unit: "文法",
    difficulty: "基礎",
    question: "「走る」の品詞は？",
    choices: ["動詞", "名詞", "形容詞", "副詞"],
    answer: 0,
    explanation: "「走る」は動作を表す動詞です。"
  },
  {
    grade: 1,
    subject: "国語",
    unit: "文法",
    difficulty: "標準",
    question: "「とても速く走る」の「とても」の品詞は？",
    choices: ["副詞", "名詞", "動詞", "助詞"],
    answer: 0,
    explanation: "「とても」は「速く」を詳しく説明している副詞です。"
  },

  {
    grade: 1,
    subject: "国語",
    unit: "漢字・語句",
    difficulty: "基礎",
    question: "「努力」の「努」の読みは？",
    choices: ["ど", "ろく", "つと", "の"],
    answer: 0,
    explanation: "「努力」は「どりょく」と読みます。"
  },
  {
    grade: 1,
    subject: "国語",
    unit: "漢字・語句",
    difficulty: "標準",
    question: "「原因」の反対に近い意味の言葉は？",
    choices: ["結果", "理由", "目的", "状態"],
    answer: 0,
    explanation: "原因によって生じたものが結果です。"
  },


  // =========================================================
  // 中学1年 英語
  // =========================================================

  {
    grade: 1,
    subject: "英語",
    unit: "be動詞",
    difficulty: "基礎",
    question: "「私は学生です。」として正しい英文は？",
    choices: [
      "I am a student.",
      "I is a student.",
      "I are a student.",
      "I be a student."
    ],
    answer: 0,
    explanation: "主語がIのとき、be動詞はamを使います。"
  },
  {
    grade: 1,
    subject: "英語",
    unit: "be動詞",
    difficulty: "基礎",
    question: "「彼は先生です。」として正しい英文は？",
    choices: [
      "He is a teacher.",
      "He am a teacher.",
      "He are a teacher.",
      "He be a teacher."
    ],
    answer: 0,
    explanation: "主語がHeのときはisを使います。"
  },
  {
    grade: 1,
    subject: "英語",
    unit: "一般動詞",
    difficulty: "基礎",
    question: "「私はサッカーをします。」として正しい英文は？",
    choices: [
      "I play soccer.",
      "I plays soccer.",
      "I playing soccer.",
      "I am play soccer."
    ],
    answer: 0,
    explanation: "主語がIなので一般動詞playをそのまま使います。"
  },
  {
    grade: 1,
    subject: "英語",
    unit: "一般動詞",
    difficulty: "標準",
    question: "「彼は毎日英語を勉強します。」として正しい英文は？",
    choices: [
      "He studies English every day.",
      "He study English every day.",
      "He studying English every day.",
      "He is study English every day."
    ],
    answer: 0,
    explanation: "主語がHeなのでstudyに三単現のsをつけ、studiesとなります。"
  },
  {
    grade: 1,
    subject: "英語",
    unit: "疑問文・否定文",
    difficulty: "基礎",
    question: "「あなたは学生ですか。」として正しい英文は？",
    choices: [
      "Are you a student?",
      "Is you a student?",
      "Am you a student?",
      "Do you a student?"
    ],
    answer: 0,
    explanation: "be動詞の疑問文ではbe動詞を文頭に置きます。"
  },


  // =========================================================
  // 中学2年 数学
  // =========================================================

  {
    grade: 2,
    subject: "数学",
    unit: "式の計算",
    difficulty: "基礎",
    question: "3x＋5xを簡単にすると？",
    choices: ["8x", "15x", "8x²", "2x"],
    answer: 0,
    explanation: "同類項なので係数を足して8xです。"
  },
  {
    grade: 2,
    subject: "数学",
    unit: "式の計算",
    difficulty: "標準",
    question: "2(3x−4)を展開すると？",
    choices: ["6x−8", "6x−4", "3x−8", "6x+8"],
    answer: 0,
    explanation: "2をそれぞれにかけるので6x−8です。"
  },
  {
    grade: 2,
    subject: "数学",
    unit: "式の計算",
    difficulty: "標準",
    question: "(x＋3)(x＋2)を展開すると？",
    choices: [
      "x²＋5x＋6",
      "x²＋6x＋5",
      "x²＋x＋6",
      "x²＋5"
    ],
    answer: 0,
    explanation: "x²＋2x＋3x＋6＝x²＋5x＋6です。"
  },

  {
    grade: 2,
    subject: "数学",
    unit: "連立方程式",
    difficulty: "基礎",
    question: "x＋y＝10、x＝6のときyは？",
    choices: ["4", "6", "10", "16"],
    answer: 0,
    explanation: "6＋y＝10なのでy＝4です。"
  },
  {
    grade: 2,
    subject: "数学",
    unit: "連立方程式",
    difficulty: "標準",
    question: "x＋y＝7、x−y＝1のときxは？",
    choices: ["4", "3", "6", "7"],
    answer: 0,
    explanation: "2つの式を足すと2x＝8なのでx＝4です。"
  },
  {
    grade: 2,
    subject: "数学",
    unit: "連立方程式",
    difficulty: "応用",
    question: "2x＋y＝9、x−y＝3のときxは？",
    choices: ["4", "3", "2", "6"],
    answer: 0,
    explanation: "2式を足すと3x＝12なのでx＝4です。"
  },

  {
    grade: 2,
    subject: "数学",
    unit: "一次関数",
    difficulty: "基礎",
    question: "y＝2x＋3の傾きは？",
    choices: ["2", "3", "5", "−2"],
    answer: 0,
    explanation: "y＝ax＋bのaが傾きなので2です。"
  },
  {
    grade: 2,
    subject: "数学",
    unit: "一次関数",
    difficulty: "基礎",
    question: "y＝3x−2でx＝4のときyは？",
    choices: ["10", "12", "6", "8"],
    answer: 0,
    explanation: "3×4−2＝10です。"
  },
  {
    grade: 2,
    subject: "数学",
    unit: "一次関数",
    difficulty: "標準",
    question: "一次関数y＝2x＋1でxが2増えると、yはどれだけ増える？",
    choices: ["4", "2", "1", "3"],
    answer: 0,
    explanation: "傾きが2なので、xが2増えるとyは2×2＝4増えます。"
  },

  {
    grade: 2,
    subject: "数学",
    unit: "図形の性質",
    difficulty: "基礎",
    question: "平行線に1本の直線が交わるとき、錯角はどうなる？",
    choices: ["等しい", "必ず90°", "和が90°", "必ず180°"],
    answer: 0,
    explanation: "平行線では錯角は等しくなります。"
  },
  {
    grade: 2,
    subject: "数学",
    unit: "図形の性質",
    difficulty: "標準",
    question: "二等辺三角形で、等しい辺に向かい合う角は？",
    choices: ["等しい", "必ず90°", "必ず60°", "異なる"],
    answer: 0,
    explanation: "二等辺三角形では底角が等しくなります。"
  },


  // =========================================================
  // 中学2年 理科
  // =========================================================

  {
    grade: 2,
    subject: "理科",
    unit: "化学変化",
    difficulty: "基礎",
    question: "物質が酸素と結びつく化学変化を何という？",
    choices: ["酸化", "還元", "融解", "蒸発"],
    answer: 0,
    explanation: "物質が酸素と結びつく反応を酸化といいます。"
  },
  {
    grade: 2,
    subject: "理科",
    unit: "化学変化",
    difficulty: "基礎",
    question: "物質が燃えるときに必要な気体は？",
    choices: ["酸素", "窒素", "二酸化炭素", "水素"],
    answer: 0,
    explanation: "燃焼には酸素が必要です。"
  },
  {
    grade: 2,
    subject: "理科",
    unit: "化学変化",
    difficulty: "標準",
    question: "酸化銅から酸素を取り除く変化を何という？",
    choices: ["還元", "酸化", "燃焼", "分解"],
    answer: 0,
    explanation: "酸化物から酸素を取り除く変化を還元といいます。"
  },

  {
    grade: 2,
    subject: "理科",
    unit: "生物の体のつくり",
    difficulty: "基礎",
    question: "植物の細胞にあり、動物細胞にはない代表的なものは？",
    choices: ["細胞壁", "核", "細胞膜", "細胞質"],
    answer: 0,
    explanation: "植物細胞には細胞壁や葉緑体などがあります。"
  },
  {
    grade: 2,
    subject: "理科",
    unit: "生物の体のつくり",
    difficulty: "標準",
    question: "血液中で酸素を運ぶ働きをするものは？",
    choices: ["赤血球", "白血球", "血小板", "血しょう"],
    answer: 0,
    explanation: "赤血球に含まれるヘモグロビンが酸素を運びます。"
  },

  {
    grade: 2,
    subject: "理科",
    unit: "電流と磁界",
    difficulty: "基礎",
    question: "電流の単位は？",
    choices: ["A", "V", "Ω", "W"],
    answer: 0,
    explanation: "電流の単位はアンペア（A）です。"
  },
  {
    grade: 2,
    subject: "理科",
    unit: "電流と磁界",
    difficulty: "基礎",
    question: "電圧の単位は？",
    choices: ["V", "A", "Ω", "J"],
    answer: 0,
    explanation: "電圧の単位はボルト（V）です。"
  },
  {
    grade: 2,
    subject: "理科",
    unit: "電流と磁界",
    difficulty: "標準",
    question: "オームの法則を表す式は？",
    choices: ["V＝IR", "V＝I＋R", "I＝VR", "R＝VI"],
    answer: 0,
    explanation: "電圧V＝電流I×抵抗Rです。"
  },


  // =========================================================
  // 中学2年 社会
  // =========================================================

  {
    grade: 2,
    subject: "社会",
    unit: "日本の地域的特色",
    difficulty: "基礎",
    question: "日本の国土の大部分を占める地形は？",
    choices: ["山地", "平野", "砂漠", "高原"],
    answer: 0,
    explanation: "日本は国土の約4分の3が山地・丘陵地です。"
  },
  {
    grade: 2,
    subject: "社会",
    unit: "日本の地域的特色",
    difficulty: "基礎",
    question: "日本で最も面積が大きい都道府県は？",
    choices: ["北海道", "岩手県", "長野県", "福島県"],
    answer: 0,
    explanation: "北海道が最も広い都道府県です。"
  },
  {
    grade: 2,
    subject: "社会",
    unit: "日本の地域的特色",
    difficulty: "標準",
    question: "日本の太平洋側で冬に乾燥しやすい主な理由は？",
    choices: [
      "季節風が山地を越えるため",
      "赤道に近いため",
      "海流がないため",
      "台風が多いため"
    ],
    answer: 0,
    explanation: "冬の季節風が日本海側で雪を降らせ、山地を越えて太平洋側に乾いた風が吹くためです。"
  },

  {
    grade: 2,
    subject: "社会",
    unit: "日本の産業",
    difficulty: "基礎",
    question: "工業製品をつくる産業を何という？",
    choices: ["工業", "農業", "漁業", "林業"],
    answer: 0,
    explanation: "工場などで製品を生産する産業が工業です。"
  },
  {
    grade: 2,
    subject: "社会",
    unit: "日本の産業",
    difficulty: "標準",
    question: "大都市周辺に工場や人口が集中する現象を何と関係づけて考えられる？",
    choices: ["都市化", "過疎化", "砂漠化", "寒冷化"],
    answer: 0,
    explanation: "人口や産業が都市に集中することを都市化といいます。"
  },


  // =========================================================
  // 中学2年 国語
  // =========================================================

  {
    grade: 2,
    subject: "国語",
    unit: "文法",
    difficulty: "基礎",
    question: "「私は本を読む。」の「を」は何という品詞？",
    choices: ["助詞", "助動詞", "名詞", "副詞"],
    answer: 0,
    explanation: "「を」は助詞です。"
  },
  {
    grade: 2,
    subject: "国語",
    unit: "文法",
    difficulty: "標準",
    question: "「静かな町」の「静かな」の品詞は？",
    choices: ["形容動詞", "形容詞", "副詞", "名詞"],
    answer: 0,
    explanation: "「静かだ」の連体形なので形容動詞です。"
  },
  {
    grade: 2,
    subject: "国語",
    unit: "文法",
    difficulty: "基礎",
    question: "「本を読んだ」の「た」は何？",
    choices: ["助動詞", "助詞", "名詞", "接続詞"],
    answer: 0,
    explanation: "「た」は過去や完了などを表す助動詞です。"
  },


  // =========================================================
  // 中学2年 英語
  // =========================================================

  {
    grade: 2,
    subject: "英語",
    unit: "過去形",
    difficulty: "基礎",
    question: "「私は昨日テニスをしました。」として正しい英文は？",
    choices: [
      "I played tennis yesterday.",
      "I play tennis yesterday.",
      "I playing tennis yesterday.",
      "I am play tennis yesterday."
    ],
    answer: 0,
    explanation: "過去の出来事なのでplayを過去形playedにします。"
  },
  {
    grade: 2,
    subject: "英語",
    unit: "過去形",
    difficulty: "基礎",
    question: "goの過去形は？",
    choices: ["went", "goed", "gone", "going"],
    answer: 0,
    explanation: "goの過去形はwentです。"
  },
  {
    grade: 2,
    subject: "英語",
    unit: "未来表現",
    difficulty: "標準",
    question: "「私は明日勉強するつもりです。」として正しい英文は？",
    choices: [
      "I am going to study tomorrow.",
      "I going study tomorrow.",
      "I am study tomorrow.",
      "I was going study tomorrow."
    ],
    answer: 0,
    explanation: "be going to＋動詞の原形で「～するつもり」を表せます。"
  },
  {
    grade: 2,
    subject: "英語",
    unit: "助動詞",
    difficulty: "基礎",
    question: "「私は泳ぐことができます。」として正しい英文は？",
    choices: [
      "I can swim.",
      "I can swims.",
      "I can swimming.",
      "I am can swim."
    ],
    answer: 0,
    explanation: "canの後ろには動詞の原形を置きます。"
  },
  {
    grade: 2,
    subject: "英語",
    unit: "比較",
    difficulty: "標準",
    question: "「東京は福岡より大きいです。」として正しい英文は？",
    choices: [
      "Tokyo is bigger than Fukuoka.",
      "Tokyo is big than Fukuoka.",
      "Tokyo is biggest than Fukuoka.",
      "Tokyo bigger is Fukuoka."
    ],
    answer: 0,
    explanation: "比較級biggerとthanを使います。"
  },


  // =========================================================
  // 中学3年 数学
  // =========================================================

  {
    grade: 3,
    subject: "数学",
    unit: "多項式の計算",
    difficulty: "基礎",
    question: "(3x＋2)＋(x−5)を簡単にすると？",
    choices: [
      "4x−3",
      "4x＋7",
      "2x−3",
      "3x−3"
    ],
    answer: 0,
    explanation: "3x＋x＝4x、2−5＝−3なので4x−3です。"
  },
  {
    grade: 3,
    subject: "数学",
    unit: "多項式の計算",
    difficulty: "標準",
    question: "(x＋4)(x−2)を展開すると？",
    choices: [
      "x²＋2x−8",
      "x²−2x−8",
      "x²＋6x−8",
      "x²＋2x＋8"
    ],
    answer: 0,
    explanation: "x²−2x＋4x−8＝x²＋2x−8です。"
  },

  {
    grade: 3,
    subject: "数学",
    unit: "因数分解",
    difficulty: "基礎",
    question: "x²＋5x＋6を因数分解すると？",
    choices: [
      "(x＋2)(x＋3)",
      "(x＋1)(x＋6)",
      "(x−2)(x−3)",
      "(x−1)(x−6)"
    ],
    answer: 0,
    explanation: "積が6、和が5になる2と3を使います。"
  },
  {
    grade: 3,
    subject: "数学",
    unit: "因数分解",
    difficulty: "基礎",
    question: "x²−9を因数分解すると？",
    choices: [
      "(x＋3)(x−3)",
      "(x−9)(x＋1)",
      "(x−3)²",
      "(x＋9)(x−1)"
    ],
    answer: 0,
    explanation: "平方の差なので(x＋3)(x−3)です。"
  },
  {
    grade: 3,
    subject: "数学",
    unit: "因数分解",
    difficulty: "標準",
    question: "2x²＋6xを因数分解すると？",
    choices: [
      "2x(x＋3)",
      "2(x＋3)",
      "x(2x＋6)",
      "6x(x＋1)"
    ],
    answer: 0,
    explanation: "2xを共通因数としてくくると2x(x＋3)です。"
  },

  {
    grade: 3,
    subject: "数学",
    unit: "平方根の意味",
    difficulty: "基礎",
    question: "√25の値は？",
    choices: ["5", "−5", "25", "±25"],
    answer: 0,
    explanation: "√25は25の正の平方根なので5です。"
  },
  {
    grade: 3,
    subject: "数学",
    unit: "平方根の大小",
    difficulty: "基礎",
    question: "√9と√16のうち大きいのは？",
    choices: ["√16", "√9", "同じ", "比較できない"],
    answer: 0,
    explanation: "√9＝3、√16＝4なので√16の方が大きいです。"
  },
  {
    grade: 3,
    subject: "数学",
    unit: "平方根の乗法・除法",
    difficulty: "標準",
    question: "√3×√12の値は？",
    choices: ["6", "√15", "12", "3√4"],
    answer: 0,
    explanation: "√3×√12＝√36＝6です。"
  },
  {
    grade: 3,
    subject: "数学",
    unit: "平方根の加法・減法",
    difficulty: "標準",
    question: "2√3＋5√3を簡単にすると？",
    choices: ["7√3", "10√3", "7√6", "3√3"],
    answer: 0,
    explanation: "同類の√3をまとめて7√3です。"
  },

  {
    grade: 3,
    subject: "数学",
    unit: "二次方程式",
    difficulty: "基礎",
    question: "x²＝16の解は？",
    choices: [
      "x＝±4",
      "x＝4",
      "x＝−4",
      "x＝16"
    ],
    answer: 0,
    explanation: "4²も(−4)²も16なのでx＝±4です。"
  },
  {
    grade: 3,
    subject: "数学",
    unit: "二次方程式",
    difficulty: "標準",
    question: "x²−5x＋6＝0の解は？",
    choices: [
      "x＝2、3",
      "x＝−2、−3",
      "x＝1、6",
      "x＝−1、−6"
    ],
    answer: 0,
    explanation: "(x−2)(x−3)＝0なのでx＝2、3です。"
  },
  {
    grade: 3,
    subject: "数学",
    unit: "二次方程式",
    difficulty: "標準",
    question: "x²−9＝0の解は？",
    choices: [
      "x＝±3",
      "x＝9",
      "x＝−9",
      "x＝3"
    ],
    answer: 0,
    explanation: "(x＋3)(x−3)＝0なのでx＝±3です。"
  },

  {
    grade: 3,
    subject: "数学",
    unit: "関数 y=ax²",
    difficulty: "基礎",
    question: "y＝2x²でx＝3のときyは？",
    choices: ["18", "12", "6", "9"],
    answer: 0,
    explanation: "2×3²＝2×9＝18です。"
  },
  {
    grade: 3,
    subject: "数学",
    unit: "関数 y=ax²",
    difficulty: "標準",
    question: "y＝ax²でx＝2、y＝12のときaは？",
    choices: ["3", "6", "4", "24"],
    answer: 0,
    explanation: "12＝4aなのでa＝3です。"
  },
  {
    grade: 3,
    subject: "数学",
    unit: "変化の割合",
    difficulty: "標準",
    question: "y＝x²について、xが1から3まで増加するときの変化の割合は？",
    choices: ["4", "2", "8", "9"],
    answer: 0,
    explanation: "(9−1)÷(3−1)＝8÷2＝4です。"
  },

  {
    grade: 3,
    subject: "数学",
    unit: "相似な図形",
    difficulty: "基礎",
    question: "相似な図形では、対応する角の大きさはどうなる？",
    choices: ["等しい", "必ず2倍", "必ず半分", "必ず90°"],
    answer: 0,
    explanation: "相似な図形では対応する角がそれぞれ等しくなります。"
  },
  {
    grade: 3,
    subject: "数学",
    unit: "三角形の相似条件",
    difficulty: "標準",
    question: "2組の角がそれぞれ等しい2つの三角形は？",
    choices: ["相似", "合同とは限らない", "必ず正三角形", "必ず二等辺三角形"],
    answer: 0,
    explanation: "2組の角がそれぞれ等しい場合、2つの三角形は相似です。"
  },

  {
    grade: 3,
    subject: "数学",
    unit: "円周角の定理",
    difficulty: "基礎",
    question: "同じ弧に対する円周角は、中心角の何分の1？",
    choices: ["1/2", "1/3", "2倍", "同じ"],
    answer: 0,
    explanation: "同じ弧に対する円周角は中心角の半分です。"
  },

  {
    grade: 3,
    subject: "数学",
    unit: "三平方の定理",
    difficulty: "基礎",
    question: "直角三角形の2辺が3cm、4cmのとき、斜辺は？",
    choices: ["5cm", "6cm", "7cm", "12cm"],
    answer: 0,
    explanation: "3²＋4²＝9＋16＝25＝5²なので斜辺は5cmです。"
  },
  {
    grade: 3,
    subject: "数学",
    unit: "三平方の定理",
    difficulty: "標準",
    question: "直角三角形の斜辺が13cm、1辺が5cmのとき、もう1辺は？",
    choices: ["12cm", "8cm", "10cm", "18cm"],
    answer: 0,
    explanation: "13²−5²＝169−25＝144＝12²なので12cmです。"
  },

  {
    grade: 3,
    subject: "数学",
    unit: "標本調査",
    difficulty: "基礎",
    question: "集団全体を調べる調査を何という？",
    choices: ["全数調査", "標本調査", "抽出調査", "比較調査"],
    answer: 0,
    explanation: "対象となる集団全体を調べるのが全数調査です。"
  },
  {
    grade: 3,
    subject: "数学",
    unit: "標本調査",
    difficulty: "標準",
    question: "集団の一部を取り出して全体の特徴を推測する調査は？",
    choices: ["標本調査", "全数調査", "実験調査", "個別調査"],
    answer: 0,
    explanation: "集団から一部を標本として取り出して調べる方法です。"
  },


  // =========================================================
  // 中学3年 理科
  // =========================================================

  {
    grade: 3,
    subject: "理科",
    unit: "運動とエネルギー",
    difficulty: "基礎",
    question: "物体の運動の速さを表す量は？",
    choices: ["速さ", "質量", "密度", "圧力"],
    answer: 0,
    explanation: "一定時間にどれだけ移動したかで速さを表します。"
  },
  {
    grade: 3,
    subject: "理科",
    unit: "運動とエネルギー",
    difficulty: "標準",
    question: "物体に力が働き、その力の向きに物体が移動したとき、力は何をしたといえる？",
    choices: ["仕事をした", "消滅した", "質量を増やした", "温度を固定した"],
    answer: 0,
    explanation: "力を加えてその向きに物体を動かしたとき、力は仕事をしたといいます。"
  },
  {
    grade: 3,
    subject: "理科",
    unit: "運動とエネルギー",
    difficulty: "基礎",
    question: "高いところにある物体がもつエネルギーを何という？",
    choices: ["位置エネルギー", "電気エネルギー", "光エネルギー", "化学エネルギー"],
    answer: 0,
    explanation: "高さによってもつエネルギーが位置エネルギーです。"
  },

  {
    grade: 3,
    subject: "理科",
    unit: "生命の連続性",
    difficulty: "基礎",
    question: "生物の体細胞が分裂するとき、最初に核の中で見られるものは？",
    choices: ["染色体", "葉緑体", "細胞壁", "液胞"],
    answer: 0,
    explanation: "細胞分裂のとき、染色体が現れて分配されます。"
  },
  {
    grade: 3,
    subject: "理科",
    unit: "生命の連続性",
    difficulty: "標準",
    question: "親の形質が子に伝わることに関係するものは？",
    choices: ["遺伝子", "血しょう", "消化液", "筋肉"],
    answer: 0,
    explanation: "遺伝子が親から子へ形質を伝える情報を担っています。"
  },

  {
    grade: 3,
    subject: "理科",
    unit: "化学変化とイオン",
    difficulty: "基礎",
    question: "水に溶けて電流を流す物質を何という？",
    choices: ["電解質", "非金属", "絶縁体", "合金"],
    answer: 0,
    explanation: "水溶液中で電離して電流を流す物質を電解質といいます。"
  },
  {
    grade: 3,
    subject: "理科",
    unit: "化学変化とイオン",
    difficulty: "基礎",
    question: "陽イオンはどのような電気を帯びている？",
    choices: ["正の電気", "負の電気", "電気を帯びない", "両方"],
    answer: 0,
    explanation: "陽イオンは正の電気を帯びたイオンです。"
  },
  {
    grade: 3,
    subject: "理科",
    unit: "化学変化とイオン",
    difficulty: "標準",
    question: "陰イオンはどのような電気を帯びている？",
    choices: ["負の電気", "正の電気", "電気を帯びない", "必ず両方"],
    answer: 0,
    explanation: "陰イオンは負の電気を帯びたイオンです。"
  },

  {
    grade: 3,
    subject: "理科",
    unit: "地球と宇宙",
    difficulty: "基礎",
    question: "地球が太陽の周りを回る運動を何という？",
    choices: ["公転", "自転", "日周運動", "年周運動"],
    answer: 0,
    explanation: "地球が太陽の周りを回ることを公転といいます。"
  },
  {
    grade: 3,
    subject: "理科",
    unit: "地球と宇宙",
    difficulty: "基礎",
    question: "地球が1日に1回転する運動は？",
    choices: ["自転", "公転", "回転移動", "年周運動"],
    answer: 0,
    explanation: "地球は約24時間で1回自転します。"
  },
  {
    grade: 3,
    subject: "理科",
    unit: "地球と宇宙",
    difficulty: "標準",
    question: "月が地球の周りを回ることによって起こる見かけの変化は？",
    choices: ["月の満ち欠け", "季節の変化", "昼夜の変化", "天気の変化"],
    answer: 0,
    explanation: "月と太陽と地球の位置関係が変化するため、月の見える形が変わります。"
  },


  // =========================================================
  // 中学3年 社会
  // =========================================================

  {
    grade: 3,
    subject: "社会",
    unit: "日本国憲法",
    difficulty: "基礎",
    question: "日本国憲法の基本原理の一つは？",
    choices: ["基本的人権の尊重", "身分制度", "専制政治", "軍事優先"],
    answer: 0,
    explanation: "日本国憲法の基本原理には国民主権、基本的人権の尊重、平和主義があります。"
  },
  {
    grade: 3,
    subject: "社会",
    unit: "日本国憲法",
    difficulty: "基礎",
    question: "日本国憲法で主権があるのは誰？",
    choices: ["国民", "内閣総理大臣", "裁判所", "天皇"],
    answer: 0,
    explanation: "日本国憲法では国民主権が基本原理の一つです。"
  },
  {
    grade: 3,
    subject: "社会",
    unit: "日本国憲法",
    difficulty: "標準",
    question: "日本国憲法で天皇は日本国の何とされている？",
    choices: ["象徴", "政治の最高責任者", "裁判官", "国会議員"],
    answer: 0,
    explanation: "日本国憲法では天皇は日本国および日本国民統合の象徴とされています。"
  },

  {
    grade: 3,
    subject: "社会",
    unit: "国会",
    difficulty: "基礎",
    question: "国会を構成する2つの議院は？",
    choices: [
      "衆議院と参議院",
      "上院と下院",
      "最高裁判所と衆議院",
      "内閣と参議院"
    ],
    answer: 0,
    explanation: "日本の国会は衆議院と参議院の二院制です。"
  },
  {
    grade: 3,
    subject: "社会",
    unit: "国会",
    difficulty: "標準",
    question: "法律を制定する機関は？",
    choices: ["国会", "内閣", "裁判所", "地方自治体だけ"],
    answer: 0,
    explanation: "国会は国の唯一の立法機関です。"
  },

  {
    grade: 3,
    subject: "社会",
    unit: "内閣",
    difficulty: "基礎",
    question: "行政を担当する機関は？",
    choices: ["内閣", "国会", "裁判所", "選挙管理委員会"],
    answer: 0,
    explanation: "行政権は内閣に属します。"
  },
  {
    grade: 3,
    subject: "社会",
    unit: "内閣",
    difficulty: "標準",
    question: "内閣の首長は誰？",
    choices: ["内閣総理大臣", "衆議院議長", "最高裁判所長官", "天皇"],
    answer: 0,
    explanation: "内閣の首長は内閣総理大臣です。"
  },

  {
    grade: 3,
    subject: "社会",
    unit: "裁判所",
    difficulty: "基礎",
    question: "司法権を担当する機関は？",
    choices: ["裁判所", "国会", "内閣", "地方議会"],
    answer: 0,
    explanation: "司法権は裁判所に属します。"
  },
  {
    grade: 3,
    subject: "社会",
    unit: "裁判所",
    difficulty: "標準",
    question: "日本の最高裁判所が行う重要な役割の一つは？",
    choices: [
      "法律などが憲法に違反していないか判断する",
      "法律をすべて作る",
      "予算を作る",
      "外交だけを行う"
    ],
    answer: 0,
    explanation: "最高裁判所は違憲審査権を持っています。"
  },

  {
    grade: 3,
    subject: "社会",
    unit: "地方自治",
    difficulty: "基礎",
    question: "地方公共団体の政治を住民が行うことを何という？",
    choices: ["地方自治", "中央集権", "直接民主制のみ", "外交"],
    answer: 0,
    explanation: "地方の政治を住民の意思に基づいて行うことを地方自治といいます。"
  },


  // =========================================================
  // 中学3年 国語
  // =========================================================

  {
    grade: 3,
    subject: "国語",
    unit: "文法",
    difficulty: "基礎",
    question: "「私は静かに歩いた。」の「静かに」の品詞は？",
    choices: ["形容動詞", "副詞", "名詞", "動詞"],
    answer: 0,
    explanation: "「静かだ」は形容動詞で、「静かに」はその連用形です。"
  },
  {
    grade: 3,
    subject: "国語",
    unit: "文法",
    difficulty: "標準",
    question: "「本を読む」の「読む」は何形？",
    choices: ["終止形", "連体形", "仮定形", "命令形"],
    answer: 0,
    explanation: "「読む」で文を終えているため終止形です。"
  },
  {
    grade: 3,
    subject: "国語",
    unit: "文法",
    difficulty: "標準",
    question: "「読めば」の「読め」は何形？",
    choices: ["仮定形", "未然形", "連用形", "命令形"],
    answer: 0,
    explanation: "「ば」がついて仮定を表しているので仮定形です。"
  },

  {
    grade: 3,
    subject: "国語",
    unit: "漢字・語句",
    difficulty: "基礎",
    question: "「責任」の読み方は？",
    choices: ["せきにん", "せきじん", "せきねん", "せつにん"],
    answer: 0,
    explanation: "「責任」は「せきにん」と読みます。"
  },
  {
    grade: 3,
    subject: "国語",
    unit: "漢字・語句",
    difficulty: "標準",
    question: "「適切」と最も近い意味の言葉は？",
    choices: ["ふさわしい", "危険な", "珍しい", "複雑な"],
    answer: 0,
    explanation: "適切とは、その場や目的にふさわしいことです。"
  },


  // =========================================================
  // 中学3年 英語
  // =========================================================

  {
    grade: 3,
    subject: "英語",
    unit: "現在完了",
    difficulty: "基礎",
    question: "「私はその本を読んだことがあります。」として正しい英文は？",
    choices: [
      "I have read the book.",
      "I have reading the book.",
      "I has read the book.",
      "I am read the book."
    ],
    answer: 0,
    explanation: "現在完了はhave/has＋過去分詞を使います。"
  },
  {
    grade: 3,
    subject: "英語",
    unit: "現在完了",
    difficulty: "標準",
    question: "「私は3年間英語を勉強しています。」として正しい英文は？",
    choices: [
      "I have studied English for three years.",
      "I studied English three years.",
      "I have study English for three years.",
      "I am studied English for three years."
    ],
    answer: 0,
    explanation: "継続を表す現在完了ではhave＋過去分詞＋forなどを使います。"
  },

  {
    grade: 3,
    subject: "英語",
    unit: "受け身",
    difficulty: "基礎",
    question: "「この本は多くの人に読まれています。」として正しい英文は？",
    choices: [
      "This book is read by many people.",
      "This book reads many people.",
      "This book is reading by many people.",
      "This book read by many people."
    ],
    answer: 0,
    explanation: "受け身はbe動詞＋過去分詞で表します。"
  },
  {
    grade: 3,
    subject: "英語",
    unit: "受け身",
    difficulty: "標準",
    question: "「英語は世界中で話されています。」として正しい英文は？",
    choices: [
      "English is spoken around the world.",
      "English speaks around the world.",
      "English is speak around the world.",
      "English spoken around the world."
    ],
    answer: 0,
    explanation: "Englishは単数扱いなのでis＋spokenです。"
  },

  {
    grade: 3,
    subject: "英語",
    unit: "不定詞",
    difficulty: "基礎",
    question: "「私は英語を勉強するために図書館へ行きました。」として正しい英文は？",
    choices: [
      "I went to the library to study English.",
      "I went to the library study English.",
      "I went to the library studying English.",
      "I went the library to studying English."
    ],
    answer: 0,
    explanation: "目的を表す不定詞はto＋動詞の原形です。"
  },
  {
    grade: 3,
    subject: "英語",
    unit: "不定詞",
    difficulty: "標準",
    question: "「英語を話すことは楽しいです。」として正しい英文は？",
    choices: [
      "To speak English is fun.",
      "Speak English is fun.",
      "To speaking English is fun.",
      "Speaking to English is fun."
    ],
    answer: 0,
    explanation: "不定詞の名詞的用法でTo speak Englishを主語にできます。"
  },

  {
    grade: 3,
    subject: "英語",
    unit: "関係代名詞",
    difficulty: "標準",
    question: "「これは私が昨日買った本です。」として正しい英文は？",
    choices: [
      "This is the book that I bought yesterday.",
      "This is the book I buy yesterday.",
      "This is book that I bought yesterday.",
      "This is the book who I bought yesterday."
    ],
    answer: 0,
    explanation: "物を先行詞とする関係代名詞としてthatを使えます。"
  },

  {
    grade: 3,
    subject: "英語",
    unit: "疑問詞",
    difficulty: "基礎",
    question: "「あなたは何を食べましたか。」として正しい英文は？",
    choices: [
      "What did you eat?",
      "What do you ate?",
      "What did you ate?",
      "What you did eat?"
    ],
    answer: 0,
    explanation: "過去の疑問文ではdid＋主語＋動詞の原形を使います。"
  },


  // =========================================================
  // 追加：定期テスト向け混合問題
  // =========================================================

  {
    grade: 1,
    subject: "数学",
    unit: "正の数・負の数",
    difficulty: "応用",
    question: "−2×(3−7)の値は？",
    choices: ["8", "−8", "2", "−2"],
    answer: 0,
    explanation: "3−7＝−4なので、−2×(−4)＝8です。"
  },
  {
    grade: 2,
    subject: "数学",
    unit: "一次関数",
    difficulty: "応用",
    question: "一次関数y＝−2x＋5で、x＝3のときyは？",
    choices: ["−1", "1", "−6", "11"],
    answer: 0,
    explanation: "−2×3＋5＝−6＋5＝−1です。"
  },
  {
    grade: 3,
    subject: "数学",
    unit: "関数 y=ax²",
    difficulty: "応用",
    question: "y＝ax²でx＝−2のときy＝12なら、aはいくつ？",
    choices: ["3", "−3", "6", "−6"],
    answer: 0,
    explanation: "12＝a×(−2)²＝4aなのでa＝3です。"
  },

  {
    grade: 1,
    subject: "理科",
    unit: "植物の生活と種類",
    difficulty: "応用",
    question: "葉の裏側に多く見られ、気体の出入りに関係する部分は？",
    choices: ["気孔", "道管", "師管", "根毛"],
    answer: 0,
    explanation: "気孔は葉の表面にある小さな穴で、気体の出入りに関係します。"
  },
  {
    grade: 2,
    subject: "理科",
    unit: "電流と磁界",
    difficulty: "応用",
    question: "6Vの電圧を3Ωの抵抗につないだときの電流は？",
    choices: ["2A", "3A", "9A", "18A"],
    answer: 0,
    explanation: "オームの法則I＝V÷Rより、6÷3＝2Aです。"
  },
  {
    grade: 3,
    subject: "理科",
    unit: "化学変化とイオン",
    difficulty: "応用",
    question: "水溶液中で陽イオンと陰イオンが電気を帯びているのは、何を失ったり受け取ったりしたため？",
    choices: ["電子", "中性子", "原子核", "分子"],
    answer: 0,
    explanation: "電子の受け渡しによって原子や原子団がイオンになります。"
  },

  {
    grade: 1,
    subject: "社会",
    unit: "世界の地域構成",
    difficulty: "応用",
    question: "日本の標準時の基準となる経線は東経何度？",
    choices: ["135度", "90度", "180度", "0度"],
    answer: 0,
    explanation: "日本の標準時子午線は東経135度です。"
  },
  {
    grade: 2,
    subject: "社会",
    unit: "日本の地域的特色",
    difficulty: "応用",
    question: "日本で地震が多い大きな理由は？",
    choices: [
      "複数のプレートの境界に位置するため",
      "赤道に近いため",
      "砂漠が多いため",
      "海がないため"
    ],
    answer: 0,
    explanation: "日本列島周辺には複数のプレートが集まり、地震が発生しやすい地域です。"
  },
  {
    grade: 3,
    subject: "社会",
    unit: "日本国憲法",
    difficulty: "応用",
    question: "日本国憲法が保障している権利の例として適切なものは？",
    choices: [
      "表現の自由",
      "身分による参政権の固定",
      "国民の投票禁止",
      "裁判を受ける権利の禁止"
    ],
    answer: 0,
    explanation: "表現の自由は日本国憲法で保障されている基本的人権の一つです。"
  },

  {
    grade: 1,
    subject: "国語",
    unit: "文法",
    difficulty: "応用",
    question: "「本を読む人」の「読む」の活用形は？",
    choices: ["連体形", "終止形", "未然形", "仮定形"],
    answer: 0,
    explanation: "「人」という名詞を修飾しているため連体形です。"
  },
  {
    grade: 2,
    subject: "国語",
    unit: "文法",
    difficulty: "応用",
    question: "「雨が降ったので、家に帰った。」の「ので」が表す関係は？",
    choices: ["原因・理由", "逆接", "並列", "条件"],
    answer: 0,
    explanation: "雨が降ったことが家に帰った原因・理由になっています。"
  },
  {
    grade: 3,
    subject: "国語",
    unit: "漢字・語句",
    difficulty: "応用",
    question: "「具体的」の反対に近い言葉は？",
    choices: ["抽象的", "直接的", "積極的", "客観的"],
    answer: 0,
    explanation: "具体的の反対に近い言葉は抽象的です。"
  },

  {
    grade: 1,
    subject: "英語",
    unit: "一般動詞",
    difficulty: "応用",
    question: "「彼女は毎朝7時に起きます。」として正しい英文は？",
    choices: [
      "She gets up at seven every morning.",
      "She get up at seven every morning.",
      "She getting up at seven every morning.",
      "She is get up at seven every morning."
    ],
    answer: 0,
    explanation: "主語がSheなのでgetに三単現のsをつけてgetsとなります。"
  },
  {
    grade: 2,
    subject: "英語",
    unit: "比較",
    difficulty: "応用",
    question: "「この本はあの本より面白いです。」として正しい英文は？",
    choices: [
      "This book is more interesting than that one.",
      "This book is interesting than that one.",
      "This book is most interesting than that one.",
      "This book more interesting is that one."
    ],
    answer: 0,
    explanation: "interestingの比較級はmore interestingです。"
  },
  {
    grade: 3,
    subject: "英語",
    unit: "関係代名詞",
    difficulty: "応用",
    question: "「私には英語を話す友達がいます。」として正しい英文は？",
    choices: [
      "I have a friend who speaks English.",
      "I have a friend which speaks English.",
      "I have a friend who speak English.",
      "I have a friend speaks English."
    ],
    answer: 0,
    explanation: "人を先行詞とする主格の関係代名詞whoを使い、friendは三人称単数なのでspeaksとなります。"
  }

];
