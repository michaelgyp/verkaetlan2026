# Verkaetlan-2026 – Kunningarheimasíða um føroyskt mál

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

- `index.html` – aðalsíða við øllum innihaldinum
- `styles.css` – visuelt snið
- `lock.js` – lásamekanisma, ið lesur frá einum dátugrunni í Supabase
- `admin.html` – síða til at stýra aðalsíðuni

## Lásamekanisma

Síðan er læst sum standard. Til at lata hana upp:

1. Far inn á /admin.html
2. Set inn loynitalið
3. Trýst á knappin

Eftir at dátan í dátugrunninum er dagførd, verður aðalsíðan dagførd sjálvvirkandi.

## Mál

Allur tekstur á heimasíðuni er á føroyskum.

## Hosting

Heimasíðan er 100% statisk og virkar fullkomiliga á GitHub Pages.