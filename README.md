# UniCentral University Website

A modern, responsive university website built with HTML, CSS, and JavaScript based on the provided mockups.

## Features

### Pages
- **Home Page** - Hero section, featured programs, latest news & events, testimonials
- **Programs Page** - Filterable program listings with sidebar filters, program cards, and detailed table
- **Admissions Page** - Application steps, important dates, downloadable forms, FAQ section
- **About Page** - Leadership team, contact form, campus location with map

### Functionality
- ✅ Responsive navigation with mobile menu
- ✅ Smooth scrolling for anchor links
- ✅ Program filtering by department, degree level, and search
- ✅ Interactive FAQ accordion
- ✅ Contact form with validation
- ✅ Scroll animations for cards
- ✅ Back-to-top button
- ✅ Active navigation highlighting
- ✅ Fully responsive design

## Structure

```
university-page-va/
├── index.html          # Home page
├── programs.html       # Programs page with filters
├── admissions.html     # Admissions information
├── about.html          # About us and contact
├── css/
│   └── style.css      # All styles
├── js/
│   └── script.js      # All JavaScript functionality
├── images/            # Image assets (placeholders)
└── README.md          # This file
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6)** - Interactive features
- **Font Awesome 6.4.0** - Icons
- **Google Maps** - Embedded campus map

## Setup Instructions

1. **Open the website:**
   - Simply open `index.html` in a web browser
   - All pages are linked through the navigation

2. **Required Assets:**
   - The website uses Font Awesome CDN (no download needed)
   - Image placeholders are referenced but not included
   - To add real images, place them in the `images/` folder with these names:
     - campus-hero.jpg
     - computer-science.jpg
     - business.jpg
     - biomedical.jpg
     - psychology.jpg
     - mechanical.jpg
     - fine-arts.jpg
     - environmental.jpg
     - law.jpg
     - medicine.jpg
     - architecture.jpg
     - testimonial.jpg
     - about-hero.jpg
     - leader-1.jpg through leader-6.jpg

## Features Breakdown

### Home Page
- Eye-catching hero section with call-to-action buttons
- Welcome message section
- Three featured program cards
- Latest news & events timeline
- Student testimonial section
- Call-to-action section

### Programs Page
- Sidebar with multiple filters:
  - Search box
  - Department checkboxes
  - Degree level dropdown
  - Interest area dropdown
- Program cards grid
- Comprehensive programs table
- Real-time filtering

### Admissions Page
- 4-step application process
- Important dates with color-coded badges
- Downloadable forms section
- Interactive FAQ accordion
- Call-to-action section

### About Page
- Hero section with mission statement
- Leadership team grid (6 members)
- Contact form with validation
- Campus location with Google Maps integration

## Responsive Breakpoints

- **Desktop:** 1024px and above
- **Tablet:** 768px - 1023px
- **Mobile:** Below 768px

## Color Scheme

- Primary Blue: #0066FF
- Dark Blue: #0052CC
- Light Blue: #E6F0FF
- Text Dark: #1A1A1A
- Text Gray: #666666
- Background: #F8F9FA

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## JavaScript Features

1. **Mobile Menu Toggle** - Hamburger menu for mobile devices
2. **Smooth Scrolling** - Smooth anchor link navigation
3. **FAQ Accordion** - Expandable/collapsible questions
4. **Form Handling** - Contact form submission with validation
5. **Program Filtering** - Dynamic filtering on programs page
6. **Scroll Animations** - Fade-in effects for cards
7. **Navbar Effects** - Shadow changes on scroll
8. **Back-to-Top Button** - Appears after scrolling down

## Customization

### To change colors:
Edit the CSS variables in `css/style.css`:
```css
:root {
    --primary-blue: #0066FF;
    --dark-blue: #0052CC;
    /* ... other colors ... */
}
```

### To add more programs:
Add new entries in both the cards grid and table in `programs.html`

### To modify navigation:
Edit the nav links in the header section of each HTML file

## Future Enhancements

- Add a blog/news detail pages
- Implement actual form backend
- Add student portal login functionality
- Create program detail pages
- Add image gallery
- Integrate with a CMS

## Credits

- Icons: Font Awesome
- Maps: Google Maps
- Design: Based on UniCentral mockups

## License

This project is for educational purposes.

---

Built with ❤️ for UniCentral University
