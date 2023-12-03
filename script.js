function blinkAndFreezeLetters() {
    const headerText = document.querySelector('header h1');
    const lettersToBlink = ['O', 'D', 'S'];
    const blinkDuration = 10000; // Duração do piscar, ajuste conforme necessário
    const freezeDuration = 2000; // Duração após o piscar, ajuste conforme necessário

    function blinkLetter(letter) {
        const regex = new RegExp(letter, 'g');
        const originalText = headerText.innerHTML;
        const replacement = `<span class="blink">${letter}</span>`;

        headerText.innerHTML = originalText.replace(regex, replacement);

        setTimeout(() => {
            headerText.innerHTML = originalText.replace(regex, letter);
        }, blinkDuration);
    }

    function blinkAndFreeze(index) {
        if (index < lettersToBlink.length) {
            const currentLetter = lettersToBlink[index];
            blinkLetter(currentLetter);

            setTimeout(() => {
                blinkAndFreeze(index + 1);
            }, freezeDuration);
        }
    }

    blinkAndFreeze(0);
}

// Chame a função para iniciar o piscar e congelar
blinkAndFreezeLetters();