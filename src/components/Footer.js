import React from 'react';
import { Instagram, Facebook, LinkedIn } from '@mui/icons-material';
import "../styles/footer.css";

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a
          href="https://www.instagram.com/gabri.tonce/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram />
        </a>
        <a
          href="https://www.facebook.com/gabriel.toncelli/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook />
        </a>
        <a
          href="https://www.linkedin.com/in/gabriel-toncelli-18359b221/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </a>
      </div>
      <p>&copy; 2023 Gabriel Toncelli</p>
    </div>
  );
}

export default Footer;
