export interface Position {
  x: number;
  y: number;
}

export interface NodeData {
  id: string;
  type: 'ai-agent' | 'human' | 'process';
  title: string;
  description?: string;
  position: Position;
  properties: Record<string, any>;
}

export interface Connection {
  id: string;
  sourceId: string;
  targetId: string;
  type: 'workflow' | 'hierarchy' | 'data';
  properties: Record<string, any>;
}

export interface CanvasState {
  nodes: NodeData[];
  connections: Connection[];
  zoom: number;
  pan: Position;
}

export interface DragItem {
  type: string;
  nodeType: 'ai-agent' | 'human' | 'process';
  title: string;
  icon: string;
}