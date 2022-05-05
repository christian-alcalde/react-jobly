function Alert({ error }) {
  return (
    <div className="alert alert-danger" role="alert">
      {error.map(e => <p>{e}</p>)}
    </div>
  );
}

export default Alert;
