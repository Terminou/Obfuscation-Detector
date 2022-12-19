from shannon_entropy import *
import json


# Feature 1 - total number of lines
def total_number_of_lines(path):
    f = open(path)
    nr_lines = len(f.readlines())
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
    nr_chars = len(f.read())
    f.close()
    return nr_chars


# Feature 4 - % of lines > 1000 chars
def ratio_of_thousand_character_lines(path):
    f = open(path)
    nr_lines = total_number_of_lines(path)
    nr_large_lines = 0  # number of lines having 1000 or more chars
    for line in f.readlines():
        if len(line) >= 1000:
            nr_large_lines += 1
    f.close()
    return nr_large_lines / nr_lines


# Feature 5 - Shannon entropy of the file
def shannon_entropy_of_file(path):
    f = open(path)
    data = f.read()
    f.close()
    bits = shannon_entropy(data)
    return bits / len(data)


# Feature 6 - Average string lenght
def avg_string_len(path):
    f = open(path)
    data = f.read()
    f.close()
    words = data.split()
    average_length = sum(len(word) for word in words) / len(words)
    return average_length


# Feature 7 - Share of chars belonging to a string
def share_of_chars(path_raw, path_ast):
    # Find the number of chars
    f = open(path_raw)
    data = f.read()
    nr_chars = len(data)

    # Load the JSON object from a file or string
    with open(path_ast, 'r') as f:
        tokenized = json.load(f)
    f.close()

    string_count = 0
    for token in tokenized:
        # Check if the token is a string literal
        if token['type'] == 'String':
            # Increment the counter
            string_count += 1
    return string_count / nr_chars


# Feature 8 - Share of space characters
def share_of_space_characters(path):
    f = open(path)
    data = f.read()
    f.close()
    space_count = data.count(" ")
    nr_chars = len(data)
    return space_count / nr_chars


# Feature 9 - Share of chars belonging to comments
def share_of_chars_belonging_comments(path):
    f = open(path)
    data = f.read()
    f.close()
    # Split the code into lines
    lines = data.split("\n")

    # Initialize a counter for the number of characters in comments
    num_chars_in_comments = 0

    # Iterate over the lines
    for line in lines:
        # Trim leading space
        line = line.lstrip()
        # Check if the line is a comment
        if line.startswith("//") or line.startswith("/*") or line.startswith("*"):
            # If it is, add the length of the line to the counter
            num_chars_in_comments += len(line)

    # Calculate the percentage of characters in comments
    comment_share = num_chars_in_comments / len(data)

    return comment_share


# Feature 10 - Number of eval calls divided by F3
def nr_of_eval_calls_ratio(path_raw, path_ast):
    # Find the number of chars
    f = open(path_raw)
    data = f.read()
    nr_chars = len(data)

    # Load the JSON object from a file or string
    with open(path_ast, 'r') as f:
        tokenized = json.load(f)
    f.close()

    eval_count = 0
    for token in tokenized:
        # Check if the token is a string literal
        if token['type'] == 'Identifier' and token["value"] == 'eval':
            # Increment the counter
            eval_count += 1
    return eval_count / nr_chars
