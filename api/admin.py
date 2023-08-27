from django.contrib import admin
from .models import Note

# registra os Models no Admin Painel
admin.site.register(Note)
