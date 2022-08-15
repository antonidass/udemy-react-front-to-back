import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage(props) {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This is react app to leave feedback for a product or service</p>
        <p>Version: 1.0.0</p>
        <Link to="/">Back to Home</Link>
      </div>
    </Card>
  );
}

export default AboutPage;