# TomSoft Website - Profesjonalna Strona Firmowa

> **Nowoczesna strona internetowa dla firmy TomSoft** - Responsywna, wielojęzyczna strona z animacjami i optymalizacją SEO

Profesjonalna strona firmowa zbudowana w Next.js 16 z React 19, TypeScript i TailwindCSS. Strona oferuje pełną obsługę wielojęzyczności (Polski/Angielski), płynne animacje z Framer Motion oraz optymalizację pod kątem wyszukiwarek.

## 👨‍💻 Autor i Twórca

**Tomasz Chromy** - jedyny twórca i pomysłodawca
- 🌐 Strona: [tomaszchromy.com](https://tomaszchromy.com)
- 📧 Email: tomasz.chromy@outlook.com
- 💻 GitHub: [github.com/TomaszChromy](https://github.com/TomaszChromy)

**Copyright © 2024-2025 Tomasz Chromy. Wszelkie prawa zastrzeżone.**

## 🌟 Główne Funkcje

### 🌍 Wielojęzyczność (i18n)
- **Polski** - język domyślny
- **English** - pełne tłumaczenie
- **Przełącznik języka** w nagłówku
- **Persystencja** wyboru w localStorage

### 🎨 Nowoczesny Design
- **Dark theme** - elegancki ciemny motyw
- **Gradienty** - płynne przejścia kolorów
- **Glassmorphism** - efekty szkła
- **Responsywność** - pełna obsługa mobile/tablet/desktop

### ⚡ Animacje
- **Framer Motion** - płynne animacje wejścia
- **Hover effects** - interaktywne efekty najechania
- **Scroll animations** - animacje przy przewijaniu
- **Typewriter effect** - animowany tekst w hero

### 📱 Sekcje Strony
- **Hero** - sekcja powitalna z animowanym tekstem
- **Why Us** - dlaczego warto nas wybrać (4 kafelki)
- **Offer** - oferta usług (4 pakiety)
- **Pricing** - cennik z 3 planami (PLN/EUR)
- **Process** - proces realizacji (4 kroki)
- **Portfolio** - realizacje projektów
- **Stats** - statystyki firmy
- **Testimonials** - opinie klientów
- **FAQ** - najczęściej zadawane pytania
- **Contact** - formularz kontaktowy (Formspree)

### 🔒 Strony Prawne
- **Polityka prywatności** - `/polityka-prywatnosci`
- **Regulamin** - `/regulamin`
- **Cookies** - `/cookies`

### 📊 Analityka i SEO
- **Plausible Analytics** - prywatna analityka
- **Meta tags** - optymalizacja SEO
- **JSON-LD** - structured data
- **Open Graph** - podgląd w social media

## 🛠️ Technologie

### Frontend
| Technologia | Wersja | Opis |
|-------------|--------|------|
| [Next.js](https://nextjs.org/) | 16.0.1 | React framework z App Router |
| [React](https://react.dev/) | 19.2.0 | Biblioteka UI |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Typowany JavaScript |
| [TailwindCSS](https://tailwindcss.com/) | 4.x | Utility-first CSS |
| [Framer Motion](https://www.framer.com/motion/) | 12.x | Animacje |
| [Lucide React](https://lucide.dev/) | 0.552 | Ikony SVG |

### Narzędzia
- **ESLint** - linting kodu
- **PostCSS** - przetwarzanie CSS
- **Turbopack** - szybki bundler

## 📋 Wymagania Systemowe

### Minimalne
- **Node.js**: 18.0+
- **RAM**: 1GB
- **Dysk**: 500MB wolnego miejsca
- **Przeglądarka**: Chrome 90+, Firefox 88+, Safari 14+

### Zalecane
- **Node.js**: 20.0+
- **RAM**: 2GB+
- **Dysk**: 1GB+ (z cache)

## 🚀 Instalacja

### 1. Sklonuj repozytorium
```bash
git clone https://github.com/TomaszChromy/tomsoft-website.com.git
cd tomsoft-website.com
```

### 2. Zainstaluj zależności
```bash
npm install
```

### 3. Skonfiguruj zmienne środowiskowe
```bash
cp .env.example .env.local
```

### 4. Uruchom serwer deweloperski
```bash
npm run dev
```

Strona będzie dostępna pod adresem: **http://localhost:3000**

## 🔧 Dostępne Skrypty

```bash
npm run dev      # Serwer deweloperski
npm run build    # Build produkcyjny (static export)
npm run start    # Uruchomienie produkcyjne
npm run lint     # Sprawdzanie kodu
```

## 📁 Struktura Projektu

```
tomsoft-website.com/
├── public/
│   ├── assets/              # Obrazy i zasoby
│   │   └── logo/           # Logo firmy
│   └── locales/            # Tłumaczenia
│       ├── pl.json         # Polski
│       └── en.json         # English
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── page.tsx       # Strona główna
│   │   ├── layout.tsx     # Layout aplikacji
│   │   ├── polityka-prywatnosci/
│   │   ├── regulamin/
│   │   └── cookies/
│   ├── components/
│   │   ├── hero/          # Sekcja Hero
│   │   ├── why/           # Sekcja Why Us
│   │   ├── offer/         # Sekcja Oferta
│   │   ├── pricing/       # Sekcja Cennik
│   │   ├── process/       # Sekcja Proces
│   │   ├── portfolio/     # Sekcja Portfolio
│   │   ├── stats/         # Sekcja Statystyki
│   │   ├── testimonials/  # Sekcja Opinie
│   │   ├── faq/           # Sekcja FAQ
│   │   ├── contact/       # Sekcja Kontakt
│   │   ├── layout/        # Header i Footer
│   │   ├── ui/            # Komponenty UI
│   │   └── providers/     # Providery (i18n)
│   ├── lib/
│   │   ├── i18n.tsx       # System wielojęzyczności
│   │   ├── analytics.ts   # Analityka
│   │   ├── seo.ts         # SEO utilities
│   │   └── form.ts        # Obsługa formularzy
│   └── styles/            # Style globalne
├── out/                   # Static export (po build)
├── next.config.ts         # Konfiguracja Next.js
├── tailwind.config.js     # Konfiguracja Tailwind
├── package.json           # Zależności
├── LICENSE                # Licencja MIT
└── ROADMAP.md            # Plan rozwoju
```

## 🎨 Personalizacja

### Kolory
Główne kolory zdefiniowane w `src/app/globals.css`:
- **Primary**: `#F97316` (pomarańczowy)
- **Accent**: `#EF4444` (czerwony)
- **Background**: `#0F172A` (ciemny granat)

### Fonty
- **Nagłówki**: Poppins (Google Fonts)
- **Treść**: System fonts

### Tłumaczenia
Edytuj pliki w `public/locales/`:
- `pl.json` - tłumaczenia polskie
- `en.json` - tłumaczenia angielskie

## 🚀 Deploy

### Static Export (nazwa.pl, tradycyjny hosting)
```bash
npm run build
# Wgraj zawartość folderu 'out' przez FTP
```

### Vercel (zalecane)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Wgraj folder 'out' do Netlify
```

## 📞 Kontakt i Wsparcie

**Tomasz Chromy** - Autor i Twórca
- 🌐 Strona: [tomaszchromy.com](https://tomaszchromy.com)
- 📧 Email: tomasz.chromy@outlook.com
- 💻 GitHub: [github.com/TomaszChromy](https://github.com/TomaszChromy)

## ⚖️ Licencja i Prawa Autorskie

**Copyright © 2024-2025 Tomasz Chromy. Wszelkie prawa zastrzeżone.**

Ten projekt jest licencjonowany na warunkach [MIT License](LICENSE).

### Dozwolone:
- ✅ Przeglądanie kodu źródłowego
- ✅ Uczenie się z kodu
- ✅ Tworzenie forków do celów edukacyjnych
- ✅ Modyfikacja i dystrybucja (z zachowaniem licencji)

---

**POWERED BY [TOMASZ CHROMY](https://tomaszchromy.com)**

*TomSoft Website - Profesjonalna strona firmowa z Next.js*

