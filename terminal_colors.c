// compile with gcc -o tc terminal_colors.c
#include <stdio.h>
#include <stdlib.h>

int main () {
  printf("8 colors\n");
  for (int i=0;i<8;++i) {
    printf("\033[%dm\\033[%dm ",30+i,30+i);
  }
  printf("\033[0m\n");
  for (int i=0;i<8;++i) {
    printf("\033[%dm\\033[%dm ",40+i,40+i);
  }
  printf("\033[0m\n");
  
  printf("256 colors \"\\033[38;5;\033[31mcode\033[0mm\"\n");
  for (int i=0;i<16;++i) {
    
    for (int j=0;j<16;++j) {
      printf("\033[38;5;%dm%4d ",(i<<4)+j,(i<<4)+j);
    }
    printf("\033[0m\n");
  }
  printf("\033[0m\n");
  
  printf("256 colors \"\\033[48;5;\033[31mcode\033[0mm\"\n");
  for (int i=0;i<16;++i) {
    
    for (int j=0;j<16;++j) {
      printf("\033[48;5;%dm%4d ",(i<<4)+j,(i<<4)+j);
    }
    printf("\033[0m\n");
  }
  printf("\033[0m\n");
  return 0;
}
