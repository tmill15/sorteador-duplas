# Development Guidelines

## Code Style and Standards

### HTML Structure
- Use semantic HTML5 elements
- Maintain proper indentation (4 spaces)
- Include proper meta tags for PWA functionality
- Ensure accessibility with ARIA labels where needed

### CSS Guidelines
- Use CSS Custom Properties for theming
- Implement mobile-first responsive design
- Maintain consistent spacing and typography
- Use BEM-like naming conventions for complex components
- Support both light and dark themes

### JavaScript Standards
- Use ES6+ features when possible
- Maintain clean, readable code structure
- Use meaningful variable and function names
- Implement proper error handling
- Keep functions small and focused

## PWA Best Practices

### Manifest Configuration
- Ensure all required fields are properly set
- Use appropriate icons for different sizes
- Set correct theme colors
- Configure display mode for optimal UX

### Service Worker
- Implement proper caching strategies
- Handle offline functionality
- Ensure fast loading times
- Test installation flow

## File Organization

### Current Structure
```
sorteador-duplas/
├── index.html          # Main application
├── config.js           # Configuration
├── manifest.json       # PWA manifest
├── icon.svg           # App icon
├── memory-bank/       # Documentation
└── README.md          # Project overview
```

### Recommended Additions
- `sw.js` - Service Worker file
- `css/` - Separate CSS files (if needed)
- `js/` - Separate JavaScript modules (if needed)
- `assets/` - Images and other static assets

## Testing Guidelines

### Browser Compatibility
- Test on modern browsers (Chrome, Firefox, Safari, Edge)
- Ensure mobile responsiveness
- Verify PWA installation on mobile devices
- Test offline functionality

### Functionality Testing
- Player addition/removal
- Pair generation algorithm
- UI responsiveness
- Dark/light theme switching
- Tab navigation

## Performance Optimization

### Loading Performance
- Minimize external dependencies
- Optimize CSS delivery
- Use efficient DOM manipulation
- Implement lazy loading where appropriate

### PWA Performance
- Optimize service worker caching
- Minimize bundle size
- Use appropriate image formats
- Implement proper error handling

## Deployment Considerations

### Static Hosting
- Ensure all files are properly served
- Configure correct MIME types
- Set up proper caching headers
- Test PWA installation flow

### HTTPS Requirements
- PWA features require HTTPS
- Ensure SSL certificate is valid
- Test installation on various devices 