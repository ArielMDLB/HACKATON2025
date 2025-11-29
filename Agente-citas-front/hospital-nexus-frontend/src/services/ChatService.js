import axios from 'axios';

const API_URL = 'http://localhost:7071/api';


export const sendMessageToAI = async (message, user, threadId = null) => {
  try {
    const response = await fetch(`${API_URL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: user?.id || 'user-demo-001',
        userName: user?.name || 'Usuario',
        message: message,
        threadId: threadId 
      })
    });

    if (!response.ok) {
      throw new Error('Error en la respuesta del servidor');
    }

    const data = await response.json();
    
    return {
      message: data.response,
      threadId: data.threadId, 
      status: data.status
    };
  } catch (error) {
    console.error('Error en sendMessageToAI:', error);
    throw error;
  }
};
/**
 * Obtiene el historial de chat (opcional)
 * @param {string} userId - ID del usuario
 * @returns {Promise} - Historial de mensajes
 */
export const getChatHistory = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/chat/history/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener historial:', error);
    throw error;
  }
};