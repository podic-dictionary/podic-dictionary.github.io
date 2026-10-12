// podic 官网 demo mock：真前端 + 预置数据（由 scripts/pages-mock-gen.py 生成，勿手改）
// 覆盖 fetch：/api/* 全部本地应答，不发网络请求
const MOCK = {"LOOKUP": {"hello|en": {"items": [{"entry_id": 319158, "extra": {"collins": 3, "oxford": 1, "source": "ecdict", "tags": ["zk", "gk"]}, "freq": 0.298347, "headword": "hello", "ipa": {"uk": "hә'lәu", "us": ""}, "lang": "en", "matched_by": "exact", "pos": [], "senses": [{"en": "n. an expression of greeting", "kind": "def", "pos": [], "zh": "interj. 喂, 嘿"}, {"en": "hello", "kind": "phrase", "tags": ["CEDICT"], "zh": "你好"}, {"en": "Hello", "kind": "phrase", "tags": ["CEDICT"], "zh": "午安"}, {"en": "hello", "kind": "phrase", "tags": ["CEDICT"], "zh": "哈喽"}, {"en": "hello", "kind": "phrase", "tags": ["CEDICT"], "zh": "哈啰"}, {"en": "hello", "kind": "phrase", "tags": ["CEDICT"], "zh": "哈罗"}, {"en": "hello", "kind": "phrase", "tags": ["CEDICT"], "zh": "您好"}]}, {"entry_id": 319160, "extra": {"source": "ecdict"}, "freq": 0.0, "headword": "hello program", "lang": "en", "matched_by": "fts", "pos": [], "senses": [{"kind": "phrase", "pos": [], "tags": ["计"], "zh": "试用程序"}]}, {"entry_id": 319161, "extra": {"source": "ecdict"}, "freq": 0.0, "headword": "hello world", "lang": "en", "matched_by": "fts", "pos": [], "senses": [{"kind": "def", "pos": [], "zh": "你好世界"}]}, {"entry_id": 299371, "extra": {"source": "ecdict"}, "freq": 0.0, "headword": "golden hello", "ipa": {"uk": "ˈɡəuldən heˈləu", "us": ""}, "lang": "en", "matched_by": "fts", "pos": [], "senses": [{"kind": "def", "pos": [], "zh": "<非正>调职补偿金"}]}, {"entry_id": 319159, "extra": {"source": "ecdict"}, "freq": 0.0, "headword": "hello girl", "ipa": {"uk": "heˈləu ɡə:l", "us": ""}, "lang": "en", "matched_by": "fts", "pos": [], "senses": [{"kind": "def", "pos": [], "zh": "女话务员; 女电话接线员"}]}, {"entry_id": 333743, "extra": {"source": "ecdict"}, "freq": 0.0, "headword": "hulloa", "ipa": {"uk": "hә'lәj, ,hʌ-", "us": ""}, "lang": "en", "matched_by": "fts", "pos": [], "senses": [{"kind": "def", "pos": ["int"], "zh": ", n., v.<主英> = hello"}]}, {"entry_id": 613347, "extra": {"source": "ecdict"}, "freq": 0.0, "headword": "say hello to", "lang": "en", "matched_by": "fts", "pos": [], "senses": [{"kind": "def", "pos": [], "zh": "向某人问候,和某人打招唿"}]}, {"entry_id": 613370, "extra": {"source": "ecdict"}, "freq": 0.0, "headword": "say\"hello\"to", "lang": "en", "matched_by": "fts", "pos": [], "senses": [{"kind": "def", "pos": [], "zh": "向…问好"}]}, {"entry_id": 767417, "extra": {"source": "ecdict"}, "freq": 0.0, "headword": "you had me at hello", "lang": "en", "matched_by": "fts", "pos": [], "senses": []}, {"entry_id": 319162, "extra": {"source": "ecdict"}, "freq": 0.0, "headword": "hellos", "ipa": {"uk": "heˈləuz", "us": ""}, "lang": "en", "matched_by": "prefix", "pos": [], "senses": [{"en": "n. an expression of greeting", "kind": "def", "pos": ["n"], "zh": "喂( hello的复数形式 )"}]}, {"entry_id": 319163, "extra": {"source": "ecdict"}, "freq": 0.0, "headword": "hellow", "lang": "en", "matched_by": "prefix", "pos": [], "senses": [{"kind": "def", "pos": [], "zh": "interj. (通常的招呼语)嗨, (打电话用)喂!, (英)(表示惊讶)哎哟"}]}]}, "bonjour|fr": {"items": [{"entry_id": 5249, "extra": {"refined": true, "source": "lexique"}, "freq": 0.551309, "gender": "m", "headword": "bonjour", "ipa": "bɔ̃ʒuʁ", "lang": "fr", "matched_by": "exact", "pos": ["n"], "senses": [{"fr": "bonjour (à toi)", "kind": "phrase", "tags": ["CFDICT"], "zh": "n.m. 你好，日安（白天问候语）"}, {"fr": "bonjour", "kind": "phrase", "tags": ["CFDICT"], "zh": "n.m. 早上好，早安"}, {"fr": "bonjour (respectueux : 2e personne du pluriel)", "kind": "phrase", "tags": ["CFDICT"], "zh": "您好"}]}, {"entry_id": 51869, "extra": {"kind": "phrase", "source": "wiktionary"}, "freq": 0.0, "headword": "simple comme bonjour", "ipa": "sɛ̃.plə kɔm bɔ̃.ʒuʁ", "lang": "fr", "matched_by": "fts", "pos": ["adj"], "senses": [{"fr": "Très facile, évident, qui coule de source.", "tags": ["Wiktionary"], "zh": null}]}, {"entry_id": 87843, "extra": {"kind": "phrase", "source": "wiktionary"}, "freq": 0.0, "headword": "bien le bonjour", "ipa": "bjɛ̃ lə bɔ̃.ʒuʁ", "lang": "fr", "matched_by": "fts", "pos": ["int"], "senses": [{"fr": "Bonjour.", "tags": ["Wiktionary"], "zh": null}]}, {"entry_id": 122729, "extra": {"kind": "phrase", "source": "wiktionary"}, "freq": 0.0, "headword": "vol au bonjour", "ipa": "vɔ.l‿o bɔ̃.ʒuʁ", "lang": "fr", "matched_by": "fts", "pos": ["n"], "senses": [{"fr": "Vol qui se pratique en s'introduisant sans effraction dans un lieu pendant l'absence des occupants et, au cas où quelqu'un se présenterait inopinément, en saluant et en prétextant chercher quelqu'un d'autre.", "tags": ["Wiktionary"], "zh": null}]}, {"entry_id": 133354, "extra": {"kind": "phrase", "source": "wiktionary"}, "freq": 0.0, "headword": "bonjour les dégâts", "ipa": "bɔ̃.ʒuʁ le de.ɡa", "lang": "fr", "matched_by": "fts", "pos": ["loc"], "senses": [{"fr": "Exclamation annonçant un problème, une catastrophe.", "tags": ["Wiktionary"], "zh": null}]}, {"entry_id": 139282, "extra": {"kind": "phrase", "source": "wiktionary"}, "freq": 0.0, "headword": "passer le bonjour", "ipa": "pa.se lə bɔ̃.ʒuʁ", "lang": "fr", "matched_by": "fts", "pos": ["v"], "senses": [{"fr": "Transmettre les salutations de quelqu’un.", "tags": ["Wiktionary"], "zh": null}]}, {"entry_id": 144704, "extra": {"kind": "phrase", "source": "wiktionary"}, "freq": 0.0, "headword": "souhaiter le bonjour", "ipa": "swɛ.te lə bɔ̃.ʒuʁ", "lang": "fr", "matched_by": "fts", "pos": ["v"], "senses": [{"fr": "Saluer quelqu’un.", "tags": ["Wiktionary"], "zh": null}, {"fr": "Se signaler à l'attention de quelqu'un de façon menaçante.", "tags": ["Wiktionary"], "zh": null}]}, {"entry_id": 63511, "extra": {"kind": "phrase", "source": "wiktionary"}, "freq": 0.0, "headword": "bonjour lunettes, adieu quiquette", "ipa": "bɔ̃.ʒuʁ ly.nɛ.t‿a.djø ki.kɛt", "lang": "fr", "matched_by": "fts", "pos": ["loc"], "senses": [{"fr": "Quand vient la vieillesse, symbolisée par la nécessité de porter des lunettes de vue, il faut renoncer aux amourettes.", "tags": ["Wiktionary"], "zh": null}]}, {"entry_id": 67930, "extra": {"kind": "phrase", "source": "wiktionary"}, "freq": 0.0, "headword": "bonjour lunettes, adieu fillettes", "ipa": "bɔ̃.ʒuʁ ly.nɛ.t‿a.djø fi.jɛt", "lang": "fr", "matched_by": "fts", "pos": ["loc"], "senses": [{"fr": "Quand vient la vieillesse, symbolisée par la nécessité de porter des lunettes de vue, il faut renoncer aux amourettes.", "tags": ["Wiktionary"], "zh": null}]}, {"entry_id": 83035, "extra": {"kind": "phrase", "refined": true, "source": "wiktionary"}, "freq": 0.0, "headword": "bonjour hi", "ipa": "bɔ̃.ʒuʁ haj", "lang": "fr", "matched_by": "fts", "pos": ["int"], "senses": [{"fr": "Bonjour (souvent prononcé dans les magasins).", "tags": ["Wiktionary"], "zh": "int. 你好（多用于商店等场合的问候语，法语与英语混合）"}]}, {"entry_id": 97397, "extra": {"kind": "phrase", "source": "wiktionary"}, "freq": 0.0, "headword": "t’as le bonjour d’Alfred", "ipa": "t‿a l(ə) bɔ̃.ʒuʁ d‿al.fʁɛd", "lang": "fr", "matched_by": "fts", "pos": ["loc"], "senses": [{"fr": "Se dit à quelqu'un à qui on vient de donner une leçon.", "tags": ["Wiktionary"], "zh": null}]}, {"entry_id": 114668, "extra": {"kind": "phrase", "refined": true, "source": "wiktionary"}, "freq": 0.0, "headword": "goeiedag bonjour", "ipa": "ʝu.jə(n).ˈdɑç bɔ̃.ʒuʁ", "lang": "fr", "matched_by": "fts", "pos": ["int"], "senses": [{"fr": "Bonjour (parfois prononcé dans les magasins).", "tags": ["Wiktionary"], "zh": "int. 你好（问候语，有时在商店中使用）"}]}, {"entry_id": 123179, "extra": {"kind": "phrase", "refined": true, "source": "wiktionary"}, "freq": 0.0, "headword": "bonjour philippine", "ipa": "bɔ̃.ʒuʁ fi.li.pin", "lang": "fr", "matched_by": "fts", "pos": ["loc"], "senses": [{"fr": "(Jeux) Phrase qu’il faut être le premier à prononcer quand on rencontre quelqu’un avec qui on a partagé la veille une amande double.", "tags": ["Wiktionary"], "zh": "loc. （游戏用语）当遇到前一天与自己同吃“双仁杏仁”的人时，抢先说出的一句话"}]}]}, "食べる|ja": {"items": [{"entry_id": 11338, "extra": {"kanji": [{"ch": "食", "grade": 2, "kun": [], "meanings": [], "on": [], "strokes": 9}], "refined": true, "source": "jmdict"}, "freq": 1.0, "headword": "食べる", "lang": "ja", "matched_by": "exact", "pos": ["v1", "vt"], "reading": "たべる", "senses": [{"en": "to eat", "fr": "manger", "pos": ["v1", "vt"], "zh": "v. /vt. 吃"}, {"en": "to live on (e.g. a salary)；to live off；to subsist on", "pos": ["v1", "vt"], "zh": "v. /vt. 靠……生活"}]}]}, "слово|ru": {"items": [{"entry_id": 314, "extra": {"model": "glm-5.3-flash", "source": "llm"}, "freq": 0.7, "headword": "слово", "lang": "ru", "matched_by": "exact", "pos": ["n."], "senses": [{"pos": ["n."], "zh": "词，单词（复数）"}, {"pos": ["n."], "zh": "话，言语"}]}]}, "saudade|pt": {"items": [{"entry_id": 865, "extra": {"model": "glm-5.3-flash", "source": "llm"}, "freq": 0.2, "headword": "saudade", "lang": "pt", "matched_by": "exact", "pos": ["n."], "senses": [{"pos": ["n."], "zh": "思念，怀念，惆怅"}]}]}}, "SETTINGS": {"languages": [{"code": "en", "name": "英语", "short": "英"}, {"code": "fr", "name": "法语", "short": "法"}, {"code": "ja", "name": "日语", "short": "日"}, {"code": "de", "name": "德语", "short": "德"}, {"code": "es", "name": "西班牙语", "short": "西"}, {"code": "ru", "name": "俄语", "short": "俄"}, {"code": "it", "name": "意大利语", "short": "意"}, {"code": "pt", "name": "葡萄牙语", "short": "葡"}], "manifest_url": "", "providers": [{"id": "demo-glm", "name": "GLM 演示", "protocol": "anthropic", "base_url": "https://open.bigmodel.cn/api/anthropic", "models": ["glm-5.3-flash", "glm-5.3"], "active_model": "glm-5.3-flash", "labels": {"glm-5.3-flash": "5.3-flash"}, "has_key": false}]}, "STATIC": {"/api/articles": {"articles": []}, "/api/packs": {"packs": [{"built_at": "2026-10-12T03:02:52+00:00", "entry_count": 33571, "file_name": "de-dict-0.1.1.db", "lang": "de", "pack_id": "de-dict", "sources": [{"license": "MIT", "name": "FrequencyWords (OpenSubtitles 2018)", "url": "https://github.com/hermitdave/FrequencyWords"}, {"license": "AI 生成内容", "name": "GLM 生成释义（未经人工校验）", "url": "https://open.bigmodel.cn"}, {"license": "CC BY 2.0 FR", "name": "Tatoeba", "url": "https://tatoeba.org"}], "version": "0.1.1"}, {"built_at": "2026-10-10T08:11:00+00:00", "entry_count": 770611, "file_name": "en-dict-0.1.1.db", "lang": "en", "pack_id": "en-dict", "sources": [{"license": "MIT", "name": "ECDICT", "url": "https://github.com/skywind3000/ECDICT"}], "version": "0.1.1"}, {"built_at": "2026-10-12T03:02:54+00:00", "entry_count": 26171, "file_name": "es-dict-0.1.1.db", "lang": "es", "pack_id": "es-dict", "sources": [{"license": "MIT", "name": "FrequencyWords (OpenSubtitles 2018)", "url": "https://github.com/hermitdave/FrequencyWords"}, {"license": "AI 生成内容", "name": "GLM 生成释义（未经人工校验）", "url": "https://open.bigmodel.cn"}, {"license": "CC BY 2.0 FR", "name": "Tatoeba", "url": "https://tatoeba.org"}], "version": "0.1.1"}, {"built_at": "2026-10-09T21:08:27+00:00", "entry_count": 146990, "file_name": "podic-fr-0.1.3.db", "lang": "fr", "pack_id": "podic-fr", "sources": [{"license": "CC BY 4.0", "name": "Lexique383", "url": "http://www.lexique.org"}, {"license": "CC BY-SA 3.0", "name": "CFDICT", "url": "https://chine.in/cfdict.php"}, {"license": "CC BY-SA 3.0", "name": "French Wiktionary (wiktextract)", "url": "https://kaikki.org/dictionary/French"}, {"license": "CC BY 2.0 FR", "name": "Tatoeba", "url": "https://tatoeba.org"}], "version": "0.1.3"}, {"built_at": "2026-10-12T03:02:55+00:00", "entry_count": 29194, "file_name": "it-dict-0.1.1.db", "lang": "it", "pack_id": "it-dict", "sources": [{"license": "MIT", "name": "FrequencyWords (OpenSubtitles 2018)", "url": "https://github.com/hermitdave/FrequencyWords"}, {"license": "AI 生成内容", "name": "GLM 生成释义（未经人工校验）", "url": "https://open.bigmodel.cn"}, {"license": "CC BY 2.0 FR", "name": "Tatoeba", "url": "https://tatoeba.org"}], "version": "0.1.1"}, {"built_at": "2026-10-09T08:00:11+00:00", "entry_count": 22640, "file_name": "podic-ja-0.1.1.db", "lang": "ja", "pack_id": "podic-ja", "sources": [{"license": "CC BY-SA 4.0", "name": "JMdict/EDRDG", "url": "https://www.edrdg.org/jmdict/j_jmdict.html"}, {"license": "CC BY-SA 4.0", "name": "KANJIDIC2", "url": "https://www.edrdg.org/kanjidic/kanjidic.html"}], "version": "0.1.1"}, {"built_at": "2026-10-12T03:02:57+00:00", "entry_count": 25603, "file_name": "pt-dict-0.1.1.db", "lang": "pt", "pack_id": "pt-dict", "sources": [{"license": "MIT", "name": "FrequencyWords (OpenSubtitles 2018)", "url": "https://github.com/hermitdave/FrequencyWords"}, {"license": "AI 生成内容", "name": "GLM 生成释义（未经人工校验）", "url": "https://open.bigmodel.cn"}, {"license": "CC BY 2.0 FR", "name": "Tatoeba", "url": "https://tatoeba.org"}], "version": "0.1.1"}, {"built_at": "2026-10-12T03:02:58+00:00", "entry_count": 19609, "file_name": "ru-dict-0.3.1.db", "lang": "ru", "pack_id": "ru-dict", "sources": [{"license": "MIT", "name": "FrequencyWords (OpenSubtitles 2018)", "url": "https://github.com/hermitdave/FrequencyWords"}, {"license": "AI 生成内容", "name": "GLM 生成释义（未经人工校验）", "url": "https://open.bigmodel.cn"}, {"license": "CC BY 2.0 FR", "name": "Tatoeba", "url": "https://tatoeba.org"}], "version": "0.3.1"}]}, "/api/favorites": {"items": [{"created_at": "2026-10-09 17:45:52", "headword": "привет", "id": 6, "lang": "ru", "norm": "привет", "note": null, "snapshot": "{\"senses\":[{\"pos\":[\"int.\"],\"zh\":\"你好；嗨（非正式问候语）\"},{\"pos\":[\"n.\"],\"zh\":\"问候；致意\"}]}"}, {"created_at": "2026-09-20 04:40:36", "headword": "Bonjour", "id": 5, "lang": "en", "norm": "Bonjour", "note": null, "snapshot": "{\"ipa\":{\"uk\":\"bɔnzhur\",\"us\":\"\"},\"senses\":[{\"kind\":\"def\",\"pos\":[\"n\"],\"zh\":\"（法）你好；苹果电脑公司的服务器搜索协议商标名\"}]}"}, {"created_at": "2026-09-19 17:57:41", "headword": "éleveur", "id": 3, "lang": "fr", "norm": "éleveur", "note": null, "snapshot": "{\"ipa\":\"ɛləvœʁ\",\"senses\":[{\"fr\":\"éleveur\",\"kind\":\"phrase\",\"tags\":[\"CFDICT\"],\"zh\":\"n. 饲养员，养殖者\"}]}"}]}, "/api/attributions": {"sources": [{"license": "CC BY-SA 3.0", "name": "CFDICT", "url": "https://chine.in/cfdict.php"}, {"license": "MIT", "name": "ECDICT", "url": "https://github.com/skywind3000/ECDICT"}, {"license": "CC BY-SA 3.0", "name": "French Wiktionary (wiktextract)", "url": "https://kaikki.org/dictionary/French"}, {"license": "MIT", "name": "FrequencyWords (OpenSubtitles 2018)", "url": "https://github.com/hermitdave/FrequencyWords"}, {"license": "AI 生成内容", "name": "GLM 生成释义（未经人工校验）", "url": "https://open.bigmodel.cn"}, {"license": "CC BY-SA 4.0", "name": "JMdict/EDRDG", "url": "https://www.edrdg.org/jmdict/j_jmdict.html"}, {"license": "CC BY-SA 4.0", "name": "KANJIDIC2", "url": "https://www.edrdg.org/kanjidic/kanjidic.html"}, {"license": "CC BY 4.0", "name": "Lexique383", "url": "http://www.lexique.org"}, {"license": "CC BY 2.0 FR", "name": "Tatoeba", "url": "https://tatoeba.org"}]}, "/api/user-dict": {"entries": [{"cache_key": "7de86dd52cb389bc7fd83845940d7f2f54a47e1ea12ae8e4c964a9a091d5921a", "created_at": "2026-10-09 17:48:33", "headword": "spacibo", "id": 7, "lang": "en", "model": "glm-5.3-flash", "norm": "spacibo", "pos": "[\"interj.\"]", "reading": null, "senses": "[{\"pos\":[\"interj.\"],\"zh\":\"（源自俄语 спасибо 的音借词）谢谢，多谢\"}]", "source": "ai"}]}, "/api/word-status": null}};
const SUGGEST_POOL = [
  {q:"hello",lang:"en"},{q:"hel",lang:"en"},{q:"hi",lang:"en"},
  {q:"bonjour",lang:"fr"},{q:"bon",lang:"fr"},
  {q:"食べる",lang:"ja"},{q:"たべる",lang:"ja"},
  {q:"слово",lang:"ru"},
];
const AI_FALLBACK_ENTRY = {"headword":"Sehnsucht","ipa":"/ˈzeːnˌzʊxt/","pos":["n."],"lang":"de","zh":["（德）渴望；憧憬——对远方或不可得之物的深切向往"],"senses":[{"pos":"n.","zh":"（德）渴望，憧憬（对远方、往昔或不可得之物的深情向往，近于葡语 saudade）","eg":"Heimweh ist eine Form der Sehnsucht.","eg_zh":"乡愁是渴望的一种形式。"}],"source":"ai"};
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
      // 只演示 Sehnsucht 一个词的 AI 补全；其他 miss 词返回空释义
      // （真实 app 行为：由前端 FallbackCard 引导手动触发），避免错配词条污染词表
      if ((body.text || "").trim() !== "Sehnsucht") {
        return sseRes(streamText(JSON.stringify({headword: body.text || "", senses: []}), 8), 60);
      }
      // 补全完成后写入词表（模拟真 app：AI 词条存 AI 词典，下次查询直接命中）
      const lang = (body.context && body.context.lang) || "de";
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
