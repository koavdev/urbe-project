from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Note

# function based views


# retorna um JSON com as rotas da aplicação
@api_view(['GET'])
def getRoutes(request):

    # rotas JSON
    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Retorna uma lista com as notas'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Retorna apenas uma nota única'
        }
    ]
    
    return Response(routes)


# retorna um JSON com as notas criadas
@api_view(['GET'])
def getNotes(request):
    notes = Note.objects.all() # retorna todos as notas do banco de dados
    return Response(notes)