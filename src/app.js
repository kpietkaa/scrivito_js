export default function App() {
  return (
    <div>
      <div className="content-wrapper">
        <Scrivito.React.CurrentPage />
        <Scrivito.React.NotFoundErrorPage />
        <Scrivito.React.InternalErrorPage />
      </div>
    </div>
  );
}
