interface ImportMetaEnv {
  readonly VITE_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

export const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://mock-api.local';

export const endpoints = {
  company: `${API_BASE_URL}/company/info`,
};
// Solución definitiva: declarar el tipo global para ImportMetaEnv
declare global {
  interface ImportMetaEnv {
    readonly VITE_API_URL?: string;
  }
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

export const config = {
  LOGTO_ENDPOINT: import.meta.env.VITE_LOGTO_ENDPOINT || '',
  LOGTO_APP_ID: import.meta.env.VITE_LOGTO_APP_ID || '',
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || '',
  logto: {
    endpoint: import.meta.env.VITE_LOGTO_ENDPOINT || '',
    appId: import.meta.env.VITE_LOGTO_APP_ID || ''
  }
};

export {};