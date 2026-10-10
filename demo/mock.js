// podic 官网 demo mock：真前端 + 预置数据（由 scripts/pages-mock-gen.py 生成，勿手改）
// 覆盖 fetch：/api/* 全部本地应答，不发网络请求
const MOCK = {"LOOKUP": {"hello|en": {"items": [{"entry_id": 319158, "extra": {"collins": 3, "oxford": 1, "source": "ecdict", "tags": ["zk", "gk"]}, "freq": 0.298347, "headword": "hello", "ipa": {"uk": "hә'lәu", "us": ""}, "lang": "en", "matched_by": "exact", "pos": [], "senses": [{"en": "n. an expression of greeting", "kind": "def", "pos": [], "zh": "interj. 喂, 嘿"}, {"en": "hello", "kind": "phrase", "tags": ["CEDICT"], "zh": "你好"}, {"en": "Hello", "kind": "phrase", "tags": ["CEDICT"], "zh": "午安"}, {"en": "hello", "kind": "phrase", "tags": ["CEDICT"], "zh": "哈喽"}, {"en": "hello", "kind": "phrase", "tags": ["CEDICT"], "zh": "哈啰"}, {"en": "hello", "kind": "phrase", "tags": ["CEDICT"], "zh": "哈罗"}, {"en": "hello", "kind": "phrase", "tags": ["CEDICT"], "zh": "您好"}]}, {"entry_id": 20748, "extra": {"refined": true, "source": "lexique"}, "freq": 0.214523, "headword": "hello", "ipa": "ɛlo", "lang": "fr", "matched_by": "exact", "pos": ["int"], "senses": [{"fr": "(anglicisme) hello", "kind": "phrase", "tags": ["CFDICT"], "zh": "int. 喂，你好（英语借词，多用于接电话）"}]}, {"entry_id": -1, "extra": {"model": "glm-5.3-flash", "source": "ai"}, "freq": 0.0, "headword": "привет", "lang": "ru", "matched_by": "user", "pos": ["int."], "reading": "privet", "senses": [{"pos": ["int."], "zh": "你好；喂（俄语非正式问候语）"}]}, {"entry_id": 319160, "extra": {"source": "ecdict"}, "freq": 0.0, "headword": "hello program", "lang": "en", "matched_by": "fts", "pos": [], "senses": [{"kind": "phrase", "pos": [], "tags": ["计"], "zh": "试用程序"}]}, {"entry_id": 319161, "extra": {"source": "ecdict"}, "freq": 0.0, "headword": "hello world", "lang": "en", "matched_by": "fts", "pos": [], "senses": [{"kind": "def", "pos": [], "zh": "你好世界"}]}, {"entry_id": 299371, "extra": {"source": "ecdict"}, "freq": 0.0, "headword": "golden hello", "ipa": {"uk": "ˈɡəuldən heˈləu", "us": ""}, "lang": "en", "matched_by": "fts", "pos": [], "senses": [{"kind": "def", "pos": [], "zh": "<非正>调职补偿金"}]}, {"entry_id": 319159, "extra": {"source": "ecdict"}, "freq": 0.0, "headword": "hello girl", "ipa": {"uk": "heˈləu ɡə:l", "us": ""}, "lang": "en", "matched_by": "fts", "pos": [], "senses": [{"kind": "def", "pos": [], "zh": "女话务员; 女电话接线员"}]}, {"entry_id": 333743, "extra": {"source": "ecdict"}, "freq": 0.0, "headword": "hulloa", "ipa": {"uk": "hә'lәj, ,hʌ-", "us": ""}, "lang": "en", "matched_by": "fts", "pos": [], "senses": [{"kind": "def", "pos": ["int"], "zh": ", n., v.<主英> = hello"}]}, {"entry_id": 613347, "extra": {"source": "ecdict"}, "freq": 0.0, "headword": "say hello to", "lang": "en", "matched_by": "fts", "pos": [], "senses": [{"kind": "def", "pos": [], "zh": "向某人问候,和某人打招唿"}]}, {"entry_id": 613370, "extra": {"source": "ecdict"}, "freq": 0.0, "headword": "say\"hello\"to", "lang": "en", "matched_by": "fts", "pos": [], "senses": [{"kind": "def", "pos": [], "zh": "向…问好"}]}, {"entry_id": 767417, "extra": {"source": "ecdict"}, "freq": 0.0, "headword": "you had me at hello", "lang": "en", "matched_by": "fts", "pos": [], "senses": []}, {"entry_id": 319162, "extra": {"source": "ecdict"}, "freq": 0.0, "headword": "hellos", "ipa": {"uk": "heˈləuz", "us": ""}, "lang": "en", "matched_by": "prefix", "pos": [], "senses": [{"en": "n. an expression of greeting", "kind": "def", "pos": ["n"], "zh": "喂( hello的复数形式 )"}]}, {"entry_id": 319163, "extra": {"source": "ecdict"}, "freq": 0.0, "headword": "hellow", "lang": "en", "matched_by": "prefix", "pos": [], "senses": [{"kind": "def", "pos": [], "zh": "interj. (通常的招呼语)嗨, (打电话用)喂!, (英)(表示惊讶)哎哟"}]}]}, "bonjour|fr": {"items": [{"entry_id": 5249, "extra": {"refined": true, "source": "lexique"}, "freq": 0.551309, "gender": "m", "headword": "bonjour", "ipa": "bɔ̃ʒuʁ", "lang": "fr", "matched_by": "exact", "pos": ["n"], "senses": [{"fr": "bonjour (à toi)", "kind": "phrase", "tags": ["CFDICT"], "zh": "n.m. 你好，日安（白天问候语）"}, {"fr": "bonjour", "kind": "phrase", "tags": ["CFDICT"], "zh": "n.m. 早上好，早安"}, {"fr": "bonjour (respectueux : 2e personne du pluriel)", "kind": "phrase", "tags": ["CFDICT"], "zh": "您好"}]}, {"entry_id": 92003, "extra": {"source": "ecdict"}, "freq": 0.217012, "headword": "Bonjour", "ipa": {"uk": "bɔnzhur", "us": ""}, "lang": "en", "matched_by": "exact", "pos": [], "senses": [{"kind": "def", "pos": ["n"], "zh": "（法）你好；苹果电脑公司的服务器搜索协议商标名"}]}, {"entry_id": 51869, "extra": {"kind": "phrase", "source": "wiktionary"}, "freq": 0.0, "headword": "simple comme bonjour", "ipa": "sɛ̃.plə kɔm bɔ̃.ʒuʁ", "lang": "fr", "matched_by": "fts", "pos": ["adj"], "senses": [{"fr": "Très facile, évident, qui coule de source.", "tags": ["Wiktionary"], "zh": null}]}, {"entry_id": 87843, "extra": {"kind": "phrase", "source": "wiktionary"}, "freq": 0.0, "headword": "bien le bonjour", "ipa": "bjɛ̃ lə bɔ̃.ʒuʁ", "lang": "fr", "matched_by": "fts", "pos": ["int"], "senses": [{"fr": "Bonjour.", "tags": ["Wiktionary"], "zh": null}]}, {"entry_id": 122729, "extra": {"kind": "phrase", "source": "wiktionary"}, "freq": 0.0, "headword": "vol au bonjour", "ipa": "vɔ.l‿o bɔ̃.ʒuʁ", "lang": "fr", "matched_by": "fts", "pos": ["n"], "senses": [{"fr": "Vol qui se pratique en s'introduisant sans effraction dans un lieu pendant l'absence des occupants et, au cas où quelqu'un se présenterait inopinément, en saluant et en prétextant chercher quelqu'un d'autre.", "tags": ["Wiktionary"], "zh": null}]}, {"entry_id": 133354, "extra": {"kind": "phrase", "source": "wiktionary"}, "freq": 0.0, "headword": "bonjour les dégâts", "ipa": "bɔ̃.ʒuʁ le de.ɡa", "lang": "fr", "matched_by": "fts", "pos": ["loc"], "senses": [{"fr": "Exclamation annonçant un problème, une catastrophe.", "tags": ["Wiktionary"], "zh": null}]}, {"entry_id": 139282, "extra": {"kind": "phrase", "source": "wiktionary"}, "freq": 0.0, "headword": "passer le bonjour", "ipa": "pa.se lə bɔ̃.ʒuʁ", "lang": "fr", "matched_by": "fts", "pos": ["v"], "senses": [{"fr": "Transmettre les salutations de quelqu’un.", "tags": ["Wiktionary"], "zh": null}]}, {"entry_id": 144704, "extra": {"kind": "phrase", "source": "wiktionary"}, "freq": 0.0, "headword": "souhaiter le bonjour", "ipa": "swɛ.te lə bɔ̃.ʒuʁ", "lang": "fr", "matched_by": "fts", "pos": ["v"], "senses": [{"fr": "Saluer quelqu’un.", "tags": ["Wiktionary"], "zh": null}, {"fr": "Se signaler à l'attention de quelqu'un de façon menaçante.", "tags": ["Wiktionary"], "zh": null}]}, {"entry_id": 63511, "extra": {"kind": "phrase", "source": "wiktionary"}, "freq": 0.0, "headword": "bonjour lunettes, adieu quiquette", "ipa": "bɔ̃.ʒuʁ ly.nɛ.t‿a.djø ki.kɛt", "lang": "fr", "matched_by": "fts", "pos": ["loc"], "senses": [{"fr": "Quand vient la vieillesse, symbolisée par la nécessité de porter des lunettes de vue, il faut renoncer aux amourettes.", "tags": ["Wiktionary"], "zh": null}]}, {"entry_id": 67930, "extra": {"kind": "phrase", "source": "wiktionary"}, "freq": 0.0, "headword": "bonjour lunettes, adieu fillettes", "ipa": "bɔ̃.ʒuʁ ly.nɛ.t‿a.djø fi.jɛt", "lang": "fr", "matched_by": "fts", "pos": ["loc"], "senses": [{"fr": "Quand vient la vieillesse, symbolisée par la nécessité de porter des lunettes de vue, il faut renoncer aux amourettes.", "tags": ["Wiktionary"], "zh": null}]}, {"entry_id": 83035, "extra": {"kind": "phrase", "refined": true, "source": "wiktionary"}, "freq": 0.0, "headword": "bonjour hi", "ipa": "bɔ̃.ʒuʁ haj", "lang": "fr", "matched_by": "fts", "pos": ["int"], "senses": [{"fr": "Bonjour (souvent prononcé dans les magasins).", "tags": ["Wiktionary"], "zh": "int. 你好（多用于商店等场合的问候语，法语与英语混合）"}]}, {"entry_id": 97397, "extra": {"kind": "phrase", "source": "wiktionary"}, "freq": 0.0, "headword": "t’as le bonjour d’Alfred", "ipa": "t‿a l(ə) bɔ̃.ʒuʁ d‿al.fʁɛd", "lang": "fr", "matched_by": "fts", "pos": ["loc"], "senses": [{"fr": "Se dit à quelqu'un à qui on vient de donner une leçon.", "tags": ["Wiktionary"], "zh": null}]}, {"entry_id": 114668, "extra": {"kind": "phrase", "refined": true, "source": "wiktionary"}, "freq": 0.0, "headword": "goeiedag bonjour", "ipa": "ʝu.jə(n).ˈdɑç bɔ̃.ʒuʁ", "lang": "fr", "matched_by": "fts", "pos": ["int"], "senses": [{"fr": "Bonjour (parfois prononcé dans les magasins).", "tags": ["Wiktionary"], "zh": "int. 你好（问候语，有时在商店中使用）"}]}, {"entry_id": 123179, "extra": {"kind": "phrase", "refined": true, "source": "wiktionary"}, "freq": 0.0, "headword": "bonjour philippine", "ipa": "bɔ̃.ʒuʁ fi.li.pin", "lang": "fr", "matched_by": "fts", "pos": ["loc"], "senses": [{"fr": "(Jeux) Phrase qu’il faut être le premier à prononcer quand on rencontre quelqu’un avec qui on a partagé la veille une amande double.", "tags": ["Wiktionary"], "zh": "loc. （游戏用语）当遇到前一天与自己同吃“双仁杏仁”的人时，抢先说出的一句话"}]}]}, "食べる|ja": {"items": [{"entry_id": 11338, "extra": {"kanji": [{"ch": "食", "grade": 2, "kun": [], "meanings": [], "on": [], "strokes": 9}], "refined": true, "source": "jmdict"}, "freq": 1.0, "headword": "食べる", "lang": "ja", "matched_by": "exact", "pos": ["v1", "vt"], "reading": "たべる", "senses": [{"en": "to eat", "fr": "manger", "pos": ["v1", "vt"], "zh": "v. /vt. 吃"}, {"en": "to live on (e.g. a salary)；to live off；to subsist on", "pos": ["v1", "vt"], "zh": "v. /vt. 靠……生活"}]}]}, "слово|ru": {"items": [{"entry_id": 499, "extra": {"model": "glm-5.3-flash", "source": "llm"}, "freq": 100.0, "headword": "слово", "lang": "ru", "matched_by": "exact", "pos": ["n."], "senses": [{"pos": ["n."], "zh": "词，单词（复数）"}, {"pos": ["n."], "zh": "话，言语"}]}, {"entry_id": 1313, "extra": {"model": "glm-5.3-flash", "source": "llm"}, "freq": 100.0, "headword": "слово", "lang": "ru", "matched_by": "exact", "pos": ["n."], "senses": [{"pos": ["n."], "zh": "词，词语（слово复数二格）"}]}, {"entry_id": 2663, "extra": {"model": "glm-5.3-flash", "source": "llm"}, "freq": 100.0, "headword": "слово", "lang": "ru", "matched_by": "exact", "pos": ["n."], "senses": [{"pos": ["n."], "zh": "词、话语（слово的复数第五格）"}]}, {"entry_id": 3343, "extra": {"model": "glm-5.3-flash", "source": "llm"}, "freq": 100.0, "headword": "слово", "lang": "ru", "matched_by": "exact", "pos": ["n."], "senses": [{"pos": ["n."], "zh": "词；话语（复数第三格）"}, {"pos": ["n."], "zh": "по словам…：据……说"}]}, {"entry_id": 567, "extra": {"model": "glm-5.3-flash", "source": "llm"}, "freq": 20.0, "headword": "слово", "lang": "ru", "matched_by": "exact", "pos": ["n."], "senses": [{"pos": ["n."], "zh": "词，单词"}, {"pos": ["n."], "zh": "话，言语"}]}]}}, "SETTINGS": {"languages": [{"code": "en", "name": "英语", "short": "英"}, {"code": "fr", "name": "法语", "short": "法"}, {"code": "ja", "name": "日语", "short": "日"}, {"code": "ru", "name": "俄语", "short": "俄"}, {"code": "es", "name": "西班牙语", "short": "西"}], "manifest_url": "", "providers": [{"id": "demo-glm", "name": "GLM 演示", "protocol": "anthropic", "base_url": "https://open.bigmodel.cn/api/anthropic", "models": ["glm-5.3-flash", "glm-5.3"], "active_model": "glm-5.3-flash", "labels": {"glm-5.3-flash": "5.3-flash"}, "has_key": false}]}, "STATIC": {"/api/articles": {"articles": []}, "/api/packs": {"packs": [{"built_at": "2026-09-20T03:52:48+00:00", "entry_count": 770611, "file_name": "podic-en-0.1.0.db", "lang": "en", "pack_id": "podic-en", "sources": [{"license": "MIT", "name": "ECDICT", "url": "https://github.com/skywind3000/ECDICT"}, {"license": "CC BY-SA 4.0", "name": "CC-CEDICT", "url": "https://www.mdbg.net/chinese-dictionary/page/cedict"}], "version": "0.1.0"}, {"built_at": "2026-10-09T21:08:27+00:00", "entry_count": 146990, "file_name": "podic-fr-0.1.3.db", "lang": "fr", "pack_id": "podic-fr", "sources": [{"license": "CC BY 4.0", "name": "Lexique383", "url": "http://www.lexique.org"}, {"license": "CC BY-SA 3.0", "name": "CFDICT", "url": "https://chine.in/cfdict.php"}, {"license": "CC BY-SA 3.0", "name": "French Wiktionary (wiktextract)", "url": "https://kaikki.org/dictionary/French"}, {"license": "CC BY 2.0 FR", "name": "Tatoeba", "url": "https://tatoeba.org"}], "version": "0.1.3"}, {"built_at": "2026-10-09T08:00:11+00:00", "entry_count": 22640, "file_name": "podic-ja-0.1.1.db", "lang": "ja", "pack_id": "podic-ja", "sources": [{"license": "CC BY-SA 4.0", "name": "JMdict/EDRDG", "url": "https://www.edrdg.org/jmdict/j_jmdict.html"}, {"license": "CC BY-SA 4.0", "name": "KANJIDIC2", "url": "https://www.edrdg.org/kanjidic/kanjidic.html"}], "version": "0.1.1"}, {"built_at": "2026-10-10T05:13:31+00:00", "entry_count": 5000, "file_name": "community-ru-0.2.2.db", "lang": "ru", "pack_id": "community-ru", "sources": [{"license": "", "name": "llm-glm-5.3-flash", "url": ""}], "version": "0.2.2"}]}, "/api/favorites": {"items": [{"created_at": "2026-10-09 17:45:52", "headword": "привет", "id": 6, "lang": "ru", "norm": "привет", "note": null, "snapshot": "{\"senses\":[{\"pos\":[\"int.\"],\"zh\":\"你好；嗨（非正式问候语）\"},{\"pos\":[\"n.\"],\"zh\":\"问候；致意\"}]}"}, {"created_at": "2026-09-20 04:40:36", "headword": "Bonjour", "id": 5, "lang": "en", "norm": "Bonjour", "note": null, "snapshot": "{\"ipa\":{\"uk\":\"bɔnzhur\",\"us\":\"\"},\"senses\":[{\"kind\":\"def\",\"pos\":[\"n\"],\"zh\":\"（法）你好；苹果电脑公司的服务器搜索协议商标名\"}]}"}, {"created_at": "2026-09-19 17:57:41", "headword": "éleveur", "id": 3, "lang": "fr", "norm": "éleveur", "note": null, "snapshot": "{\"ipa\":\"ɛləvœʁ\",\"senses\":[{\"fr\":\"éleveur\",\"kind\":\"phrase\",\"tags\":[\"CFDICT\"],\"zh\":\"n. 饲养员，养殖者\"}]}"}]}, "/api/attributions": {"sources": [{"license": "CC BY-SA 4.0", "name": "CC-CEDICT", "url": "https://www.mdbg.net/chinese-dictionary/page/cedict"}, {"license": "CC BY-SA 3.0", "name": "CFDICT", "url": "https://chine.in/cfdict.php"}, {"license": "MIT", "name": "ECDICT", "url": "https://github.com/skywind3000/ECDICT"}, {"license": "CC BY-SA 3.0", "name": "French Wiktionary (wiktextract)", "url": "https://kaikki.org/dictionary/French"}, {"license": "CC BY-SA 4.0", "name": "JMdict/EDRDG", "url": "https://www.edrdg.org/jmdict/j_jmdict.html"}, {"license": "CC BY-SA 4.0", "name": "KANJIDIC2", "url": "https://www.edrdg.org/kanjidic/kanjidic.html"}, {"license": "CC BY 4.0", "name": "Lexique383", "url": "http://www.lexique.org"}, {"license": "CC BY 2.0 FR", "name": "Tatoeba", "url": "https://tatoeba.org"}, {"license": "", "name": "llm-glm-5.3-flash", "url": ""}]}, "/api/user-dict": {"entries": [{"cache_key": "060e7f9653cfb90eab59a7465898404e595902bfc1c9a9a0d7fc233714a597e6", "created_at": "2026-10-10 06:46:05", "headword": "Zelensky", "id": 16, "lang": "ru", "model": "glm-5.3-flash", "norm": "zelensky", "pos": "[\"n.\"]", "reading": "Зеленский", "senses": "[{\"pos\":[\"n.\"],\"zh\":\"泽连斯基（乌克兰总统，姓氏）\"}]", "source": "ai"}, {"cache_key": "bbf56d22d633d0f8edf33d6a886f6a8e06a75375492ce038ad1554d3e43089a1", "created_at": "2026-10-10 06:45:30", "headword": "Владимир", "id": 15, "lang": "ru", "model": "glm-5.3-flash", "norm": "владимир", "pos": "[\"n.\"]", "reading": "vladimir", "senses": "[{\"pos\":[\"n.\"],\"zh\":\"弗拉基米尔（俄罗斯男子名；亦为俄罗斯城市名）\"}]", "source": "ai"}, {"cache_key": "2d41b2b746908b3ff2fca5764bbc0b556868f2e69a53213aef37daaa76d02081", "created_at": "2026-10-10 06:45:18", "headword": "Путин", "id": 14, "lang": "ru", "model": "glm-5.3-flash", "norm": "путин", "pos": "[\"n.\"]", "reading": "ˈputʲɪn", "senses": "[{\"pos\":[\"n.\"],\"zh\":\"普京（俄罗斯姓氏；常指弗拉基米尔·普京，俄罗斯政治人物）\"}]", "source": "ai"}, {"cache_key": "07ed8a9c1f3d9355741957fdb4ac8eeafc79e9a644ddc189741b880feac0aad2", "created_at": "2026-10-10 06:44:59", "headword": "Трамп", "id": 13, "lang": "ru", "model": "glm-5.3-flash", "norm": "трамп", "pos": "[\"n.\"]", "reading": "Трамп", "senses": "[{\"pos\":[\"n.\"],\"zh\":\"特朗普（美国政治家、商人，美国第45、47任总统）\"}]", "source": "ai"}, {"cache_key": "eab6f975f9fadebfbd10cc3d5723681aaf6e3eaea9325b224c64fd1e7cff3e14", "created_at": "2026-10-10 06:44:17", "headword": "день", "id": 12, "lang": "ru", "model": "glm-5.3-flash", "norm": "день", "pos": "[\"n.\"]", "reading": "denʹ", "senses": "[{\"pos\":[\"n.\"],\"zh\":\"天，日\"},{\"pos\":[\"n.\"],\"zh\":\"白天，白昼\"},{\"pos\":[\"n.\"],\"zh\":\"（某）日，节日，日子\"}]", "source": "ai"}, {"cache_key": "6c7f40f5b8c5b720b4994200603561b327a254499c60f2a3ceefdeee49864257", "created_at": "2026-10-10 06:43:19", "headword": "добрый", "id": 11, "lang": "ru", "model": "glm-5.3-flash", "norm": "добрый", "pos": "[\"adj.\"]", "reading": "dóbrīj", "senses": "[{\"pos\":[\"adj.\"],\"zh\":\"善良的，仁慈的，好心的\"},{\"pos\":[\"adj.\"],\"zh\":\"（质量等）良好的，优质的\"},{\"pos\":[\"adj.\"],\"zh\":\"（指数量）整整的，足足的（如 добрых два часа 整整两个小时）\"}]", "source": "ai"}, {"cache_key": "5692d53d1e740a9e43a37ae258da4b223dc32796ba621f9c8b60b0e8028627fd", "created_at": "2026-10-09 17:48:35", "headword": "spacibo", "id": 8, "lang": "fr", "model": "glm-5.3-flash", "norm": "spacibo", "pos": "[\"interj.\"]", "reading": "spasibo", "senses": "[{\"pos\":[\"interj.\"],\"zh\":\"谢谢（源自俄语 спасибо 的音译，用于口语表达感谢）\"}]", "source": "ai"}, {"cache_key": "7de86dd52cb389bc7fd83845940d7f2f54a47e1ea12ae8e4c964a9a091d5921a", "created_at": "2026-10-09 17:48:33", "headword": "spacibo", "id": 7, "lang": "en", "model": "glm-5.3-flash", "norm": "spacibo", "pos": "[\"interj.\"]", "reading": null, "senses": "[{\"pos\":[\"interj.\"],\"zh\":\"（源自俄语 спасибо 的音借词）谢谢，多谢\"}]", "source": "ai"}, {"cache_key": "3f217c61e14ec008af9d0b2b9f1b160d984f364fe4830180e1001ce80da88c9e", "created_at": "2026-10-09 17:48:11", "headword": "спасибо", "id": 6, "lang": "ru", "model": "glm-5.3-flash", "norm": "спасибо", "pos": "[\"interj.\"]", "reading": "spasibo", "senses": "[{\"pos\":[\"interj.\"],\"zh\":\"谢谢；多谢（表达感谢的感叹词）\"}]", "source": "ai"}, {"cache_key": "e38aea2732c645e2bd1e72e98495e011d8e5014252f0de6ac5a5c92251a5eca9", "created_at": "2026-10-09 17:47:26", "headword": "zdrastveche", "id": 5, "lang": "fr", "model": "glm-5.3-flash", "norm": "zdrastveche", "pos": "[\"interj.\"]", "reading": null, "senses": "[{\"pos\":[\"interj.\"],\"zh\":\"你好（法语音译，源自俄语 здравствуйте 的问候语）\"}]", "source": "ai"}, {"cache_key": "0cc8718be8ac59ea2a81083826522a5085efb151ea6c2dc3916eafdfd1316ac1", "created_at": "2026-10-09 17:46:55", "headword": "здравствуйте", "id": 3, "lang": "ru", "model": "glm-5.3-flash", "norm": "здравствуйте", "pos": "[\"int.\"]", "reading": "zdrastvuytye", "senses": "[{\"pos\":[\"int.\"],\"zh\":\"您好（俄语正式问候语）\"}]", "source": "ai"}, {"cache_key": "57c6480abdb88f718fb5baff1016ea51f2a2bfc6bf42cda9bffee0ac13b012d8", "created_at": "2026-10-09 17:45:45", "headword": "привет", "id": 1, "lang": "ru", "model": "glm-5.3-flash", "norm": "привет", "pos": "[\"int.\"]", "reading": "privet", "senses": "[{\"pos\":[\"int.\"],\"zh\":\"你好；喂（俄语非正式问候语）\"}]", "source": "ai"}]}, "/api/word-status": null}};
const SUGGEST_POOL = [
  {q:"hello",lang:"en"},{q:"hel",lang:"en"},{q:"hi",lang:"en"},
  {q:"bonjour",lang:"fr"},{q:"bon",lang:"fr"},
  {q:"食べる",lang:"ja"},{q:"たべる",lang:"ja"},
  {q:"слово",lang:"ru"},
];
const AI_FALLBACK_ENTRY = {"headword":"saudade","ipa":"/saʊˈdadʒi/","pos":["n."],"lang":"pt","zh":["（葡）怀念；乡愁——一种因缺失而生的温柔眷恋"],"senses":[{"pos":"n.","zh":"（葡）怀念；乡愁（对缺失之人或物混合着爱意与惆怅的思念）","eg":"Tenho saudade de você.","eg_zh":"我很想你。"}],"source":"ai"};
function jsonRes(obj, status){
  return new Response(JSON.stringify(obj), {status: status||200, headers:{"Content-Type":"application/json"}});
}
function sseRes(events, chunkDelay){
  // SSE 流模拟：ReadableStream 按块吐 data: 行
  const enc = new TextEncoder();
  let i = 0;
  const stream = new ReadableStream({
    async pull(ctrl){
      if (i >= events.length) { ctrl.close(); return; }
      const ev = events[i++];
      ctrl.enqueue(enc.encode("data: " + JSON.stringify(ev) + "\n\n"));
      await new Promise(r => setTimeout(r, chunkDelay || 60));
    }
  });
  return new Response(stream, {headers:{"Content-Type":"text/event-stream"}});
}
function streamText(text, chunk){
  const parts = [];
  for (let i = 0; i < text.length; i += chunk) parts.push(text.slice(i, i + chunk));
  const events = [{type:"start", task_id:"demo-task"}];
  parts.forEach(p => events.push({type:"delta", text:p}));
  events.push({type:"done", cache_key:"demo-cache"});
  return events;
}
const origFetch = window.fetch;
window.fetch = async function(url, opts){
  let u;
  try { u = new URL(url, location.href); } catch(e) { return origFetch.apply(this, arguments); }
  const path = u.pathname, q = u.searchParams, method = (opts && opts.method) || "GET";

  if (!path.startsWith("/api/")) return origFetch.apply(this, arguments);
  window.__mockLog = window.__mockLog || [];
  window.__mockLog.push(method + " " + path + "?" + u.search.slice(1));

  // ---- 词查询 / 联想 ----
  if (path === "/api/lookup") {
    // 前端参数是 langs（复数，可多语言）；兼容 lang
    const lang = q.get("langs") || q.get("lang") || "en";
    const key = (q.get("q") || "") + "|" + lang;
    const hit = MOCK.LOOKUP[key];
    // saudade 故意 miss：演示 AI 补全路径
    return jsonRes(hit || {"items": [], "user": [], "matched_by": null});
  }
  if (path === "/api/suggest") {
    const word = (q.get("q") || "").toLowerCase(), lang = q.get("lang") || "en";
    const pool = SUGGEST_POOL.filter(s => !s.lang || s.lang === lang)
      .filter(s => s.q.toLowerCase().startsWith(word));
    return jsonRes({"items": pool.slice(0, 8).map(s => ({headword: s.q, lang: s.lang}))});
  }
  if (path === "/api/settings") return jsonRes(MOCK.SETTINGS);
  if (path === "/api/settings/test-provider") return jsonRes({"ok": true, "latency_ms": 128});
  if (path === "/api/examples") {
    // 例句：hello 配两条演示，其余词条空（前端 r.items 直接用，不能缺字段）
    const id = q.get("id");
    const hello = MOCK.LOOKUP["hello|en"];
    if (hello && hello.items[0] && String(hello.items[0].entry_id) === id) {
      return jsonRes({items: [
        {id: 1, text: "Hello! How are you today?", translation: ["你好！你今天怎么样？"]},
        {id: 2, text: "She said hello with a warm smile.", translation: ["她带着温暖的微笑打了个招呼。"]},
      ]});
    }
    return jsonRes({items: []});
  }
  if (path === "/api/word-status") return jsonRes({statuses: {}});

  // ---- AI：SSE 流（讲解/例句/翻译/AI 补全） ----
  if (path === "/api/ai/run" && method === "POST") {
    const body = JSON.parse((opts && opts.body) || "{}");
    const t = body.task, text = body.text || "";
    if (t === "translate") {
      // 前端 text 是完整 prompt（含"翻译成…："前缀），按内容特征给真译文
      const zh = text.includes("dictionary") ? "人生就像读一本词典：一词一句，慢慢消化。"
        : text.includes("舟") ? "Words as a boat, crossing the river of languages."
        : "（演示）这是一段流式输出的演示译文，实际效果由你配置的 AI 提供。";
      return sseRes(streamText(zh, 2), 45);
    }
    if (t === "fallback" || t === "complete") {
      // 补全完成后写入词表（模拟真 app：AI 词条存 AI 词典，下次查询直接命中）
      const lang = (body.context && body.context.lang) || "en";
      const e = AI_FALLBACK_ENTRY;
      MOCK.LOOKUP[(body.text||"") + "|" + lang] = {
        items: [{entry_id: -1, headword: e.headword, ipa: e.ipa, pos: e.pos, lang: lang,
                 matched_by: "user", freq: 0,
                 senses: e.senses.map(s => ({kind:"def", pos:s.pos, zh:s.zh, eg:s.eg, eg_zh:s.eg_zh}))}],
        user: [], matched_by: "user"
      };
      return sseRes(streamText(JSON.stringify(e), 12), 70);
    }
    if (t === "explain") {
      const out = "「saudade」是葡语中近乎不可译的词：对离去之人或逝去之物的思念，混合着曾经拥有的温存与明知不可复得的怅惘。巴西音乐 saudade 之声（bossa nova）常以它为魂。\n\n· 词源：saudar（致敬）的派生，与拉丁语 solitas（孤独）同源\n· 近义：nostalgia（乡愁）、melancolia（忧郁）、anhelo（渴望）";
      return sseRes(streamText(out, 3), 50);
    }
    if (t === "examples") {
      const out = "1. A saudade é o amor que fica. 思念是留下来的爱。\n2. Sinto saudade do mar da minha terra. 我怀念故乡的海。";
      return sseRes(streamText(out, 4), 60);
    }
    return sseRes(streamText("（演示）", 3), 60);
  }
  if (path === "/api/ai/cancel") return jsonRes({"ok": true});

  // ---- 写操作：demo 只读，统一打回友好结果 ----
  if (method === "POST" || method === "PUT" || method === "DELETE") {
    return jsonRes({"ok": true, "demo": true});
  }
  if (MOCK.STATIC[path] !== undefined && MOCK.STATIC[path] !== null) return jsonRes(MOCK.STATIC[path]);
  return jsonRes({});
};
// mock 标记（landing 可检测）
window.__podicMock = true;
