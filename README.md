# 🎭 Meme Generator

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/username/first-test)
[![Test Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)](./coverage/index.html)
[![React](https://img.shields.io/badge/React-18.x-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-purple)](https://vitejs.dev/)
[![Vitest](https://img.shields.io/badge/Vitest-latest-yellow)](https://vitest.dev/)

A modern, responsive React meme generator application built with Vite, featuring comprehensive test coverage and accessibility best practices.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Testing Challenges](#testing-challenges)
- [Accessibility](#accessibility)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Interactive Meme Creation**: Generate memes with customizable top and bottom text
- **Dynamic Image Loading**: Fetch random meme templates from external APIs
- **Responsive Design**: Mobile-friendly interface with modern CSS Grid and Flexbox
- **Real-time Preview**: Instant text overlay on meme images
- **Accessibility First**: Screen reader friendly with proper ARIA labels
- **100% Test Coverage**: Comprehensive test suite with unit and integration tests

## 🛠 Tech Stack

- **Frontend Framework**: React 18.x
- **Build Tool**: Vite 5.x
- **Testing Framework**: Vitest
- **Testing Library**: React Testing Library
- **Styling**: Vanilla CSS with CSS Grid and Flexbox
- **Font**: Karla (Google Fonts) and Impact for meme text
- **Code Coverage**: Istanbul.js

## 🚀 Getting Started

### Prerequisites

- Node.js (v16.0 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/bakadja/react-meme-generator-tdd.git
   cd react-meme-generator-tdd
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application running.

### Production Build

```bash
npm run build
npm run preview
```

## 🧪 Testing

This project features a comprehensive testing strategy with 100% code coverage.

### Running Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Test Coverage

Current coverage: **100%** across all metrics:
- **Statements**: 16/16 (100%)
- **Branches**: 0/0 (100%)
- **Functions**: 10/10 (100%)
- **Lines**: 14/14 (100%)

View detailed coverage report: `./coverage/index.html`

### Testing Philosophy

The project follows these testing principles:
- **Component Testing**: Each React component has dedicated test files
- **User-Centric Testing**: Tests simulate real user interactions
- **Accessibility Testing**: Ensures components are accessible to all users
- **TDD Approach**: Test-driven development for new features

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Application header with logo
│   ├── Header.test.jsx     # Header component tests
│   ├── Main.jsx            # Main meme generator component
│   └── Main.test.jsx       # Main component tests
├── images/
│   └── troll-face.png      # Application logo
├── App.jsx                 # Root application component
├── App.test.jsx            # App integration tests
├── index.css               # Global styles and component CSS
├── main.jsx                # Application entry point
└── a11y.test.jsx           # Accessibility tests
```

## 📜 Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run test` | Run test suite |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Generate coverage report |
| `npm run lint` | Run ESLint |

## 🎯 Testing Challenges

This project includes progressive testing challenges to learn modern testing practices:

### Challenge 1: Component Testing
- Test Main component rendering
- Verify meme text display
- Check image source validation

### Challenge 2: UI Element Testing
- Test form labels and inputs
- Validate placeholder text
- Check button accessibility

### Challenge 3: User Interaction Testing
- Test text input changes
- Verify state updates
- Use Arrange-Act-Assert pattern

### Challenge 4: Event Handling
- Test button click events
- Mock API responses
- Handle asynchronous operations

### Challenge 5: TDD Implementation
- Write failing tests first
- Implement accessibility features
- Refactor with confidence

## ♿ Accessibility

This application prioritizes accessibility:

- **Semantic HTML**: Proper heading hierarchy and landmark elements
- **ARIA Labels**: Screen reader friendly descriptions
- **Keyboard Navigation**: Full keyboard accessibility
- **Alt Text**: Descriptive alternative text for images
- **Color Contrast**: WCAG compliant color schemes
- **Focus Management**: Visible focus indicators

## 🎨 Styling Features

- **CSS Grid Layout**: Modern, responsive layout system
- **Custom Properties**: Maintainable CSS variables
- **Gradient Backgrounds**: Eye-catching visual design
- **Typography**: Professional font selection
- **Responsive Design**: Mobile-first approach
- **Meme Text Styling**: Classic meme font with text shadows

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Write tests for your changes
4. Ensure all tests pass (`npm run test`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Development Guidelines

- Maintain 100% test coverage
- Follow React best practices
- Write accessible code
- Use semantic HTML
- Test user interactions thoroughly

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - Frontend framework
- [Vite](https://vitejs.dev/) - Build tool
- [Vitest](https://vitest.dev/) - Testing framework
- [React Testing Library](https://testing-library.com/react) - Testing utilities
- [imgflip.com](https://imgflip.com/) - Meme image API

---

**Happy Meme Making! 🎭✨**
