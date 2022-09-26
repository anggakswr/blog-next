import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaPinterest,
} from "react-icons/fa";

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  PinterestShareButton,
} from "next-share";

import { useRouter } from "next/router";

const ShareBtns = () => {
  const { route } = useRouter();
  const { baseUrl } = process.env;
  const fullPath = baseUrl + route;

  return (
    <nav className="my-8 flex gap-x-2">
      <FacebookShareButton url={fullPath}>
        <div className="inline-block p-2 bg-black">
          <FaFacebook color="white" />
        </div>
      </FacebookShareButton>

      <TwitterShareButton url={fullPath}>
        <div className="inline-block p-2 bg-black">
          <FaTwitter color="white" />
        </div>
      </TwitterShareButton>

      <LinkedinShareButton url={fullPath}>
        <div className="inline-block p-2 bg-black">
          <FaLinkedin color="white" />
        </div>
      </LinkedinShareButton>

      <WhatsappShareButton url={fullPath} separator=":: ">
        <div className="inline-block p-2 bg-black">
          <FaWhatsapp color="white" />
        </div>
      </WhatsappShareButton>

      <PinterestShareButton
        url={fullPath}
        media={"next-share is a social share buttons for your next React apps."}
      >
        <div className="inline-block p-2 bg-black">
          <FaPinterest color="white" />
        </div>
      </PinterestShareButton>
    </nav>
  );
};

export default ShareBtns;
