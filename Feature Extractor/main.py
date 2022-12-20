from features import *
input_file = "_stream_transform-obfuscated.js"
input_file3 = "raw_no_example.js"


total_nr_lines = total_number_of_lines(input_file)
print("F1- Total lines:", total_nr_lines)

avg_nr_chars_per_line = avg_number_of_chars_per_line(input_file)
print("F2- Avg # of chars per line:", avg_nr_chars_per_line)

nr_chars_in_script = number_of_chars(input_file)
print("F3- Total chars:", nr_chars_in_script)

ratio_of_thousand_character_line = ratio_of_thousand_character_lines(input_file)
print("F4- Ratio of thousand character line:", ratio_of_thousand_character_line)

shannon_entropy = shannon_entropy_of_file(input_file)
print("F5- Shannon entropy of file:", shannon_entropy)

avg_string_len = avg_string_len(input_file)
print("F6- Average string length of file:", avg_string_len)

share_of_chars_belonging_string = share_of_chars(input_file)
print("F7- Share of chars belonging string:", share_of_chars_belonging_string)

share_of_space_chars = share_of_space_characters(input_file)
print("F8- Share of space characters:", share_of_space_chars)

share_of_comments = share_of_chars_belonging_comments(input_file)
print("F9 - Share of chars belonging comments:", share_of_comments)

nr_eval_calls_divided_by_f3 = nr_of_eval_calls_ratio(input_file)
print("F10 - Number of eval calls divided by F3:", nr_eval_calls_divided_by_f3)

avg_nr_of_chars_per_function_body = avg_nr_of_chars_per_function_body(input_file)
print("F11 - Average number of chars per function body:", avg_nr_of_chars_per_function_body)

char_ratio_in_function_bodies = char_ratio_in_function_bodies(input_file)
print("F12 - Share of chars belonging to function bodies:", char_ratio_in_function_bodies)

avg_nr_of_args_per_func = avg_nr_args_per_function(input_file)
print("F13 - Average number of arguments per function:", avg_nr_of_args_per_func)

nr_func_definitions_ratio = nr_of_func_definitions_ratio(input_file)
print("F14 - Number of function definitions divided by F3", nr_func_definitions_ratio)

nr_of_special_js_elements_ratio = nr_of_special_js_elements_ratio(input_file)
print("F15 - Number of special Javascript elements divided by F3", nr_of_special_js_elements_ratio)