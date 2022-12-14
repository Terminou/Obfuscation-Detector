from features import  *
input_file = "raw_o_example.js"

total_nr_lines = total_number_of_lines(input_file)
print("Total lines:", total_nr_lines)

avg_nr_chars_per_line = avg_number_of_chars_per_line(input_file)
print("Avg # of chars per line:", avg_nr_chars_per_line)

nr_chars_in_script = number_of_chars(input_file)
print("Total chars:", nr_chars_in_script)

ratio_of_thousand_character_line = ratio_of_thousand_character_lines(input_file)
print("Ratio of thousand character line:", ratio_of_thousand_character_line)

shannon_entropy = shannon_entropy_of_file(input_file)
print("Shannon entropy of file", shannon_entropy)

