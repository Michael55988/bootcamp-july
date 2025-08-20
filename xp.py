# exercices xp:


# exercice 1:

# def display_message():
#     print('i am learning python')

# display_message()






# exercice 2:

# def fav_book(title):
#     print(f'one of my fav books is {title} ')



# fav_book('Harry Potter')




# exercice 3

# def describe_city(city, country):
#     print(f'{city} is in {country}')

# describe_city('Jerusalem', 'Israel')
# describe_city('Paris' , 'France')





# exercice4

# import random

# def random_number():
    
#     num = random.randint(1, 100)
#     print(f"Your random number is: {num}")
#     num2 = random.randint(1, 100)
#     print(f'your random number is {num2}')

#     if num == num2:
#         print('go buy a loto ticket')
#     else:
#         print(f'next time houya! {num},{num2}')

# random_number()








# exercice5

# def make_shirt(size='Large', message="i love python" ):
#    print(f'the size of the shirt is {size} and the text is {message}') 

# make_shirt()
# make_shirt('XL')
# make_shirt('Medium')
# make_shirt('Small', "ICI C'EST PARIS")
# make_shirt(size='XSmall', message='tuto bene')










# exercice6


# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# def show_magicians(magicians):
    
#     for magician in magicians:
#         print(magician)

# def make_great(magicians):
   
#     for i in range(len(magicians)):
#         magicians[i] = magicians[i] + " the Great"


# make_great(magician_names)


# show_magicians(magician_names)






# exercice7


import random

def advice(temp: float) -> str:
    if temp < 0:
        return "Its freezing! Wear some extra layers today."
    elif temp < 16:
        return "Quite chilly! Dont forget your coat."
    elif temp < 24:
        return "Nice weather."
    elif temp <= 32:
        return "A bit warm, stay hydrated."
    else:
        return "Its really hot! Stay cool."

def season_range_from_month(month: int) -> tuple[float, float]:
   
    if month in (12, 1, 2):       
        return (-10, 10)
    elif month in (3, 4, 5):       
        return (5, 20)
    elif month in (6, 7, 8):       
        return (20, 40)
    elif month in (9, 10, 11):     
        return (10, 25)
    else:
        raise ValueError("Month must be between 1 and 12.")

def get_random_temp(month: int | None = None, as_float: bool = True) -> float:
   
    if month is None:
        low, high = -10, 40
    else:
        low, high = season_range_from_month(month)

    if as_float:
        return random.uniform(low, high)
    else:
        return float(random.randint(int(low), int(high)))

def main():
    month_input = input("Enter a month number (1-12) or press Enter to skip: ").strip()
    month: int | None
    if month_input == "":
        month = None
    else:
        try:
            month = int(month_input)
            if not (1 <= month <= 12):
                print("Month out of range. Proceeding without season (global range).")
                month = None
        except ValueError:
            print("Invalid month. Proceeding without season (global range).")
            month = None

    temp = get_random_temp(month=month, as_float=True)

    print(f"The temperature right now is {round(temp, 1)} degrees Celsius.")

    print(advice(temp))

if __name__ == "__main__":
    main()

