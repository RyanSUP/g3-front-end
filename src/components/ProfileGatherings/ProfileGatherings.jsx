const ProfileGatherings = ({ groups }) => {
  return (
    <table >
      <thead className="sticky-md-top g-line p-3 bg-white">
        <tr>
          <th>Gathering</th>
          <th>Location</th>
          <th>Date</th>
        </tr>
      </thead>
      {groups?.map((group) =>
        group.gatherings?.map((gathering) =>
          <tbody key={gathering._id}>
            <tr>
              <td>{gathering.name}</td>
              <td>{gathering.location}</td>
              <td>{gathering.date}</td>
            </tr>
          </tbody>
        )
      )}
    </table>
  );
}

export default ProfileGatherings;