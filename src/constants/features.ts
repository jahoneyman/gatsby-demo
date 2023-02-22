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
    image: "home_send.png",
    alt_image: "image of send icon",
  },
  {
    name: "Shop",
    description:
      "Shop online and in-store from our wide variety of merchants and community of verified sellers",
    image: "home_spend.png",
    alt_image: "image of shop icon",
  },
  {
    name: "Save",
    description: "Rest easy with your savings tucked away in a BSP regulated bank",
    image: "save.png",
    alt_image: "image of save icon",
  },
  {
    name: "Grow",
    description: "Want to invest in crypto? With Maya you can grow your money how you like it",
    image: "invest.png",
    alt_image: "image of grow icon",
  },
];

export default { features };
