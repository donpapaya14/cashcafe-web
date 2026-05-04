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
];

window.BLOG_CATEGORIES = BLOG_CATEGORIES;
window.BLOG_AUTHORS = BLOG_AUTHORS;
window.BLOG_ARTICLES = BLOG_ARTICLES;
