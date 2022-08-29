import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaPinterest,
} from "react-icons/fa";

const ShareBtns = () => {
  return (
    <nav className="my-8 flex gap-x-2">
      <a href="#" className="inline-block p-2 bg-black">
        <FaFacebook color="white" />
      </a>

      <a href="#" className="inline-block p-2 bg-black">
        <FaTwitter color="white" />
      </a>

      <a href="#" className="inline-block p-2 bg-black">
        <FaLinkedin color="white" />
      </a>

      <a href="#" className="inline-block p-2 bg-black">
        <FaWhatsapp color="white" />
      </a>

      <a href="#" className="inline-block p-2 bg-black">
        <FaPinterest color="white" />
      </a>
    </nav>
  );
};

export default ShareBtns;
