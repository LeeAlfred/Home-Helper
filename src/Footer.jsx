import React from 'react';

const copyrightYear = new Date();

function Footer() {
  return <p> copyright {copyrightYear.getFullYear()} Lee Sampson</p>;
}

export default Footer;
