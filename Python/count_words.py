file = open("./python_count.txt", "r")
data = file.read()
words = data.split(" ")

print('Number of words in text file :', len(words))