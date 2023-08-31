interface Props {
    name: string,
    changeName: () => void;
}

const Player = ({name, changeName}: Props) => {
  return (
    <>
    <div>Player name: {name}</div>
    <button onClick={changeName}>Change Name To Bob</button>
    </>
  )
}

export default Player