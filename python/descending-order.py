## DESCRIPTION:
# Your task is to make a function that can take any non-negative integer 
# as an argument and return it with its digits in descending order. 
# Essentially, rearrange the digits to create the highest possible number.

# Examples:
# Input: 42145 Output: 54421
# Input: 145263 Output: 654321
# Input: 123456789 Output: 987654321

def descending_order(num):
    # str_num = str(num)
    # sorteded_num = sorted(str(num), reverse=True)
    # order_str_num = "".join(sorteded_num)
    # return int(order_str_num)

    return int("".join(sorted(list(str(num)), reverse=True)))

### psudo code
# convert num to string
# sort the string as a list in revesrse order
# join the string list into a single string
# convert to int and return