import React, { createContext, useContext, useState, useCallback } from 'react';
import { CanvasState, NodeData, Connection, Position } from '../types';

interface CanvasContextType {
  canvasState: CanvasState;
  addNode: (node: Omit<NodeData, 'id'>) => void;
  updateNode: (id: string, updates: Partial<NodeData>) => void;
  deleteNode: (id: string) => void;
  addConnection: (connection: Omit<Connection, 'id'>) => void;
  deleteConnection: (id: string) => void;
  setZoom: (zoom: number) => void;
  setPan: (pan: Position) => void;
  selectedNodeId: string | null;
  setSelectedNodeId: (id: string | null) => void;
}

const CanvasContext = createContext<CanvasContextType | undefined>(undefined);

export const useCanvas = () => {
  const context = useContext(CanvasContext);
  if (!context) {
    throw new Error('useCanvas must be used within a CanvasProvider');
  }
  return context;
};

export const CanvasProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    nodes: [],
    connections: [],
    zoom: 1,
    pan: { x: 0, y: 0 }
  });
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  const addNode = useCallback((node: Omit<NodeData, 'id'>) => {
    const newNode: NodeData = {
      ...node,
      id: `node-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    };
    setCanvasState(prev => ({
      ...prev,
      nodes: [...prev.nodes, newNode]
    }));
  }, []);

  const updateNode = useCallback((id: string, updates: Partial<NodeData>) => {
    setCanvasState(prev => ({
      ...prev,
      nodes: prev.nodes.map(node => 
        node.id === id ? { ...node, ...updates } : node
      )
    }));
  }, []);

  const deleteNode = useCallback((id: string) => {
    setCanvasState(prev => ({
      ...prev,
      nodes: prev.nodes.filter(node => node.id !== id),
      connections: prev.connections.filter(conn => 
        conn.sourceId !== id && conn.targetId !== id
      )
    }));
    if (selectedNodeId === id) {
      setSelectedNodeId(null);
    }
  }, [selectedNodeId]);

  const addConnection = useCallback((connection: Omit<Connection, 'id'>) => {
    const newConnection: Connection = {
      ...connection,
      id: `conn-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    };
    setCanvasState(prev => ({
      ...prev,
      connections: [...prev.connections, newConnection]
    }));
  }, []);

  const deleteConnection = useCallback((id: string) => {
    setCanvasState(prev => ({
      ...prev,
      connections: prev.connections.filter(conn => conn.id !== id)
    }));
  }, []);

  const setZoom = useCallback((zoom: number) => {
    setCanvasState(prev => ({ ...prev, zoom }));
  }, []);

  const setPan = useCallback((pan: Position) => {
    setCanvasState(prev => ({ ...prev, pan }));
  }, []);

  return (
    <CanvasContext.Provider value={{
      canvasState,
      addNode,
      updateNode,
      deleteNode,
      addConnection,
      deleteConnection,
      setZoom,
      setPan,
      selectedNodeId,
      setSelectedNodeId
    }}>
      {children}
    </CanvasContext.Provider>
  );
};