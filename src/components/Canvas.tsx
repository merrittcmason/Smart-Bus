import React, { useRef, useState, useCallback } from 'react';
import { useDrop } from 'react-dnd';
import { ZoomIn, ZoomOut, Maximize } from 'lucide-react';
import { useCanvas } from '../contexts/CanvasContext';
import { DragItem, Position } from '../types';
import CanvasNode from './CanvasNode';

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const { canvasState, addNode, setZoom, setPan } = useCanvas();
  const [isPanning, setIsPanning] = useState(false);
  const [lastPanPoint, setLastPanPoint] = useState<Position>({ x: 0, y: 0 });

  const [, drop] = useDrop(() => ({
    accept: 'node',
    drop: (item: DragItem, monitor) => {
      const offset = monitor.getClientOffset();
      if (offset && canvasRef.current) {
        const canvasRect = canvasRef.current.getBoundingClientRect();
        const x = (offset.x - canvasRect.left - canvasState.pan.x) / canvasState.zoom;
        const y = (offset.y - canvasRect.top - canvasState.pan.y) / canvasState.zoom;
        
        addNode({
          type: item.nodeType,
          title: item.title,
          position: { x, y },
          properties: {}
        });
      }
    },
  }));

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (e.button === 0 && e.target === canvasRef.current) {
      setIsPanning(true);
      setLastPanPoint({ x: e.clientX, y: e.clientY });
    }
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isPanning) {
      const deltaX = e.clientX - lastPanPoint.x;
      const deltaY = e.clientY - lastPanPoint.y;
      
      setPan({
        x: canvasState.pan.x + deltaX,
        y: canvasState.pan.y + deltaY
      });
      
      setLastPanPoint({ x: e.clientX, y: e.clientY });
    }
  }, [isPanning, lastPanPoint, canvasState.pan, setPan]);

  const handleMouseUp = useCallback(() => {
    setIsPanning(false);
  }, []);

  const handleZoom = useCallback((delta: number) => {
    const newZoom = Math.max(0.25, Math.min(2, canvasState.zoom + delta));
    setZoom(newZoom);
  }, [canvasState.zoom, setZoom]);

  const resetView = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, [setZoom, setPan]);

  return (
    <div className="flex-1 relative overflow-hidden bg-light-secondary dark:bg-dark-secondary">
      <div
        ref={(node) => {
          canvasRef.current = node;
          drop(node);
        }}
        className="w-full h-full relative cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{
          backgroundImage: `
            radial-gradient(circle, ${
              document.documentElement.classList.contains('dark') 
                ? '#333333' 
                : '#E5E5E5'
            } 1px, transparent 1px)
          `,
          backgroundSize: `${20 * canvasState.zoom}px ${20 * canvasState.zoom}px`,
          backgroundPosition: `${canvasState.pan.x}px ${canvasState.pan.y}px`
        }}
      >
        <div
          style={{
            transform: `translate(${canvasState.pan.x}px, ${canvasState.pan.y}px) scale(${canvasState.zoom})`,
            transformOrigin: '0 0'
          }}
        >
          {canvasState.nodes.map((node) => (
            <CanvasNode key={node.id} node={node} />
          ))}
        </div>
      </div>

      {/* Zoom Controls */}
      <div className="absolute bottom-6 right-6 flex flex-col space-y-2">
        <button
          onClick={() => handleZoom(0.25)}
          className="p-2 bg-light-primary dark:bg-dark-primary border border-light-border dark:border-dark-border rounded-lg hover:bg-light-secondary dark:hover:bg-dark-secondary transition-colors shadow-lg"
          aria-label="Zoom in"
        >
          <ZoomIn size={18} className="text-light-text dark:text-dark-text" />
        </button>
        <button
          onClick={() => handleZoom(-0.25)}
          className="p-2 bg-light-primary dark:bg-dark-primary border border-light-border dark:border-dark-border rounded-lg hover:bg-light-secondary dark:hover:bg-dark-secondary transition-colors shadow-lg"
          aria-label="Zoom out"
        >
          <ZoomOut size={18} className="text-light-text dark:text-dark-text" />
        </button>
        <button
          onClick={resetView}
          className="p-2 bg-light-primary dark:bg-dark-primary border border-light-border dark:border-dark-border rounded-lg hover:bg-light-secondary dark:hover:bg-dark-secondary transition-colors shadow-lg"
          aria-label="Reset view"
        >
          <Maximize size={18} className="text-light-text dark:text-dark-text" />
        </button>
      </div>

      {/* Zoom Level Indicator */}
      <div className="absolute bottom-6 left-6 px-3 py-1 bg-light-primary dark:bg-dark-primary border border-light-border dark:border-dark-border rounded-lg shadow-lg">
        <span className="text-sm text-light-text dark:text-dark-text font-sf">
          {Math.round(canvasState.zoom * 100)}%
        </span>
      </div>
    </div>
  );
};

export default Canvas;