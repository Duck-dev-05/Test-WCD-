import React, { useState } from 'react';
import './PlayerInfo.css';

const PlayerInfo = () => {
  const [players, setPlayers] = useState([]);
  const [formData, setFormData] = useState({
    playerName: '',
    playerAge: '',
    indexName: '',
    value: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlayer = {
      id: players.length + 1,
      playerName: formData.playerName,
      playerAge: formData.playerAge,
      indexName: formData.indexName,
      value: formData.value
    };
    setPlayers([...players, newPlayer]);
    setFormData({
      playerName: '',
      playerAge: '',
      indexName: '',
      value: ''
    });
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this player?')) {
      setPlayers(players.filter(player => player.id !== id));
    }
  };

  const handleEdit = (id) => {
    const playerToEdit = players.find(player => player.id === id);
    setFormData({
      playerName: playerToEdit.playerName,
      playerAge: playerToEdit.playerAge,
      indexName: playerToEdit.indexName,
      value: playerToEdit.value
    });
    handleDelete(id);
  };

  return (
    <div className="player-info-container">
      <h2>Player Information</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="playerName">Player Name</label>
              <input
                id="playerName"
                type="text"
                name="playerName"
                value={formData.playerName}
                onChange={handleInputChange}
                placeholder="Enter player name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="playerAge">Player Age</label>
              <input
                id="playerAge"
                type="number"
                name="playerAge"
                value={formData.playerAge}
                onChange={handleInputChange}
                placeholder="Enter player age"
                min="1"
                max="100"
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="indexName">Index Name</label>
              <select
                id="indexName"
                name="indexName"
                value={formData.indexName}
                onChange={handleInputChange}
                required
              >
                <option value="">Select index</option>
                <option value="speed">Speed</option>
                <option value="strength">Strength</option>
                <option value="accurate">Accurate</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="value">Value</label>
              <input
                id="value"
                type="number"
                name="value"
                value={formData.value}
                onChange={handleInputChange}
                placeholder="Enter value"
                min="0"
                max="100"
                required
              />
            </div>
          </div>
          <button type="submit" className="add-button">
            {formData.id ? 'Update Player' : 'Add Player'}
          </button>
        </form>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Player Name</th>
              <th>Age</th>
              <th>Index Name</th>
              <th>Value</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {players.map(player => (
              <tr key={player.id}>
                <td>{player.id}</td>
                <td>{player.playerName}</td>
                <td>{player.playerAge}</td>
                <td style={{ textTransform: 'capitalize' }}>{player.indexName}</td>
                <td>{player.value}</td>
                <td>
                  <div className="action-buttons">
                    <button 
                      onClick={() => handleEdit(player.id)} 
                      className="edit-button" 
                      title="Edit player"
                    >
                      ✎
                    </button>
                    <button 
                      onClick={() => handleDelete(player.id)} 
                      className="delete-button"
                      title="Delete player"
                    >
                      🗑
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {players.length === 0 && (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center', padding: '20px' }}>
                  No players added yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlayerInfo; 