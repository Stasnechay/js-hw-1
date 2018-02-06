var name = prompt('Кто пришёл?') ;
 if (name == 'админ') {
    var pass = prompt('Password?');
    if (pass == 'Чёрный Властелин') {
      alert('Welcome!');
    } else if (pass == null) {
      alert('canceled');
    } else {
      alert('Пароль неверен')
    }
 }   else if (name == null) {
      alert('Canceled');
 }  else {
    alert('Я вас не знаю!');
 }
       