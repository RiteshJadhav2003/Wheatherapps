export const useChatStream = () => {
  const sendMessage = async (message, setMessages, setLoading) => {
    setLoading(true);
    const userMsg = { role: 'user', content: message };
    setMessages(prev => [...prev, userMsg]);

    const body = {
      messages: [userMsg],
      runId: "weatherAgent",
      maxRetries: 2,
      maxSteps: 5,
      temperature: 0.5,
      topP: 1,
      runtimeContext: {},
      resourceId: "weatherAgent"
    };

    try {
      const response = await fetch('https://millions-screeching-vultur.mastra.cloud/api/agents/weatherAgent/stream', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-mastra-dev-playground': 'true'
        },
        body: JSON.stringify(body)
      });

      if (!response.ok) throw new Error('API error');

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let fullMessage = "";
      setMessages(prev => [...prev, { role: 'agent', content: '' }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });

      
        const lines = chunk.split('\n');
        for (let line of lines) {
          line = line.trim();

          const match = line.match(/^0:\s?"(.*)"$/); // e.g. 0: "The"
          if (match) {
            const content = match[1];
            fullMessage += content;

            setMessages(prev => {
              const updated = [...prev];
              updated[updated.length - 1].content = fullMessage;
              return updated;
            });
          }
        }
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'agent', content: '⚠️ Failed to get response' }]);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage };
};
