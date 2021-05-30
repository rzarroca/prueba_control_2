'use strict';

const paragraphs = document.querySelectorAll('body p');

paragraphs.forEach((p) => {
    const words = p.innerText.split(' ');
    const underlineArray = words.map((word) => {
        const fWord = word.replace(/[^a-zA-Z0-9]/g, '');
        if (fWord.length > 5)
            return `<span style="text-decoration:underline">${word}</span>`;
        return `${word}`;
    });
    const underlineText = underlineArray.join(' ');
    p.innerHTML = underlineText;
});
