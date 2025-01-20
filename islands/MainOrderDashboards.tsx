import { useState } from "preact/hooks";
import HistoryCard from "../components/HistoryCard.tsx";

export default function MainOrderDashboards() {
  const [histories, setHistories] = useState<{ name: string; description: string }[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", description: "" });

  const handleFormChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setFormData({ ...formData, [target.name]: target.value });
  };

  const addHistory = () => setShowForm(true);

  const saveHistory = (e: Event) => {
    e.preventDefault();
    setHistories([...histories, formData]);
    {console.log(setHistories)}
    setFormData({ name: "", description: "" });
    setShowForm(false);
  };
  
  const cancelForm = () => setShowForm(false);

  const deleteHistories = () => setHistories([]);

  return (
    <div className="Utilities-Dashboard">
      <div className="Utilities-Dashboard-buttons">
        <button onClick={addHistory}>Add New History</button>
        <button onClick={deleteHistories}>Delete All Histories</button>
      </div>
      <div className="Dashboards-User-Stats">
        <h3>User Stats</h3>
        <p>Total Stories: {histories.length}</p>
      </div>
      <div className="Dashboard-Container">
        {histories.map((history, index) => (
          <HistoryCard key={index} name={history.name} description={history.description}>
            
          </HistoryCard>
          
        ))}
        {showForm && (
          <form className="New-History-Form" onSubmit={saveHistory}>
            <input
              type="text"
              name="name"
              placeholder="Enter New History Name"
              value={formData.name}
              onInput={handleFormChange}
            />
            
            <input
              type="text"
              name="description"
              placeholder="Enter New History Description"
              value={formData.description}
              onInput={handleFormChange}
            />
            <button type="submit">Save</button>
            <button type="button" onClick={cancelForm}>
              Cancel
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
