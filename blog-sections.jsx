// blog-sections.jsx — Blog index + Article view
//
// Two top-level components:
//   <BlogIndex onOpen={openSlug} t lang />    — hero, lead article, grid
//   <BlogArticle slug onBack t lang />        — full article with sidebar
//
// Internal helpers cover article cards, body rendering, related list, and the
// YouTube sidebar promo. All cards use semantic <article> wrappers and the
// reading view uses <article><h1></h1>... ... <aside>...</aside></article>
// so the markup is SEO-correct without leaning on divs.

const { useState: _useState_b, useMemo: _useMemo_b, useEffect: _useEffect_b } = React;

// ── helpers ──────────────────────────────────────────────────────────────────
function blogCat(slug) { return BLOG_CATEGORIES.find(c => c.slug === slug); }
function blogArt(slug) { return BLOG_ARTICLES.find(a => a.slug === slug); }
function blogAuthor(key) { return BLOG_AUTHORS[key]; }

function formatBlogDate(iso, lang) {
  const d = new Date(iso + "T00:00:00");
  const months = lang === "es"
    ? ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"]
    : ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

// ── Blog Hero ────────────────────────────────────────────────────────────────
function BlogHero({ t, lang, query, setQuery, category, setCategory }) {
  return (
    <section className="blog-hero">
      <div className="container">
        <div className="eyebrow">{t.blog_eyebrow}</div>
        <h1 className="blog-hero-title">{t.blog_title}</h1>
        <p className="blog-hero-sub">{t.blog_sub}</p>

        <div className="blog-search-row">
          <div className="blog-search-input">
            <Icon.search s={16}/>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.blog_search_placeholder}
              aria-label={t.blog_search_placeholder}
            />
            {query && (
              <button onClick={() => setQuery("")} aria-label="Clear">
                <Icon.close s={13}/>
              </button>
            )}
          </div>
        </div>

        <nav className="blog-cat-nav" aria-label="Categories">
          <button
            className={`chip ${!category ? "chip-on" : ""}`}
            onClick={() => setCategory(null)}
          >
            {t.blog_filter_all}
          </button>
          {BLOG_CATEGORIES.map(c => (
            <button
              key={c.slug}
              className={`chip ${category === c.slug ? "chip-on" : ""}`}
              onClick={() => setCategory(c.slug === category ? null : c.slug)}
            >
              {lang === "es" ? c.label_es : c.label_en}
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
}

// ── Lead article (large hero card) ───────────────────────────────────────────
function BlogLead({ article, t, lang, onOpen }) {
  if (!article) return null;
  const cat = blogCat(article.category);
  const author = blogAuthor(article.author);
  const title = lang === "es" ? article.title_es : article.title_en;
  const excerpt = lang === "es" ? article.excerpt_es : article.excerpt_en;
  return (
    <section className="blog-lead-wrap">
      <div className="container">
        <div className="section-head" style={{ marginBottom: 18 }}>
          <div className="eyebrow">{t.blog_lead}</div>
        </div>

        <article className="blog-lead" onClick={() => onOpen(article.slug)}>
          <div className="blog-lead-img">
            <EditorialPlaceholder
              label={title}
              hue={article.hue}
              sat={26}
              aspect="16 / 10"
              caption={(lang === "es" ? cat.label_es : cat.label_en).toUpperCase()}
            />
            <span className="blog-lead-cat">
              {lang === "es" ? cat.label_es : cat.label_en}
            </span>
          </div>
          <div className="blog-lead-body">
            <div className="blog-meta">
              <span>{formatBlogDate(article.date, lang)}</span>
              <span className="blog-meta-dot">·</span>
              <span>⏱ {article.readTime} {t.blog_min_read}</span>
            </div>
            <h2 className="blog-lead-title">{title}</h2>
            <p className="blog-lead-excerpt">{excerpt}</p>
            <div className="blog-lead-foot">
              <div className="blog-author">
                <span className="blog-author-avatar">{author.initials}</span>
                <span className="blog-author-meta">
                  <span className="blog-author-name">{author.name}</span>
                  <span className="blog-author-role">{lang === "es" ? author.role_es : author.role_en}</span>
                </span>
              </div>
              <span className="blog-lead-cta">
                {t.blog_open} <Icon.arrow s={14}/>
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

// ── Article card (grid item) ─────────────────────────────────────────────────
function BlogCard({ article, t, lang, onOpen, idx }) {
  const cat = blogCat(article.category);
  const author = blogAuthor(article.author);
  const title = lang === "es" ? article.title_es : article.title_en;
  const excerpt = lang === "es" ? article.excerpt_es : article.excerpt_en;
  return (
    <article className="blog-card" onClick={() => onOpen(article.slug)}>
      <div className="blog-card-img">
        <EditorialPlaceholder
          label={title}
          hue={article.hue}
          sat={22}
          aspect="4 / 3"
          caption={`#${String(idx+1).padStart(2,"0")} · ${(lang==="es"?cat.label_es:cat.label_en).toUpperCase()}`}
        />
      </div>
      <div className="blog-card-body">
        <div className="blog-card-cat">
          {lang === "es" ? cat.label_es : cat.label_en}
        </div>
        <h3 className="blog-card-title">{title}</h3>
        <p className="blog-card-excerpt">{excerpt}</p>
        <div className="blog-card-foot">
          <span className="blog-card-author">
            <span className="blog-author-avatar blog-author-avatar-sm">{author.initials}</span>
            {author.name}
          </span>
          <span className="blog-card-meta">
            {formatBlogDate(article.date, lang)} · ⏱ {article.readTime}′
          </span>
        </div>
      </div>
    </article>
  );
}

// ── Blog index (page) ────────────────────────────────────────────────────────
function BlogIndex({ t, lang, onOpen, sectionRef }) {
  const [query, setQuery] = _useState_b("");
  const [category, setCategory] = _useState_b(null);

  const lead = _useMemo_b(() => BLOG_ARTICLES.find(a => a.featured), []);

  const filtered = _useMemo_b(() => {
    const q = query.trim().toLowerCase();
    return BLOG_ARTICLES.filter(a => {
      if (a.featured) return false; // lead is rendered separately
      if (category && a.category !== category) return false;
      if (!q) return true;
      const title = (a.title_es + " " + a.title_en).toLowerCase();
      const excerpt = (a.excerpt_es + " " + a.excerpt_en).toLowerCase();
      return title.includes(q) || excerpt.includes(q);
    });
  }, [query, category, lang]);

  // If a category filter is active and the lead is in that category, include it
  // in the grid so it isn't lost; otherwise show the lead in its own block.
  const showLeadAsCard = category && lead && lead.category !== category;
  const leadVisible = !category || (lead && lead.category === category);

  return (
    <section ref={sectionRef} aria-label="Blog">
      <BlogHero
        t={t} lang={lang}
        query={query} setQuery={setQuery}
        category={category} setCategory={setCategory}
      />

      {leadVisible && !query && lead && (
        <BlogLead article={lead} t={t} lang={lang} onOpen={onOpen}/>
      )}

      <section className="blog-grid-wrap">
        <div className="container">
          <div className="section-head" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <div>
              <div className="eyebrow">{lang === "es" ? "Archivo" : "Archive"}</div>
              <h2 className="section-title">{t.blog_grid_title}</h2>
            </div>
            <div className="results">
              <span style={{ fontVariantNumeric: "tabular-nums", color: "var(--ink-1)", fontWeight: 500 }}>
                {filtered.length + (showLeadAsCard ? 1 : 0)}
              </span>{" "}
              {t.blog_grid_count}
            </div>
          </div>

          {(filtered.length === 0 && !showLeadAsCard) ? (
            <div style={{
              padding: "60px 20px", textAlign: "center",
              color: "var(--ink-2)", fontSize: 14,
              border: "0.5px dashed var(--line)", borderRadius: 16,
              marginTop: 24,
            }}>
              {t.blog_no_results}
            </div>
          ) : (
            <div className="blog-grid">
              {showLeadAsCard && lead && (
                <BlogCard article={lead} t={t} lang={lang} onOpen={onOpen} idx={0}/>
              )}
              {filtered.map((a, i) => (
                <BlogCard key={a.id} article={a} t={t} lang={lang} onOpen={onOpen} idx={i + (showLeadAsCard ? 1 : 0)}/>
              ))}
            </div>
          )}
        </div>
      </section>
    </section>
  );
}

// ── Article body renderer (semantic) ─────────────────────────────────────────
function ArticleBody({ blocks, t, lang, article }) {
  const aff = AFFILIATES.find(a => a.id === article.relatedAffiliateId) || AFFILIATES[0];
  const badgeLabel = (b) => {
    const map = {
      es: { best: "Más vendido", editor: "Elección editorial", fresh: "Recién tostado", favorite: "Favorito" },
      en: { best: "Best seller", editor: "Editor's pick", fresh: "Freshly roasted", favorite: "Favorite" },
    };
    return map[lang][b] || "";
  };

  return (
    <div className="article-body">
      {blocks.map((b, i) => {
        if (b.kind === "lede") return <p key={i} className="article-lede">{b.text}</p>;
        if (b.kind === "p")    return <p key={i}>{b.text}</p>;
        if (b.kind === "h2")   return <h2 key={i} id={`s-${i}`}>{b.text}</h2>;
        if (b.kind === "ul")   return <ul key={i}>{b.items.map((it, j) => <li key={j}>{it}</li>)}</ul>;
        if (b.kind === "ol")   return <ol key={i}>{b.items.map((it, j) => <li key={j}>{it}</li>)}</ol>;
        if (b.kind === "blockquote") return (
          <blockquote key={i} className="article-quote">
            <p>{b.text}</p>
            {b.cite && <cite>— {b.cite}</cite>}
          </blockquote>
        );
        if (b.kind === "ad") return (
          <aside key={i} className="article-ad" aria-label="Advertisement">
            <div className="article-ad-rail">
              <span className="article-ad-rail-tag">{t.ad_disclosure}</span>
              <span className="article-ad-rail-meta">{t.blog_ad_inline_label}</span>
            </div>
            <div className="article-ad-canvas">
              <div className="article-ad-corners" aria-hidden>
                <span className="ad-corner ad-corner-tl"/>
                <span className="ad-corner ad-corner-tr"/>
                <span className="ad-corner ad-corner-bl"/>
                <span className="ad-corner ad-corner-br"/>
              </div>
              <div className="ad-canvas-inner">
                <span className="ad-canvas-label">{t.ad_label}</span>
                <span className="ad-canvas-size">Google AdSense · 728 × 90</span>
              </div>
            </div>
          </aside>
        );
        if (b.kind === "affiliate") return (
          <aside key={i} className="article-affiliate" aria-label="Recommended product">
            <header className="article-affiliate-head">
              <span className="article-affiliate-eyebrow">{t.blog_recommended}</span>
              <span className="article-affiliate-disclosure">
                {lang === "es" ? "Enlace de afiliado" : "Affiliate link"}
              </span>
            </header>
            <a href="#" onClick={e => e.preventDefault()} className="article-affiliate-card">
              <div className="article-affiliate-thumb">
                <EditorialPlaceholder
                  label="" hue={aff.hue} sat={20} aspect="1 / 1"
                  caption={aff.brand.toUpperCase()}
                />
                {aff.badge && (
                  <span className={`affiliate-badge affiliate-badge-${aff.badge}`}>
                    {badgeLabel(aff.badge)}
                  </span>
                )}
              </div>
              <div className="article-affiliate-body">
                <div className="affiliate-cat">{t["affiliate_cat_" + aff.cat]}</div>
                <h4>{aff.brand} <span className="affiliate-model">{aff.model}</span></h4>
                <p>{lang === "es" ? aff.note_es : aff.note_en}</p>
                <div className="affiliate-rating">
                  <Stars value={aff.rating} size={12} gap={1}/>
                  <span className="affiliate-rating-num">{aff.rating.toFixed(1)}</span>
                  <span className="affiliate-rating-count">({aff.reviews.toLocaleString()})</span>
                </div>
                <div className="article-affiliate-foot">
                  <span className="affiliate-price-wrap">
                    <span className="affiliate-price">{aff.price}</span>
                    {aff.oldPrice && <span className="affiliate-price-old">{aff.oldPrice}</span>}
                  </span>
                  <span className="affiliate-cta">{t.affiliate_cta} <Icon.ext s={11}/></span>
                </div>
              </div>
            </a>
          </aside>
        );
        return null;
      })}
    </div>
  );
}

// ── Sidebar ──────────────────────────────────────────────────────────────────
function ArticleSidebar({ article, t, lang, onOpen }) {
  // Pick 3 related articles: same category first, fall back to others.
  const related = _useMemo_b(() => {
    const same = BLOG_ARTICLES.filter(a => a.id !== article.id && a.category === article.category);
    const rest = BLOG_ARTICLES.filter(a => a.id !== article.id && a.category !== article.category);
    return [...same, ...rest].slice(0, 3);
  }, [article.id]);

  return (
    <aside className="article-sidebar" aria-label="Sidebar">
      <section className="sidebar-section">
        <header className="sidebar-head">
          <span className="sidebar-line" aria-hidden/>
          <h3 className="sidebar-title">{t.blog_related}</h3>
        </header>
        <ol className="sidebar-related">
          {related.map((a, i) => {
            const cat = blogCat(a.category);
            const title = lang === "es" ? a.title_es : a.title_en;
            return (
              <li key={a.id}>
                <a href="#" onClick={(e) => { e.preventDefault(); onOpen(a.slug); }}>
                  <span className="sidebar-related-num">{String(i+1).padStart(2,"0")}</span>
                  <span className="sidebar-related-info">
                    <span className="sidebar-related-cat">{lang==="es"?cat.label_es:cat.label_en}</span>
                    <span className="sidebar-related-title">{title}</span>
                    <span className="sidebar-related-meta">⏱ {a.readTime} {t.blog_min_read}</span>
                  </span>
                </a>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="sidebar-yt" aria-label="YouTube channel promotion">
        <div className="sidebar-yt-bg" aria-hidden/>
        <div className="sidebar-yt-content">
          <div className="sidebar-yt-eyebrow">
            <span className="dot-live"/>
            {t.yt_now_live}
          </div>
          <div className="sidebar-yt-title-row">
            <div className="yt-avatar">
              <span className="yt-avatar-mark">CC</span>
            </div>
            <div>
              <h4 className="sidebar-yt-title">{t.blog_youtube_promo_title}</h4>
              <div className="sidebar-yt-handle">{t.yt_handle} · {t.yt_subs}</div>
            </div>
          </div>
          <p className="sidebar-yt-pitch">{t.blog_youtube_promo_sub}</p>
          <button className="sidebar-yt-cta" onClick={(e)=>e.preventDefault()}>
            <span className="yt-bell" aria-hidden>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22a2.5 2.5 0 0 0 2.5-2.5h-5A2.5 2.5 0 0 0 12 22zm7-6V11a7 7 0 1 0-14 0v5l-2 2v1h18v-1l-2-2z"/></svg>
            </span>
            {t.blog_youtube_promo_cta}
          </button>
        </div>
      </section>
    </aside>
  );
}

// ── Article view ─────────────────────────────────────────────────────────────
function BlogArticle({ slug, t, lang, onBack, onOpen }) {
  const article = blogArt(slug);
  _useEffect_b(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [slug]);
  if (!article) return null;
  const cat = blogCat(article.category);
  const author = blogAuthor(article.author);
  const title = lang === "es" ? article.title_es : article.title_en;
  const excerpt = lang === "es" ? article.excerpt_es : article.excerpt_en;
  const blocks = lang === "es" ? article.body_es : article.body_en;
  const headings = (blocks || []).map((b, i) => b.kind === "h2" ? { id: `s-${i}`, text: b.text } : null).filter(Boolean);

  return (
    <article className="article-view" data-screen-label="Article">
      <div className="container">
        <button className="article-back" onClick={onBack}>
          <Icon.arrow s={13} style={{ transform: "rotate(180deg)" }}/> {t.blog_back}
        </button>

        <header className="article-header">
          <a className="article-cat-link" href="#" onClick={(e)=>e.preventDefault()}>
            {t.blog_in_category} {lang === "es" ? cat.label_es : cat.label_en}
          </a>
          <h1 className="article-h1">{title}</h1>
          <p className="article-dek">{excerpt}</p>

          <div className="article-meta">
            <div className="blog-author">
              <span className="blog-author-avatar">{author.initials}</span>
              <span className="blog-author-meta">
                <span className="blog-author-name">{author.name}</span>
                <span className="blog-author-role">{lang === "es" ? author.role_es : author.role_en}</span>
              </span>
            </div>
            <span className="article-meta-rule" aria-hidden/>
            <span className="article-meta-bits">
              <span>{formatBlogDate(article.date, lang)}</span>
              <span className="blog-meta-dot">·</span>
              <span>⏱ {article.readTime} {t.blog_min_read}</span>
            </span>
            <div className="article-meta-actions">
              <button className="chip"><Icon.share s={12}/> {t.blog_share}</button>
              <button className="chip"><Icon.heart s={12}/> {t.blog_save}</button>
            </div>
          </div>
        </header>

        <figure className="article-cover">
          <EditorialPlaceholder
            label={title}
            hue={article.hue}
            sat={28}
            aspect="16 / 9"
            caption={(lang==="es"?cat.label_es:cat.label_en).toUpperCase()}
          />
        </figure>

        <div className="article-layout">
          <section className="article-main">
            {headings.length > 1 && (
              <nav className="article-toc" aria-label={t.blog_table_of_contents}>
                <span className="article-toc-label">{t.blog_toc}</span>
                <ol>
                  {headings.map((h, i) => (
                    <li key={h.id}>
                      <a href={`#${h.id}`}>{String(i+1).padStart(2,"0")} · {h.text}</a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}
            <ArticleBody blocks={blocks} t={t} lang={lang} article={article}/>
            <footer className="article-footer-author">
              <span className="blog-author-avatar blog-author-avatar-lg">{author.initials}</span>
              <div>
                <div className="micro" style={{ marginBottom: 4 }}>{t.blog_about_author}</div>
                <div className="article-footer-author-name">{author.name}</div>
                <div className="article-footer-author-role">{lang === "es" ? author.role_es : author.role_en}</div>
              </div>
            </footer>
          </section>

          <ArticleSidebar article={article} t={t} lang={lang} onOpen={onOpen}/>
        </div>
      </div>
    </article>
  );
}

Object.assign(window, {
  BlogIndex, BlogArticle, BlogHero, BlogLead, BlogCard, ArticleBody, ArticleSidebar,
  blogCat, blogArt, blogAuthor, formatBlogDate,
});
