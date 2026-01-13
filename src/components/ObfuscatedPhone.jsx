import React from 'react';

export function ObfuscatedPhone({ phoneNumber, className = "" }) {
  // Reverse the string for the DOM
  const reversed = phoneNumber.split('').reverse().join('')
    .replace(/\(/g, 'TEMP').replace(/\)/g, '(').replace(/TEMP/g, ')');

  return (
    <span
      className={className}
      style={{
        unicodeBidi: 'bidi-override',
        direction: 'rtl',
        display: 'inline-block'
      }}
      aria-label={phoneNumber} // Helpful for screen readers, though some bots might read this. Obfuscation is a trade-off.
    >
      {reversed}
    </span>
  );
}
