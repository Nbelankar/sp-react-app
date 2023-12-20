import "./App.css";
import OurTeam from "./component/ourTeam/ourTeam";

function App() {
  const people = [
    {
      name: "Leslie Alexander",
      role: "Founder",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Leslie Jullie",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];
  return (
    <>
      <h1 className="bg-green-400">Tailwind Test </h1>
      <OurTeam people={people} />
    </>
  );
}

export default App;
