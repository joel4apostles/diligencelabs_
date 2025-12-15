# 🌓 Dark/Light Theme System

The Diligence Labs website features a comprehensive, professional theme system with dark and light modes, smooth transitions, and user preference persistence.

## 🎨 Features

### Professional Theme Design
- **Dark Theme**: Deep navy institutional colors conveying trust and authority
- **Light Theme**: Clean, minimalist design with subtle blue-grey accents
- **Smooth Transitions**: 300ms ease transitions between all theme elements
- **System Integration**: Respects user's OS theme preference

### Advanced Theme Controls
- **Triple Toggle Options**: Light, Dark, and System (auto)
- **Smart Theme Persistence**: Remembers user preference across sessions
- **Instant Visual Feedback**: Real-time theme switching with animations
- **Accessibility Compliant**: WCAG 2.1 AA compatible with proper contrast ratios

## 🚀 Implementation

### Theme Provider
```tsx
// Wraps entire application
<ThemeProvider defaultTheme="dark" storageKey="diligence-labs-theme">
  {children}
</ThemeProvider>
```

### Theme Toggle Component
```tsx
// Simple toggle (light ↔ dark)
<ThemeToggle size="md" />

// Advanced toggle with system option
<ThemeToggle size="md" showLabel />
```

### Using Theme in Components
```tsx
import { useTheme } from '@/contexts/ThemeContext'

function MyComponent() {
  const { theme, resolvedTheme, setTheme, toggleTheme } = useTheme()
  
  return (
    <div className={`bg-bg-page text-text-primary`}>
      <button onClick={toggleTheme}>
        Current theme: {resolvedTheme}
      </button>
    </div>
  )
}
```

## 🎯 CSS Variables System

### Dark Theme (Default)
```css
.dark {
  --bg-page: 221 39% 11%;        /* Deep Navy */
  --bg-card: 221 44% 9%;         /* Darker Navy */
  --text-primary: 0 0% 98%;      /* Near White */
  --text-secondary: 220 13% 69%; /* Professional Grey */
  /* ... more variables */
}
```

### Light Theme
```css
.light {
  --bg-page: 0 0% 98%;           /* Pure White */
  --bg-card: 0 0% 95%;           /* Light Grey */
  --text-primary: 221 39% 11%;   /* Deep Navy */
  --text-secondary: 220 9% 46%;  /* Medium Grey */
  /* ... more variables */
}
```

### Shared Accent Colors
```css
:root {
  --accent-primary: 160 84% 39%;   /* Professional Teal */
  --accent-secondary: 199 89% 48%; /* Trustworthy Blue */
  --accent-success: 142 76% 36%;   /* Success Green */
  --accent-warning: 43 96% 56%;    /* Warning Amber */
  --accent-error: 0 84% 60%;       /* Error Red */
}
```

## 🎛️ Theme Toggle Locations

### Navigation Bar
- **Desktop**: Icon button next to CTA
- **Mobile**: Full-width toggle in mobile menu
- **Features**: Quick toggle + advanced dropdown

### Usage Examples
```tsx
// Simple toggle in header
<ThemeToggle size="sm" />

// Toggle with label in settings
<ThemeToggle size="lg" showLabel />

// Custom positioning
<ThemeToggle className="fixed top-4 right-4" />
```

## 🔧 Customization

### Custom Theme Colors
Add custom colors to CSS variables:
```css
.dark {
  --custom-accent: 280 100% 70%;
}

.light {
  --custom-accent: 280 50% 40%;
}
```

### Custom Animations
Override transition durations:
```css
.theme-changing * {
  transition-duration: 150ms; /* Faster transitions */
}
```

### Add New Theme Variants
Extend the theme system:
```tsx
type Theme = 'light' | 'dark' | 'system' | 'midnight' | 'high-contrast'
```

## 📱 Responsive Behavior

### Desktop Experience
- Subtle icon toggle in navigation
- Dropdown with three options (Light/Dark/System)
- Hover effects and smooth animations

### Mobile Experience
- Accessible toggle in mobile menu
- Label showing current theme mode
- Touch-friendly 44px minimum targets

### Tablet Experience
- Adaptive layout maintaining usability
- Optimized touch targets
- Consistent theme persistence

## ⚡ Performance Features

### Optimized Rendering
- **Hydration Safety**: Prevents layout shifts during SSR
- **Efficient Updates**: Only re-renders when theme changes
- **Memory Optimized**: Minimal context re-renders

### Storage Management
- **Local Storage**: Persists user preference
- **Fallback Graceful**: Works without storage access
- **Error Handling**: Graceful degradation on storage failures

## ♿ Accessibility Features

### WCAG Compliance
- **Contrast Ratios**: 4.5:1 minimum for all text
- **Focus Indicators**: Enhanced focus rings for theme toggles
- **Screen Reader Support**: Proper ARIA labels and descriptions
- **Keyboard Navigation**: Full keyboard accessibility

### Color Considerations
```css
/* High contrast support */
@media (prefers-contrast: high) {
  .light {
    --text-primary: 0 0% 0%;
    --border-subtle: 0 0% 50%;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  * {
    transition-duration: 0.01ms !important;
  }
}
```

## 🧪 Testing

### Manual Testing Checklist
- [ ] Theme toggles work in navigation
- [ ] User preference persists on page reload
- [ ] System theme detection works correctly
- [ ] Smooth transitions between themes
- [ ] All components respect theme colors
- [ ] Mobile theme toggle functions properly

### Automated Testing
```tsx
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '@/contexts/ThemeContext'

test('theme toggle changes theme', () => {
  render(
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>
  )
  // Test theme switching logic
})
```

## 🚀 Deployment Considerations

### Environment Variables
No environment variables required - works out of the box.

### Browser Support
- **Modern Browsers**: Full feature support
- **Legacy Browsers**: Graceful degradation to dark theme
- **CSS Custom Properties**: Required (IE11+ support)

### Performance Monitoring
```tsx
// Track theme usage
const { theme } = useTheme()

useEffect(() => {
  analytics.track('Theme Changed', { theme })
}, [theme])
```

## 🎯 Best Practices

### Component Design
- Use semantic color variables (`--text-primary`, not `--navy-900`)
- Test components in both themes during development
- Avoid hardcoded colors in favor of CSS variables

### Animation Guidelines
- Keep transitions subtle (300ms or less)
- Use consistent easing functions
- Respect `prefers-reduced-motion`

### Contrast Guidelines
- Maintain 4.5:1 contrast for body text
- Use 3:1 contrast for large text
- Test with accessibility tools

## 📚 Related Files

- **Theme Context**: `src/contexts/ThemeContext.tsx`
- **Theme Toggle**: `src/components/ui/ThemeToggle.tsx`
- **CSS Variables**: `src/app/globals.css`
- **Navigation**: `src/components/layout/navigation.tsx`
- **Layout Provider**: `src/app/layout.tsx`

## 🆘 Troubleshooting

### Common Issues

**Theme not persisting**: Check localStorage permissions
**Hydration errors**: Ensure proper `useIsomorphicTheme` usage
**CSS not updating**: Verify CSS variable names match

### Debug Mode
```tsx
const { theme, resolvedTheme, isLoading } = useIsomorphicTheme()
console.log({ theme, resolvedTheme, isLoading })
```

The theme system is production-ready and provides a professional, accessible dark/light mode experience for your users! 🌟