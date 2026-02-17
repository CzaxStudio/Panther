// =============================
// Panther Full Feature Demo
// =============================

Compute("=== Panther Language Demo ===")

// ----- Accept input -----
name = Accept("Enter your name: ")
age = Accept("Enter your age: ")
num1 = Accept("Enter first number: ")
num2 = Accept("Enter second number: ")

// ----- String usage -----
Compute("Hello " + name)

// ----- Arithmetic -----
sum = num1 + num2
difference = num1 - num2
product = num1 * num2
division = num1 / num2

Compute("Addition: " + sum)
Compute("Subtraction: " + difference)
Compute("Multiplication: " + product)
Compute("Division: " + division)

// ----- Condition Operators -----

If(age > 18)
{
    Compute("You are an adult.")
}
ElseIf(age == 18)
{
    Compute("You just became an adult.")
}
Else
{
    Compute("You are a minor.")
}

// Equality
If(num1 == num2)
{
    Compute("Numbers are equal.")
}
ElseIf(num1 != num2)
{
    Compute("Numbers are not equal.")
}

// Greater / Less
If(num1 >= num2)
{
    Compute("First number is greater or equal.")
}
Else
{
    Compute("Second number is greater.")
}

If(num1 <= num2)
{
    Compute("First number is smaller or equal.")
}
Else
{
    Compute("First number is greater.")
}

// ----- Mixed string + number -----
Compute("Next year you will be: " + (age + 1))

Compute("=== End of Demo ===")

