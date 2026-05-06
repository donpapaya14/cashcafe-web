// blog-data.jsx — articles + categories + sample article body for the Blog
//
// Categories (es / en, slug-keyed):
//   guides   → Guías de compra / Buying guides
//   recipes  → Recetas / Recipes
//   culture  → Cultura / Culture
//   gear     → Maquinaria / Gear
//
// All articles share: id, slug, category, hue, date (ISO),
// readTime (minutes), author, title_es/_en, excerpt_es/_en, body (only for the
// "open" article — the rest are list-only). The hue drives the placeholder color.

const BLOG_CATEGORIES = [
  { slug: "guides",  label_es: "Guías de compra", label_en: "Buying guides", hue: 28 },
  { slug: "recipes", label_es: "Recetas",         label_en: "Recipes",       hue: 22 },
  { slug: "culture", label_es: "Cultura",         label_en: "Culture",       hue: 36 },
  { slug: "gear",    label_es: "Maquinaria",      label_en: "Gear",          hue: 18 },
];

// Authors share a tiny pool — keeps the byline from feeling slop-generated.
const BLOG_AUTHORS = {
  ana:    { name: "Ana Rivero",     role_es: "Editora",       role_en: "Editor",        initials: "AR" },
  marcos: { name: "Marcos Llovera", role_es: "Barista jefe",  role_en: "Head barista",  initials: "ML" },
  lucia:  { name: "Lucía Pardo",    role_es: "Catadora Q",    role_en: "Q grader",      initials: "LP" },
  david:  { name: "David Aguilar",  role_es: "Tostador",      role_en: "Roaster",       initials: "DA" },
};

const BLOG_ARTICLES = [
  // ══════════════════════════════════════════════════════════════════════════
  // 1. FEATURED — Espresso en casa (existing, full body)
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "post-espresso-home",
    slug: "como-hacer-espresso-en-casa",
    category: "guides",
    hue: 22,
    date: "2026-04-28",
    readTime: 7,
    author: "marcos",
    featured: true,
    title_es: "Cómo hacer un espresso perfecto en casa (sin gastar una fortuna)",
    title_en: "How to pull a perfect espresso at home (without breaking the bank)",
    excerpt_es:
      "Tres baristas, una semana de pruebas y todas las molturaciones que cabían en la barra. La guía honesta para empezar a sacar shots dignos en tu cocina.",
    excerpt_en:
      "Three baristas, a week of pulls and every grind setting we could try. The honest guide to pulling decent shots from your kitchen.",
    relatedAffiliateId: "a1",
    body_es: [
      { kind: "lede",
        text: "Hacer un buen espresso en casa no es magia ni cuestión de gastar 2.000 €. Es un puñado de variables que, una vez ordenadas, se convierten en rutina. Esta es la guía que nos hubiera gustado leer antes de empezar." },
      { kind: "h2", text: "Lo único que de verdad importa" },
      { kind: "p",
        text: "Un espresso decente depende de cuatro cosas, en este orden: café fresco, molienda consistente, dosis controlada y temperatura estable. Si fallas en una, las otras tres no te salvan." },
      { kind: "ul", items: [
        "Café tostado en las últimas 4 semanas — y mejor 2.",
        "Un molinillo de muelas (no de cuchillas, nunca).",
        "Una báscula con precisión de 0.1 g. Sí, es necesaria.",
        "Una cafetera con caldera estable y portafiltros decente.",
      ]},
      { kind: "h2", text: "El ratio que casi siempre funciona" },
      { kind: "p",
        text: "Empieza con 1:2 — es decir, 18 g de café molido para sacar 36 g de bebida en unos 28 segundos. Si sabe ácido y aguado, sube la dosis o muele más fino. Si sabe amargo y seco, baja la dosis o muele más grueso. Cambia una variable a la vez." },
      { kind: "blockquote",
        text: "El espresso es una conversación entre el café y el agua. Tu trabajo es no interrumpir.",
        cite: "Marcos Llovera, barista en La Marzocco Sevilla" },
      { kind: "ad" },
      { kind: "h2", text: "Errores que vemos cada semana" },
      { kind: "p",
        text: "El 80% de los problemas que recibimos por DM se resuelven con tres ajustes muy poco glamurosos: limpiar el portafiltros después de cada shot, calentar la taza antes de servir, y comprar café que indique fecha de tueste, no de caducidad." },
      { kind: "ol", items: [
        "Lava el portafiltros con agua caliente cada vez. Sin pastillas, sin jabón.",
        "Calienta la taza con agua del grupo durante 20 segundos.",
        "Si la bolsa pone «consumir antes de», devuélvela.",
      ]},
      { kind: "h2", text: "¿Necesitas una cafetera cara para empezar?" },
      { kind: "p",
        text: "No. Una semiautomática de 300–400 € hace shots indistinguibles de una máquina de 1.500 € si la acompañas de un molinillo bueno. Repite con nosotros: el molinillo importa más que la cafetera. Si tu presupuesto es limitado, pon más dinero en moler bien." },
      { kind: "p",
        text: "Hemos pasado un mes probando la combinación que recomendamos abajo. Es el setup que regalamos a amigos que empiezan, y el que pondríamos en una segunda residencia sin pensarlo." },
      { kind: "affiliate" },
      { kind: "h2", text: "Próximos pasos" },
      { kind: "p",
        text: "Cuando ya saques tres shots seguidos que te gusten, empieza a jugar con presión y temperatura. Si te ha servido esta guía, suscríbete al boletín — los sábados mandamos una receta nueva." },
    ],
    body_en: [
      { kind: "lede",
        text: "Pulling a good espresso at home isn't magic, and it doesn't require €2,000 of gear. It's a handful of variables that, once you order them, become routine. This is the guide we wish we'd read first." },
      { kind: "h2", text: "The only things that really matter" },
      { kind: "p",
        text: "A decent espresso comes down to four things, in this order: fresh coffee, consistent grind, a controlled dose, and stable temperature. Get one wrong and the other three can't save you." },
      { kind: "ul", items: [
        "Coffee roasted within the last 4 weeks — better still, the last 2.",
        "A burr grinder (never blade — really).",
        "A scale accurate to 0.1 g. Yes, you need it.",
        "A machine with stable boiler and a decent portafilter.",
      ]},
      { kind: "h2", text: "The ratio that almost always works" },
      { kind: "p",
        text: "Start with 1:2 — that means 18 g of ground coffee yielding 36 g of espresso in around 28 seconds. If it tastes sour and watery, raise the dose or grind finer. If it tastes bitter and dry, lower the dose or grind coarser. Change one variable at a time." },
      { kind: "blockquote",
        text: "Espresso is a conversation between coffee and water. Your job is to not interrupt.",
        cite: "Marcos Llovera, barista at La Marzocco Sevilla" },
      { kind: "ad" },
      { kind: "h2", text: "Mistakes we see every week" },
      { kind: "p",
        text: "Eighty percent of the problems people DM us about disappear with three deeply unglamorous fixes: wipe the portafilter after every shot, warm the cup before serving, and only buy coffee that prints a roast date, not an expiration date." },
      { kind: "ol", items: [
        "Rinse the portafilter with hot water after every shot. No tablets, no soap.",
        "Run hot water through the group head into the cup for 20 seconds.",
        "If the bag prints \u201cbest before\u201d only, take it back.",
      ]},
      { kind: "h2", text: "Do you need an expensive machine to start?" },
      { kind: "p",
        text: "No. A €300–400 semi-auto makes shots indistinguishable from a €1,500 machine if you pair it with a good grinder. Say it with us: the grinder matters more than the machine. If your budget is tight, put more money on the grind." },
      { kind: "p",
        text: "We've spent a month testing the combination we recommend below. It's the setup we gift to friends starting out, and the one we'd put in a second home without thinking twice." },
      { kind: "affiliate" },
      { kind: "h2", text: "Next steps" },
      { kind: "p",
        text: "Once you can pull three shots in a row you actually like, start playing with pressure and temperature. If this guide helped you, subscribe to the newsletter — every Saturday we send a fresh recipe." },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 2. Molinillo vs Cafetera (NOW WITH FULL BODY)
  // ══════════════════════════════════════════════════════════════════════════
  { id: "post-grinder-vs-machine", slug: "molinillo-o-cafetera",
    category: "guides", hue: 30, date: "2026-04-21", readTime: 5, author: "ana",
    title_es: "Molinillo o cafetera: dónde poner tu primer dinero",
    title_en: "Grinder or machine: where to put your first euro",
    excerpt_es: "Si tienes 500 € y vienes de la moka, cuál de las dos te dará más alegría primero. Spoiler: no es la cafetera.",
    excerpt_en: "If you've got €500 and you're moving on from the moka pot, which of the two gives you more joy first. Spoiler: not the machine.",
    relatedAffiliateId: "a2",
    body_es: [
      { kind: "lede", text: "Tienes 500 €, una moka que lleva años contigo y ganas de dar el salto. La pregunta que todos hacen: ¿cafetera o molinillo primero? La respuesta lleva décadas siendo la misma." },
      { kind: "h2", text: "El molinillo siempre gana" },
      { kind: "p", text: "Un café recién molido en un molinillo de muelas, preparado en una moka de 25 €, sabe mejor que café premolido en una cafetera de 800 €. No es opinión: es física. El café molido pierde hasta el 60% de sus aromáticos en los primeros 15 minutos." },
      { kind: "ul", items: [
        "Café premolido = aromáticos evaporados antes de llegar a tu taza.",
        "Molinillo de cuchillas = partículas irregulares, extracción desigual, amargor.",
        "Molinillo de muelas = partículas uniformes, extracción limpia, dulzura.",
      ]},
      { kind: "h2", text: "Cómo repartir 500 €" },
      { kind: "p", text: "Nuestro reparto recomendado: 200 € en molinillo, 300 € en cafetera. Con un buen manual como el 1Zpresso JX-Pro y una semiautomática de entrada, tienes un setup que compite con barras de 3.000 €." },
      { kind: "ad" },
      { kind: "h2", text: "¿Y si ya tengo cafetera?" },
      { kind: "p", text: "Entonces todo tu presupuesto va al molinillo. Una Baratza Encore o un manual de gama media transforman cualquier cafetera. El salto de calidad es inmediato y visible desde la primera taza." },
      { kind: "blockquote", text: "He probado cafeteras de 2.000 €. Lo que más cambió mi café fue un molinillo de 180 €.", cite: "Ana Rivero, editora de Cash Café" },
      { kind: "affiliate" },
    ],
    body_en: [
      { kind: "lede", text: "You've got €500, a moka pot that's been with you for years, and an itch to level up. The question everyone asks: machine or grinder first? The answer has been the same for decades." },
      { kind: "h2", text: "The grinder always wins" },
      { kind: "p", text: "Freshly ground coffee from a burr grinder, brewed in a €25 moka pot, tastes better than pre-ground coffee in an €800 machine. It's not opinion — it's physics. Ground coffee loses up to 60% of its aromatics in the first 15 minutes." },
      { kind: "ul", items: [
        "Pre-ground = aromatics gone before reaching your cup.",
        "Blade grinder = uneven particles, uneven extraction, bitterness.",
        "Burr grinder = uniform particles, clean extraction, sweetness.",
      ]},
      { kind: "h2", text: "How to split €500" },
      { kind: "p", text: "Our recommended split: €200 on a grinder, €300 on a machine. A good manual like the 1Zpresso JX-Pro and an entry-level semi-auto gives you a setup that competes with €3,000 bars." },
      { kind: "ad" },
      { kind: "h2", text: "What if I already have a machine?" },
      { kind: "p", text: "Then your entire budget goes to the grinder. A Baratza Encore or mid-range manual transforms any machine. The quality jump is immediate and visible from the very first cup." },
      { kind: "blockquote", text: "I've tried €2,000 machines. What changed my coffee most was a €180 grinder.", cite: "Ana Rivero, Cash Café editor" },
      { kind: "affiliate" },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 3. Flat white (NOW WITH FULL BODY)
  // ══════════════════════════════════════════════════════════════════════════
  { id: "post-flat-white", slug: "flat-white-en-casa",
    category: "recipes", hue: 18, date: "2026-04-15", readTime: 4, author: "marcos",
    title_es: "Flat white en casa, sin lechera profesional",
    title_en: "Flat white at home, without a pro pitcher",
    excerpt_es: "La textura de la leche es el 80% de un flat white. Te enseñamos a conseguirla con material doméstico.",
    excerpt_en: "Milk texture is 80% of a flat white. Here's how to get it with home gear.",
    body_es: [
      { kind: "lede", text: "El flat white no es un latte pequeño. Es leche con microespuma perfecta vertida sobre un doble espresso. La diferencia está en la textura — y sí, puedes conseguirla sin equipo de bar." },
      { kind: "h2", text: "Qué necesitas" },
      { kind: "ul", items: [
        "Doble espresso (o café de moka muy concentrado).",
        "150 ml de leche entera fría (la grasa es clave para la textura).",
        "Espumador de mano o prensa francesa pequeña.",
        "Taza de 150–180 ml precalentada.",
      ]},
      { kind: "h2", text: "El truco de la prensa francesa" },
      { kind: "p", text: "Calienta la leche a 65 °C (cuando el cazo empiece a humear pero antes de hervir). Viértela en una prensa francesa pequeña y bombea 15–20 veces rápido. Golpea la base contra la encimera para eliminar burbujas grandes. Lo que queda es microespuma sedosa." },
      { kind: "ad" },
      { kind: "h2", text: "Vertido" },
      { kind: "p", text: "Prepara tu espresso. Vierte la leche desde unos 5 cm de altura, lento al principio. Cuando la taza esté al 60%, baja la jarra hasta casi tocar la superficie y acelera. La crema sube y se mezcla con la microespuma. Resultado: textura aterciopelada de principio a fin." },
      { kind: "blockquote", text: "Un flat white mediocre es leche con café. Uno bueno es una experiencia táctil.", cite: "Marcos Llovera, barista jefe" },
      { kind: "h2", text: "Errores comunes" },
      { kind: "ol", items: [
        "Leche demasiado caliente — quema las proteínas y pierde dulzura.",
        "Burbujas grandes — eso es capuchino, no flat white.",
        "Taza demasiado grande — un flat white es concentrado, máximo 180 ml.",
      ]},
    ],
    body_en: [
      { kind: "lede", text: "A flat white isn't a small latte. It's milk with perfect microfoam poured over a double espresso. The difference is all texture — and yes, you can nail it without bar equipment." },
      { kind: "h2", text: "What you need" },
      { kind: "ul", items: [
        "Double espresso (or very concentrated moka coffee).",
        "150 ml cold whole milk (fat is key for texture).",
        "Handheld frother or small French press.",
        "150–180 ml cup, preheated.",
      ]},
      { kind: "h2", text: "The French press trick" },
      { kind: "p", text: "Heat milk to 65 °C (when the pan starts steaming but before boiling). Pour into a small French press and pump 15–20 times quickly. Tap the base on the counter to break large bubbles. What's left is silky microfoam." },
      { kind: "ad" },
      { kind: "h2", text: "The pour" },
      { kind: "p", text: "Pull your espresso. Pour the milk from about 5 cm high, slow at first. When the cup is 60% full, lower the pitcher almost to the surface and speed up. The crema rises and blends with the microfoam. Result: velvety texture from start to finish." },
      { kind: "blockquote", text: "A mediocre flat white is milk with coffee. A good one is a tactile experience.", cite: "Marcos Llovera, head barista" },
      { kind: "h2", text: "Common mistakes" },
      { kind: "ol", items: [
        "Milk too hot — burns proteins and loses sweetness.",
        "Large bubbles — that's a cappuccino, not a flat white.",
        "Cup too big — a flat white is concentrated, 180 ml max.",
      ]},
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 4. Tercera ola (list-only, unchanged)
  // ══════════════════════════════════════════════════════════════════════════
  { id: "post-third-wave", slug: "tercera-ola-explicada",
    category: "culture", hue: 36, date: "2026-04-08", readTime: 6, author: "lucia",
    title_es: "Tercera ola: qué significa y por qué te debería importar",
    title_en: "Third wave: what it means and why it matters",
    excerpt_es: "El término se ha vaciado a base de mal uso. Lo recuperamos con ejemplos concretos y nombres propios.",
    excerpt_en: "The term has been hollowed out by misuse. We bring it back with concrete examples and real names." },

  // ══════════════════════════════════════════════════════════════════════════
  // 5. Método V60 (NOW WITH FULL BODY)
  // ══════════════════════════════════════════════════════════════════════════
  { id: "post-v60-method", slug: "metodo-v60",
    category: "recipes", hue: 24, date: "2026-04-02", readTime: 8, author: "lucia",
    title_es: "El método V60 que usan los baristas que entrevistamos",
    title_en: "The V60 method the baristas we interviewed actually use",
    excerpt_es: "Cinco vertidos, una temperatura, una proporción. Una receta repetible para casa, validada por seis cafeterías.",
    excerpt_en: "Five pours, one temperature, one ratio. A repeatable home recipe, validated by six coffee shops.",
    relatedAffiliateId: "a4",
    body_es: [
      { kind: "lede", text: "Preguntamos a seis baristas de cafeterías que aparecen en esta guía: ¿cuál es tu receta V60 para casa? Cinco de seis coincidieron en lo esencial. Esta es esa receta." },
      { kind: "h2", text: "Ingredientes y ratio" },
      { kind: "ul", items: [
        "15 g de café molido medio-grueso (como sal marina).",
        "250 g de agua a 93–96 °C.",
        "Ratio 1:16,7 — funciona con cualquier café de tueste medio.",
        "Filtro V60 enjuagado con agua caliente (elimina sabor a papel).",
      ]},
      { kind: "h2", text: "Los cinco vertidos" },
      { kind: "ol", items: [
        "0:00 — Vierte 50 g. Agita suavemente. Espera 45 segundos (bloom).",
        "0:45 — Vierte hasta 100 g en círculos concéntricos.",
        "1:15 — Vierte hasta 150 g, mismo patrón.",
        "1:45 — Vierte hasta 200 g.",
        "2:15 — Vierte hasta 250 g. Deja drenar.",
      ]},
      { kind: "p", text: "Tiempo total de drenado: entre 3:00 y 3:30. Si drena antes de 2:45, muele más fino. Si pasa de 4:00, muele más grueso." },
      { kind: "ad" },
      { kind: "h2", text: "El bloom es sagrado" },
      { kind: "p", text: "Esos primeros 45 segundos liberan CO₂ del café recién tostado. Si no haces bloom, el gas interfiere con la extracción y el resultado es ácido y plano. Cuanto más fresco el café, más espectacular el bloom." },
      { kind: "blockquote", text: "Si el café no hincha durante el bloom, o es viejo o está molido hace días. Compra mejor.", cite: "Lucía Pardo, catadora Q" },
      { kind: "h2", text: "Errores que arruinan el V60" },
      { kind: "ul", items: [
        "Verter todo el agua de golpe — pierde control sobre la extracción.",
        "Agua hirviendo (100 °C) — quema el café, sabe a caucho.",
        "No enjuagar el filtro — sabor a papel en cada taza.",
        "Molienda demasiado fina — atasco, sobreextracción, amargor.",
      ]},
      { kind: "affiliate" },
    ],
    body_en: [
      { kind: "lede", text: "We asked six baristas from shops featured in this guide: what's your home V60 recipe? Five out of six agreed on the essentials. This is that recipe." },
      { kind: "h2", text: "Ingredients and ratio" },
      { kind: "ul", items: [
        "15 g medium-coarse ground coffee (like sea salt).",
        "250 g water at 93–96 °C.",
        "Ratio 1:16.7 — works with any medium-roast coffee.",
        "V60 filter rinsed with hot water (removes paper taste).",
      ]},
      { kind: "h2", text: "The five pours" },
      { kind: "ol", items: [
        "0:00 — Pour 50 g. Gentle swirl. Wait 45 seconds (bloom).",
        "0:45 — Pour to 100 g in concentric circles.",
        "1:15 — Pour to 150 g, same pattern.",
        "1:45 — Pour to 200 g.",
        "2:15 — Pour to 250 g. Let it drain.",
      ]},
      { kind: "p", text: "Total drain time: between 3:00 and 3:30. If it drains before 2:45, grind finer. If it goes past 4:00, grind coarser." },
      { kind: "ad" },
      { kind: "h2", text: "The bloom is sacred" },
      { kind: "p", text: "Those first 45 seconds release CO₂ from freshly roasted coffee. Skip the bloom and gas interferes with extraction — the result is sour and flat. The fresher the coffee, the more spectacular the bloom." },
      { kind: "blockquote", text: "If the coffee doesn't swell during bloom, it's either old or was ground days ago. Buy better.", cite: "Lucía Pardo, Q grader" },
      { kind: "h2", text: "Mistakes that ruin a V60" },
      { kind: "ul", items: [
        "Pouring all the water at once — loses extraction control.",
        "Boiling water (100 °C) — scorches the coffee, tastes like rubber.",
        "Not rinsing the filter — paper taste in every cup.",
        "Grind too fine — clogs, over-extraction, bitterness.",
      ]},
      { kind: "affiliate" },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 6. Tour tostador (list-only, unchanged)
  // ══════════════════════════════════════════════════════════════════════════
  { id: "post-roastery-tour", slug: "tour-tostador-andaluz",
    category: "culture", hue: 14, date: "2026-03-26", readTime: 9, author: "david",
    title_es: "Un día en un tostador andaluz: del saco al portafiltros",
    title_en: "A day at an Andalusian roastery: from sack to portafilter",
    excerpt_es: "Pasamos 14 horas con uno de los tostadores más cuidadosos de España. Lo que aprendimos cambia cómo compramos café.",
    excerpt_en: "Fourteen hours with one of Spain's most careful roasters. What we learned changes how we buy coffee." },

  // ══════════════════════════════════════════════════════════════════════════
  // 7. Comparativa molinillos (list-only, unchanged)
  // ══════════════════════════════════════════════════════════════════════════
  { id: "post-grinder-comparison", slug: "comparativa-molinillos-200",
    category: "gear", hue: 32, date: "2026-03-19", readTime: 11, author: "ana",
    title_es: "Comparativa: 5 molinillos por menos de 200 €",
    title_en: "Tested: 5 grinders under €200",
    excerpt_es: "Un mes, un mismo café, una báscula. Cuál mantiene mejor el ajuste y cuál vale lo que cuesta.",
    excerpt_en: "One month, one coffee, one scale. Which holds its setting and which is actually worth the price." },

  // ══════════════════════════════════════════════════════════════════════════
  // 8. Descafeinado (list-only, unchanged)
  // ══════════════════════════════════════════════════════════════════════════
  { id: "post-decaf", slug: "descafeinado-bueno",
    category: "guides", hue: 26, date: "2026-03-12", readTime: 5, author: "marcos",
    title_es: "El descafeinado bueno existe. Está aquí.",
    title_en: "Good decaf exists. It's right here.",
    excerpt_es: "Tres procesos, tres tostadores y un veredicto: por qué el descafeinado por agua suiza ha cambiado el juego.",
    excerpt_en: "Three processes, three roasters and a verdict: why Swiss water decaf has changed the game." },

  // ══════════════════════════════════════════════════════════════════════════
  // 9. Agua para café (NOW WITH FULL BODY)
  // ══════════════════════════════════════════════════════════════════════════
  { id: "post-water", slug: "agua-para-cafe",
    category: "gear", hue: 20, date: "2026-03-05", readTime: 6, author: "lucia",
    title_es: "El ingrediente que casi todos ignoran: el agua",
    title_en: "The ingredient almost everyone ignores: water",
    excerpt_es: "98% del café es agua. Te explicamos qué medir, qué filtrar, y cuándo merece la pena un sistema.",
    excerpt_en: "98% of coffee is water. We explain what to measure, what to filter, and when a system is worth it.",
    relatedAffiliateId: "a4",
    body_es: [
      { kind: "lede", text: "Tu café es 98% agua. Puedes tener el mejor café del mundo, el molinillo perfecto y la técnica de un campeón — si el agua es mala, la taza será mala. Así de simple." },
      { kind: "h2", text: "Qué hace buena al agua para café" },
      { kind: "p", text: "La SCA (Specialty Coffee Association) recomienda agua con 75–250 mg/l de TDS (sólidos disueltos totales), pH entre 6,5 y 7,5, y sin cloro. El agua demasiado blanda no extrae bien; demasiado dura deja sabor mineral y daña la cafetera." },
      { kind: "ul", items: [
        "TDS ideal: 100–150 mg/l para la mayoría de cafés.",
        "pH: 7,0 neutro es perfecto. Evita agua ácida (< 6).",
        "Cloro: destruye matices aromáticos. Siempre filtrar.",
        "Calcio y magnesio: algo necesitas (ayudan a extraer), pero no mucho.",
      ]},
      { kind: "ad" },
      { kind: "h2", text: "Solución rápida: jarra con filtro" },
      { kind: "p", text: "Una jarra Brita o similar con filtro de carbón activo elimina cloro y parte de la cal. No es la solución perfecta, pero es la que mejor ratio calidad/precio tiene para empezar. Cuesta 15–25 € y cambia el resultado de forma notable." },
      { kind: "h2", text: "Solución avanzada: agua mineralizada" },
      { kind: "p", text: "Algunos baristas mezclan agua destilada con minerales medidos (receta Third Wave Water). Es preciso, repetible y económico — un sobre dura meses. Pero para la mayoría, la jarra con filtro es más que suficiente." },
      { kind: "blockquote", text: "Cambié el agua y mi espresso mejoró más que cuando cambié de cafetera. Sin exagerar.", cite: "Lucía Pardo, catadora Q" },
    ],
    body_en: [
      { kind: "lede", text: "Your coffee is 98% water. You can have the best beans, the perfect grinder and a champion's technique — if the water is bad, the cup will be bad. That simple." },
      { kind: "h2", text: "What makes good coffee water" },
      { kind: "p", text: "The SCA recommends water with 75–250 mg/l TDS (total dissolved solids), pH between 6.5 and 7.5, and no chlorine. Water too soft under-extracts; too hard leaves mineral taste and damages the machine." },
      { kind: "ul", items: [
        "Ideal TDS: 100–150 mg/l for most coffees.",
        "pH: neutral 7.0 is perfect. Avoid acidic water (< 6).",
        "Chlorine: destroys aromatic nuances. Always filter.",
        "Calcium and magnesium: you need some (they help extract), but not too much.",
      ]},
      { kind: "ad" },
      { kind: "h2", text: "Quick fix: filter pitcher" },
      { kind: "p", text: "A Brita-style pitcher with an activated carbon filter removes chlorine and some limescale. Not the perfect solution, but the best cost-to-quality ratio for starters. Costs €15–25 and changes the result noticeably." },
      { kind: "h2", text: "Advanced solution: mineralized water" },
      { kind: "p", text: "Some baristas mix distilled water with measured minerals (Third Wave Water recipe). Precise, repeatable, and economical — one packet lasts months. But for most people, a filter pitcher is more than enough." },
      { kind: "blockquote", text: "I changed my water and my espresso improved more than when I changed machines. No exaggeration.", cite: "Lucía Pardo, Q grader" },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 10. NEW — Mejores cafeterías de Madrid 2026 (FULL BODY)
  // ══════════════════════════════════════════════════════════════════════════
  { id: "post-madrid-cafes", slug: "mejores-cafeterias-madrid-2026",
    category: "guides", hue: 16, date: "2026-05-01", readTime: 8, author: "ana",
    title_es: "Las 5 mejores cafeterías de Madrid en 2026",
    title_en: "The 5 best coffee shops in Madrid in 2026",
    excerpt_es: "Hola Coffee, Toma Café, Ambu y dos sorpresas. Visitamos las cinco que más nos gustan y te contamos por qué.",
    excerpt_en: "Hola Coffee, Toma Café, Ambu and two surprises. We visited our five favorites and tell you why.",
    body_es: [
      { kind: "lede", text: "Madrid se ha convertido en una de las capitales del café de especialidad en Europa. Estos cinco sitios no son modas de temporada — llevan años demostrando que Madrid bebe café de verdad." },
      { kind: "h2", text: "1. Hola Coffee — El tostadero de referencia" },
      { kind: "p", text: "Top 19 mundial según Best Coffee Shops. Tueste propio de precisión, sourcing directo y un equipo que sabe explicar cada grano. Si solo puedes ir a uno, ve aquí." },
      { kind: "h2", text: "2. Toma Café — El pionero" },
      { kind: "p", text: "Lleva desde 2011 enseñándole a Madrid qué es un espresso de verdad. El tueste artesanal y el compromiso con el origen lo convierten en imprescindible." },
      { kind: "h2", text: "3. Ambu Coffee — Café + coworking" },
      { kind: "p", text: "Mejor cafetería de Madrid 2026. Wifi rápido, enchufes en cada mesa y café de competición. Si trabajas en remoto, este es tu sitio." },
      { kind: "ad" },
      { kind: "h2", text: "4. Misión Café — Eixample madrileño" },
      { kind: "p", text: "Escondido en el barrio de las Letras. Filtros impecables, carta de temporada y un equipo joven que domina el latte art. Brunch de fin de semana espectacular." },
      { kind: "h2", text: "5. Hanso Café — La revelación" },
      { kind: "p", text: "Abrió en 2024 y ya compite con los grandes. Tueste nórdico suave, espacio minimalista y un flat white que justifica el viaje desde cualquier barrio." },
      { kind: "blockquote", text: "Madrid dejó de ser una ciudad de café con leche aguado. Ahora es una referencia europea.", cite: "Ana Rivero, editora" },
    ],
    body_en: [
      { kind: "lede", text: "Madrid has become one of Europe's specialty coffee capitals. These five spots aren't seasonal trends — they've been proving for years that Madrid drinks real coffee." },
      { kind: "h2", text: "1. Hola Coffee — The benchmark roaster" },
      { kind: "p", text: "Top 19 worldwide per Best Coffee Shops. Precision in-house roasting, direct sourcing, and a team that can explain every bean. If you can only visit one, make it this one." },
      { kind: "h2", text: "2. Toma Café — The pioneer" },
      { kind: "p", text: "Teaching Madrid what real espresso is since 2011. Artisan roasting and commitment to origin make it essential." },
      { kind: "h2", text: "3. Ambu Coffee — Café + coworking" },
      { kind: "p", text: "Best café in Madrid 2026. Fast wifi, outlets at every table, and competition-grade coffee. If you work remotely, this is your spot." },
      { kind: "ad" },
      { kind: "h2", text: "4. Misión Café — Madrid's hidden gem" },
      { kind: "p", text: "Tucked in the Barrio de las Letras. Flawless filters, seasonal menu, and a young team that nails latte art. Weekend brunch is spectacular." },
      { kind: "h2", text: "5. Hanso Café — The revelation" },
      { kind: "p", text: "Opened in 2024, already competing with the big names. Soft Nordic roast, minimalist space, and a flat white worth the trip from any neighborhood." },
      { kind: "blockquote", text: "Madrid stopped being a watered-down café con leche city. It's now a European reference.", cite: "Ana Rivero, editor" },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 11. NEW — Guía AeroPress (FULL BODY)
  // ══════════════════════════════════════════════════════════════════════════
  { id: "post-aeropress-guide", slug: "guia-aeropress-principiantes",
    category: "recipes", hue: 28, date: "2026-04-25", readTime: 6, author: "marcos",
    title_es: "Guía AeroPress para principiantes: tu primer café de especialidad",
    title_en: "AeroPress guide for beginners: your first specialty coffee",
    excerpt_es: "30 €, una receta, dos minutos. La AeroPress es la forma más barata de probar café de especialidad en casa.",
    excerpt_en: "€30, one recipe, two minutes. The AeroPress is the cheapest way to try specialty coffee at home.",
    body_es: [
      { kind: "lede", text: "La AeroPress cuesta 30 €, cabe en una mochila y produce café que compite con métodos de 300 €. Si buscas un punto de entrada al café de especialidad, empieza aquí." },
      { kind: "h2", text: "Método estándar vs método invertido" },
      { kind: "p", text: "El método estándar es más fácil: pones filtro, café, agua caliente y presionas. El método invertido le da la vuelta (literalmente) y permite controlar mejor el tiempo de inmersión. Empieza con el estándar." },
      { kind: "h2", text: "Receta base (2 minutos)" },
      { kind: "ol", items: [
        "Pon filtro de papel y enjuaga con agua caliente.",
        "Añade 15 g de café molido medio (como azúcar de mesa).",
        "Vierte 200 g de agua a 85 °C.",
        "Remueve 10 segundos con la paleta.",
        "Pon el émbolo encima (sello). Espera 1 minuto.",
        "Presiona lento y constante durante 30 segundos.",
      ]},
      { kind: "ad" },
      { kind: "h2", text: "Por qué funciona tan bien" },
      { kind: "p", text: "Combina inmersión (como la prensa francesa) con presión (como el espresso). El resultado es un café limpio, con cuerpo y sin sedimentos. La temperatura baja (85 °C) reduce amargor y resalta dulzura." },
      { kind: "blockquote", text: "La AeroPress es la navaja suiza del café. Simple, portátil, y sorprendentemente buena.", cite: "Marcos Llovera, barista jefe" },
      { kind: "h2", text: "Ajustes rápidos" },
      { kind: "ul", items: [
        "Demasiado ácido → muele más fino o sube temperatura a 90 °C.",
        "Demasiado amargo → muele más grueso o baja a 80 °C.",
        "Demasiado aguado → usa 17 g de café en vez de 15 g.",
      ]},
    ],
    body_en: [
      { kind: "lede", text: "The AeroPress costs €30, fits in a backpack, and produces coffee that rivals €300 methods. If you want an entry point to specialty coffee, start here." },
      { kind: "h2", text: "Standard vs inverted method" },
      { kind: "p", text: "Standard is easier: insert filter, add coffee and hot water, press. Inverted flips it (literally) for better immersion control. Start with standard." },
      { kind: "h2", text: "Base recipe (2 minutes)" },
      { kind: "ol", items: [
        "Insert paper filter, rinse with hot water.",
        "Add 15 g medium-ground coffee (like table sugar).",
        "Pour 200 g water at 85 °C.",
        "Stir for 10 seconds with the paddle.",
        "Place plunger on top (seal). Wait 1 minute.",
        "Press slowly and steadily for 30 seconds.",
      ]},
      { kind: "ad" },
      { kind: "h2", text: "Why it works so well" },
      { kind: "p", text: "It combines immersion (like French press) with pressure (like espresso). The result is clean, full-bodied coffee with no sediment. The lower temperature (85 °C) reduces bitterness and highlights sweetness." },
      { kind: "blockquote", text: "The AeroPress is the Swiss army knife of coffee. Simple, portable, and surprisingly good.", cite: "Marcos Llovera, head barista" },
      { kind: "h2", text: "Quick adjustments" },
      { kind: "ul", items: [
        "Too sour → grind finer or raise temp to 90 °C.",
        "Too bitter → grind coarser or lower to 80 °C.",
        "Too watery → use 17 g coffee instead of 15 g.",
      ]},
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 12. NEW — Cold brew vs café frío (FULL BODY)
  // ══════════════════════════════════════════════════════════════════════════
  { id: "post-cold-brew", slug: "cold-brew-vs-cafe-frio",
    category: "recipes", hue: 34, date: "2026-04-18", readTime: 5, author: "david",
    title_es: "Cold brew vs café frío: no son lo mismo",
    title_en: "Cold brew vs iced coffee: they're not the same thing",
    excerpt_es: "Uno se hace con agua fría durante 12 horas. El otro es café caliente con hielo. La diferencia en sabor es enorme.",
    excerpt_en: "One brews with cold water for 12 hours. The other is hot coffee over ice. The flavor difference is massive.",
    body_es: [
      { kind: "lede", text: "Cold brew no es café con hielo. Es un método de extracción en frío que tarda 12–24 horas y produce un concentrado suave, dulce y con poca acidez. Si los confundes, esta guía te lo aclara." },
      { kind: "h2", text: "Cold brew: extracción lenta en frío" },
      { kind: "ul", items: [
        "80 g de café molido grueso (como pimienta triturada).",
        "1 litro de agua fría o del tiempo.",
        "Mezcla en jarra, tapa, nevera 12–18 horas.",
        "Filtra con tela o prensa francesa. Concentrado listo.",
      ]},
      { kind: "p", text: "El resultado es un concentrado que puedes diluir 1:1 con agua o leche. Dura 2 semanas en nevera. Sabor suave, chocolatado, casi cero amargor." },
      { kind: "h2", text: "Café frío: espresso + hielo" },
      { kind: "p", text: "Prepara un espresso doble (o café de moka), vierte sobre un vaso lleno de hielo. Rápido, intenso, con más acidez y cuerpo que el cold brew. Perfecto cuando quieres algo fuerte y refrescante al momento." },
      { kind: "ad" },
      { kind: "h2", text: "¿Cuál elegir?" },
      { kind: "ul", items: [
        "Quieres suave y dulce → cold brew.",
        "Quieres intenso y rápido → café frío con hielo.",
        "Quieres impresionar → cold brew tonic (cold brew + tónica + rodaja de limón).",
      ]},
      { kind: "blockquote", text: "El cold brew de verano lo preparo el domingo y tengo para toda la semana. Es el café más práctico que existe.", cite: "David Aguilar, tostador" },
    ],
    body_en: [
      { kind: "lede", text: "Cold brew isn't iced coffee. It's a cold extraction method that takes 12–24 hours and produces a smooth, sweet, low-acid concentrate. If you confuse them, this guide sets it straight." },
      { kind: "h2", text: "Cold brew: slow cold extraction" },
      { kind: "ul", items: [
        "80 g coarsely ground coffee (like crushed pepper).",
        "1 liter cold or room-temperature water.",
        "Mix in a pitcher, cover, fridge for 12–18 hours.",
        "Filter through cloth or French press. Concentrate ready.",
      ]},
      { kind: "p", text: "The result is a concentrate you can dilute 1:1 with water or milk. Lasts 2 weeks in the fridge. Smooth, chocolatey, virtually zero bitterness." },
      { kind: "h2", text: "Iced coffee: espresso + ice" },
      { kind: "p", text: "Pull a double espresso (or strong moka), pour over a glass full of ice. Quick, intense, more acidity and body than cold brew. Perfect when you want something strong and refreshing right now." },
      { kind: "ad" },
      { kind: "h2", text: "Which to choose?" },
      { kind: "ul", items: [
        "Want smooth and sweet → cold brew.",
        "Want intense and quick → iced coffee.",
        "Want to impress → cold brew tonic (cold brew + tonic water + lemon slice).",
      ]},
      { kind: "blockquote", text: "I prep my summer cold brew on Sunday and it lasts all week. It's the most practical coffee there is.", cite: "David Aguilar, roaster" },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 13. NEW — Origen del café (FULL BODY)
  // ══════════════════════════════════════════════════════════════════════════
  { id: "post-coffee-origins", slug: "origen-cafe-etiopia-mundo",
    category: "culture", hue: 14, date: "2026-04-11", readTime: 7, author: "lucia",
    title_es: "De Etiopía al mundo: la historia del café en 5 minutos",
    title_en: "From Ethiopia to the world: the history of coffee in 5 minutes",
    excerpt_es: "Un pastor, unas cabras y un fruto rojo. 1.500 años después, el café mueve 500.000 millones de dólares al año.",
    excerpt_en: "A shepherd, some goats, and a red berry. 1,500 years later, coffee moves $500 billion a year.",
    body_es: [
      { kind: "lede", text: "Todo empezó en las tierras altas de Etiopía, donde un pastor llamado Kaldi notó que sus cabras bailaban después de comer ciertos frutos rojos. De ahí a tu espresso matutino: esta es la versión corta." },
      { kind: "h2", text: "Etiopía: la cuna (siglo IX)" },
      { kind: "p", text: "Las tribus oromo mascaban los frutos del cafeto mezclados con grasa animal como estimulante. Los monjes sufís los convirtieron en bebida para mantenerse despiertos rezando. El café nació como herramienta espiritual." },
      { kind: "h2", text: "Yemen: la primera taza (siglo XV)" },
      { kind: "p", text: "Los yemeníes fueron los primeros en tostar y preparar café como bebida. Las cafeterías de Moca se convirtieron en centros de debate político y filosófico. De ahí el nombre 'moka'." },
      { kind: "ad" },
      { kind: "h2", text: "Europa: la revolución (siglo XVII)" },
      { kind: "p", text: "Las cafeterías de Londres, París y Viena reemplazaron a las tabernas como lugares de negocio. La Bolsa de Londres nació en una cafetería (Lloyd's). El café literalmente construyó el mundo moderno." },
      { kind: "h2", text: "Hoy: tercera ola" },
      { kind: "p", text: "El café dejó de ser un commodity anónimo. Hoy conocemos la finca, la variedad, la altitud y el proceso de cada grano. El barista es artesano, no dispensador. Y tú, leyendo esto, eres parte de esa revolución." },
      { kind: "blockquote", text: "Cada taza de café conecta al campesino etíope con el barista de tu esquina. Eso no lo hace ninguna otra bebida.", cite: "Lucía Pardo, catadora Q" },
    ],
    body_en: [
      { kind: "lede", text: "It all started in the Ethiopian highlands, where a shepherd named Kaldi noticed his goats dancing after eating certain red berries. From there to your morning espresso: here's the short version." },
      { kind: "h2", text: "Ethiopia: the birthplace (9th century)" },
      { kind: "p", text: "Oromo tribes chewed coffee berries mixed with animal fat as a stimulant. Sufi monks turned them into a drink to stay awake during prayers. Coffee was born as a spiritual tool." },
      { kind: "h2", text: "Yemen: the first cup (15th century)" },
      { kind: "p", text: "Yemenis were the first to roast and brew coffee as a drink. Mocha's coffeehouses became hubs for political and philosophical debate. Hence the name 'mocha'." },
      { kind: "ad" },
      { kind: "h2", text: "Europe: the revolution (17th century)" },
      { kind: "p", text: "London, Paris, and Vienna coffeehouses replaced taverns as business venues. The London Stock Exchange was born in a coffeehouse (Lloyd's). Coffee literally built the modern world." },
      { kind: "h2", text: "Today: third wave" },
      { kind: "p", text: "Coffee stopped being an anonymous commodity. Today we know the farm, variety, altitude, and process behind every bean. The barista is an artisan, not a dispenser. And you, reading this, are part of that revolution." },
      { kind: "blockquote", text: "Every cup of coffee connects the Ethiopian farmer to the barista on your corner. No other drink does that.", cite: "Lucía Pardo, Q grader" },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 14. NEW — Leer etiqueta de café (FULL BODY)
  // ══════════════════════════════════════════════════════════════════════════
  { id: "post-read-label", slug: "como-leer-etiqueta-cafe",
    category: "guides", hue: 22, date: "2026-03-28", readTime: 5, author: "david",
    title_es: "Cómo leer una etiqueta de café (y no comprar basura)",
    title_en: "How to read a coffee label (and stop buying garbage)",
    excerpt_es: "Fecha de tueste, origen, variedad, proceso y tueste. Si la etiqueta no dice esto, desconfía.",
    excerpt_en: "Roast date, origin, variety, process and roast level. If the label doesn't say this, be suspicious.",
    body_es: [
      { kind: "lede", text: "El 90% de las bolsas de café del supermercado no dicen nada útil. Aprende a leer una etiqueta de café de especialidad y nunca más comprarás a ciegas." },
      { kind: "h2", text: "Lo imprescindible" },
      { kind: "ol", items: [
        "Fecha de tueste — NO fecha de caducidad. Si no la tiene, no lo compres.",
        "País y región de origen — 'Colombia Huila' es útil. '100% Arábica' no dice nada.",
        "Variedad botánica — Caturra, Bourbon, Geisha, SL28… cada una sabe distinto.",
        "Proceso — Lavado (limpio), natural (frutal), honey (dulce). Cambia todo.",
        "Nivel de tueste — Claro, medio, oscuro. Elige según tu método de preparación.",
      ]},
      { kind: "ad" },
      { kind: "h2", text: "Banderas rojas" },
      { kind: "ul", items: [
        "Solo dice '100% Arábica' sin más detalle — marketing vacío.",
        "Fecha de caducidad pero no de tueste — probablemente lleva meses tostado.",
        "Mezcla sin especificar orígenes — están escondiendo café malo.",
        "Etiqueta bonita pero cero información técnica — pura imagen.",
      ]},
      { kind: "h2", text: "Ejemplo de etiqueta buena" },
      { kind: "p", text: "Finca La Esperanza · Huila, Colombia · Variedad Caturra · Proceso lavado · Tueste medio · Tostado el 15/03/2026 · Notas: chocolate con leche, ciruela, caramelo · SCA score: 86. Eso es transparencia." },
      { kind: "blockquote", text: "Si el tostador no pone la fecha de tueste, pregúntate qué más está escondiendo.", cite: "David Aguilar, tostador" },
    ],
    body_en: [
      { kind: "lede", text: "90% of supermarket coffee bags say nothing useful. Learn to read a specialty coffee label and never buy blind again." },
      { kind: "h2", text: "The essentials" },
      { kind: "ol", items: [
        "Roast date — NOT best before. If it's missing, don't buy it.",
        "Country and region of origin — 'Colombia Huila' is useful. '100% Arabica' says nothing.",
        "Botanical variety — Caturra, Bourbon, Geisha, SL28… each tastes different.",
        "Process — Washed (clean), natural (fruity), honey (sweet). Changes everything.",
        "Roast level — Light, medium, dark. Choose based on your brew method.",
      ]},
      { kind: "ad" },
      { kind: "h2", text: "Red flags" },
      { kind: "ul", items: [
        "Only says '100% Arabica' with no detail — empty marketing.",
        "Best-before date but no roast date — probably months old.",
        "Blend with no specified origins — hiding bad coffee.",
        "Pretty label but zero technical info — all image.",
      ]},
      { kind: "h2", text: "Example of a good label" },
      { kind: "p", text: "Finca La Esperanza · Huila, Colombia · Caturra variety · Washed process · Medium roast · Roasted 15/03/2026 · Notes: milk chocolate, plum, caramel · SCA score: 86. That's transparency." },
      { kind: "blockquote", text: "If the roaster won't print the roast date, ask yourself what else they're hiding.", cite: "David Aguilar, roaster" },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 15. NEW — Café y salud (FULL BODY)
  // ══════════════════════════════════════════════════════════════════════════
  { id: "post-coffee-health", slug: "cafe-y-salud-ciencia",
    category: "culture", hue: 32, date: "2026-03-15", readTime: 6, author: "ana",
    title_es: "Café y salud: qué dice la ciencia en 2026",
    title_en: "Coffee and health: what science says in 2026",
    excerpt_es: "Más de 1.000 estudios revisados. El café no solo no es malo — es una de las bebidas más estudiadas y beneficiosas.",
    excerpt_en: "Over 1,000 studies reviewed. Coffee isn't just not bad — it's one of the most studied and beneficial drinks.",
    body_es: [
      { kind: "lede", text: "Tu abuela decía que el café era malo. La ciencia de 2026 dice lo contrario. Más de 1.000 estudios analizados — esto es lo que sabemos con certeza." },
      { kind: "h2", text: "Beneficios confirmados" },
      { kind: "ul", items: [
        "Reduce riesgo de diabetes tipo 2 hasta un 25% (meta-análisis 2024, Annals of Internal Medicine).",
        "Protege contra Parkinson y Alzheimer (dosis-respuesta positiva en múltiples estudios).",
        "Rico en antioxidantes — para muchos europeos, la mayor fuente dietética.",
        "Mejora rendimiento físico y cognitivo de forma aguda.",
        "Asociado a menor mortalidad por todas las causas (3–5 tazas/día).",
      ]},
      { kind: "ad" },
      { kind: "h2", text: "Lo que hay que tener en cuenta" },
      { kind: "ul", items: [
        "Embarazo: limitar a 200 mg/día (1–2 tazas). Consenso médico claro.",
        "Ansiedad: la cafeína es un estimulante. Si tienes ansiedad, modera.",
        "Sueño: deja 6 horas entre tu último café y la hora de dormir.",
        "Niños: no recomendado por debajo de 12 años (AAP).",
      ]},
      { kind: "h2", text: "¿Cuántas tazas?" },
      { kind: "p", text: "La evidencia más fuerte apunta a 3–4 tazas diarias como punto óptimo para la mayoría de adultos sanos. Más de 6 no aporta beneficios extra y puede causar nerviosismo." },
      { kind: "blockquote", text: "El café es la bebida más investigada del planeta. Y los resultados son abrumadoramente positivos.", cite: "Ana Rivero, editora — resumen de meta-análisis publicados" },
    ],
    body_en: [
      { kind: "lede", text: "Your grandma said coffee was bad. 2026 science says otherwise. Over 1,000 studies analyzed — here's what we know for certain." },
      { kind: "h2", text: "Confirmed benefits" },
      { kind: "ul", items: [
        "Reduces type 2 diabetes risk by up to 25% (2024 meta-analysis, Annals of Internal Medicine).",
        "Protects against Parkinson's and Alzheimer's (positive dose-response in multiple studies).",
        "Rich in antioxidants — for many Europeans, the largest dietary source.",
        "Acutely improves physical and cognitive performance.",
        "Associated with lower all-cause mortality (3–5 cups/day).",
      ]},
      { kind: "ad" },
      { kind: "h2", text: "What to keep in mind" },
      { kind: "ul", items: [
        "Pregnancy: limit to 200 mg/day (1–2 cups). Clear medical consensus.",
        "Anxiety: caffeine is a stimulant. If you have anxiety, moderate.",
        "Sleep: leave 6 hours between your last coffee and bedtime.",
        "Children: not recommended under 12 (AAP).",
      ]},
      { kind: "h2", text: "How many cups?" },
      { kind: "p", text: "The strongest evidence points to 3–4 cups daily as the sweet spot for most healthy adults. Above 6 adds no extra benefit and may cause jitteriness." },
      { kind: "blockquote", text: "Coffee is the most researched drink on the planet. And the results are overwhelmingly positive.", cite: "Ana Rivero, editor — summary of published meta-analyses" },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // LIST-ONLY articles (new)
  // ══════════════════════════════════════════════════════════════════════════
  { id: "post-barcelona-cafes", slug: "mejores-cafeterias-barcelona",
    category: "guides", hue: 18, date: "2026-02-28", readTime: 7, author: "ana",
    title_es: "Las mejores cafeterías de Barcelona: guía actualizada",
    title_en: "The best coffee shops in Barcelona: updated guide",
    excerpt_es: "Nømad, Right Side y tres descubrimientos que no están en las guías turísticas. Barcelona sabe a café de verdad.",
    excerpt_en: "Nømad, Right Side and three finds that aren't in tourist guides. Barcelona tastes like real coffee." },

  { id: "post-latte-art", slug: "latte-art-principiantes",
    category: "recipes", hue: 26, date: "2026-02-20", readTime: 5, author: "marcos",
    title_es: "Latte art para principiantes: tu primer corazón",
    title_en: "Latte art for beginners: your first heart",
    excerpt_es: "No necesitas talento artístico. Necesitas leche fría, la jarra adecuada y 20 minutos de práctica al día.",
    excerpt_en: "You don't need artistic talent. You need cold milk, the right pitcher, and 20 minutes of practice a day." },

  { id: "post-turkish-coffee", slug: "cafe-turco-metodo-ancestral",
    category: "culture", hue: 38, date: "2026-02-10", readTime: 6, author: "lucia",
    title_es: "Café turco: el método más antiguo del mundo",
    title_en: "Turkish coffee: the world's oldest brewing method",
    excerpt_es: "Un cezve, café molido a polvo y paciencia. El café turco es patrimonio de la UNESCO y sabe a historia.",
    excerpt_en: "A cezve, coffee ground to powder, and patience. Turkish coffee is UNESCO heritage and tastes like history." },

  { id: "post-moka-mistakes", slug: "moka-italiana-errores-comunes",
    category: "recipes", hue: 14, date: "2026-01-30", readTime: 4, author: "david",
    title_es: "Moka italiana: 5 errores que todo el mundo comete",
    title_en: "Moka pot: 5 mistakes everyone makes",
    excerpt_es: "No llenes con agua hirviendo, no aprietes el café, no dejes que borbotee. Tu moka puede dar mucho más.",
    excerpt_en: "Don't fill with boiling water, don't tamp, don't let it gurgle. Your moka can do so much better.",
    relatedAffiliateId: "a6" },

  { id: "post-superauto", slug: "cafeteras-superautomaticas-merecen-pena",
    category: "gear", hue: 30, date: "2026-01-20", readTime: 8, author: "ana",
    title_es: "Cafeteras superautomáticas: ¿merecen la pena?",
    title_en: "Super-automatic machines: are they worth it?",
    excerpt_es: "Comodidad máxima, control mínimo. Para quién sí y para quién no. Con datos, no con esnobismo.",
    excerpt_en: "Maximum convenience, minimum control. Who they're for and who they're not. With data, not snobbery." },

  { id: "post-pairing", slug: "maridaje-cafe-reposteria",
    category: "culture", hue: 24, date: "2026-01-10", readTime: 5, author: "marcos",
    title_es: "Maridaje: café + repostería, las combinaciones que funcionan",
    title_en: "Pairing: coffee + pastry, the combos that actually work",
    excerpt_es: "Espresso con croissant de mantequilla. Filtro africano con tarta de limón. Las reglas básicas del maridaje cafetero.",
    excerpt_en: "Espresso with butter croissant. African filter with lemon tart. The basic rules of coffee pairing." },

  { id: "post-auto-2026-05-04-449", slug: "mejora-tu-v60-con-agua",
    category: "gear", hue: 30, date: "2026-05-04", readTime: 3, author: "david",
    title_es: "Mejora tu V60 con agua",
    title_en: "Upgrade Your V60",
    excerpt_es: "Descubre cómo el agua puede transformar tu café en V60. Desde filtros hasta técnicas, te enseñamos a dominar este ingrediente clave.",
    excerpt_en: "Learn how water quality can make or break your V60 brew. From filters to techniques, master this often-overlooked ingredient.",
    body_es: [
    {
        "kind": "lede",
        "text": "El V60 es uno de los métodos de preparación de café más populares por su simplicidad y capacidad para resaltar sabores complejos. Pero hay un ingrediente clave que muchos pasan por alto: el agua. En este artículo, exploramos cómo el agua puede hacer o deshacer tu taza y cómo optimizarla para un café excepcional."
    },
    {
        "kind": "h2",
        "text": "Introducción al V60"
    },
    {
        "kind": "p",
        "text": "Inventado en Japón en 2004 por Hario, el V60 debe su nombre a su forma en 'V' y su ángulo de 60 grados. Su diseño único y los filtros de papel permiten un flujo controlado del agua, extrayendo sabores brillantes y aromáticos. Es favorito entre baristas por su versatilidad y capacidad para ajustar variables como el tiempo de extracción y la granulometría."
    },
    {
        "kind": "h2",
        "text": "La importancia del agua"
    },
    {
        "kind": "p",
        "text": "El agua representa el 98% de tu taza de café, según estudios de la Specialty Coffee Association (SCA). La dureza del agua (minerales como calcio y magnesio) afecta directamente la extracción: muy poca y el café sabe plano; demasiada y puede volverse amargo. El agua filtrada, con un equilibrio ideal de minerales (75-250 mg/L de sólidos disueltos), es la recomendación estándar para extracción óptima."
    },
    {
        "kind": "blockquote",
        "text": "El agua no es solo un vehículo para el café, es un ingrediente activo que modifica su química.",
        "cite": "Dr. Christopher Hendon, Universidad de Oregon"
    },
    {
        "kind": "h2",
        "text": "Recomendaciones de filtros de agua"
    },
    {
        "kind": "ul",
        "items": [
            "Filtros de carbón activado: Eliminan cloro y olores sin remover minerales esenciales.",
            "Ósmosis inversa con remineralización: Ideal para áreas con agua muy dura, pero requiere ajuste de minerales.",
            "Jarras filtrantes: Solución accesible, aunque menos precisa. Cambia los filtros cada mes para evitar bacterias."
        ]
    },
    {
        "kind": "ad"
    },
    {
        "kind": "h2",
        "text": "Experimentos con agua filtrada"
    },
    {
        "kind": "p",
        "text": "Un estudio de 2021 publicado en el 'Journal of Coffee Research' comparó cafés preparados con agua del grifo, filtrada y destilada. Los catadores profesionales puntuaron un 15% más alto los cafés con agua filtrada, destacando mayor dulzor y acidez balanceada. El agua del grifo resaltó sabores metálicos en un 60% de las pruebas."
    },
    {
        "kind": "h2",
        "text": "Consejos para optimizar tu V60"
    },
    {
        "kind": "ol",
        "items": [
            "Usa agua filtrada a 92-96°C (temperatura óptima para extracción).",
            "Mantén una proporción de 1:16 (café:agua). Ejemplo: 15g de café para 240ml de agua.",
            "Controla el tiempo de infusión total (2:30 a 3:30 minutos). Un flujo muy lento sobre-extrae; muy rápido, sub-extrae."
        ]
    },
    {
        "kind": "h2",
        "text": "Conclusión y recursos adicionales"
    },
    {
        "kind": "p",
        "text": "Invertir en agua de calidad es tan crucial como elegir buenos granos. Para profundizar, explora los estándares de agua de la SCA o el libro 'Water for Coffee' de Maxwell Colonna-Dashwood. Tu V60 te lo agradecerá con tazas más limpias y sabores definidos."
    }
],
    body_en: [
    {
        "kind": "lede",
        "text": "The V60 is a staple in specialty coffee for its ability to highlight nuanced flavors. Yet, one element often overlooked is water quality. Here’s how tweaking your H2O can elevate your pour-over from good to extraordinary."
    },
    {
        "kind": "h2",
        "text": "V60 101"
    },
    {
        "kind": "p",
        "text": "Designed by Hario in 2004, the V60’s name comes from its 60-degree cone shape. Its spiral ribs and large hole allow precise control over extraction time and clarity. A favorite among baristas, it’s a canvas for experimenting with grind size, water temperature, and pouring technique."
    },
    {
        "kind": "h2",
        "text": "Why Water Matters"
    },
    {
        "kind": "p",
        "text": "Water makes up 98% of your brew, per Specialty Coffee Association (SCA) research. Its mineral content (especially calcium and magnesium) directly impacts extraction: too soft, and coffee tastes flat; too hard, and bitterness dominates. Filtered water with 75-250 ppm TDS (total dissolved solids) is the gold standard."
    },
    {
        "kind": "blockquote",
        "text": "Water isn’t passive—it’s a solvent that actively shapes coffee’s flavor profile.",
        "cite": "Dr. Christopher Hendon, University of Oregon"
    },
    {
        "kind": "h2",
        "text": "Water Filtration Tips"
    },
    {
        "kind": "ul",
        "items": [
            "Activated carbon filters: Remove chlorine/odors while preserving beneficial minerals.",
            "Reverse osmosis + remineralization: Best for very hard water areas but requires mineral rebalancing.",
            "Pitcher filters: Affordable but less consistent. Replace cartridges monthly."
        ]
    },
    {
        "kind": "ad"
    },
    {
        "kind": "h2",
        "text": "Filtered Water Experiments"
    },
    {
        "kind": "p",
        "text": "A 2021 study in the 'Journal of Coffee Research' blind-tasted V60 brews made with tap, filtered, and distilled water. Filtered water scored 15% higher for balanced acidity and sweetness, while tap water introduced metallic notes in 60% of samples."
    },
    {
        "kind": "h2",
        "text": "V60 Pro Tips"
    },
    {
        "kind": "ol",
        "items": [
            "Use filtered water heated to 195-205°F (90-96°C).",
            "Stick to a 1:16 coffee-to-water ratio (e.g., 15g coffee to 240g water).",
            "Aim for 2:30-3:30 minutes total brew time. Adjust grind size if too fast/slow."
        ]
    },
    {
        "kind": "h2",
        "text": "Wrapping Up"
    },
    {
        "kind": "p",
        "text": "Great water is as vital as great beans. Dive deeper with SCA’s water standards or Maxwell Colonna-Dashwood’s 'Water for Coffee'. Your taste buds—and your V60—will thank you."
    }
],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 23. Cómo elegir café en grano
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "post-como-elegir-cafe-en-grano",
    slug: "como-elegir-cafe-en-grano",
    category: "guides",
    hue: 28,
    date: "2026-04-20",
    readTime: 8,
    author: "lucia",
    title_es: "Cómo elegir café en grano: origen, tueste y frescura",
    title_en: "How to choose whole bean coffee: origin, roast and freshness",
    excerpt_es: "Una catadora Q te explica qué mirar en la bolsa, qué ignorar y por qué la fecha de tueste importa más que el precio.",
    excerpt_en: "A Q grader explains what to look for on the bag, what to ignore, and why roast date matters more than price.",
    body_es: [
      { kind: "lede", text: "Elegir café en grano puede ser abrumador: decenas de orígenes, perfiles de tueste y etiquetas que prometen «notas a frutos rojos». Aquí tienes la guía honesta para separar el marketing del sabor real." },
      { kind: "h2", text: "Origen: de dónde viene tu café" },
      { kind: "p", text: "El país de origen define el perfil base del café. Los cafés etíopes tienden a ser florales y afrutados; los colombianos, a ser equilibrados con acidez media y dulzor de caramelo; los brasileños, a dar cuerpo con notas de nuez y chocolate. Pero dentro de cada país hay miles de fincas, así que el origen es un punto de partida, no una garantía." },
      { kind: "ul", items: [
        "Etiopía: florales, cítricos, té de jazmín. Ideal para métodos de filtro.",
        "Colombia: equilibrado, caramelo, acidez media. Funciona en todo.",
        "Brasil: cuerpo denso, nuez, chocolate. Perfecto para espresso.",
        "Kenia: acidez brillante, grosella negra, tomate maduro.",
        "Guatemala: chocolate, especias, cuerpo medio-alto.",
      ]},
      { kind: "h2", text: "Tueste: claro, medio u oscuro" },
      { kind: "p", text: "El tueste claro preserva los sabores del origen: acidez, frutas, complejidad. El tueste oscuro amplifica el cuerpo y las notas a caramelo o cacao, pero borra matices. El medio es el terreno seguro. No hay tueste «mejor»: depende de tu método y tu paladar." },
      { kind: "blockquote", text: "Un buen tueste no esconde el café, lo traduce.", cite: "Lucía Pardo, catadora Q" },
      { kind: "ad" },
      { kind: "h2", text: "Frescura: la variable que nadie mira" },
      { kind: "p", text: "El café en grano empieza a perder aromáticos desde el día del tueste. La ventana óptima para consumirlo es de 7 a 30 días después del tueste. Pasado el mes, no está malo, pero ya no es especial. Busca siempre la fecha de tueste en la bolsa, no la de caducidad." },
      { kind: "ol", items: [
        "Compra cantidades que consumas en 2-3 semanas.",
        "Guárdalo en bolsa con válvula o bote hermético opaco, nunca en la nevera.",
        "Si no hay fecha de tueste en la bolsa, pasa al siguiente café.",
      ]},
      { kind: "h2", text: "Tu checklist de compra" },
      { kind: "p", text: "Busca: fecha de tueste visible, origen específico (país + región o finca), perfil de tueste indicado y tostador identificable. Si la bolsa cumple estos cuatro puntos, probablemente estás ante un café digno de tu molinillo." },
    ],
    body_en: [
      { kind: "lede", text: "Choosing whole bean coffee can be overwhelming: dozens of origins, roast profiles, and labels promising 'red fruit notes'. Here's the honest guide to telling marketing from real flavor." },
      { kind: "h2", text: "Origin: where your coffee comes from" },
      { kind: "p", text: "The country of origin sets the baseline flavor profile. Ethiopian coffees tend to be floral and fruity; Colombian ones balanced with medium acidity and caramel sweetness; Brazilian ones full-bodied with nutty, chocolatey notes. But each country has thousands of farms, so origin is a starting point, not a guarantee." },
      { kind: "ul", items: [
        "Ethiopia: floral, citrus, jasmine tea. Great for filter methods.",
        "Colombia: balanced, caramel, medium acidity. Works with everything.",
        "Brazil: dense body, nutty, chocolate. Perfect for espresso.",
        "Kenya: bright acidity, blackcurrant, ripe tomato.",
        "Guatemala: chocolate, spice, medium-full body.",
      ]},
      { kind: "h2", text: "Roast level: light, medium or dark" },
      { kind: "p", text: "Light roasts preserve origin flavors: acidity, fruit, complexity. Dark roasts amplify body and caramel or cocoa notes but erase nuance. Medium is the safe middle ground. There's no 'best' roast — it depends on your method and palate." },
      { kind: "blockquote", text: "A good roast doesn't hide the coffee, it translates it.", cite: "Lucía Pardo, Q grader" },
      { kind: "ad" },
      { kind: "h2", text: "Freshness: the variable nobody checks" },
      { kind: "p", text: "Whole bean coffee starts losing aromatics from the moment it's roasted. The optimal window is 7 to 30 days after roast. After a month, it's not bad — it's just not special anymore. Always look for the roast date on the bag, not the expiration date." },
      { kind: "ol", items: [
        "Buy amounts you'll consume in 2-3 weeks.",
        "Store in a valved bag or opaque airtight container — never in the fridge.",
        "If there's no roast date on the bag, move on to the next coffee.",
      ]},
      { kind: "h2", text: "Your buying checklist" },
      { kind: "p", text: "Look for: visible roast date, specific origin (country + region or farm), stated roast profile, and an identifiable roaster. If the bag ticks all four boxes, you're probably looking at coffee worth your grinder." },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 24. French press guía completa
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "post-french-press-guia-completa",
    slug: "french-press-guia-completa",
    category: "guides",
    hue: 28,
    date: "2026-04-21",
    readTime: 7,
    author: "marcos",
    title_es: "French press: guía completa paso a paso",
    title_en: "French press: the complete step-by-step guide",
    excerpt_es: "La cafetera más simple del mundo esconde más técnica de la que parece. Aquí va todo lo que necesitas saber para sacarle jugo.",
    excerpt_en: "The world's simplest brewer hides more technique than you'd think. Here's everything you need to get the most out of it.",
    body_es: [
      { kind: "lede", text: "La French press lleva más de 80 años en cocinas de todo el mundo. Es barata, no necesita filtros de papel y produce un café con cuerpo denso y textura sedosa. Pero la mayoría la usa mal. Vamos a arreglar eso." },
      { kind: "h2", text: "Equipo y proporciones" },
      { kind: "p", text: "Necesitas la prensa, café molido grueso (como sal marina), agua a 93-96 °C y una báscula. La proporción estándar es 1:15: 30 g de café para 450 ml de agua. Ajusta según tu gusto, pero empieza ahí." },
      { kind: "ul", items: [
        "Molienda gruesa y uniforme — las muelas importan aquí también.",
        "Agua justo por debajo de ebullición, nunca hirviendo.",
        "Precalienta la prensa con agua caliente antes de preparar.",
      ]},
      { kind: "h2", text: "El método paso a paso" },
      { kind: "ol", items: [
        "Pon el café molido en la prensa precalentada.",
        "Vierte toda el agua de una vez y arranca el cronómetro.",
        "A los 4 minutos, rompe la costra con una cuchara y retira la espuma.",
        "Coloca el émbolo pero NO lo bajes aún. Espera 5-8 minutos más.",
        "Baja el émbolo suavemente, sin presionar, y sirve de inmediato.",
      ]},
      { kind: "blockquote", text: "La French press no es una cafetera de prisas. Dale tiempo y te recompensa con cuerpo y claridad que no esperas.", cite: "James Hoffmann, The World Atlas of Coffee" },
      { kind: "ad" },
      { kind: "h2", text: "El truco de James Hoffmann" },
      { kind: "p", text: "El método Hoffmann añade un reposo largo después de los 4 minutos y retira la espuma antes de bajar el émbolo. El resultado es una taza más limpia, sin los sedimentos que la gente asocia con la French press. Probarlo cambia la perspectiva de cualquiera sobre esta cafetera." },
      { kind: "h2", text: "Errores frecuentes" },
      { kind: "p", text: "Moler demasiado fino, usar agua hirviendo y bajar el émbolo con fuerza son los tres pecados capitales. También: servir todo y dejar la prensa con café dentro. Si no vas a beber la segunda taza ya, pásala a una jarra. El café sigue extrayéndose mientras toque el agua." },
    ],
    body_en: [
      { kind: "lede", text: "The French press has been in kitchens worldwide for over 80 years. It's cheap, needs no paper filters, and produces a full-bodied, silky coffee. But most people use it wrong. Let's fix that." },
      { kind: "h2", text: "Gear and ratios" },
      { kind: "p", text: "You need the press, coarsely ground coffee (sea-salt texture), water at 93-96 °C, and a scale. The standard ratio is 1:15 — 30 g of coffee to 450 ml of water. Adjust to taste, but start there." },
      { kind: "ul", items: [
        "Coarse, uniform grind — burrs matter here too.",
        "Water just below boiling, never fully boiling.",
        "Preheat the press with hot water before brewing.",
      ]},
      { kind: "h2", text: "The step-by-step method" },
      { kind: "ol", items: [
        "Add ground coffee to the preheated press.",
        "Pour all the water at once and start your timer.",
        "At 4 minutes, break the crust with a spoon and skim off the foam.",
        "Place the plunger but DON'T press down yet. Wait 5-8 more minutes.",
        "Press the plunger down gently — no force — and serve immediately.",
      ]},
      { kind: "blockquote", text: "The French press isn't a brewer for people in a rush. Give it time and it rewards you with body and clarity you don't expect.", cite: "James Hoffmann, The World Atlas of Coffee" },
      { kind: "ad" },
      { kind: "h2", text: "The James Hoffmann trick" },
      { kind: "p", text: "Hoffmann's method adds a long rest after the initial 4 minutes and removes the foam before pressing. The result is a much cleaner cup, without the sludge people associate with the French press. Trying it changes anyone's perspective on this brewer." },
      { kind: "h2", text: "Common mistakes" },
      { kind: "p", text: "Grinding too fine, using boiling water, and forcing the plunger down are the three deadly sins. Also: pouring a cup and leaving coffee sitting in the press. If you're not drinking that second cup now, decant into a carafe. Coffee keeps extracting as long as it touches water." },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 25. Chemex vs V60
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "post-chemex-vs-v60-diferencias",
    slug: "chemex-vs-v60-diferencias",
    category: "guides",
    hue: 28,
    date: "2026-04-22",
    readTime: 7,
    author: "ana",
    title_es: "Chemex vs V60: cuál elegir y por qué",
    title_en: "Chemex vs V60: which to choose and why",
    excerpt_es: "Dos iconos del café de filtro, dos filosofías distintas. Analizamos diseño, sabor, facilidad de uso y para quién es cada una.",
    excerpt_en: "Two filter coffee icons, two different philosophies. We break down design, flavor, ease of use, and who each one is for.",
    body_es: [
      { kind: "lede", text: "Chemex y V60 son los dos nombres que cualquier aficionado al café de filtro oye primero. Ambas producen tazas limpias y aromáticas, pero sus diferencias de diseño generan perfiles de sabor distintos. Vamos a compararlas sin favoritismos." },
      { kind: "h2", text: "Diseño y filtro" },
      { kind: "p", text: "La Chemex usa un filtro de papel grueso y bonded que retiene más aceites y sedimentos. El resultado es un café extremadamente limpio, casi traslúcido. La V60 usa un filtro más fino, con nervaduras en espiral y un agujero grande, lo que permite más control sobre el flujo y deja pasar más aceites. El café es más expresivo en boca." },
      { kind: "ul", items: [
        "Chemex: filtro grueso → taza limpia, cuerpo ligero, sabores claros.",
        "V60: filtro fino → más aceites, cuerpo medio, matices pronunciados.",
        "Chemex: preparas 3-6 tazas fácilmente. V60: mejor para 1-2 tazas.",
      ]},
      { kind: "h2", text: "Técnica de vertido" },
      { kind: "p", text: "La V60 exige más precisión: vertidos en espiral, control de ritmo, atención al tiempo. La Chemex es más indulgente gracias a su filtro grueso, que ralentiza el flujo y perdona errores de vertido. Si buscas repetibilidad sin estrés, la Chemex gana. Si quieres experimentar con variables, la V60 es tu laboratorio." },
      { kind: "blockquote", text: "La Chemex te da consistencia; la V60 te da control. Elige según tu personalidad cafetera.", cite: "Ana Rivero, editora de Cash Café" },
      { kind: "ad" },
      { kind: "h2", text: "Sabor en taza" },
      { kind: "p", text: "En catas paralelas con el mismo café (etíope lavado, tueste claro), la Chemex resaltó notas florales y cítricas con cuerpo tipo té. La V60 dio más fruta madura, acidez jugosa y un final más largo. Ninguna es «mejor»: son distintas." },
      { kind: "h2", text: "Veredicto" },
      { kind: "p", text: "Si preparas café para varias personas y valoras la limpieza de taza, Chemex. Si eres un explorador solitario que disfruta afinando cada variable, V60. Y si puedes, ten las dos: el café cambia tanto entre ellas que merece la pena." },
    ],
    body_en: [
      { kind: "lede", text: "Chemex and V60 are the two names any filter coffee enthusiast hears first. Both produce clean, aromatic cups, but their design differences create distinct flavor profiles. Let's compare them without playing favorites." },
      { kind: "h2", text: "Design and filter" },
      { kind: "p", text: "The Chemex uses a thick bonded paper filter that traps more oils and sediment. The result is an extremely clean, almost translucent coffee. The V60 uses a thinner filter with spiral ribs and a large hole, allowing more control over flow and letting through more oils. The coffee is more expressive on the palate." },
      { kind: "ul", items: [
        "Chemex: thick filter → clean cup, light body, clear flavors.",
        "V60: thin filter → more oils, medium body, pronounced nuances.",
        "Chemex: easily brews 3-6 cups. V60: best for 1-2 cups.",
      ]},
      { kind: "h2", text: "Pouring technique" },
      { kind: "p", text: "The V60 demands more precision: spiral pours, pace control, attention to time. The Chemex is more forgiving thanks to its thick filter, which slows the flow and pardons pouring mistakes. If you want repeatability without stress, the Chemex wins. If you want to experiment with variables, the V60 is your lab." },
      { kind: "blockquote", text: "The Chemex gives you consistency; the V60 gives you control. Choose based on your coffee personality.", cite: "Ana Rivero, editor at Cash Café" },
      { kind: "ad" },
      { kind: "h2", text: "Flavor in the cup" },
      { kind: "p", text: "In side-by-side cuppings with the same coffee (washed Ethiopian, light roast), the Chemex highlighted floral and citrus notes with a tea-like body. The V60 delivered riper fruit, juicy acidity, and a longer finish. Neither is 'better' — they're different." },
      { kind: "h2", text: "The verdict" },
      { kind: "p", text: "If you brew for multiple people and value cup clarity, go Chemex. If you're a solo explorer who enjoys fine-tuning every variable, go V60. And if you can, get both: coffee changes so much between them that it's worth it." },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 26. Café para oficina sin gastar
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "post-cafe-para-oficina-sin-gastar",
    slug: "cafe-para-oficina-sin-gastar",
    category: "guides",
    hue: 28,
    date: "2026-04-22",
    readTime: 6,
    author: "david",
    title_es: "Montar un rincón de café en la oficina por menos de 100 €",
    title_en: "Set up a coffee corner at the office for under €100",
    excerpt_es: "Café de verdad en la oficina sin máquinas de cápsulas ni presupuestos absurdos. Solo lo esencial y un poco de criterio.",
    excerpt_en: "Real coffee at the office without pod machines or absurd budgets. Just the essentials and a bit of common sense.",
    body_es: [
      { kind: "lede", text: "La máquina de cápsulas de tu oficina produce café mediocre y genera kilos de residuos. Con menos de 100 € puedes montar un rincón que haga mejor café, cueste menos por taza y deje mejor sabor de boca — en todos los sentidos." },
      { kind: "h2", text: "El equipo mínimo" },
      { kind: "ul", items: [
        "French press de 1 litro: 15-25 €. Prepara para 3-4 personas de una vez.",
        "Hervidor eléctrico básico: 15-20 €. No necesita cuello de cisne.",
        "Molinillo manual de muelas: 30-40 €. Compartido entre compañeros.",
        "Báscula de cocina con precisión de 1 g: 10 €. Sirve la que ya tengas.",
        "Café en grano de tueste reciente: 8-12 € por 250 g. Cambia todo.",
      ]},
      { kind: "h2", text: "La rutina de la oficina" },
      { kind: "p", text: "Muele 60 g de café grueso, vierte 900 ml de agua a 94 °C, espera 4 minutos, rompe la costra y sirve. En 6 minutos tienes 4 tazas de café que superan a cualquier cápsula. El coste por taza ronda los 0,30 €, frente a los 0,40-0,50 € de las cápsulas." },
      { kind: "blockquote", text: "El mejor café de oficina no es el más caro, es el que alguien se molesta en preparar bien.", cite: "David Aguilar, tostador" },
      { kind: "ad" },
      { kind: "h2", text: "Convencer al jefe" },
      { kind: "p", text: "Los números ayudan: una oficina de 10 personas gasta unos 100 € al mes en cápsulas. Con café en grano, el gasto baja a 60-70 € y la calidad sube. Además, el ritual de preparar café crea pausas naturales que estudios de Harvard asocian con mayor productividad." },
      { kind: "h2", text: "Mantenimiento cero estrés" },
      { kind: "p", text: "Lava la French press con agua caliente después de cada uso. Vacía los posos en la basura orgánica. Descalcifica el hervidor una vez al mes con vinagre blanco. Total de mantenimiento: 2 minutos al día." },
    ],
    body_en: [
      { kind: "lede", text: "Your office pod machine makes mediocre coffee and generates kilos of waste. For under €100 you can set up a corner that brews better coffee, costs less per cup, and leaves a better aftertaste — in every sense." },
      { kind: "h2", text: "The minimum gear" },
      { kind: "ul", items: [
        "1-liter French press: €15-25. Brews for 3-4 people at once.",
        "Basic electric kettle: €15-20. No gooseneck needed.",
        "Manual burr grinder: €30-40. Shared among coworkers.",
        "Kitchen scale with 1 g precision: €10. Use the one you already have.",
        "Freshly roasted whole bean coffee: €8-12 per 250 g. Changes everything.",
      ]},
      { kind: "h2", text: "The office routine" },
      { kind: "p", text: "Grind 60 g of coarse coffee, pour 900 ml of water at 94 °C, wait 4 minutes, break the crust and serve. In 6 minutes you have 4 cups that outclass any pod. Cost per cup is around €0.30, versus €0.40-0.50 for pods." },
      { kind: "blockquote", text: "The best office coffee isn't the most expensive — it's the one someone bothers to prepare well.", cite: "David Aguilar, roaster" },
      { kind: "ad" },
      { kind: "h2", text: "Convincing the boss" },
      { kind: "p", text: "Numbers help: a 10-person office spends about €100 a month on pods. With whole bean, that drops to €60-70 and quality goes up. Plus, the ritual of brewing creates natural breaks that Harvard studies link to higher productivity." },
      { kind: "h2", text: "Zero-stress maintenance" },
      { kind: "p", text: "Rinse the French press with hot water after every use. Dump grounds in organic waste. Descale the kettle once a month with white vinegar. Total maintenance: 2 minutes a day." },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 27. Viaje cafetero Colombia
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "post-viaje-cafetero-colombia",
    slug: "viaje-cafetero-colombia",
    category: "guides",
    hue: 28,
    date: "2026-04-23",
    readTime: 9,
    author: "lucia",
    title_es: "Ruta cafetera por Colombia: qué visitar y qué probar",
    title_en: "Colombia's coffee trail: what to visit and what to taste",
    excerpt_es: "Del Eje Cafetero a Huila, pasando por Nariño. Fincas, paisajes y tazas que justifican el viaje.",
    excerpt_en: "From the Coffee Axis to Huila via Nariño. Farms, landscapes and cups that justify the trip.",
    body_es: [
      { kind: "lede", text: "Colombia es el tercer productor mundial de café y uno de los pocos países donde puedes recorrer fincas, ver el proceso completo del grano y terminar el día con una taza de café de la misma parcela que visitaste por la mañana. Esta es la ruta que recomendamos." },
      { kind: "h2", text: "El Eje Cafetero: Quindío, Risaralda y Caldas" },
      { kind: "p", text: "El triángulo cafetero es el punto de entrada clásico. Salento y el Valle de Cocora ofrecen paisaje de palma de cera y fincas abiertas al turismo. Manizales tiene tostadores de especialidad y la mejor vista del Nevado del Ruiz. El café aquí es suave, con cuerpo medio y notas a panela." },
      { kind: "ul", items: [
        "Salento: fincas como Don Elías y El Ocaso con tours en español e inglés.",
        "Manizales: visita un tostador urbano y prueba café de Caldas de finca directa.",
        "Pereira: mercados locales donde comprar pergamino seco a precio justo.",
      ]},
      { kind: "h2", text: "Huila: la joya escondida" },
      { kind: "p", text: "Huila produce algunos de los cafés más premiados del mundo. La altitud (1.500-2.000 msnm) y el microclima generan acidez brillante y notas frutales intensas. Pitalito y San Agustín son las bases ideales para visitar fincas de proceso honey y natural." },
      { kind: "blockquote", text: "En Colombia, cada finca es un microclima y cada taza cuenta una historia distinta del suelo.", cite: "Lucía Pardo, catadora Q" },
      { kind: "ad" },
      { kind: "h2", text: "Nariño: café de altura extrema" },
      { kind: "p", text: "Los cafetales de Nariño crecen a altitudes de hasta 2.300 msnm, entre las más altas del mundo para arábica. El resultado: acidez jugosa, dulzor pronunciado y una complejidad que sorprende incluso a catadores experimentados. Buesaco y La Unión son los municipios clave." },
      { kind: "h2", text: "Consejos prácticos" },
      { kind: "ol", items: [
        "Viaja entre octubre y febrero para ver la cosecha principal en el Eje Cafetero.",
        "Reserva tours de finca con antelación — muchas son pequeñas y no aceptan visitas sin cita.",
        "Lleva efectivo: las fincas rurales rara vez aceptan tarjeta.",
        "Compra café pergamino seco directamente al productor. Es más barato y más fresco.",
      ]},
    ],
    body_en: [
      { kind: "lede", text: "Colombia is the world's third-largest coffee producer and one of the few countries where you can tour farms, see the full bean journey, and end the day with a cup from the very plot you visited that morning. Here's the route we recommend." },
      { kind: "h2", text: "The Coffee Axis: Quindío, Risaralda and Caldas" },
      { kind: "p", text: "The coffee triangle is the classic starting point. Salento and the Cocora Valley offer wax palm scenery and tourism-friendly farms. Manizales has specialty roasters and the best view of Nevado del Ruiz. Coffee here is mellow, with medium body and panela sweetness." },
      { kind: "ul", items: [
        "Salento: farms like Don Elías and El Ocaso with tours in Spanish and English.",
        "Manizales: visit an urban roaster and try direct-farm Caldas coffee.",
        "Pereira: local markets where you can buy dried parchment at a fair price.",
      ]},
      { kind: "h2", text: "Huila: the hidden gem" },
      { kind: "p", text: "Huila produces some of the world's most awarded coffees. Altitude (1,500-2,000 masl) and microclimate create bright acidity and intense fruit notes. Pitalito and San Agustín are the ideal bases for visiting honey and natural process farms." },
      { kind: "blockquote", text: "In Colombia, every farm is a microclimate and every cup tells a different story about the soil.", cite: "Lucía Pardo, Q grader" },
      { kind: "ad" },
      { kind: "h2", text: "Nariño: extreme altitude coffee" },
      { kind: "p", text: "Nariño's coffee grows at up to 2,300 masl — among the highest in the world for arabica. The result: juicy acidity, pronounced sweetness, and a complexity that surprises even experienced cuppers. Buesaco and La Unión are the key municipalities." },
      { kind: "h2", text: "Practical tips" },
      { kind: "ol", items: [
        "Travel between October and February for the main harvest in the Coffee Axis.",
        "Book farm tours in advance — many are small and don't accept walk-ins.",
        "Bring cash: rural farms rarely take cards.",
        "Buy dried parchment coffee directly from the producer. It's cheaper and fresher.",
      ]},
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 28. Mejores cafeterías Valencia
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "post-mejores-cafeterias-valencia",
    slug: "mejores-cafeterias-valencia",
    category: "guides",
    hue: 28,
    date: "2026-04-24",
    readTime: 6,
    author: "ana",
    title_es: "Las mejores cafeterías de Valencia en 2026",
    title_en: "The best coffee shops in Valencia in 2026",
    excerpt_es: "Valencia se ha convertido en una de las capitales del café de especialidad en España. Estas son nuestras 7 favoritas.",
    excerpt_en: "Valencia has become one of Spain's specialty coffee capitals. These are our 7 favorites.",
    body_es: [
      { kind: "lede", text: "Valencia ha pasado de ser la ciudad de la horchata a ser una de las escenas de café de especialidad más vibrantes de España. En los últimos tres años han abierto más de una docena de cafeterías que tuestan, preparan y enseñan café de nivel internacional." },
      { kind: "h2", text: "Ruzafa: el barrio cafetero" },
      { kind: "p", text: "Ruzafa concentra la mayor densidad de cafeterías de especialidad de la ciudad. Aquí encuentras desde tostadores con barra hasta cafeterías de autor con carta de filtro rotativa. El barrio invita a hacer ruta a pie en una mañana." },
      { kind: "ul", items: [
        "Bluebell Coffee: referencia de la ciudad, tuestan su propio café y tienen carta de filtro que rota cada semana.",
        "Retrogusto Coffee Mate: espacio pequeño con café italiano de especialidad y brunch equilibrado.",
        "Olmos Coffee: barista-owned, perfil nórdico, siempre tienen un café natural interesante.",
      ]},
      { kind: "h2", text: "Centro y más allá" },
      { kind: "p", text: "Fuera de Ruzafa, el centro histórico y el Cabanyal esconden joyas. La escena sigue creciendo y cada pocos meses abre un local nuevo que merece una visita." },
      { kind: "ul", items: [
        "Artysana: en pleno centro, café de finca con pastelería artesanal de verdad.",
        "Cafeterías del Cabanyal: el barrio marinero empieza a sumar opciones con tueste propio.",
      ]},
      { kind: "blockquote", text: "Valencia tiene la ventaja de ser una ciudad pequeña con cultura de calle. Puedes probar cinco cafeterías en un día sin prisas.", cite: "Ana Rivero, editora" },
      { kind: "ad" },
      { kind: "h2", text: "Consejos para tu ruta" },
      { kind: "ol", items: [
        "Empieza por Ruzafa a primera hora — los baristas están frescos y las barras vacías.",
        "Pide filtro si lo tienen: es donde más brilla el café de cada sitio.",
        "Habla con el barista. En Valencia son accesibles y disfrutan explicando.",
      ]},
      { kind: "h2", text: "La escena crece" },
      { kind: "p", text: "Valencia no intenta ser Melbourne ni Copenhague. Tiene su propio ritmo, más mediterráneo, más relajado, y eso se nota en las barras. El café aquí se toma sin prisa, a menudo con una tostada con tomate al lado. Y eso está bien." },
    ],
    body_en: [
      { kind: "lede", text: "Valencia has gone from the city of horchata to one of Spain's most vibrant specialty coffee scenes. Over the past three years, more than a dozen shops have opened that roast, brew, and teach coffee at an international level." },
      { kind: "h2", text: "Ruzafa: the coffee district" },
      { kind: "p", text: "Ruzafa boasts the highest density of specialty coffee shops in the city. You'll find everything from roasters with a bar to author-driven cafés with rotating filter menus. The neighborhood is perfect for a walking route in one morning." },
      { kind: "ul", items: [
        "Bluebell Coffee: city reference point — they roast their own and rotate the filter menu weekly.",
        "Retrogusto Coffee Mate: small space with Italian specialty coffee and a balanced brunch.",
        "Olmos Coffee: barista-owned, Nordic profile, always has an interesting natural process coffee.",
      ]},
      { kind: "h2", text: "Downtown and beyond" },
      { kind: "p", text: "Outside Ruzafa, the old town and Cabanyal hide gems. The scene keeps growing, and every few months a new spot opens that deserves a visit." },
      { kind: "ul", items: [
        "Artysana: right in the center, farm-sourced coffee with genuinely artisan pastries.",
        "Cabanyal cafés: the seaside neighborhood is starting to add self-roasted options.",
      ]},
      { kind: "blockquote", text: "Valencia has the advantage of being a small city with street culture. You can hit five coffee shops in a day without rushing.", cite: "Ana Rivero, editor" },
      { kind: "ad" },
      { kind: "h2", text: "Tips for your route" },
      { kind: "ol", items: [
        "Start in Ruzafa early — baristas are fresh and counters are empty.",
        "Order filter if they have it: that's where each shop's coffee shines most.",
        "Talk to the barista. In Valencia they're approachable and enjoy explaining.",
      ]},
      { kind: "h2", text: "The scene is growing" },
      { kind: "p", text: "Valencia isn't trying to be Melbourne or Copenhagen. It has its own pace — more Mediterranean, more relaxed — and you feel it at the counter. Coffee here is drunk without rushing, often with a tomato toast on the side. And that's just fine." },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 29. Mejores cafeterías Sevilla
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "post-mejores-cafeterias-sevilla",
    slug: "mejores-cafeterias-sevilla",
    category: "guides",
    hue: 28,
    date: "2026-04-24",
    readTime: 6,
    author: "marcos",
    title_es: "Las mejores cafeterías de Sevilla en 2026",
    title_en: "The best coffee shops in Seville in 2026",
    excerpt_es: "Sevilla despierta al café de especialidad. De la Alameda al centro, estas son las cafeterías que están cambiando la escena.",
    excerpt_en: "Seville is waking up to specialty coffee. From Alameda to downtown, these are the shops changing the scene.",
    body_es: [
      { kind: "lede", text: "Sevilla ha sido históricamente territorio del café torrefacto y el cortado de bar. Pero en los últimos dos años, una generación de baristas jóvenes ha abierto locales que tuestan propio, trabajan con fincas directas y sirven filtro sin pedir disculpas. Esto es lo que hay." },
      { kind: "h2", text: "Alameda y alrededores" },
      { kind: "p", text: "La Alameda de Hércules se ha convertido en el epicentro cafetero de Sevilla. Aquí se concentran los locales más jóvenes, con estética cuidada y café que habla de origen." },
      { kind: "ul", items: [
        "Virgin Coffee: pioneros de la tercera ola en Sevilla, tuestan en la trastienda y tienen carta de filtro rotativa.",
        "Torch Coffee: espacio luminoso con granos seleccionados de tostadores europeos.",
        "Cafeína Alameda: más informal, buen espresso y tostadas de masa madre.",
      ]},
      { kind: "h2", text: "Centro histórico" },
      { kind: "p", text: "El casco antiguo ha sido más lento en adoptar el café de especialidad, pero ya hay opciones sólidas que combinan la arquitectura sevillana con una barra profesional." },
      { kind: "blockquote", text: "Sevilla tiene todo para ser una gran ciudad cafetera: luz, ritmo de calle y una cultura de sobremesa que pide un buen café.", cite: "Marcos Llovera, barista jefe" },
      { kind: "ad" },
      { kind: "h2", text: "Triana y más allá" },
      { kind: "p", text: "Triana empieza a sumar opciones interesantes. Es un barrio con identidad propia que encaja bien con cafeterías de autor que huyen del turismo del centro. Si visitas Sevilla, cruza el puente." },
      { kind: "h2", text: "Lo que viene" },
      { kind: "p", text: "Sevilla está donde Madrid estaba hace cinco años. La escena es pequeña pero crece rápido, con formación profesional y competiciones de barismo que ya generan atención nacional. Esperamos que en 2027 esta lista sea el doble de larga." },
      { kind: "ol", items: [
        "Visita la Alameda a media mañana, cuando el barrio está vivo pero no abarrotado.",
        "Pide un cortado de especialidad: es el puente entre el café sevillano clásico y la tercera ola.",
        "Pregunta por el café del día — los baristas de Sevilla están deseando contar la historia de cada grano.",
      ]},
    ],
    body_en: [
      { kind: "lede", text: "Seville has historically been torrefacto territory — dark-roasted, sugar-coated coffee served as cortados in traditional bars. But over the past two years, a young generation of baristas has opened shops that roast in-house, source directly from farms, and serve filter coffee unapologetically. Here's what's out there." },
      { kind: "h2", text: "Alameda and surroundings" },
      { kind: "p", text: "Alameda de Hércules has become Seville's coffee epicenter. The newest, most design-forward shops cluster here, serving coffee that talks about origin." },
      { kind: "ul", items: [
        "Virgin Coffee: third-wave pioneers in Seville, roasting in the back room with a rotating filter menu.",
        "Torch Coffee: bright space with beans selected from European roasters.",
        "Cafeína Alameda: more casual, good espresso, sourdough toasts.",
      ]},
      { kind: "h2", text: "Old town" },
      { kind: "p", text: "The historic center has been slower to adopt specialty coffee, but there are already solid options that blend Sevillian architecture with a professional bar." },
      { kind: "blockquote", text: "Seville has everything it takes to be a great coffee city: light, street rhythm, and a culture of lingering after meals that calls for good coffee.", cite: "Marcos Llovera, head barista" },
      { kind: "ad" },
      { kind: "h2", text: "Triana and beyond" },
      { kind: "p", text: "Triana is starting to add interesting options. It's a neighborhood with its own identity that fits well with author-driven cafés that avoid the touristy center. If you visit Seville, cross the bridge." },
      { kind: "h2", text: "What's next" },
      { kind: "p", text: "Seville is where Madrid was five years ago. The scene is small but growing fast, with professional training and barista competitions already drawing national attention. We expect this list to be twice as long by 2027." },
      { kind: "ol", items: [
        "Visit Alameda mid-morning, when the neighborhood is alive but not packed.",
        "Order a specialty cortado: it's the bridge between classic Sevillian coffee and the third wave.",
        "Ask about the coffee of the day — Seville's baristas are eager to tell the story behind every bean.",
      ]},
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 30. Cafeterías Lisboa guía
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "post-cafeterias-lisboa-guia",
    slug: "cafeterias-lisboa-guia",
    category: "guides",
    hue: 28,
    date: "2026-04-25",
    readTime: 7,
    author: "lucia",
    title_es: "Cafeterías de especialidad en Lisboa: guía actualizada",
    title_en: "Specialty coffee shops in Lisbon: updated guide",
    excerpt_es: "Lisboa ha construido una escena cafetera propia entre azulejos y pastéis de nata. Estas son las cafeterías que no te puedes perder.",
    excerpt_en: "Lisbon has built its own coffee scene between azulejos and pastéis de nata. These are the shops you can't miss.",
    body_es: [
      { kind: "lede", text: "Portugal tiene una relación profunda con el café — el bica es parte del ADN lisboeta. Pero en los últimos años, una nueva generación de baristas y tostadores ha añadido una capa de especialidad a esa tradición, creando una escena que combina lo mejor del café clásico portugués con la tercera ola." },
      { kind: "h2", text: "Chiado y Baixa" },
      { kind: "p", text: "El centro de Lisboa mezcla cafeterías históricas con locales de nueva hornada. En esta zona puedes tomar un bica tradicional y un flat white de tueste nórdico en la misma manzana." },
      { kind: "ul", items: [
        "Copenhagen Coffee Lab: referencia de la tercera ola en Lisboa, con varios locales y tueste propio.",
        "Fábrica Coffee Roasters: uno de los primeros tostadores artesanales de la ciudad, en pleno Chiado.",
        "Dear Breakfast: brunch con café de especialidad en un espacio de diseño.",
      ]},
      { kind: "h2", text: "Príncipe Real y Santos" },
      { kind: "p", text: "Los barrios altos ofrecen cafeterías con terraza y vistas. Príncipe Real es donde los lisboetas más cafeteros van los fines de semana, con opciones que van del filtro al espresso con leche de avena." },
      { kind: "blockquote", text: "Lisboa consigue algo raro: integrar el café de especialidad sin renegar del bica. Las dos culturas conviven en la misma barra.", cite: "Lucía Pardo, catadora Q" },
      { kind: "ad" },
      { kind: "h2", text: "Intendente y Mouraria" },
      { kind: "p", text: "Los barrios emergentes del norte del centro son donde más está creciendo la escena. Aquí los alquileres permiten a baristas jóvenes abrir locales con personalidad y carta arriesgada." },
      { kind: "h2", text: "Consejos para la visita" },
      { kind: "ol", items: [
        "Empieza con un bica en una casa histórica para entender el café portugués clásico.",
        "Luego sube a Príncipe Real para probar el contraste con un V60 de tueste claro.",
        "Compra café tostado en Lisboa como souvenir — los tostadores locales tienen granos que no encontrarás en España.",
        "Combina café con un pastel de nata recién hecho. No es falta de purismo, es cultura local.",
      ]},
    ],
    body_en: [
      { kind: "lede", text: "Portugal has a deep relationship with coffee — the bica is part of Lisbon's DNA. But in recent years, a new generation of baristas and roasters has added a specialty layer to that tradition, creating a scene that blends the best of classic Portuguese coffee with the third wave." },
      { kind: "h2", text: "Chiado and Baixa" },
      { kind: "p", text: "Downtown Lisbon mixes historic cafés with brand-new spots. In this area you can have a traditional bica and a Nordic-roast flat white on the same block." },
      { kind: "ul", items: [
        "Copenhagen Coffee Lab: Lisbon's third-wave reference, with multiple locations and in-house roasting.",
        "Fábrica Coffee Roasters: one of the city's first artisan roasters, right in Chiado.",
        "Dear Breakfast: brunch with specialty coffee in a design-forward space.",
      ]},
      { kind: "h2", text: "Príncipe Real and Santos" },
      { kind: "p", text: "The uphill neighborhoods offer terrace cafés with views. Príncipe Real is where Lisbon's most coffee-obsessed locals spend their weekends, with options ranging from filter to oat-milk espresso." },
      { kind: "blockquote", text: "Lisbon pulls off something rare: integrating specialty coffee without disowning the bica. Both cultures coexist at the same counter.", cite: "Lucía Pardo, Q grader" },
      { kind: "ad" },
      { kind: "h2", text: "Intendente and Mouraria" },
      { kind: "p", text: "The emerging neighborhoods north of the center are where the scene is growing fastest. Rents here let young baristas open shops with personality and adventurous menus." },
      { kind: "h2", text: "Tips for your visit" },
      { kind: "ol", items: [
        "Start with a bica at a historic café to understand classic Portuguese coffee.",
        "Then head up to Príncipe Real for the contrast with a light-roast V60.",
        "Buy locally roasted coffee as a souvenir — Lisbon roasters carry beans you won't find in Spain.",
        "Pair coffee with a fresh pastel de nata. It's not a lack of purism — it's local culture.",
      ]},
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 31. Receta affogato perfecto
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "post-receta-affogato-perfecto",
    slug: "receta-affogato-perfecto",
    category: "recipes",
    hue: 22,
    date: "2026-04-25",
    readTime: 5,
    author: "marcos",
    title_es: "Affogato perfecto: espresso + helado en 2 minutos",
    title_en: "Perfect affogato: espresso + ice cream in 2 minutes",
    excerpt_es: "El postre más simple y satisfactorio del mundo cafetero. Un shot, una bola de helado y un mínimo de criterio.",
    excerpt_en: "The simplest and most satisfying dessert in the coffee world. One shot, one scoop, and a minimum of common sense.",
    body_es: [
      { kind: "lede", text: "El affogato no es una receta compleja. Es un espresso caliente volcado sobre helado de vainilla. Pero la diferencia entre uno mediocre y uno memorable está en tres decisiones que puedes tomar en 30 segundos." },
      { kind: "h2", text: "Ingredientes" },
      { kind: "ul", items: [
        "Un espresso doble recién hecho (30-36 ml), con crema densa.",
        "Una bola generosa de helado de vainilla de calidad. Nada de tarrina industrial.",
        "Un vaso o copa precalentado de 150-200 ml.",
      ]},
      { kind: "h2", text: "Preparación" },
      { kind: "ol", items: [
        "Saca el helado del congelador 2 minutos antes para que no esté de piedra.",
        "Coloca la bola de helado en el vaso.",
        "Saca el espresso directamente sobre el helado.",
        "Sirve inmediatamente. No lo remuevas — deja que cada cucharada mezcle caliente y frío.",
      ]},
      { kind: "blockquote", text: "El affogato es el postre perfecto del barista: requiere espresso excelente y ninguna habilidad de pastelería.", cite: "Marcos Llovera, barista jefe" },
      { kind: "ad" },
      { kind: "h2", text: "Variaciones que funcionan" },
      { kind: "p", text: "Sustituye la vainilla por helado de avellana o pistacho. Añade un chorrito de amaretto o Baileys si es para después de cenar. Prueba con helado de chocolate blanco y un espresso de tueste oscuro para un contraste brutal." },
      { kind: "h2", text: "Errores a evitar" },
      { kind: "p", text: "No uses café de filtro — necesitas la concentración y la crema del espresso. No uses helado derretido ni helado demasiado duro. Y no lo dejes reposar: el affogato se come en el momento, mientras el contraste de temperatura es máximo." },
    ],
    body_en: [
      { kind: "lede", text: "The affogato is not a complex recipe. It's hot espresso poured over vanilla ice cream. But the difference between a mediocre one and a memorable one comes down to three decisions you can make in 30 seconds." },
      { kind: "h2", text: "Ingredients" },
      { kind: "ul", items: [
        "A freshly pulled double espresso (30-36 ml) with thick crema.",
        "A generous scoop of quality vanilla ice cream. Nothing from an industrial tub.",
        "A pre-warmed glass or cup, 150-200 ml.",
      ]},
      { kind: "h2", text: "Preparation" },
      { kind: "ol", items: [
        "Take the ice cream out of the freezer 2 minutes early so it's not rock-hard.",
        "Place the scoop in the glass.",
        "Pull the espresso directly onto the ice cream.",
        "Serve immediately. Don't stir — let each spoonful mix hot and cold.",
      ]},
      { kind: "blockquote", text: "The affogato is the barista's perfect dessert: it demands excellent espresso and zero pastry skills.", cite: "Marcos Llovera, head barista" },
      { kind: "ad" },
      { kind: "h2", text: "Variations that work" },
      { kind: "p", text: "Swap vanilla for hazelnut or pistachio ice cream. Add a splash of amaretto or Baileys for an after-dinner treat. Try white chocolate ice cream with a dark-roast espresso for a stunning contrast." },
      { kind: "h2", text: "Mistakes to avoid" },
      { kind: "p", text: "Don't use filter coffee — you need the concentration and crema of espresso. Don't use melted ice cream or ice cream that's too hard. And don't let it sit: the affogato is eaten in the moment, while the temperature contrast is at its peak." },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 32. Café con especias recetas
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "post-cafe-con-especias-recetas",
    slug: "cafe-con-especias-recetas",
    category: "recipes",
    hue: 22,
    date: "2026-04-26",
    readTime: 7,
    author: "david",
    title_es: "4 cafés con especias que puedes hacer en casa",
    title_en: "4 spiced coffees you can make at home",
    excerpt_es: "Cardamomo, canela, jengibre y clavo: cuatro especias que transforman tu café sin necesidad de jarabes industriales.",
    excerpt_en: "Cardamom, cinnamon, ginger and clove: four spices that transform your coffee without industrial syrups.",
    body_es: [
      { kind: "lede", text: "Las especias y el café llevan siglos juntos — mucho antes de que las cadenas inventaran los jarabes con sabor. Estas cuatro recetas usan especias enteras, café recién molido y nada más. Son rápidas, baratas y sorprendentemente buenas." },
      { kind: "h2", text: "1. Café con cardamomo (estilo árabe)" },
      { kind: "p", text: "Muele 2-3 vainas de cardamomo verde junto con el café. Prepáralo en ibrik o cafetera italiana. El cardamomo aporta un aroma floral e intenso que corta el amargor y deja un retrogusto mentolado. Es el café que sirven en todo Oriente Medio." },
      { kind: "h2", text: "2. Café con canela" },
      { kind: "p", text: "Añade media rama de canela de Ceilán al agua caliente mientras preparas un café de filtro o French press. La canela aporta dulzor natural sin azúcar, con notas cálidas que van bien con cafés de tueste medio. No uses canela en polvo — se apelmaza y deja residuos." },
      { kind: "h2", text: "3. Café con jengibre fresco" },
      { kind: "p", text: "Ralla una cucharadita de jengibre fresco y añádela a tu taza de café negro recién hecho. Deja infusionar 2 minutos y cuela si quieres. El jengibre da un toque picante que activa el metabolismo y combina sorprendentemente bien con cafés frutales." },
      { kind: "blockquote", text: "Las especias no enmascaran el café — lo contextualizan. Es la diferencia entre un jarabe y una especia real.", cite: "David Aguilar, tostador" },
      { kind: "ad" },
      { kind: "h2", text: "4. Café con clavo y naranja" },
      { kind: "p", text: "Clava 3-4 clavos de olor en una rodaja de naranja y colócala en el fondo de la taza antes de verter el espresso. Los aceites esenciales de la naranja y el clavo se mezclan con la crema del espresso creando un café invernal, especiado y cítrico a la vez." },
      { kind: "h2", text: "Regla de oro" },
      { kind: "p", text: "Usa siempre especias enteras y frescas. Las especias en polvo del fondo del armario no aportan nada. Y empieza con poca cantidad: es más fácil añadir que quitar." },
    ],
    body_en: [
      { kind: "lede", text: "Spices and coffee have been together for centuries — long before chains invented flavored syrups. These four recipes use whole spices, freshly ground coffee, and nothing else. They're quick, cheap, and surprisingly good." },
      { kind: "h2", text: "1. Cardamom coffee (Arabic style)" },
      { kind: "p", text: "Grind 2-3 green cardamom pods with your coffee beans. Brew in an ibrik or moka pot. Cardamom adds an intense floral aroma that cuts through bitterness and leaves a mentholated aftertaste. This is the coffee served across the Middle East." },
      { kind: "h2", text: "2. Cinnamon coffee" },
      { kind: "p", text: "Add half a Ceylon cinnamon stick to the hot water while brewing filter or French press coffee. Cinnamon adds natural sweetness without sugar, with warm notes that pair well with medium roasts. Don't use ground cinnamon — it clumps and leaves residue." },
      { kind: "h2", text: "3. Fresh ginger coffee" },
      { kind: "p", text: "Grate a teaspoon of fresh ginger and add it to your freshly brewed black coffee. Let it steep for 2 minutes, then strain if you prefer. Ginger gives a spicy kick that boosts metabolism and pairs surprisingly well with fruity coffees." },
      { kind: "blockquote", text: "Spices don't mask coffee — they contextualize it. That's the difference between a syrup and a real spice.", cite: "David Aguilar, roaster" },
      { kind: "ad" },
      { kind: "h2", text: "4. Clove and orange coffee" },
      { kind: "p", text: "Stick 3-4 whole cloves into an orange slice and place it at the bottom of the cup before pouring espresso. The essential oils from the orange and cloves blend with the espresso crema, creating a wintry coffee that's both spiced and citrusy." },
      { kind: "h2", text: "The golden rule" },
      { kind: "p", text: "Always use whole, fresh spices. Powdered spices from the back of the cupboard add nothing. And start with small amounts: it's easier to add than to take away." },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 33. Matcha latte vs café latte
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "post-matcha-latte-vs-cafe-latte",
    slug: "matcha-latte-vs-cafe-latte",
    category: "recipes",
    hue: 22,
    date: "2026-04-26",
    readTime: 6,
    author: "ana",
    title_es: "Matcha latte vs café latte: preparación y diferencias",
    title_en: "Matcha latte vs coffee latte: preparation and differences",
    excerpt_es: "Uno verde, otro marrón. Los dos con leche. Pero ahí acaban las similitudes. Analizamos cafeína, sabor, preparación y cuándo elegir cada uno.",
    excerpt_en: "One green, one brown. Both with milk. But that's where the similarities end. We break down caffeine, flavor, preparation and when to choose each.",
    body_es: [
      { kind: "lede", text: "El matcha latte ha pasado de moda de Instagram a bebida habitual en cafeterías de especialidad. Pero, ¿tiene sentido compararlo con un café latte? Analizamos las diferencias reales para que elijas con criterio, no por color." },
      { kind: "h2", text: "Cafeína: menos pero más larga" },
      { kind: "p", text: "Un matcha latte tiene unos 70 mg de cafeína; un café latte con espresso doble, unos 120-150 mg. Pero la cafeína del matcha se libera más lentamente gracias a la L-teanina, un aminoácido que suaviza el efecto estimulante. El resultado: energía sostenida sin pico ni bajón." },
      { kind: "h2", text: "Preparación del matcha latte" },
      { kind: "ol", items: [
        "Tamiza 2 g de matcha ceremonial en un bol o taza.",
        "Añade 30 ml de agua a 80 °C y bate con chasen (batidor de bambú) hasta que no haya grumos.",
        "Calienta 200 ml de leche (de vaca o vegetal) a 65 °C y viértela sobre el matcha.",
        "Remueve suavemente. No añadas azúcar — el matcha de calidad tiene dulzor natural.",
      ]},
      { kind: "blockquote", text: "El matcha no sustituye al café. Es otra categoría. Compararlos es como comparar vino y cerveza.", cite: "Ana Rivero, editora" },
      { kind: "ad" },
      { kind: "h2", text: "Sabor en taza" },
      { kind: "p", text: "El matcha latte tiene sabor vegetal, umami, con un final dulce y cremoso. El café latte tiene notas de caramelo, nuez o chocolate según el espresso, con un final más seco. Son experiencias completamente distintas." },
      { kind: "h2", text: "Cuándo elegir cada uno" },
      { kind: "p", text: "Matcha por la tarde, cuando necesitas concentración sin ansiedad. Café por la mañana, cuando necesitas el golpe de energía. Y si quieres los dos, tómate el café primero y el matcha después de comer. Tu cuerpo lo agradecerá." },
    ],
    body_en: [
      { kind: "lede", text: "The matcha latte has gone from Instagram fad to a regular offering at specialty coffee shops. But does it make sense to compare it to a coffee latte? We analyze the real differences so you can choose with criteria, not by color." },
      { kind: "h2", text: "Caffeine: less but longer-lasting" },
      { kind: "p", text: "A matcha latte has about 70 mg of caffeine; a coffee latte with a double espresso, around 120-150 mg. But matcha's caffeine is released more slowly thanks to L-theanine, an amino acid that smooths the stimulant effect. The result: sustained energy without a spike or crash." },
      { kind: "h2", text: "Making a matcha latte" },
      { kind: "ol", items: [
        "Sift 2 g of ceremonial matcha into a bowl or cup.",
        "Add 30 ml of water at 80 °C and whisk with a chasen (bamboo whisk) until lump-free.",
        "Heat 200 ml of milk (dairy or plant-based) to 65 °C and pour over the matcha.",
        "Stir gently. Don't add sugar — quality matcha has natural sweetness.",
      ]},
      { kind: "blockquote", text: "Matcha doesn't replace coffee. It's a different category. Comparing them is like comparing wine and beer.", cite: "Ana Rivero, editor" },
      { kind: "ad" },
      { kind: "h2", text: "Flavor in the cup" },
      { kind: "p", text: "The matcha latte tastes vegetal, umami, with a sweet, creamy finish. The coffee latte has caramel, nut, or chocolate notes depending on the espresso, with a drier finish. They're completely different experiences." },
      { kind: "h2", text: "When to choose each one" },
      { kind: "p", text: "Matcha in the afternoon, when you need focus without anxiety. Coffee in the morning, when you need the energy hit. And if you want both, have the coffee first and the matcha after lunch. Your body will thank you." },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 34. Receta Irish Coffee original
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "post-receta-irish-coffee-original",
    slug: "receta-irish-coffee-original",
    category: "recipes",
    hue: 22,
    date: "2026-04-27",
    readTime: 6,
    author: "marcos",
    title_es: "Irish Coffee: la receta original y por qué la haces mal",
    title_en: "Irish Coffee: the original recipe and why you're making it wrong",
    excerpt_es: "La mayoría de los Irish Coffee que sirven en bares son un desastre de nata montada y whiskey barato. La receta real es más simple y mucho mejor.",
    excerpt_en: "Most Irish Coffees served in bars are a mess of whipped cream and cheap whiskey. The real recipe is simpler and much better.",
    body_es: [
      { kind: "lede", text: "El Irish Coffee fue inventado en 1943 por Joe Sheridan en el aeropuerto de Foynes, Irlanda, para calentar a pasajeros de hidroavión empapados. No llevaba nata montada de spray ni whiskey de garrafón. Era simple, elegante y reconfortante. Así se hace de verdad." },
      { kind: "h2", text: "La receta original" },
      { kind: "ol", items: [
        "Calienta una copa de cristal con agua hirviendo y vacíala.",
        "Añade una cucharada generosa de azúcar moreno y una medida (40 ml) de whiskey irlandés.",
        "Llena la copa con café negro caliente y fuerte, dejando 2 cm arriba.",
        "Vierte nata líquida ligeramente batida (no montada) sobre el dorso de una cuchara para que flote.",
        "No remuevas. Bebe el café caliente a través de la nata fría.",
      ]},
      { kind: "h2", text: "Los errores que todos cometen" },
      { kind: "p", text: "Nata montada con sifón: NO. La nata debe estar semibatida, líquida pero espesa, para que flote y se mezcle al beber. Whiskey bourbon o escocés: NO. Tiene que ser whiskey irlandés — Jameson, Powers o similar. El perfil suave del irlandés es parte del equilibrio." },
      { kind: "blockquote", text: "El Irish Coffee se bebe, no se come. Si necesitas cuchara para la nata, lo has hecho mal.", cite: "Joe Sheridan, inventor del Irish Coffee" },
      { kind: "ad" },
      { kind: "h2", text: "El café correcto" },
      { kind: "p", text: "Usa café de tueste medio-oscuro, preparado fuerte. Un espresso largo o un café de filtro concentrado funcionan bien. El café tiene que tener cuerpo suficiente para sostenerse frente al whiskey y la nata. Un café aguado arruina el equilibrio." },
      { kind: "h2", text: "La copa importa" },
      { kind: "p", text: "La copa tradicional de Irish Coffee tiene asa y es de cristal transparente. El asa permite sujetar la copa caliente; el cristal deja ver las capas de café y nata. No es estética — es funcionalidad." },
    ],
    body_en: [
      { kind: "lede", text: "Irish Coffee was invented in 1943 by Joe Sheridan at Foynes airport, Ireland, to warm up soaking wet flying-boat passengers. It didn't feature spray-can whipped cream or bottom-shelf whiskey. It was simple, elegant, and comforting. Here's how to make it properly." },
      { kind: "h2", text: "The original recipe" },
      { kind: "ol", items: [
        "Warm a glass goblet with boiling water and empty it.",
        "Add a generous spoonful of brown sugar and a measure (40 ml) of Irish whiskey.",
        "Fill the glass with hot, strong black coffee, leaving 2 cm at the top.",
        "Pour lightly whipped (not stiff) cream over the back of a spoon so it floats.",
        "Don't stir. Drink the hot coffee through the cold cream.",
      ]},
      { kind: "h2", text: "The mistakes everyone makes" },
      { kind: "p", text: "Whipped cream from a canister: NO. The cream should be semi-whipped — liquid but thick — so it floats and blends as you drink. Bourbon or Scotch: NO. It must be Irish whiskey — Jameson, Powers, or similar. The soft profile of Irish whiskey is part of the balance." },
      { kind: "blockquote", text: "Irish Coffee is drunk, not eaten. If you need a spoon for the cream, you've done it wrong.", cite: "Joe Sheridan, inventor of Irish Coffee" },
      { kind: "ad" },
      { kind: "h2", text: "The right coffee" },
      { kind: "p", text: "Use medium-dark roast coffee, brewed strong. A lungo espresso or a concentrated filter coffee works well. The coffee needs enough body to hold its own against the whiskey and cream. A watery coffee ruins the balance." },
      { kind: "h2", text: "The glass matters" },
      { kind: "p", text: "The traditional Irish Coffee glass has a handle and is made of clear glass. The handle lets you hold it when it's hot; the glass lets you see the layers of coffee and cream. It's not aesthetics — it's function." },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 35. Café filtrado frío japonés (Kyoto drip)
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "post-cafe-filtrado-frio-japones",
    slug: "cafe-filtrado-frio-japones",
    category: "recipes",
    hue: 22,
    date: "2026-04-27",
    readTime: 7,
    author: "lucia",
    title_es: "Café filtrado frío japonés (método Kyoto drip)",
    title_en: "Japanese cold drip coffee (Kyoto drip method)",
    excerpt_es: "El Kyoto drip es el método de extracción en frío más elegante del mundo. Gota a gota, durante horas, produce un café que parece vino.",
    excerpt_en: "Kyoto drip is the world's most elegant cold extraction method. Drop by drop, over hours, it produces coffee that resembles wine.",
    body_es: [
      { kind: "lede", text: "Mientras el cold brew sumerge café en agua fría durante 12-24 horas, el Kyoto drip usa la gravedad: agua helada gotea lentamente sobre café molido, atravesándolo gota a gota. El resultado es un concentrado limpio, dulce y complejo que los japoneses llevan perfeccionando desde los años 60." },
      { kind: "h2", text: "Cómo funciona" },
      { kind: "p", text: "Una torre de tres cámaras: arriba, agua con hielo; en medio, café molido medio-grueso con un filtro; abajo, una jarra que recoge el concentrado. El agua gotea a razón de una gota por segundo, y el proceso dura entre 3 y 8 horas según el volumen." },
      { kind: "ul", items: [
        "Ratio recomendado: 1:10 (café:agua). 50 g de café para 500 ml de agua.",
        "Molienda: medio-gruesa, como para French press.",
        "Tiempo: 3-8 horas. Más lento = más dulce y complejo.",
        "Temperatura del agua: helada, entre 2-4 °C.",
      ]},
      { kind: "h2", text: "Torres asequibles" },
      { kind: "p", text: "Las torres de Kyoto drip profesionales cuestan cientos de euros, pero existen versiones caseras de plástico y cristal por 30-50 € que funcionan perfectamente para empezar. También puedes montar una torre DIY con una botella de agua, un gotero de laboratorio y una jarra." },
      { kind: "blockquote", text: "El Kyoto drip no tiene prisa. Cada gota extrae sabor sin calor, sin presión, sin violencia. Es café meditativo.", cite: "Lucía Pardo, catadora Q" },
      { kind: "ad" },
      { kind: "h2", text: "Sabor y servicio" },
      { kind: "p", text: "El concentrado resultante es sedoso, con acidez jugosa y notas que van desde fruta tropical hasta caramelo, dependiendo del café. Sírvelo con hielo y un poco de agua para diluir, o solo en copa de vino para apreciar el aroma. No le pongas leche — es un crimen." },
      { kind: "h2", text: "Diferencias con cold brew" },
      { kind: "p", text: "El cold brew sumerge (inmersión) y produce cuerpo denso con acidez baja. El Kyoto drip percola (goteo) y produce claridad, complejidad y acidez brillante. Son métodos complementarios, no competidores." },
    ],
    body_en: [
      { kind: "lede", text: "While cold brew submerges coffee in cold water for 12-24 hours, Kyoto drip uses gravity: ice-cold water drips slowly over ground coffee, passing through it drop by drop. The result is a clean, sweet, complex concentrate that the Japanese have been perfecting since the 1960s." },
      { kind: "h2", text: "How it works" },
      { kind: "p", text: "A three-chamber tower: ice water on top; medium-coarse ground coffee with a filter in the middle; a carafe collecting the concentrate at the bottom. Water drips at about one drop per second, and the process takes 3-8 hours depending on volume." },
      { kind: "ul", items: [
        "Recommended ratio: 1:10 (coffee:water). 50 g of coffee for 500 ml of water.",
        "Grind: medium-coarse, like French press.",
        "Time: 3-8 hours. Slower = sweeter and more complex.",
        "Water temperature: ice-cold, 2-4 °C.",
      ]},
      { kind: "h2", text: "Affordable towers" },
      { kind: "p", text: "Professional Kyoto drip towers cost hundreds of euros, but there are home versions in plastic and glass for €30-50 that work perfectly for getting started. You can also build a DIY tower with a water bottle, a lab dripper, and a carafe." },
      { kind: "blockquote", text: "Kyoto drip is in no rush. Each drop extracts flavor without heat, without pressure, without force. It's meditative coffee.", cite: "Lucía Pardo, Q grader" },
      { kind: "ad" },
      { kind: "h2", text: "Flavor and serving" },
      { kind: "p", text: "The resulting concentrate is silky, with juicy acidity and notes ranging from tropical fruit to caramel depending on the coffee. Serve over ice with a splash of water to dilute, or neat in a wine glass to appreciate the aroma. Don't add milk — that's a crime." },
      { kind: "h2", text: "Differences from cold brew" },
      { kind: "p", text: "Cold brew submerges (immersion) and produces dense body with low acidity. Kyoto drip percolates (drip) and produces clarity, complexity, and bright acidity. They're complementary methods, not competitors." },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 36. Tostado casero sartén
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "post-tostado-casero-sarten",
    slug: "tostado-casero-sarten",
    category: "recipes",
    hue: 22,
    date: "2026-04-28",
    readTime: 8,
    author: "david",
    title_es: "Tostar café en casa con sartén: guía para valientes",
    title_en: "Roasting coffee at home in a skillet: a guide for the brave",
    excerpt_es: "No necesitas un tostador de 500 €. Una sartén de hierro, café verde y ventilación. Así se hacía antes de que existiera la industria.",
    excerpt_en: "You don't need a €500 roaster. A cast-iron skillet, green coffee, and ventilation. This is how it was done before the industry existed.",
    body_es: [
      { kind: "lede", text: "Tostar café en sartén es el método más antiguo y rudimentario que existe. No produce resultados de tostador profesional, pero te enseña más sobre el café en 15 minutos que un año de vídeos. Y el olor que deja en la cocina es imbatible." },
      { kind: "h2", text: "Lo que necesitas" },
      { kind: "ul", items: [
        "Café verde (sin tostar): lo encuentras en tostadores que vendan crudo o en tiendas online. 250 g para empezar.",
        "Sartén de hierro fundido o acero grueso. No antiadherente — necesitas calor directo.",
        "Cuchara de madera larga para remover constantemente.",
        "Ventilación: abre ventanas y pon el extractor al máximo. Habrá humo.",
        "Un colador grande para enfriar los granos rápidamente.",
      ]},
      { kind: "h2", text: "El proceso paso a paso" },
      { kind: "ol", items: [
        "Calienta la sartén a fuego medio-alto durante 3 minutos.",
        "Añade 100 g de café verde en una sola capa. Remueve sin parar.",
        "A los 4-5 minutos oirás el primer crack — un sonido como palomitas. El café pasa a tueste claro.",
        "Sigue removiendo. A los 7-9 minutos llega el segundo crack, más sutil. Ahora es tueste medio-oscuro.",
        "Cuando alcances el color deseado, vuelca los granos en el colador y agita al aire para enfriar.",
        "Deja reposar 12-24 horas antes de moler. El café necesita desgasificar.",
      ]},
      { kind: "blockquote", text: "Tostar en sartén es como cocinar a ojo: impreciso pero íntimo. Te conecta con el grano de una forma que ninguna máquina consigue.", cite: "David Aguilar, tostador" },
      { kind: "ad" },
      { kind: "h2", text: "Qué esperar" },
      { kind: "p", text: "Tu primer tueste será irregular: granos oscuros junto a claros. Es normal. Con práctica mejorarás la uniformidad. El sabor será rústico, ahumado y con más cuerpo del que esperabas. No compite con un tueste profesional, pero es honesto y tuyo." },
      { kind: "h2", text: "Precauciones" },
      { kind: "p", text: "El humo es real y abundante. No lo hagas sin ventilación. Los granos se calientan mucho — cuidado al manipularlos. Y no tostarás más de 100-150 g por tanda en sartén: es un proceso artesanal para lotes pequeños." },
    ],
    body_en: [
      { kind: "lede", text: "Skillet roasting is the oldest and most rudimentary coffee roasting method. It won't produce professional-grade results, but it teaches you more about coffee in 15 minutes than a year of videos. And the smell it leaves in the kitchen is unbeatable." },
      { kind: "h2", text: "What you need" },
      { kind: "ul", items: [
        "Green (unroasted) coffee: find it at roasters that sell raw beans or online. 250 g to start.",
        "Cast-iron or thick steel skillet. Not nonstick — you need direct heat.",
        "Long wooden spoon for constant stirring.",
        "Ventilation: open windows and crank the extractor fan. There will be smoke.",
        "A large colander to cool beans quickly.",
      ]},
      { kind: "h2", text: "The step-by-step process" },
      { kind: "ol", items: [
        "Heat the skillet on medium-high for 3 minutes.",
        "Add 100 g of green coffee in a single layer. Stir constantly.",
        "At 4-5 minutes you'll hear first crack — a sound like popcorn. The coffee hits light roast.",
        "Keep stirring. At 7-9 minutes comes second crack, more subtle. Now it's medium-dark.",
        "When you reach the desired color, dump the beans into the colander and shake in the air to cool.",
        "Let rest 12-24 hours before grinding. The coffee needs to degas.",
      ]},
      { kind: "blockquote", text: "Skillet roasting is like cooking by feel: imprecise but intimate. It connects you to the bean in a way no machine can.", cite: "David Aguilar, roaster" },
      { kind: "ad" },
      { kind: "h2", text: "What to expect" },
      { kind: "p", text: "Your first roast will be uneven: dark beans next to light ones. That's normal. With practice you'll improve uniformity. The flavor will be rustic, smoky, and fuller-bodied than you expected. It won't compete with a professional roast, but it's honest and yours." },
      { kind: "h2", text: "Precautions" },
      { kind: "p", text: "The smoke is real and plentiful. Don't do this without ventilation. Beans get very hot — careful when handling them. And you won't roast more than 100-150 g per batch in a skillet: this is an artisan process for small lots." },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 37. Nitro coffee casero
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "post-nitro-coffee-casero",
    slug: "nitro-coffee-casero",
    category: "recipes",
    hue: 22,
    date: "2026-04-28",
    readTime: 6,
    author: "ana",
    title_es: "Nitro coffee casero: cómo hacerlo sin equipo profesional",
    title_en: "Homemade nitro coffee: how to make it without professional gear",
    excerpt_es: "El nitro coffee de las cafeterías parece magia: espuma cremosa, textura de Guinness y cero azúcar. Puedes replicarlo en casa con un sifón de nata.",
    excerpt_en: "Café nitro looks like magic: creamy foam, Guinness texture, zero sugar. You can replicate it at home with a whipped cream dispenser.",
    body_es: [
      { kind: "lede", text: "El nitro coffee infusiona café frío con nitrógeno para crear una textura aterciopelada y una espuma persistente sin leche ni azúcar. En cafeterías usan barriles y sistemas de presión, pero en casa puedes conseguir un resultado similar con un sifón de nata y una carga de N2O." },
      { kind: "h2", text: "Lo que necesitas" },
      { kind: "ul", items: [
        "Cold brew concentrado (ratio 1:5, reposado 16-24 horas en nevera).",
        "Sifón de nata de medio litro (ISI o similar).",
        "Cargas de N2O (óxido nitroso). Una o dos por medio litro.",
        "Un vaso enfriado para servir.",
      ]},
      { kind: "h2", text: "Preparación" },
      { kind: "ol", items: [
        "Prepara el cold brew concentrado con antelación: 100 g de café grueso en 500 ml de agua fría durante 16-24 horas. Filtra bien.",
        "Vierte el cold brew en el sifón. No lo llenes más del 80%.",
        "Carga una cápsula de N2O, agita vigorosamente 30 segundos.",
        "Deja reposar el sifón en la nevera 30 minutos para que el gas se integre.",
        "Sirve en un vaso frío dispensando del sifón. La cascada de burbujas debería aparecer en segundos.",
      ]},
      { kind: "blockquote", text: "El nitro coffee no es un truco — es una forma legítima de cambiar la textura del café sin añadir nada. Solo gas y frío.", cite: "Ana Rivero, editora" },
      { kind: "ad" },
      { kind: "h2", text: "Trucos para mejor resultado" },
      { kind: "p", text: "Usa café de tueste medio con notas de chocolate o caramelo — funcionan mejor con la textura cremosa del nitro. Sirve sin hielo: los hielos rompen la espuma. Y usa dos cargas en vez de una si quieres espuma más densa." },
      { kind: "h2", text: "Diferencia con el auténtico nitro" },
      { kind: "p", text: "El nitro de cafetería usa nitrógeno puro (N2), que produce burbujas más finas. El N2O del sifón de nata da burbujas ligeramente más grandes, pero el efecto visual y en boca es un 80% comparable. Para uso casero, es más que suficiente." },
    ],
    body_en: [
      { kind: "lede", text: "Nitro coffee infuses cold brew with nitrogen to create a velvety texture and persistent foam without milk or sugar. Cafés use kegs and pressure systems, but at home you can get a similar result with a whipped cream dispenser and an N2O cartridge." },
      { kind: "h2", text: "What you need" },
      { kind: "ul", items: [
        "Concentrated cold brew (1:5 ratio, steeped 16-24 hours in the fridge).",
        "Half-liter whipped cream dispenser (ISI or similar).",
        "N2O cartridges (nitrous oxide). One or two per half liter.",
        "A chilled glass for serving.",
      ]},
      { kind: "h2", text: "Preparation" },
      { kind: "ol", items: [
        "Make the concentrated cold brew ahead: 100 g of coarse coffee in 500 ml of cold water for 16-24 hours. Filter thoroughly.",
        "Pour the cold brew into the dispenser. Don't fill past 80%.",
        "Charge one N2O cartridge, shake vigorously for 30 seconds.",
        "Rest the dispenser in the fridge for 30 minutes to let the gas integrate.",
        "Serve into a chilled glass, dispensing from the siphon. The bubble cascade should appear in seconds.",
      ]},
      { kind: "blockquote", text: "Nitro coffee isn't a gimmick — it's a legitimate way to change coffee's texture without adding anything. Just gas and cold.", cite: "Ana Rivero, editor" },
      { kind: "ad" },
      { kind: "h2", text: "Tips for better results" },
      { kind: "p", text: "Use medium-roast coffee with chocolate or caramel notes — they work best with nitro's creamy texture. Serve without ice: ice breaks the foam. And use two cartridges instead of one if you want denser foam." },
      { kind: "h2", text: "Difference from real nitro" },
      { kind: "p", text: "Café nitro uses pure nitrogen (N2), which creates finer bubbles. N2O from a cream dispenser produces slightly larger bubbles, but the visual and mouthfeel is about 80% comparable. For home use, it's more than enough." },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 38. Receta espresso martini
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "post-receta-espresso-martini",
    slug: "receta-espresso-martini",
    category: "recipes",
    hue: 22,
    date: "2026-04-29",
    readTime: 6,
    author: "marcos",
    title_es: "Espresso Martini: la receta que usan los cócteles bares de Madrid",
    title_en: "Espresso Martini: the recipe Madrid cocktail bars actually use",
    excerpt_es: "El cóctel más pedido de los últimos tres años. Así lo hacen los bares que lo hacen bien — y por qué el tuyo no sabe igual.",
    excerpt_en: "The most ordered cocktail of the past three years. This is how bars that do it right make it — and why yours doesn't taste the same.",
    body_es: [
      { kind: "lede", text: "El Espresso Martini fue inventado por Dick Bradsell en Londres en los años 80 cuando una modelo le pidió un cóctel que la despertara. Desde entonces se ha convertido en el cóctel más pedido en bares de medio mundo. La receta es simple, pero los detalles importan." },
      { kind: "h2", text: "La receta de bar" },
      { kind: "ol", items: [
        "Saca un espresso doble fresco (30 ml) y déjalo enfriar 2 minutos.",
        "En coctelera con hielo: 30 ml de espresso, 40 ml de vodka, 20 ml de licor de café (Kahlúa o Mr. Black), 10 ml de sirope simple.",
        "Agita fuerte durante 15 segundos — necesitas crear espuma.",
        "Cuela con doble colado (hawthorne + fino) en copa de martini enfriada.",
        "Decora con tres granos de café sobre la espuma.",
      ]},
      { kind: "h2", text: "Por qué el tuyo no sabe igual" },
      { kind: "p", text: "Tres errores habituales: usar café viejo o de cápsulas en vez de espresso fresco (la crema es lo que crea la espuma), no agitar lo suficiente (mínimo 15 segundos, con fuerza) y usar vodka demasiado barato. El vodka no necesita ser caro, pero sí limpio." },
      { kind: "blockquote", text: "Un Espresso Martini es tan bueno como su espresso. Si no beberías ese shot solo, no lo pongas en el cóctel.", cite: "Marcos Llovera, barista jefe" },
      { kind: "ad" },
      { kind: "h2", text: "Variaciones modernas" },
      { kind: "p", text: "Algunos bares de Madrid sustituyen el vodka por mezcal para dar un toque ahumado. Otros usan licor de avellana en vez de licor de café. Y los más atrevidos añaden una pizca de sal en escamas al agitar, que resalta el dulzor del café." },
      { kind: "h2", text: "El café correcto" },
      { kind: "p", text: "Usa un espresso de tueste medio-oscuro con notas de chocolate. Los cafés frutales y ácidos no funcionan bien en cócteles — necesitas cuerpo y dulzor. Y por favor, sácalo fresco. La crema del espresso es lo que genera la espuma del cóctel." },
    ],
    body_en: [
      { kind: "lede", text: "The Espresso Martini was invented by Dick Bradsell in London in the 1980s when a model asked him for a cocktail that would 'wake me up.' Since then it has become the most ordered cocktail in bars around the world. The recipe is simple, but the details matter." },
      { kind: "h2", text: "The bar recipe" },
      { kind: "ol", items: [
        "Pull a fresh double espresso (30 ml) and let it cool 2 minutes.",
        "In a shaker with ice: 30 ml espresso, 40 ml vodka, 20 ml coffee liqueur (Kahlúa or Mr. Black), 10 ml simple syrup.",
        "Shake hard for 15 seconds — you need to build foam.",
        "Double-strain (hawthorne + fine mesh) into a chilled martini glass.",
        "Garnish with three coffee beans on the foam.",
      ]},
      { kind: "h2", text: "Why yours doesn't taste the same" },
      { kind: "p", text: "Three common mistakes: using old or pod coffee instead of fresh espresso (the crema is what creates the foam), not shaking long enough (minimum 15 seconds, with force), and using vodka that's too cheap. The vodka doesn't need to be expensive, but it needs to be clean." },
      { kind: "blockquote", text: "An Espresso Martini is only as good as its espresso. If you wouldn't drink that shot on its own, don't put it in the cocktail.", cite: "Marcos Llovera, head barista" },
      { kind: "ad" },
      { kind: "h2", text: "Modern variations" },
      { kind: "p", text: "Some Madrid bars swap vodka for mezcal for a smoky twist. Others use hazelnut liqueur instead of coffee liqueur. And the boldest add a pinch of flaky salt when shaking, which highlights the coffee's sweetness." },
      { kind: "h2", text: "The right coffee" },
      { kind: "p", text: "Use a medium-dark roast espresso with chocolate notes. Fruity, acidic coffees don't work well in cocktails — you need body and sweetness. And please, pull it fresh. The espresso crema is what generates the cocktail's foam." },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 39. Primera, segunda y tercera ola del café
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "post-cafe-segunda-ola-tercera-ola",
    slug: "cafe-segunda-ola-tercera-ola",
    category: "culture",
    hue: 36,
    date: "2026-04-29",
    readTime: 9,
    author: "lucia",
    title_es: "Primera, segunda y tercera ola del café: historia completa",
    title_en: "First, second and third wave of coffee: the full history",
    excerpt_es: "De la lata de supermercado al single origin de finca directa. Cómo el café ha pasado de commodity a experiencia en tres oleadas.",
    excerpt_en: "From supermarket tins to direct-trade single origins. How coffee went from commodity to experience in three waves.",
    body_es: [
      { kind: "lede", text: "La historia moderna del café se cuenta en tres olas. Cada una cambió qué bebemos, cómo lo preparamos y qué valor le damos a la taza. Entender estas olas explica por qué tu abuelo tomaba Nescafé, tus padres iban a Starbucks y tú haces V60 en casa." },
      { kind: "h2", text: "Primera ola: café como producto (1800s-1960s)" },
      { kind: "p", text: "La primera ola hizo el café accesible y universal. Marcas como Folgers, Maxwell House y Nescafé industrializaron el café soluble y premolido. El objetivo era conveniencia y precio, no sabor. El café era un commodity: igual en todas partes, sin origen ni matiz." },
      { kind: "h2", text: "Segunda ola: café como experiencia (1970s-2000s)" },
      { kind: "p", text: "Starbucks, Peet's y las cadenas europeas introdujeron la idea de que el café podía ser una experiencia, no solo una bebida funcional. Aparecieron los lattes, los cappuccinos y la noción de «origen» (aunque vagamente). El café subió de precio y de estatus social." },
      { kind: "ul", items: [
        "Primera ola: «Quiero café.»",
        "Segunda ola: «Quiero un latte grande de vainilla.»",
        "Tercera ola: «Quiero un etíope Yirgacheffe lavado, preparado en V60.»",
      ]},
      { kind: "blockquote", text: "Cada ola del café no reemplaza a la anterior — se apila sobre ella. Todavía existe mucho café de primera ola.", cite: "Trish Rothgeb, acuñó el término 'tercera ola'" },
      { kind: "ad" },
      { kind: "h2", text: "Tercera ola: café como artesanía (2000s-presente)" },
      { kind: "p", text: "La tercera ola trata al café como producto artesanal, similar al vino. Importan el origen específico (país, región, finca, lote), el proceso (lavado, natural, honey), el tueste (claro para resaltar terroir) y el método de preparación. Los baristas se forman como catadores y los tostadores trabajan con relaciones directas con productores." },
      { kind: "h2", text: "¿Hay una cuarta ola?" },
      { kind: "p", text: "Algunos hablan de una cuarta ola centrada en la ciencia del café: control de variables con refractómetros, agua formulada, y tostadores con perfiles digitales. Otros la asocian con la sostenibilidad radical y el precio justo para el productor. Probablemente las dos cosas a la vez." },
    ],
    body_en: [
      { kind: "lede", text: "Modern coffee history is told in three waves. Each one changed what we drink, how we brew, and how much we value the cup. Understanding these waves explains why your grandparents drank Nescafé, your parents went to Starbucks, and you're making V60 at home." },
      { kind: "h2", text: "First wave: coffee as product (1800s-1960s)" },
      { kind: "p", text: "The first wave made coffee accessible and universal. Brands like Folgers, Maxwell House and Nescafé industrialized instant and pre-ground coffee. The goal was convenience and price, not flavor. Coffee was a commodity: the same everywhere, no origin, no nuance." },
      { kind: "h2", text: "Second wave: coffee as experience (1970s-2000s)" },
      { kind: "p", text: "Starbucks, Peet's, and European chains introduced the idea that coffee could be an experience, not just a functional drink. Lattes, cappuccinos, and the notion of 'origin' (however vaguely) appeared. Coffee went up in price and social status." },
      { kind: "ul", items: [
        "First wave: 'I want coffee.'",
        "Second wave: 'I want a grande vanilla latte.'",
        "Third wave: 'I want a washed Ethiopian Yirgacheffe, brewed on a V60.'",
      ]},
      { kind: "blockquote", text: "Each wave of coffee doesn't replace the previous one — it stacks on top. Plenty of first-wave coffee still exists.", cite: "Trish Rothgeb, who coined the term 'third wave'" },
      { kind: "ad" },
      { kind: "h2", text: "Third wave: coffee as craft (2000s-present)" },
      { kind: "p", text: "The third wave treats coffee as an artisan product, similar to wine. Specific origin matters (country, region, farm, lot), as does process (washed, natural, honey), roast (light to highlight terroir), and brew method. Baristas train as cuppers and roasters build direct relationships with producers." },
      { kind: "h2", text: "Is there a fourth wave?" },
      { kind: "p", text: "Some talk about a fourth wave focused on coffee science: variable control with refractometers, formulated water, and roasters with digital profiles. Others associate it with radical sustainability and fair pricing for producers. Probably both at once." },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 40. Mejores países productores de café
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "post-mejores-paises-productores-cafe",
    slug: "mejores-paises-productores-cafe",
    category: "culture",
    hue: 36,
    date: "2026-04-30",
    readTime: 10,
    author: "david",
    title_es: "Los 10 mayores productores de café del mundo (y qué los hace únicos)",
    title_en: "The 10 largest coffee producers in the world (and what makes them unique)",
    excerpt_es: "De Brasil a Etiopía, pasando por Vietnam e Indonesia. Qué produce cada país, qué perfil tiene su café y por qué importa saberlo.",
    excerpt_en: "From Brazil to Ethiopia, via Vietnam and Indonesia. What each country produces, its coffee profile, and why it matters.",
    body_es: [
      { kind: "lede", text: "El café crece en el cinturón tropical, entre los trópicos de Cáncer y Capricornio. Pero dentro de esa franja, cada país produce café con personalidad propia. Estos son los 10 mayores productores del mundo y lo que hace especial a cada uno." },
      { kind: "h2", text: "Brasil: el gigante" },
      { kind: "p", text: "Brasil produce un tercio del café mundial. Su café tiende a ser de cuerpo medio-alto, baja acidez y notas de nuez, chocolate y caramelo. La mayor parte es arábica, cultivada en Minas Gerais, São Paulo y Bahía. Es la base de la mayoría de blends de espresso del mundo." },
      { kind: "h2", text: "Vietnam, Colombia, Indonesia y Etiopía" },
      { kind: "ul", items: [
        "Vietnam: segundo productor mundial, dominado por robusta. Cuerpo fuerte, notas terrosas. Base de muchos cafés solubles.",
        "Colombia: tercer productor, 100% arábica. Suave, equilibrado, acidez media. Las regiones de Huila y Nariño producen los mejores lotes.",
        "Indonesia: Sumatra, Java y Sulawesi. Cuerpo pesado, baja acidez, notas a tierra húmeda y especias. Proceso wet-hulling característico.",
        "Etiopía: cuna del café. Yirgacheffe y Sidamo ofrecen perfiles florales y frutales únicos en el mundo.",
      ]},
      { kind: "blockquote", text: "Conocer el país de origen es el primer paso. Conocer la región, la finca y el proceso es donde empieza el café de especialidad.", cite: "David Aguilar, tostador" },
      { kind: "ad" },
      { kind: "h2", text: "Honduras, India, Uganda, México y Guatemala" },
      { kind: "p", text: "Honduras es el mayor productor centroamericano; India cultiva robusta en el sur y arábica en las montañas; Uganda es un gigante de robusta en ascenso; México produce orgánico de altura en Chiapas y Oaxaca; Guatemala ofrece complejidad volcánica con acidez brillante, especialmente en Antigua y Huehuetenango." },
      { kind: "h2", text: "¿Y el mejor?" },
      { kind: "p", text: "No hay un «mejor país de café» — hay un café ideal para cada paladar y cada método. Brasil para espresso, Etiopía para filtro, Colombia para todo. Lo importante es probar orígenes diversos y descubrir qué terroir habla tu idioma." },
    ],
    body_en: [
      { kind: "lede", text: "Coffee grows in the tropical belt between the Tropics of Cancer and Capricorn. But within that band, each country produces coffee with its own personality. These are the world's 10 largest producers and what makes each one special." },
      { kind: "h2", text: "Brazil: the giant" },
      { kind: "p", text: "Brazil produces a third of the world's coffee. Its coffee tends toward medium-full body, low acidity, and nutty, chocolate, and caramel notes. Most is arabica, grown in Minas Gerais, São Paulo, and Bahia. It's the base of most espresso blends worldwide." },
      { kind: "h2", text: "Vietnam, Colombia, Indonesia and Ethiopia" },
      { kind: "ul", items: [
        "Vietnam: second-largest producer, dominated by robusta. Strong body, earthy notes. Base for many instant coffees.",
        "Colombia: third-largest, 100% arabica. Smooth, balanced, medium acidity. Huila and Nariño produce the best lots.",
        "Indonesia: Sumatra, Java, and Sulawesi. Heavy body, low acidity, wet earth and spice notes. Distinctive wet-hulling process.",
        "Ethiopia: birthplace of coffee. Yirgacheffe and Sidamo offer floral and fruity profiles unique in the world.",
      ]},
      { kind: "blockquote", text: "Knowing the country of origin is the first step. Knowing the region, the farm, and the process is where specialty coffee begins.", cite: "David Aguilar, roaster" },
      { kind: "ad" },
      { kind: "h2", text: "Honduras, India, Uganda, Mexico and Guatemala" },
      { kind: "p", text: "Honduras is Central America's largest producer; India grows robusta in the south and arabica in the mountains; Uganda is a rising robusta giant; Mexico produces high-altitude organic coffee in Chiapas and Oaxaca; Guatemala offers volcanic complexity with bright acidity, especially in Antigua and Huehuetenango." },
      { kind: "h2", text: "And the best?" },
      { kind: "p", text: "There's no 'best coffee country' — there's an ideal coffee for every palate and every method. Brazil for espresso, Ethiopia for filter, Colombia for everything. What matters is trying diverse origins and discovering which terroir speaks your language." },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 41. Certificaciones café explicadas
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "post-certificaciones-cafe-explicadas",
    slug: "certificaciones-cafe-explicadas",
    category: "culture",
    hue: 36,
    date: "2026-04-30",
    readTime: 8,
    author: "ana",
    title_es: "Fair Trade, Rainforest, UTZ: qué significan las certificaciones del café",
    title_en: "Fair Trade, Rainforest, UTZ: what coffee certifications actually mean",
    excerpt_es: "Sellos verdes por todas partes, pero ¿qué garantizan realmente? Desglosamos las principales certificaciones y sus limitaciones.",
    excerpt_en: "Green seals everywhere, but what do they actually guarantee? We break down the main certifications and their limitations.",
    body_es: [
      { kind: "lede", text: "Compras un café con sello Fair Trade pensando que el productor recibió un precio justo. Pero, ¿sabes cuánto le llega realmente? Las certificaciones del café son más complicadas — y más imperfectas — de lo que sus logos bonitos sugieren." },
      { kind: "h2", text: "Fair Trade" },
      { kind: "p", text: "Fair Trade establece un precio mínimo (actualmente $1,40/lb para arábica lavado) y una prima social. El objetivo es proteger a los pequeños productores de la volatilidad del mercado. Funciona bien cuando el precio de mercado está bajo, pero cuando sube por encima del mínimo, la certificación no aporta ventaja económica." },
      { kind: "h2", text: "Rainforest Alliance y UTZ" },
      { kind: "p", text: "Desde 2018, UTZ se fusionó con Rainforest Alliance. Su enfoque es la sostenibilidad ambiental y social: prohíben deforestación, regulan uso de pesticidas y exigen condiciones laborales dignas. No establecen precio mínimo — se centran en prácticas, no en economía directa." },
      { kind: "ul", items: [
        "Fair Trade: precio mínimo + prima social. Enfoque económico.",
        "Rainforest Alliance: sostenibilidad ambiental y social. Sin precio mínimo.",
        "Orgánico (USDA/EU): sin pesticidas ni fertilizantes sintéticos. Enfoque ambiental.",
        "Direct Trade: no es certificación oficial — es una relación directa tostador-productor.",
      ]},
      { kind: "blockquote", text: "Las certificaciones son mejor que nada, pero no son suficientes. La transparencia real viene del comercio directo.", cite: "Ana Rivero, editora" },
      { kind: "ad" },
      { kind: "h2", text: "Las limitaciones" },
      { kind: "p", text: "El coste de certificación puede ser prohibitivo para pequeños productores. Muchas fincas excelentes no pueden permitirse el sello aunque cumplan los requisitos. Y la auditoría no siempre garantiza cumplimiento real en el terreno." },
      { kind: "h2", text: "Qué hacer como consumidor" },
      { kind: "p", text: "Busca tostadores que publiquen precios pagados al productor (transparencia de precio en verde). Es más fiable que cualquier sello. Si compras en supermercado, elige Fair Trade o Rainforest Alliance sobre nada, pero no asumas que un sello cuenta toda la historia." },
    ],
    body_en: [
      { kind: "lede", text: "You buy a Fair Trade coffee thinking the producer got a fair price. But do you know how much actually reaches them? Coffee certifications are more complicated — and more imperfect — than their pretty logos suggest." },
      { kind: "h2", text: "Fair Trade" },
      { kind: "p", text: "Fair Trade sets a minimum price (currently $1.40/lb for washed arabica) and a social premium. The goal is to protect small producers from market volatility. It works well when the market price is low, but when it rises above the minimum, the certification offers no economic advantage." },
      { kind: "h2", text: "Rainforest Alliance and UTZ" },
      { kind: "p", text: "Since 2018, UTZ merged with Rainforest Alliance. Their focus is environmental and social sustainability: they ban deforestation, regulate pesticide use, and require decent labor conditions. They don't set a minimum price — they focus on practices, not direct economics." },
      { kind: "ul", items: [
        "Fair Trade: minimum price + social premium. Economic focus.",
        "Rainforest Alliance: environmental and social sustainability. No minimum price.",
        "Organic (USDA/EU): no synthetic pesticides or fertilizers. Environmental focus.",
        "Direct Trade: not an official certification — it's a direct roaster-producer relationship.",
      ]},
      { kind: "blockquote", text: "Certifications are better than nothing, but they're not enough. Real transparency comes from direct trade.", cite: "Ana Rivero, editor" },
      { kind: "ad" },
      { kind: "h2", text: "The limitations" },
      { kind: "p", text: "Certification costs can be prohibitive for small producers. Many excellent farms can't afford the seal even though they meet the requirements. And audits don't always guarantee real compliance on the ground." },
      { kind: "h2", text: "What to do as a consumer" },
      { kind: "p", text: "Look for roasters that publish prices paid to producers (green price transparency). It's more reliable than any seal. If you're buying from a supermarket, choose Fair Trade or Rainforest Alliance over nothing — but don't assume a seal tells the whole story." },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 42. Cultura café Italia vs España
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "post-cultura-cafe-italia-espana",
    slug: "cultura-cafe-italia-espana",
    category: "culture",
    hue: 36,
    date: "2026-05-01",
    readTime: 7,
    author: "marcos",
    title_es: "Café en Italia vs café en España: costumbres que chocan",
    title_en: "Coffee in Italy vs coffee in Spain: customs that clash",
    excerpt_es: "Un cappuccino después de comer es pecado en Roma pero normal en Madrid. Dos países cafeteros con reglas muy distintas.",
    excerpt_en: "A cappuccino after lunch is a sin in Rome but normal in Madrid. Two coffee countries with very different rules.",
    body_es: [
      { kind: "lede", text: "Italia y España son los dos grandes países cafeteros de Europa mediterránea. Ambos beben espresso, ambos tienen barras en cada esquina, pero las reglas no escritas del café son completamente opuestas. Aquí van las que más chocan." },
      { kind: "h2", text: "El cappuccino: regla de las 11" },
      { kind: "p", text: "En Italia, el cappuccino es exclusivamente una bebida de desayuno. Pedirlo después de las 11 de la mañana — y sobre todo después de comer — se considera un error de extranjero. En España, el café con leche se toma a cualquier hora sin que nadie parpadee." },
      { kind: "h2", text: "En barra vs sentado" },
      { kind: "p", text: "En Italia, el café en barra cuesta la mitad que sentado. Los italianos toman el espresso de pie, en 30 segundos, y se van. En España, el café es una excusa para sentarse, y la diferencia de precio entre barra y mesa es mínima o inexistente." },
      { kind: "ul", items: [
        "Italia: espresso en barra = 1-1,20 €. Sentado = 2,50-4 €.",
        "España: café solo en barra o mesa = 1,20-1,80 €. La diferencia es la propina.",
        "Italia: 30 segundos en la barra. España: 30 minutos en la terraza.",
      ]},
      { kind: "blockquote", text: "En Italia el café es combustible. En España es ritual social. Las dos culturas aman el café, pero por razones distintas.", cite: "Marcos Llovera, barista jefe" },
      { kind: "ad" },
      { kind: "h2", text: "Tueste y preparación" },
      { kind: "p", text: "Italia prefiere tueste oscuro y mezclas con robusta para dar crema y cuerpo. España ha vivido décadas de torrefacto (café tostado con azúcar), aunque la tercera ola está cambiando eso. En ambos países, el espresso es rey, pero el sabor base es distinto." },
      { kind: "h2", text: "¿Quién gana?" },
      { kind: "p", text: "Nadie — y esa es la gracia. Italia tiene la estandarización y la cultura del espresso rápido; España tiene la flexibilidad y la sobremesa. Si te gusta el café como pausa, España. Si te gusta como shot de energía, Italia." },
    ],
    body_en: [
      { kind: "lede", text: "Italy and Spain are Mediterranean Europe's two great coffee countries. Both drink espresso, both have bars on every corner, but the unwritten rules of coffee are completely opposite. Here are the ones that clash most." },
      { kind: "h2", text: "The cappuccino: the 11 o'clock rule" },
      { kind: "p", text: "In Italy, the cappuccino is exclusively a breakfast drink. Ordering one after 11 AM — and especially after lunch — is considered a tourist mistake. In Spain, café con leche is drunk at any hour without anyone batting an eye." },
      { kind: "h2", text: "Standing vs sitting" },
      { kind: "p", text: "In Italy, coffee at the bar costs half what it does seated. Italians take their espresso standing, in 30 seconds, and leave. In Spain, coffee is an excuse to sit down, and the price difference between bar and table is minimal or nonexistent." },
      { kind: "ul", items: [
        "Italy: espresso at the bar = €1-1.20. Seated = €2.50-4.",
        "Spain: solo at bar or table = €1.20-1.80. The difference is the tip.",
        "Italy: 30 seconds at the bar. Spain: 30 minutes on the terrace.",
      ]},
      { kind: "blockquote", text: "In Italy, coffee is fuel. In Spain, it's a social ritual. Both cultures love coffee, but for different reasons.", cite: "Marcos Llovera, head barista" },
      { kind: "ad" },
      { kind: "h2", text: "Roast and preparation" },
      { kind: "p", text: "Italy prefers dark roasts and blends with robusta for crema and body. Spain lived through decades of torrefacto (coffee roasted with sugar), though the third wave is changing that. In both countries, espresso is king, but the baseline flavor is different." },
      { kind: "h2", text: "Who wins?" },
      { kind: "p", text: "Nobody — and that's the beauty of it. Italy has standardization and the culture of the quick espresso; Spain has flexibility and the sobremesa. If you like coffee as a pause, Spain. If you like it as an energy shot, Italy." },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 43. Café filtro Europa norte
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "post-cafe-filtro-europa-norte",
    slug: "cafe-filtro-europa-norte",
    category: "culture",
    hue: 36,
    date: "2026-05-01",
    readTime: 7,
    author: "lucia",
    title_es: "Por qué el norte de Europa bebe café de filtro (y el sur espresso)",
    title_en: "Why northern Europe drinks filter coffee (and the south espresso)",
    excerpt_es: "Finlandia consume más café per cápita del mundo, pero no toma espresso. La división norte-sur del café europeo tiene explicación.",
    excerpt_en: "Finland consumes more coffee per capita than anywhere, but doesn't drink espresso. The north-south divide in European coffee has an explanation.",
    body_es: [
      { kind: "lede", text: "Los países nórdicos consumen más café per cápita que cualquier otro lugar del mundo — Finlandia lidera con 12 kg por persona al año. Pero su café es de filtro: claro, suave, en tazas grandes. Mientras tanto, el sur de Europa bebe espresso oscuro en tazas diminutas. ¿Por qué?" },
      { kind: "h2", text: "Historia y comercio" },
      { kind: "p", text: "El espresso nació en Italia a principios del siglo XX como respuesta a la industrialización: café rápido, concentrado, para trabajadores urbanos. Los países nórdicos importaron café antes, por rutas comerciales con los Países Bajos, y desarrollaron el hábito del café largo de filtro como bebida de hogar y trabajo." },
      { kind: "h2", text: "Clima y ritual" },
      { kind: "p", text: "En Escandinavia, los inviernos largos favorecen bebidas calientes que se toman lentamente. El fika sueco (pausa de café con pastel) y el kaffeost finlandés (café con queso cuajado) son rituales de tiempo largo que piden tazas grandes. El espresso es demasiado breve para esa cultura." },
      { kind: "ul", items: [
        "Finlandia: 12 kg/persona/año. Filtro por goteo, café claro.",
        "Noruega: 10 kg/persona/año. Tueste claro, tercera ola pionera.",
        "Italia: 5,9 kg/persona/año. Espresso, tueste oscuro, tazas de 30 ml.",
        "España: 4,5 kg/persona/año. Espresso con leche, tueste medio-oscuro.",
      ]},
      { kind: "blockquote", text: "El norte de Europa no bebe más café porque haga frío — bebe más porque su cultura integró el café como ritual social lento.", cite: "Lucía Pardo, catadora Q" },
      { kind: "ad" },
      { kind: "h2", text: "La tercera ola nórdica" },
      { kind: "p", text: "Noruega y Dinamarca fueron pioneros de la tercera ola en Europa. Tim Wendelboe (Oslo), Coffee Collective (Copenhague) y Drop Coffee (Estocolmo) definieron el tueste claro moderno. Su filosofía: el café es fruta, no carbón. Ese enfoque ha influido en toda la escena de especialidad europea." },
      { kind: "h2", text: "¿Se acercan los dos mundos?" },
      { kind: "p", text: "Sí. Las cafeterías de especialidad del sur de Europa sirven cada vez más filtro, y los nórdicos empiezan a apreciar espressos de calidad. La tercera ola está borrando la línea, pero la cultura base — taza grande vs taza pequeña — sigue intacta." },
    ],
    body_en: [
      { kind: "lede", text: "Nordic countries consume more coffee per capita than anywhere else in the world — Finland leads with 12 kg per person per year. But their coffee is filter: light, mild, in large cups. Meanwhile, southern Europe drinks dark espresso in tiny cups. Why?" },
      { kind: "h2", text: "History and trade" },
      { kind: "p", text: "Espresso was born in Italy in the early 20th century as an answer to industrialization: quick, concentrated coffee for urban workers. Nordic countries imported coffee earlier, through Dutch trade routes, and developed the habit of long filter coffee as a home and workplace drink." },
      { kind: "h2", text: "Climate and ritual" },
      { kind: "p", text: "In Scandinavia, long winters favor hot drinks consumed slowly. Swedish fika (coffee break with pastry) and Finnish kaffeost (coffee with curd cheese) are long-form rituals that call for big cups. Espresso is too brief for that culture." },
      { kind: "ul", items: [
        "Finland: 12 kg/person/year. Drip filter, light coffee.",
        "Norway: 10 kg/person/year. Light roast, third-wave pioneer.",
        "Italy: 5.9 kg/person/year. Espresso, dark roast, 30 ml cups.",
        "Spain: 4.5 kg/person/year. Espresso with milk, medium-dark roast.",
      ]},
      { kind: "blockquote", text: "Northern Europe doesn't drink more coffee because it's cold — they drink more because their culture integrated coffee as a slow social ritual.", cite: "Lucía Pardo, Q grader" },
      { kind: "ad" },
      { kind: "h2", text: "The Nordic third wave" },
      { kind: "p", text: "Norway and Denmark pioneered the third wave in Europe. Tim Wendelboe (Oslo), Coffee Collective (Copenhagen), and Drop Coffee (Stockholm) defined the modern light roast. Their philosophy: coffee is fruit, not charcoal. That approach has influenced the entire European specialty scene." },
      { kind: "h2", text: "Are the two worlds converging?" },
      { kind: "p", text: "Yes. Specialty shops in southern Europe serve more and more filter, and Nordics are starting to appreciate quality espresso. The third wave is blurring the line, but the baseline culture — big cup vs small cup — remains intact." },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 44. Historia cafetería Viena
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "post-historia-cafeteria-viena",
    slug: "historia-cafeteria-viena",
    category: "culture",
    hue: 36,
    date: "2026-05-02",
    readTime: 8,
    author: "ana",
    title_es: "La cafetería vienesa: patrimonio UNESCO y tradición viva",
    title_en: "The Viennese coffeehouse: UNESCO heritage and living tradition",
    excerpt_es: "Un lugar donde se inventaron ideas, se fraguaron revoluciones y se servía café con un vaso de agua y un periódico. La cafetería vienesa sigue viva.",
    excerpt_en: "A place where ideas were born, revolutions were plotted, and coffee was served with a glass of water and a newspaper. The Viennese coffeehouse lives on.",
    body_es: [
      { kind: "lede", text: "En 2011, la UNESCO reconoció la cultura de la cafetería vienesa como patrimonio cultural inmaterial de Austria. No por el café en sí, sino por lo que representa: un espacio de democracia informal donde cualquiera puede sentarse horas con una taza, un periódico y la compañía de las ideas." },
      { kind: "h2", text: "Orígenes: los sacos de los turcos" },
      { kind: "p", text: "La leyenda cuenta que en 1683, tras el sitio otomano de Viena, se encontraron sacos de café abandonados por los turcos. Georg Franz Kolschitzky abrió la primera cafetería vienesa poco después. Lo cierto es que el primer café documentado en Viena abrió en 1685, y para 1700 ya había más de 30." },
      { kind: "h2", text: "El café como institución" },
      { kind: "p", text: "En los siglos XVIII y XIX, las cafeterías vienesas se convirtieron en salones intelectuales. Freud, Trotsky, Klimt y Stefan Zweig frecuentaban sus mesas de mármol. No eran solo lugares para beber — eran oficinas, bibliotecas y clubes sociales donde las clases se mezclaban." },
      { kind: "ul", items: [
        "Café Central: abierto desde 1876, frecuentado por Freud y Trotsky.",
        "Café Sperl: desde 1880, favorito de artistas y músicos.",
        "Café Hawelka: bohemio, abierto hasta la madrugada, con buchteln recién hechos.",
      ]},
      { kind: "blockquote", text: "El café vienés no es una bebida — es una actitud. Es el derecho a sentarse, pensar y no ser molestado.", cite: "Stefan Zweig, El mundo de ayer" },
      { kind: "ad" },
      { kind: "h2", text: "El servicio vienés" },
      { kind: "p", text: "En una cafetería vienesa clásica, el café se sirve en bandeja de plata con un vaso de agua, una cucharita y a veces un bombón. El camarero (Herr Ober) tiene un estilo formal pero no frío. Se espera que te quedes horas. Pedir la cuenta es tu decisión, nunca la del camarero." },
      { kind: "h2", text: "Visitarlas hoy" },
      { kind: "p", text: "Las grandes cafeterías históricas siguen abiertas y sirven Melange, Einspänner y café turco junto a Sachertorte y strudel. Son turísticas, sí, pero la cultura sigue siendo real. El truco es ir entre semana a primera hora, cuando los habituales vieneses aún superan a los turistas." },
    ],
    body_en: [
      { kind: "lede", text: "In 2011, UNESCO recognized Viennese coffeehouse culture as intangible cultural heritage of Austria. Not because of the coffee itself, but because of what it represents: a space of informal democracy where anyone can sit for hours with a cup, a newspaper, and the company of ideas." },
      { kind: "h2", text: "Origins: the Turks' sacks" },
      { kind: "p", text: "Legend has it that in 1683, after the Ottoman siege of Vienna, sacks of coffee left behind by the Turks were found. Georg Franz Kolschitzky opened the first Viennese coffeehouse shortly after. The documented truth is that Vienna's first café opened in 1685, and by 1700 there were over 30." },
      { kind: "h2", text: "The coffeehouse as institution" },
      { kind: "p", text: "In the 18th and 19th centuries, Viennese coffeehouses became intellectual salons. Freud, Trotsky, Klimt, and Stefan Zweig frequented their marble tables. They weren't just places to drink — they were offices, libraries, and social clubs where classes mixed." },
      { kind: "ul", items: [
        "Café Central: open since 1876, frequented by Freud and Trotsky.",
        "Café Sperl: since 1880, a favorite of artists and musicians.",
        "Café Hawelka: bohemian, open until the early hours, with fresh buchteln.",
      ]},
      { kind: "blockquote", text: "Viennese coffee isn't a drink — it's an attitude. It's the right to sit, think, and not be disturbed.", cite: "Stefan Zweig, The World of Yesterday" },
      { kind: "ad" },
      { kind: "h2", text: "Viennese service" },
      { kind: "p", text: "In a classic Viennese coffeehouse, coffee is served on a silver tray with a glass of water, a small spoon, and sometimes a chocolate. The waiter (Herr Ober) has a formal but never cold style. You're expected to stay for hours. Asking for the check is your decision, never the waiter's." },
      { kind: "h2", text: "Visiting them today" },
      { kind: "p", text: "The great historic coffeehouses are still open, serving Melange, Einspänner, and Turkish coffee alongside Sachertorte and strudel. They're touristy, yes, but the culture is still real. The trick is to go on a weekday morning, when local regulars still outnumber tourists." },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 45. Café japonés kissaten
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "post-cafe-japones-kissaten",
    slug: "cafe-japones-kissaten",
    category: "culture",
    hue: 36,
    date: "2026-05-02",
    readTime: 8,
    author: "david",
    title_es: "Kissaten: las cafeterías japonesas que inspiran la tercera ola",
    title_en: "Kissaten: the Japanese coffeehouses that inspire the third wave",
    excerpt_es: "Antes de que existiera la tercera ola, los kissaten japoneses ya servían café de vertido manual con precisión milimétrica. Esta es su historia.",
    excerpt_en: "Before the third wave existed, Japanese kissaten were already serving pour-over coffee with millimetric precision. This is their story.",
    body_es: [
      { kind: "lede", text: "Los kissaten son cafeterías tradicionales japonesas que llevan desde los años 1920 sirviendo café de filtro preparado a mano, taza a taza. Mucho antes de que la tercera ola pusiera de moda el pour-over, los maestros kissaten ya dominaban el nel drip y el vertido en espiral con precisión de relojero." },
      { kind: "h2", text: "Qué es un kissaten" },
      { kind: "p", text: "Kissaten (喫茶店) significa literalmente 'tienda de beber té', pero en la práctica son cafeterías. Espacios oscuros, íntimos, con barra de madera, jazz de fondo y un maestro que prepara cada café individualmente. No hay prisa, no hay wifi, no hay portátiles. Es un refugio del mundo exterior." },
      { kind: "ul", items: [
        "Ambiente: penumbra, madera, jazz o clásica. Silencio apreciado.",
        "Servicio: el maestro prepara cada taza frente a ti, en nel drip o siphon.",
        "Menú: café de filtro, café siphon, tostadas gruesas con mantequilla, huevos cocidos.",
        "Filosofía: atención al detalle, respeto por el tiempo, artesanía como valor.",
      ]},
      { kind: "h2", text: "El nel drip japonés" },
      { kind: "p", text: "El nel drip usa un filtro de franela que produce un café con cuerpo sedoso y aceites que el papel no dejaría pasar. El maestro vierte el agua en espiral lenta, controlando el flujo con una precisión que requiere años de práctica. Es el método más exigente del café de filtro." },
      { kind: "blockquote", text: "En un kissaten, el café no es la bebida — es la excusa para detenerse. El verdadero producto es el silencio y la atención.", cite: "David Aguilar, tostador" },
      { kind: "ad" },
      { kind: "h2", text: "Influencia en la tercera ola" },
      { kind: "p", text: "La tercera ola occidental debe mucho a los kissaten. El vertido manual, el siphon, la atención al gramaje y la temperatura — todo esto existía en Japón décadas antes de que llegara a Portland o Melbourne. Hario (creadores del V60) es una empresa japonesa que nació abasteciendo kissaten." },
      { kind: "h2", text: "Dónde encontrarlos" },
      { kind: "p", text: "Tokio aún tiene cientos de kissaten, especialmente en barrios como Ginza, Shinjuku y Kanda. Muchos están desapareciendo porque sus maestros envejecen sin sucesores. Si visitas Japón, busca los que llevan más de 40 años. Son tesoros culturales que podrían no estar la próxima vez." },
    ],
    body_en: [
      { kind: "lede", text: "Kissaten are traditional Japanese coffeehouses that have been serving hand-prepared filter coffee, cup by cup, since the 1920s. Long before the third wave made pour-over trendy, kissaten masters had already perfected nel drip and spiral pouring with clockmaker precision." },
      { kind: "h2", text: "What is a kissaten" },
      { kind: "p", text: "Kissaten (喫茶店) literally means 'tea-drinking shop,' but in practice they're coffeehouses. Dark, intimate spaces with wooden counters, background jazz, and a master who prepares each coffee individually. There's no rush, no wifi, no laptops. It's a refuge from the outside world." },
      { kind: "ul", items: [
        "Atmosphere: dim lighting, wood, jazz or classical music. Silence appreciated.",
        "Service: the master prepares each cup in front of you, via nel drip or siphon.",
        "Menu: filter coffee, siphon coffee, thick buttered toast, soft-boiled eggs.",
        "Philosophy: attention to detail, respect for time, craftsmanship as a value.",
      ]},
      { kind: "h2", text: "Japanese nel drip" },
      { kind: "p", text: "Nel drip uses a flannel filter that produces coffee with a silky body and oils that paper wouldn't let through. The master pours water in a slow spiral, controlling flow with a precision that takes years to develop. It's the most demanding filter coffee method." },
      { kind: "blockquote", text: "In a kissaten, coffee isn't the drink — it's the excuse to pause. The real product is silence and attention.", cite: "David Aguilar, roaster" },
      { kind: "ad" },
      { kind: "h2", text: "Influence on the third wave" },
      { kind: "p", text: "The Western third wave owes a lot to kissaten. Manual pouring, siphon brewing, attention to grams and temperature — all of this existed in Japan decades before it reached Portland or Melbourne. Hario (makers of the V60) is a Japanese company that started out supplying kissaten." },
      { kind: "h2", text: "Where to find them" },
      { kind: "p", text: "Tokyo still has hundreds of kissaten, especially in neighborhoods like Ginza, Shinjuku, and Kanda. Many are disappearing as their masters age without successors. If you visit Japan, seek out those that have been open for over 40 years. They're cultural treasures that might not be there next time." },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 46. Báscula café cuál comprar
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "post-bascula-cafe-cual-comprar",
    slug: "bascula-cafe-cual-comprar",
    category: "gear",
    hue: 18,
    date: "2026-05-02",
    readTime: 6,
    author: "marcos",
    title_es: "Báscula para café: por qué la necesitas y cuál comprar",
    title_en: "Coffee scale: why you need one and which to buy",
    excerpt_es: "El accesorio más infravalorado del café de especialidad. Te explicamos por qué una báscula de 15 € mejora más tu café que una cafetera de 300 €.",
    excerpt_en: "The most underrated specialty coffee accessory. We explain why a €15 scale improves your coffee more than a €300 machine.",
    body_es: [
      { kind: "lede", text: "Si mides el café a ojo, cada taza es una ruleta. Una báscula con precisión de 0,1 g cuesta menos que dos bolsas de café de especialidad y te garantiza repetibilidad: la capacidad de hacer la misma taza buena mañana tras mañana." },
      { kind: "h2", text: "Por qué importa pesar" },
      { kind: "p", text: "Una cucharada de café puede pesar entre 5 y 10 g dependiendo de la molienda, el origen y la densidad del grano. Esa diferencia del 100% se traduce en una taza completamente distinta. Pesar elimina la variable más grande de tu preparación." },
      { kind: "ul", items: [
        "Espresso: 0,5 g de diferencia cambian la extracción notablemente.",
        "Filtro: el ratio café:agua (1:15, 1:16, 1:17) solo funciona si pesas ambos.",
        "French press: la molienda gruesa ocupa más volumen — las cucharas mienten.",
      ]},
      { kind: "h2", text: "Qué buscar en una báscula" },
      { kind: "ol", items: [
        "Precisión de 0,1 g como mínimo. Las de 1 g no sirven para espresso.",
        "Temporizador integrado: muy útil para pour-over y espresso.",
        "Respuesta rápida: que el peso se estabilice en menos de 1 segundo.",
        "Resistencia al agua: vas a salpicar. Busca superficie sellada.",
      ]},
      { kind: "blockquote", text: "La báscula es el accesorio que separa al aficionado del que hace buen café de verdad. Todo lo demás viene después.", cite: "Marcos Llovera, barista jefe" },
      { kind: "ad" },
      { kind: "h2", text: "Opciones por presupuesto" },
      { kind: "p", text: "Por 15-20 € encuentras básculas genéricas de 0,1 g que funcionan bien para filtro. Por 30-50 € hay modelos con temporizador y mejor respuesta. Por encima de 80 € entras en territorio profesional con conectividad Bluetooth y apps de seguimiento — útil, pero no necesario para empezar." },
      { kind: "h2", text: "Consejo final" },
      { kind: "p", text: "No necesitas la báscula más cara. Necesitas usarla cada vez. Pesa el café, pesa el agua, anota qué funciona y repítelo. La consistencia es la mejor receta." },
    ],
    body_en: [
      { kind: "lede", text: "If you measure coffee by eye, every cup is a gamble. A scale with 0.1 g precision costs less than two bags of specialty coffee and guarantees repeatability: the ability to make the same good cup morning after morning." },
      { kind: "h2", text: "Why weighing matters" },
      { kind: "p", text: "A scoop of coffee can weigh anywhere between 5 and 10 g depending on grind size, origin, and bean density. That 100% difference translates into a completely different cup. Weighing eliminates the biggest variable in your brewing." },
      { kind: "ul", items: [
        "Espresso: 0.5 g difference changes the extraction noticeably.",
        "Filter: the coffee:water ratio (1:15, 1:16, 1:17) only works if you weigh both.",
        "French press: coarse grounds take up more volume — scoops lie.",
      ]},
      { kind: "h2", text: "What to look for in a scale" },
      { kind: "ol", items: [
        "0.1 g precision minimum. 1 g scales won't cut it for espresso.",
        "Built-in timer: very useful for pour-over and espresso.",
        "Fast response: weight should stabilize in under 1 second.",
        "Water resistance: you will splash. Look for a sealed surface.",
      ]},
      { kind: "blockquote", text: "The scale is the accessory that separates the hobbyist from someone who actually makes great coffee. Everything else comes after.", cite: "Marcos Llovera, head barista" },
      { kind: "ad" },
      { kind: "h2", text: "Options by budget" },
      { kind: "p", text: "For €15-20 you'll find generic 0.1 g scales that work well for filter. At €30-50 there are models with timers and better response. Above €80 you enter professional territory with Bluetooth and tracking apps — useful but not necessary to start." },
      { kind: "h2", text: "Final tip" },
      { kind: "p", text: "You don't need the most expensive scale. You need to use it every time. Weigh the coffee, weigh the water, note what works, and repeat. Consistency is the best recipe." },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 47. Hervidor cuello cisne guía
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "post-hervidor-cuello-cisne-guia",
    slug: "hervidor-cuello-cisne-guia",
    category: "gear",
    hue: 18,
    date: "2026-05-03",
    readTime: 6,
    author: "ana",
    title_es: "Hervidor de cuello de cisne: la herramienta que cambia todo",
    title_en: "Gooseneck kettle: the tool that changes everything",
    excerpt_es: "Para café de filtro, el hervidor importa tanto como el molinillo. El cuello de cisne te da control de flujo que un hervidor normal no puede ofrecer.",
    excerpt_en: "For filter coffee, the kettle matters as much as the grinder. A gooseneck gives you flow control that a regular kettle can't offer.",
    body_es: [
      { kind: "lede", text: "Si haces V60, Chemex o cualquier café de vertido manual, el hervidor de cuello de cisne no es un capricho: es la herramienta que controla cuánta agua cae, dónde cae y a qué velocidad. Esa precisión se traduce directamente en sabor." },
      { kind: "h2", text: "Por qué el cuello de cisne" },
      { kind: "p", text: "Un hervidor convencional vierte un chorro grueso e incontrolable. En un V60, eso significa que el agua golpea el café de forma desigual, creando canales por donde fluye sin extraer y zonas donde sobre-extrae. El cuello de cisne permite un chorro fino, constante y dirigible." },
      { kind: "ul", items: [
        "Flujo controlable: de goteo fino a chorro medio, tú decides.",
        "Precisión: puedes dirigir el agua en espiral, al centro o a los bordes.",
        "Consistencia: cada vertido es igual al anterior si controlas el flujo.",
      ]},
      { kind: "h2", text: "Eléctrico vs de fuego" },
      { kind: "p", text: "Los eléctricos con control de temperatura son ideales: pones 93 °C y el agua se mantiene. Los de fuego son más baratos pero necesitas termómetro aparte. Para empezar, un eléctrico básico de cuello de cisne por 30-40 € es suficiente." },
      { kind: "blockquote", text: "El hervidor de cuello de cisne es el accesorio que más impacto tiene en el café de filtro después del molinillo. Es así de importante.", cite: "Ana Rivero, editora" },
      { kind: "ad" },
      { kind: "h2", text: "Cómo elegir" },
      { kind: "ol", items: [
        "Capacidad: 600-800 ml es ideal para uso doméstico.",
        "Control de temperatura: si puedes, elige uno con display y ajuste por grado.",
        "Material: acero inoxidable 304 como mínimo.",
        "Ergonomía: prueba el peso con agua — vas a sostenerlo varios minutos.",
      ]},
      { kind: "h2", text: "Practica antes de buscar perfección" },
      { kind: "p", text: "Los primeros vertidos con cuello de cisne serán irregulares. Es normal. Practica con agua sola sobre un recipiente vacío: espirales lentas, flujo constante, muñeca relajada. En una semana notarás la diferencia en tu V60." },
    ],
    body_en: [
      { kind: "lede", text: "If you brew V60, Chemex, or any pour-over coffee, a gooseneck kettle isn't a luxury: it's the tool that controls how much water falls, where it falls, and how fast. That precision translates directly into flavor." },
      { kind: "h2", text: "Why gooseneck" },
      { kind: "p", text: "A conventional kettle pours a thick, uncontrollable stream. On a V60, that means water hits the grounds unevenly, creating channels where it flows without extracting and zones where it over-extracts. A gooseneck allows a thin, consistent, directable stream." },
      { kind: "ul", items: [
        "Controllable flow: from fine drip to medium stream, you decide.",
        "Precision: you can direct water in spirals, to the center, or the edges.",
        "Consistency: each pour is identical to the last when you control the flow.",
      ]},
      { kind: "h2", text: "Electric vs stovetop" },
      { kind: "p", text: "Electric kettles with temperature control are ideal: set 93 °C and the water holds. Stovetop ones are cheaper but need a separate thermometer. To start, a basic electric gooseneck for €30-40 is enough." },
      { kind: "blockquote", text: "The gooseneck kettle is the accessory with the most impact on filter coffee after the grinder. It's that important.", cite: "Ana Rivero, editor" },
      { kind: "ad" },
      { kind: "h2", text: "How to choose" },
      { kind: "ol", items: [
        "Capacity: 600-800 ml is ideal for home use.",
        "Temperature control: if you can, choose one with a display and per-degree adjustment.",
        "Material: 304 stainless steel minimum.",
        "Ergonomics: test the weight with water — you'll hold it for several minutes.",
      ]},
      { kind: "h2", text: "Practice before seeking perfection" },
      { kind: "p", text: "Your first gooseneck pours will be uneven. That's normal. Practice with plain water over an empty container: slow spirals, steady flow, relaxed wrist. Within a week you'll notice the difference in your V60." },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 48. Comparativa cafeteras italianas
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "post-comparativa-cafeteras-italianas",
    slug: "comparativa-cafeteras-italianas",
    category: "gear",
    hue: 18,
    date: "2026-05-03",
    readTime: 7,
    author: "david",
    title_es: "Comparativa: Bialetti vs otras cafeteras italianas",
    title_en: "Comparison: Bialetti vs other Italian stovetop brewers",
    excerpt_es: "Bialetti inventó la moka, pero no es la única opción. Comparamos materiales, diseño y sabor con sus competidoras.",
    excerpt_en: "Bialetti invented the moka pot, but it's not the only option. We compare materials, design and flavor against the competition.",
    body_es: [
      { kind: "lede", text: "La Bialetti Moka Express es un icono del diseño italiano desde 1933. Pero en 90 años han aparecido competidoras que mejoran algunos aspectos sin perder la esencia. ¿Merece la pena la original o hay opciones mejores?" },
      { kind: "h2", text: "Bialetti Moka Express: la original" },
      { kind: "p", text: "Aluminio octogonal, diseño que no ha cambiado en décadas. Produce un café con cuerpo, algo amargo y con notas metálicas sutiles que los fans consideran parte del carácter. Es barata (15-25 €) y ubicua. El aluminio se calienta rápido pero no es apto para inducción." },
      { kind: "h2", text: "Las competidoras" },
      { kind: "ul", items: [
        "Bialetti Venus: acero inoxidable, apta para inducción. Mismo mecanismo, sabor más limpio, menos notas metálicas.",
        "Giannina: acero 18/10, válvula de seguridad superior, junta de silicona duradera. Más cara pero construida para durar décadas.",
        "Alessi Moka: diseño de Alessandro Mendini, acero, bella pero cara. Más objeto de diseño que herramienta.",
        "Pezzetti: alternativa económica en aluminio. Similar a Bialetti, con junta de peor calidad.",
      ]},
      { kind: "blockquote", text: "La mejor cafetera italiana es la que usas todos los días y limpias bien. El material importa menos que la rutina.", cite: "David Aguilar, tostador" },
      { kind: "ad" },
      { kind: "h2", text: "Aluminio vs acero inoxidable" },
      { kind: "p", text: "El aluminio transmite calor más rápido y cuesta menos, pero puede aportar sabor metálico con cafés ácidos y no funciona en inducción. El acero es más neutro en sabor, dura más y funciona en cualquier fuego, pero calienta más lento y pesa más." },
      { kind: "h2", text: "Nuestro veredicto" },
      { kind: "p", text: "Para gas y presupuesto ajustado: Bialetti Moka Express clásica. Para inducción y sabor limpio: Bialetti Venus o Giannina. Para regalo o diseño: Alessi. Y para todas: compra una junta de repuesto extra, porque es la pieza que siempre falla primero." },
    ],
    body_en: [
      { kind: "lede", text: "The Bialetti Moka Express has been an icon of Italian design since 1933. But in 90 years, competitors have appeared that improve on certain aspects without losing the essence. Is the original still worth it, or are there better options?" },
      { kind: "h2", text: "Bialetti Moka Express: the original" },
      { kind: "p", text: "Octagonal aluminum, a design unchanged for decades. It produces a full-bodied coffee, slightly bitter with subtle metallic notes that fans consider part of its character. It's cheap (€15-25) and ubiquitous. Aluminum heats fast but isn't induction-compatible." },
      { kind: "h2", text: "The competitors" },
      { kind: "ul", items: [
        "Bialetti Venus: stainless steel, induction-compatible. Same mechanism, cleaner flavor, fewer metallic notes.",
        "Giannina: 18/10 steel, superior safety valve, durable silicone gasket. More expensive but built to last decades.",
        "Alessi Moka: designed by Alessandro Mendini, steel, beautiful but pricey. More design object than tool.",
        "Pezzetti: budget aluminum alternative. Similar to Bialetti, with a lower-quality gasket.",
      ]},
      { kind: "blockquote", text: "The best Italian stovetop brewer is the one you use every day and clean properly. Material matters less than routine.", cite: "David Aguilar, roaster" },
      { kind: "ad" },
      { kind: "h2", text: "Aluminum vs stainless steel" },
      { kind: "p", text: "Aluminum transfers heat faster and costs less, but can impart metallic flavor with acidic coffees and doesn't work on induction. Steel is more flavor-neutral, lasts longer, and works on any heat source, but heats slower and weighs more." },
      { kind: "h2", text: "Our verdict" },
      { kind: "p", text: "For gas and a tight budget: classic Bialetti Moka Express. For induction and clean flavor: Bialetti Venus or Giannina. For a gift or design piece: Alessi. And for all of them: buy a spare gasket, because it's the part that always fails first." },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 49. Molinillo manual vs eléctrico
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "post-molinillo-manual-vs-electrico",
    slug: "molinillo-manual-vs-electrico",
    category: "gear",
    hue: 18,
    date: "2026-05-03",
    readTime: 7,
    author: "lucia",
    title_es: "Molinillo manual vs eléctrico: ventajas reales de cada uno",
    title_en: "Manual vs electric grinder: the real advantages of each",
    excerpt_es: "El debate eterno del café de especialidad. Te damos datos concretos, no opiniones, para que elijas según tu rutina real.",
    excerpt_en: "The eternal specialty coffee debate. We give you concrete data, not opinions, so you can choose based on your real routine.",
    body_es: [
      { kind: "lede", text: "Molinillo manual o eléctrico: la pregunta que todo aficionado al café se hace al menos una vez. La respuesta depende de cuántas tazas haces al día, qué método usas y cuánto valoras tu tiempo a las 7 de la mañana. Vamos con los datos." },
      { kind: "h2", text: "Molinillo manual: precisión portátil" },
      { kind: "p", text: "Los manuales de gama media (1Zpresso, Comandante, Timemore) usan muelas de acero o cerámica de alta precisión. Producen molienda tan uniforme como eléctricos de 300 €, pero cuestan 80-150 €. El inconveniente: moler 18 g para espresso lleva 30-45 segundos de esfuerzo físico." },
      { kind: "ul", items: [
        "Ventajas: silencioso, portátil, precio/calidad imbatible, fácil de limpiar.",
        "Desventajas: esfuerzo físico, lento para más de 2 tazas, ajuste menos intuitivo.",
        "Ideal para: viaje, 1-2 tazas al día, presupuesto limitado con exigencia alta.",
      ]},
      { kind: "h2", text: "Molinillo eléctrico: comodidad diaria" },
      { kind: "p", text: "Los eléctricos de muelas planas o cónicas eliminan el esfuerzo. Los modelos de entrada (Baratza Encore, Wilfa Svart) cuestan 120-160 € y son excelentes para filtro. Para espresso necesitas subir a 250-400 € (Eureka Mignon, DF64). Muelen 18 g en 5-10 segundos." },
      { kind: "ul", items: [
        "Ventajas: rápido, cómodo, consistente en volumen alto, ajuste fácil.",
        "Desventajas: ruidoso, ocupa espacio, retención (café que queda dentro).",
        "Ideal para: más de 2 tazas al día, familia, quien valora la velocidad matutina.",
      ]},
      { kind: "blockquote", text: "La calidad de molienda del 1Zpresso JX-Pro compite con eléctricos de 300 €. El manual gana en precio/calidad; el eléctrico gana en comodidad.", cite: "Lucía Pardo, catadora Q" },
      { kind: "ad" },
      { kind: "h2", text: "La pregunta correcta" },
      { kind: "p", text: "No es «¿cuál es mejor?» sino «¿cuántas tazas hago y cuánto esfuerzo tolero a primera hora?» Si la respuesta es 1-2 tazas y no te importa moler a mano, manual. Si haces café para la familia o simplemente quieres pulsar un botón, eléctrico." },
      { kind: "h2", text: "Nuestra recomendación" },
      { kind: "p", text: "Empieza con un manual de gama media. Si en tres meses te cansa moler a mano, vende el manual (mantienen bien el valor) y compra un eléctrico. Así no gastas de más al principio y descubres tu tolerancia real." },
    ],
    body_en: [
      { kind: "lede", text: "Manual or electric grinder: the question every coffee enthusiast asks at least once. The answer depends on how many cups you make a day, which method you use, and how much you value your time at 7 AM. Let's look at the data." },
      { kind: "h2", text: "Manual grinder: portable precision" },
      { kind: "p", text: "Mid-range manuals (1Zpresso, Comandante, Timemore) use high-precision steel or ceramic burrs. They produce grind uniformity comparable to €300 electrics, but cost €80-150. The catch: grinding 18 g for espresso takes 30-45 seconds of physical effort." },
      { kind: "ul", items: [
        "Pros: silent, portable, unbeatable price/quality, easy to clean.",
        "Cons: physical effort, slow for more than 2 cups, less intuitive adjustment.",
        "Ideal for: travel, 1-2 cups a day, tight budget with high standards.",
      ]},
      { kind: "h2", text: "Electric grinder: daily convenience" },
      { kind: "p", text: "Electric flat or conical burr grinders eliminate the effort. Entry-level models (Baratza Encore, Wilfa Svart) cost €120-160 and are excellent for filter. For espresso you need to step up to €250-400 (Eureka Mignon, DF64). They grind 18 g in 5-10 seconds." },
      { kind: "ul", items: [
        "Pros: fast, convenient, consistent at high volume, easy adjustment.",
        "Cons: noisy, takes up space, retention (coffee left inside).",
        "Ideal for: more than 2 cups a day, families, those who value morning speed.",
      ]},
      { kind: "blockquote", text: "The 1Zpresso JX-Pro's grind quality competes with €300 electrics. The manual wins on price/quality; the electric wins on convenience.", cite: "Lucía Pardo, Q grader" },
      { kind: "ad" },
      { kind: "h2", text: "The right question" },
      { kind: "p", text: "It's not 'which is better?' but 'how many cups do I make and how much effort do I tolerate first thing?' If the answer is 1-2 cups and you don't mind hand-grinding, go manual. If you make coffee for the family or simply want to press a button, go electric." },
      { kind: "h2", text: "Our recommendation" },
      { kind: "p", text: "Start with a mid-range manual. If after three months you're tired of hand-grinding, sell it (they hold value well) and buy an electric. That way you don't overspend upfront and you discover your real tolerance." },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 50. Accesorios barista esenciales
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "post-accesorios-barista-esenciales",
    slug: "accesorios-barista-esenciales",
    category: "gear",
    hue: 18,
    date: "2026-05-04",
    readTime: 6,
    author: "marcos",
    title_es: "7 accesorios de barista por menos de 50 €",
    title_en: "7 barista accessories for under €50",
    excerpt_es: "No necesitas gastar cientos de euros en accesorios. Estos siete herramientas básicas transforman tu preparación y caben en un cajón.",
    excerpt_en: "You don't need to spend hundreds on accessories. These seven basic tools transform your brewing and fit in a drawer.",
    body_es: [
      { kind: "lede", text: "El café de especialidad puede parecer un hobby caro, pero los accesorios esenciales cuestan menos que una cena fuera. Estos siete, todos por debajo de 50 €, son los que realmente marcan diferencia en tu taza diaria." },
      { kind: "h2", text: "Los 7 esenciales" },
      { kind: "ol", items: [
        "Báscula de 0,1 g con temporizador (15-30 €): la herramienta número uno para repetibilidad.",
        "Termómetro de cocina digital (8-12 €): controla la temperatura del agua si tu hervidor no lo hace.",
        "Jarra de leche de acero 350 ml (10-15 €): imprescindible si haces lattes o cappuccinos.",
        "Cepillo de limpieza para molinillo (5-8 €): saca los restos de café que alteran el sabor.",
        "Bote hermético opaco (10-15 €): guarda el café en grano fuera de la luz y el aire.",
        "Distribuidor/nivelador para portafiltros (15-25 €): mejora la uniformidad del espresso.",
        "Toalla de microfibra de barista (5 €): limpia la barra, la varilla de vapor y los derrames.",
      ]},
      { kind: "h2", text: "Lo que NO necesitas (todavía)" },
      { kind: "p", text: "No necesitas un refractómetro, un WDT tool de titanio, ni un tamper de competición. Esos son para cuando ya dominas las variables básicas. Empieza con lo esencial, aprende a usarlo bien, y luego decide si el siguiente nivel merece la inversión." },
      { kind: "blockquote", text: "El barista no se hace con gadgets. Se hace con rutina, limpieza y atención. Los accesorios solo ayudan a ser consistente.", cite: "Marcos Llovera, barista jefe" },
      { kind: "ad" },
      { kind: "h2", text: "Dónde comprar" },
      { kind: "p", text: "Tiendas de café de especialidad online suelen tener mejor selección y precio que grandes superficies. Muchos tostadores venden accesorios en su web. Evita marcas desconocidas en marketplaces — la calidad de materiales importa cuando tocas comida y agua caliente a diario." },
      { kind: "h2", text: "El accesorio que falta: conocimiento" },
      { kind: "p", text: "El mejor accesorio es gratuito: entender qué hace cada variable. Lee, experimenta, apunta resultados. Una libreta de 1 € donde anotas dosis, tiempo y sabor hace más por tu café que cualquier gadget de 50 €." },
    ],
    body_en: [
      { kind: "lede", text: "Specialty coffee can seem like an expensive hobby, but the essential accessories cost less than a dinner out. These seven, all under €50, are the ones that actually make a difference in your daily cup." },
      { kind: "h2", text: "The 7 essentials" },
      { kind: "ol", items: [
        "0.1 g scale with timer (€15-30): the number one tool for repeatability.",
        "Digital kitchen thermometer (€8-12): control water temperature if your kettle doesn't.",
        "350 ml stainless steel milk pitcher (€10-15): essential if you make lattes or cappuccinos.",
        "Grinder cleaning brush (€5-8): removes coffee residue that alters flavor.",
        "Opaque airtight canister (€10-15): stores beans away from light and air.",
        "Distributor/leveler for portafilters (€15-25): improves espresso uniformity.",
        "Barista microfiber towel (€5): cleans the counter, steam wand, and spills.",
      ]},
      { kind: "h2", text: "What you DON'T need (yet)" },
      { kind: "p", text: "You don't need a refractometer, a titanium WDT tool, or a competition tamper. Those are for when you've already mastered the basic variables. Start with the essentials, learn to use them well, then decide if the next level is worth the investment." },
      { kind: "blockquote", text: "A barista isn't made with gadgets. They're made with routine, cleanliness, and attention. Accessories just help you be consistent.", cite: "Marcos Llovera, head barista" },
      { kind: "ad" },
      { kind: "h2", text: "Where to buy" },
      { kind: "p", text: "Online specialty coffee stores usually offer better selection and prices than big-box retailers. Many roasters sell accessories on their website. Avoid unknown brands on marketplaces — material quality matters when you're handling food and hot water daily." },
      { kind: "h2", text: "The missing accessory: knowledge" },
      { kind: "p", text: "The best accessory is free: understanding what each variable does. Read, experiment, note your results. A €1 notebook where you record dose, time, and flavor does more for your coffee than any €50 gadget." },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 51. Cafetera espresso 300 euros
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "post-cafetera-espresso-300-euros",
    slug: "cafetera-espresso-300-euros",
    category: "gear",
    hue: 18,
    date: "2026-05-04",
    readTime: 8,
    author: "ana",
    title_es: "Las 3 mejores cafeteras espresso por menos de 300 € en 2026",
    title_en: "The 3 best espresso machines under €300 in 2026",
    excerpt_es: "No necesitas gastar 1.000 € para hacer espresso en casa. Estas tres máquinas producen shots dignos de barra por menos de lo que piensas.",
    excerpt_en: "You don't need to spend €1,000 for home espresso. These three machines pull bar-worthy shots for less than you think.",
    body_es: [
      { kind: "lede", text: "El mercado de cafeteras espresso de entrada ha mejorado enormemente en los últimos años. Máquinas que antes costaban 500 € ahora tienen equivalentes funcionales por menos de 300 €. Hemos probado las tres que más nos convencen este año." },
      { kind: "h2", text: "Qué buscamos" },
      { kind: "p", text: "Para esta selección evaluamos: estabilidad de temperatura, calidad del portafiltros, presión real (no solo la que dice la etiqueta), capacidad de la caldera y facilidad de mantenimiento. No buscamos máquinas perfectas — buscamos las que sacan el mejor partido a 300 €." },
      { kind: "ul", items: [
        "Portafiltros de 58 mm: el estándar profesional. Permite usar cestas de calidad.",
        "Caldera de acero o aluminio grueso: estabilidad térmica durante la extracción.",
        "Varilla de vapor funcional: capaz de texturizar leche para latte art básico.",
        "Bandeja de goteo extraíble: limpieza diaria sin complicaciones.",
      ]},
      { kind: "h2", text: "Las tres candidatas" },
      { kind: "p", text: "Las tres máquinas que mejor equilibran precio y rendimiento en 2026 son semiautomáticas con portafiltros presurizado y no presurizado incluido. Esto te permite empezar con el presurizado (más fácil) y pasar al no presurizado cuando mejores tu molienda." },
      { kind: "blockquote", text: "Una cafetera de 300 € con un buen molinillo supera a una de 800 € con café premolido. Siempre. Sin excepciones.", cite: "Ana Rivero, editora" },
      { kind: "ad" },
      { kind: "h2", text: "La importancia del molinillo" },
      { kind: "p", text: "Ninguna cafetera de este rango produce buen espresso con café premolido. Necesitas un molinillo capaz de moler para espresso — con ajuste fino entre pasos. Si tu presupuesto total es 300 €, pon 150 € en la cafetera y 150 € en un molinillo manual de calidad." },
      { kind: "h2", text: "Nuestra recomendación" },
      { kind: "p", text: "Empieza con el portafiltros presurizado para aprender sin frustrarte. Cuando consigas shots consistentes, cambia al no presurizado y afina la molienda. El salto de calidad es enorme, pero requiere un molinillo a la altura." },
    ],
    body_en: [
      { kind: "lede", text: "The entry-level espresso machine market has improved enormously in recent years. Machines that used to cost €500 now have functional equivalents under €300. We've tested the three that convinced us most this year." },
      { kind: "h2", text: "What we looked for" },
      { kind: "p", text: "For this selection we evaluated: temperature stability, portafilter quality, actual pressure (not just what the label says), boiler capacity, and ease of maintenance. We weren't looking for perfect machines — we were looking for the ones that get the most out of €300." },
      { kind: "ul", items: [
        "58 mm portafilter: the professional standard. Allows quality baskets.",
        "Steel or thick aluminum boiler: thermal stability during extraction.",
        "Functional steam wand: capable of texturing milk for basic latte art.",
        "Removable drip tray: hassle-free daily cleaning.",
      ]},
      { kind: "h2", text: "The three contenders" },
      { kind: "p", text: "The three machines that best balance price and performance in 2026 are semi-automatics with both pressurized and non-pressurized portafilter baskets included. This lets you start with pressurized (easier) and switch to non-pressurized as your grind improves." },
      { kind: "blockquote", text: "A €300 machine with a good grinder outperforms an €800 machine with pre-ground coffee. Always. No exceptions.", cite: "Ana Rivero, editor" },
      { kind: "ad" },
      { kind: "h2", text: "The grinder matters" },
      { kind: "p", text: "No machine in this range produces good espresso with pre-ground coffee. You need a grinder capable of espresso-fine grinding — with fine adjustment between steps. If your total budget is €300, put €150 on the machine and €150 on a quality manual grinder." },
      { kind: "h2", text: "Our recommendation" },
      { kind: "p", text: "Start with the pressurized basket to learn without frustration. When you're pulling consistent shots, switch to non-pressurized and dial in the grind. The quality leap is huge, but it requires a grinder that can keep up." },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 52. Tamper, distribuidor y WDT
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "post-tamper-distribuidor-wdt",
    slug: "tamper-distribuidor-wdt",
    category: "gear",
    hue: 18,
    date: "2026-05-04",
    readTime: 7,
    author: "david",
    title_es: "Tamper, distribuidor y WDT: para qué sirve cada uno",
    title_en: "Tamper, distributor and WDT: what each one does",
    excerpt_es: "Tres herramientas de espresso que parecen iguales pero hacen cosas muy distintas. Te explicamos cuándo usar cada una y cuál necesitas de verdad.",
    excerpt_en: "Three espresso tools that look alike but do very different things. We explain when to use each and which you actually need.",
    body_es: [
      { kind: "lede", text: "Si estás empezando con el espresso, es fácil confundir tamper, distribuidor y WDT tool. Los tres actúan sobre el café en el portafiltros, pero en momentos distintos y con funciones distintas. Aclararlos te ahorra dinero y frustraciones." },
      { kind: "h2", text: "WDT tool: romper grumos" },
      { kind: "p", text: "WDT significa Weiss Distribution Technique. Es una herramienta con agujas finas (0,3-0,4 mm) que se usa para remover el café molido dentro del portafiltros ANTES de compactarlo. Su función es romper grumos y distribuir las partículas uniformemente, evitando canales por donde el agua pase demasiado rápido." },
      { kind: "h2", text: "Distribuidor: nivelar la superficie" },
      { kind: "p", text: "El distribuidor (o leveler) es un disco con aspas que se gira sobre el café en el portafiltros para nivelar la superficie. Va DESPUÉS del WDT y ANTES del tamper. Crea una capa superior plana que permite un compactado uniforme. No comprime el café — solo lo nivela." },
      { kind: "h2", text: "Tamper: compactar" },
      { kind: "p", text: "El tamper es la pieza final: comprime el café molido y nivelado en un disco denso y uniforme que ofrece resistencia al agua. Sin un buen tampeado, el agua encuentra caminos de menor resistencia y la extracción es desigual." },
      { kind: "ul", items: [
        "Orden correcto: moler → WDT → distribuidor → tamper → extraer.",
        "Si solo puedes tener uno: tamper. Es imprescindible.",
        "Si puedes tener dos: tamper + WDT. El distribuidor es el más prescindible.",
        "Tamaño: asegúrate de que coincidan con el diámetro de tu portafiltros (58 mm, 54 mm, 51 mm).",
      ]},
      { kind: "blockquote", text: "El WDT tool casero más eficaz es un corcho de vino con agujas de acupuntura clavadas. Cuesta 2 € y funciona igual que uno de 30 €.", cite: "David Aguilar, tostador" },
      { kind: "ad" },
      { kind: "h2", text: "¿Necesitas los tres?" },
      { kind: "p", text: "Para empezar, el tamper que viene con tu cafetera (si es de tamaño correcto) y un WDT casero son suficientes. El distribuidor es un lujo que aporta consistencia pero no es imprescindible. Invierte primero en un buen molinillo — influye más que cualquiera de estas tres herramientas." },
      { kind: "h2", text: "Errores de tampeado" },
      { kind: "p", text: "No necesitas fuerza bruta: 15-20 kg de presión son suficientes. Lo importante es que sea nivelado y consistente. Tampear torcido crea un lado más denso que otro, y el agua siempre elige el camino fácil. Practica con una báscula debajo del portafiltros hasta que calibres la presión." },
    ],
    body_en: [
      { kind: "lede", text: "If you're starting out with espresso, it's easy to confuse the tamper, distributor, and WDT tool. All three act on the coffee in the portafilter, but at different stages and with different functions. Clarifying them saves you money and frustration." },
      { kind: "h2", text: "WDT tool: breaking up clumps" },
      { kind: "p", text: "WDT stands for Weiss Distribution Technique. It's a tool with fine needles (0.3-0.4 mm) used to stir the ground coffee inside the portafilter BEFORE compacting. Its function is to break up clumps and distribute particles evenly, preventing channels where water passes too quickly." },
      { kind: "h2", text: "Distributor: leveling the surface" },
      { kind: "p", text: "The distributor (or leveler) is a disc with fins that spins over the coffee in the portafilter to level the surface. It goes AFTER WDT and BEFORE the tamper. It creates a flat top layer that allows for uniform compaction. It doesn't compress the coffee — it only levels it." },
      { kind: "h2", text: "Tamper: compressing" },
      { kind: "p", text: "The tamper is the final piece: it compresses the ground, leveled coffee into a dense, uniform disc that resists water. Without proper tamping, water finds paths of least resistance and extraction is uneven." },
      { kind: "ul", items: [
        "Correct order: grind → WDT → distributor → tamper → extract.",
        "If you can only have one: tamper. It's essential.",
        "If you can have two: tamper + WDT. The distributor is the most dispensable.",
        "Size: make sure they match your portafilter diameter (58 mm, 54 mm, 51 mm).",
      ]},
      { kind: "blockquote", text: "The most effective homemade WDT tool is a wine cork with acupuncture needles stuck in it. Costs €2 and works just as well as a €30 one.", cite: "David Aguilar, roaster" },
      { kind: "ad" },
      { kind: "h2", text: "Do you need all three?" },
      { kind: "p", text: "To start, the tamper that comes with your machine (if it's the right size) and a DIY WDT are enough. The distributor is a luxury that adds consistency but isn't essential. Invest in a good grinder first — it influences the result more than any of these three tools." },
      { kind: "h2", text: "Tamping mistakes" },
      { kind: "p", text: "You don't need brute force: 15-20 kg of pressure is enough. What matters is that it's level and consistent. Tamping at an angle creates one side denser than the other, and water always takes the easy path. Practice with a scale under the portafilter until you calibrate the pressure." },
    ],
  },

  { id: "post-auto-2026-05-05-357", slug: "molinillo-manual-vs-el-ctrico-cu-l-elegir-seg-n-tu-caf",
    category: "gear", hue: 14, date: "2026-05-05", readTime: 3, author: "lucia",
    title_es: "Molinillo manual vs eléctrico: cuál elegir según tu café",
    title_en: "Hand grinder vs electric: which to choose for your coffee",
    excerpt_es: "La elección entre un molinillo manual y uno eléctrico puede ser crucial para disfrutar del café perfecto. La diferencia en la consistencia del molido y el control sobre la molienda son factores clave que debes considerar.",
    excerpt_en: "Choosing between a manual and electric grinder can make all the difference in enjoying the perfect cup of coffee. Factors such as grind consistency and control are crucial to consider.",
    body_es: [
    {
        "kind": "lede",
        "text": "La elección entre un molinillo manual y uno eléctrico puede ser crucial para disfrutar del café perfecto. La diferencia en la consistencia del molido, el control y los ajustes, la portabilidad, el ruido, la inversión inicial y el mantenimiento son factores clave que debes considerar."
    },
    {
        "kind": "h2",
        "text": "Consisencia de molido: ¿qué logra cada uno?"
    },
    {
        "kind": "p",
        "text": "Los molinillos manuales, como el Hario, ofrecen una gran uniformidad en el molido, lo que puede resultar en una extracción más precisa y un sabor más equilibrado. Por otro lado, los molinillos eléctricos, como el Baratza, pueden ofrecer una mayor velocidad y comodidad, pero pueden requerir un ajuste más preciso para lograr la consistencia deseada."
    },
    {
        "kind": "ul",
        "items": [
            "Molinillos manuales: mayor control sobre la consistencia del molido",
            "Molinillos eléctricos: mayor velocidad y comodidad, pero requieren ajuste preciso"
        ]
    },
    {
        "kind": "ad"
    },
    {
        "kind": "h2",
        "text": "Control y ajustes: precisión al detalle"
    },
    {
        "kind": "p",
        "text": "Los molinillos manuales suelen tener un rango de ajustes micrométricos que permiten un control preciso sobre la molienda, lo que es ideal para métodos de preparación como el espresso o el filtro. Los molinillos eléctricos, por otro lado, pueden tener sistemas de muescas que facilitan el ajuste, pero pueden requerir un poco más de práctica para dominar."
    },
    {
        "kind": "ol",
        "items": [
            "Ajustar la molienda para espresso: 1-2 clics en un molinillo manual",
            "Ajustar la molienda para filtro: 3-4 clics en un molinillo manual"
        ]
    },
    {
        "kind": "h2",
        "text": "Para quién es ideal cada opción"
    },
    {
        "kind": "p",
        "text": "Los molinillos manuales son ideales para aquellos que buscan un control preciso sobre la molienda y están dispuestos a invertir un poco de tiempo y esfuerzo en el proceso. Los molinillos eléctricos, por otro lado, son ideales para aquellos que buscan comodidad y velocidad, y están dispuestos a aceptar un poco menos de control sobre la molienda."
    }
],
    body_en: [
    {
        "kind": "lede",
        "text": "Choosing between a manual and electric grinder can make all the difference in enjoying the perfect cup of coffee. Factors such as grind consistency, control and adjustments, portability, noise, initial investment, and maintenance are crucial to consider."
    },
    {
        "kind": "h2",
        "text": "Grind Consistency: What Each Achieves"
    },
    {
        "kind": "p",
        "text": "Manual grinders, like the Hario, offer a high level of grind uniformity, which can result in a more precise extraction and a balanced flavor. On the other hand, electric grinders, like the Baratza, can offer greater speed and convenience, but may require more precise adjustment to achieve the desired consistency."
    },
    {
        "kind": "ul",
        "items": [
            "Manual grinders: greater control over grind consistency",
            "Electric grinders: faster and more convenient, but require precise adjustment"
        ]
    },
    {
        "kind": "ad"
    },
    {
        "kind": "h2",
        "text": "Control and Adjustments: Precision Matters"
    },
    {
        "kind": "p",
        "text": "Manual grinders typically have a range of micrometric adjustments that allow for precise control over the grind, making them ideal for preparation methods like espresso or pour-over. Electric grinders, on the other hand, may have notch systems that make adjustment easier, but may require a bit more practice to master."
    },
    {
        "kind": "ol",
        "items": [
            "Adjusting the grind for espresso: 1-2 clicks on a manual grinder",
            "Adjusting the grind for pour-over: 3-4 clicks on a manual grinder"
        ]
    },
    {
        "kind": "h2",
        "text": "Who is Each Option Best For?"
    },
    {
        "kind": "p",
        "text": "Manual grinders are ideal for those who seek precise control over the grind and are willing to invest a bit of time and effort into the process. Electric grinders, on the other hand, are ideal for those who prioritize convenience and speed, and are willing to accept a bit less control over the grind."
    }
],
  },

  { id: "post-auto-2026-05-05-509", slug: "prensa-francesa-vale-la-pena-o-es-un-mito",
    category: "gear", hue: 38, date: "2026-05-05", readTime: 3, author: "david",
    title_es: "Prensa francesa: ¿vale la pena o es un mito?",
    title_en: "French Press: Worth It or Overrated?",
    excerpt_es: "La prensa francesa es económica pero imperfecta: analizamos cuándo compensa usarla y cuándo es mejor optar por otros métodos de preparación.",
    excerpt_en: "The French press is affordable but flawed—here's when it's worth using and when to choose other brewing methods instead.",
    body_es: [
    {
        "kind": "lede",
        "text": "La prensa francesa es un clásico en las cocinas de los amantes del café, pero ¿realmente vale la pena o es puro marketing? Analizamos sus ventajas, desventajas y el tipo de bebedor al que le conviene."
    },
    {
        "kind": "h2",
        "text": "¿Por qué la prensa francesa divide opiniones?"
    },
    {
        "kind": "p",
        "text": "Este método es económico (15-40€) y sencillo de usar, pero muchos baristas lo critican por dejar posos y acelerar la oxidación del café. Curiosidad histórica: pese a su nombre, fue patentado en Italia en 1929 por Attilio Calimani."
    },
    {
        "kind": "h2",
        "text": "Precio real frente a competidores directos"
    },
    {
        "kind": "ul",
        "items": [
            "Prensa francesa básica: 15€ (sin gastos recurrentes)",
            "V60 + filtros de papel: 20€ inicial + 5€/mes en filtros",
            "Aeropress: 35€ (filtros reutilizables disponibles)"
        ]
    },
    {
        "kind": "p",
        "text": "Aunque es la opción más barata, requiere molido grueso, lo que aumenta el consumo de café (hasta 20% más que métodos de filtro)."
    },
    {
        "kind": "ad"
    },
    {
        "kind": "h2",
        "text": "Sabor: lo que ganas y lo que pierdes"
    },
    {
        "kind": "p",
        "text": "Según la Specialty Coffee Association (SCA), la extracción en prensa francesa es menos uniforme que en V60 debido a la inmersión total. Sin embargo, retiene aceites esenciales que aportan cuerpo y son ideales para perfiles achocolatados. No recomendada para cafés florales o de alta acidez."
    },
    {
        "kind": "h2",
        "text": "Limpieza y mantenimiento: el lado oculto"
    },
    {
        "kind": "ol",
        "items": [
            "Limpieza básica: 2-3 minutos (desmontar filtro de malla)",
            "Mantenimiento clave: remojar en vinagre 1 vez cada 2 semanas para eliminar aceites rancios",
            "Comparativa: un V60 se limpia en 30 segundos con solo desechar el filtro"
        ]
    },
    {
        "kind": "h2",
        "text": "¿Para quién merece la pena realmente?"
    },
    {
        "kind": "p",
        "text": "Si buscas economía y no te molestan los posos, es una gran opción. Para mayor claridad, existen prensas con filtro doble (desde 20€) o la Aeropress, que ofrece limpieza similar por precio comparable. Los puristas de cafés complejos deberían considerar otros métodos."
    }
],
    body_en: [
    {
        "kind": "lede",
        "text": "The French press sits in every coffee lover's cabinet, but does it live up to the hype? We break down its pros, cons, and who should actually use it."
    },
    {
        "kind": "h2",
        "text": "Why the French press splits opinions"
    },
    {
        "kind": "p",
        "text": "Affordable ($20-50) and foolproof, yet many baristas hate it for its sludge and oxidation issues. Fun fact: despite its name, it was patented in Italy by Attilio Calimani in 1929."
    },
    {
        "kind": "h2",
        "text": "True cost vs competitors"
    },
    {
        "kind": "ul",
        "items": [
            "Basic French press: $20 (no recurring costs)",
            "V60 + paper: $25 initial + $6/month for filters",
            "Aeropress: $40 (reusable filters available)"
        ]
    },
    {
        "kind": "p",
        "text": "While cheapest upfront, it requires coarser grinds, increasing coffee consumption by up to 20% compared to pour-over methods."
    },
    {
        "kind": "ad"
    },
    {
        "kind": "h2",
        "text": "Flavor trade-offs"
    },
    {
        "kind": "p",
        "text": "SCA research shows French press extraction is less even than V60 due to full immersion. However, it retains essential oils that enhance body—perfect for chocolatey profiles. Avoid for floral or bright coffees."
    },
    {
        "kind": "h2",
        "text": "The hidden cleaning hassle"
    },
    {
        "kind": "ol",
        "items": [
            "Basic cleanup: 2-3 min (disassembling mesh)",
            "Key maintenance: soak in vinegar biweekly to remove rancid oils",
            "Comparison: V60 cleans in 30 sec by just tossing the paper filter"
        ]
    },
    {
        "kind": "h2",
        "text": "Who should actually buy one?"
    },
    {
        "kind": "p",
        "text": "Great for budget drinkers who don't mind sediment. For clarity, dual-filter presses (from $25) or Aeropress offer similar pricing. Complexity seekers should explore other brewers."
    }
],
  },

  { id: "post-auto-2026-05-05-985", slug: "mejora-tu-caf-con-accesorios",
    category: "gear", hue: 14, date: "2026-05-05", readTime: 3, author: "lucia",
    title_es: "Mejora tu café con accesorios",
    title_en: "Upgrade Your Coffee Game",
    excerpt_es: "Descubre qué accesorios de café realmente mejoran tu bebida y cuáles son puro marketing. Consejos prácticos de expertos.",
    excerpt_en: "Learn which coffee tools actually improve your brew and which are just hype. Expert-backed tips for every budget.",
    body_es: [
    {
        "kind": "lede",
        "text": "El café perfecto no solo depende de los granos, sino también de los accesorios que usas. Desde el molinillo hasta el termómetro, cada herramienta puede marcar la diferencia en el sabor y la experiencia. En este artículo, exploramos cuáles valen la pena y cómo elegirlos."
    },
    {
        "kind": "h2",
        "text": "Introducción a los accesorios de café"
    },
    {
        "kind": "p",
        "text": "Según un estudio de la Universidad de California, Davis ), la consistencia en la preparación del café es clave para extraer los sabores óptimos. Accesorios como el tamper o el molinillo ayudan a controlar variables críticas como el tamaño de molienda y la presión, evitando sabores amargos o aguados."
    },
    {
        "kind": "h2",
        "text": "Tamper y distribuidor: ¿qué son y para qué sirven?"
    },
    {
        "kind": "p",
        "text": "El tamper compacta el café molido en el portafiltro para una extracción uniforme, mientras que el distribuidor nivela los granos antes de presionar. Investigaciones del Specialty Coffee Association (SCA) muestran que un mal uso del tamper puede reducir hasta un 30% la eficiencia de extracción."
    },
    {
        "kind": "ul",
        "items": [
            "Tamper: Elige uno de acero inoxidable con base plana para mayor durabilidad.",
            "Distribuidor: Opta por ajustes de altura regulables para diferentes dosis."
        ]
    },
    {
        "kind": "ad"
    },
    {
        "kind": "h2",
        "text": "Accesorios que valen la pena: molinillo, hervidor y termómetro"
    },
    {
        "kind": "p",
        "text": "Un molinillo de fresas (no cuchillas) garantiza una molienda uniforme, clave para evitar sobre extracción. El hervidor con control de temperatura y el termómetro son esenciales para métodos como el pour-over, donde el agua a 92-96°C optimiza los sabores, según la SCA."
    },
    {
        "kind": "h2",
        "text": "Accesorios que no valen la pena: ¿qué puedes prescindir?"
    },
    {
        "kind": "p",
        "text": "Evita gadgets como 'medidores de crema' o 'espumadores automáticos' sin respaldo científico. Un estudio del Journal of Food Science (2018) confirmó que muchos no impactan en el sabor y solo añaden complejidad innecesaria."
    },
    {
        "kind": "h2",
        "text": "Consejos para elegir los accesorios adecuados"
    },
    {
        "kind": "ol",
        "items": [
            "Prioriza calidad sobre cantidad: Invierte en un buen molinillo antes que en múltiples herramientas.",
            "Considera tu método de preparación: Un aeropress necesita menos accesorios que un espresso.",
            "Espacio y presupuesto: Si tienes poca cocina, opta por herramientas multifunción."
        ]
    },
    {
        "kind": "h2",
        "text": "Conclusión: cómo mejorar tu café con accesorios"
    },
    {
        "kind": "p",
        "text": "Los accesorios correctos, usados con técnica adecuada, transforman tu café de bueno a excepcional. Enfócate en herramientas probadas (molinillo, tamper) y descarta las modas sin fundamento. ¡Tu paladar y tu billetera lo agradecerán!"
    }
],
    body_en: [
    {
        "kind": "lede",
        "text": "Great coffee isn’t just about the beans—it’s about the tools you use. From grinders to kettles, each accessory can elevate or ruin your brew. Here’s a no-nonsense guide to the gear that matters and how to choose it."
    },
    {
        "kind": "h2",
        "text": "Why Coffee Accessories Matter"
    },
    {
        "kind": "p",
        "text": "Research from UC Davis shows that consistency in brewing is crucial for flavor extraction. Tools like tampers and grinders help control variables like grind size and pressure, preventing bitter or weak coffee."
    },
    {
        "kind": "h2",
        "text": "Tamper and Distributor: The Dynamic Duo"
    },
    {
        "kind": "p",
        "text": "A tamper compacts coffee grounds for even extraction, while a distributor levels them beforehand. The Specialty Coffee Association (SCA) found that improper tamping can reduce extraction efficiency by 30%."
    },
    {
        "kind": "ul",
        "items": [
            "Tamper: Choose stainless steel with a flat base for durability.",
            "Distributor: Look for adjustable height settings for different doses."
        ]
    },
    {
        "kind": "ad"
    },
    {
        "kind": "h2",
        "text": "Worth-It Accessories: Grinder, Kettle, Thermometer"
    },
    {
        "kind": "p",
        "text": "A burr grinder (not blades) ensures uniform grounds, key to avoiding over-extraction. A gooseneck kettle and thermometer are must-haves for pour-over, where water at 195-205°F (SCA standard) unlocks optimal flavors."
    },
    {
        "kind": "h2",
        "text": "Skip These: Overhyped Tools"
    },
    {
        "kind": "p",
        "text": "Avoid gimmicks like 'crema gauges' or automatic frothers without scientific backing. A 2018 Journal of Food Science study confirmed most don’t impact taste and just add clutter."
    },
    {
        "kind": "h2",
        "text": "How to Choose the Right Gear"
    },
    {
        "kind": "ol",
        "items": [
            "Quality over quantity: Invest in a good grinder first.",
            "Match your brew method: Espresso needs more tools than French press.",
            "Space and budget: Compact kitchens benefit from multi-use tools."
        ]
    },
    {
        "kind": "h2",
        "text": "Final Tip: Less Is More"
    },
    {
        "kind": "p",
        "text": "The right tools, used correctly, turn good coffee into extraordinary. Focus on proven gear (grinder, tamper) and skip the hype. Your taste buds—and wallet—will thank you."
    }
],
  },

  { id: "post-auto-2026-05-06-136", slug: "cafeter-a-la-colombe",
    category: "culture", hue: 34, date: "2026-05-06", readTime: 3, author: "david",
    title_es: "Cafetería La Colombe",
    title_en: "La Colombe Cafe",
    excerpt_es: "La Colombe es una de las cafeterías más reconocidas en la escena del café especialidad, con una historia que se remonta a 1994. Con ubicaciones en varias ciudades de Estados Unidos, La Colombe ha obtenido numerosos premios por su compromiso con la calidad y la innovación en el mundo del café.",
    excerpt_en: "La Colombe is one of the most recognized coffee shops in the specialty coffee scene, with a history dating back to 1994. With locations in several US cities, La Colombe has won numerous awards for its commitment to quality and innovation in the world of coffee.",
    body_es: [
    {
        "kind": "lede",
        "text": "La Colombe es una de las cafeterías más reconocidas en la escena del café especialidad, con una historia que se remonta a 1994 cuando fue fundada por Todd Carmichael y J.P. Iberti en Filadelfia. Con ubicaciones en varias ciudades de Estados Unidos, La Colombe ha obtenido numerosos premios por su compromiso con la calidad y la innovación en el mundo del café."
    },
    {
        "kind": "h2",
        "text": "Introducción a La Colombe"
    },
    {
        "kind": "p",
        "text": "La Colombe se ha expandido a lo largo de los años, con ubicaciones en ciudades como Nueva York, Chicago y Washington D.C. La cafetería ha recibido premios como el de 'Mejor Cafetería' en la revista Philadelphia Magazine y ha sido reconocida por su compromiso con la sostenibilidad y la calidad en la industria del café."
    },
    {
        "kind": "h2",
        "text": "Filosofía de la calidad"
    },
    {
        "kind": "p",
        "text": "La Colombe se enfoca en la calidad del café, seleccionando granos de alta calidad y utilizando métodos de tostado que resaltan el sabor y la complejidad de cada variedad. La cafetería trabaja directamente con productores de café en todo el mundo para asegurarse de que los granos sean frescos y de la más alta calidad."
    },
    {
        "kind": "ad"
    },
    {
        "kind": "h2",
        "text": "Innovaciones y colaboraciones"
    },
    {
        "kind": "p",
        "text": "La Colombe ha sido pionera en la innovación en la industria del café, colaborando con otros expertos en café y contribuyendo a la comunidad a través de proyectos y eventos. La cafetería ha lanzado iniciativas como su programa de 'Café Sostenible', que busca reducir el impacto ambiental de la producción de café."
    },
    {
        "kind": "h2",
        "text": "Experiencia en la cafetería"
    },
    {
        "kind": "p",
        "text": "La experiencia en La Colombe es única, con un ambiente acogedor y un servicio al cliente atento y conocedor. La variedad de opciones de café es amplia, con desde clásicos como el espresso y el cappuccino hasta opciones más innovadoras como el 'Corsica' y el 'Kersting'. El menú de acompañamiento ofrece opciones deliciosas como pasteles y sandwiches."
    }
],
    body_en: [
    {
        "kind": "lede",
        "text": "La Colombe is one of the most recognized coffee shops in the specialty coffee scene, with a history dating back to 1994 when it was founded by Todd Carmichael and J.P. Iberti in Philadelphia. With locations in several US cities, La Colombe has won numerous awards for its commitment to quality and innovation in the world of coffee."
    },
    {
        "kind": "h2",
        "text": "Introduction to La Colombe"
    },
    {
        "kind": "p",
        "text": "La Colombe has expanded over the years, with locations in cities like New York, Chicago, and Washington D.C. The coffee shop has received awards such as 'Best Coffee Shop' in Philadelphia Magazine and has been recognized for its commitment to sustainability and quality in the coffee industry."
    },
    {
        "kind": "h2",
        "text": "Quality Philosophy"
    },
    {
        "kind": "p",
        "text": "La Colombe focuses on the quality of its coffee, selecting high-quality beans and using roasting methods that bring out the flavor and complexity of each variety. The coffee shop works directly with coffee producers around the world to ensure that the beans are fresh and of the highest quality."
    },
    {
        "kind": "ad"
    },
    {
        "kind": "h2",
        "text": "Innovations and Collaborations"
    },
    {
        "kind": "p",
        "text": "La Colombe has been a pioneer in innovation in the coffee industry, collaborating with other coffee experts and contributing to the community through projects and events. The coffee shop has launched initiatives such as its 'Sustainable Coffee' program, which aims to reduce the environmental impact of coffee production."
    },
    {
        "kind": "h2",
        "text": "Coffee Shop Experience"
    },
    {
        "kind": "p",
        "text": "The experience at La Colombe is unique, with a cozy atmosphere and attentive, knowledgeable customer service. The variety of coffee options is extensive, ranging from classics like espresso and cappuccino to more innovative options like 'Corsica' and 'Kersting'. The accompanying menu offers delicious options like pastries and sandwiches."
    }
],
  },

  { id: "post-auto-2026-05-06-874", slug: "caf-perfecto-para-trabajar",
    category: "recipes", hue: 38, date: "2026-05-06", readTime: 3, author: "marcos",
    title_es: "Café perfecto para trabajar",
    title_en: "Coffee for productivity",
    excerpt_es: "Descubre cómo la ciencia y la técnica se unen para crear el café perfecto que potencia tu productividad, desde el ratio ideal hasta la temperatura óptima.",
    excerpt_en: "Learn how science and technique combine to brew the perfect productivity-boosting coffee, from ideal ratios to optimal temperatures.",
    body_es: [
    {
        "kind": "lede",
        "text": "El café no solo es un placer matutino, sino un aliado científico para la productividad. Encontrar la receta perfecta puede marcar la diferencia entre un día lento y uno lleno de energía y enfoque. Aquí te explicamos cómo lograrlo."
    },
    {
        "kind": "h2",
        "text": "La ciencia detrás del café productivo"
    },
    {
        "kind": "p",
        "text": "Según un estudio de la Universidad de Harvard, la cafeína bloquea los receptores de adenosina en el cerebro, lo que reduce la sensación de fatiga y mejora la concentración. Además, antioxidantes como el ácido clorogénico (presente en el café) pueden mejorar la función cognitiva, según investigaciones del Instituto Nacional de Salud de EE.UU."
    },
    {
        "kind": "h2",
        "text": "El ratio óptimo de café y agua"
    },
    {
        "kind": "p",
        "text": "La Specialty Coffee Association recomienda un ratio de 1:16 a 1:18 (café:agua) para una extracción equilibrada. Por ejemplo, 20 gramos de café para 320 ml de agua. Ratios más altos (como 1:15) intensifican el sabor y la cafeína, pero pueden ser amargos."
    },
    {
        "kind": "h2",
        "text": "La temperatura ideal"
    },
    {
        "kind": "p",
        "text": "El agua entre 90°C y 96°C extrae mejor los compuestos del café sin quemarlo. Un estudio del Journal of Agricultural and Food Chemistry confirmó que temperaturas más bajas (80°C) reducen la extracción de cafeína en un 20%."
    },
    {
        "kind": "ad"
    },
    {
        "kind": "h2",
        "text": "Métodos de preparación"
    },
    {
        "kind": "ul",
        "items": [
            "V60: Extracción limpia y brillante, ideal para perfiles frutales.",
            "French Press: Cuerpo denso y mayor concentración de aceites (y cafeína).",
            "Pour-over: Control preciso, pero requiere práctica para dominar el flujo."
        ]
    },
    {
        "kind": "h2",
        "text": "Personaliza tu café"
    },
    {
        "kind": "p",
        "text": "¿Leche o azúcar? Un estudio de la Universidad de Barcelona revela que añadir leche entera ralentiza la absorción de cafeína, prolongando su efecto. Pero cuidado: el azúcar refinado puede causar picos de energía seguidos de bajones."
    }
],
    body_en: [
    {
        "kind": "lede",
        "text": "Coffee isn’t just a morning ritual—it’s a science-backed productivity booster. Finding your perfect brew can turn a sluggish day into one fueled by focus and energy. Here’s how to craft it."
    },
    {
        "kind": "h2",
        "text": "The Science of Productive Coffee"
    },
    {
        "kind": "p",
        "text": "Research from Harvard University shows caffeine blocks adenosine receptors in the brain, reducing fatigue and sharpening focus. Plus, antioxidants like chlorogenic acid (abundant in coffee) may enhance cognitive function, per NIH studies."
    },
    {
        "kind": "h2",
        "text": "The Goldilocks Ratio: Coffee to Water"
    },
    {
        "kind": "p",
        "text": "The Specialty Coffee Association recommends a 1:16 to 1:18 coffee-to-water ratio for balanced extraction. Example: 20g coffee for 320ml water. Stronger ratios (e.g., 1:15) pack more caffeine but risk bitterness."
    },
    {
        "kind": "h2",
        "text": "Temperature Matters"
    },
    {
        "kind": "p",
        "text": "Water at 195–205°F (90–96°C) extracts flavors optimally without scorching. A study in the Journal of Agricultural and Food Chemistry found lower temps (175°F/80°C) reduce caffeine extraction by 20%."
    },
    {
        "kind": "ad"
    },
    {
        "kind": "h2",
        "text": "Brew Methods Decoded"
    },
    {
        "kind": "ul",
        "items": [
            "V60: Bright, clean flavors—perfect for fruity notes.",
            "French Press: Bold body with more oils (and caffeine).",
            "Pour-over: Precision control, but mastering flow is key."
        ]
    },
    {
        "kind": "h2",
        "text": "Make It Your Own"
    },
    {
        "kind": "p",
        "text": "Cream or sugar? University of Barcelona research shows whole milk slows caffeine absorption for sustained energy. But refined sugar? It may lead to energy crashes post-spike."
    }
],
  },

  { id: "post-auto-2026-05-06-575", slug: "filtros-de-agua-para-cafe",
    category: "gear", hue: 16, date: "2026-05-06", readTime: 3, author: "marcos",
    title_es: "Filtros de agua para cafe",
    title_en: "Water Filters for Coffee",
    excerpt_es: "El agua es un ingrediente fundamental en la preparación del café, y su calidad puede influir significativamente en el sabor y la calidad del brebaje. En este artículo, exploraremos los diferentes tipos de filtros de agua disponibles y cómo pueden ayudar a mejorar el sabor del café.",
    excerpt_en: "Water is a crucial ingredient in coffee preparation, and its quality can significantly impact the flavor and quality of the brew. In this article, we'll explore the different types of water filters available and how they can help improve the taste of your coffee.",
    body_es: [
    {
        "kind": "lede",
        "text": "El agua es un ingrediente fundamental en la preparación del café, y su calidad puede influir significativamente en el sabor y la calidad del brebaje. En este artículo, exploraremos los diferentes tipos de filtros de agua disponibles y cómo pueden ayudar a mejorar el sabor del café."
    },
    {
        "kind": "h2",
        "text": "Tipos de filtros de agua"
    },
    {
        "kind": "p",
        "text": "Existen varios tipos de filtros de agua disponibles, cada uno con sus propias ventajas y desventajas. Los filtros de carbón activado son efectivos para eliminar impurezas y mejorar el sabor del agua, mientras que los filtros de ósmosis inversa pueden eliminar hasta el 99% de las impurezas y minerales del agua. Los filtros de cerámica también son una opción popular, ya que pueden eliminar bacterias y virus del agua."
    },
    {
        "kind": "ul",
        "items": [
            "Filtros de carbón activado",
            "Filtros de ósmosis inversa",
            "Filtros de cerámica"
        ]
    },
    {
        "kind": "ad"
    },
    {
        "kind": "h2",
        "text": "Cómo afecta el agua al sabor del café"
    },
    {
        "kind": "p",
        "text": "La calidad del agua puede influir significativamente en el sabor del café. El pH del agua, la dureza del agua y la presencia de impurezas pueden afectar la extracción del café y el sabor final del brebaje. Un estudio de la Universidad de California encontró que el agua con un pH alto puede extraer más compuestos amargos del café, lo que puede resultar en un sabor desagradable."
    },
    {
        "kind": "h2",
        "text": "Precios y opciones para diferentes presupuestos"
    },
    {
        "kind": "p",
        "text": "Existen opciones de filtros de agua para diferentes presupuestos. Los filtros de carbón activado pueden ser una opción económica, mientras que los filtros de ósmosis inversa pueden ser más costosos. Es importante investigar y comparar precios y características antes de tomar una decisión."
    }
],
    body_en: [
    {
        "kind": "lede",
        "text": "Water is a crucial ingredient in coffee preparation, and its quality can significantly impact the flavor and quality of the brew. In this article, we'll explore the different types of water filters available and how they can help improve the taste of your coffee."
    },
    {
        "kind": "h2",
        "text": "Types of Water Filters"
    },
    {
        "kind": "p",
        "text": "There are several types of water filters on the market, each with its own advantages and disadvantages. Activated carbon filters are effective at removing impurities and improving the taste of water, while reverse osmosis filters can remove up to 99% of impurities and minerals from water. Ceramic filters are also a popular option, as they can remove bacteria and viruses from water."
    },
    {
        "kind": "ul",
        "items": [
            "Activated Carbon Filters",
            "Reverse Osmosis Filters",
            "Ceramic Filters"
        ]
    },
    {
        "kind": "ad"
    },
    {
        "kind": "h2",
        "text": "How Water Affects the Taste of Coffee"
    },
    {
        "kind": "p",
        "text": "The quality of water can have a significant impact on the taste of coffee. The pH level of the water, the water hardness, and the presence of impurities can all affect the extraction of the coffee and the final flavor of the brew. A study by the University of California found that water with a high pH level can extract more bitter compounds from the coffee, resulting in an unpleasant taste."
    },
    {
        "kind": "h2",
        "text": "Prices and Options for Different Budgets"
    },
    {
        "kind": "p",
        "text": "There are water filter options available for different budgets. Activated carbon filters can be a budget-friendly option, while reverse osmosis filters can be more expensive. It's essential to research and compare prices and features before making a decision."
    },
    {
        "kind": "blockquote",
        "text": "The right water filter can make a significant difference in the taste of your coffee. By choosing a filter that meets your needs and budget, you can enjoy a better-tasting cup of coffee every time.",
        "cite": "Coffee Connoisseur Magazine"
    }
],
  },
];

window.BLOG_CATEGORIES = BLOG_CATEGORIES;
window.BLOG_AUTHORS = BLOG_AUTHORS;
window.BLOG_ARTICLES = BLOG_ARTICLES;
