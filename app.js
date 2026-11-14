(function () {
  document.getElementById("site-updated").textContent = SITE_UPDATED;
  document.getElementById("stat-cards").textContent = CARDS.length;
  document.getElementById("stat-batches").textContent = 32;
  document.getElementById("stat-archive").textContent = ARCHIVE.resources;
  document.getElementById("archive-note").textContent =
    "歷史批次：第 " + ARCHIVE.range + " 共 " + ARCHIVE.batches + " 批、" + ARCHIVE.resources +
    " 個資源已逐批核實交付，" + ARCHIVE.status + "，完成後補入卡片庫。";

  var catSel = document.getElementById("category-filter");
  var cats = [];
  CARDS.forEach(function (c) { if (cats.indexOf(c.category) < 0) cats.push(c.category); });
  cats.forEach(function (cat) {
    var o = document.createElement("option");
    o.value = cat; o.textContent = cat; catSel.appendChild(o);
  });

  function cardKind(c) {
    if (c.card.indexOf("未明言") >= 0 || c.card.toLowerCase().indexOf("unstated") >= 0) return "unstated";
    return "nocard";
  }

  function renderCards() {
    var q = document.getElementById("search").value.trim().toLowerCase();
    var cat = catSel.value;
    var cf = document.getElementById("card-filter").value;
    var wrap = document.getElementById("cards");
    wrap.innerHTML = "";
    CARDS.filter(function (c) {
      if (cat && c.category !== cat) return false;
      if (cf && cardKind(c) !== cf) return false;
      if (q && (c.service + " " + c.vendor + " " + c.category + " " + c.free).toLowerCase().indexOf(q) < 0) return false;
      return true;
    }).forEach(function (c) {
      var el = document.createElement("article");
      el.className = "card";
      var warn = cardKind(c) === "unstated" ? " warn" : "";
      el.innerHTML =
        "<h3></h3><div class='vendor'></div>" +
        "<span class='badge'></span><span class='badge" + warn + "'></span>" +
        "<p class='free'></p><p class='cnote'></p>" +
        "<p class='src'>出處：<a target='_blank' rel='noopener'></a> ｜ 核實：<span class='obs'></span> ｜ 第 <span class='bno'></span> 批</p>";
      el.querySelector("h3").textContent = c.service;
      el.querySelector(".vendor").textContent = c.vendor;
      var badges = el.querySelectorAll(".badge");
      badges[0].textContent = c.category;
      badges[1].textContent = c.card;
      el.querySelector(".free").textContent = c.free;
      el.querySelector(".cnote").textContent = c.note;
      var a = el.querySelector("a");
      a.href = c.source_url; a.textContent = "官方定價頁";
      el.querySelector(".obs").textContent = c.observed_date;
      el.querySelector(".bno").textContent = c.batch;
      wrap.appendChild(el);
    });
    if (!wrap.children.length) {
      wrap.innerHTML = "<p class='note'>無符合條件的卡片。</p>";
    }
  }

  ["search", "category-filter", "card-filter"].forEach(function (id) {
    document.getElementById(id).addEventListener("input", renderCards);
    document.getElementById(id).addEventListener("change", renderCards);
  });
  renderCards();

  var tl = document.getElementById("timeline");
  TIMELINE.forEach(function (t) {
    var li = document.createElement("li");
    var d = document.createElement("span"); d.className = "t-date"; d.textContent = t.date;
    var ty = document.createElement("span"); ty.className = "t-type"; ty.textContent = t.type;
    var tx = document.createElement("span"); tx.textContent = t.text;
    li.appendChild(d); li.appendChild(ty); li.appendChild(tx);
    tl.appendChild(li);
  });

  var dg = document.getElementById("digests");
  DIGESTS.forEach(function (d) {
    var el = document.createElement("article");
    el.className = "digest";
    var h = document.createElement("h3"); h.textContent = d.title;
    var p = document.createElement("p"); p.textContent = d.body;
    el.appendChild(h); el.appendChild(p);
    dg.appendChild(el);
  });
})();
