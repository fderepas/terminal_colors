// compile with: "rustc terminal_colors.rs"
fn main() {
    println!("8 colors"); 

    for i in 0..8 {
        print!("\x1b[{}m\\x1b[{}m ",30+i,30+i);
    }
    println!("\x1b[0m");
    
    for i in 0..8 {
        print!("\x1b[{}m\\x1b[{}m ",40+i,40+i);
    }
    println!("\x1b[0m");

    println!("256 colors \"\\x1b[38;5;\x1b[31mcode\x1b[0mm\""); 
    for i in 0..16 {
        for j in 0..16 {
            print!("\x1b[38;5;{}m{:3} ",(i<<4)+j,(i<<4)+j);
        }
        println!("\x1b[0m");
    }
    println!("\x1b[0m");
    
    println!("256 colors \"\\x1b[48;5;\x1b[31mcode\x1b[0mm\""); 
    for i in 0..16 {
        for j in 0..16 {
            print!("\x1b[48;5;{}m{:3} ",(i<<4)+j,(i<<4)+j);
        }
        println!("\x1b[0m");
    }
    println!("\x1b[0m");
    

}