# Clínica Duerksen - Website

Website oficial de la Clínica Duerksen, clínica dental del Dr. Victor Duerksen en Asunción, Paraguay.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS
- **shadcn/ui** - Accessible UI components
- **Supabase** - Backend as a Service (database, auth)
- **Resend** - Transactional emails
- **Framer Motion** - Animations
- **Docker** - Containerized deployment

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Ai-Whisperers/clinica-duerksen.git
cd clinica-duerksen

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Fill in your environment variables in .env

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
npm start
```

### Docker

```bash
# Build and run with Docker Compose
docker compose up --build -d
```

## Project Structure

```
app/              → Pages and layouts (App Router)
components/
  layout/         → Header, Footer, Navigation
  home/           → Homepage sections
  ui/             → shadcn/ui components
  seo/            → SEO components
lib/
  supabase.ts     → Supabase client helpers
  constants.ts    → Business info & brand constants
  utils.ts        → Utility functions
public/
  images/         → Static images
  icons/          → Favicons and app icons
```

## Brand Colors

| Color     | Hex       | Usage                    |
|-----------|-----------|--------------------------|
| Primary   | `#1B4D7A` | Deep medical blue        |
| Secondary | `#4A9BD9` | Friendly blue            |
| Accent    | `#D4A843` | Warm gold                |
| Text      | `#1A1A2E` | Body text                |
| Bg Alt    | `#F8FAFB` | Alternate background     |

## Contact

- **Phone**: +595 21 298 755
- **WhatsApp**: [wa.me/59521298755](https://wa.me/59521298755)
- **Website**: [clinicaduerksen.com.py](https://clinicaduerksen.com.py)

## License

Private - All rights reserved.
