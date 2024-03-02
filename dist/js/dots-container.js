if (window.innerWidth >= 1024) {
    const container = document.querySelector('.dots-container');
    const minDistance = 30;
  
    function addDots() {
        const containerWidth = 500;
      const containerHeight = container.offsetHeight;
      const dots = Array.from(container.querySelectorAll('.dot'));
  
      for (let i = 0; i < 10; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.style.top = Math.floor(Math.random() * containerHeight) + 'px';
        dot.style.left = Math.floor(Math.random() * containerWidth) + 'px';
  
        // Verifica a distância entre o dot atual e os dots existentes
        let tooClose = true;
        while (tooClose) {
          tooClose = false;
          for (let j = 0; j < dots.length; j++) {
            const existingDot = dots[j];
            const dx = parseInt(existingDot.style.left) - parseInt(dot.style.left);
            const dy = parseInt(existingDot.style.top) - parseInt(dot.style.top);
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < minDistance) {
              tooClose = true;
              dot.style.top = Math.floor(Math.random() * containerHeight) + 'px';
              dot.style.left = Math.floor(Math.random() * containerWidth) + 'px';
              break;
            }
          }
        }
  
        container.appendChild(dot);
        dots.push(dot);
  
        // Define um intervalo de tempo aleatório para a animação
        const intervalTime = Math.floor(Math.random() * 5000) + 500;
  
        setInterval(() => {
          // Define um valor de opacidade aleatório
          const opacity = Math.floor(Math.random() * 5);
  
          dot.style.opacity = opacity;
        }, intervalTime);
      }
    }
  
    addDots();
  
    console.log("Script executado");
  }
  