# LINQ Corporate Website - Technical Architecture & Systems Deep-Dive

This document provides an exhaustive overview of the LINQ Corporate Website architecture, including granular folder structures and detailed explanations of the core technical systems that drive the platform.

---

## 1. Company Profile

**Official Name:** LINQ Corporate Solutions Pvt. Ltd.  
**Tagline:** *Connecting global industries through ideas that drive opportunity.*

### Global Impact Statistics
- **Completed Projects:** 500+
- **Satisfied Customers:** 15k+
- **Worldwide Honors:** 45+

### Headquarters & Contact
- **Address:** Nilamber Corporate Park, Building C, 2nd Floor, Nilamber Circle, Vadodara, Gujarat 390007.
- **Mobile:** +91 9377333411
- **Email:** 
  - Daytime Operations: `hr.ds@linq-corporate.com`
  - Overnight Operations: `hr.ns@linq-corporate.com`
- **Social Presence:** [LinkedIn Profile](https://www.linkedin.com/company/linq-corporate-solutions-pvt-ltd)

### Operational Timing (24x7 Coverage)
- **Primary Shifts:**
  - Day: 09:30 - 18:00 IST
  - Night: 18:30 - 03:30 IST

---

## 2. Core Technical Architecture

The architecture is built on the principle of **High Availability through Resilience**. It is a decoupled system with a Next.js frontend and a Django REST API.

### Technical Stack
- **Frontend Framework:** Next.js 14+ (App Router)
- **State Management:** React Context API (`GlobalDataContext`)
- **Backend Framework:** Django (Python) + Django REST Framework
- **Database:** SQLite (for portability)
- **Deployment Strategy:** Static Site Generation (SSG) with `output: 'export'`. 

### Server Component Pattern
To support static exports while maintaining interactive UIs, the project follows a **"Server Entry, Client UI"** pattern:
- **Server Entry:** `page.js` files in dynamic routes (e.g., `/careers/[id]`) are Server Components. They implement `generateStaticParams()` to pre-calculate paths at build time.
- **Client UI:** Complex interactions are pushed to `src/components/`, where components are marked with `"use client"`.

---

## 3. High-Availability "Resilience Engine"

The most critical architectural feature is the **Multi-Stage Fallback Logic** implemented in `src/lib/api.js`.

1. **Stage 1 (Remote Fetch):** On page load, the site attempts to fetch fresh content from the live production backend (PythonAnywhere).
2. **Stage 2 (Local Fallback):** If the production server is unreachable or slow, the system catches the error and automatically injects high-quality "Default Data" from `src/lib/default-data.js`.
3. **Stage 3 (Media Resilience):** Image paths are sanitized via `getMediaUrl()`, which strips stale domains and ensures all assets point to the active production media server.

---

## 4. Role-Based Access Control (RBAC)

The Admin Panel (`/admin`) implements a secure, permission-based interface.

- **Super Admin:** Can manage users, adjust any content, and has full "Edit" rights across all modules.
- **Admin User:** Permissions are granularly assigned via the `UserManager`. Each module (Gallery, Jobs, etc.) has independent `view` and `edit` flags.
- **UI Guarding:** The sidebar (`AdminSidebar.js`) and individual modules (`VisionManager.js`, etc.) dynamically hide or disable controls (buttons, inputs) based on the active user's permission token stored in `localStorage`.

---

## 5. Granular Directory Structure

### `/app` (Routes & Pages)
- `layout.js`: Root layout, manages SEO metadata and fonts.
- `page.js`: The "LinqHome" landing page.
- `providers.js`: Injects the `GlobalDataProvider` into the entire app.
- `/careers/`: 
  - `page.js`: The dedicated Careers Hub dashboard.
  - `/[id]/page.js`: **Server Component** for individual job detail pages.
- `/admin/`: Entry point for the administrative portal.
- `/career-growth/`: Dedicated section for team member evolution.

### `/src/components` (UI Elements)
- `/careers/`: 
  - `JobCard.js`: Premium card component with integrated details button.
  - `JobList.js`: Main rendering engine for job arrays.
  - `JobFilters.js`: Client-side search and category filtering.
  - `JobDetailClient.js`: **Client Component** for rich job descriptions and sidebars.
- `navbar.js`: Intelligent navigation with scroll-to-section logic.
- `career-growth.js`: Visual representation of member achievements using Embla Carousel.

### `/src/lib` (System Utilities)
- `api.js`: The heart of the data fetching system; manages HTTPS communication and fallbacks.
- `default-data.js`: The safety net; contains full-featured static data for every module.

---

## 6. Data Flow Lifecycle

1. **Bootstrap:** The `GlobalDataProvider` initializes.
2. **Fetch:** `fetchAllWebsiteData()` triggers parallel asynchronous requests.
3. **Aggregate:** Data is stored in the `GlobalDataContext`.
4. **Pre-rendering:** During `npm run build`, `generateStaticParams()` fetches all dynamic IDs (Careers, Members, Services) to generate static HTML files.
5. **Distribution:** Components consume the context via the `useGlobalData()` hook for real-time reactivity without redundant API calls.

---

## 7. Design System & Project Theme

The website follows a **"Premium Corporate"** visual identity, characterized by high-end geometry, cinematic imagery, and a restrained, sophisticated color palette.

### 7.1 Color Palette
- **Primary Blue:** `#05243c` (Deep LINQ Blue) - Found in `linear-gradient` backgrounds and headers.
- **Action Blue:** `#007bff` (Royal Blue) - Used for primary interactive elements.
- **Accent Light:** `#2ea1ff` - Used for tags, pills, and subtle outlines.
- **Backgrounds:** Standardizes on pure White (`#ffffff`) and alternating Soft Grey (`#f8f9fa`).

### 7.2 Typography Master Style
- **Headings:** `2.8rem` desktop / `clamp(2.5rem, 5vw, 4rem)` for fluid scaling.
- **Weight:** `800` (Extra Bold) for primary titles; `600` for subtitles.
- **Font Family:** `Nunito Sans` (primary) and `Inter` (system fallback).
- **Line Height:** `1.2` for titles, `1.6` for body text.

### 7.3 Geometric Tokens & UX Patterns
- **Radius:** Standard `12px` to `24px` (Premium) border-radius globally.
- **Shadows:** 
  - Card Shadow: `0 4px 20px rgba(0, 0, 0, 0.05)`.
  - Hover Intensity: `0 12px 30px rgba(0, 0, 0, 0.08)`.
- **Carousel Patterns:**
  - **Single-Focus:** Career Growth slider (1 card visible on desktop).
  - **Dual-Card:** Job Carousel (2 cards visible on desktop, responsive to 1 on mobile).
- **Glassmorphism:** Navigation menus use `backdrop-filter: blur(12px)` for a depth-of-field effect.

---

## 8. Build & Deployment

The system is optimized for **Static Export**. Running `npm run build` executes the following:
1. **Next.js Compilation**: Aggregates all components and CSS.
2. **Static Rendering**: Each route (including dynamic ones) is converted to physical HTML/CSS/JS files in the `/out` directory.
3. **Asset Optimization**: Images are served unoptimized via the project's media engine to ensure bandwidth efficiency for static hosts.

---

## 9. Future Development Roadmap

### 9.1 About Us Page redevelopment
Slated for a switch to a dynamic storytelling format, merging "Our Vision" and "Our Mission" into a high-contrast narrative module.

### 9.2 Real-time Application Tracking
Future iterations will integrate the "Apply" button directly with the Django backend for automated resume screening and candidate pipelining.