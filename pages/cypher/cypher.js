def vaildate():
  while True:
    try:
      shift = int(input("Eneter Shift Keys number: "))
      return shift
    except:
      print("Invaild key shift number please try again")
    




def decoded(txt, keyshift):
  aplhabet = "abcdefghijklmnopqrstuvwxyz"
  user = txt.lower()
  ceaser = ""
  try:
    for letter in user:
      index = aplhabet.index(letter)
      encoder = (index-keyshift)% 26 
      encode = aplhabet[encoder]
      ceaser += encode
  except:
    ceaser += letter
  return ceaser



def encoded(txt, keyshift):
  aplhabet = "abcdefghijklmnopqrstuvwxyz"
  user = txt.lower()
  ceaser = ""
  for letter in user:
    try:
      index = aplhabet.index(letter)
      encoder = (index+keyshift)% 26 
      encode = aplhabet[encoder]
      ceaser += encode
    except:
      ceaser += letter
  return ceaser







def main():
  done = False 
  while not done:
    option = input("Encode(E) or Decode(D) a message?: ")
    option = option.lower()
    if option == "e":
      user = input("Enter the sentence or word you would like to encoded: ")
      shift = vaildate()
      encode = encoded(user, shift)
      print(f"Orginal: {user}")  
      print(f"encoded: {encode} ")
    elif option == "d":
      user = input("Enter the sentence or word you would like to decoded:")
      keyshift = input("Do you have a key shift? (y/n): ")
      keyshift = keyshift.lower()
      if keyshift == "n": 
        brute_force = bruteforce(user)
        print(f"Orginal: {user}")
        print(f"All the Possible out come {brute_force}")
      elif keyshift == "y":
        shift = vaildate()
        encode = encoded(user, shift)
        print(f"Orginal: {user}")  
        print(f"encoded: {encode} ")
        done = True 
    else:
      print("Not correct input chose between e or d")

