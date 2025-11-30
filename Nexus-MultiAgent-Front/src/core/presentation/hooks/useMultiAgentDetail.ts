import { useEffect, useState } from 'react';
import { MultiAgent } from '../../domain/entities/MultiAgent.entity';
import { MultiAgentRepository } from '../../infrastructure/repositories/MultiAgentRepository';
import { useMultiAgentStore } from '../stores/multiAgentStore';
import { getMockMultiAgentById } from '../../infrastructure/repositories/multiAgentDetailMocks';

const multiAgentRepository = new MultiAgentRepository();

export const useMultiAgentDetail = () => {
  const { 
    selectedMultiAgentId, 
    setSelectedMultiAgentId, 
    selectedMultiAgent, 
    setSelectedMultiAgent, 
    setLoading, 
    setError 
  } = useMultiAgentStore();
  
  const [multiAgent, setMultiAgent] = useState<MultiAgent | null>(null);
  const [isLoading, setIsLoadingState] = useState(false);
  const [error, setErrorState] = useState<string | null>(null);

  console.log('[useMultiAgentDetail] ID global seleccionado:', selectedMultiAgentId);

  useEffect(() => {
    const fetchMultiAgent = async () => {
      console.log('[useMultiAgentDetail] Iniciando fetch con id global:', selectedMultiAgentId);
      
      if (!selectedMultiAgentId) {
        console.error('[useMultiAgentDetail] ID global no proporcionado');
        setErrorState('ID de multiagente no proporcionado');
        return;
      }

      setIsLoadingState(true);
      setLoading(true);
      setErrorState(null);
      setError(null);

      try {
        const isDemoMode =
          (import.meta.env as any).MODE === 'development' ||
          (import.meta.env as any).VITE_USE_LOCAL_MOCKS === 'true';
        
        console.log('[useMultiAgentDetail] isDemoMode:', isDemoMode);
        console.log('[useMultiAgentDetail] Tipo de selectedMultiAgentId:', typeof selectedMultiAgentId, selectedMultiAgentId);

        // Intentar obtener el mock local
        const localAgent = getMockMultiAgentById(selectedMultiAgentId);
        console.log('[useMultiAgentDetail] Mock local encontrado:', localAgent);

        if (localAgent) {
          // Si encontramos el mock, lo usamos directamente
          console.log('[useMultiAgentDetail] Usando mock local con id:', localAgent.id);
          setMultiAgent(localAgent);
          setSelectedMultiAgent(localAgent);
        } else if (!isDemoMode) {
          // Solo intentamos el backend si NO estamos en modo demo y NO encontramos el mock
          try {
            const fetchedMultiAgent = await multiAgentRepository.getById(String(selectedMultiAgentId));
            console.log('[useMultiAgentDetail] fetchedMultiAgent del backend:', fetchedMultiAgent);
            
            setMultiAgent(fetchedMultiAgent);
            setSelectedMultiAgent(fetchedMultiAgent);
          } catch (backendError) {
            console.error('[useMultiAgentDetail] Error del backend:', backendError);
            throw new Error('Multiagente no encontrado en backend ni en mocks locales');
          }
        } else {
          // En modo demo pero no encontramos el mock
          throw new Error(`Multiagente con ID ${selectedMultiAgentId} no encontrado en mocks locales`);
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Error al cargar el multiagente';
        console.error('[useMultiAgentDetail] Error:', errorMessage);
        setErrorState(errorMessage);
        setError(errorMessage);
      } finally {
        console.log('[useMultiAgentDetail] Finalizando fetch');
        setIsLoadingState(false);
        setLoading(false);
      }
    };

    fetchMultiAgent();
  }, [selectedMultiAgentId, setSelectedMultiAgent, setLoading, setError]);

  const refetch = () => {
    if (selectedMultiAgentId) {
      setIsLoadingState(false);
      setErrorState(null);
      // Forzar re-renderizado
      setSelectedMultiAgentId(selectedMultiAgentId);
    }
  };

  return {
    multiAgent: multiAgent || selectedMultiAgent,
    isLoading,
    error,
    refetch,
  };
};