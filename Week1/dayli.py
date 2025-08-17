

# Goal: Create a dictionary that stores the indices (number of the position) of each letter in a word provided by the user(input()).


# Key Python Topics:

# User input (input())
# Dictionaries
# Loops (for loop)
# Conditional statements (if, else)
# String manipulation
# Lists


# Instructions:
# 1. User Input:

# Ask the user to enter a word.
# Store the input word in a variable.
# 2. Creating the Dictionary:

# Iterate through each character of the input word using a loop.
# And check if the character is already a key in the dictionary.
# If it is, append the current index to the list associated with that key.
# If it is not, create a new key-value pair in the dictionary.
# Ensure that the characters (keys) are strings.
# Ensure that the indices (values) are stored in lists.
# 3. Expected Output:

# For the input “dodo”, the output should be: {"d": [0, 2], "o": [1, 3]}.
# For the input “froggy”, the output should be: {"f": [0], "r": [1], "o": [2], "g": [3, 4], "y": [5]}.
# For the input “grapes”, the output should be: {"g": [0], "r": [1], "a": [2], "p": [3], "e": [4], "s": [5]}.






user_word = input('Enter a word: ')
print('you wrote:', user_word)

word = {}

for index, letter in enumerate(user_word):
    if letter in word:
        word[letter].append(index)
    else:
        word[letter] = [index]

print(word)




# exercice 2

items_purchase = {"Water": "$1", "Bread": "$3", "TV": "$1,000", "Fertilizer": "$20"}
wallet = "$300"

wallet = wallet.replace('$', '')
wallet = int(wallet)

affordable_items = []


for item, price in items_purchase.items():
    price = price.replace('$', '')
    price = price.replace(',', '')
    price = int(price)
    if price <= wallet:
     affordable_items.append(item)
     print(item,price)



affordable_items.sort()

if not affordable_items:
    print('nothing')
else:
    print(affordable_items)
