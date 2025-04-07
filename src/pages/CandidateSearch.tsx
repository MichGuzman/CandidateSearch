import { useEffect, useState } from 'react';
import { Candidate } from '../types';
import { searchGithub, searchGithubUser } from '../api/API';
import CandidateCard from '../components/CandidateCard';

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCandidate = async () => {
    setLoading(true);
    setError(null);

    try {
      const users = await searchGithub();
      if (!users.length) throw new Error("No users found");

      const randomUser = users[0];
      const detailed = await searchGithubUser(randomUser.login);
      setCandidate(detailed);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCandidate();
  }, []);

  const saveCandidate = () => {
    if (!candidate) return;
    const stored = JSON.parse(localStorage.getItem('candidates') || '[]');
    localStorage.setItem('candidates', JSON.stringify([...stored, candidate]));
    fetchCandidate();
  };

  const rejectCandidate = () => {
    fetchCandidate();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem' }}>
      <h1 style={{ color: '#fff', marginBottom: '2rem' }}>Candidate Search</h1>

      {loading && <p style={{ color: '#fff' }}>Loading candidate...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && candidate && (
        <>
          <CandidateCard candidate={candidate} />
          <div className="button-group">
            <button
              onClick={rejectCandidate}
              style={{ backgroundColor: 'red', color: 'white' }}
            >
              −
            </button>
            <button
              onClick={saveCandidate}
              style={{ backgroundColor: 'green', color: 'white' }}
            >
              +
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CandidateSearch;
