import feature0 from "../assets/images/new_features/feature_0.webp";
import feature1 from "../assets/images/new_features/feature_1.webp";
import feature2 from "../assets/images/new_features/feature_2.webp";
import feature3 from "../assets/images/new_features/feature_3.webp";
import feature4 from "../assets/images/new_features/feature_4.svg";
import feature5 from "../assets/images/new_features/feature_5.webp";

interface IFeatures {
  available: boolean;
  title: string;
  body: string;
  button_text: string;
  color: string;
  image: string;
}

const features: IFeatures[] = [
  {
    available: true,
    title: "PayMaya is now Maya",
    body: "That’s right, we’re more than a wallet now. We’ve got our own digital bank, crypto exchange, and so much more.",
    button_text: "Discover Maya",
    color: "bg-card-0",
    image: feature0,
  },
  {
    available: true,
    title: "What? You can get your very own Maya physical card?",
    body: "That’s right! Get your own sleek, black, and suave Maya card so you can handle your transactions in just a tap or a swipe.",
    button_text: "Get a Maya card",
    color: "bg-card-1",
    image: feature1,
  },
  {
    available: false,
    title: "We’ve got everything—and dark mode too",
    body: "Maya now comes with one of the greatest innovations of the 21st century. That’s right, we’ve got dark mode now! We hear it puts less strain on the eyes and saves battery (but we think it’s nice to look at, too!).",
    button_text: "",
    color: "bg-card-2",
    image: feature2,
  },
  {
    available: true,
    title: "Zero to ₱15,000 in seconds",
    body: "Get approval of up to ₱15,000 credit line with Maya Credit!",
    button_text: "Apply to Maya Credit",
    color: "bg-card-3",
    image: feature3,
  },
  {
    available: true,
    title: "Did you know you can send money using @usernames?",
    body: "Don't have a friend's bank account memorized? Too many details to enter? Well, with Maya, all you need is your receiver's username and you're ready to send away.",
    button_text: "Create your @username now",
    color: "bg-card-4",
    image: feature4,
  },
  {
    available: true,
    title: "Crypto for all",
    body: "Not sure where to start? We got you.\nCash in. Buy. Hodl. Sell. Save. Spend. Learn. All in one app.",
    button_text: "Tell me more",
    color: "bg-card-5",
    image: feature5,
  },
];

export default { features };
