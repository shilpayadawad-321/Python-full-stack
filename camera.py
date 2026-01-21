class Camera:
    def feature1(self):
        print("Camera Feature")


class Phone:
    def feature2(self):
        print("Calling Feature")


class Smartphone(Camera, Phone):
    def feature3(self):
        print("Smartphone Feature")


s = Smartphone()
s.feature1()
s.feature2()
s.feature3()
