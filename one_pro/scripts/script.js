var sex = 0;
var charact = '\n🤡:'
var bot = '\n🤖: '
let mesers = []
var count_xz = 0;
var name;
function fir(){
    text = document.getElementById('valueID').value;    // Забираем текст с input
    document.getElementById('valueID').value = '';  // input = ''
    var Area = document.getElementById("messangers"); // Обнаруживаем Area
    if(text != ''){
        mesers.push(text) // Добавляем сообщение в массив
        Area.value += charact + text; // Добавляем  сообщение в Area
        Area.value += bot + answer(text)
    }
    else{
        var audio = new Audio();
 		audio.src = 'src/stop.mp3';
  		audio.autoplay = true;
        alert('Не обманеш!');
    }
}

function what_name(names){
    let last = names.slice(-1).toLowerCase();
    if(last == 'р' || last == 'й' || last == 'н' || last == 'д' || last == 'с' || last == 'в' || last == 'с' || last == 'й' || names == 'Добрыня' || last == 'т'){
        charact = '\n🕺: '
        sex = 1
    }else{
        charact = '\n👩: '
        sex = 2
    }
    name = names;
    delete last;
    return
}

function answer(quest){
if(sex == 0){
    if(text.split(' ').length - 1 > 0){
        return 'Введи одним словом или же ник...';
    }
    else{
        what_name(quest)
        return 'Оооо, привет, ' + quest + ', как твои дела?'
    }
}
else{
    // Приветствие 
    if('прив' == text.slice(0,4).toLowerCase() || 'здар' == text.slice(0,4).toLowerCase() || 'здра' == text.slice(0,4).toLowerCase()){
        Area.value += bot + 'Привет - привет!';
    }
    // Админ ответ
    else if('admin' == text){
        Area.value += bot + 'Держите: [' + mesers + ']'
        }
    // Нету готового ответа
    else{
        count_xz += 1;
        switch(count_xz){
        case 1:
            return 'Я пожалуй проигнорирую...';
        case 2:
            return name +', я надеюсь у тебя всё хорошо!)';
        case 3:
            count_xz = 0;
            return 'Расскажи, как день:)';
        }
}}}