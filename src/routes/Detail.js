import { useParams } from "react-router-dom";
import { connect } from "react-redux";

function Detail({ toDos }) {
  const { id } = useParams();
  const toDo = toDos.find((toDo) => toDo.id === parseInt(id));

  function getTime(string) {
    const offset = new Date().getTimezoneOffset() * 60000;
    const date = new Date(string - offset);
    return date.toISOString().replace("T", " ").slice(0, 16);
  }

  return (
    <>
      <h2>{toDo?.text}</h2>
      <br />
      Created at: {toDo && getTime(toDo.id)}
    </>
  );
}

function mapStateToProps(state, ownProps) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
