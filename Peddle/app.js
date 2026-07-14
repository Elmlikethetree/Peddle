// ============================================================
// APP.JS — game engine. You shouldn't need to edit this file to
// publish new puzzles; see puzzles.js for that.
// ============================================================

const STORAGE_PREFIX = "peddle:progress:";

function todayStr() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function sortedPuzzles() {
  return [...PUZZLES].sort((a, b) => a.date.localeCompare(b.date));
}

function livePuzzles() {
  const today = todayStr();
  return sortedPuzzles().filter(p => p.date <= today);
}

function getTodayPuzzle() {
  const live = livePuzzles();
  return live.length ? live[live.length - 1] : null;
}

function getArchivePuzzles() {
  const today = getTodayPuzzle();
  return livePuzzles()
    .filter(p => !today || p.id !== today.id)
    .sort((a, b) => b.date.localeCompare(a.date));
}

function normalize(s) {
  return s.toLowerCase().trim().replace(/[^a-z0-9 ]/g, "");
}

function isCorrect(guess, puzzle) {
  const g = normalize(guess);
  if (!g) return false;
  const candidates = [puzzle.answer, ...(puzzle.accepted || [])].map(normalize);
  return candidates.includes(g);
}

function matchesBank(text) {
  const t = normalize(text);
  if (!t) return false;
  return DIAGNOSIS_BANK.some(d => normalize(d) === t);
}

function loadProgress(puzzleId) {
  try {
    const raw = localStorage.getItem(STORAGE_PREFIX + puzzleId);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveProgress(puzzleId, progress) {
  try {
    localStorage.setItem(STORAGE_PREFIX + puzzleId, JSON.stringify(progress));
  } catch {
    // storage unavailable (e.g. private browsing) - fail silently
  }
}

// ---------------- rendering ----------------

const root = document.getElementById("root");
let view = "today"; // "today" | "archive" | "case"
let activeCaseId = null;

function render() {
  if (view === "archive") {
    renderArchive();
  } else if (view === "case") {
    renderCase(activeCaseId, true);
  } else {
    const p = getTodayPuzzle();
    if (!p) {
      root.innerHTML = `<div class="empty-state">No case has been published yet. Check back soon.</div>`;
    } else {
      renderCase(p.id, false);
    }
  }
  renderNav();
}

function renderNav() {
  document.querySelectorAll("nav.tabs button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.view === (view === "case" ? "archive" : view));
  });
}

function renderArchive() {
  const puzzles = getArchivePuzzles();
  if (!puzzles.length) {
    root.innerHTML = `<div class="empty-state">No past cases yet — check back after today's case has run.</div>`;
    return;
  }
  const rows = puzzles.map(p => {
    const progress = loadProgress(p.id);
    let statusClass = "unplayed", statusText = "Unplayed";
    if (progress?.status === "won") { statusClass = "solved"; statusText = "Solved"; }
    else if (progress?.status === "lost") { statusClass = "failed"; statusText = "Missed"; }
    const label = progress?.status ? p.answer : "Tap to play";
    return `
      <li data-id="${p.id}">
        <span class="archive-date">${p.date}</span>
        <span class="archive-answer">${escapeHtml(label)}</span>
        <span class="archive-status ${statusClass}">${statusText}</span>
      </li>`;
  }).join("");
  root.innerHTML = `<ul class="archive-list">${rows}</ul>`;
  root.querySelectorAll(".archive-list li").forEach(li => {
    li.addEventListener("click", () => {
      activeCaseId = li.dataset.id;
      view = "case";
      render();
    });
  });
}

function escapeHtml(s) {
  const div = document.createElement("div");
  div.textContent = s;
  return div.innerHTML;
}

function highlightMatch(text, query) {
  const safe = escapeHtml(text);
  if (!query) return safe;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return safe;
  const before = escapeHtml(text.slice(0, idx));
  const match = escapeHtml(text.slice(idx, idx + query.length));
  const after = escapeHtml(text.slice(idx + query.length));
  return `${before}<mark>${match}</mark>${after}`;
}

function renderCase(puzzleId, fromArchive) {
  const puzzle = PUZZLES.find(p => p.id === puzzleId);
  if (!puzzle) {
    root.innerHTML = `<div class="empty-state">Case not found.</div>`;
    return;
  }
  let progress = loadProgress(puzzleId) || { status: "playing", guesses: [], hintsRevealed: 1 };
  const total = puzzle.hints.length;
  const hintsRevealed = Math.min(progress.hintsRevealed || 1, total);
  const finished = progress.status === "won" || progress.status === "lost";

  const pips = Array.from({ length: total }).map((_, i) => {
    let cls = "pip";
    if (i < hintsRevealed - 1) cls += " wrong-pip";
    else if (i === hintsRevealed - 1) cls += progress.status === "won" ? " correct-pip" : " revealed";
    return `<div class="${cls}"></div>`;
  }).join("");

  const hintItems = puzzle.hints.map((h, i) => {
    if (i < hintsRevealed) {
      return `<li class="shown"><span class="num">Hint ${String(i + 1).padStart(2, "0")}</span>${escapeHtml(h)}</li>`;
    }
    return `<li><span class="num">Hint ${String(i + 1).padStart(2, "0")}</span>locked</li>`;
  }).join("");

  const guessChips = (progress.guesses || []).map(g => `<span class="chip">${escapeHtml(g)}</span>`).join("");

  let resultHtml = "";
  if (finished) {
    const won = progress.status === "won";
    resultHtml = `
      <div class="result-panel">
        <div class="verdict ${won ? "win" : "lose"}">${won ? `Solved in ${hintsRevealed} hint${hintsRevealed > 1 ? "s" : ""}` : "Not solved"}</div>
        <div class="answer">${escapeHtml(puzzle.answer)}</div>
        <div class="explanation">${escapeHtml(puzzle.explanation || "")}</div>
        <button class="share-btn" id="shareBtn">Copy result</button>
        <span class="toast" id="toast"></span>
      </div>`;
  }

  root.innerHTML = `
    ${fromArchive ? `<div class="back-link" id="backLink">&larr; Back to archive</div>` : ""}
    <div class="case-card">
      <div class="case-meta"><span>Case &middot; ${puzzle.date}</span><span>${hintsRevealed}/${total} hints</span></div>
      <div class="hint-pips">${pips}</div>
      <ul class="hint-list">${hintItems}</ul>
      ${!finished ? `
        <div class="guess-row">
          <form class="guess-form" id="guessForm" autocomplete="off">
            <input type="text" class="guess-input" id="guessInput" placeholder="Type a diagnosis..." />
            <button type="submit" class="submit-guess" id="submitGuessBtn" disabled>Guess</button>
          </form>
          <div class="suggestions" id="suggestions" style="display:none;"></div>
        </div>
        <div class="input-hint" id="inputHint"></div>
        <div class="guess-history">${guessChips}</div>
        <button class="give-up" id="giveUpBtn">Reveal answer</button>
      ` : `<div class="guess-history">${guessChips}</div>`}
      ${resultHtml}
    </div>
  `;

  if (fromArchive) {
    document.getElementById("backLink").addEventListener("click", () => {
      view = "archive";
      render();
    });
  }

  if (!finished) {
    wireGuessForm(puzzle, progress);
  }
  if (finished) {
    document.getElementById("shareBtn")?.addEventListener("click", () => shareResult(puzzle, progress));
  }
  document.getElementById("giveUpBtn")?.addEventListener("click", () => {
    progress.status = "lost";
    progress.hintsRevealed = total;
    saveProgress(puzzle.id, progress);
    render();
  });
}

function wireGuessForm(puzzle, progress) {
  const form = document.getElementById("guessForm");
  const input = document.getElementById("guessInput");
  const suggestionsBox = document.getElementById("suggestions");
  const submitBtn = document.getElementById("submitGuessBtn");
  const hint = document.getElementById("inputHint");
  let activeIndex = -1;

  function closeSuggestions() {
    suggestionsBox.style.display = "none";
    suggestionsBox.innerHTML = "";
    activeIndex = -1;
  }

  function updateValidity() {
    const valid = matchesBank(input.value);
    submitBtn.disabled = !valid;
    if (!input.value.trim()) {
      hint.textContent = "";
    } else if (!valid) {
      hint.textContent = "Select a diagnosis from the dropdown to guess.";
    } else {
      hint.textContent = "";
    }
    return valid;
  }

  function chooseSuggestion(text) {
    input.value = text;
    closeSuggestions();
    updateValidity();
    input.focus();
  }

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    updateValidity();
    if (!q) { closeSuggestions(); return; }
    const matches = DIAGNOSIS_BANK.filter(d => d.toLowerCase().includes(q)).slice(0, 8);
    if (!matches.length) { closeSuggestions(); return; }
    suggestionsBox.innerHTML = matches.map(m => `<div>${highlightMatch(m, q)}</div>`).join("");
    suggestionsBox.style.display = "block";
    [...suggestionsBox.children].forEach((child, i) => {
      child.addEventListener("click", () => chooseSuggestion(matches[i]));
    });
  });

  input.addEventListener("keydown", (e) => {
    const items = [...suggestionsBox.children];
    if (e.key === "ArrowDown" && items.length) {
      e.preventDefault();
      activeIndex = Math.min(activeIndex + 1, items.length - 1);
      items.forEach((it, i) => it.classList.toggle("active", i === activeIndex));
    } else if (e.key === "ArrowUp" && items.length) {
      e.preventDefault();
      activeIndex = Math.max(activeIndex - 1, 0);
      items.forEach((it, i) => it.classList.toggle("active", i === activeIndex));
    } else if (e.key === "Enter" && activeIndex >= 0 && items[activeIndex]) {
      e.preventDefault();
      chooseSuggestion(items[activeIndex].textContent);
    } else if (e.key === "Escape") {
      closeSuggestions();
    }
  });

  document.addEventListener("click", (e) => {
    if (!form.contains(e.target) && e.target !== suggestionsBox) closeSuggestions();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const guess = input.value.trim();
    if (!guess || !updateValidity()) return; // must be an exact diagnosis-bank entry
    closeSuggestions();

    const total = puzzle.hints.length;
    progress.guesses = progress.guesses || [];

    if (isCorrect(guess, puzzle)) {
      progress.status = "won";
      progress.hintsRevealed = Math.min(progress.hintsRevealed || 1, total);
      saveProgress(puzzle.id, progress);
      render();
      return;
    }

    progress.guesses.push(guess);
    const guessesMade = progress.guesses.length;
    if (guessesMade >= total) {
      progress.status = "lost";
      progress.hintsRevealed = total;
    } else {
      progress.hintsRevealed = guessesMade + 1;
    }
    saveProgress(puzzle.id, progress);
    input.value = "";
    updateValidity();
    render();
  });
}

function shareResult(puzzle, progress) {
  const total = puzzle.hints.length;
  const used = progress.status === "won" ? Math.min(progress.hintsRevealed, total) : total;
  const squares = Array.from({ length: total }).map((_, i) => {
    if (progress.status === "won") {
      return i < used - 1 ? "🟥" : (i === used - 1 ? "🟩" : "⬜");
    }
    return "🟥";
  }).join("");
  const label = progress.status === "won" ? `${used}/${total}` : `X/${total}`;
  const text = `Peddle ${puzzle.date}\n${label}\n${squares}`;

  navigator.clipboard?.writeText(text).then(() => {
    const toast = document.getElementById("toast");
    if (toast) {
      toast.textContent = "Copied to clipboard!";
      setTimeout(() => { if (toast) toast.textContent = ""; }, 2500);
    }
  }).catch(() => {
    const toast = document.getElementById("toast");
    if (toast) toast.textContent = text;
  });
}

// ---------------- nav wiring ----------------

document.querySelectorAll("nav.tabs button").forEach(btn => {
  btn.addEventListener("click", () => {
    view = btn.dataset.view;
    activeCaseId = null;
    render();
  });
});

render();
