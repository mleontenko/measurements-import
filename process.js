const testFolder = 'data/Corridor_rm155_7.1';
const fs = require('fs');
const fastcsv = require('fast-csv');

// Lista subfoldera
var subfoldersarr=[];

// Popuni listu subfoldera
fs.readdirSync(testFolder).forEach(file => {
  subfoldersarr.push(file);
});

// Prođi kroz subfoldere, pokupi sadržaj csv datoteka i obradi ih
for(i=0; i<subfoldersarr.length; i++){
		
	process("Lab_139_1Ch1", i);
	process("Lab_139_2Ch1", i);
	process("Lab_139_3Ch1", i);
	process("Lab_139_4Ch1", i);
	process("Lab_139_5Ch1", i);
	process("Lab_139_6Ch1", i);
	process("Lab_139_7Ch1", i);
	process("Lab_139_8Ch1", i);
	process("Lab_139_9Ch1", i);
	process("Lab_139_10Ch1", i);
	
}

function process(filename, idx) {
	var filepath = testFolder+'/'+subfoldersarr[idx]+'/'+filename+'.csv';
		
	fs.readFile(filepath, 'utf8', function (err, data) {
	  var dataArray = data.split(/\r?\n/);
	  dataArray.splice(0,2);
	  //var newtext = dataArray.join('\n');
	  
	  var csv = dataArray.map((e) => {
		return e.replace(/;/g, ",");
	  });
	  
	  var storepath='newdata/Corridor_rm155_7.1/'+subfoldersarr[idx]+'/'+filename+'.csv';
	  
	  fs.writeFile(storepath, csv.join("\r\n"), (err) => {
		console.log(err || "done");
	  });
	});	
}