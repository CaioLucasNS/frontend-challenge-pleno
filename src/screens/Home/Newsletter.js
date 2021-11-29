import React, { useState } from 'react';

import './styles.scss';

export function Newsletter() {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value)
    } 

  return(
    <div id="newsletter-container">
        <h2 className="title">Newsletter</h2>
        <p className="text">Receba nossas informações por email e fique sabendo de todas as novidades</p>

        <div className="input">
            <input placeholder="seu email" type="email" id="email" name="email" value={text} onChange={handleChange} />
            <a type="submit" className="save-button">Salvar</a>
        </div>
    </div>
    );
}
