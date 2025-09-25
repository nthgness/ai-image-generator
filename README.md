# AI Image Generator

A modern, responsive web application for generating AI-powered images using natural language descriptions. Built with React, TypeScript, and Vite.

## ✨ Features

- **Intuitive Interface**: Clean, modern UI with glassmorphism design
- **Smart Validation**: Client-side validation with helpful error messages
- **Real-time Feedback**: Character counter and validation warnings
- **Image History**: Browse and manage previously generated images
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Loading States**: Skeleton loaders and smooth transitions
- **Error Handling**: Comprehensive error management and user feedback

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

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS Modules** - Scoped styling
- **Modern CSS** - Custom properties, flexbox, grid

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Button/          # Custom button component
│   ├── TextArea/        # Textarea with validation
│   ├── Spinner/         # Loading spinner
│   └── ErrorMessage/    # Error display component
├── features/            # Feature-based organization
│   └── image-generation/
│       ├── components/  # Feature-specific components
│       ├── hooks/       # Custom hooks
│       └── context/     # React context providers
├── shared/              # Shared components and utilities
├── services/            # API and external services
├── constants/           # App constants and configuration
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
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

### Smart Prompt Validation
- Minimum length validation (3 characters)
- Maximum length validation (500 characters)
- Warning system for approaching limits
- Client-side validation before API calls

### Image Management
- Generate images with detailed prompts
- View generation history
- Select and display previous images
- Clear history functionality

### User Experience
- Skeleton loading states
- Smooth animations and transitions
- Comprehensive error handling
- Intuitive form interactions

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