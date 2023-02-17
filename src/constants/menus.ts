interface IHeader {
  text: string;
  to?: string;
  items?: IHeader[];
  outside_icon?: boolean;
}

const header: IHeader[] = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "Services",
    items: [
      {
        text: "Transfer",
        to: "/",
      },
      {
        text: "Transfer",
        to: "/",
      },
      {
        text: "Grow",
        to: "/",
      },
      {
        text: "Load",
        to: "/",
      },
      {
        text: "Shop",
        to: "/",
      },
      {
        text: "Explore all features",
        to: "/",
      },
    ],
  },
  {
    text: "User Guide",
    items: [
      {
        text: "All Guides",
        to: "/",
      },
      {
        text: "Account Limits",
        to: "/",
      },
      {
        text: "Activate Virtual Card",
        to: "/",
      },
      {
        text: "Bank Transfer",
        to: "/",
      },
      {
        text: "Bills Payment",
        to: "/",
      },
      {
        text: "Cash In",
        to: "/",
      },
      {
        text: "",
        items: [
          {
            text: "Freelance",
            to: "/",
          },
          {
            text: "OFW",
            to: "/",
          },
        ],
      },
      {
        text: "Create an Account",
        to: "/",
      },
      {
        text: "Crypto",
        to: "/",
      },
      {
        text: "Email Verification",
        to: "/",
      },
      {
        text: "Travel with Maya",
        to: "/",
      },
      {
        text: "Upgrade Account",
        to: "/",
      },
      {
        text: "Use Abroad",
        to: "/",
      },
      {
        text: "Link Physical Card",
        to: "/",
      },
      {
        text: "Mobile Data",
        to: "/",
      },
      {
        text: "Mobile Prepaid Load",
        to: "/",
      },
      {
        text: "Pay using Maya Card",
        to: "/",
      },
      {
        text: "Pay with Maya online",
        to: "/",
      },
      {
        text: "Pay with QR",
        to: "/",
      },
      {
        text: "Refer and Earn",
        to: "/",
      },
      {
        text: "Save",
        to: "/",
      },
      {
        text: "Send Money",
        to: "/",
      },
      {
        text: "Send Money via @Username",
        to: "/",
      },
      {
        text: "Gaming",
        to: "/",
      },
      {
        text: "Get a Maya Card",
        to: "/",
      },
      {
        text: "Get Protected",
        to: "/",
      },
    ],
  },
  {
    text: "Deals",
    to: "/",
  },
  {
    text: "Help & Support",
    to: "/",
    outside_icon: true,
  },
  {
    text: "Store",
    to: "/",
    outside_icon: true,
  },
  {
    text: "Partner Merchants",
    to: "/",
  },
  {
    text: "Stories",
    to: "/",
  },
];

export default { header };
