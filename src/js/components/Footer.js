import React from 'react';

export const Footer = () => {
  const getCurrentYear = () => {
    const date = new Date();
    return date.getFullYear();
  }
  return (
    <footer>
      <small>&copy; Copyright {getCurrentYear()} Hubert Nastały</small>
    </footer>
  )
}