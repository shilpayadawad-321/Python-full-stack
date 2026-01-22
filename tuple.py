course=("Python",3,12500,12500)
print(course[1])
print(course[-1])
print(course[0:2])
print(course.count(12500))
print(course.index(3))
print(course)
cou=list(course)
cou.pop()
course=tuple(cou)
print(course)
3
12500
('Python', 3)
2
1
('Python', 3, 12500, 12500)
('Python', 3, 12500)
