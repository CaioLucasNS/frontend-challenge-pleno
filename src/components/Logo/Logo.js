import React from 'react';

import './styles.scss';

export function Logo({ firstColor, secondColor }) {
  if (!firstColor) firstColor = "#009eef";
  if (!secondColor) secondColor = "#c7c7c7";

  return (
    <div>
      <p style={{ color: firstColor }}>
        Slider <span style={{ color: secondColor }}>Ezoom</span>
      </p>
    </div>
  );
}
