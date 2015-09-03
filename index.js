var util = require('util');

module.exports = function(date){
  var date = typeof date === 'string' ? new Date(date) : date;

  if(util.isDate(date)) {
    date = formatedDate(date);
    return date;
  } else{
    throw Error("Tem que passar uma data");
  }
}

function formatedDate(data){
    var data = new Date(data);
    var dia = data.getDate();
    if (dia.toString().length == 1)
      dia = "0"+dia;
    var mes = data.getMonth()+1;
    if (mes.toString().length == 1)
      mes = "0"+mes;
    var ano = data.getFullYear();
    return dia+"/"+mes+"/"+ano;
}
