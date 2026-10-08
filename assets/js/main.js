(function () {
  "use strict";

  var S = window.SITE || {};
  var $ = function (id) {
    return document.getElementById(id);
  };

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function hide(sectionId) {
    var el = $(sectionId);
    if (el) el.remove();
  }

  function filled(list) {
    return Array.isArray(list) && list.length > 0;
  }

  var ICONS = {
    linkedin:
      '<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.6 8.65 21 11.2 21 14.5V21h-4v-5.8c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.52-2.25 3.1V21H9z"/>',
    medium:
      '<path d="M13.5 12a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0zM20.9 12c0 3.54-1.5 6.4-3.37 6.4-1.86 0-3.37-2.86-3.37-6.4s1.5-6.4 3.37-6.4c1.87 0 3.37 2.86 3.37 6.4zM24 12c0 3.17-.53 5.74-1.18 5.74-.66 0-1.19-2.57-1.19-5.74s.53-5.74 1.19-5.74c.65 0 1.18 2.57 1.18 5.74z"/>',
    github:
      '<path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"/>',
    instagram:
      '<path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM12 2c-2.7 0-3.05 0-4.12.06C4.6 2.2 2.2 4.6 2.06 7.88 2 8.95 2 9.3 2 12s0 3.05.06 4.12c.15 3.28 2.54 5.67 5.82 5.82C8.95 22 9.3 22 12 22s3.05 0 4.12-.06c3.28-.15 5.67-2.54 5.82-5.82C22 15.05 22 14.7 22 12s0-3.05-.06-4.12C21.8 4.6 19.4 2.2 16.12 2.06 15.05 2 14.7 2 12 2zm0 1.8c2.67 0 2.98 0 4.04.06 2.42.11 3.99 1.68 4.1 4.1.05 1.06.06 1.37.06 4.04s0 2.98-.06 4.04c-.11 2.42-1.68 3.99-4.1 4.1-1.06.05-1.37.06-4.04.06s-2.98 0-4.04-.06c-2.42-.11-3.99-1.68-4.1-4.1C3.81 14.98 3.8 14.67 3.8 12s0-2.98.06-4.04c.11-2.42 1.68-3.99 4.1-4.1C9.02 3.81 9.33 3.8 12 3.8z"/>',
  };
  var LABELS = { linkedin: "LinkedIn", medium: "Medium", github: "GitHub", instagram: "Instagram" };

  // ── Simple text bindings ───────────────────────────────────
  document.querySelectorAll("[data-bind]").forEach(function (el) {
    var key = el.getAttribute("data-bind");
    if (S[key]) el.textContent = S[key];
    else if (key === "location" || key === "tagline") el.remove();
  });
  $("year").textContent = new Date().getFullYear();

  // ── Portrait ───────────────────────────────────────────────
  var portrait = $("portrait");
  if (S.photo) {
    portrait.innerHTML = '<img src="' + esc(S.photo) + '" alt="Portrait of ' + esc(S.name) + '" width="320" height="320" />';
  } else {
    portrait.innerHTML = '<span class="monogram">' + esc(S.initials || "") + "</span>";
  }

  // ── Calls to action ────────────────────────────────────────
  function ctas() {
    var html = "";
    if (S.email)
      html += '<a class="btn btn--primary" href="mailto:' + esc(S.email) + '">Email me</a>';
    if (S.links && S.links.linkedin)
      html +=
        '<a class="btn ' + (S.email ? "btn--ghost" : "btn--primary") + '" href="' + esc(S.links.linkedin) +
        '" target="_blank" rel="noopener">Connect on LinkedIn</a>';
    if (S.resume)
      html += '<a class="btn btn--ghost" href="' + esc(S.resume) + '" download>Download CV</a>';
    return html;
  }
  $("heroCta").innerHTML = ctas();
  $("contactCta").innerHTML = ctas();

  // ── Social links ───────────────────────────────────────────
  $("socials").innerHTML = Object.keys(S.links || {})
    .filter(function (k) {
      return S.links[k] && ICONS[k];
    })
    .map(function (k) {
      return (
        '<li><a href="' + esc(S.links[k]) + '" target="_blank" rel="noopener" aria-label="' + LABELS[k] +
        '"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">' +
        ICONS[k] + "</svg></a></li>"
      );
    })
    .join("");

  // ── Highlights ─────────────────────────────────────────────
  if (filled(S.highlights)) {
    $("stats").innerHTML = S.highlights
      .map(function (h) {
        return '<li><strong>' + esc(h.value) + "</strong><span>" + esc(h.label) + "</span></li>";
      })
      .join("");
  } else {
    $("stats").remove();
  }

  // ── About ──────────────────────────────────────────────────
  if (filled(S.about)) {
    $("aboutBody").innerHTML =
      S.about.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") +
      (S.aboutPhoto
        ? '<figure class="about__photo"><img src="' + esc(S.aboutPhoto) + '" alt="' + esc(S.shortName || S.name) +
          ' at work" width="720" height="747" loading="lazy" /></figure>'
        : "");
  } else hide("about");

  // ── Experience ─────────────────────────────────────────────
  if (filled(S.experience)) {
    $("experienceList").innerHTML = S.experience
      .map(function (x) {
        var meta = [x.company, x.location].filter(Boolean).map(esc).join(" · ");
        return (
          '<li class="timeline__item">' +
          (x.period ? '<p class="timeline__period">' + esc(x.period) + "</p>" : "") +
          "<h3>" + esc(x.role) + "</h3>" +
          (meta ? '<p class="timeline__meta">' + meta + "</p>" : "") +
          (filled(x.points)
            ? "<ul>" + x.points.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>"
            : "") +
          "</li>"
        );
      })
      .join("");
  } else hide("experience");

  // ── Certifications ─────────────────────────────────────────
  if (filled(S.certifications)) {
    $("certList").innerHTML = S.certifications
      .map(function (c) {
        return (
          '<li class="card card--cert">' +
          '<div class="card__head"><span class="badge" aria-hidden="true">✓</span>' +
          (c.level ? '<span class="level level--' + esc(c.level.toLowerCase()) + '">' + esc(c.level) + "</span>" : "") +
          "</div>" +
          "<h3>" + esc(c.name) + "</h3>" +
          '<p class="card__meta">' + [c.issuer, c.date].filter(Boolean).map(esc).join(" · ") + "</p>" +
          (c.summary ? '<p class="card__summary">' + esc(c.summary) + "</p>" : "") +
          (c.credentialUrl
            ? '<a class="card__link" href="' + esc(c.credentialUrl) + '" target="_blank" rel="noopener">Verify credential →</a>'
            : "") +
          "</li>"
        );
      })
      .join("");
  } else hide("certifications");

  // ── Skills ─────────────────────────────────────────────────
  if (filled(S.skills)) {
    $("skillsList").innerHTML = S.skills
      .map(function (g) {
        return (
          '<div class="skills__group"><h3>' + esc(g.group) + '</h3><ul class="chips">' +
          g.items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") +
          "</ul></div>"
        );
      })
      .join("");
  } else hide("skills");

  // ── Leadership ─────────────────────────────────────────────
  if (filled(S.leadership)) {
    $("leadershipList").innerHTML = S.leadership
      .map(function (l) {
        return '<li class="stack__item"><h3>' + esc(l.title) + "</h3><p>" + esc(l.body) + "</p></li>";
      })
      .join("");
  } else hide("leadership");

  // ── Projects ───────────────────────────────────────────────
  if (filled(S.projects)) {
    $("projectList").innerHTML = S.projects
      .map(function (p) {
        return (
          '<li class="card">' +
          "<h3>" + esc(p.title) + "</h3>" +
          "<p>" + esc(p.summary) + "</p>" +
          (filled(p.tags)
            ? '<ul class="chips chips--sm">' + p.tags.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>"
            : "") +
          (p.url ? '<a class="card__link" href="' + esc(p.url) + '" target="_blank" rel="noopener">Read the build →</a>' : "") +
          "</li>"
        );
      })
      .join("");
  } else hide("projects");

  // ── Articles ───────────────────────────────────────────────
  if (filled(S.articles)) {
    $("articleList").innerHTML =
      S.articles
        .map(function (a) {
          return (
            '<li><a href="' + esc(a.url) + '" target="_blank" rel="noopener">' +
            "<span>" + esc(a.title) + "</span>" +
            (a.date ? "<small>" + esc(a.date) + "</small>" : "") +
            "</a></li>"
          );
        })
        .join("") +
      (S.links && S.links.medium
        ? '<li class="articles__more"><a href="' + esc(S.links.medium) + '" target="_blank" rel="noopener"><span>All articles on Medium →</span></a></li>'
        : "");
  } else hide("writing");

  // ── Education ──────────────────────────────────────────────
  if (filled(S.education)) {
    $("educationList").innerHTML = S.education
      .map(function (e) {
        return (
          '<li class="stack__item"><h3>' + esc(e.degree) + "</h3><p>" +
          [e.school, e.period].filter(Boolean).map(esc).join(" · ") + "</p>" +
          (e.detail ? '<p class="stack__detail">' + esc(e.detail) + "</p>" : "") + "</li>"
        );
      })
      .join("");
  } else hide("education");

  // ── Personal ───────────────────────────────────────────────
  if (S.personal) $("personalBody").innerHTML = "<p>" + esc(S.personal) + "</p>";
  else hide("personal");

  // Alternate section backgrounds across whichever sections remain.
  document.querySelectorAll("main > .section").forEach(function (sec, i) {
    sec.classList.toggle("section--alt", i % 2 === 1);
  });

  // ── Navigation (built from the sections that remain) ───────
  var navLinks = $("navLinks");
  navLinks.innerHTML = Array.prototype.map
    .call(document.querySelectorAll("[data-nav]"), function (sec) {
      return '<li><a href="#' + sec.id + '">' + esc(sec.getAttribute("data-nav")) + "</a></li>";
    })
    .join("");

  var toggle = $("navToggle");
  toggle.addEventListener("click", function () {
    var open = navLinks.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  navLinks.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  // Highlight the section currently in view.
  if ("IntersectionObserver" in window) {
    var anchors = navLinks.querySelectorAll("a");
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          anchors.forEach(function (a) {
            a.classList.toggle("is-active", a.getAttribute("href") === "#" + entry.target.id);
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    document.querySelectorAll("[data-nav]").forEach(function (s) { spy.observe(s); });

    // Gentle reveal on scroll.
    var reveal = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            reveal.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".section, .contact").forEach(function (s) {
      s.classList.add("reveal");
      reveal.observe(s);
    });
  }
})();
