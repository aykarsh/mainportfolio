# Portfolio Design Specifications

## Layout Overview

The portfolio follows a clean, centered, document-style design inspired by professional resumes.

### Color Palette
- **Primary Background**: `#f5f5f0` (Cream/Off-white paper color)
- **Text Primary**: `#000000` (Black)
- **Text Secondary**: `#6B7280` (Gray-600)
- **Accent**: `#111827` (Gray-900) - used for buttons
- **Borders**: `#D1D5DB` (Gray-300)

### Typography
- **Font Family**: Georgia, 'Times New Roman', serif
- **Headings**: 
  - H1 (Name): 5xl-7xl (48-72px)
  - H2 (Section Titles): 4xl-5xl (36-48px)
- **Body Text**: lg-xl (18-20px)
- **Small Text**: sm-xs (12-14px)

### Spacing & Layout
- **Max Container Width**: 1280px (max-w-7xl)
- **Content Width**: 896px (max-w-5xl)
- **Section Padding**: py-20 (5rem top & bottom)
- **Horizontal Padding**: px-8 (2rem left & right)

## Section Breakdown

### 1. Navbar
- **Position**: Fixed top
- **Height**: ~80px (py-6)
- **Background**: Semi-transparent cream with backdrop blur
- **Content**: 
  - Left: "WORKS" and "CONTACT" links
  - Right: Social media icons (Twitter, GitHub, Facebook, Dribbble)
- **Animation**: Slides down from top on page load

### 2. Hero Section
- **Padding Top**: pt-32 (8rem) - accounts for fixed navbar
- **Layout**: Centered column
- **Elements**:
  1. Name (Large serif heading)
  2. Title: "UI/UX Interaction Designer"
  3. Location: "Based in [Your Location]"
  4. Profile Image: 
     - Size: 320-384px (w-80-96)
     - Shape: Circular (rounded-full)
     - Position: Center
  5. Stats (Right-aligned, stacked):
     - Years of Experience
     - Satisfaction Score
     - Clients Worldwide
     - Projects Done
  6. Company Logos: Horizontal row at bottom

### 3. Biography Section
- **Layout**: 3-column grid (md:grid-cols-3)
- **Columns**:
  1. Biography paragraph
  2. Contact information
  3. Services list
- **Border**: Top border (border-t-2)

### 4. Education & Experience
- **Title**: "Education & Experience" (centered)
- **Layout**: 3-column timeline
- **Columns**:
  1. Early Career (2014)
  2. Mid Career (2015-2019)
  3. Recent (2020-Present)
- **Entry Format**:
  - Job Title (larger text)
  - Company/Institution (smaller, gray text)
- **Border**: Top border

### 5. Projects Section
- **Title**: "My Latest Projects" (centered)
- **Layout**: 3-column grid (md:grid-cols-3)
- **Card Design**:
  - Image: 384px height (h-96)
  - Rounded corners (rounded-lg)
  - Shadow effect
  - Hover: Lifts up with enhanced shadow
  - Category Badge: Bottom-right corner, circular
- **Border**: Top border

### 6. Contact Section
- **Title**: "Contact Me" (centered)
- **Layout**: Single column, centered, max-width 768px (max-w-3xl)
- **Form Elements**:
  - Subtitle/Description
  - Large Textarea: 8 rows, rounded corners
  - Submit Button: Centered, prominent
- **Border**: Top border

## Animation Specifications

### Page Load Animations
- **Navbar**: Slides down from -100px, fades in (0.8s)
- **Hero Elements**: Stagger children, fade in from bottom (0.8s each)
- **Stats**: Slide in from left with delay (0.6s each)

### Scroll Animations
- **Section Reveal**: Fade in when 100px from viewport
- **Stagger Effect**: Child elements animate sequentially (0.15s delay)

### Hover Animations
- **Links**: Slight move up (-2px), opacity change
- **Buttons**: Scale up (1.02-1.03), enhanced shadow
- **Project Cards**: Lift up (-10px), shadow enhancement
- **Social Icons**: Scale up (1.1)

### Interaction Animations
- **Button Click**: Quick scale down (0.98) on tap
- **Form Focus**: Subtle scale up (1.01)

## Responsive Breakpoints

### Mobile (default)
- Single column layouts
- Smaller text sizes
- Reduced padding
- Stats stack vertically

### Tablet (md: 768px)
- 3-column grid layouts activate
- Larger text sizes
- Full spacing
- Stats display horizontally

### Desktop (lg: 1024px)
- Optimal viewing experience
- All elements at full size
- Maximum spacing

## Accessibility Features
- Semantic HTML elements
- Proper heading hierarchy
- Alt text for images
- Focus states for interactive elements
- Keyboard navigation support
- ARIA labels where needed

## Performance Optimizations
- Framer Motion's hardware-accelerated animations
- Lazy loading for images (to be implemented)
- Optimized bundle with React Scripts
- Tailwind's purged CSS for production
- Minimal re-renders with React best practices
