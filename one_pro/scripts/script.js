// One used
let sogl = ['да', 'согласен', 'угу', 'ага', 'дэ', 'верно', 'соглы']
let priv = ["прив", "здар", "здра", "сала", "шало"]
// Always used
var sex = 0; // 1 - муж(3), 2 - жен(4)
var charact = '\n🤡:' // безликий
var bot = '\n🤖: ' // Бот
let mesers = [] // список сообщений
var count_xz = 0; // список вопросов без предв-го ответа
var name = ''; // имя пользователя


function fir(){
    text = document.getElementById('valueID').value;    // Забираем текст с input
    document.getElementById('valueID').value = '';  // input = ''
    var Area = document.getElementById("messangers"); // Обнаруживаем Area
    if(text != ''){
        mesers.push(text) // Добавляем сообщение в массив
        Area.value += charact + text; // Добавляем  сообщение в Area пользователя
        Area.value += bot + answer(text)
    }
    else{
        var audio = new Audio();
 		audio.src = 'src/stop.mp3';
  		audio.autoplay = true;
        alert('Не обманеш!');
    }
}

function only_russia(e) {
    t = true
    for(var i = 0; i < e.length; i++){
        if(!(e.codePointAt(i) > 1039 && e.codePointAt(i) < 1104)){
            t = false}}
    return t;
}

function what_name(names){
    let last = names.slice(-1).toLowerCase();
    if(last == 'р' || last == 'й' || last == 'н' || last == 'д' || last == 'с' || last == 'в' || last == 'ж' || last == 'й' || names == 'Добрыня' || last == 'т' ){
        charact = '\n🕺: ';
        sex = 3;
    }else{
        charact = '\n👩: ';
        sex = 4;
    }
    name = names;
    delete last;
    return
}

function answer(quest){
if(name == ''){
    if(quest.split(' ').length - 1 > 0 || !only_russia(quest)){
        return 'Введи одним словом или же ник, русскими буквами!';
    }
    else{
        what_name(quest)
        return `Система выбрала вам пол ${(sex == 3)? 'мужской': 'женский'}, верно?`
    }
}
else if(sex > 2){
    if(sogl.indexOf(quest.toLowerCase)){
		console.log('User say yes', quest);
        sex -= 2;
        return `Ваш пол выставлен ${(sex == 2)? 'женский': 'мужской'}`
    }else{
		console.log('User say no');
        sex = (sex == 4)? 1:2;
        charact = (sex == 1)? '\n🕺: ':'\n👩: ';
        return `Ваш пол выставлен ${(sex == 2)? 'женский': 'мужской'}`}
}
else{
    // Приветствие 
    if(priv.indexOf(quest.slice(0,4).toLowerCase)){
        return 'Привет - привет!';
    }
    // Админ ответ
    else if('admin' == quest){
        return 'Держите: [' + mesers + ']';
        }
    // Нету готового ответа
    else{
        count_xz += 1;
        var ran_ans = ['Я пожалуй проигнорирую...', `${name}, я надеюсь у тебя всё хорошо!)`, 'Расскажи, как день:)']
        return ran_ans[Math.floor(Math.random() * Math.floor(ran_ans.length ))]
}}}