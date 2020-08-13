# https://www.codewars.com/kata/54da539698b8a2ad76000228 - kata description.

def is_valid_walk(walk):
    if (walk.count('n') == walk.count('s') and 
        walk.count('e') == walk.count('w') and
        len(walk) == 10):
            return True
    return False