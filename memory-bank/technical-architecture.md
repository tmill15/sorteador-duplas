# Technical Architecture

## Application Structure

### Main Components
1. **HTML Structure** (`index.html`)
   - Single-page application with tabbed interface
   - PWA meta tags and manifest integration
   - Responsive viewport configuration

2. **Styling System** (`index.html` - embedded CSS)
   - CSS Custom Properties for theming
   - Dark mode support with `prefers-color-scheme`
   - Responsive design with mobile-first approach
   - Modern UI with gradients and shadows

3. **Configuration** (`config.js`)
   - Application metadata and versioning
   - Global configuration object

4. **PWA Components**
   - `manifest.json`: App installation configuration
   - `icon.svg`: Application icon
   - Service Worker (implied by PWA structure)

## CSS Architecture

### Design System
- **Color Scheme**: Blue gradient theme (#4facfe, #00f2fe)
- **Typography**: Segoe UI font family
- **Spacing**: Consistent padding/margin system
- **Border Radius**: 10px-20px for modern look
- **Shadows**: Layered shadow system for depth

### Responsive Breakpoints
- Mobile-first design
- Flexible container with max-width: 900px
- Tab-based navigation for mobile optimization

### Theme Variables
```css
:root {
    --bg-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --container-bg: rgba(255, 255, 255, 0.95);
    --header-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    --text-primary: #333;
    --text-secondary: #6c757d;
    /* ... more variables */
}
```

## JavaScript Architecture

### Global Configuration
- `APP_CONFIG` object exported to window
- Version tracking and metadata management

### UI Components
- Tab switching functionality
- Form handling for player input
- Random pair generation algorithm
- Dynamic content rendering

## PWA Features

### Manifest Configuration
- App name: "Sorteio Beach Tennis"
- Theme color: #667eea
- Display mode: Standalone
- Icon integration

### iOS Web App Support
- Apple-specific meta tags
- Touch icon configuration
- Status bar styling

## Performance Considerations
- Minimal external dependencies (only Lucide Icons)
- Optimized CSS with custom properties
- Efficient DOM manipulation
- PWA caching strategies 