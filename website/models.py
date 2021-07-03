from django.db import models
import datetime

class User(models.Model):
    nome = models.CharField(null=False, max_length=50)
    lastName = models.CharField(null=False, max_length=50)
    phone = models.CharField(null=False, max_length=12)
    email = models.EmailField(null=False, max_length=60)
    dateBirth = models.DateField(null=False)

    def __str__(self):
        return self.nome + " " + self.lastName + " " + self.email


class Coments(models.Model):
    texto = models.CharField(max_length=900)

