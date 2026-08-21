You are working inside an existing Next.js project.

Your task is to transform the existing HTML website template I provide into a premium, modern, fully responsive public-facing storefront website for:

AMAS Inter Designers Ltd.

IMPORTANT: Do not create a new project from scratch.

You must work with and build upon the existing Next.js boilerplate already provided in the project.

====================================================
1. FIRST: ANALYZE THE EXISTING PROJECT
====================================================

Before making changes:

1. Inspect the current project structure.
2. Identify whether the project uses:
   - Next.js App Router or Pages Router
   - JavaScript or TypeScript
   - Existing global styles
   - Existing dependencies
   - Existing configuration files
3. Inspect the HTML template that has been provided.
4. Understand its:
   - Layout
   - Sections
   - Components
   - Styling
   - JavaScript interactions
   - Responsive behavior
   - Animations
5. Inspect the assets folder and identify all available images and media.

Do not blindly rewrite the entire project.

Refactor the existing HTML template into clean, reusable Next.js components while preserving the visual direction and quality of the template.

====================================================
2. PROJECT RULES
====================================================

Use the existing Next.js boilerplate as the foundation.

Do NOT:

- Create another Next.js project.
- Replace the existing project configuration unnecessarily.
- Delete useful existing files without a valid reason.
- Break the current project setup.
- Rebuild the website as plain static HTML.
- Keep the entire HTML template as one giant component.
- Use inline styles for the main styling.
- Use fake company information.
- Use fake logos.
- Use placeholder images if relevant real images are available in the assets folder.

Refactor the template properly into reusable, maintainable React/Next.js components.

====================================================
3. TAILWIND CSS SETUP
====================================================

Tailwind CSS must be used for styling.

If Tailwind CSS is not already installed and configured:

1. Install the appropriate Tailwind CSS dependencies compatible with the current version of Next.js.
2. Configure Tailwind correctly for the project.
3. Ensure all relevant source directories are included in Tailwind's content/source configuration.
4. Configure the global stylesheet correctly.
5. Verify that Tailwind classes are compiling and working before continuing.

Use Tailwind CSS as the primary styling solution.

You may retain small amounts of existing CSS only when absolutely necessary for:

- Complex template-specific effects
- Third-party libraries
- Custom animations that are cleaner outside utility classes

However, the main styling should be implemented with Tailwind CSS.

Do not use Bootstrap.

====================================================
4. ASSET MANAGEMENT
====================================================

All images that should be used for the website will be placed inside the project's assets folder.

Before implementing the final UI:

1. Inspect the assets folder.
2. Identify the available images.
3. Determine which images are appropriate for:
   - Hero slideshow
   - Services
   - Portfolio
   - Gallery
   - About section
   - Project details
   - Background sections
   - Other visual areas
4. Use the provided images meaningfully throughout the website.

Do not randomly assign images.

Choose images based on their relevance to the section and content.

Use Next.js image optimization where appropriate.

Ensure:

- Correct aspect ratios
- Responsive behavior
- Proper object-fit usage
- Meaningful alt text
- Optimized loading

Do not generate fake images or substitute the provided company work with unrelated stock images unless explicitly necessary.

====================================================
5. WEBSITE SCOPE
====================================================

This project is STRICTLY the public-facing AMAS Inter Designers Ltd. storefront.

DO NOT build or include:

- Admin dashboard
- Inventory system
- Employee management
- Attendance tracking
- Procurement
- Production management
- CRM dashboard
- Financial management
- Warehouse management
- Asset management
- Internal portals
- Any company management system

The website should only focus on:

- Company marketing
- Services
- Portfolio
- Gallery
- Trust and credibility
- Quote requests
- Contact information
- Lead generation

====================================================
6. COMPANY INFORMATION
====================================================

Company:

AMAS Inter Designers Ltd.

AMAS Inter Designers Ltd. is a professional creative company specializing in:

- Signage
- Branding
- Printing
- Fabrication
- Design
- Visual advertising solutions

The company serves individuals, businesses, organizations, institutions, and commercial clients.

The website should position AMAS as:

- Professional
- Creative
- Reliable
- Experienced
- High-quality
- Modern
- Capable
- Detail-oriented

The design should feel:

- Premium
- Modern
- Bold
- Creative
- Professional
- Trustworthy
- Image-focused
- Clean
- Visually impressive

====================================================
7. REFACTOR THE HTML TEMPLATE
====================================================

Use the existing HTML template as the primary visual and structural reference.

Your responsibility is to:

- Convert HTML into reusable React components.
- Convert CSS styling into Tailwind CSS where practical.
- Convert JavaScript interactions into React state, hooks, or appropriate Next.js components.
- Preserve the original template's visual quality.
- Preserve useful animations and interactions.
- Improve responsiveness where necessary.
- Remove irrelevant template content.
- Replace placeholder sections with AMAS-specific content.

Do not simply paste the HTML into a single page component.

Break the application into logical reusable components.

Suggested structure:

components/
  layout/
    Navbar
    Footer

  home/
    Hero
    CompanyIntro
    ServicesPreview
    WhyChooseUs
    TrustedBy
    FeaturedProjects
    HowWeWork
    Statistics
    Testimonials
    FinalCTA

  shared/
    SectionHeading
    Button
    Container
    ImageCard
    SocialLinks

You may adjust this structure based on the existing project architecture.

Keep the codebase clean and maintainable.

====================================================
8. REQUIRED WEBSITE PAGES
====================================================

Create the following public-facing pages:

1. Home
2. About Us
3. Services
4. Individual Service Details
5. Portfolio
6. Individual Project Details
7. Gallery
8. Request a Quote
9. Contact Us
10. FAQ
11. Privacy Policy
12. Terms and Conditions
13. Custom 404 / Not Found Page

The implementation should use the routing structure appropriate for the existing Next.js project.

====================================================
9. HOME PAGE STRUCTURE
====================================================

The Home page should be the strongest and most visually impressive page.

The user journey should flow naturally:

Discover AMAS
→ Understand the services
→ Build trust
→ See notable clients
→ Explore completed projects
→ Understand the process
→ Request a quote or make contact

Use the following sections.

====================================================
10. HERO SECTION
====================================================

The hero section is extremely important.

Create a premium, immersive, visually striking hero section with a FULL-BACKGROUND IMAGE SLIDESHOW.

The slideshow must use images of actual work completed by AMAS from the assets folder.

Do not use generic stock imagery if suitable AMAS project images are available.

----------------------------------------------------
HERO SLIDESHOW REQUIREMENTS
----------------------------------------------------

Create a slick, modern, smooth background image slideshow.

Requirements:

- Full-width hero section.
- Large background imagery.
- Use multiple AMAS project/work images from the assets folder.
- Automatically transition between slides.
- Smooth fade, crossfade, or cinematic transition.
- Avoid harsh or distracting animations.
- Ensure transitions feel premium and professional.
- Use a subtle zoom or movement effect where appropriate.
- Images should cover the hero area without distortion.
- Ensure the text remains readable on all slides.

Use a dark overlay, gradient overlay, or dynamic contrast treatment over the images.

The overlay should:

- Maintain text readability.
- Still allow the work imagery to remain visible.
- Feel visually elegant.

----------------------------------------------------
HERO CONTENT
----------------------------------------------------

Overlay the following content on top of the slideshow:

- Strong headline
- Supporting description
- Primary CTA: "Request a Quote"
- Secondary CTA: "View Our Work"

The headline should immediately communicate that AMAS delivers:

- Professional signage
- Branding
- Fabrication
- Printing
- Visual advertising solutions

The content must remain visually stable while the background images transition.

Do not make the text jump or move unnecessarily when slides change.

----------------------------------------------------
SLIDESHOW CONTROLS
----------------------------------------------------

Include elegant controls where appropriate:

- Previous button
- Next button
- Slide indicators/progress indicators

Controls should:

- Be subtle.
- Not distract from the content.
- Work on desktop and mobile.
- Be keyboard accessible.

If using an external library for the slideshow, only install a lightweight, well-maintained library if it provides a meaningful advantage.

Otherwise, implement the slideshow using React state and hooks.

Respect:

prefers-reduced-motion

Users who prefer reduced motion should not be forced to experience aggressive animation.

====================================================
11. COMPANY INTRODUCTION
====================================================

Create a concise but compelling introduction section.

Include:

- Strong heading
- Brief company introduction
- Supporting description
- Relevant image from assets
- CTA: "Learn More About Us"

Communicate:

Creative expertise + quality craftsmanship + professional execution.

Avoid large walls of text.

====================================================
12. SERVICES SECTION
====================================================

Create a visually engaging services section.

Possible services include:

- Signage Design & Production
- 3D & Channel Letter Signage
- Billboard & Outdoor Advertising
- Branding & Corporate Identity
- Large Format Printing
- Vehicle Branding
- Acrylic Signage
- LED & Illuminated Signs
- Metal Fabrication
- Laser Cutting & Engraving
- Vinyl Graphics
- Flex & Banner Printing
- Interior & Exterior Branding

Each service should have:

- Relevant image from assets where available
- Service title
- Short description
- Link or CTA to learn more

Include:

"Explore All Services"

====================================================
13. WHY CHOOSE AMAS
====================================================

Create a visually strong section explaining why clients choose AMAS.

Possible points:

- Quality Materials
- Creative Design
- Professional Craftsmanship
- Modern Equipment
- Reliable Delivery
- Custom Solutions
- Attention to Detail
- Experienced Team

Use icons or subtle visual elements.

Do not make this section feel generic.

====================================================
14. TRUSTED BY SECTION
====================================================

Create a premium "Trusted By" section showcasing businesses and institutions AMAS has created signage, branding, or related work for.

Use a heading such as:

"Trusted By Businesses & Institutions"

Supporting text:

"We are proud to have delivered signage, branding, and visual solutions for businesses and institutions across Nigeria."

For now, use ONLY the following names.

Do not add, replace, modify, or invent any additional client names.

The official logos will be provided later.

Design each item so the text can easily be replaced with an official logo.

Use these names:

1. Rukuba Barracks
2. Gowons Bank
3. Cocin Guest Inn
4. Diamond Dreams
5. Jds Fuel Station
6. Vochmal Bakery
7. Teest Hotel & Suite
8. Plateau State Polytechnic
9. Grand Cereal
10. El-Rehoboth
11. Plateau State Chieftency Affairs
12. Airforce Girls Jos
13. Military Cantonment (Jaji)
14. Golden Bide Hotel
15. Jennys Fuel Station
16. Stanel Bakery
17. And More…..

Requirements:

- Use styled text placeholders for now.
- Do not generate fake logos.
- Do not use random logos.
- Keep client items consistent.
- Make future logo replacement easy.
- Use a responsive grid, carousel, or marquee.
- Keep the design premium and subtle.
- Ensure excellent mobile responsiveness.

The "And More….." item should indicate that AMAS has worked with additional clients beyond those listed.

====================================================
15. FEATURED PROJECTS
====================================================

Create a visually powerful Featured Projects section.

Use actual AMAS project images from the assets folder.

Each project card should include:

- Image
- Project title
- Category
- Optional short description

The imagery should be the primary focus.

Use elegant hover effects.

Include:

"Explore Our Portfolio"

====================================================
16. HOW WE WORK
====================================================

Create a visually engaging process section.

Suggested process:

01 — Tell Us About Your Project

02 — Consultation & Design

03 — Production & Fabrication

04 — Delivery & Installation

Make the flow clear and visually interesting.

====================================================
17. ACHIEVEMENTS / STATISTICS
====================================================

Include editable statistics such as:

- Projects Completed
- Happy Clients
- Years of Experience
- Cities Served

IMPORTANT:

Do not invent misleading company statistics.

Use clearly identifiable placeholder values until verified values are provided.

====================================================
18. TESTIMONIALS
====================================================

Create a premium testimonial section.

Support:

- Client name
- Company name
- Profile image
- Testimonial

If real testimonials are unavailable, use clearly marked placeholders that can easily be replaced.

Do not present fake testimonials as real customers.

====================================================
19. FINAL CTA
====================================================

Create a strong final call-to-action section.

Suggested heading:

"Have a Project in Mind?"

Include:

Primary CTA:
"Request a Quote"

Secondary CTA:
"Contact Us"

Make this section visually compelling and conversion-focused.

====================================================
20. ABOUT PAGE
====================================================

Create an About page containing:

- Company introduction
- Company story
- Mission
- Vision
- Core values
- Capabilities
- What makes AMAS different

Use imagery from the assets folder.

Avoid long blocks of text.

====================================================
21. SERVICES PAGE
====================================================

Create a dedicated Services page.

Organize services into relevant categories such as:

- Signage
- Branding
- Printing
- Fabrication
- Advertising

Each service should include:

- Image
- Title
- Description
- CTA

====================================================
22. SERVICE DETAILS PAGE
====================================================

Create reusable service detail pages.

Each page should include:

- Hero image
- Service title
- Description
- What the service includes
- Supporting imagery
- Process where relevant
- Related projects
- Related services
- FAQ where appropriate
- Request a Quote CTA

====================================================
23. PORTFOLIO PAGE
====================================================

Create an image-focused Portfolio page.

Support filtering by categories such as:

- Signage
- Branding
- Printing
- Fabrication
- Outdoor Advertising
- Vehicle Branding

Use real AMAS project images from the assets folder.

Each card should include:

- Image
- Project title
- Category

Use a premium responsive layout.

====================================================
24. PROJECT DETAILS PAGE
====================================================

Create reusable project detail pages.

Include:

- Project title
- Category
- Client name where appropriate
- Large project imagery
- Project overview
- Challenge
- Solution
- Work completed
- Gallery
- Related projects
- CTA to request a similar project

====================================================
25. GALLERY PAGE
====================================================

Create a visually rich gallery.

Use real images from the assets folder.

The gallery may showcase:

- Completed signage
- Branding work
- Fabrication
- Production
- Installation
- Printing
- Behind-the-scenes work

Include:

- Responsive image grid
- Category filtering where appropriate
- Lightbox viewing
- Smooth transitions

====================================================
26. REQUEST A QUOTE PAGE
====================================================

Create a professional quote request page.

Include fields:

- Full Name
- Company Name
- Email Address
- Phone Number
- Preferred Contact Method
- Service Required
- Project Title
- Project Description
- Project Location
- Estimated Dimensions
- Preferred Completion Date
- Estimated Budget Range
- Upload Reference Image or File

Requirements:

- Client-side validation
- Clear required fields
- Helpful field descriptions
- Accessible error messages
- Success state
- Mobile-friendly design

The form should be designed so backend/API integration can be added later without redesigning the interface.

====================================================
27. CONTACT PAGE
====================================================

Create a dedicated Contact page.

Support:

- Phone number
- Email address
- Business address
- Business hours
- Contact form
- Map / Google Maps area

Clearly include social media icons for:

- X
- Facebook
- Instagram

Use recognizable icons.

The social links should be easy to configure.

Do not invent URLs if they have not been provided.

====================================================
28. NAVIGATION
====================================================

Create a premium, responsive navigation system.

Navigation:

- Home
- About Us
- Services
- Portfolio
- Gallery
- Contact

Include a prominent CTA:

"Request a Quote"

Ensure the navigation works perfectly on:

- Desktop
- Tablet
- Mobile

Use a sticky navbar if it complements the template.

====================================================
29. FOOTER
====================================================

Create a professional multi-column footer.

Include:

- AMAS logo
- Short company description
- Quick links
- Services links
- Contact information
- X icon
- Facebook icon
- Instagram icon

Also include:

© 2026 AMAS Inter Designers Ltd. All Rights Reserved.

Include:

- Privacy Policy
- Terms & Conditions

====================================================
30. RESPONSIVE DESIGN
====================================================

The website must be fully responsive.

Optimize specifically for:

- Large desktop screens
- Desktop
- Laptop
- Tablet
- Mobile

Do not simply shrink the desktop layout.

Adapt:

- Navigation
- Typography
- Grid layouts
- Image sizing
- Spacing
- Buttons
- Forms

for smaller screens.

====================================================
31. PERFORMANCE
====================================================

Prioritize performance.

Use:

- Next.js Image optimization
- Appropriate lazy loading
- Responsive images
- Minimal unnecessary JavaScript
- Code splitting where appropriate
- Optimized animations

Avoid unnecessary dependencies.

The website should feel fast, especially on mobile connections.

====================================================
32. ACCESSIBILITY
====================================================

Ensure:

- Semantic HTML
- Proper heading hierarchy
- Keyboard navigation
- Visible focus states
- Good color contrast
- Accessible forms
- Meaningful alt text
- Accessible slideshow controls
- Proper ARIA attributes where necessary

====================================================
33. CODE QUALITY
====================================================

Write production-quality code.

Requirements:

- Clean component structure
- Reusable components
- Avoid unnecessary duplication
- Use appropriate TypeScript types if the project uses TypeScript
- Keep data separate from presentation where practical
- Use reusable data structures for:
  - Services
  - Projects
  - Gallery images
  - Trusted clients
  - Testimonials

Avoid hardcoding repeated JSX unnecessarily.

Use arrays and mapping where appropriate.

====================================================
34. CONTENT MANAGEMENT PREPARATION
====================================================

Do not build an admin dashboard or CMS interface.

However, structure the application so content can easily be updated later.

Keep content such as:

- Services
- Projects
- Gallery images
- Client names/logos
- Testimonials
- Contact information
- Social links

in organized data/configuration files where appropriate.

This should make future CMS or API integration easier.

====================================================
35. SEO
====================================================

Implement SEO-friendly structure.

Support:

- Page titles
- Meta descriptions
- Open Graph metadata
- Semantic HTML
- Proper heading hierarchy
- Image alt text
- SEO-friendly routes
- Sitemap
- Robots configuration
- Local business SEO
- Structured data where appropriate

====================================================
36. CONTENT RULES
====================================================

Do not invent company information.

Do not invent:

- Fake awards
- Fake statistics
- Fake client companies
- Fake testimonials presented as real
- Fake contact information
- Fake social media URLs
- Fake project details

Use clearly identifiable placeholders when information is missing.

Prioritize real information and real images provided in:

- The assets folder
- The existing template
- Project files
- Additional information provided by me

====================================================
37. FINAL IMPLEMENTATION REQUIREMENTS
====================================================

Before completing the work:

1. Ensure the project runs successfully.
2. Ensure Tailwind CSS is correctly installed and working.
3. Ensure all major pages are implemented.
4. Ensure all provided images are used appropriately.
5. Ensure the hero background slideshow works smoothly.
6. Ensure navigation works.
7. Ensure mobile navigation works.
8. Ensure all buttons and links have meaningful destinations or clearly marked placeholders.
9. Ensure the Trusted By section contains ONLY the provided client names.
10. Ensure X, Facebook, and Instagram icons are included.
11. Ensure the website is fully responsive.
12. Check for console errors.
13. Check for broken images.
14. Check for broken routes.
15. Remove unnecessary placeholder/template content.
16. Maintain the design quality and visual direction of the provided HTML template.

====================================================
FINAL GOAL
====================================================

Transform the provided HTML template into a polished, production-quality Next.js storefront for AMAS Inter Designers Ltd.

The final website should feel like the digital presence of a premium, established signage, branding, fabrication, printing, and visual advertising company.

The experience should be:

- Visually impressive
- Modern
- Premium
- Fast
- Responsive
- Maintainable
- Conversion-focused
- Image-driven

The public user journey should be:

DISCOVER AMAS
↓
UNDERSTAND WHAT WE DO
↓
EXPLORE SERVICES
↓
BUILD TRUST
↓
SEE WHO WE HAVE WORKED WITH
↓
EXPLORE COMPLETED PROJECTS
↓
REQUEST A QUOTE
↓
CONTACT AMAS

Do not build any internal management system.

Strictly build the public-facing storefront website using:

- The existing Next.js boilerplate
- The provided HTML template as the design reference
- Tailwind CSS for primary styling
- Images provided inside the assets folder
- Clean reusable React/Next.js components

Most importantly, preserve the quality of the original template while transforming it into a unique, polished, AMAS-specific website.