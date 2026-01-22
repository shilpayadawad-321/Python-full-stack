a=float(input("Num1:"))
b=float(input("Num2:"))
c=float(input("Num3:"))
if a>=b and a>=c:
    print("Largest:",a)
elif b>=a and b>=c:
    print("Largest:",b)
else:
    print("Largest:",c)
