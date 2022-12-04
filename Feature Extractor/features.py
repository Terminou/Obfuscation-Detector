def total_number_of_lines(file_list, path):
    for data in file_list:
        f = open(path + data)
        nr_lines = len(f.readlines())
        print(data, "-", "Total lines", nr_lines)
