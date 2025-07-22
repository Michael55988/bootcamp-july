# STRINGS - 
# text, defined with quotation marks ' ' or " "

# 'hello world' 

# VARIABLES- 
# it is like "boxes" where i cann store data

greeting = 'Hello World'

# PRINT() - 
# a fonction that prints what i want in the console

print(greeting)
# it will print "Hello World" in my console


# STRINGS METHODES-
# We can manipulate strings using built-in functions.

print(greeting.capitalize())
print(greeting.upper())
print(greeting.lower())


# INDEX -  []  starting from 0
print(greeting[1:8])




# exercice
#Working with the following string:

# description = "strings are..."

# make it all uper case
# replace the word "are" to "is"
# print just the word "strings"

description = 'strings are ...'

print(description.upper())
print(description.replace('are', 'is'))
print(description[0:7]) #or print(description[:7])     si je fais [0:7] ou [:7] cest kifkif  le fait de pas ecrire le 0 ca veut dire que je veux tout du debut jusqua lindex de fin que je note




# NUMBERS -
# integers - numero  complets
# floats - numero a virgule

my_fav_num = 5
print(type(my_fav_num))

my_high = 1.75
print('my high is', my_high, 'meters')

print(3 + 4)
print(3 - 2)
print(3 * 4)
print(15 / 3)
print(15 + 5 * 2)


# MATH WITH STRINGS- 
print('Michael ' * 5)
print('michael' + '55')



# EXERCICE
# In the python shell, Create a variable called my_age, use python to know how old you will be in 123879 years

age = 27
print(int(age) + 123879)
print(age + int(123879))
print(age + 123879)



# INPUT- ask the user something

# user_name = input("what\'s your name? ")
# print('my name is', user_name)



# EXERCICE 
# 1. ask the user to enter his/her name

# 2. use the len() function to check the lenght of the name. if it is less than 5 letter print('You have a short name :)')

user_name2 = input("What is your name? ")
if len(user_name2) < 5: 
    print('you have a short name')
else:
    print("you'r name is",user_name2)