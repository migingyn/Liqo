import { useState } from "react";
import { motion } from "framer-motion";

import { useQuery, useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import "./App.css";

type NewMetricState = {
  label: string;
  value: string;
  unit: string;
};

function App() {
  const metrics = useQuery(api.metrics.getRecent) ?? [];
  const addMetric = useMutation(api.metrics.add);

  const [form, setForm] = useState<NewMetricState>({
    label: "",
    value: "",
    unit: "",
  });

  const handleChange =
    (field: keyof NewMetricState) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async () => {
    if (!form.label || !form.value) return;

    await addMetric({
      label: form.label,
      value: Number(form.value),
      unit: form.unit || undefined,
    });

    setForm({ label: "", value: "", unit: "" });
  };

  return (
    <div className="app-root">
      <header className="app-header">
        <div>
          <h1 className="app-title">Decarb Metrics Dashboard</h1>
          <p className="app-subtitle">
            Real-time metrics powered by Convex, React, and Framer Motion.
          </p>
        </div>
      </header>

      <main className="app-main">
        <motion.section
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <h2 className="card-title">Add Metric</h2>
          <p className="card-description">
            Track emissions, energy, cost, or any KPI you care about.
          </p>

          <div className="form-grid">
            <div className="field">
              <label className="label">Label</label>
              <input
                className="input"
                placeholder="e.g. CO₂ intensity"
                value={form.label}
                onChange={handleChange("label")}
              />
            </div>

            <div className="field">
              <label className="label">Value</label>
              <input
                className="input"
                type="number"
                placeholder="e.g. 42.5"
                value={form.value}
                onChange={handleChange("value")}
              />
            </div>

            <div className="field">
              <label className="label">Unit (optional)</label>
              <input
                className="input"
                placeholder="e.g. kg / MWh"
                value={form.unit}
                onChange={handleChange("unit")}
              />
            </div>
          </div>

          <div className="actions-row">
            <button className="button" onClick={handleSubmit}>
              Save metric
            </button>
          </div>
        </motion.section>

        <motion.section
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.05 }}
        >
          <h2 className="card-title">Recent Metrics</h2>
          {metrics.length === 0 ? (
            <p className="empty-state">
              No data yet. Add a metric above to get started.
            </p>
          ) : (
            <ul className="metrics-list">
              {metrics.map((m) => (
                <motion.li
                  key={m._id}
                  className="metric-row"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="metric-main">
                    <span className="metric-label">{m.label}</span>
                    <span className="metric-meta">
                      {new Date(m.createdAt).toLocaleTimeString()}
                    </span>
                  </div>
                  <div className="metric-value">
                    {m.value}
                    {m.unit && <span className="metric-unit"> {m.unit}</span>}
                  </div>
                </motion.li>
              ))}
            </ul>
          )}
        </motion.section>
      </main>
    </div>
  );
}

export default App;
