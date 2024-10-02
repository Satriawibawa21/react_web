import React, { useState } from "react";
import "./Ruangan.css"; // You can use the same CSS from App.css

function Ruangan() {
  // Initial room data
  const [rooms, setRooms] = useState([
    { id: 1, name: "Room A", capacity: 30, building: "Building 1" },
    { id: 2, name: "Room B", capacity: 25, building: "Building 2" },
  ]);

  const [newRoom, setNewRoom] = useState({
    name: "",
    capacity: "",
    building: "",
  });
  const [editingRoom, setEditingRoom] = useState(null);

  // Handle adding new room
  const handleAddRoom = () => {
    setRooms([...rooms, { id: rooms.length + 1, ...newRoom }]);
    setNewRoom({ name: "", capacity: "", building: "" });
  };

  // Handle updating room
  const handleUpdateRoom = (id) => {
    const updatedRooms = rooms.map((room) =>
      room.id === id ? { ...room, ...newRoom } : room
    );
    setRooms(updatedRooms);
    setEditingRoom(null); // Reset editing state
    setNewRoom({ name: "", capacity: "", building: "" });
  };

  // Handle deleting room
  const handleDeleteRoom = (id) => {
    const filteredRooms = rooms.filter((room) => room.id !== id);
    setRooms(filteredRooms);
  };

  // Set room data to update
  const handleEditClick = (room) => {
    setEditingRoom(room.id);
    setNewRoom(room); // Pre-fill the form with current room data
  };

  return (
    <div className="about-container">
      <h1>Manajemen Ruangan</h1>

      <table>
        <thead>
          <tr>
            <th>Nama ruangan</th>
            <th>Kapasitas</th>
            <th>Gedung</th>
            <th>Opsi</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr key={room.id}>
              <td>{room.name}</td>
              <td>{room.capacity}</td>
              <td>{room.building}</td>
              <td>
                <button
                  className="update-btn"
                  onClick={() => handleEditClick(room)}
                >
                  Update
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteRoom(room.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="form-container">
        <h2>{editingRoom ? "Update Room" : "Add Room"}</h2>

        <input
          type="text"
          placeholder="Room Name"
          value={newRoom.name}
          onChange={(e) => setNewRoom({ ...newRoom, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Capacity"
          value={newRoom.capacity}
          onChange={(e) => setNewRoom({ ...newRoom, capacity: e.target.value })}
        />
        <input
          type="text"
          placeholder="Building"
          value={newRoom.building}
          onChange={(e) => setNewRoom({ ...newRoom, building: e.target.value })}
        />

        <button
          onClick={
            editingRoom ? () => handleUpdateRoom(editingRoom) : handleAddRoom
          }
        >
          {editingRoom ? "Update Room" : "Add Room"}
        </button>
      </div>
    </div>
  );
}

export default Ruangan;
