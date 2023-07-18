import rockImg from './assets/rock.svg';
import paperImg from './assets/paper.svg';
import scissorImg from './assets/scissor.svg';

const IMAGES = {
  rock: rockImg,
  paper: paperImg,
  scissor: scissorImg,
}

function HandIcon({ value = "rock" }) {
  const src = IMAGES[value];
  return <img src={src} alt={value} />;
}

export default HandIcon;
