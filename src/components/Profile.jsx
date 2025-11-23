const Profile = ({ projects = 10, schools = 2 }) => {
  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="flex gap-6">
        <img className="w-28 h-28 rounded-full bg-gray-200 object-cover" />

        <div className="flex flex-col gap-2">
          <div>
            <h1 className="font-extrabold">Albert Jefferson Abuy</h1>
            <h2>Junior Frontend Developer</h2>
            <p className="text-gray-600 max-w-xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae modi soluta rem ipsa ullam aut, minima quibusdam
              voluptatem earum porro iure commodi quasi distinctio, error et
              reiciendis delectus? Fugiat, repellat?
            </p>
          </div>

          <div className="flex items-center gap-10 mt-4">
            <div className="flex flex-col items-center">
              <h3>{projects}</h3>
              <h4>Projects</h4>
            </div>

            <div className="flex flex-col items-center">
              <h3>{schools}</h3>
              <h4>Schools</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
