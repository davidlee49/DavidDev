'use client'
import { useEffect } from 'react';
import './imageCarousel.css';

function ImageCarousel() {
    useEffect(() => {
        const buttons = document.querySelectorAll("[data-carousel-button]");
    
        buttons.forEach(button => {
          button.addEventListener("click", () => {
            const offset = button.dataset.carouselButton === "next" ? 1 : -1;
            const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
    
            const activeSlide = slides.querySelector("[data-active]");
            let newIndex = [...slides.children].indexOf(activeSlide) + offset;
            if (newIndex < 0) newIndex = slides.children.length - 1;
            if (newIndex >= slides.children.length) newIndex = 0;
    
            slides.children[newIndex].dataset.active = true;
            delete activeSlide.dataset.active;
          });
        });
    
        return () => {
          buttons.forEach(button => {
            button.removeEventListener("click", () => {});
          });
        };
      }, []);
  return (
    <div className="carousel" data-carousel>
        <button className="carousel-button prev" data-carousel-button="prev">&#8656;</button>
        <button className="carousel-button next" data-carousel-button="next">&#8658;</button>
        <ul data-slides>
        <li className="slide" data-active>
            <img src="https://images.unsplash.com/photo-1721332149371-fa99da451baa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" alt="Nature Image #1" />
        </li>
        <li className="slide">
            <img src="https://images.unsplash.com/photo-1722799037558-69a4dc8e08d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8" alt="Nature Image #2" />
        </li>
        <li className="slide">
            <img src="https://plus.unsplash.com/premium_photo-1722686516461-46770349c814?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Nature Image #3" />
        </li>
        </ul>
    </div>
  )
}

export default ImageCarousel