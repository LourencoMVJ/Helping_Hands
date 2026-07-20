const isLocalDev = location.hostname === "localhost" || location.hostname === "127.0.0.1";

if (isLocalDev) {
  const [{ default: React }, { createRoot }, { Retune }] = await Promise.all([
    import("react"),
    import("react-dom/client"),
    import("retune"),
  ]);

  const mount = document.createElement("div");
  mount.id = "retune-root";
  document.body.appendChild(mount);

  // bottom-left keeps Retune's toggle clear of Agentation's, which sits bottom-right.
  createRoot(mount).render(React.createElement(Retune, { force: true, position: "bottom-left" }));
}
