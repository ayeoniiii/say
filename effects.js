// effects.js - 빈티지한 애니메이션 효과들

document.addEventListener('DOMContentLoaded', () => {
    
    // === 1. 종이 클릭 시 개선된 애니메이션 효과 ===
    const noteElement = document.querySelector('.intro');
    const confettiContainer = document.getElementById('confetti-container');
    
    // 더 아름다운 파스텔 색상 팔레트
    const pastelColors = [
        '#FFB3BA', '#FFDFBA', '#FFFFBA', '#BAFFC9', '#BAE1FF',
        '#DCC6F7', '#B3E5FC', '#FFF9C4', '#FFCCBC', '#C8E6C9',
        '#F8BBD9', '#E1BEE7', '#C5CAE9', '#BBDEFB', '#B2DFDB'
    ];

    // 종이 클릭 이벤트
    noteElement.addEventListener('click', () => {
        createConfettiEffect();
    });

    function createConfettiEffect() {
        const circleCount = 30; // 적당한 개수

        for (let i = 0; i < circleCount; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');

            // 일관된 크기와 자연스러운 떨어짐
            const size = 8; // 일관된 크기
            const left = Math.random() * 100;
            const duration = Math.random() * 3 + 2; // 2초 ~ 5초
            const delay = Math.random() * 0.5; // 짧은 딜레이
            const color = pastelColors[Math.floor(Math.random() * pastelColors.length)];

            confetti.style.width = `${size}px`;
            confetti.style.height = `${size}px`;
            confetti.style.left = `${left}vw`;
            confetti.style.animationDuration = `${duration}s`;
            confetti.style.animationDelay = `${delay}s`;
            confetti.style.backgroundColor = color;
            confetti.style.opacity = '0.6'; // 더 투명하게
            
            // 부드러운 그림자 효과
            confetti.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
            
            confetti.addEventListener('animationend', () => {
                confetti.remove();
            });

            confettiContainer.appendChild(confetti);
        }
    }

    // === 2. 눈 효과 제거됨 ===

    // === 3. 스크롤 기반 애니메이션 ===
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 애니메이션 대상 요소들 관찰
    const animatedElements = document.querySelectorAll('.project-card, .profile-box, .contact-form-wrapper');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });

    // === 4. 프로젝트 카드 호버 효과 개선 ===
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // 미묘한 흔들림 효과
            card.style.animation = 'gentleShake 0.5s ease-in-out';
        });
        
        card.addEventListener('animationend', () => {
            card.style.animation = '';
        });
    });

    // === 5. 상단으로 가기 버튼 기능 ===
    const goToTopBtn = document.querySelector('.btn-goto-top');
    
    goToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 스크롤 시 버튼 표시/숨김
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            goToTopBtn.style.opacity = '1';
            goToTopBtn.style.visibility = 'visible';
        } else {
            goToTopBtn.style.opacity = '0';
            goToTopBtn.style.visibility = 'hidden';
        }
    });

    // === 6. 폼 유효성 검사 ===
    const form = document.getElementById('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // 간단한 유효성 검사
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#e74c3c';
                } else {
                    input.style.borderColor = '#e0e0e0';
                }
            });
            
            if (isValid) {
                // 성공 메시지 표시
                const result = document.getElementById('result');
                result.textContent = '메시지가 성공적으로 전송되었습니다!';
                result.style.color = '#27ae60';
                form.reset();
            }
        });
    }
});

// CSS 애니메이션을 위한 스타일 추가
const style = document.createElement('style');
style.textContent = `
    @keyframes gentleShake {
        0%, 100% { transform: translateY(-5px) rotate(0deg); }
        25% { transform: translateY(-5px) rotate(1deg); }
        75% { transform: translateY(-5px) rotate(-1deg); }
    }
    
    .btn-goto-top {
        transition: all 0.3s ease;
    }
    
    .btn-goto-top:not(:hover) {
        opacity: 0.7;
        visibility: visible;
    }
`;
document.head.appendChild(style);