const root = ReactDOM.createRoot(document.getElementById("root"));

const Champion = () => {
  // Инициализация начальных чемпионов с именами и изображениями
  const initialChampions = [
    { id: 1, name: "Роберт Циммерман", image: "url1" },
    { id: 2, name: "Эдвард Вестерлунд", image: "url2" },
    { id: 3, name: "Эдвард Вестерлунд", image: "url3" },
    { id: 4, name: "Фредрик Янсон", image: "url4" },
    { id: 5, name: "Рудольф Шюнгель", image: "url5" },
    { id: 6, name: "Георг Лурич", image: "url6" },
    { id: 7, name: "Георг Лурич", image: "url7" },
    { id: 8, name: "Каспер Андерсон", image: "url8" },
    { id: 9, name: "Альфред Асиказинен", image: "url9" },
    { id: 10, name: "Оскар Фриман", image: "url10" },
    { id: 11, name: "Эмиль Варе", image: "url11" },
    { id: 12, name: "Ханс Кеммер", image: "url12" },
    { id: 13, name: "Эрнст Нильссон", image: "url13" }
  ];

  const [champions, setChampions] = React.useState(initialChampions); // Состояние для списка чемпионов
  const [isEdit, setIsEdit] = React.useState(false); // Состояние для режима редактирования
  const [editedChampion, setEditedChampion] = React.useState(null); // Состояние для редактируемого чемпиона

  // Редактирование: При нажатии на кнопку "Редактировать", 
  // соответствующий чемпион устанавливается в editedChampion, 
  // а isEdit становится true для отображения формы редактирования


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
    setEditedChampion({ ...editedChampion, [field]: e.target.value });  // оператор spread (распространения) используется для      
  };                                                                    // копирования всех свойств объекта editedChampion в новый                                                                // объект.

  // Функция для сохранения изменений чемпиона
  const handleSave = () => {
    setChampions(champions.map(champion => 
      champion.id === editedChampion.id ? editedChampion : champion
    ));
    setIsEdit(false);
    setEditedChampion(null);
  };

  return (
    <>
      {champions.map(champion => (
        <div key={champion.id}>
          <img src={champion.image} alt={champion.name} style={{ width: '100px', height: '100px' }} />
          <p>{champion.name}</p>
          <button onClick={() => handleEdit(champion)}>Редактировать</button>
          <button onClick={() => handleDelete(champion.id)}>Удалить</button>
        </div>
      ))}
      {isEdit && editedChampion && (
        <div>
          <textarea value={editedChampion.name} onChange={(e) => handleChange(e, 'name')}></textarea>
          <input type="text" value={editedChampion.image} onChange={(e) => handleChange(e, 'image')} />
          <button onClick={handleSave}>Сохранить</button>
        </div>
      )}
    </>
  );
};

root.render(
  <>
    <Champion />
  </>
);

 // Использование оператора spread позволяет удобно и безопасно обновлять объекты в состоянии, не изменяя исходный объект напрямую, что важно для соблюдения принципов неизменяемости в React.
