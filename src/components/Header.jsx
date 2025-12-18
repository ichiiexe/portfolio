import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Github from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationPinIcon from "@mui/icons-material/LocationPin";

const Header = () => {
  return (
    <header className="w-full h-10 bg-transparent text-white p-4 flex items-center justify-between">
      <a
        href="/Resume-Albert-Jefferson-Abuy-2025.pdf"
        download=""
        title="Download Resume"
        className="flex items-center space-x-1"
      >
        <PictureAsPdfIcon className="text-lg!" />
        <span className="hidden md:inline text-[12px]">Download Resume</span>
      </a>

      <div className="flex space-x-4">
        {/* GITHUB */}
        <div className="flex items-center space-x-2">
          <Github className="text-lg!" />
          <a
            title="GitHub Profile"
            href="https://github.com/ichiiexe"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline text-[12px]"
          >
            ichiiexe
          </a>
        </div>
        {/* LINKEDIN */}
        <div className="flex items-center space-x-2">
          <LinkedInIcon className="text-lg!" />
          <a
            title="LinkedIn Profile"
            href="https://www.linkedin.com/in/ajabuy"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline text-[12px]"
          >
            ajabuy
          </a>
        </div>
        {/* EMAIL */}
        <div className="flex items-center space-x-2">
          <EmailIcon className="text-lg!" />
          <a title="jeffabuy@gmail.com" className="hidden md:inline text-[12px]" href="mailto:jeffabuy@gmail.com">
            jeffabuy@gmail.com
          </a>
        </div>
        {/* PHONE */}
        <div className="flex items-center space-x-2">
          <PhoneIcon className="text-lg!" />
          <a title="+30 693 184 0084" className="hidden md:inline text-[12px]" href="tel:+306931840084"  >
            +30 693 184 0084 
          </a>
        </div>
        {/* LOCATION */}
        <div className="flex items-center space-x-2">
          <LocationPinIcon className="text-lg!" />
          <a title="Athens, Greece" className="hidden md:inline text-[12px]">
            Athens, Greece
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
