const track = document.querySelector(".marquee-track");
const items = Array.from(track.children);

items.forEach(item => {
  const clone = item.cloneNode(true);
  track.appendChild(clone);
});

const totalWidth = track.scrollWidth / 2;

gsap.to(track, {
  x: `-=${totalWidth}`,
  duration: 40,
  ease: "linear",
  repeat: -1
});