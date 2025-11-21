import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationPinIcon from '@mui/icons-material/LocationPin';

const Header = () => {
    return (
        <header className="w-full h-10 bg-gray-800 text-white p-4 flex items-center justify-end">
            {/* EMAIL */}
                <div className="flex items-center space-x-2">
                    <EmailIcon className='!text-lg'/>
                    <span className="text-[12px]">email@example.com</span>
                </div>
            {/* PHONE */}
                <div>
                    <PhoneIcon className='!text-lg ml-4'/>
                    <span className="text-[12px] ml-2">+123 456 7890</span>
                </div>
            {/* LOCATION */}
                <div>
                    <LocationPinIcon className='!text-lg ml-4'/>
                    <span className="text-[12px] ml-2">Athens, Greece</span>
                </div>
        </header>
    )}

export default Header;
