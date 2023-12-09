# terminal_colors
A simple Bash, C, JS or Python code to display colors in the terminal. Output of each script is:

![all colors](https://github.com/fderepas/terminal_colors/blob/main/colors.png?raw=true)
 
# explanation

When the terminal receives the sequence of ascii characters 27, 91, 51, 49, 109 it will start to print things in red.

Ascii character 27 has octal value 33, so it is represented by ```\033``` in octal or ```\x1b``` in hexadecimal. It corresponds to the escape key on the keyboard. Characters corresponding to ascii codes 91, 51, 49, 109 are ```[31m```. Hence complete sequence of 5 characters is written ```\033[31m``` or ```\x1b[31m```.

To go back to previous color the sequence ```\033[0m``` should be sent to the terminal.

# examples

To display a message in red in nodejs:
```js
console.log("\033[31mmessage in red\033[0m")
```
To display a blue message with green background in python:
```python
print("\033[42m\033[34mblue message with green background\033[0m")
```

To display a light green message in rust:
```rust
println!("\x1b[48;5;120mThis message is light green.\x1b[0m");
```

