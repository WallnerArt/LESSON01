class Character {
    constructor(name, health, level) {
        this.name = name;
        this.health = health;
        this.level = level;
    }

    introduce() {
        console.log(`Приветствую, мое имя ${this.name}, я на ${this.level} уровне, и мое здоровье составляет ${this.health}.`);
    }
}

class Warrior extends Character {
    constructor(name, health, level, weapon) {
        super(name, health, level);
        this.weapon = weapon;
    }

    attack() {
        console.log(`${this.name} атакует своим ${this.weapon}!`);
    }
}

class Wizard extends Character {
    constructor(name, health, level, spell) {
        super(name, health, level);
        this.spell = spell;
    }

    castSpell() {
        console.log(`${this.name} творит заклинание ${this.spell}!`);
    }
}

// Создание персонажей
const warrior = new Warrior("Храбрый", 100, 5, "мечом");
const wizard = new Wizard("Мудрый", 80, 7, "огонь");

// Отображение диалога
const warriorDialog = document.getElementById("warrior-dialog");
const wizardDialog = document.getElementById("wizard-dialog");

// Ввод текста пользователем
warriorDialog.innerHTML = `<input type="text" id="warrior-input">`;
wizardDialog.innerHTML = `<input type="text" id="wizard-input">`;

const warriorInput = document.getElementById("warrior-input");
const wizardInput = document.getElementById("wizard-input");

// Обработка сообщения воина
warriorInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const warriorMessage = warriorInput.value;
        warriorDialog.innerHTML += `<p class="character-message">${warrior.name}: ${warriorMessage}</p>`;
        wizardDialog.innerHTML += `<p class="character-message">${wizard.name}: ...</p>`;

        if (warriorMessage === "?") {
            wizard.introduce();
        } else {
            wizard.castSpell();

            // Ответ мага на атаку воина
            setTimeout(() => {
                wizardDialog.innerHTML += `<p class="character-message">${wizard.name}: Не одолеть мне тебя, воин, силой магии!</p>`;
                warriorDialog.innerHTML += `<p class="character-message">${warrior.name}: Докажи же, маг!</p>`;

                // Инициализация переменной для отслеживания хода диалога
                let dialogStep = 0;

                // Динамический диалог
                switch (dialogStep) {
                    case 0:
                        // Ответ мага
                        setTimeout(() => {
                            wizardDialog.innerHTML += `<p class="character-message">${wizard.name}: Твоя сила впечатляет, воин, но моя магия не уступает!</p>`;
                            warriorDialog.innerHTML += `<p class="character-message">${warrior.name}: Тогда покажи же, что умеешь!</p>`;
                            dialogStep++;
                        }, 1000);
                        break;
                    case 1:
                        // Заклинание мага
                        setTimeout(() => {
                            wizardDialog.innerHTML += `<p class="character-message">${wizard.name}: Огненный шар!</p>`;
                            // Визуальный эффект заклинания (например, анимация)
                            warriorDialog.innerHTML += `<p class="character-message">${warrior.name}: (Отскакивает от огненного шара)</p>`;
                            dialogStep++;
                        }, 1500);
                        break;
                    case 2:
                        // Ответ воина
                        setTimeout(() => {
                            warriorDialog.innerHTML += `<p class="character-message">${warrior.name}: Неплохо, но недостаточно!</p>`;
                            wizardDialog.innerHTML += `<p class="character-message">${wizard.name}: Не унывай, воин, бой только начинается!</p>`;
                            dialogStep++;
                        }, 1000);
                        break;
                    // ... (добавьте больше шагов диалога) ...
                }
            }, 1000); // Задержка ответа мага на 1 секунду
        }

        warriorInput.value = "";
    }
});

// Обработка сообщения мага
wizardInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const wizardMessage = wizardInput.value;
        wizardDialog.innerHTML += `<p class="character-message">${wizard.name}: ${wizardMessage}</p>`;
        warriorDialog.innerHTML += `<p class="character-message">${warrior.name}: ...</p>`;

        if (wizardMessage === "?") {
            warrior.introduce();
        } else {
            warrior.attack();
        }

        wizardInput.value = "";
    }
});

// Отображение информации о персонажах
warrior.introduce();
wizard.introduce();

// Начало диалога
warriorDialog.innerHTML += `<p class="character-message">${warrior.name}: Приветствую, мудрый маг!</p>`;
