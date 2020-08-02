const sections = document.querySelectorAll('.section');
const viewHeight = window.innerHeight;

console.log(sections, viewHeight);//738

const revealScroll = () => {
  sections.forEach( section => {
    const distanceFromTop =  section.getBoundingClientRect().top;
    console.log(distanceFromTop);
    distanceFromTop < viewHeight -100 
      ? section.classList.add('scroll-reveal')
      : section.classList.remove('scroll-reveal');
  });
}


window.addEventListener('scroll', () => revealScroll())