import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationPinIcon from "@mui/icons-material/LocationPin";

const Header = () => {
  return (
    <header className="w-full h-10 bg-gray-800 text-white p-4 flex items-center justify-between">
      <a href="" download="" className="text-[12px]">
        <PictureAsPdfIcon className="text-lg! mr-2" />
        Download Resume
      </a>

      <div className="flex space-x-4">
        {/* LINKEDIN */}
        <div className="flex items-center space-x-2">
          <LinkedInIcon className="text-lg!" />
          <a
            href="https://www.linkedin.com/in/ajabuy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px]"
          >
            ajabuy
          </a>
        </div>
        {/* EMAIL */}
        <div className="flex items-center space-x-2">
          <EmailIcon className="text-lg!" />
          <a className="text-[12px]">email@example.com</a>
        </div>
        {/* PHONE */}
        <div className="flex items-center space-x-2">
          <PhoneIcon className="text-lg!" />
          <a className="text-[12px] ml-2">+123 456 7890</a>
        </div>
        {/* LOCATION */}
        <div className="flex items-center space-x-2">
          <LocationPinIcon className="text-lg!" />
          <a className="text-[12px] ml-2">Athens, Greece</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
