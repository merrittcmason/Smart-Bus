# Smart Bus - Business Process Simulation Tool

<div align="center">
  <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Smart Bus Banner" width="600" style="border-radius: 12px; margin-bottom: 20px;">
  
  **An intuitive business process simulation tool designed for MacOS**
  
  [![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0.2-blue.svg)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.3-38B2AC.svg)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF.svg)](https://vitejs.dev/)
</div>

## 🚀 Overview

Smart Bus is a powerful, intuitive business process simulation tool that enables organizations to design, visualize, and test their workflows through an interactive drag-and-drop interface. Built specifically for MacOS with a focus on user experience and professional aesthetics.

### ✨ Key Features

- **🎨 Dual Theme Support** - Beautiful light and dark themes optimized for MacOS
- **🖱️ Drag & Drop Canvas** - Intuitive interface for building process flows
- **🤖 AI Agent Integration** - Configure and simulate AI-powered workflow components
- **👥 Human Representative Nodes** - Model human interactions in your processes
- **⚙️ Process Configuration** - Detailed properties panel for fine-tuning components
- **🔍 Zoom & Pan Controls** - Navigate complex workflows with ease
- **🎯 Real-time Simulation** - Test and validate your business processes

## 📋 Table of Contents

- [Installation](#installation)
- [Getting Started](#getting-started)
- [User Interface Guide](#user-interface-guide)
- [Component Types](#component-types)
- [How to Use](#how-to-use)
- [Keyboard Shortcuts](#keyboard-shortcuts)
- [Advanced Features](#advanced-features)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## 🛠️ Installation

### Prerequisites

- **Node.js** (version 16.0 or higher)
- **npm** or **yarn** package manager
- **MacOS** (recommended for optimal experience)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/smart-bus.git
   cd smart-bus
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to start using Smart Bus

### Production Build

```bash
npm run build
npm run preview
```

## 🎯 Getting Started

### First Steps

1. **Launch the Application** - Open Smart Bus in your browser
2. **Choose Your Theme** - Toggle between light and dark themes using the theme button in the header
3. **Explore the Interface** - Familiarize yourself with the three main areas:
   - **Sidebar** (left): Component library
   - **Canvas** (center): Workspace for building processes
   - **Properties Panel** (right): Configuration area (appears when nodes are selected)

### Creating Your First Process

1. **Add Components** - Drag components from the sidebar onto the canvas
2. **Position Nodes** - Click and drag nodes to arrange your workflow
3. **Configure Properties** - Select nodes to edit their properties in the right panel
4. **Test Your Process** - Use the simulation controls in the header

## 🖥️ User Interface Guide

### Header Bar
- **Smart Bus Logo** - Application branding and title
- **Simulation Controls**:
  - ▶️ **Run** - Start process simulation
  - ⏹️ **Stop** - Halt current simulation
  - 🔄 **Reset** - Reset simulation to initial state
- **Theme Toggle** - Switch between light and dark themes

### Sidebar (Component Library)
- **Agents & People** section:
  - 🤖 **AI Agent** - Automated processing components
  - 👤 **Human Rep** - Human representative nodes
- **Processes** section:
  - ⚙️ **Process** - Business logic components

### Canvas (Main Workspace)
- **Grid Background** - Visual guide for alignment
- **Zoom Controls** (bottom-right):
  - ➕ **Zoom In** - Increase canvas zoom (up to 200%)
  - ➖ **Zoom Out** - Decrease canvas zoom (down to 25%)
  - 🔍 **Reset View** - Return to 100% zoom and center position
- **Zoom Indicator** (bottom-left) - Shows current zoom percentage

### Properties Panel
- **Basic Information**:
  - Title editing
  - Description field
  - Component type display
- **Position Controls** - Precise X/Y coordinate adjustment
- **Type-Specific Settings**:
  - AI Agent: Model selection, temperature controls
  - Human Rep: Role and skills configuration

## 🧩 Component Types

### 🤖 AI Agent
**Purpose**: Represents automated processing units in your workflow

**Visual**: Blue-themed node with bot icon

**Configuration Options**:
- **Model Selection**: Choose from GPT-4, Claude, or Custom models
- **Temperature**: Adjust AI creativity/randomness (0.0 - 1.0)
- **Custom Properties**: Add specific AI parameters

**Use Cases**:
- Document processing
- Data analysis
- Customer service automation
- Decision-making algorithms

### 👤 Human Representative
**Purpose**: Represents human actors in your business process

**Visual**: Green-themed node with user icon

**Configuration Options**:
- **Role**: Define the person's job function
- **Skills**: List relevant expertise and capabilities
- **Custom Properties**: Add role-specific attributes

**Use Cases**:
- Manual approval processes
- Customer interactions
- Quality control
- Creative tasks

### ⚙️ Process
**Purpose**: Represents business logic and workflow steps

**Visual**: Purple-themed node with workflow icon

**Configuration Options**:
- **Process Type**: Define the nature of the process
- **Parameters**: Set process-specific variables
- **Custom Properties**: Add business rules

**Use Cases**:
- Data transformation
- Routing logic
- Integration points
- Business rules

## 📖 How to Use

### Building a Workflow

1. **Plan Your Process**
   - Identify the steps in your business process
   - Determine which steps require human intervention
   - Identify opportunities for AI automation

2. **Add Components to Canvas**
   ```
   Drag → Drop → Configure
   ```
   - Drag desired components from the sidebar
   - Drop them onto the canvas at your preferred location
   - Components will snap to the grid for clean alignment

3. **Configure Each Node**
   - Click on any node to select it
   - The properties panel will appear on the right
   - Edit the title, description, and type-specific settings
   - Use the position controls for precise placement

4. **Connect Your Workflow** *(Coming Soon)*
   - Connection lines between nodes
   - Define relationship types
   - Set data flow directions

5. **Test Your Process**
   - Use the **Run** button to simulate your workflow
   - Monitor the process execution
   - Use **Stop** to halt simulation
   - Use **Reset** to return to initial state

### Navigation Tips

- **Pan the Canvas**: Click and drag on empty canvas space
- **Zoom**: Use the zoom controls or mouse wheel
- **Select Multiple Nodes**: Hold Shift while clicking *(Coming Soon)*
- **Quick Delete**: Select a node and press Delete key

## ⌨️ Keyboard Shortcuts

| Action | Shortcut | Description |
|--------|----------|-------------|
| **Delete Node** | `Delete` or `Backspace` | Remove selected node |
| **Deselect** | `Escape` | Clear current selection |
| **Zoom In** | `Cmd +` | Increase canvas zoom |
| **Zoom Out** | `Cmd -` | Decrease canvas zoom |
| **Reset View** | `Cmd 0` | Reset zoom and pan |
| **Toggle Theme** | `Cmd Shift T` | Switch between light/dark themes |

## 🔧 Advanced Features

### Theme Customization
Smart Bus supports both light and dark themes with carefully chosen color palettes:

**Light Theme**:
- Primary: `#FFFFFF` (Pure white backgrounds)
- Secondary: `#F2F2F2` (Light gray surfaces)
- Accent: `#CCCCCC` (Medium gray borders and text)

**Dark Theme**:
- Primary: `#1A1A1A` (Dark gray backgrounds)
- Secondary: `#333333` (Medium gray surfaces)
- Accent: `#666666` (Light gray borders and text)

### Grid System
- 20px grid spacing for consistent alignment
- Grid visibility scales with zoom level
- Automatic snap-to-grid for precise positioning

### Performance Optimization
- Efficient rendering for large workflows
- Smooth animations and transitions
- Optimized drag-and-drop performance

## 🐛 Troubleshooting

### Common Issues

**Problem**: Components won't drag from sidebar
- **Solution**: Ensure you're clicking and holding on the component, then dragging to the canvas

**Problem**: Properties panel not showing
- **Solution**: Click directly on a node to select it; the panel appears automatically

**Problem**: Canvas feels sluggish
- **Solution**: Try reducing zoom level or refreshing the browser

**Problem**: Theme not switching
- **Solution**: Check browser compatibility; try refreshing the page

### Browser Compatibility

Smart Bus works best with:
- ✅ **Chrome** (recommended)
- ✅ **Safari** (MacOS native)
- ✅ **Firefox**
- ✅ **Edge**

### Performance Tips

- Keep workflows under 50 nodes for optimal performance
- Use zoom controls to focus on specific areas
- Regularly save your work (auto-save coming soon)

## 🤝 Contributing

We welcome contributions to Smart Bus! Here's how you can help:

### Development Setup

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Test thoroughly**
5. **Submit a pull request**

### Code Style

- Use TypeScript for type safety
- Follow React best practices
- Maintain consistent formatting with Prettier
- Write meaningful commit messages

### Areas for Contribution

- 🔗 **Connection System** - Visual lines between nodes
- 💾 **Save/Load Functionality** - Persist workflows
- 📊 **Analytics Dashboard** - Process performance metrics
- 🎨 **Custom Themes** - User-defined color schemes
- 📱 **Mobile Support** - Responsive design improvements

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React DnD** - For excellent drag-and-drop functionality
- **Lucide React** - For beautiful, consistent icons
- **Tailwind CSS** - For rapid, responsive styling
- **Vite** - For lightning-fast development experience

## 📞 Support

Need help? Here are your options:

- 📧 **Email**: support@smartbus.app
- 💬 **Discord**: [Join our community](https://discord.gg/smartbus)
- 📖 **Documentation**: [Full docs](https://docs.smartbus.app)
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/your-username/smart-bus/issues)

---

<div align="center">
  <p><strong>Built with ❤️ for the business process automation community</strong></p>
  <p>© 2025 Smart Bus. All rights reserved.</p>
</div>