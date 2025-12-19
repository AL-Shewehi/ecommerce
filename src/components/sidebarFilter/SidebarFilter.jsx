import React, { useState } from "react";

function SidebarFilter({
  title,
  items = [],
  type = "radio",
  min,
  max,
  step,
  value,
  onChange,
}) {
  const [isOpen, setIsOpen] = useState(false); // حالة الفتح والإغلاق

  return (
    <div className="mb-4">
      {/* العنوان كزر يفتح ويقفل */}
      <p
        className="d-flex justify-content-between align-items-center mb-3"
        style={{ cursor: "pointer" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </p>

      {isOpen && (
        <>
          {type === "range" ? (
            <div>
              <input
                type="range"
                className="form-range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={onChange}
              />
              <div className="d-flex justify-content-between">
                <span>${min}</span>
                <span>${value}</span>
              </div>
            </div>
          ) : (
            items.map((item) => (
              <div
                className="form-check d-flex justify-content-between mb-2"
                key={item.id}
              >
                <div>
                  <input
                    className="form-check-input"
                    type="radio"
                    name={title}
                    onChange={() => onChange(item.name)}
                  />
                  <label className="form-check-label">
                    {item.label || item.name}
                  </label>
                </div>
                <span>({item.quantity})</span>
              </div>
            ))
          )}
        </>
      )}
    </div>
  );
}

export default SidebarFilter;
