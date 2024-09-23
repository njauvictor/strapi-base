// RoomList.tsx

// Define a more specific type for the room data
interface Room {
    id: number;
    attributes: {
      name: string;
      description: string;
    };
  }
  
  // Define props for RoomList
  interface RoomListProps {
    rooms: Room[]; // Expect an array of Room objects
  }
  
  const RoomList: React.FC<RoomListProps> = ({ rooms }) => {
    console.log("Rooms in RoomList:", rooms); // For debugging
  
    return (
      <div>
        {rooms.length > 0 ? (
          rooms.map((room) => (
            <div key={room.id}>
              <h2>{room.attributes.name}</h2>
              <p>{room.attributes.description}</p>
            </div>
          ))
        ) : (
          <p>No rooms available</p>
        )}
      </div>
    );
  };
  
  export default RoomList;
  