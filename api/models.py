from django.db import models

class Note(models.Model):

    # texto das notas
    body = models.TextField(null=True, blank=True)

    # data da atualização das notas
    updated = models.DateTimeField(auto_now=True)

    # data da criação das notas
    created = models.DateTimeField(auto_now_add=True)

    # retorna apenas os primeiros 50 caracteres do corpo das notas 
    def __str__(self):
        return self.body[0:50]