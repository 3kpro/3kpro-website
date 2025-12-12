# Changelog

## [2.2.0] - 2025-12-05

### Added
- Micro-SaaS Factory dashboard at `/factory` route
- Product cards displaying all 7 product ideas with status indicators
- "The Truth" section rendering TRUTH.md content from softdev/products/
- Dynamic build checklist for each product (Define Specs, Build MVP, etc.)
- Asset Locker linking to product files in softdev directory
- Industrial/cyberpunk lab theme with dark mode and neon accents

### Technical
- Created `lib/markdown.ts` utility for reading markdown files from external paths
- Updated `app/factory/page.tsx` with product data integration
- Kanban/Grid view layout for product management

## [2.1.0] - 2025-11-12

### Added
- Aurora Background animated effect on hero section (coral/salmon gradient flow)
- Comprehensive SEO optimization (meta tags, JSON-LD structured data, Open Graph)
- 3-tier pricing packages section ($1,500 Starter, $2,000 Professional, Custom Premium)
- Dynamic sitemap.xml and robots.txt for search engine indexing
- "Pricing" link in navigation
- Accessibility improvements (aria-labels on logo SVG)

### Changed
- Updated meta tags to focus on local business website development
- Enhanced keywords for local SEO targeting
- Navigation now includes: Services, Pricing, About, Contact

### Technical
- Created `/components/ui/aurora-background.tsx` with custom CSS animation
- Added `/lib/utils.ts` with cn() utility (clsx + tailwind-merge)
- Implemented JSON-LD ProfessionalService schema for rich search results
- Added Next.js 15 dynamic sitemap generation

## [2.0.0] - 2025-11-11

### Changed
- Complete redesign from cyberpunk/tron theme to professional corporate design
- New color scheme: coral/salmon primary (#e07856) with dark blue backgrounds
- Reorganized homepage layout with hero, stats, services, and about sections
- Updated all components to use new `primary-*` and `dark-*` color system

### Added
- CSS variables in globals.css for easy theming
- Comprehensive Tailwind color scales for primary and dark colors
- Stats section (500+ projects, 98% satisfaction, 24/7 support, 15+ years)
- Progress bars showing client retention and delivery metrics

### Technical
- Space Grotesk font implementation
- Modular color system via CSS variables and Tailwind config
- Web3Forms integration for contact form

## [1.0.0] - 2025-11-09

### Added
- Initial website launch
- Contact form with email notifications to james@3kpro.services
- Local Business Websites service offering
- Service showcase page
- About section
- Contact section with working form
