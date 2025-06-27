import React from 'react';
import { useDrag } from 'react-dnd';
import { Bot, User, Workflow, Zap, Database, MessageSquare } from 'lucide-react';
import { DragItem } from '../types';

interface DraggableItemProps {
  item: DragItem;
}

const DraggableItem: React.FC<DraggableItemProps> = ({ item }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'node',
    item,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const IconComponent = {
    Bot,
    User,
    Workflow,
    Zap,
    Database,
    MessageSquare
  }[item.icon as keyof typeof IconComponent] || Bot;

  return (
    <div
      ref={drag}
      className={`flex items-center space-x-3 p-3 rounded-lg cursor-move transition-all duration-200 ${
        isDragging 
          ? 'opacity-50 scale-95' 
          : 'hover:bg-light-accent/10 dark:hover:bg-dark-accent/10'
      } bg-light-secondary dark:bg-dark-secondary border border-light-border dark:border-dark-border`}
    >
      <IconComponent size={20} className="text-light-accent dark:text-dark-accent" />
      <div>
        <h4 className="text-sm font-medium text-light-text dark:text-dark-text font-sf">
          {item.title}
        </h4>
      </div>
    </div>
  );
};

const Sidebar: React.FC = () => {
  const items: DragItem[] = [
    {
      type: 'node',
      nodeType: 'ai-agent',
      title: 'AI Agent',
      icon: 'Bot'
    },
    {
      type: 'node',
      nodeType: 'human',
      title: 'Human Rep',
      icon: 'User'
    },
    {
      type: 'node',
      nodeType: 'process',
      title: 'Process',
      icon: 'Workflow'
    }
  ];

  return (
    <div className="w-64 bg-light-primary dark:bg-dark-primary border-r border-light-border dark:border-dark-border flex flex-col">
      <div className="p-4 border-b border-light-border dark:border-dark-border">
        <h2 className="text-lg font-semibold text-light-text dark:text-dark-text font-sf">
          Components
        </h2>
        <p className="text-sm text-light-accent dark:text-dark-accent mt-1 font-sf">
          Drag to add to canvas
        </p>
      </div>
      
      <div className="flex-1 p-4 space-y-3 overflow-y-auto">
        <div>
          <h3 className="text-sm font-medium text-light-accent dark:text-dark-accent mb-3 font-sf">
            AGENTS & PEOPLE
          </h3>
          <div className="space-y-2">
            {items.slice(0, 2).map((item, index) => (
              <DraggableItem key={index} item={item} />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-light-accent dark:text-dark-accent mb-3 font-sf">
            PROCESSES
          </h3>
          <div className="space-y-2">
            {items.slice(2).map((item, index) => (
              <DraggableItem key={index + 2} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;