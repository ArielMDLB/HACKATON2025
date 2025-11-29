module.exports = async function (context, req) {
  context.log("Solicitud recibida en /chat");

  const corsHeaders = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, Accept",
    "Access-Control-Max-Age": "86400"
  };

  if (req.method === "OPTIONS") {
    context.res = {
      status: 200,
      headers: corsHeaders,
      body: ""
    };
    return;
  }

  try {
    const { userId, userName, message, threadId } = req.body; // ⬅️ Recibir threadId
    const { client, agentId } = await createAIClient();

    const result = await processMessage(
      client, 
      agentId, 
      userId, 
      userName, 
      message, 
      threadId // ⬅️ Pasar threadId
    );

    context.res = {
      status: 200,
      headers: corsHeaders,
      body: {
        status: "success",
        response: result.response,
        threadId: result.threadId, // ⬅️ Devolver threadId
        runId: result.runId
      }
    };
  } catch (error) {
    const errResponse = handleError(error);
    context.res = {
      status: 500,
      headers: corsHeaders,
      body: errResponse
    };
  }
};