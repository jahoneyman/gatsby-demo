interface IFeatures {
  name: string;
  description: string;
  image: string;
}

const features: IFeatures[] = [
  { name: "Send", description: "A cooler way to send money is here with @username", image: "" },
  {
    name: "Shop",
    description:
      "Shop online and in-store from our wide variety of merchants and community of verified sellers",
    image: "",
  },
  {
    name: "Save",
    description: "Rest easy with your savings tucked away in a BSP regulated bank",
    image: "",
  },
  {
    name: "Grow",
    description: "Want to invest in crypto? With Maya you can grow your money how you like it",
    image: "",
  },
];

export default { features };
