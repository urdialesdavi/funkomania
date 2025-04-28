import React from 'react';

export default function Menu() {
  return (
    <nav style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', margin: '1rem 0' }}>
      <a href="/fullmetal">FullMetal</a>
      <a href="/marvel">Marvel</a>
      <a href="/jujutsu">Jujutsu</a>
      <a href="/contact">Contato</a>
      <a href="/alchemist">Alchemist Rivals</a>
      <a href="/kaisen">Kaisen</a>
    </nav>
  );
}
