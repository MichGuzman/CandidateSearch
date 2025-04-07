import { Candidate } from '../types';

interface Props {
  candidate: Candidate;
}

const CandidateCard = ({ candidate }: Props) => {
  return (
    <div
      style={{
        width: '320px',
        backgroundColor: '#111',
        color: '#fff',
        borderRadius: '1rem',
        overflow: 'hidden',
        textAlign: 'center',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
        transition: 'transform 0.3s',
      }}
    >
      <img
        src={candidate.avatar_url}
        alt={candidate.login}
        style={{
          width: '100%',
          height: '280px',
          objectFit: 'cover',
        }}
      />
      <div style={{ padding: '1rem' }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          {candidate.name || 'Sin nombre'}{' '}
          <span style={{ fontWeight: 'normal' }}>({candidate.login})</span>
        </h3>
        <p><strong>Ubicación:</strong> {candidate.location || 'N/A'}</p>
        <p><strong>Email:</strong>{' '}
          <a href={`mailto:${candidate.email}`} style={{ color: '#61dafb' }}>
            {candidate.email || 'N/A'}
          </a>
        </p>
        <p><strong>Empresa:</strong> {candidate.company || 'N/A'}</p>
        <p><strong>Bio:</strong> {candidate.bio || 'N/A'}</p>
        <a
          href={candidate.html_url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#61dafb', display: 'inline-block', marginTop: '0.5rem' }}
        >
          Ver en GitHub
        </a>
      </div>
    </div>
  );
};

export default CandidateCard;
