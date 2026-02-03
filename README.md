# verkaetlan-2026 – Kunningarheimasíða um føroyskt mál

Statisk, mobile-first heimasíða um føroyska málið, bygd til GitHub Pages.

## Málsnið

Heimasíðan inniheldur 9 greinir um føroyska málið:

1. Hví føroyskt er serligt
2. Føroyskt gjøgnum tíðina
3. Ungdómur og ensk ávirkan
4. Sosialir miðlar og mál
5. Málføri – meira enn bara framburður
6. Konkret dømi um málførismunir
7. Er føroyskt í vanda?
8. Føroyskt sum annað mál
9. Ábyrgd og framtíð

## Bygning

- `index.html` – aðalsíða við øllum innihaldi
- `styles.css` – visuelt snið
- `lock.js` – lásamekanisma, ið lesur `data/config.json`
- `data/config.json` – stilling fyri at læsa/latna upp síðuna

## Lásamekanisma

Síðan er læst við default. Til at lata hana upp:

1. Opna `data/config.json` í GitHub
2. Broyta `"isOpen": false` til `"isOpen": true`
3. Commit broytingina

Eftir at GitHub Pages hevur bygt aftur (vanliga eftir fáum minuttum), verður síðan sýnilig fyri øll.

## Mál

Øll tekstur á heimasíðuni er á føroyskum.

## Hosting

Heimasíðan er 100% statisk og virkar perfekt á GitHub Pages.
