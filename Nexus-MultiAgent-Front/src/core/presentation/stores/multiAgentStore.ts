import { create } from 'zustand';
import { MultiAgent } from '../../domain/entities/MultiAgent.entity';

interface MultiAgentState {
  multiAgents: MultiAgent[];
  selectedMultiAgent: MultiAgent | null;
  selectedMultiAgentId: string | number | null; // CAMBIO: ahora acepta string o number
  isLoading: boolean;
  error: string | null;
  
  setMultiAgents: (multiAgents: MultiAgent[]) => void;
  setSelectedMultiAgent: (multiAgent: MultiAgent | null) => void;
  setSelectedMultiAgentId: (id: string | number | null) => void; // CAMBIO: ahora acepta string o number
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  clearError: () => void;
  reset: () => void;
}

const initialState = {
  multiAgents: [],
  selectedMultiAgent: null,
  selectedMultiAgentId: null,
  isLoading: false,
  error: null
};

export const useMultiAgentStore = create<MultiAgentState>((set) => ({
  ...initialState,

  setMultiAgents: (multiAgents) => {
    console.log('[Store] setMultiAgents:', multiAgents.length, 'agentes');
    set({ multiAgents });
  },

  setSelectedMultiAgent: (multiAgent) => {
    console.log('[Store] setSelectedMultiAgent:', multiAgent?.id, multiAgent?.title);
    set({ selectedMultiAgent: multiAgent });
  },

  setSelectedMultiAgentId: (id) => {
    console.log('[Store] setSelectedMultiAgentId:', id, 'tipo:', typeof id);
    set({ selectedMultiAgentId: id });
  },

  setLoading: (isLoading) => {
    console.log('[Store] setLoading:', isLoading);
    set({ isLoading });
  },

  setError: (error) => {
    console.log('[Store] setError:', error);
    set({ error });
  },

  clearError: () => {
    console.log('[Store] clearError');
    set({ error: null });
  },

  reset: () => {
    console.log('[Store] reset');
    set(initialState);
  }
}));