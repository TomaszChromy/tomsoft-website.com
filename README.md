# TomSoft Website 🚀

Profesjonalna strona internetowa dla TomSoft Website - firmy tworzącej nowoczesne aplikacje webowe.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.2-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC?logo=tailwind-css)

## ✨ Funkcjonalności

- 🌍 **Wielojęzyczność (i18n)** - Polski i Angielski
- 🎨 **Nowoczesny design** - Ciemny motyw z gradientami
- 📱 **Responsywność** - Pełna obsługa urządzeń mobilnych
- ⚡ **Animacje** - Płynne animacje z Framer Motion
- 📊 **Analityka** - Wbudowane śledzenie zdarzeń
- 📝 **Formularz kontaktowy** - Integracja z Formspree
- 🔒 **Strony prawne** - Polityka prywatności, Regulamin, Cookies

## 🛠️ Technologie

| Technologia | Wersja | Opis |
|-------------|--------|------|
| [Next.js](https://nextjs.org/) | 16.0.1 | Framework React z SSR/SSG |
| [React](https://react.dev/) | 19.2.0 | Biblioteka UI |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Typowany JavaScript |
| [TailwindCSS](https://tailwindcss.com/) | 4.x | Utility-first CSS |
| [Framer Motion](https://www.framer.com/motion/) | 12.x | Animacje |
| [Lucide React](https://lucide.dev/) | 0.552 | Ikony |

## 📁 Struktura projektu

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Strona główna
│   ├── layout.tsx         # Layout aplikacji
│   ├── polityka-prywatnosci/
│   ├── regulamin/
│   └── cookies/
├── components/
│   ├── hero/              # Sekcja powitalna
│   ├── why/               # Dlaczego my
│   ├── offer/             # Oferta usług
│   ├── pricing/           # Cennik
│   ├── process/           # Proces realizacji
│   ├── portfolio/         # Realizacje
│   ├── stats/             # Statystyki
│   ├── testimonials/      # Opinie klientów
│   ├── faq/               # FAQ
│   ├── contact/           # Kontakt i formularz
│   ├── layout/            # Header i Footer
│   ├── ui/                # Komponenty UI
│   └── providers/         # Providery (i18n)
├── lib/
│   ├── i18n.tsx           # System wielojęzyczności
│   ├── analytics.ts       # Analityka
│   ├── seo.ts             # SEO utilities
│   └── form.ts            # Obsługa formularzy
└── styles/                # Style globalne

public/
├── locales/
│   ├── pl.json            # Tłumaczenia PL
│   └── en.json            # Tłumaczenia EN
└── assets/                # Obrazy i zasoby
```

## 🚀 Instalacja

```bash
# Klonowanie repozytorium
git clone https://github.com/AugmentCode-Digital/tomsoft-website.git
cd tomsoft-website

# Instalacja zależności
npm install

# Uruchomienie serwera deweloperskiego
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000) w przeglądarce.

## 📜 Skrypty

| Skrypt | Opis |
|--------|------|
| `npm run dev` | Serwer deweloperski |
| `npm run build` | Build produkcyjny |
| `npm run start` | Uruchomienie produkcyjne |
| `npm run lint` | Sprawdzanie kodu |

## 🌍 Wielojęzyczność

Strona obsługuje dwa języki:
- 🇵🇱 **Polski** (domyślny)
- 🇬🇧 **English**

Tłumaczenia znajdują się w `public/locales/`:
- `pl.json` - język polski
- `en.json` - język angielski

Przełącznik języka znajduje się w prawym górnym rogu strony.

## 🎨 Personalizacja

### Kolory
Główne kolory zdefiniowane w `src/app/globals.css`:
- Primary: `#F97316` (pomarańczowy)
- Accent: `#EF4444` (czerwony)
- Background: `#0F172A` (ciemny granat)

### Fonty
- **Nagłówki**: Poppins
- **Treść**: System fonts

## 🚀 Deploy

### Vercel (zalecane)
```bash
npm i -g vercel
vercel
```

### Docker
```bash
docker build -t tomsoft-website .
docker run -p 3000:3000 tomsoft-website
```

## 📧 Kontakt

- **Email**: kontakt@tomsoft-website.com
- **Telefon**: +48 600 000 000

## 📄 Licencja

Wszelkie prawa zastrzeżone © 2024 TomSoft Website

---

Zbudowane z ❤️ przez [TomSoft Website](https://tomsoft-website.com)
