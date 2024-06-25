const root = ReactDOM.createRoot(document.getElementById("root"));

const Champion = ({champion1, champion2, champion3, champion4, champion5, champion6, champion7, champion8, champion9, champion10, champion11, champion12, champion13}) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const [updatedChampions, setUpdatedChampions] = React.useState({
    champion1, champion2, champion3, champion4, champion5, champion6, champion7, champion8, champion9, champion10, champion11, champion12, champion13
  });
  const inputRefs = Array.from({ length: 13 }, () => React.createRef());

  const handleClickSave = () => {
    const newChampions = inputRefs.map(ref => ref.current.value);
    setUpdatedChampions({
      champion1: newChampions[0],
      champion2: newChampions[1],
      champion3: newChampions[2],
      champion4: newChampions[3],
      champion5: newChampions[4],
      champion6: newChampions[5],
      champion7: newChampions[6],
      champion8: newChampions[7],
      champion9: newChampions[8],
      champion10: newChampions[9],
      champion11: newChampions[10],
      champion12: newChampions[11],
      champion13: newChampions[12],
    });
    setIsEdit(false);
  };

  return isEdit ? (
    <>
      {Object.keys(updatedChampions).map((key, index) => (
        <div key={index}>
          <textarea ref={inputRefs[index]} defaultValue={updatedChampions[key]}></textarea>
        </div>
      ))}
      <button onClick={handleClickSave}>Сохранить</button>
    </>
  ) : (
    <>
      {Object.keys(updatedChampions).map((key, index) => (
        <p key={index}>{updatedChampions[key]}</p>
      ))}
      <button onClick={() => setIsEdit(true)}>Редактировать</button>
    </>
  );
};

// Cписок первых чемпионов мира по классической греко-римской борьбе, начиная с первых мировых чемпионатов, которые прошли в 1904 году
const champions = {
  champion1: "Роберт Циммерман",
  champion2: "Эдвард Вестерлунд",
  champion3: "Эдвард Вестерлунд",
  champion4: "Фредрик Янсон",
  champion5: "Рудольф Шюнгель",
  champion6: "Георг Лурич",
  champion7: "Георг Лурич",
  champion8: "Каспер Андерсон",
  champion9: "Альфред Асиказинен",
  champion10: "Оскар Фриман",
  champion11: "Эмиль Варе",
  champion12: "Ханс Кеммер",
  champion13: "Эрнст Нильссон"
};

root.render(
  <>
    <Champion {...champions} />
  </>
);
