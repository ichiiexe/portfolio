import NumberUp from "./ui/NumberUp";
import avatar from "../assets/Avatar.png";

const Profile = ({ projects = 10, schools = 2, hasLoaded }) => {
  return (
    <div className="flex flex-col gap-6 items-center md:flex-row md:items-start">
      <img
        className="w-28 h-28 rounded-full bg-gray-200 object-cover"
        src={avatar}
      />

      <div className="flex flex-col gap-2">
        <div className="flex flex-col items-center gap-1 md:items-start">
          <h1 className="font-extrabold">Albert Jefferson Abuy</h1>
          <h2>Junior Frontend Developer</h2>
          <p className="text-gray-600 max-w-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            modi soluta rem ipsa ullam aut, minima quibusdam voluptatem earum
            porro iure commodi quasi distinctio, error et reiciendis delectus?
            Fugiat, repellat?
          </p>
        </div>

        <div className="flex justify-center items-center gap-10 mt-4 md:justify-start">
          <div className="flex flex-col items-center">
            <NumberUp value={projects} start={hasLoaded} />
            <h4>Projects</h4>
          </div>

          <div className="flex flex-col items-center">
            <NumberUp value={schools} start={hasLoaded} />
            <h4>Schools</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
