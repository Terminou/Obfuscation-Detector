from features import *
import os
import csv

# Set the directory you want to list the files from
directory = '../PreprocessedPrograms/PreprocessedNotObfuscated/'

f = open(directory + "night-mode-saga.js")
data = f.read()
f.close()
tree = esprima.parseScript(data)

# Use the listdir() function to get the list of files
files = sorted(os.listdir(directory), key=str.casefold)[1:]
for f in files:
    print(f)

# Build a list of strings from F1 to F46
fields = []
for i in range(1, 47):
    fields.append('F{}'.format(i))

# Open a file in write mode
with open('features_no.csv', 'w', newline='') as csv_file:
    # Create a CSV writer object
    csv_writer = csv.writer(csv_file)
    csv_writer.writerow(fields)
    for file in files:
        input_file = directory + file
        csv_writer.writerow(
            [
            total_number_of_lines(input_file),
            avg_number_of_chars_per_line(input_file),
            number_of_chars(input_file),
            ratio_of_thousand_character_lines(input_file),
            shannon_entropy_of_file(input_file),
            avg_string_len(input_file),
            share_of_chars(input_file),
            share_of_space_characters(input_file),
            share_of_chars_belonging_comments(input_file),
            nr_of_eval_calls_ratio(input_file),
            avg_nr_of_chars_per_function_body(input_file),
            char_ratio_in_function_bodies(input_file),
            avg_nr_args_per_function(input_file),
            nr_of_func_definitions_ratio(input_file),
            nr_of_special_js_elements_ratio(input_file),
            backslash_chars_ratio(input_file),
            number_of_array_access(input_file),
            freq_of_common_keyword('while', input_file)
            #meaningful_words_ratio(input_file)
            ]
        )

# Print the names of the files
for file in files:
    print(file)