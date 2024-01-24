import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 2500,
    offset: 100,
});

const resetCards = () => {
    button1.style.height = '60px';
    button1.style.transition = 'height 0.8s ease-out';
    button1.textContent = 'Are we really a restaurant?';
    button1.style.backgroundColor = '#D3756B';

    button2.style.height = '60px';
    button2.style.transition = 'height 0.8s ease-out';
    button2.textContent = 'Was this site created to test my skills?';
    button2.style.backgroundColor = '#D3756B';

    button3.style.height = '60px';
    button3.style.transition = 'height 0.8s ease-out';
    button3.textContent = 'Why is the site so ugly?';
    button3.style.backgroundColor = '#D3756B';

    button4.style.height = '60px';
    button4.style.transition = 'height 0.8s ease-out';
    button4.textContent = 'Why does water get wet?';
    button4.style.backgroundColor = '#D3756B';

    button5.style.height = '60px';
    button5.style.transition = 'height 0.8s ease-out';
    button5.textContent = 'Why is food so expensive?';
    button5.style.backgroundColor = '#D3756B';

    button6.style.height = '60px';
    button6.style.transition = 'height 0.8s ease-out';
    button6.textContent = "Why don't I have any answer to my question?";
    button6.style.backgroundColor = '#D3756B';
    };

const buttononclickfunction = () => {
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const button3 = document.getElementById("button3");
    const button4 = document.getElementById("button4");
    const button5 = document.getElementById("button5");
    const button6 = document.getElementById("button6");

    if (button1.contains(document.activeElement)) {
        resetCards();
        button1.style.height = '80px';
        button1.style.transition = 'height 0.8s ease-in';
        button1.textContent = 'Nope.';
        button1.style.backgroundColor = '#924f47';
    }
    
    if (button2.contains(document.activeElement)) {
        resetCards();
        button2.style.height = '80px';
        button2.style.transition = 'height 0.8s ease-in';
        button2.textContent = 'YES!';
        button2.style.backgroundColor = '#924f47';  
    }
    
    if (button3.contains(document.activeElement)) {
        resetCards();
        button3.style.height = '80px';
        button3.style.transition = 'height 0.8s ease-in';
        button3.textContent = 'Why are YOU so ugly?';
        button3.style.backgroundColor = '#924f47';
    }
    
    if (button4.contains(document.activeElement)) {
        resetCards();
        button4.style.height = '80px';
        button4.style.transition = 'height 0.8s ease-in';
        button4.textContent = 'Not the point of this site.';
        button4.style.backgroundColor = '#924f47';
    };
    if (button5.contains(document.activeElement)) {
        resetCards();
        button5.style.height = '80px';
        button5.style.transition = 'height 0.8s ease-in';
        button5.textContent = 'Are you broke?';
        button5.style.backgroundColor = '#924f47';
    };
    if (button6.contains(document.activeElement)) {
        resetCards();
        button6.style.height = '80px';
        button6.style.transition = 'height 0.8s ease-in';
        button6.textContent = 'Go to my linkedin and ask me there.';
        button6.style.backgroundColor = '#924f47';
    };
};
    

window.addEventListener('click', buttononclickfunction);


