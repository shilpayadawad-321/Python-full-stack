name=input("Enter Employee Name:")
salary=float(input("Enter salary"))
rating=int(input("Enter performance rating(1-5):"))
if rating==5:
             bonus_percent=0.20
elif rating==4:
             bonus_persent=0.15
elif rating==3:
             bonus_persent=0.10
else:
    bonus_persent=0
bonus=salary*bonus_persent
final_salary=final + bonus
print("Employee:",name)
print("bonus amount:",bonus)
print("Final Salary:",final_salary)
