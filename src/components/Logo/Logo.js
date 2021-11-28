import React from 'react';

import './styles.scss';

export function Logo({ firstColor, secondColor }) {
  if (!firstColor) firstColor = "#fff";
  if (!secondColor) firstColor = "#fff";

  return (
    <div>
      <p style={{ color: firstColor }}>
        Slider <span style={{ color: secondColor }}>Ezoom</span>
      </p>
    </div>
  );
}
