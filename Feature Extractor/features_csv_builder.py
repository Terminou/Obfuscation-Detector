from features import *
import os
import csv

# Set the directory you want to list the files from
directory = '../PreprocessedPrograms/PreprocessedNotObfuscated/'
directory2 = '../PreprocessedPrograms/PreprocessedObfuscated/'

# Use the listdir() function to get the list of files
files = sorted(os.listdir(directory), key=str.casefold)[1:]

# Build a list of strings from F1 to F46
fields = []
for i in range(1, 47):
    fields.append('F{}'.format(i))
fields.append('Class')

# Open a file in write mode
with open('features.csv', 'w', newline='') as csv_file:
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
                #TODO: Feature 16 - Number of renamed special JavaScript elements divided by F3
                encoded_chars_ratio(input_file),
                backslash_chars_ratio(input_file),
                pipe_chars_ratio(input_file),
                number_of_array_access(input_file),
                freq_of_common_keyword('break', input_file),
                freq_of_common_keyword('case', input_file),
                freq_of_common_keyword('catch', input_file),
                freq_of_common_keyword('continue', input_file),
                freq_of_common_keyword('do', input_file),
                freq_of_common_keyword('else', input_file),
                freq_of_common_keyword('false', input_file),
                freq_of_common_keyword('finally', input_file),
                freq_of_common_keyword('for', input_file),
                freq_of_common_keyword('if', input_file),
                freq_of_common_keyword('instanceof', input_file),
                freq_of_common_keyword('new', input_file),
                freq_of_common_keyword('null', input_file),
                freq_of_common_keyword('return', input_file),
                freq_of_common_keyword('switch', input_file),
                freq_of_common_keyword('this', input_file),
                freq_of_common_keyword('throw', input_file),
                freq_of_common_keyword('true', input_file),
                freq_of_common_keyword('try', input_file),
                freq_of_common_keyword('typeof', input_file),
                freq_of_common_keyword('var', input_file),
                freq_of_common_keyword('while', input_file),
                freq_of_common_keyword('toString', input_file),
                freq_of_common_keyword('valueOf', input_file),
                freq_of_common_keyword('undefined', input_file),
                meaningful_words_ratio(input_file),
                trigram_words_ratio(input_file),
                'Not-obfuscated'
            ]
        )

# Print the names of the files
for file in files:
    print(file)

# Use the listdir() function to get the list of files
files = sorted(os.listdir(directory2), key=str.casefold)[1:]


# Open a file in write mode
with open('features.csv', 'a', newline='') as csv_file:
    # Create a CSV writer object
    csv_writer = csv.writer(csv_file)
    for file in files:
        input_file = directory2 + file
        try:
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
                    #TODO: Feature 16 - Number of renamed special JavaScript elements divided by F3
                    encoded_chars_ratio(input_file),
                    backslash_chars_ratio(input_file),
                    pipe_chars_ratio(input_file),
                    number_of_array_access(input_file),
                    freq_of_common_keyword('break', input_file),
                    freq_of_common_keyword('case', input_file),
                    freq_of_common_keyword('catch', input_file),
                    freq_of_common_keyword('continue', input_file),
                    freq_of_common_keyword('do', input_file),
                    freq_of_common_keyword('else', input_file),
                    freq_of_common_keyword('false', input_file),
                    freq_of_common_keyword('finally', input_file),
                    freq_of_common_keyword('for', input_file),
                    freq_of_common_keyword('if', input_file),
                    freq_of_common_keyword('instanceof', input_file),
                    freq_of_common_keyword('new', input_file),
                    freq_of_common_keyword('null', input_file),
                    freq_of_common_keyword('return', input_file),
                    freq_of_common_keyword('switch', input_file),
                    freq_of_common_keyword('this', input_file),
                    freq_of_common_keyword('throw', input_file),
                    freq_of_common_keyword('true', input_file),
                    freq_of_common_keyword('try', input_file),
                    freq_of_common_keyword('typeof', input_file),
                    freq_of_common_keyword('var', input_file),
                    freq_of_common_keyword('while', input_file),
                    freq_of_common_keyword('toString', input_file),
                    freq_of_common_keyword('valueOf', input_file),
                    freq_of_common_keyword('undefined', input_file),
                    meaningful_words_ratio(input_file),
                    trigram_words_ratio(input_file),
                    'Obfuscated'
                ]
            )
        except:
            continue

# Print the names of the files
for file in files:
    print(file)