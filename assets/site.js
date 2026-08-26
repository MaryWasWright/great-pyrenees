async function loadArticles() {
  const root = document.querySelector("[data-article-list]");
  if (!root) return;
  const search = document.querySelector("[data-search]");
  const topic = document.querySelector("[data-topic]");
  const count = document.querySelector("[data-count]");
  const res = await fetch("data/articles.json");
  const items = await res.json();

  const topics = [...new Set(items.map((item) => item.topic))].sort();
  topics.forEach((name) => {
    const opt = document.createElement("option");
    opt.value = name;
    opt.textContent = name;
    topic.appendChild(opt);
  });

  const render = () => {
    const q = (search.value || "").toLowerCase().trim();
    const t = topic.value;
    const filtered = items.filter((item) => {
      const hay = `${item.title} ${item.source} ${item.summary} ${item.topic}`.toLowerCase();
      return (!t || item.topic === t) && (!q || hay.includes(q));
    });
    count.textContent = `${filtered.length} of ${items.length} sources`;
    root.innerHTML = filtered.map((item) => `
      <article class="card article">
        <div><span class="tag">${item.topic}</span></div>
        <h3><a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.title}</a></h3>
        <div class="meta">${item.source}${item.year ? " · " + item.year : ""}</div>
        <p>${item.summary}</p>
      </article>
    `).join("") || `<p class="card">No matching sources yet. Try a broader search.</p>`;
  };

  search.addEventListener("input", render);
  topic.addEventListener("change", render);
  render();
}

document.addEventListener("DOMContentLoaded", loadArticles);
