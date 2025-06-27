import React, { useState, useRef } from 'react';
import { Bot, User, Workflow, Settings, Trash2 } from 'lucide-react';
import { NodeData, Position } from '../types';
import { useCanvas } from '../contexts/CanvasContext';

interface CanvasNodeProps {
  node: NodeData;
}

const CanvasNode: React.FC<CanvasNodeProps> = ({ node }) => {
  const { updateNode, deleteNode, selectedNodeId, setSelectedNodeId } = useCanvas();
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<Position>({ x: 0, y: 0 });
  const nodeRef = useRef<HTMLDivElement>(null);

  const isSelected = selectedNodeId === node.id;

  const getIcon = () => {
    switch (node.type) {
      case 'ai-agent':
        return <Bot size={20} className="text-blue-500" />;
      case 'human':
        return <User size={20} className="text-green-500" />;
      case 'process':
        return <Workflow size={20} className="text-purple-500" />;
      default:
        return <Bot size={20} className="text-gray-500" />;
    }
  };

  const getNodeColor = () => {
    switch (node.type) {
      case 'ai-agent':
        return 'border-blue-500 bg-blue-50 dark:bg-blue-900/20';
      case 'human':
        return 'border-green-500 bg-green-50 dark:bg-green-900/20';
      case 'process':
        return 'border-purple-500 bg-purple-50 dark:bg-purple-900/20';
      default:
        return 'border-gray-500 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDragging(true);
    setDragStart({
      x: e.clientX - node.position.x,
      y: e.clientY - node.position.y
    });
    setSelectedNodeId(node.id);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      const newPosition = {
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      };
      updateNode(node.id, { position: newPosition });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    deleteNode(node.id);
  };

  const handleSettings = (e: React.MouseEvent) => {
    e.stopPropagation();
    // TODO: Open properties panel
  };

  return (
    <div
      ref={nodeRef}
      className={`absolute select-none cursor-move transition-all duration-200 ${
        isDragging ? 'scale-105 shadow-xl' : 'hover:shadow-lg'
      } ${isSelected ? 'ring-2 ring-blue-400' : ''}`}
      style={{
        left: node.position.x,
        top: node.position.y,
        transform: isDragging ? 'rotate(2deg)' : 'rotate(0deg)'
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className={`
        w-48 p-4 rounded-xl border-2 backdrop-blur-sm
        bg-light-primary/90 dark:bg-dark-primary/90
        ${getNodeColor()}
        ${isSelected ? 'shadow-lg' : 'shadow-md'}
      `}>
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center space-x-2">
            {getIcon()}
            <h3 className="font-semibold text-sm text-light-text dark:text-dark-text font-sf">
              {node.title}
            </h3>
          </div>
          
          {isSelected && (
            <div className="flex space-x-1">
              <button
                onClick={handleSettings}
                className="p-1 rounded hover:bg-light-accent/20 dark:hover:bg-dark-accent/20 transition-colors"
                aria-label="Settings"
              >
                <Settings size={14} className="text-light-accent dark:text-dark-accent" />
              </button>
              <button
                onClick={handleDelete}
                className="p-1 rounded hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors"
                aria-label="Delete"
              >
                <Trash2 size={14} className="text-red-500" />
              </button>
            </div>
          )}
        </div>
        
        <div className="text-xs text-light-accent dark:text-dark-accent font-sf">
          {node.type === 'ai-agent' && 'Automated processing'}
          {node.type === 'human' && 'Manual intervention'}
          {node.type === 'process' && 'Business logic'}
        </div>

        {/* Connection Points */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-light-primary dark:bg-dark-primary border-2 border-light-border dark:border-dark-border rounded-full"></div>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-light-primary dark:bg-dark-primary border-2 border-light-border dark:border-dark-border rounded-full"></div>
        <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-light-primary dark:bg-dark-primary border-2 border-light-border dark:border-dark-border rounded-full"></div>
        <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-light-primary dark:bg-dark-primary border-2 border-light-border dark:border-dark-border rounded-full"></div>
      </div>
    </div>
  );
};

export default CanvasNode;