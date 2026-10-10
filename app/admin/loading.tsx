export default function AdminLoading() {
  return <main className="admin-content" role="status" aria-live="polite">
    <div className="admin-loading-title" />
    <div className="admin-loading-metrics"><div /><div /><div /><div /></div>
    <div className="admin-loading-panel" />
    <span className="admin-sr-only">正在加载页面</span>
  </main>;
}
