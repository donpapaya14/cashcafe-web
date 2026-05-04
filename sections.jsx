// sections.jsx — page sections (Hero, FeaturedLocal, Directory, Affiliate, AdSlot, ChillZone, Footer)

const { useState: _useState_s, useMemo: _useMemo_s, useRef: _useRef_s, useEffect: _useEffect_s, Fragment: _Fragment_s } = React;

// ─── Top nav bar ──────────────────────────────────────────────────────────────
function TopBar({ t, lang, setLang, onNav, view }) {
  const isBlog = view === "blog" || view === "article";
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      backdropFilter: "blur(20px) saturate(140%)",
      WebkitBackdropFilter: "blur(20px) saturate(140%)",
      background: "color-mix(in oklab, var(--bg) 78%, transparent)",
      borderBottom: "0.5px solid var(--line)",
    }}>
      <div className="container" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "14px 0", gap: 18,
      }}>
        <span onClick={() => onNav("home")} style={{ cursor: "pointer" }}>
          <Logo />
        </span>
        <nav style={{ display: "flex", gap: 26, fontSize: 13, color: "var(--ink-2)" }} className="topnav-links">
          <a onClick={() => onNav("about")} style={navLink}>{t.nav_about}</a>
          <a onClick={() => onNav("directory")} style={navLink}>{t.nav_directory}</a>
          <a onClick={() => onNav("local")} style={navLink}>{t.nav_local}</a>
          <a onClick={() => onNav("spain")} style={navLink}>{t.nav_spain}</a>
          <a onClick={() => onNav("youtube")} style={navLink}>YouTube</a>
          <a onClick={() => onNav("blog")} style={{ ...navLink, color: isBlog ? "var(--ink-1)" : navLink.color, fontWeight: isBlog ? 500 : navLink.fontWeight }}>{t.nav_blog}</a>
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            title="Toggle language"
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              fontSize: 12, fontWeight: 500, letterSpacing: ".02em",
              padding: "7px 11px", borderRadius: 999,
              border: "0.5px solid var(--line)", background: "var(--surface-1)",
              color: "var(--ink-1)", cursor: "pointer",
            }}>
            <Icon.globe s={13}/>
            <span style={{ opacity: lang==="es" ? 1 : .35 }}>ES</span>
            <span style={{ opacity: .25 }}>·</span>
            <span style={{ opacity: lang==="en" ? 1 : .35 }}>EN</span>
          </button>
        </div>
      </div>
    </header>
  );
}
const navLink = { cursor: "pointer", textDecoration: "none", color: "inherit" };

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero({ t, lang, query, setQuery, onSearch, onNavLocal }) {
  const popular = lang === "es"
    ? ["Madrid", "Granada", "Tokio", "Lisboa", "Brooklyn", "Melbourne"]
    : ["Madrid", "Granada", "Tokyo", "Lisbon", "Brooklyn", "Melbourne"];

  return (
    <section style={{ position: "relative", paddingTop: 56, paddingBottom: 64, overflow: "hidden" }}>
      <div className="container hero-grid" style={{ position: "relative", zIndex: 2 }}>
        <div className="hero-text">
          <div className="eyebrow">{t.hero_eyebrow}</div>
          <h1 className="display">
            {t.hero_title_a}<br/>
            <em style={{ fontStyle: "italic", fontWeight: 400 }}>{t.hero_title_b}</em>
          </h1>
          <p className="lede" style={{ maxWidth: 520, marginTop: 18 }}>
            {t.hero_sub}
          </p>

          {/* search */}
          <form onSubmit={(e)=>{e.preventDefault(); onSearch(query);}}
            style={{
              display: "flex", alignItems: "center", gap: 8,
              marginTop: 28, padding: "8px 8px 8px 16px",
              borderRadius: 999,
              border: "0.5px solid var(--line)",
              background: "var(--surface-1)",
              boxShadow: "0 1px 0 var(--shadow-soft), 0 12px 30px -20px var(--shadow-strong)",
              maxWidth: 560,
            }}>
            <Icon.search s={17}/>
            <input
              value={query}
              onChange={(e)=>setQuery(e.target.value)}
              placeholder={t.search_placeholder}
              style={{
                flex: 1, border: "none", outline: "none", background: "transparent",
                fontSize: 14, color: "var(--ink-1)", padding: "8px 4px",
              }}
            />
            <button type="submit" style={{
              border: "none", cursor: "pointer",
              background: "var(--ink-1)", color: "var(--bg)",
              padding: "9px 16px", borderRadius: 999,
              fontSize: 13, fontWeight: 500,
              display: "inline-flex", alignItems: "center", gap: 6,
            }}>
              {t.search_button} <Icon.arrow s={14}/>
            </button>
          </form>

          <div className="pop-chips">
            <span className="pop-chips-label">{t.search_chips}</span>
            {popular.map(p => (
              <button key={p} className="pop-chip" onClick={()=>{setQuery(p); onSearch(p);}}>
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* hero-art removed — full-page video is now the hero visual */}
      </div>
    </section>
  );
}

// ─── Hero moka scene (real video + brand) ────────────────────────────────────
function MokaScene({ t, onNavLocal }) {
  const videoRef = _useRef_s(null);

  // honour reduced-motion: if requested, pause and freeze on first frame
  _useEffect_s(() => {
    const v = videoRef.current;
    if (!v) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { try { v.pause(); v.currentTime = 0.01; } catch(e){} }
  }, []);

  return (
    <div className="moka-scene">
      <div className="moka-frame">
        <video
          ref={videoRef}
          className="moka-video"
          src="assets/coffee-pour.mp4"
          autoPlay loop muted playsInline preload="auto"
          aria-hidden="true"
        />
        {/* warm vignette + grain overlay */}
        <div className="moka-vignette" aria-hidden></div>
        <div className="moka-grain" aria-hidden></div>

        {/* extra animated steam on top of the video */}
        <div className="moka-steam-wrap" aria-hidden>
          <span className="moka-steam ms1"></span>
          <span className="moka-steam ms2"></span>
          <span className="moka-steam ms3"></span>
          <span className="moka-steam ms4"></span>
          <span className="moka-steam ms5"></span>
        </div>

        {/* logo medallion floating top-left */}
        <div className="moka-medallion" aria-hidden>
          <img src="assets/cash-cafe-logo.png" alt=""/>
        </div>

        {/* CTA pill bottom-right */}
        <button onClick={onNavLocal} className="moka-cta">
          <span className="moka-cta-dot"/>
          {t.featured_kicker}
          <Icon.arrow s={12}/>
        </button>

        {/* tiny editorial caption */}
        <div className="moka-caption">
          <span className="moka-caption-num">01</span>
          <span className="moka-caption-text">MOKA · LA CASA</span>
        </div>
      </div>
    </div>
  );
}

// ─── Featured local café (mom's place) ────────────────────────────────────────
function FeaturedLocal({ t, lang, cafe, sectionRef }) {
  const desc = lang === "es" ? cafe.description_es : cafe.description_en;
  const hours = lang === "es" ? cafe.hours : cafe.hours_en;

  return (
    <section ref={sectionRef} style={{ padding: "32px 0 72px" }}>
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">{t.featured_eyebrow}</div>
          <h2 className="section-title">{cafe.name}</h2>
        </div>

        <article className="featured-card">
          {/* left: photo collage with map preview */}
          <div className="featured-media">
            <img
              src="assets/cashcafe-hero.png"
              alt={cafe.name + " — " + cafe.city}
              loading="lazy"
              style={{ width: "100%", aspectRatio: "4 / 5", objectFit: "cover", borderRadius: 14, display: "block", border: "0.5px solid var(--line)" }}
              onError={(e) => { e.target.style.display = "none"; e.target.nextSibling && (e.target.nextSibling.style.display = "block"); }}
            />
            <div style={{ display: "none" }}>
              <EditorialPlaceholder
                label={cafe.name}
                hue={22} sat={28} aspect="4 / 5"
                caption={`PORTRAIT · ${cafe.city.toUpperCase()}`}
              />
            </div>
            <div className="featured-map">
              <MapPreview address={cafe.address}/>
            </div>
          </div>

          {/* right: details */}
          <div className="featured-body">
            <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--ink-3)", fontSize: 13 }}>
              <Icon.pin s={14}/>{cafe.city} · {cafe.priceLevel}
            </div>

            <h3 className="featured-name">{cafe.name}</h3>

            <div className="featured-rating">
              <Stars value={cafe.rating} size={16} />
              <span style={{ fontWeight: 600, color: "var(--ink-1)" }}>{cafe.rating.toFixed(1)}</span>
              <span style={{ color: "var(--ink-3)" }}>· {cafe.reviews} {t.featured_reviews}</span>
              <span style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 6,
                color: "var(--ok)", fontSize: 12, fontWeight: 500 }}>
                <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--ok)" }}/>
                {t.featured_hours_open} · {t.featured_hours_closes} {cafe.closesAt}
              </span>
            </div>

            <p className="featured-desc">{desc}</p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 14 }}>
              {cafe.tags.map(tg => (
                <Tag key={tg}>{t["tag_"+tg]}</Tag>
              ))}
            </div>

            {/* signature menu */}
            <div className="featured-signature">
              <div className="micro">{t.featured_signature}</div>
              <ul>
                {cafe.signature.map((s, i) => (
                  <li key={i}><span>·</span> {s}</li>
                ))}
              </ul>
            </div>

            {/* hours */}
            <div className="featured-hours">
              {hours.map(([d, h], i) => (
                <div key={i} className="featured-hours-row">
                  <span>{d}</span><span>{h}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="featured-actions">
              <button className="btn-primary">
                <Icon.arrow s={14}/> {t.featured_cta_directions}
              </button>
              <button className="btn-ghost">
                <Icon.bookmark s={14}/> {t.featured_cta_save}
              </button>
              <a href={cafe.instagram} target="_blank" rel="noopener" className="btn-ghost" style={{ textDecoration: "none" }}>
                <Icon.ext s={14}/> Instagram
              </a>
              <span className="featured-source">
                <Icon.ext s={11}/> Google Business Profile
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

// ─── Hand-drawn map preview (no external lib) ─────────────────────────────────
function MapPreview({ address }) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice"
        style={{ width: "100%", height: "100%", display: "block",
          background: "var(--surface-2)" }}>
        {/* abstract street grid */}
        <g stroke="var(--line-strong)" strokeWidth="0.6" fill="none" opacity=".75">
          <path d="M-20 60 L420 30"/>
          <path d="M-20 110 L420 88"/>
          <path d="M-20 170 L420 152"/>
          <path d="M-20 230 L420 220"/>
          <path d="M40 -10 L60 280"/>
          <path d="M140 -10 L155 280"/>
          <path d="M240 -10 L260 280"/>
          <path d="M330 -10 L348 280"/>
        </g>
        <g stroke="var(--accent)" strokeWidth="1.4" fill="none" opacity=".8">
          <path d="M-20 110 L420 88"/>
        </g>
        {/* park block */}
        <rect x="60" y="115" width="80" height="55" fill="var(--accent-soft)" opacity=".4"/>
        {/* pin */}
        <g transform="translate(210,118)">
          <circle r="22" fill="var(--accent)" opacity=".15"/>
          <circle r="13" fill="var(--accent)" opacity=".25"/>
          <circle r="6" fill="var(--accent)" stroke="var(--bg)" strokeWidth="1.5"/>
        </g>
      </svg>
      <div style={{
        position: "absolute", left: 10, bottom: 10, right: 10,
        display: "flex", alignItems: "center", gap: 6,
        fontSize: 11, color: "var(--ink-2)",
        background: "color-mix(in oklab, var(--bg) 86%, transparent)",
        backdropFilter: "blur(6px)",
        padding: "6px 9px", borderRadius: 8,
        border: "0.5px solid var(--line)",
      }}>
        <Icon.pin s={12}/>
        <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {address}
        </span>
      </div>
      <div style={{
        position: "absolute", right: 10, top: 10,
        fontSize: 9, letterSpacing: ".08em", textTransform: "uppercase",
        fontFamily: "ui-monospace, monospace",
        color: "var(--ink-3)",
      }}>
        Google Maps
      </div>
    </div>
  );
}

// ─── About Us section ────────────────────────────────────────────────────────
function AboutUs({ t, lang, sectionRef }) {
  return (
    <section ref={sectionRef} style={{ padding: "48px 0 64px" }}>
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">{t.about_eyebrow}</div>
          <h2 className="section-title">{t.about_title}</h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 32,
          marginTop: 28,
          maxWidth: 720,
        }}>
          <p className="lede" style={{ fontSize: 17, lineHeight: 1.65 }}>
            {t.about_lead}
          </p>

          <div style={{ display: "grid", gap: 18 }}>
            <p style={{ color: "var(--ink-2)", fontSize: 15, lineHeight: 1.6, margin: 0 }}>
              {t.about_body_1}
            </p>
            <p style={{ color: "var(--ink-2)", fontSize: 15, lineHeight: 1.6, margin: 0 }}>
              {t.about_body_2}
            </p>
          </div>

          {/* rating badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "10px 16px",
            borderRadius: 12,
            border: "0.5px solid var(--line)",
            background: "var(--surface-1)",
            width: "fit-content",
          }}>
            <Stars value={4.7} size={16} />
            <span style={{ fontWeight: 600, color: "var(--ink-1)", fontSize: 15 }}>4.7</span>
            <span style={{ color: "var(--ink-3)", fontSize: 13 }}>· Google Maps · Beniel, Murcia</span>
          </div>

          {/* social links */}
          <div style={{ marginTop: 8 }}>
            <div className="micro" style={{ marginBottom: 12 }}>{t.about_social}</div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="https://www.instagram.com/cashcafe2020/" target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "8px 14px", borderRadius: 999,
                  border: "0.5px solid var(--line)", background: "var(--surface-1)",
                  color: "var(--ink-1)", fontSize: 13, fontWeight: 500,
                  textDecoration: "none", cursor: "pointer",
                }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="5"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
                </svg>
                {t.about_instagram}
              </a>
              <a href="https://www.facebook.com/profile.php?id=100063656268498" target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "8px 14px", borderRadius: 999,
                  border: "0.5px solid var(--line)", background: "var(--surface-1)",
                  color: "var(--ink-1)", fontSize: 13, fontWeight: 500,
                  textDecoration: "none", cursor: "pointer",
                }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
                {t.about_facebook}
              </a>
              <a href="https://www.youtube.com/@cashcafe4636" target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "8px 14px", borderRadius: 999,
                  border: "0.5px solid var(--line)", background: "var(--surface-1)",
                  color: "var(--ink-1)", fontSize: 13, fontWeight: 500,
                  textDecoration: "none", cursor: "pointer",
                }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.5 6.9a2.8 2.8 0 0 0-2-2C18.9 4.5 12 4.5 12 4.5s-6.9 0-8.5.4a2.8 2.8 0 0 0-2 2A29 29 0 0 0 1 12a29 29 0 0 0 .5 5.1 2.8 2.8 0 0 0 2 2c1.6.4 8.5.4 8.5.4s6.9 0 8.5-.4a2.8 2.8 0 0 0 2-2A29 29 0 0 0 23 12a29 29 0 0 0-.5-5.1z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
                </svg>
                {t.about_youtube}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── España focus section ────────────────────────────────────────────────────
function SpainFocus({ t, lang, sectionRef, density }) {
  const spainCafes = CAFES.filter(c => c.region === "España");
  return (
    <section ref={sectionRef} className="spain-section">
      <div className="container">
        <div className="spain-head">
          <div>
            <div className="eyebrow">{t.spain_eyebrow}</div>
            <h2 className="section-title">{t.spain_title}</h2>
            <p className="lede" style={{ marginTop: 12, maxWidth: 620 }}>{t.spain_sub}</p>
          </div>
          <div className="spain-count">
            <span className="spain-count-num">{String(spainCafes.length).padStart(2,"0")}</span>
            <span className="spain-count-lbl">{t.spain_count}</span>
          </div>
        </div>

        <div className={`directory-grid ${density === "compact" ? "compact" : ""}`} style={{ marginTop: 36 }}>
          {spainCafes.map((c, i) => (
            <CafeCard key={c.id} cafe={c} t={t} lang={lang} idx={i}/>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Directory ────────────────────────────────────────────────────────────────
function Directory({ t, lang, query, setQuery, sectionRef, density, accent, geo }) {
  const allRegions = ["España", "Europa", "Asia", "Norteamérica", "Latinoamérica", "Oceanía", "África"];
  const allRegions_en = ["Spain", "Europe", "Asia", "North America", "Latin America", "Oceania", "Africa"];
  const regions = lang === "es" ? allRegions : allRegions_en;
  const regionMap = lang === "es"
    ? Object.fromEntries(allRegions.map(r => [r, r]))
    : Object.fromEntries(allRegions.map((r, i) => [r, allRegions_en[i]]));
  const [region, setRegion] = _useState_s(null);

  const haversine = (a, b) => {
    if (!a || !b) return null;
    const R = 6371;
    const toR = (d) => d*Math.PI/180;
    const dLat = toR(b.lat-a.lat), dLng = toR(b.lng-a.lng);
    const x = Math.sin(dLat/2)**2 + Math.cos(toR(a.lat))*Math.cos(toR(b.lat))*Math.sin(dLng/2)**2;
    return 2*R*Math.asin(Math.sqrt(x));
  };

  const q = query.trim().toLowerCase();
  const filtered = _useMemo_s(() => {
    let list = CAFES.filter(c => {
      if (region && regionMap[c.region] !== region) return false;
      if (!q) return true;
      return (c.name + " " + c.city + " " + c.country + " " + (c.specialty_es||"") + " " + (c.specialty_en||"")).toLowerCase().includes(q);
    });
    if (geo) {
      list = list.map(c => ({ ...c, _dist: haversine(geo, { lat: c.lat, lng: c.lng }) }))
                 .sort((a,b) => (a._dist ?? 1e9) - (b._dist ?? 1e9));
    }
    return list;
  }, [q, region, lang, geo]);

  return (
    <section ref={sectionRef} style={{ padding: "16px 0 72px" }}>
      <div className="container">
        <div className="section-head" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div className="eyebrow">{t.directory_eyebrow}</div>
            <h2 className="section-title">{t.directory_title}</h2>
            <p className="lede" style={{ marginTop: 8, maxWidth: 520, fontSize: 15 }}>{t.directory_sub}</p>
          </div>
          <div className="results">
            <span style={{ fontVariantNumeric: "tabular-nums", color: "var(--ink-1)", fontWeight: 500 }}>
              {filtered.length}
            </span>{" "}
            {t.directory_results}
          </div>
        </div>

        {/* region filters + search input mirror */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center",
          marginTop: 22, marginBottom: 28,
          paddingBottom: 18, borderBottom: "0.5px solid var(--line)",
        }}>
          <button onClick={()=>setRegion(null)}
            className={`chip ${!region ? "chip-on" : ""}`}>{t.directory_filter_all}</button>
          {regions.map(r => (
            <button key={r} onClick={()=>setRegion(r === region ? null : r)}
              className={`chip ${region === r ? "chip-on" : ""}`}>{r}</button>
          ))}
          <div style={{
            marginLeft: "auto", display: "flex", alignItems: "center", gap: 8,
            padding: "6px 12px", borderRadius: 999,
            border: "0.5px solid var(--line)", background: "var(--surface-1)",
            minWidth: 220,
          }}>
            <Icon.search s={14}/>
            <input
              value={query} onChange={(e)=>setQuery(e.target.value)}
              placeholder={lang==="es" ? "Filtrar…" : "Filter…"}
              style={{ flex: 1, border: "none", outline: "none", background: "transparent",
                fontSize: 13, color: "var(--ink-1)" }}
            />
            {query && (
              <button onClick={()=>setQuery("")} style={{
                border: "none", background: "transparent", color: "var(--ink-3)",
                cursor: "pointer", padding: 0, display: "inline-flex",
              }}>
                <Icon.close s={12}/>
              </button>
            )}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div style={{
            padding: "60px 20px", textAlign: "center",
            color: "var(--ink-2)", fontSize: 14,
            border: "0.5px dashed var(--line)", borderRadius: 16,
          }}>
            {t.directory_no_results}
          </div>
        ) : (
          <div className={`directory-grid ${density === "compact" ? "compact" : ""}`}>
            {filtered.flatMap((c, i) => {
              const card = <CafeCard key={c.id} cafe={c} t={t} lang={lang} idx={i} distance={c._dist}/>;
              const showAd = (i + 1) % 5 === 0 && i < filtered.length - 1;
              return showAd
                ? [card, <AdSlot key={`ad-${c.id}`} t={t} lang={lang} variant="infeed"/>]
                : [card];
            })}
          </div>
        )}
      </div>
    </section>
  );
}

// ─── Cafe card ────────────────────────────────────────────────────────────────
// Pool de imágenes Pexels gratuitas — cafés, interiores, latte art
const CAFE_IMAGES = [
  "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  "https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  "https://images.pexels.com/photos/1002740/pexels-photo-1002740.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  "https://images.pexels.com/photos/1024359/pexels-photo-1024359.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  "https://images.pexels.com/photos/1137745/pexels-photo-1137745.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  "https://images.pexels.com/photos/1813466/pexels-photo-1813466.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  "https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  "https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  "https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  "https://images.pexels.com/photos/3020919/pexels-photo-3020919.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  "https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  "https://images.pexels.com/photos/2067431/pexels-photo-2067431.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
];

function CafeCard({ cafe, t, lang, idx, distance }) {
  const specialty = lang === "es" ? cafe.specialty_es : cafe.specialty_en;
  const quote = lang === "es" ? cafe.quote_es : cafe.quote_en;
  const imgSrc = CAFE_IMAGES[idx % CAFE_IMAGES.length];
  const gmapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(cafe.name + " " + cafe.city + " " + cafe.country)}`;
  const [imgError, setImgError] = _useState_s(false);
  return (
    <article className="cafe-card">
      <a href={gmapsUrl} target="_blank" rel="noopener noreferrer" className="cafe-photo" style={{ display: "block", textDecoration: "none" }} title={lang === "es" ? `Ver ${cafe.name} en Google Maps` : `View ${cafe.name} on Google Maps`}>
        {!imgError ? (
          <img
            src={imgSrc}
            alt={`${cafe.name} — ${cafe.city}`}
            loading="lazy"
            onError={() => setImgError(true)}
            style={{ width: "100%", aspectRatio: "4 / 3", objectFit: "cover", borderRadius: "inherit", display: "block" }}
          />
        ) : (
          <EditorialPlaceholder
            label={cafe.name}
            hue={cafe.hue}
            sat={28}
            aspect="4 / 3"
            caption={`#${String(idx+1).padStart(2,"0")} · ${cafe.city.toUpperCase()}`}
          />
        )}
        {distance != null && (
          <span className="cafe-distance">{distance < 1 ? `${Math.round(distance*1000)} m` : `${distance.toFixed(1)} km`}</span>
        )}
        <span className="cafe-rating-badge">
          <Stars value={cafe.rating} size={11} gap={1}/>
          <span style={{ fontWeight: 600 }}>{cafe.rating.toFixed(1)}</span>
        </span>
        <span style={{
          position: "absolute", bottom: 8, right: 8,
          background: "rgba(0,0,0,.65)", color: "#fff",
          fontSize: 11, fontWeight: 500, padding: "4px 10px",
          borderRadius: 999, display: "inline-flex", alignItems: "center", gap: 4,
          backdropFilter: "blur(6px)",
        }}>
          <Icon.pin s={10}/> Maps
        </span>
      </a>
      <div className="cafe-body">
        <div className="cafe-loc">
          <Icon.pin s={11}/> {cafe.city}, {cafe.country}
        </div>
        <h3 className="cafe-name">{cafe.name}</h3>
        {specialty && (
          <div className="cafe-specialty">
            <span className="cafe-specialty-label">{t.why_special}</span>
            <span className="cafe-specialty-text">{specialty}</span>
          </div>
        )}
        {quote && (
          <blockquote className="cafe-quote">
            {quote}
            <cite>— {t.review_quote}</cite>
          </blockquote>
        )}
        <div className="cafe-tags">
          {cafe.tags.slice(0,3).map(tg => (
            <Tag key={tg}>{t["tag_"+tg]}</Tag>
          ))}
        </div>
      </div>
    </article>
  );
}

// ─── Affiliate row (the barista's shop) ───────────────────────────────────────
function AffiliateRow({ t, lang }) {
  const badgeLabel = (b) => {
    const map = {
      es: { best: "Más vendido", editor: "Elección editorial", fresh: "Recién tostado", favorite: "Favorito" },
      en: { best: "Best seller", editor: "Editor's pick", fresh: "Freshly roasted", favorite: "Favorite" },
    };
    return map[lang][b] || "";
  };
  return (
    <section style={{ padding: "16px 0 64px" }}>
      <div className="container">
        <div className="section-head" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div>
            <div className="eyebrow">{t.affiliate_eyebrow}</div>
            <h2 className="section-title">{t.affiliate_title}</h2>
            <p className="lede" style={{ marginTop: 8, fontSize: 14, maxWidth: 540 }}>{t.affiliate_sub}</p>
          </div>
          <div className="affiliate-meta">
            <span className="affiliate-meta-dot" aria-hidden/>
            <span>{lang === "es" ? "Enlaces de afiliado · Amazon" : "Affiliate links · Amazon"}</span>
          </div>
        </div>

        <div className="affiliate-grid">
          {AFFILIATES.map((a, i) => (
            <a key={a.id} className="affiliate-card" href={a.url || "#"} target="_blank" rel="noopener sponsored">
              <div className="affiliate-thumb">
                <EditorialPlaceholder
                  label=""
                  hue={a.hue} sat={20} aspect="1 / 1"
                  caption={a.brand.toUpperCase()}
                />
                {a.badge && (
                  <span className={`affiliate-badge affiliate-badge-${a.badge}`}>
                    {badgeLabel(a.badge)}
                  </span>
                )}
              </div>
              <div className="affiliate-body">
                <div className="affiliate-cat">{t["affiliate_cat_" + a.cat]}</div>
                <h4>{a.brand} <span className="affiliate-model">{a.model}</span></h4>
                <p>{lang === "es" ? a.note_es : a.note_en}</p>
                <div className="affiliate-rating">
                  <Stars value={a.rating} size={12} gap={1}/>
                  <span className="affiliate-rating-num">{a.rating.toFixed(1)}</span>
                  <span className="affiliate-rating-count">({a.reviews.toLocaleString()})</span>
                </div>
                <div className="affiliate-foot">
                  <div className="affiliate-price-wrap">
                    <span className="affiliate-price">{a.price}</span>
                    {a.oldPrice && <span className="affiliate-price-old">{a.oldPrice}</span>}
                  </div>
                  <span className="affiliate-cta">{t.affiliate_cta} <Icon.ext s={11}/></span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <p className="affiliate-disclaimer">{t.affiliate_disclaimer}</p>
      </div>
    </section>
  );
}

// ─── Ad slot (Google AdSense placeholder) ─────────────────────────────────────
// variant: "leaderboard" (full-width 728x90-ish), "infeed" (sits in directory grid),
//          "square" (300x250 sidebar/inline), "skinny" (narrow strip).
function AdSlot({ t, variant = "leaderboard", lang }) {
  const sizeLabel = {
    leaderboard: "728 × 90",
    infeed: "In-Feed Native",
    square: "300 × 250",
    skinny: "468 × 60",
  }[variant];
  return (
    <aside className={`ad-slot ad-${variant}`} aria-label="Advertisement">
      <div className="ad-disclosure">
        <span className="ad-disclosure-tag">{t.ad_disclosure}</span>
        <span className="ad-disclosure-meta">Google AdSense · {sizeLabel}</span>
      </div>
      <div className="ad-canvas" aria-hidden>
        <div className="ad-canvas-marks">
          <span className="ad-corner ad-corner-tl"/>
          <span className="ad-corner ad-corner-tr"/>
          <span className="ad-corner ad-corner-bl"/>
          <span className="ad-corner ad-corner-br"/>
        </div>
        <div className="ad-canvas-inner">
          <span className="ad-canvas-label">{t.ad_label}</span>
          <span className="ad-canvas-size">{sizeLabel}</span>
        </div>
      </div>
    </aside>
  );
}

// ─── Chill Zone ───────────────────────────────────────────────────────────────
// ─── YouTube Channel Section ─────────────────────────────────────────────────
function YouTubeSection({ t, lang, sectionRef }) {
  return (
    <section ref={sectionRef} style={{
      padding: "64px 0 80px",
      borderTop: "0.5px solid var(--line)",
    }}>
      <div className="container">
        <div className="eyebrow">YouTube</div>
        <h2 className="section-title" style={{ marginTop: 6 }}>
          {lang === "es" ? "La ciencia del café, en vídeo" : "Coffee science, on video"}
        </h2>
        <p className="lede" style={{ marginTop: 10, maxWidth: 560, fontSize: 15 }}>
          {lang === "es"
            ? "Documentales cortos sobre la ciencia del café, los orígenes del grano y los métodos de preparación. Cada semana un vídeo nuevo."
            : "Short documentaries about coffee science, bean origins, and brewing methods. A new video every week."}
        </p>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24,
          marginTop: 32,
        }} className="yt-section-grid">
          {/* Channel card */}
          <div className="yt-channel-card" style={{ padding: 28, borderRadius: 18 }}>
            <div className="yt-channel-id">
              <div className="yt-avatar">
                <span className="yt-avatar-mark">CC</span>
              </div>
              <div className="yt-channel-info">
                <div className="yt-channel-name">Cash Café</div>
                <div className="yt-channel-handle">@cashcafe4636</div>
              </div>
            </div>
            <p className="yt-pitch" style={{ marginTop: 16 }}>
              {lang === "es"
                ? "¿Por qué el agua importa más que el grano? ¿Cómo funciona realmente el espresso? La ciencia detrás de tu café de cada día, explicada con rigor y sin rodeos."
                : "Why does water matter more than the bean? How does espresso actually work? The science behind your daily coffee, explained with rigor and no fluff."}
            </p>
            <a href="https://www.youtube.com/@cashcafe4636" target="_blank" rel="noopener"
               className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 18 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg>
              {lang === "es" ? "Suscribirse al canal" : "Subscribe to the channel"}
            </a>
          </div>

          {/* Upcoming topics */}
          <div style={{
            background: "var(--surface-1)", border: "0.5px solid var(--line)",
            borderRadius: 18, padding: 28,
            backdropFilter: "blur(16px) saturate(140%)",
          }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>
              {lang === "es" ? "Próximos vídeos" : "Coming soon"}
            </div>
            {[
              { es: "¿Por qué tu café sabe diferente cada día?", en: "Why does your coffee taste different every day?" },
              { es: "La ciencia del espresso: 9 bares de presión", en: "Espresso science: 9 bars of pressure" },
              { es: "Guía de molinillos por menos de 200€", en: "Grinder guide under €200" },
              { es: "¿Es mejor el café de tueste claro?", en: "Is light roast coffee actually better?" },
              { es: "Agua para café: lo que nadie te cuenta", en: "Water for coffee: what nobody tells you" },
            ].map((topic, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 12,
                padding: "12px 0",
                borderBottom: i < 4 ? "0.5px solid var(--line)" : "none",
              }}>
                <span style={{
                  fontFamily: "ui-monospace, monospace", fontSize: 11,
                  color: "var(--accent)", fontWeight: 600, minWidth: 28,
                }}>{String(i+1).padStart(2,"0")}</span>
                <span style={{ fontSize: 14, color: "var(--ink-1)" }}>
                  {lang === "es" ? topic.es : topic.en}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Social links */}
        <div style={{
          display: "flex", gap: 20, marginTop: 28, flexWrap: "wrap",
          fontSize: 13, color: "var(--ink-2)",
        }}>
          <a href="https://www.instagram.com/cashcafe2020/" target="_blank" rel="noopener" style={{ ...navLink, display: "inline-flex", alignItems: "center", gap: 6 }}>
            Instagram · @cashcafe2020 <Icon.ext s={11}/>
          </a>
          <a href="https://www.facebook.com/cashcafe" target="_blank" rel="noopener" style={{ ...navLink, display: "inline-flex", alignItems: "center", gap: 6 }}>
            Facebook <Icon.ext s={11}/>
          </a>
          <a href="https://flow.page/cashcafe" target="_blank" rel="noopener" style={{ ...navLink, display: "inline-flex", alignItems: "center", gap: 6 }}>
            Todos los enlaces <Icon.ext s={11}/>
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Cookie Banner (GDPR) ────────────────────────────────────────────────────
function CookieBanner({ lang }) {
  const [accepted, setAccepted] = _useState_s(() => {
    try { return localStorage.getItem("cc_cookies") === "ok"; } catch { return false; }
  });
  if (accepted) return null;
  const accept = () => {
    try { localStorage.setItem("cc_cookies", "ok"); } catch {}
    setAccepted(true);
  };
  return (
    <div style={{
      position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 999,
      background: "rgba(15, 8, 3, 0.95)",
      backdropFilter: "blur(20px) saturate(140%)",
      borderTop: "0.5px solid var(--line)",
      padding: "18px 28px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      flexWrap: "wrap", gap: 16,
    }}>
      <p style={{ fontSize: 13, color: "var(--ink-2)", maxWidth: 680, margin: 0, lineHeight: 1.5 }}>
        {lang === "es"
          ? "Usamos cookies propias y de terceros (Google AdSense, Amazon Afiliados) para analítica y personalización de anuncios. Al continuar navegando, aceptas su uso."
          : "We use our own and third-party cookies (Google AdSense, Amazon Affiliates) for analytics and ad personalization. By continuing to browse, you accept their use."}
        {" "}
        <a href="#" onClick={(e)=>{e.preventDefault();}} style={{ color: "var(--accent)", textDecoration: "underline" }}>
          {lang === "es" ? "Política de cookies" : "Cookie policy"}
        </a>
      </p>
      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={accept} className="btn-primary" style={{ fontSize: 12, padding: "8px 18px" }}>
          {lang === "es" ? "Aceptar" : "Accept"}
        </button>
        <button onClick={accept} className="btn-ghost" style={{ fontSize: 12, padding: "8px 18px" }}>
          {lang === "es" ? "Solo necesarias" : "Essential only"}
        </button>
      </div>
    </div>
  );
}

// ─── Legal Page ──────────────────────────────────────────────────────────────
function LegalPage({ t, lang, onNav }) {
  return (
    <div className="container" style={{ padding: "48px 0 80px", maxWidth: 740, margin: "0 auto" }}>
      <button onClick={() => onNav("home")} className="chip" style={{ marginBottom: 24 }}>
        ← {lang === "es" ? "Volver" : "Back"}
      </button>

      <h1 className="section-title">{lang === "es" ? "Aviso Legal" : "Legal Notice"}</h1>
      <div style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.7, marginTop: 24 }}>
        {lang === "es" ? (
          <React.Fragment>
            <h3 style={{ color: "var(--ink-1)", marginTop: 32 }}>Titular del sitio web</h3>
            <p>Cash Café · Av. del Reino, 16 · 30130 Beniel, Murcia, España.</p>
            <p>Email de contacto: partners@cashcafe.es</p>

            <h3 style={{ color: "var(--ink-1)", marginTop: 32 }}>Política de Privacidad</h3>
            <p>En cumplimiento del Reglamento General de Protección de Datos (RGPD - UE 2016/679) y la Ley Orgánica 3/2018 (LOPDGDD), informamos:</p>
            <p><strong>Datos recogidos:</strong> Únicamente el email proporcionado voluntariamente en el formulario de newsletter. No se recogen datos personales de otra forma.</p>
            <p><strong>Finalidad:</strong> Envío del boletín semanal con recomendaciones de cafeterías.</p>
            <p><strong>Base legal:</strong> Consentimiento explícito del usuario al suscribirse.</p>
            <p><strong>Conservación:</strong> Hasta que el usuario solicite la baja.</p>
            <p><strong>Derechos:</strong> Acceso, rectificación, supresión, portabilidad y oposición. Puedes ejercerlos escribiendo a partners@cashcafe.es.</p>
            <p><strong>Cesión a terceros:</strong> No se ceden datos a terceros salvo obligación legal.</p>

            <h3 style={{ color: "var(--ink-1)", marginTop: 32 }}>Política de Cookies</h3>
            <p>Este sitio utiliza:</p>
            <ul style={{ paddingLeft: 20 }}>
              <li><strong>Cookies técnicas (propias):</strong> Preferencia de idioma y aceptación de cookies. Estrictamente necesarias.</li>
              <li><strong>Cookies analíticas (Google Analytics):</strong> Para medir tráfico y comportamiento de forma agregada y anónima.</li>
              <li><strong>Cookies publicitarias (Google AdSense):</strong> Para mostrar anuncios relevantes según intereses del usuario.</li>
              <li><strong>Cookies de afiliación (Amazon):</strong> Para atribuir compras realizadas a través de enlaces de afiliado.</li>
            </ul>
            <p>Puedes gestionar o rechazar cookies desde la configuración de tu navegador. La desactivación de cookies de terceros no afecta la funcionalidad del sitio.</p>

            <h3 style={{ color: "var(--ink-1)", marginTop: 32 }}>Programa de Afiliados</h3>
            <p>Cash Café participa en el Programa de Afiliados de Amazon EU, diseñado para proporcionar un medio para obtener comisiones por enlazar a Amazon.es. Los enlaces de producto incluyen un identificador de afiliado.</p>

            <h3 style={{ color: "var(--ink-1)", marginTop: 32 }}>Propiedad intelectual</h3>
            <p>Los textos, diseño y estructura del sitio son propiedad de Cash Café. Las imágenes de cafeterías pertenecen a sus respectivos propietarios y se usan con fines editoriales.</p>

            <h3 style={{ color: "var(--ink-1)", marginTop: 32 }}>Limitación de responsabilidad</h3>
            <p>La información sobre cafeterías (horarios, precios, especialidades) es orientativa y puede variar. Cash Café no se responsabiliza de posibles inexactitudes.</p>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h3 style={{ color: "var(--ink-1)", marginTop: 32 }}>Website owner</h3>
            <p>Cash Café · Av. del Reino, 16 · 30130 Beniel, Murcia, Spain.</p>
            <p>Contact email: partners@cashcafe.es</p>

            <h3 style={{ color: "var(--ink-1)", marginTop: 32 }}>Privacy Policy</h3>
            <p>In compliance with the General Data Protection Regulation (GDPR - EU 2016/679), we inform you:</p>
            <p><strong>Data collected:</strong> Only the email voluntarily provided via the newsletter form. No other personal data is collected.</p>
            <p><strong>Purpose:</strong> Sending the weekly newsletter with café recommendations.</p>
            <p><strong>Legal basis:</strong> Explicit user consent upon subscribing.</p>
            <p><strong>Retention:</strong> Until the user requests unsubscription.</p>
            <p><strong>Rights:</strong> Access, rectification, erasure, portability, and objection. Exercise them by writing to partners@cashcafe.es.</p>
            <p><strong>Third-party sharing:</strong> Data is not shared with third parties except when legally required.</p>

            <h3 style={{ color: "var(--ink-1)", marginTop: 32 }}>Cookie Policy</h3>
            <p>This site uses:</p>
            <ul style={{ paddingLeft: 20 }}>
              <li><strong>Technical cookies (own):</strong> Language preference and cookie acceptance. Strictly necessary.</li>
              <li><strong>Analytics cookies (Google Analytics):</strong> To measure traffic and behavior in aggregate and anonymous form.</li>
              <li><strong>Advertising cookies (Google AdSense):</strong> To display relevant ads based on user interests.</li>
              <li><strong>Affiliate cookies (Amazon):</strong> To attribute purchases made through affiliate links.</li>
            </ul>
            <p>You can manage or reject cookies from your browser settings. Disabling third-party cookies does not affect site functionality.</p>

            <h3 style={{ color: "var(--ink-1)", marginTop: 32 }}>Affiliate Program</h3>
            <p>Cash Café participates in the Amazon EU Associates Program, designed to provide a means to earn commissions by linking to Amazon.es. Product links include an affiliate identifier.</p>

            <h3 style={{ color: "var(--ink-1)", marginTop: 32 }}>Intellectual property</h3>
            <p>Text, design, and site structure are property of Cash Café. Café images belong to their respective owners and are used for editorial purposes.</p>

            <h3 style={{ color: "var(--ink-1)", marginTop: 32 }}>Disclaimer</h3>
            <p>Information about cafés (hours, prices, specialties) is indicative and may vary. Cash Café is not responsible for possible inaccuracies.</p>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer({ t, lang, onNav }) {
  return (
    <footer style={{
      borderTop: "0.5px solid var(--line)",
      padding: "40px 0 60px",
      marginTop: 40,
    }}>
      <div className="container" style={{ display: "flex", flexWrap: "wrap", gap: 20, justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <Logo/>
          <p className="lede" style={{ fontSize: 13, marginTop: 12, maxWidth: 360 }}>
            {t.footer_made}
          </p>
        </div>
        <div style={{ display: "flex", gap: 28, fontSize: 13, color: "var(--ink-2)" }}>
          <a href="#" onClick={(e)=>{e.preventDefault(); onNav && onNav("directory");}} style={navLink}>{t.nav_directory}</a>
          <a href="#" onClick={(e)=>{e.preventDefault(); onNav && onNav("blog");}} style={navLink}>{lang === "es" ? "Blog" : "Blog"}</a>
          <a href="https://www.youtube.com/@cashcafe4636" target="_blank" rel="noopener" style={navLink}>YouTube</a>
          <a href="https://www.instagram.com/cashcafe2020/" target="_blank" rel="noopener" style={navLink}>Instagram</a>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, fontSize: 12, color: "var(--ink-2)" }}>
          <span style={{ color: "var(--ink-3)", fontWeight: 600 }}>{lang === "es" ? "Nuestras webs:" : "Our sites:"}</span>
          <a href="https://vida-sana-360.com" target="_blank" rel="noopener" style={navLink}>VidaSana360</a>
          <a href="https://saludlongevidad.org" target="_blank" rel="noopener" style={navLink}>SaludLongevidad</a>
          <a href="https://finanzasclara.uk" target="_blank" rel="noopener" style={navLink}>FinanzasClara</a>
          <a href="https://catbrothers.uk" target="_blank" rel="noopener" style={navLink}>CatBrothers</a>
          <a href="https://espaciointeligente.org" target="_blank" rel="noopener" style={navLink}>Espacio Inteligente</a>
        </div>
        <div style={{ display: "flex", gap: 20, fontSize: 12, color: "var(--ink-3)" }}>
          <a href="#" onClick={(e)=>{e.preventDefault(); onNav && onNav("legal");}} style={navLink}>
            {lang === "es" ? "Aviso Legal · Privacidad · Cookies" : "Legal · Privacy · Cookies"}
          </a>
        </div>
        <div className="micro">{t.footer_legal}</div>
      </div>
    </footer>
  );
}

// ─── Near-me geo strip ────────────────────────────────────────────────────────
function NearMeBar({ t, lang, geo, setGeo, geoState, setGeoState }) {
  const onUseGeo = () => {
    if (!navigator.geolocation) { setGeoState("denied"); return; }
    setGeoState("loading");
    navigator.geolocation.getCurrentPosition(
      (pos) => { setGeo({ lat: pos.coords.latitude, lng: pos.coords.longitude }); setGeoState("ok"); },
      () => setGeoState("denied"),
      { timeout: 8000, maximumAge: 60000 }
    );
  };
  return (
    <section className="nearme-bar">
      <div className="container nearme-grid">
        <div>
          <div className="eyebrow">{t.nearme_eyebrow}</div>
          <h3 className="nearme-title">{t.nearme_title}</h3>
          <p className="nearme-sub">{t.nearme_sub}</p>
        </div>
        <div className="nearme-cta-wrap">
          {geoState === "ok" ? (
            <div className="nearme-active">
              <span className="dot-live" style={{ background: "var(--ok)", boxShadow: "0 0 8px var(--ok)" }}/>
              {t.nearme_active}
              <button className="chip" onClick={()=>{setGeo(null); setGeoState("idle");}}>{t.nearme_clear}</button>
            </div>
          ) : geoState === "denied" ? (
            <div className="nearme-denied">{t.nearme_denied}</div>
          ) : (
            <button className="btn-primary" onClick={onUseGeo} disabled={geoState==="loading"}>
              <Icon.pin s={14}/> {geoState === "loading" ? t.nearme_loading : t.nearme_cta}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── Newsletter (lead magnet for monetization) ───────────────────────────────
function Newsletter({ t, lang }) {
  const [email, setEmail] = _useState_s("");
  const [done, setDone] = _useState_s(false);
  return (
    <section className="newsletter-section">
      <div className="container newsletter-grid">
        <div>
          <div className="eyebrow">{t.newsletter_eyebrow}</div>
          <h2 className="section-title" style={{ marginTop: 6 }}>{t.newsletter_title}</h2>
          <p className="lede" style={{ marginTop: 10, maxWidth: 480, fontSize: 15 }}>{t.newsletter_sub}</p>
        </div>
        <form className="newsletter-form" onSubmit={(e)=>{e.preventDefault(); if(email) setDone(true);}}>
          {done ? (
            <div className="newsletter-done"><span className="dot-live" style={{ background: "var(--ok)" }}/> {t.newsletter_done}</div>
          ) : (
            <>
              <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)}
                placeholder={t.newsletter_placeholder} className="newsletter-input"/>
              <button className="btn-primary" type="submit">{t.newsletter_cta} <Icon.arrow s={14}/></button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

// ─── Sponsor strip (premium monetization slot) ────────────────────────────────
function SponsorStrip({ t, lang }) {
  return (
    <div className="container">
      <div className="sponsor-strip">
        <div className="sponsor-left">
          <span className="micro">{t.sponsor_label}</span>
          <span className="sponsor-brand">— Tu marca —</span>
        </div>
        <div className="sponsor-pitch">{t.sponsor_pitch}</div>
        <a href="mailto:partners@cashcafe.es" className="sponsor-cta">
          partners@cashcafe.es <Icon.ext s={11}/>
        </a>
      </div>
    </div>
  );
}

Object.assign(window, {
  TopBar, Hero, MokaScene, FeaturedLocal, MapPreview, AboutUs, Directory, CafeCard,
  SpainFocus, AffiliateRow, AdSlot, YouTubeSection, CookieBanner, LegalPage, Footer,
  NearMeBar, Newsletter, SponsorStrip,
});
