# AI Image Generator

A modern, responsive web application for generating AI-powered images using natural language descriptions. Built with React, TypeScript, and Vite.

## ✨ Features

- **Intuitive Interface**: Clean, modern UI with glassmorphism design and modular layout
- **Smart Validation**: Client-side validation with helpful error messages and real-time feedback
- **Toast Notifications**: Non-intrusive notifications for user actions and system feedback
- **Image History Management**: Browse, select, and manage previously generated images with sidebar navigation
- **Responsive Layout**: Adaptive sidebar/main content layout optimized for all device sizes
- **Loading States**: Advanced skeleton loaders and smooth transitions with lazy loading
- **Error Handling**: Comprehensive error management with dedicated error components
- **Modular Architecture**: Feature-based organization with reusable UI components
- **Context-driven State**: Isolated state management with React Context providers

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-image-generator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Built With

- **React 19** - Latest UI library with enhanced performance
- **TypeScript 5.8** - Advanced type safety and developer experience
- **Vite 7** - Lightning-fast build tool and dev server
- **CSS Modules** - Scoped styling with component isolation
- **clsx** - Conditional CSS class utility for dynamic styling
- **Modern CSS** - Custom properties, flexbox, grid, and advanced selectors
- **ESLint 9** - Code quality and consistency enforcement

## 📁 Project Structure

```
src/
├── features/                    # Feature-based organization
│   └── image-generation/        # AI image generation feature
│       ├── components/          # Feature-specific components
│       │   ├── ImageDisplay/    # Image rendering component
│       │   ├── ImageHistory/    # History sidebar component
│       │   └── PromptForm/      # Input form component
│       ├── context/             # React context providers
│       │   ├── GenerationContext/  # Image generation state
│       │   ├── QueryContext/       # API query management
│       │   └── ToastContext/       # Toast notifications
│       └── hooks/               # Custom hooks for logic
│           ├── useGenerateImage.tsx  # Image generation logic
│           ├── useImageLoad.tsx      # Image loading states
│           ├── useImageManager.tsx   # History management
│           ├── usePromptForm.tsx     # Form validation
│           ├── useToast.tsx          # Toast notifications
│           └── useValidation.tsx     # Input validation
├── shared/                      # Shared components and utilities
│   ├── components/              # Layout components
│   │   ├── Header/             # Application header
│   │   ├── Layout/             # Main layout wrapper
│   │   ├── MainContent/        # Content area
│   │   └── Sidebar/            # Sidebar layout
│   └── ui/                     # Reusable UI components
│       ├── Button/             # Custom button component
│       ├── Input/              # Input field with validation
│       ├── ImageCard/          # Image display card
│       ├── HistoryItem/        # History list item
│       ├── PlaceholderView/    # Empty state placeholder
│       ├── SkeletonLoader/     # Loading skeleton
│       ├── Spinner/            # Loading spinner
│       ├── Toast/              # Toast notification
│       └── ErrorMessage/       # Error display component
├── services/                    # API and external services
│   └── generateImage.ts        # Image generation API
├── constants/                   # App constants and configuration
│   ├── api.ts                  # API configuration
│   ├── ui.ts                   # UI constants
│   └── validation.ts           # Validation rules
├── types/                      # TypeScript type definitions
├── utils/                      # Utility functions
│   └── dateUtils.ts           # Date formatting utilities
└── styles/                     # Global styles
    └── global.css             # Global CSS variables and styles
```

## 🎨 Design System

The application uses a modern design system with:

- **Color Palette**: Blue primary colors with neutral grays
- **Typography**: Inter font family with consistent sizing
- **Spacing**: CSS custom properties for consistent spacing
- **Glassmorphism**: Backdrop blur effects for modern UI
- **Responsive**: Mobile-first approach with breakpoints

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

## 📱 Responsive Breakpoints

- **Mobile**: < 576px
- **Tablet**: 576px - 768px  
- **Desktop**: > 768px

## 🎯 Key Features

### Modular Architecture
- **Feature-based organization**: Each feature isolated in its own module
- **Component separation**: UI components organized by purpose (shared/ui vs shared/components)
- **Index.tsx pattern**: Clean import paths with barrel exports
- **Context providers**: Dedicated contexts for different state domains

### Smart Prompt Validation
- **Real-time validation**: Instant feedback with useValidation hook
- **Character limits**: Minimum 3, maximum 500 characters with visual indicators
- **Warning system**: Progressive alerts for approaching limits
- **Form state management**: Comprehensive form handling with usePromptForm

### Advanced Image Management
- **History sidebar**: Dedicated sidebar component for browsing generated images
- **Image cards**: Rich image display with metadata and actions
- **Lazy loading**: Efficient image loading with useImageLoad hook
- **State persistence**: History management with useImageManager hook

### Enhanced User Experience
- **Toast notifications**: Non-intrusive feedback system with ToastContext
- **Skeleton loading**: Advanced loading states with custom SkeletonLoader
- **Placeholder views**: Empty state handling with PlaceholderView component
- **Responsive layout**: Adaptive sidebar/main content structure
- **Smooth animations**: CSS-based transitions and micro-interactions

## 💡 Usage Examples

### Good Prompts
```
✅ "A majestic golden retriever sitting in a sunny meadow, photorealistic style, warm golden lighting, peaceful atmosphere"

✅ "Cyberpunk cityscape at night with neon lights, rain-soaked streets, futuristic architecture, cinematic lighting"

✅ "Minimalist logo design for a tech startup, clean lines, blue and white color scheme, modern typography"
```

### Tips for Better Results
- **Be specific**: Include subject, style, colors, setting, and mood
- **Use descriptive adjectives**: "majestic", "vibrant", "serene"
- **Specify art style**: "photorealistic", "cartoon", "watercolor", "digital art"
- **Include lighting details**: "soft lighting", "dramatic shadows", "golden hour"
- **Add composition notes**: "close-up", "wide angle", "bird's eye view"

## 🎨 Design Philosophy

This application follows modern web design principles:

- **Accessibility First**: Semantic HTML and ARIA labels
- **Mobile Responsive**: Touch-friendly interface on all devices
- **Performance Optimized**: Fast loading with skeleton states
- **User-Centered**: Intuitive interactions and clear feedback
- **Modern Aesthetics**: Glassmorphism and subtle animations

## 🚀 Deployment

Build the application for production:

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

### Deployment Options

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect your repository
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **AWS S3**: Upload the `dist` folder to an S3 bucket with static hosting

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# API Configuration
VITE_API_BASE_URL=your_api_endpoint_here
VITE_API_KEY=your_api_key_here

# App Configuration
VITE_APP_NAME=AI Image Generator
VITE_APP_VERSION=1.0.0
```

### Customization

- **Colors**: Modify CSS custom properties in `src/styles/global.css`
- **Validation**: Update constraints in `src/constants/validation.ts`
- **Icons**: Replace icons in `src/constants/ui.ts`

## 🧪 Testing

The project is set up with ESLint for code quality. To run linting:

```bash
npm run lint
npm run lint:fix
```

## 📊 Performance

- **Bundle Size**: Optimized with Vite's tree-shaking
- **Loading**: Skeleton loaders prevent layout shift
- **Images**: Lazy loading for better performance
- **Caching**: Static assets are cached for optimal loading

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with modern React patterns and best practices
- Designed with accessibility and user experience in mind
- Inspired by modern web design trends and glassmorphism

## 👨‍💻 Development Notes

### Architecture & Core Logic
- **Modular architecture**: Feature-based organization with complete separation of concerns
- **State management**: Advanced Context API pattern with isolated providers (GenerationContext, QueryContext, ToastContext)
- **Custom hooks**: Specialized hooks for different responsibilities (useGenerateImage, useImageManager, useToast, useValidation)
- **TypeScript integration**: Comprehensive typing system with strict type checking
- **Component structure**: Index.tsx pattern for clean imports and barrel exports
- **Layout system**: Dedicated layout components (Header, Sidebar, MainContent) for consistent UI structure

### Enhanced Component System
- **UI component library**: Reusable components in shared/ui (Button, Input, ImageCard, Toast, etc.)
- **Layout components**: Structural components in shared/components for application layout
- **Feature components**: Domain-specific components in features/image-generation
- **CSS Modules**: Component-scoped styling with zero conflicts
- **Responsive design**: Mobile-first approach with adaptive layouts

### State Management Evolution
- **Context separation**: Different contexts for different concerns (generation, queries, notifications)
- **Hook composition**: Complex logic broken into smaller, testable hooks
- **Form management**: Dedicated form handling with validation and error states
- **Image lifecycle**: Complete image state management from generation to history
- **Toast system**: Global notification system with context provider

### Technical Highlights
- **Modern React patterns**: Latest React 19 features with enhanced performance
- **TypeScript 5.8**: Advanced type features for better developer experience
- **Vite 7**: Latest build tools for optimal development experience
- **ESLint 9**: Modern linting configuration for code quality
- **clsx integration**: Conditional styling utility for dynamic CSS classes
- **CSS custom properties**: Design system built on CSS variables for consistency