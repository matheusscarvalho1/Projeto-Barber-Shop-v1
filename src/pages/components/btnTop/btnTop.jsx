import React, { useState, useEffect } from 'react';
import styles from './btnTop.module.css';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';

export default function BtnTop({ id }) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollPos = window.scrollY;
      const section = document.getElementById(id);
      const sectionPos = section.getBoundingClientRect().top + scrollPos;
      const sectionBottomPos = sectionPos + section.clientHeight;

      // Verificar se a parte superior e inferior da seção estão visíveis na tela
      if (id === 'about') {
        setShowButton(sectionPos >= 0 && sectionBottomPos <= window.innerHeight);
      } else {
        setShowButton(true); // Exibir botão para outras seções além de 'about'
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [id]);

  return (
    <>
      {showButton && (
        <ScrollLink
          to="home" // Defina o ID da seção que deseja rolar suavemente
          smooth={true}
          duration={500}
          offset={-50}
          className={styles.btn}
        >
          <Image src="/images/acima-48.png" width={48} height={48} />
        </ScrollLink>
      )}
    </>
  );
}