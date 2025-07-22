# 1. Ask for User Input:
# The string must be exactly 10 characters long.

# 2. Check the Length of the String:
# If the string is less than 10 characters, print: "String not long enough."
# If the string is more than 10 characters, print: "String too long."
# If the string is exactly 10 characters, print: "Perfect string" and proceed to the next steps.

# 3. Print the First and Last Characters:
# Once the string is validated, print the first and last characters.

# 4. Build the String Character by Character:
# Using a for loop, construct and print the string character by character. Start with the first character, then the first two characters, and so on, until the entire string is printed.
# Hint: You can create a loop that goes through the string, adding one character at a time, and print it progressively.

# 5. Bonus: Jumble the String (Optional)
# As a bonus, try shuffling the characters in the string and print the newly jumbled string.
# Hint: You can use the random.shuffle function to shuffle a list of characters.






user_input = input('write a 10 characters string: ')
if len(user_input) < 10:
    print('String not long enought.')
elif len(user_input) > 10:
    print('String is too long.')
else:
    print('Perfect string.')

fisrt_char = user_input[0]
last_char = user_input[-1]
print(fisrt_char,last_char)

#range(1caractere, la longueur de mon string +1)      en gros le 1 cest le nombre de caratere que je veux a la premiere ligne. et apres la , ca sera le reste des caractere du string aux quels je rajoute un caractere a chaque lignes
for i in range(1,len(user_input) + 1):     
    print(user_input[:i])

import random
char_list = list(user_input)   #random.shuffle fonctionne pas avec un str donc je dois le changer en liste
random.shuffle(char_list)   # melange les characteres de ma liste
shuffled_string = ''.join(char_list)  #.join reforme le tout en string
print(shuffled_string) 