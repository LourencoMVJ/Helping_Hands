// Dev-only visual feedback toolbar (Agentation). Only runs on localhost;
// no-op on the live site, and never sends data anywhere but the local MCP server.
const isLocal = ['localhost', '127.0.0.1'].includes(location.hostname);

if (isLocal) {
  const REACT_VERSION = '18.3.1';

  Promise.all([
    import(`https://esm.sh/react@${REACT_VERSION}`),
    import(`https://esm.sh/react-dom@${REACT_VERSION}/client`),
    import(`https://esm.sh/agentation@3.0.2?deps=react@${REACT_VERSION},react-dom@${REACT_VERSION}`),
  ]).then(([{ default: React }, { createRoot }, { Agentation }]) => {
    const mount = document.createElement('div');
    mount.id = 'agentation-mount';
    document.body.appendChild(mount);

    createRoot(mount).render(
      React.createElement(Agentation, {
        endpoint: 'http://localhost:4747',
        onSessionCreated: (sessionId) => console.log('Agentation session:', sessionId),
      })
    );
  }).catch((err) => console.warn('Agentation failed to load:', err));
}
