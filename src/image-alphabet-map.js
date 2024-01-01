import apple from  './assests/apple.gif';
import bee from './assests/bee.gif';
import coin from './assests/coin.gif';
import duck from './assests/duck.gif';
import eye from './assests/eye.gif';
import foodTruck from './assests/food-truck.gif';
import gift from './assests/gift.gif';
import horse from './assests/horse.gif';

import AppleAudio from './assests/audio/Apple.mpeg';
import BeeAudio from './assests/audio/Bee.mpeg';
import CoinAudio from './assests/audio/Coin.mpeg';
import DuckAudio from './assests/audio/Duck.mpeg';
import EyeAudio from './assests/audio/Eye.mpeg';
import FoodTruckAudio from './assests/audio/FoodTruck.mpeg';
import GiftAudio from './assests/audio/Gift.mpeg';
import HorseAudio from './assests/audio/Horse.mpeg';

const imageAlphabetMap = {
  A: {
    image: apple,
    audio: AppleAudio,
  },
  B: {
    image: bee,
    audio: BeeAudio,
  },
  C: {
    image: coin,
    audio: CoinAudio,
  },
  D: {
    image: duck,
    audio: DuckAudio,
  },
  E: {
    image: eye,
    audio: EyeAudio,
  },
  F: {
    image: foodTruck,
    audio: FoodTruckAudio,
  },
  G: {
    image: gift,
    audio: GiftAudio,
  },
  H: {
    image: horse,
    audio: HorseAudio,
  },
};

export default imageAlphabetMap;
