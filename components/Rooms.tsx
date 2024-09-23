import RoomList from "./RoomList";

const getRooms = async () => {
  const res = await fetch('http://127.0.0.1:1337/api/rooms?populate=*', {
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch rooms');
  }

  return await res.json();
};

const Rooms = async () => {
  try {
    const rooms = await getRooms();
    console.log("Rooms data:", rooms); // For debugging

    return (
      <section>
        <div className="container mx-auto">
          <RoomList rooms={rooms.data} /> {/* Pass rooms.data as props */}
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error fetching rooms:", error);
    return (
      <section>
        <div className="container mx-auto">
          <p>Failed to load rooms.</p>
        </div>
      </section>
    );
  }
};

export default Rooms;
