import React from 'react';

export default function MainBanner() {
  return (
    <div style={{
      background: 'linear-gradient(90deg, #f7cac9, #92a8d1)',
      padding: '3rem 1rem',
      textAlign: 'center'
    }}>
      <h1>Bem-vindo à FunkoMania!</h1>
      <p>Os melhores Funkos e colecionáveis dos seus personagens favoritos!</p>
      <a href="/loja" style={{
        display: 'inline-block',
        marginTop: '1rem',
        padding: '0.75rem 2rem',
        background: '#ff9800',
        color: '#fff',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: 'bold'
      }}>
        Ver Coleção
      </a>
    </div>
  );
}
