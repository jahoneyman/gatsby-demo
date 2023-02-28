import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Heading from "./../../../shared/heading";

const Apps = () => {
  return (
    <section className="flex items-center justify-center bg-gray-1 py-24 text-white">
      <div className="px-3.5">
        <div className="text-center">
          <Heading tag="h1" className="text-3xl font-semibold">
            It's everything and a bank. What more could you need?
          </Heading>
          <p className="mt-4 text-lg">For existing PayMaya users, update your app to Maya</p>
          <ul className="grid grid-cols-2 px-16 gap-2 mt-5">
            <li>
              <Link to="https://official.paymaya.com/3xMF/qx5mybmj">
                <StaticImage src="../../../../assets/images/apps/apple.svg" alt="apple" />
              </Link>
            </li>
            <li>
              <Link to="https://play.google.com/store/apps/details?id=com.paymaya&hl=en&gl=US&source_caller=ui&pid=Website&is_retargeting=true&af_click_lookback=7d&shortlink=qx5mybmj&af_adset=Maya%20Rebrand&deep_link_value=paymaya%3A%2F%2Flogin&af_channel=Owned_media&c=MayaRebrand">
                <StaticImage src="../../../../assets/images/apps/google.svg" alt="apple" />
              </Link>
            </li>
            <li className="col-span-2">
              <Link to="https://play.google.com/store/apps/details?id=com.paymaya&hl=en&gl=US&source_caller=ui&pid=Website&is_retargeting=true&af_click_lookback=7d&shortlink=qx5mybmj&af_adset=Maya%20Rebrand&deep_link_value=paymaya%3A%2F%2Flogin&af_channel=Owned_media&c=MayaRebrand">
                <StaticImage src="../../../../assets/images/apps/huawei.svg" alt="apple" />
              </Link>
            </li>
          </ul>
          <div className="mt-12">
            <StaticImage
              src="../../../../assets/images/apps/mobile_phone.webp"
              alt="mobile_phone"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apps;
