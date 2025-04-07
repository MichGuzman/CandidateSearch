import { useEffect, useState } from 'react';
import { Candidate } from '../types';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('candidates');
    if (stored) {
      setSavedCandidates(JSON.parse(stored));
    }
  }, []);

  const removeCandidate = (login: string) => {
    const updated = savedCandidates.filter((c) => c.login !== login);
    setSavedCandidates(updated);
    localStorage.setItem('candidates', JSON.stringify(updated));
  };

  if (savedCandidates.length === 0) {
    return (
      <p style={{ color: 'white', textAlign: 'center', marginTop: '2rem' }}>
        There are no saved candidates yet.
      </p>
    );
  }

  return (
    <div style={{ padding: '2rem', color: 'white' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Potential Candidates
      </h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
            <th>Bio</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody>
          {savedCandidates.map((candidate) => (
            <tr key={candidate.login}>
              <td>
                <img
                  src={candidate.avatar_url}
                  alt={candidate.login}
                  width="60"
                  height="60"
                  style={{ borderRadius: '50%' }}
                />
              </td>
              <td>
                <strong>{candidate.name || 'N/A'}</strong>
                <br />
                <em>({candidate.login})</em>
              </td>
              <td>{candidate.location || 'N/A'}</td>
              <td>
                <a href={`mailto:${candidate.email}`} style={{ color: '#4da6ff' }}>
                  {candidate.email || 'N/A'}
                </a>
              </td>
              <td>{candidate.company || 'N/A'}</td>
              <td>{candidate.bio || 'N/A'}</td>
              <td>
                <button
                  onClick={() => removeCandidate(candidate.login)}
                  style={{
                    backgroundColor: 'red',
                    color: 'white',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    fontSize: '1.5rem',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  −
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SavedCandidates;
