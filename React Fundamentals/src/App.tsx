import UserCard from "./components/UserCard";

function App() {
  return (
    <div>
      <h1> Our Team </h1>

      <UserCard
        name="R10N1X"
        age={22}
        role="Frontend Developer"
      />
    
      <UserCard
        name="John Doe"
        age={30}
        role="Backend Developer"
      />

      <UserCard
        name="Jane Smith"
        age={28}
        role="UI/UX Designer"
      />
    </div>
  );
}

export default App;