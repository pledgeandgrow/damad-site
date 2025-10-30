# DMD Ascenseur - Best Practices & Dependencies

## Project Dependencies

### Core Dependencies
- **Next.js**: Frontend React framework for server-side rendering and static site generation
- **React**: UI library for building component-based interfaces
- **React DOM**: React package for DOM manipulation
- **TypeScript**: Static type checking for JavaScript
- **Tailwind CSS**: Utility-first CSS framework for styling
- **ESLint**: Code linting tool for identifying problematic patterns
- **Prettier**: Code formatter for consistent code style

### UI & Styling Dependencies
- **React Icons**: Icon library for React applications
- **Framer Motion**: Animation library for React
- **Tailwind Forms**: Plugin for styling form elements
- **Tailwind Typography**: Plugin for styling typography
- **Tailwind Aspect Ratio**: Plugin for aspect ratio utilities

### Development Dependencies
- **PostCSS**: Tool for transforming CSS with JavaScript
- **Autoprefixer**: PostCSS plugin for adding vendor prefixes
- **TypeScript ESLint**: ESLint plugin for TypeScript

## Coding Best Practices

### Project Structure
- Use folders for components, pages, and styles to maintain structure
- Each component should be in a separate file for better modularity
- Each page should be in a separate file for clarity and organization
- Group related components in subdirectories

### Naming Conventions
- Use camelCase for variables and functions
- Use PascalCase for components and interfaces
- Use snake_case for database fields
- Use kebab-case for CSS classes and file names

### Component Development
- Create small, reusable components
- Use TypeScript interfaces for component props
- Implement proper prop validation
- Use React hooks for state management
- Avoid excessive prop drilling by using context where appropriate

### Styling Guidelines
- Use Tailwind utility classes for styling
- Create custom utility classes for repeated patterns
- Use CSS variables for theme colors and values
- Ensure responsive design for all components
- Follow mobile-first approach

### Performance Optimization
- Use Next.js Image component for optimized images
- Implement code splitting for large components
- Lazy load below-the-fold content
- Minimize JavaScript bundle size
- Use proper caching strategies

### Accessibility Standards
- Ensure proper heading hierarchy (h1, h2, h3, etc.)
- Add appropriate ARIA attributes to interactive elements
- Maintain sufficient color contrast (WCAG AA compliance)
- Ensure keyboard navigation support
- Test with screen readers

### State Management
- Use React hooks (useState, useReducer) for local state
- Consider React Context for shared state
- Keep state as close as possible to where it's used
- Avoid unnecessary re-renders

### Testing Strategy
- Write unit tests for critical components
- Implement integration tests for key user flows
- Use snapshot testing for UI components
- Test on multiple browsers and devices

### Deployment Process
- Use Vercel for deployment
- Implement CI/CD pipeline
- Run linting and type checking before deployment
- Use environment variables for configuration
- Implement proper error logging

## Git Workflow
- Use descriptive branch names
- Write clear commit messages
- Create pull requests for code reviews
- Squash commits before merging
- Keep the main branch always deployable
