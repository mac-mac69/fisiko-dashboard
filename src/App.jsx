import React, { useState } from 'react';

function App() {
  const [nome, setNome] = useState('');
  const [corso, setCorso] = useState('');
  const [importo, setImporto] = useState('');
  const [ricevute, setRicevute] = useState([]);

  const aggiungiRicevuta = () => {
    if (!nome || !corso || !importo) return;
    const nuova = { nome, corso, importo, data: new Date().toLocaleDateString() };
    setRicevute([nuova, ...ricevute]);
    setNome('');
    setCorso('');
    setImporto('');
  };

  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', color: '#007BFF' }}>FiSiKo – Dashboard Ricevute</h1>

      <div style={{ marginBottom: '2rem' }}>
        <input placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
        <input placeholder="Corso" value={corso} onChange={e => setCorso(e.target.value)} />
        <input placeholder="Importo" type="number" value={importo} onChange={e => setImporto(e.target.value)} />
        <button onClick={aggiungiRicevuta}>Aggiungi</button>
      </div>

      <h3>Riepilogo Ricevute:</h3>
      <table border="1" cellPadding="5">
        <thead>
          <tr><th>Nome</th><th>Corso</th><th>Importo</th><th>Data</th></tr>
        </thead>
        <tbody>
          {ricevute.map((r, i) => (
            <tr key={i}>
              <td>{r.nome}</td>
              <td>{r.corso}</td>
              <td>{r.importo} €</td>
              <td>{r.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;