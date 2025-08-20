
# daily chalenge functions


matrix = [
    ["7", "i", "i"],
    ["T", "s", "x"],
    ["h", "%", "?"],
    ["i", " ", "#"],
    ["s", "M", " "],
    ["$", "a", " "],
    ["#", "t", "%"],
    ["^", "r", "!"]
]

rows = len(matrix)
cols = len(matrix[0])
decoded_chars = []

for col in range(cols):
    for row in range(rows):
        decoded_chars.append(matrix[row][col])

decoded_message = []
previous_char_alpha = False  

for char in decoded_chars:
    if char.isalpha():
        if previous_char_alpha == False and decoded_message:
            decoded_message.append(" ")  
        decoded_message.append(char)
        previous_char_alpha = True
    else:
        previous_char_alpha = False  

print("".join(decoded_message))
