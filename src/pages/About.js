import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/userSlice";
import Loader from "../components/Loader";

export default function About() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (status === "loading") return <Loader />;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className="about">
      <h2>About Us</h2>
      <p className="about-intro">
        We are a dedicated team of software engineers passionate about creating innovative solutions 
        and pushing the boundaries of what's possible in web development.
      </p>
      
      {data && (
        <div className="user-card">
          <img src={data.picture.large} alt="Profile" className="user-img" />
          <h3>{data.name.first} {data.name.last}</h3>
          <div className="card-content">
            <p><b>Email:</b> {data.email}</p>
            <p><b>Phone:</b> {data.phone}</p>
            <p><b>Location:</b> {data.location.city}, {data.location.country}</p>
            <p><b>Age:</b> {data.dob.age} years old</p>
            <p><b>Gender:</b> {data.gender}</p>
          </div>
        </div>
      )}
    </div>
  );
}
