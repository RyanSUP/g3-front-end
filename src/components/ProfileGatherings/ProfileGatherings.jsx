const ProfileGatherings = ({ groups }) => {
  return (
    <table >
      <thead className="sticky-md-top p-3 bg-white">
        <tr>
          <th>Gathering</th>
          <th>Location</th>
          <th>Date</th>
        </tr>
      </thead>
      {groups?.map((group) =>
        group.gatherings?.map((gathering) =>
          <tbody>
            <td key={gathering._id}>{gathering.name}</td>
            <td key={gathering._id}>{gathering.location}</td>
            <td key={gathering._id}>{gathering.date}</td>
          </tbody>
        )
      )}
    </table>
  );
}

export default ProfileGatherings;