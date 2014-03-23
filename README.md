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
print factorial of 4
```
Fibonacci:
```python
new function fibonacci of n
    set i to 0
    set a to 0
    set b to 1
    set temp to 0
    as long as i is less than n
        increase i by 1
        set temp to a plus b
        set a to b
        set b to temp
    return b
print fibonacci of 15
```

Life, Univeres, and Everything:
```python
define new function lifeUniverseAndEverything of s
	let i be 0
	as long as i is less than s.length
		if s[i] is equal to 42
			return i;
		increase i by 1
	return -1

s = [1,23,4,2241,3,223,623,42,5,554,3634];
print lifeUniverseAndEverything(s)
```
