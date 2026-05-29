document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('.background-video');
    if (!video) return;

    const tryPlay = () => {
        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                const resume = () => {
                    video.play().finally(() => {
                        document.removeEventListener('click', resume);
                        document.removeEventListener('touchstart', resume);
                    });
                };
                document.addEventListener('click', resume, { once: true });
                document.addEventListener('touchstart', resume, { once: true });
            });
        }
    };

    tryPlay();

    const card = document.getElementById('announcement');
    const closeBtn = card?.querySelector('.glass-card__close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            card.classList.add('is-hidden');
            setTimeout(() => card.remove(), 400);
        });
    }
});
