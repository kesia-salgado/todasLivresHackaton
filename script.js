function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function blinkAndFreezeLetters() {
    const headerText = document.getElementById('logo');
    const lettersToBlink = ['O', 'D', 'S'];
    const blinkDuration = 1000; // Duração do piscar em milissegundos
    const freezeDuration = 1000; // Duração após o piscar em milissegundos
  
    async function blinkLetters() {
      for (const letter of lettersToBlink) {
        const regex = new RegExp(letter, 'g');
        const originalText = headerText.innerHTML;
        const replacement = `<span class="blink">${letter}</span>`;
  
        headerText.innerHTML = originalText.replace(regex, replacement);
      }
    }
  
    async function freezeLetters() {
      for (const letter of lettersToBlink) {
        const regex = new RegExp(`<span class="blink">${letter}</span>`, 'g');
        const originalText = headerText.innerHTML;
        const replacement = letter;
  
        headerText.innerHTML = originalText.replace(regex, replacement);
      }
    }
  
    await blinkLetters();
    await delay(freezeDuration);
    await freezeLetters();
  }
  
  // Chame a função para iniciar o piscar e congelar
  blinkAndFreezeLetters();
  
  