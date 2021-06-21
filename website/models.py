from django.db import models

class User(models.Model):
    nome = models.CharField(max_length=50)
    email = models.CharField(max_length=40)

    def __str__(self):
        return self.nome