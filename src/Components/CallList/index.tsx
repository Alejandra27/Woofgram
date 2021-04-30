import NavigationBar from "../NavigationBar";
import CallRecords, { callRecord } from "../../../data/callsRecord";
import CallPreviewCell from "../../Components/CallPreviewCell";
import RecentCallItem from "../RecentCallsItem";

const CallList = (props) => {
  const callsRecord = (c: callRecord) => <CallPreviewCell key={c.id} {...c} />;

  const calls = CallRecords.map(callsRecord);

  return (
    <>
      <NavigationBar
        leftButton={<span id="editButton">Edit</span>}
        title="Calls"
        rightButton={
          <img
            className="iconButton"
            alt="Compose Button"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAB80lEQVRIie2UvWsUURTFf/ftRESjjWhkUMFxwTSWCoaITf4AlVgIail2YmMUdBnGRBuRtKkDKdSAlV1sXEEQKwuJ7I5R2I0WNkZRYuZdi2TYmdn5iGKnp3r3451z7uPy4D8qIMmg43tjYnUGxAMs8KpmzbmhyVa7iKDb8J4D1g3CE3l1k1Lrkce1o7ZmJytMjgCjRUWTDmVbtkGVIxUCpXAyAougezM9B7KXNp5lJJPTjWMz+VzpCcQu5pjYrmepZXK2xLQmg9QEqvJC4FKm/ak8JEqmkg5j524QphYmRmqCrcbMA997GXnj1OyFEreVSAns8ltfgCcAAi35KSf3+EsfKziawLOiotOXMUxjOaMwFBmzpcph0f736LIX/LAp6ANgR82sTVcJVKFPAEAjJoBvCOPdhnf1rwu4U+/eY+Q86+t4b9k/OF5EoH4+R4zc1YrRveVdR7gLRCjX3Nvh/bi2fKO+Wx07hzAGrAAfRHhtInMz+XeVCgB0Gt6EwB3Wp52PIueKY+2qDtgFyP1GXrpBeGzTAgBd/9AprM4Cg8CKwCeFekH7mhuEA3FQ+n4xXL/9OIqcYZBZYLCEvM/0pgQA9k+97bhB+6IaGUV5BPwoaF0qVPsdfPbrO1etnlb0OKqHERkW+BrB5X1BuPCnvP8gfgHFGp8IVKRIyQAAAABJRU5ErkJggg=="
          />
        }
      />
      <RecentCallItem />
      {calls}
    </>
  );
};

export default CallList;
