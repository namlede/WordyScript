WordyScript
=========

Compile pseudocode to JavaScript on the web!
-------------------------------

<p>WordyScript is a free educational tool that allows users who are unfamiliar with JavaScript or with programming in general to write pseudocode that will compile to JavaScript.  With its intuitive, freeform, Python-like syntax and real-time compiling, WordyScript allows users to see a side-by-side comparison of how their code looks versus how the actual JavaScript would read, enabling them to learn JavaScript while coding.</p>

<p>WordyScript works by parsing the pseudocode input into Python code, and then converting the Python code into JavaScript using <a href=http://rapydscript.pyjeon.com/>RapydScript</a> which can then be run with a simple eval.  The website enables the user to edit text to use as code in-browser trough the use of <a href=http://codemirror.net/>CodeMirror</a>. The back-end was made in <a href="nodejs.org">Node.js</a>.</p>

Programmers:
Jacob Edelman, Ben Edelman, Alok Tripathy, Aaron Berger

Sample Code
------------
Factorial:
```python
define a new function factorial of n
	if n equals 0
		return 1
	return n times factorial of (n minus 1)
print(factorial of 4)
```
Fibonacci:
```python
new function fibonacci of n
    i equals 0
    a equals 0
    b equals 1
    temp equals 0
    as long as i is less than n
        increase i by 1
        temp equals (a plus b)
        a equals b
        b equals temp
    return b
print (fibonacci of 11)
```
