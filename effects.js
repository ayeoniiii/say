// js/effects.js

document.addEventListener('DOMContentLoaded', () => {
    
    // 클릭할 대상 (노트)
    const noteElement = document.querySelector('.intro');
    
    // 원들이 생성될 컨테이너
    const confettiContainer = document.getElementById('confetti-container');
    
    // 파스텔 색상 목록
    const pastelColors = ['#DCC6F7', '#B3E5FC', '#FFF9C4', '#FFCCBC', '#C8E6C9'];

    // 노트 요소를 클릭했을 때 함수 실행
    noteElement.addEventListener('click', () => {
        
        const circleCount = 30; // 한 번에 떨어질 원의 개수

        for (let i = 0; i < circleCount; i++) {
            // 새로운 div 요소(원) 생성
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');

            // 랜덤 속성 부여
            const size = Math.random() * 10 + 5; // 5px ~ 15px 크기
            const left = Math.random() * 100; // 0% ~ 100% 가로 위치
            const duration = Math.random() * 3 + 2; // 2초 ~ 5초 동안 떨어짐
            const delay = Math.random() * 2; // 0초 ~ 2초 사이의 딜레이
            const color = pastelColors[Math.floor(Math.random() * pastelColors.length)];

            // 생성된 원에 스타일 적용
            confetti.style.width = `${size}px`;
            confetti.style.height = `${size}px`;
            confetti.style.left = `${left}vw`;
            confetti.style.animationDuration = `${duration}s`;
            confetti.style.animationDelay = `${delay}s`;
            confetti.style.backgroundColor = color;
            
            // 애니메이션이 끝나면 DOM에서 원을 제거 (중요!)
            confetti.addEventListener('animationend', () => {
                confetti.remove();
            });

            // 컨테이너에 원 추가
            confettiContainer.appendChild(confetti);
        }
    });
});