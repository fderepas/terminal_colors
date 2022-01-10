// nodejs program to display colored messages
// execute with
let s='';
console.log("8 colors");
for (let i=0;i<8;++i) {
    s+="\033["+(30+i)+"m\\033["+(30+i)+"m ";
}
console.log(s+"\033[0m");
s='';

for (let i=0;i<8;++i) {
    s+="\033["+(40+i)+"m\\033["+(40+i)+"m ";
}
console.log(s+"\033[0m\n");

console.log("256 colors \"\\033[38;5;\033[31mcode\033[0mm\"");
for (let i=0;i<16;++i) {
    s='';
    for (let j=0;j<16;++j) {
	s+="\033[38;5;"+((i<<4)+j)+"m"+((i<<4)+j).toString().padStart(3, ' ')+" ";
    }
    console.log(s+"\033[0m");
}
console.log("\033[0m");

console.log("256 colors \"\\033[48;5;\033[31mcode\033[0mm\"");
for (let i=0;i<16;++i) {
    s='';
    for (let j=0;j<16;++j) {
	s+="\033[48;5;"+((i<<4)+j)+"m"+((i<<4)+j).toString().padStart(3, ' ')+" ";

    }
    console.log(s+"\033[0m");
}
console.log("\033[0m");
