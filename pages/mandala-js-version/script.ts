import gsap from "gsap";
const ANGLE_ROTATION = 60;
const DURATION = 0.25;
const DELAY = 0.5;
const LABEL = "firstCircleRotate";

const rotateCircle = (circleNumber: number) => {
  let tl = gsap.timeline();
  console.log(`#outterCircle${circleNumber}`);
  console.log(`${LABEL}+=${DELAY * circleNumber}`);
  console.log(`Duration: ${1 + DURATION * circleNumber}`);
  tl.set(`#outterCircle${circleNumber}`, {
    transformOrigin: "bottom center",
    visibility: "visible",
    immediateRender: true,
  }).fromTo(
    `#outterCircle${circleNumber}`,
    {
      opacity: 0,
      rotation: 0,
    },
    {
      opacity: 1,
      rotate: ANGLE_ROTATION * circleNumber,
      duration: 1 + DURATION * circleNumber,
      ease: "easeOut",
    }
  );
  return tl;
};

const addCircles = (numberOfCircles: number) => {
  const tl = gsap.timeline();
  tl.addLabel(LABEL, 0);
  for (let i = 1; i <= numberOfCircles; i++) {
    tl.add(rotateCircle(i), `${LABEL}+=${DELAY * i}`);
  }
  return tl;
};

const master = gsap.timeline({repeat: -1, yoyo: true});
const timeline = addCircles(5);

master
  .set("#outterCircle0", {
    visibility: "visible",
  })
  .add(timeline);

//It's equivalent to

// master
//   .set("#outterCircle0", {
//     visibility: "visible",
//   })
//   .addLabel(LABEL, 0)
//   .add(rotateCircle(1), `${LABEL}+=${DELAY * 1}`)
//   .add(rotateCircle(2), `${LABEL}+=${DELAY * 2}`)
//   .add(rotateCircle(3), `${LABEL}+=${DELAY * 3}`)
//   .add(rotateCircle(4), `${LABEL}+=${DELAY * 4}`)
//   .add(rotateCircle(5), `${LABEL}+=${DELAY * 5}`);
console.log(master);
