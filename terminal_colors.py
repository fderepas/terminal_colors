# python program to display colored messages
s=''
print("8 colors");
for i in range(8):
    s+="\033["+str(30+i)+"m\\033["+str(30+i)+"m "
print(s+"\033[0m")

s=''
for i in range(8):
    s+="\033["+str(40+i)+"m\\033["+str(40+i)+"m ";
print(s+"\033[0m\n");

print("256 colors \"\\033[38;5;\033[31mcode\033[0mm\"");
for i in range(16):
    s=''
    for j in range(16):
        a=str((i<<4)+j).ljust(3)
        s+=("\033[38;5;"+str((i<<4)+j)+"m"+a+" ")
    print(s+"\033[0m")
print("\033[0m")

print("256 colors \"\\033[48;5;\033[31mcode\033[0mm\"")
for i in range(16):
    s=''
    for j in range(16):
        a=str((i<<4)+j).ljust(3)
        s+=("\033[48;5;"+str((i<<4)+j)+"m"+a+" ")
    print(s+"\033[0m")
print("\033[0m")
