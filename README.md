# Element React - Modern React UI Library

A modern, accessible React component library built with React 18, TypeScript, and Vite.

## 🚀 Features

- **Modern React**: Built with React 18 and functional components
- **TypeScript Support**: Full TypeScript support with proper type definitions
- **Fast Build**: Powered by Vite for lightning-fast development and builds
- **Accessible**: WCAG compliant components
- **Tree Shakeable**: Only import what you need
- **Customizable**: Easy theming and customization

## 📦 Installation

```bash
npm install element-react
# or
yarn add element-react
```

## 🔧 Setup

### CSS Import

Import the default theme CSS:

```javascript
import 'element-react/dist/style.css';
```

### Component Usage

```jsx
import React from 'react';
import { Button, Alert, Input } from 'element-react';

function App() {
  return (
    <div>
      <Alert title="Success!" type="success" />
      <Input placeholder="Enter your name" />
      <Button type="primary">Click me</Button>
    </div>
  );
}
```

## 🛠 Development

### Prerequisites

- Node.js 16+
- npm or yarn

### Setup Development Environment

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build library
npm run build:lib

# Run tests
npm test

# Lint code
npm run lint
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build the site
- `npm run build:lib` - Build the library
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run lint` - Lint code
- `npm run lint:fix` - Fix linting issues
- `npm run type-check` - TypeScript type checking

## 📚 Components

### Basic Components

- **Button** - Button component with various types and sizes
- **Alert** - Alert component for displaying messages
- **Input** - Input component with validation and formatting
- **Icon** - Icon component

### Form Components

- **Form** - Form wrapper with validation
- **InputNumber** - Number input component
- **Select** - Select dropdown component
- **Checkbox** - Checkbox component
- **Radio** - Radio button component
- **Switch** - Switch toggle component
- **Slider** - Slider component
- **DatePicker** - Date picker component
- **TimePicker** - Time picker component
- **Upload** - File upload component

### Data Display

- **Table** - Data table component
- **Tag** - Tag component
- **Progress** - Progress bar component
- **Tree** - Tree component
- **Badge** - Badge component
- **Rate** - Rating component

### Navigation

- **Menu** - Navigation menu component
- **Tabs** - Tab component
- **Breadcrumb** - Breadcrumb navigation
- **Pagination** - Pagination component
- **Steps** - Step component

### Feedback

- **Dialog** - Modal dialog component
- **Message** - Message component
- **MessageBox** - MessageBox component
- **Notification** - Notification component
- **Loading** - Loading component
- **Tooltip** - Tooltip component
- **Popover** - Popover component

### Layout

- **Layout** - Layout component
- **Card** - Card component
- **Collapse** - Collapse component
- **Carousel** - Carousel component

## 🎨 Theming

Element React supports custom theming through CSS variables:

```css
:root {
  --el-color-primary: #409eff;
  --el-color-success: #67c23a;
  --el-color-warning: #e6a23c;
  --el-color-danger: #f56c6c;
  --el-color-info: #909399;
}
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Original Element UI team for the design system
- React team for the amazing framework
- Vite team for the fast build tool
