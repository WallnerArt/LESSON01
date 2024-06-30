const root = ReactDOM.createRoot(document.getElementById("root"));

const Champion = () => {
  // Инициализация начальных чемпионов с именами и изображениями
  const initialChampions = [
    { id: Math.random(), name: "Роберт Циммерман", image: "url1" },
    { id: Math.random(), name: "Эдвард Вестерлунд", image: "url2" },
    { id: Math.random(), name: "Эдвард Вестерлунд", image: "url3" },
    { id: Math.random(), name: "Фредрик Янсон", image: "url4" },
    { id: Math.random(), name: "Рудольф Шюнгель", image: "url5" },
    { id: Math.random(), name: "Георг Лурич", image: "url6" },
    { id: Math.random(), name: "Георг Лурич", image: "url7" },
    { id: Math.random(), name: "Каспер Андерсон", image: "url8" },
    { id: Math.random(), name: "Альфред Асиказинен", image: "url9" },
    { id: Math.random(), name: "Оскар Фриман", image: "url10" },
    { id: Math.random(), name: "Эмиль Варе", image: "url11" },
    { id: Math.random(), name: "Ханс Кеммер", image: "url12" },
    { id: Math.random(), name: "Эрнст Нильссон", image: "url13" }
  ];

  const [champions, setChampions] = React.useState(initialChampions); // Состояние для списка чемпионов
  const [isEdit, setIsEdit] = React.useState(false); // Состояние для режима редактирования
  const [editedChampion, setEditedChampion] = React.useState(null); // Состояние для редактируемого чемпиона

  // Функция для начала редактирования чемпиона
  const handleEdit = (champion) => {
    setIsEdit(true);
    setEditedChampion(champion);
  };

  // Функция для удаления чемпиона
  const handleDelete = (id) => {
    setChampions(champions.filter(champion => champion.id !== id));
  };

  // Функция для обновления состояния редактируемого чемпиона
  const handleChange = (e, field) => {
    setEditedChampion({ ...editedChampion, [field]: e.target.value });
  };

  // Функция для сохранения изменений чемпиона
  const handleSave = () => {
    setChampions(champions.map(champion => 
      champion.id === editedChampion.id ? editedChampion : champion
    ));
    setIsEdit(false);
    setEditedChampion(null);
  };

  return (
    <div> {/* Самый внешний элемент */}
      {champions.map(champion => {
        console.log(`Rendering champion with key: ${champion.id}`);
        return (
          <div key={champion.id}>
            <img src={champion.image} alt={champion.name} style={{ width: '100px', height: '100px' }} />
            <p>{champion.name}</p>
            <button onClick={() => handleEdit(champion)}>Редактировать</button>
            <button onClick={() => handleDelete(champion.id)}>Удалить</button>
          </div>
        );
      })}
      {isEdit && editedChampion && (
        <div>
          <textarea value={editedChampion.name} onChange={(e) => handleChange(e, 'name')}></textarea>
          <input type="text" value={editedChampion.image} onChange={(e) => handleChange(e, 'image')} />
          <button onClick={handleSave}>Сохранить</button>
        </div>
      )}
    </div>
  );
};

root.render(
  <Champion />
);
