import home_send from "../assets/images/features/home_send.png";
import home_spend from "../assets/images/features/home_spend.png";
import saveIcon from "../assets/images/features/save.png";
import investIcon from "../assets/images/features/invest.png";

interface IFeatures {
  name: string;
  description: string;
  image: string;
  alt_image: string;
}

const features: IFeatures[] = [
  {
    name: "Send",
    description: "A cooler way to send money is here with @username",
    image: home_send,
    alt_image: "image of send icon",
  },
  {
    name: "Shop",
    description:
      "Shop online and in-store from our wide variety of merchants and community of verified sellers",
    image: home_spend,
    alt_image: "image of shop icon",
  },
  {
    name: "Save",
    description: "Rest easy with your savings tucked away in a BSP regulated bank",
    image: saveIcon,
    alt_image: "image of save icon",
  },
  {
    name: "Grow",
    description: "Want to invest in crypto? With Maya you can grow your money how you like it",
    image: investIcon,
    alt_image: "image of grow icon",
  },
];

export default { features };
