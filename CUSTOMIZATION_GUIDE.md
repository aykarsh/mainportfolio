# Quick Customization Guide

This guide will help you quickly personalize your portfolio with your own information.

## 1. Personal Information (5 minutes)

### Update Your Name and Title
**File**: `frontend/src/components/Hero.js`

Find and replace:
```javascript
// Line 42
<motion.h1>
  Your Name  // ← Replace with your actual name
</motion.h1>

// Line 49
<motion.h2>
  UI/UX Interaction Designer  // ← Replace with your title
</motion.h2>

// Line 54
<motion.p>
  Based in Your Location  // ← Replace with your location
</motion.p>
```

### Update Your Stats
**File**: `frontend/src/components/Hero.js`

Update the numbers (lines 73-102):
- Years of Experience: Change `8`
- Satisfaction Score: Change `100%`
- Clients Worldwide: Change `+80`
- Projects Done: Change `675`

## 2. Biography Section (3 minutes)

**File**: `frontend/src/components/Biography.js`

### Update Biography Text (Line 20)
```javascript
<p className="font-serif leading-relaxed">
  Work for money and design for love!  // ← Replace with your bio
</p>
```

### Update Contact Information (Lines 30-34)
```javascript
<p>Warsaw, Poland</p>          // ← Your city
<p>hello@youremail.com</p>     // ← Your email
<p>+48 1234 56 78</p>          // ← Your phone
```

### Update Services (Lines 44-48)
```javascript
<p>Website Design</p>              // ← Your service 1
<p>Mobile Application Design</p>   // ← Your service 2
<p>Animation</p>                   // ← Your service 3
```

## 3. Education & Experience (10 minutes)

**File**: `frontend/src/components/Education.js`

Update the `experiences` array (lines 9-39):

```javascript
const experiences = [
  {
    year: "2014",  // ← Your year
    items: [
      { 
        title: "Bachelor Degree of Design",      // ← Your degree
        subtitle: "RMIT University"              // ← Your school
      },
      // Add more items...
    ]
  },
  // Add more time periods...
];
```

## 4. Projects (10 minutes)

**File**: `frontend/src/components/Projects.js`

Update the `projects` array (lines 9-23):

```javascript
const projects = [
  {
    title: "Project One",        // ← Your project name
    category: "Brand Design",    // ← Category
    image: "placeholder1"        // ← Image filename
  },
  // Add more projects...
];
```

### To add project images:
1. Place images in `images/projects/`
2. Import at top of file:
   ```javascript
   import projectImage1 from '../../images/projects/project1.jpg';
   ```
3. Use in the array:
   ```javascript
   image: projectImage1
   ```

## 5. Social Media Links (2 minutes)

**File**: `frontend/src/components/Navbar.js`

Update the links (lines 37-75):

```javascript
// Twitter (Line 37)
<motion.a href="#">  // ← Change # to your Twitter URL

// GitHub (Line 48)
<motion.a href="#">  // ← Change # to your GitHub URL

// Facebook (Line 59)
<motion.a href="#">  // ← Change # to your Facebook URL

// Dribbble (Line 70)
<motion.a href="#">  // ← Change # to your Dribbble URL
```

## 6. Add Your Profile Photo (5 minutes)

### Steps:
1. Save your photo as `profile.jpg` in `mainportfolio/images/`
2. Open `frontend/src/components/Hero.js`
3. Add import at the top:
   ```javascript
   import profileImage from '../../images/profile.jpg';
   ```
4. Replace the placeholder (around line 68):
   ```javascript
   // Old:
   <span className="text-8xl text-gray-600">👤</span>
   
   // New:
   <img 
     src={profileImage} 
     alt="Your Name" 
     className="w-full h-full object-cover"
   />
   ```

## 7. Company Logos (Optional, 10 minutes)

**File**: `frontend/src/components/Hero.js`

Replace the placeholder array (lines 108-119) with your companies:

```javascript
const companies = ['Company 1', 'Company 2', 'Company 3', 'Company 4', 'Company 5'];

// Or with real logos:
// 1. Add logo images to images/logos/
// 2. Import them
// 3. Use <img> instead of <span>
```

## 8. Color Customization (5 minutes)

**File**: `frontend/tailwind.config.js`

```javascript
colors: {
  'cream': '#f5f5f0',  // ← Change background color
  // Add custom colors:
  'primary': '#your-color',
  'secondary': '#your-color',
},
```

To use custom colors in components:
```javascript
className="bg-primary text-secondary"
```

## 9. Contact Form Email (When Backend Ready)

**File**: `frontend/src/components/Contact.js`

Currently shows alert. To connect to backend:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Add API call
  const response = await fetch('http://localhost:5000/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  });
  
  // Handle response...
};
```

## 10. Testing Your Changes

After making changes:
1. Save the file
2. The browser will auto-reload
3. Check the changes at `http://localhost:3000`

## Common Issues

### Changes not appearing?
- Make sure you saved the file
- Check terminal for errors
- Try refreshing the browser (Ctrl+R)

### Text looks weird?
- Check for missing quotes or brackets
- Verify JSX syntax

### Images not loading?
- Check file path
- Ensure image is in correct folder
- Verify import statement

## Pro Tips

✅ **Make small changes** - Test one section at a time
✅ **Keep backups** - Save working versions
✅ **Use Lorem Ipsum** - For placeholder text while designing
✅ **Mobile first** - Test on mobile view often
✅ **Optimize images** - Use tools like TinyPNG before adding images

## Need Help?

Check the browser console (F12) for error messages. Most issues are typos or missing imports!

---

Happy customizing! 🎨
