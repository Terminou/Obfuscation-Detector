import re
from shannon_entropy import *
import esprima
from statistics import *
import enchant
from nltk.util import ngrams


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
    return bits * 8 / len(data)


# Feature 6 - Average string length
def avg_string_len(path):
    f = open(path)
    data = f.read()
    f.close()
    tokenized = esprima.tokenize(data)
    f.close()
    count = 0
    total_string_len = 0
    for token in tokenized:
        # Check if the token is a string literal
        if token.type == 'String':
            # Increment the counter
            count += 1
            total_string_len += len(token.value)
    if count is 0:
        return total_string_len
    return total_string_len / count


# Feature 7 - Share of chars belonging to a string
def share_of_chars(path):
    # Find the number of chars
    f = open(path)
    data = f.read()
    nr_chars = len(data)

    tokenized = esprima.tokenize(data)
    f.close()

    total_string_len = 0
    for token in tokenized:
        # Check if the token is a string literal
        if token.type == 'String':
            # Increment the counter
            total_string_len += len(token.value)
    return total_string_len / nr_chars


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
def nr_of_eval_calls_ratio(path):
    # Find the number of chars
    f = open(path)
    data = f.read()
    nr_chars = len(data)

    tokenized = esprima.tokenize(data)
    f.close()

    eval_count = 0
    for token in tokenized:
        # Check if the token is a string literal
        if token.type == 'Identifier' and token.value == 'eval':
            # Increment the counter
            eval_count += 1
    return eval_count / nr_chars


# Feature 11 - Average number of chars per function body
def avg_nr_of_chars_per_function_body(path):
    f = open(path)
    data = f.read()
    f.close()
    # Tokenize the JavaScript code
    tokens = esprima.tokenize(data)

    # Initialize a counter for the total number of characters in function bodies and total number of functions
    num_functions = 0
    total_chars = 0

    # Iterate through the tokens
    for token in tokens:
        # If the token represents the start of a function body, start counting characters
        if token.type == 'Punctuator' and token.value == '{':
            num_functions += 1
            char_count = 0
            # Continue counting characters until the end of the function body is reached
            tokens = iter(tokens)
            while True:
                token = next(tokens)
                if token.type == 'Punctuator' and token.value == '}':
                    break
                char_count += len(token.value)
            # Add the character count for this function body to the total
            total_chars += char_count

    # Calculate the average number of characters per function body
    if num_functions is 0:
        return total_chars
    return total_chars / num_functions


# Feature 12 - Share of chars belonging to function bodies
def char_ratio_in_function_bodies(path):
    f = open(path)
    data = f.read()
    f.close()
    # Tokenize the JavaScript code
    tokens = esprima.tokenize(data)

    # Initialize a counter for the total number of characters in function bodies and total number of functions
    num_functions = 0
    total_chars = 0

    # Iterate through the tokens
    for token in tokens:
        # If the token represents the start of a function body, start counting characters
        if token.type == 'Punctuator' and token.value == '{':
            num_functions += 1
            char_count = 0
            # Continue counting characters until the end of the function body is reached
            tokens = iter(tokens)
            while True:
                token = next(tokens)
                if token.type == 'Punctuator' and token.value == '}':
                    break
                char_count += len(token.value)
            # Add the character count for this function body to the total
            total_chars += char_count

    # Calculate the average number of characters per function body
    return total_chars / len(data)


# Feature 13 - Average number of arguments per function
def avg_nr_args_per_function(path):
    f = open(path)
    data = f.read()
    f.close()
    print("Finding", path, "...")
    tree = esprima.parse(data)
    functions = []
    for node in tree.body:
        if node.type == 'FunctionDeclaration':
            functions.append(len(node.params))
    if len(functions) == 0:
        return 0
    else:
        return mean(functions)


# Feature 14 - Number of function definitions divided by F3
def nr_of_func_definitions_ratio(path):
    f = open(path)
    data = f.read()
    f.close()
    tree = esprima.parse(data)
    count = 0
    for node in tree.body:
        if node.type == 'FunctionDeclaration':
            count += 1
    return count / number_of_chars(path)


# Feature 15 - Number of special Javascript elements divided by F3
def nr_of_special_js_elements_ratio(path):
    special_elements = ['eval', 'unescape', 'String.fromCharCode', 'String.charCodeAt', 'window', 'document', 'string',
                        'array', 'object']
    f = open(path)
    data = f.read()
    f.close()
    tree = esprima.parse(data)
    count = 0
    for node in tree.body:
        if node.type == 'ExpressionStatement':
            if node.expression.type == 'CallExpression':
                if node.expression.callee.name in special_elements:
                    count += 1
    return count / number_of_chars(path)


# Feature 16 - Number of renamed special JavaScript elements divided by F3
def renamed_js_elements_ratio(path):
    f = open(path)
    data = f.read()
    f.close()
    ast = esprima.parseScript(data)
    renamed_element_count = 0
    # traverse the AST and look for renamed elements
    for node in ast.body:
        if node.type == "VariableDeclaration":
            for declarator in node.declarations:
                if declarator.id.name in ["this", "super", "arguments"]:
                    renamed_element_count += 1
    return renamed_element_count / number_of_chars(path)


# Feature 17 - Share of encoded characters
def encoded_chars_ratio(path):
    f = open(path)
    data = f.read()
    f.close()
    # Parse the program using esprima
    # tokenize the code using esprima
    tokens = esprima.tokenize(data)

    # initialize the count
    count = 0

    # iterate over the tokens
    for token in tokens:
        # check if the token is a string literal
        if token.type == "String":
            # check if the string has a hexadecimal escape sequence
            match = re.search(r"\\x[0-9A-Fa-f]{2}", token.value)
            if match:
                count += len(token.value)
            else: #check if the string has a encoded pattern
                match = re.search(r"^[A-Za-z0-9+/]+={0,2}$", token.value)
                if match:
                    count += len(token.value)

    # Calculate the share of encoded characters in the program
    encoded_char_share = count / number_of_chars(path)
    return encoded_char_share


# Feature 18 - Share of backslash characters
def backslash_chars_ratio(path):
    f = open(path)
    data = f.read()
    f.close()
    return data.count('\\') / number_of_chars(path)


# Feature 19 - Share of pipe characters
def pipe_chars_ratio(path):
    f = open(path)
    data = f.read()
    f.close()
    return data.count('|') / number_of_chars(path)


# Feature 20 - Number of array accesses using dot or bracket syntax divided by F3
def number_of_array_access(path):
    f = open(path)
    data = f.read()
    f.close()
    parsed = esprima.parse(data, tokens=True)
    array_access_tokens = []
    for token in parsed.tokens:
        if token.type in ['Punctuator', 'Identifier']:
            if token.value in ['.', '[']:
                array_access_tokens.append(token)
    array_access_count = len(array_access_tokens)
    return array_access_count / number_of_chars(path)


# Feature 21 - 45 - Frequency of 25 common JS keywords
def freq_of_common_keyword(keyword, path):
    f = open(path)
    data = f.read()
    f.close()
    parsed = esprima.parse(data, tokens=True)
    count = 0
    for token in parsed.tokens:
        if token.type == 'Keyword' and token.value == keyword:
            count += 1
    return count


# Feature 46 - Meaningful words ratio (checked for  3 languages: ENG, GER, FRA)
def meaningful_words_ratio(path):
    f = open(path)
    data = f.read()
    f.close()
    words = data.split()
    en = enchant.Dict("en_US")
    de = enchant.Dict("de_DE")
    fr = enchant.Dict("fr_FR")

    count_en = 0
    count_de = 0
    count_fr = 0

    for word in words:
        if en.check(word):
            count_en += 1
        if de.check(word):
            count_de += 1
        if fr.check(word):
            count_fr += 1
    return max(count_en, count_de, count_fr) / number_of_chars(path)


# Feature 47 - Trigram words ratio
def trigram_words_ratio(path):
    f = open(path)
    data = f.read()
    f.close()
    # Split the text into a list of tokens
    tokens = data.split()
    # Use the ngrams function to generate the n-grams
    ngrams_list = list(ngrams(tokens, 3))
    return len(ngrams_list) / number_of_chars(path)