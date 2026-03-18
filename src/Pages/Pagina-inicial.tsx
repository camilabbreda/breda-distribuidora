import "../css/Pagina-inicial.css"
import { useEffect, useState } from "react";

const produtos = [
    { src: "/img/produtos/dori_alimentos.jpg", alt: "Produto Dori Alimentos" },
    { src: "/img/produtos/danilla_brasil.avif", alt: "Produto Danilla Brasil" },
    { src: "/img/produtos/Kodilar.webp", alt: "Produto Kodilar" },
    { src: "/img/produtos/hikari.jpg", alt: "Produto Hikari" },
];

export default function PaginaInicial() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const intervalId = window.setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % produtos.length);
        }, 4000);

        return () => window.clearInterval(intervalId);
    }, [isPaused]);

    return (
        <div className="container">
            <p className="highlight">Breda Distribuidora, a distribuidora de Alimentos do Oeste de Santa Catarina!</p>
            <div
                className="homeCarousel"
            >
                <div className="homeCarouselViewport">
                    <img
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        className="homeCarouselImage"
                        src={produtos[activeIndex].src}
                        alt={produtos[activeIndex].alt}
                    />
                </div>

                <div className="homeCarouselDots" aria-label="Produtos">
                    {produtos.map((produto, index) => (
                        <button
                            key={produto.src}
                            type="button"
                            className={
                                index === activeIndex
                                    ? "homeCarouselDot homeCarouselDotActive"
                                    : "homeCarouselDot"
                            }
                            onClick={() => setActiveIndex(index)}
                            aria-label={`Ver ${produto.alt}`}
                            aria-current={index === activeIndex}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}