import React, { useState } from "react";
import "./Ruangan.css"; // You can reuse the same CSS

function Jadwal() {
  // Initial schedule data
  const [schedules, setSchedules] = useState([
    { id: 1, course: "Mathematics", day: "Monday", time: "08:00 AM" },
    { id: 2, course: "Computer Science", day: "Wednesday", time: "10:00 AM" },
  ]);

  const [newSchedule, setNewSchedule] = useState({
    course: "",
    day: "",
    time: "",
  });
  const [editingSchedule, setEditingSchedule] = useState(null);

  // Handle adding new schedule
  const handleAddSchedule = () => {
    setSchedules([...schedules, { id: schedules.length + 1, ...newSchedule }]);
    setNewSchedule({ course: "", day: "", time: "" });
  };

  // Handle updating schedule
  const handleUpdateSchedule = (id) => {
    const updatedSchedules = schedules.map((schedule) =>
      schedule.id === id ? { ...schedule, ...newSchedule } : schedule
    );
    setSchedules(updatedSchedules);
    setEditingSchedule(null); // Reset editing state
    setNewSchedule({ course: "", day: "", time: "" });
  };

  // Handle deleting schedule
  const handleDeleteSchedule = (id) => {
    const filteredSchedules = schedules.filter((schedule) => schedule.id !== id);
    setSchedules(filteredSchedules);
  };

  // Set schedule data to update
  const handleEditClick = (schedule) => {
    setEditingSchedule(schedule.id);
    setNewSchedule(schedule); // Pre-fill the form with current schedule data
  };

  return (
    <div className="about-container">
      <h1>Schedule Management</h1>

      <table>
        <thead>
          <tr>
            <th>MataKuliah</th>
            <th>Hari</th>
            <th>Jam</th>
            <th>Opsi</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((schedule) => (
            <tr key={schedule.id}>
              <td>{schedule.course}</td>
              <td>{schedule.day}</td>
              <td>{schedule.time}</td>
              <td>
                <button
                  className="update-btn"
                  onClick={() => handleEditClick(schedule)}
                >
                  Update
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteSchedule(schedule.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="form-container">
        <h2>{editingSchedule ? "Update Schedule" : "Add Schedule"}</h2>

        <input
          type="text"
          placeholder="Course"
          value={newSchedule.course}
          onChange={(e) => setNewSchedule({ ...newSchedule, course: e.target.value })}
        />
        <input
          type="text"
          placeholder="Day"
          value={newSchedule.day}
          onChange={(e) => setNewSchedule({ ...newSchedule, day: e.target.value })}
        />
        <input
          type="text"
          placeholder="Time"
          value={newSchedule.time}
          onChange={(e) => setNewSchedule({ ...newSchedule, time: e.target.value })}
        />

        <button
          onClick={
            editingSchedule ? () => handleUpdateSchedule(editingSchedule) : handleAddSchedule
          }
        >
          {editingSchedule ? "Update Schedule" : "Add Schedule"}
        </button>
      </div>
    </div>
  );
}

export default Jadwal;
