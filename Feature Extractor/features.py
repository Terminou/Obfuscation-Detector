from shannon_entropy import *

# Feature 1 - total number of lines
def total_number_of_lines(path):
    f = open(path)
    nr_lines = len(f.readLines())
    f.close()
    return nr_lines


# Feature 2 - avg. # of chars per line
def avg_number_of_chars_per_line(path):
    f = open(path)
    nr_chars = len(f.read())
    f.close()
    total_lines = total_number_of_lines(path)
    return nr_chars / total_lines


# Feature 3 - # of chars in script
def number_of_chars(path):
    f = open(path)
    nr_Chars = len(f.read())
    f.close()
    return nr_Chars


# Feature 4 - % of lines > 1000 chars
def ratio_of_thousand_character_lines(path):
    f = open(path)
    nr_lines = total_number_of_lines(path)
    nr_large_lines = 0 # number of lines having 1000 or more chars
    for line in f.readLines():
        if len(line) >= 1000:
            nr_large_lines += 1
    f.close()
    return nr_large_lines / nr_lines


# Feature 5 - Shannon entropy of the file
def shannon_entropy_of_file(path):
    f = open(path)
    data = f.read()
    bits = shannon_entropy(data)
    return bits / len(data)
