import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ThemeProvider } from './contexts/ThemeContext';
import { CanvasProvider } from './contexts/CanvasContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import PropertiesPanel from './components/PropertiesPanel';

function App() {
  return (
    <ThemeProvider>
      <CanvasProvider>
        <DndProvider backend={HTML5Backend}>
          <div className="h-screen flex flex-col bg-light-primary dark:bg-dark-primary">
            <Header />
            <div className="flex-1 flex overflow-hidden">
              <Sidebar />
              <Canvas />
              <PropertiesPanel />
            </div>
          </div>
        </DndProvider>
      </CanvasProvider>
    </ThemeProvider>
  );
}

export default App;