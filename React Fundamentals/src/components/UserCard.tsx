interface UserCardProps {
    name: string; 
    age: number; 
    role: string; 
}; 

function UserCard({ name, age, role }: UserCardProps) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Role: {role}</p>
        </div>
    ); 
} 

export default UserCard;
