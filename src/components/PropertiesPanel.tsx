import React from 'react';
import { X, Settings } from 'lucide-react';
import { useCanvas } from '../contexts/CanvasContext';

const PropertiesPanel: React.FC = () => {
  const { canvasState, selectedNodeId, setSelectedNodeId, updateNode } = useCanvas();
  
  const selectedNode = canvasState.nodes.find(node => node.id === selectedNodeId);

  if (!selectedNode) {
    return (
      <div className="w-80 bg-light-primary dark:bg-dark-primary border-l border-light-border dark:border-dark-border flex items-center justify-center">
        <div className="text-center p-6">
          <Settings size={48} className="text-light-accent dark:text-dark-accent mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-light-text dark:text-dark-text font-sf mb-2">
            No Selection
          </h3>
          <p className="text-sm text-light-accent dark:text-dark-accent font-sf">
            Select a node to view and edit its properties
          </p>
        </div>
      </div>
    );
  }

  const handleTitleChange = (newTitle: string) => {
    updateNode(selectedNode.id, { title: newTitle });
  };

  const handleDescriptionChange = (newDescription: string) => {
    updateNode(selectedNode.id, { description: newDescription });
  };

  return (
    <div className="w-80 bg-light-primary dark:bg-dark-primary border-l border-light-border dark:border-dark-border flex flex-col">
      <div className="p-4 border-b border-light-border dark:border-dark-border flex items-center justify-between">
        <h2 className="text-lg font-semibold text-light-text dark:text-dark-text font-sf">
          Properties
        </h2>
        <button
          onClick={() => setSelectedNodeId(null)}
          className="p-1 rounded hover:bg-light-accent/20 dark:hover:bg-dark-accent/20 transition-colors"
          aria-label="Close properties"
        >
          <X size={18} className="text-light-accent dark:text-dark-accent" />
        </button>
      </div>

      <div className="flex-1 p-4 space-y-6 overflow-y-auto">
        <div>
          <h3 className="text-sm font-medium text-light-text dark:text-dark-text font-sf mb-3">
            Basic Information
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-light-accent dark:text-dark-accent mb-2 font-sf">
                TITLE
              </label>
              <input
                type="text"
                value={selectedNode.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                className="w-full px-3 py-2 bg-light-secondary dark:bg-dark-secondary border border-light-border dark:border-dark-border rounded-lg text-light-text dark:text-dark-text text-sm font-sf focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-light-accent dark:text-dark-accent mb-2 font-sf">
                DESCRIPTION
              </label>
              <textarea
                value={selectedNode.description || ''}
                onChange={(e) => handleDescriptionChange(e.target.value)}
                rows={3}
                className="w-full px-3 py-2 bg-light-secondary dark:bg-dark-secondary border border-light-border dark:border-dark-border rounded-lg text-light-text dark:text-dark-text text-sm font-sf focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Add a description..."
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-light-accent dark:text-dark-accent mb-2 font-sf">
                TYPE
              </label>
              <div className="px-3 py-2 bg-light-secondary dark:bg-dark-secondary border border-light-border dark:border-dark-border rounded-lg text-light-text dark:text-dark-text text-sm font-sf">
                {selectedNode.type.replace('-', ' ').toUpperCase()}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-light-text dark:text-dark-text font-sf mb-3">
            Position
          </h3>
          
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-light-accent dark:text-dark-accent mb-2 font-sf">
                X
              </label>
              <input
                type="number"
                value={Math.round(selectedNode.position.x)}
                onChange={(e) => updateNode(selectedNode.id, { 
                  position: { ...selectedNode.position, x: parseInt(e.target.value) || 0 }
                })}
                className="w-full px-3 py-2 bg-light-secondary dark:bg-dark-secondary border border-light-border dark:border-dark-border rounded-lg text-light-text dark:text-dark-text text-sm font-sf focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-light-accent dark:text-dark-accent mb-2 font-sf">
                Y
              </label>
              <input
                type="number"
                value={Math.round(selectedNode.position.y)}
                onChange={(e) => updateNode(selectedNode.id, { 
                  position: { ...selectedNode.position, y: parseInt(e.target.value) || 0 }
                })}
                className="w-full px-3 py-2 bg-light-secondary dark:bg-dark-secondary border border-light-border dark:border-dark-border rounded-lg text-light-text dark:text-dark-text text-sm font-sf focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {selectedNode.type === 'ai-agent' && (
          <div>
            <h3 className="text-sm font-medium text-light-text dark:text-dark-text font-sf mb-3">
              AI Configuration
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-light-accent dark:text-dark-accent mb-2 font-sf">
                  MODEL
                </label>
                <select className="w-full px-3 py-2 bg-light-secondary dark:bg-dark-secondary border border-light-border dark:border-dark-border rounded-lg text-light-text dark:text-dark-text text-sm font-sf focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>GPT-4</option>
                  <option>Claude</option>
                  <option>Custom</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-light-accent dark:text-dark-accent mb-2 font-sf">
                  TEMPERATURE
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  defaultValue="0.7"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        )}

        {selectedNode.type === 'human' && (
          <div>
            <h3 className="text-sm font-medium text-light-text dark:text-dark-text font-sf mb-3">
              Human Configuration
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-light-accent dark:text-dark-accent mb-2 font-sf">
                  ROLE
                </label>
                <input
                  type="text"
                  placeholder="e.g., Manager, Analyst, Customer Service"
                  className="w-full px-3 py-2 bg-light-secondary dark:bg-dark-secondary border border-light-border dark:border-dark-border rounded-lg text-light-text dark:text-dark-text text-sm font-sf focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-light-accent dark:text-dark-accent mb-2 font-sf">
                  SKILLS
                </label>
                <textarea
                  rows={2}
                  placeholder="List relevant skills and expertise"
                  className="w-full px-3 py-2 bg-light-secondary dark:bg-dark-secondary border border-light-border dark:border-dark-border rounded-lg text-light-text dark:text-dark-text text-sm font-sf focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertiesPanel;