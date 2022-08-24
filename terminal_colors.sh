#!/bin/bash
# bash script to display colored messages
echo "8 colors"
s=''
for i in {0..7}; do
    s+=\\033[$[30+i]m'\\'033[$[30+i]m' '
done
printf "$s"\\033[0m"\n"

s=''
for i in {0..7}; do
    s+=\\033[$[40+i]m'\\'033[$[40+i]"m "
done
printf "$s"\\033[0m"\n"

printf '256 colors "\\033[38;5;'\\033[31mcode\\033[0m'm"\n'
for i in {0..15}; do
    s=''
    for j in {0..15}; do
        a=$[i*16+j]
        s+=\\033[38\;5\;$a"m"
        line="   "
        s+=`printf "%s%s " "${line:${#a}}" $a`
    done
    printf "$s"\\033[0m'\n'
done
echo

printf '256 colors "\\033[48;5;'\\033[31mcode\\033[0m'm"\n'
for i in  {0..15}; do
    s=''
    for j in  {0..15}; do
        a=$[i*16+j]
        s+=\\033[48\;5\;$a"m"
        line="   "
        s+=`printf "%s%s " "${line:${#a}}" $a`
    done
    printf "$s"\\033[0m'\n'
done


