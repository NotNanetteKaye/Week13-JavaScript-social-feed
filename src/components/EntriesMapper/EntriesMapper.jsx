import EntryPresenter from "../EntryPresenter";

const EntriesMapper = (props) => {
  return (
    <ul>
      {props.userEntries.map((element) => (
        <li>
          <EntryPresenter postObject={element} />
        </li>
      ))}
    </ul>
  );
};

export default EntriesMapper;
