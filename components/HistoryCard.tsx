export default function HistoryCard({ name, description }: { name: string; description: string }) {
    return (
      <div className="History-Card">
        <h4>{name}</h4>
        <p>{description}</p>
        <button style={'left=90%'}>Delete</button>
      </div>
    );
  }
  