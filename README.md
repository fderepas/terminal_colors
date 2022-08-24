# terminal_colors
A simple Bash, C, JS or Python code to display colors in the terminal. Output of each scipt is:

![all colors](https://github.com/fderepas/terminal_colors/blob/main/colors.png?raw=true)
 
# explanation

When the terminal receives the sequence of ascii character 27, 91, 51, 49, 109 it will start to printf things in red.

Ascii character 27 has octal value 33, so is represented by ```\033```. Characters corresponding to ascii codes 91, 51, 49, 109 are ```[31m```. Hence complete sequence of 5 characters is written ```\033[31m```.

To go back to previous color the sequence ```\033[0m``` should be send to the terminal.