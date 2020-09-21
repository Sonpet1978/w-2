const sentence = (['\r|  ', '\r/  ', '\r-  ', '\r|   ']);

for (const char in sentence) {
  setTimeout(() => {
    process.stdout.write(sentence[char]);
  }, 100 + char * 100);
};