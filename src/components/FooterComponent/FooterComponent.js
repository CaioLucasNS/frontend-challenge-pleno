import React from 'react';
import { Logo } from '../../components/Logo/Logo';

import './styles.scss';

export function FooterComponent() {
  return (
    <footer>
      <div id="container-footer">
        <div className="logo">
          <Logo />
        </div>

        <div className="content-footer">
          <p>+80 1234 56789</p>
          <p>|</p>
          <p>
            <a href="mailto:ola@exemplo.com.br">ola@exemplo.com.br</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
