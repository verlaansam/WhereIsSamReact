import { useState } from "react";

const LogForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    date: new Date().toISOString().split("T")[0], // Auto-fill today's date
    windSpeed: "",
    windDirection: "",
    seaState: "",
    notes: "",
  });

  const windSpeeds = [
    "0-5 knots",
    "6-10 knots",
    "11-15 knots",
    "16-20 knots",
    "21-25 knots",
    "26-30 knots",
    "Da Fuck we doing here",
  ];

  const windDirections = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted! Check the console for details.");
  };

  return (
    <div className="max-w-lg mx-auto p-6 w-screen shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Log Entry Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Date (Auto-filled) */}
        <div>
          <label className="block text-sm font-medium">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Wind (Two Dropdowns) */}
        <div>
          <label className="block text-sm font-medium">Wind</label>
          <div className="flex space-x-2">
            {/* Wind Speed */}
            <select
              name="windSpeed"
              value={formData.windSpeed}
              onChange={handleChange}
              className="w-1/2 p-2 border rounded"
            >
              <option value="">Speed (knots)</option>
              {windSpeeds.map((speed, index) => (
                <option key={index} value={speed}>
                  {speed}
                </option>
              ))}
            </select>

            {/* Wind Direction */}
            <select
              name="windDirection"
              value={formData.windDirection}
              onChange={handleChange}
              className="w-1/2 p-2 border rounded"
            >
              <option value="">Direction</option>
              {windDirections.map((dir, index) => (
                <option key={index} value={dir}>
                  {dir}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Sea State */}
        <div>
          <label className="block text-sm font-medium">Sea State</label>
          <input
            type="text"
            name="seaState"
            value={formData.seaState}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Text Field */}
        <div>
          <label className="block text-sm font-medium">Notes</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full p-2 border rounded h-24"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="text-sm text-black font-roboto-slab border p-2 w-full bg-white hover:text-white hover:bg-slate-950 mt-4">
          Submit Log Entry
        </button>
      </form>
    </div>
  );
};

export default LogForm;

