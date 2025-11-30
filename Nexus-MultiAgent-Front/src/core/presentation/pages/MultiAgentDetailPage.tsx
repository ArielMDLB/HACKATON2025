import { useMultiAgentDetail } from '../hooks/useMultiAgentDetail';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import { ErrorMessage } from '../components/common/ErrorMessage';
import { MultiAgentDetailHeader } from '../components/features/multiagent/MultiAgentDetailHeader';
import { MultiAgentDescription } from '../components/features/multiagent/MultiAgentDescription';
import { CapabilitiesList } from '../components/features/multiagent/CapabilitiesList';
import { DomainsList } from '../components/features/multiagent/DomainsList';
import { PerformanceMetrics } from '../components/features/multiagent/PerformanceMetrics';
import { DemoSection } from '../components/features/multiagent/DemoSection';
import { useEffect } from 'react';

export const MultiAgentDetailPage = () => {
  const { multiAgent, isLoading, error, refetch } = useMultiAgentDetail();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-dark">
        <LoadingSpinner size="lg" />
        <p className="mt-4 text-secondary text-lg">Cargando información del sistema...</p>
      </div>
    );
  }

  if (error || !multiAgent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark p-6">
        <div className="max-w-lg w-full">
          <ErrorMessage 
            message={error || 'No se pudo cargar el multiagente'}
            onRetry={refetch}
          />
        </div>
      </div>
    );
  }

  // URL del logo - aquí puedes poner tu propia imagen
  const logoUrl = ''; // COLOCA AQUÍ TU URL DE IMAGEN

  const title = multiAgent.title || multiAgent.name;

  return (
    <div className="min-h-screen">
      <MultiAgentDetailHeader
        title={title}
        logo={logoUrl}
        shortDescription={multiAgent.shortDescription}
      />

      <MultiAgentDescription
        description={multiAgent.shortDescription}
        fullDescription={multiAgent.fullDescription}
      />

      {multiAgent.capabilities && multiAgent.capabilities.length > 0 && (
        <CapabilitiesList capabilities={multiAgent.capabilities} />
      )}

      {multiAgent.domains && multiAgent.domains.length > 0 && (
        <DomainsList domains={multiAgent.domains} />
      )}

      <PerformanceMetrics
        performanceMetrics={multiAgent.performanceMetrics}
        responsibleAI={multiAgent.responsibleAI}
      />

      <DemoSection
        demoUrl={multiAgent.demoUrl}
        demoAccount={multiAgent.demoAccount}
        title={title}
      />
    </div>
  );
};